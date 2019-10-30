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

      const writtenContent = await newPost.save();
      res.json(writtenContent);
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  }
);

// GET api/posts | get all posts | private
router.get('/', auth, async (req, res) => {
  try {
    const writtenContent = await WrittenContent.find().sort({ date: -1 });
    res.json(writtenContent);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

// GET api/posts/:id | get single post | private
router.get('/:id', auth, async (req, res) => {
  try {
    const writtenContent = await WrittenContent.findById(req.params.id);

    if (!writtenContent) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(writtenContent);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).json('Server Error');
  }
});

// DEL api/post/:id |
router.delete('/:id', auth, async (req, res) => {
  try {
    const writtenContent = await WrittenContent.findById(req.params.id);

    if (!writtenContent) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    // check if user wrote the piece of content
    if (writtenContent.user.toString() !== req.user.id) {
      return res.status(401).json("You cannot delete other users' posts");
    }
    await writtenContent.remove();

    res.json({ msg: 'Post Deleted' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Post not found' });
    }
    res.status(500).json('Server Error');
  }
});

module.exports = router;
