const express = require('express');
const router = express.Router();
const request = require('request-promise-native')
const parseXML = require('../utils/parseXML')

// Home page route.
router.get('/:field', async function (req, res) {
  console.log(`Watching field: ${req.params.field}`)
  let xmlString = ''
  try {
    xmlString = await request(process.env.AIR_QUALITY_URL)
  }
  catch (e) {
    res.send(500, e)
  }
  
  req.cache.set(req.params.field, 'a value')
  res.send('Wiki home page');
})

// About page route.
router.get('/about', async function (req, res) {
  console.log(req.cache.get('a key'))
  res.send('About this wiki');
})

module.exports = router;