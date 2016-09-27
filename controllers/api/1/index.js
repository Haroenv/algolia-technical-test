const express = require('express');
const router = new express.Router();

// post a new Object to Algolia
router.post('/apps', function (req, res) {
  // todo: post to Algolia
  res.send('Cow, Horse, Sheep');
});

// delete a certain id from Algolia
router.delete('/apps/:id', function (req, res) {
  // todo: delete from Algolia
  res.send(req.params.id);
});

module.exports = router;
