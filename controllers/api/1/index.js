const express = require('express');
const algoliasearch = require('algoliasearch');

const router = new express.Router();
var client = algoliasearch('XCG7JJBBFK', process.env.ALGOLIA_API_KEY);
var index = client.initIndex('appstore');

// post a new Object to Algolia
router.post('/apps', (req, res) => {
  try {
    const body = JSON.parse(req.body);
    index.addObject(body, (err, content) => {
      if (err) {
        res.send(err);
      }
      res.header('Content-Type', 'application/json');
      res.send(content);
    });
  } catch (err) {
    res.send(err);
  }
});

// delete a certain id from Algolia
router.delete('/apps/:id', (req, res) => {
  index.deleteObject(req.params.id, err => {
    if (err) {
      res.header('Content-Type', 'application/json');
      res.send(err);
    }
    res.send('deleted ' + req.params.id);
  });
});

module.exports = router;
