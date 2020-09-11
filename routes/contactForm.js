const express = require('express');
const router = express.Router();

const {
  contactForm,
  list,
  read,
  contactById,
} = require('../controllers/contactForm');
const { contactSignupValidator } = require('../validator/contact');

router.post('/contact', contactSignupValidator, contactForm);
router.get('/contact/list', list);

router.get('/contact/:contactId', read);

router.param('contactId', contactById);

router.post('/my/webhook/subscription/', async (req, res) => {
  var event = req.body;

  if (event) {
    console.log("I just received an event from paystack")
  }else{
    console.log("I did not received an event from paystack")
  }
 
  res.status(200).send({event});
});

module.exports = router;
