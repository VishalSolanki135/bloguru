var express = require('express');
var router = express.Router();

const ctrlIndex = require("../controllers/index");

router.get('/', ctrlIndex.getHomePage);
router.get('/post_refer/:postid', ctrlIndex.getBLogPost);
router.get('/about', ctrlIndex.getAboutPage);
router.get('/contact', ctrlIndex.getContactPage);
router.get('/filter', ctrlIndex.getFilteredList);
router.get('/404', ctrlIndex.get404);

router.get('*', ctrlIndex.redirect404);

module.exports = router;
