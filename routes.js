const router=require('express').Router();
const controller=require('./controller');

router.post('/short',controller.shortUrl);

router.post('/custom',controller.customUrl);

router.get('/:shortUrl',controller.redirectUrl);

module.exports=router;