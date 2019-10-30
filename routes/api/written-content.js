const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const WrittenContent = require('../../models/WrittenContent');
const Profile = require('../../models/Profile');

// POST api/written-content/

router.post(
  '/',
  [
    auth,
    check('title', 'You must have a title.')
      .not()
      .isEmpty(),
    check('content', 'Your content cannot be blank.')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = new WrittenContent({
        user: req.user.id,
        title: req.body.title,
        content: req.body.content
      });

      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  }
);

module.exports = router;
