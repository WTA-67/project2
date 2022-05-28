const express=require('express');
const TaskController=require('../controllers/TaskController');

const router=express.Router();

router.get('/index',TaskController.index);
router.get('/create',TaskController.create);
router.post('/create',TaskController.store);

module.exports=router;