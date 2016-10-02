const express = require('express');
const algoliasearch = require('algoliasearch');

const router = new express.Router();
var client = algoliasearch('XCG7JJBBFK', process.env.ALGOLIA_API_KEY);
var index = client.initIndex('appstore');

// post a new Object to Algolia
router.post('/apps', (req, res) => {
  try {
    index.addObject(req.body, (err, content) => {
      if (err) {
        res.json(err);
      }
      res.json(content);
    });
  } catch (err) {
    res.json(err);
  }
});

// delete a certain id from Algolia
router.delete('/apps/:id', (req, res) => {
  index.deleteObject(req.params.id, err => {
    if (err) {
      res.json(err);
    }
    res.send('deleted ' + req.params.id);
  });
});

module.exports = router;
