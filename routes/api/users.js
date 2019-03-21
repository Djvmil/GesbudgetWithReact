const express = require("express");
const router = express.Router();
const app = express();
const cors = require('cors');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");


// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

const Transaction = require("../../models/Transaction");
app.use(cors());
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        name1: req.body.name1,
        username: req.body.username,
        budget: req.body.budget,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});


router.route('/listUsers').get(function(req, res) {
   User.find(function(err, users) {
       if (err) {
           console.log(err);
       } else {
           res.json(users);
       }
   });
});

router.route('/addTransaction').post(function(req, res) {
    let transaction = new Transaction(req.body);
    transaction.save()
        .then(transaction => {
            res.status(200).json({'transaction': 'transaction added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new transaction failed');
        });
});

router.route('/transactions').get(function(req, res) {
   Transaction.find(function(err, transactions) {
       if (err) {
           console.log(err);
       } else {
           res.json(transactions);
       }
   });
});

router.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

router.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send('user is not found');
        else
            user.budget = req.body.budget;
            user.save().then(user => {
                res.json('user updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          name1: user.name1,
          budget: user.budget,
          username: user.username, 
          email: req.body.email
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});




module.exports = router;
