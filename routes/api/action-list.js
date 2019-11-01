const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const ActionList = require('../../models/ActionList');

// POST api/written-content/
router.post(
  '/',
  [
    check('title', 'You must have a title.')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newActionItem = new ActionList({
      title: req.body.title,
      isComplete: false
    });

    const actionItem = await newActionItem.save();
    res.json(actionItem);
  }
);

// GET api/action-list | get all action list items | private
router.get('/', async (req, res) => {
  try {
    const actionList = await ActionList.find().sort({ date: -1 });
    res.json(actionList);
  } catch (err) {
    console.error(err.message);
    res.status(500).json('Server Error');
  }
});

// DEL api/action-list/:id |
router.delete('/:id', async (req, res) => {
  try {
    const actionList = await ActionList.findById(req.params.id);

    if (!actionList) {
      return res.status(404).json({ msg: 'Action item not found' });
    }
    // check if user wrote the piece of content
    await actionList.remove();

    res.json({ msg: 'Action item Deleted' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Action item not found' });
    }
    res.status(500).json('Server Error');
  }
});

module.exports = router;
