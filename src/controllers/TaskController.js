const connection = require("express-myconnection");
function index(req,res){
    res.render('tasks/index');

}
function create(req,res){
    console.log(req);
    res.send("hello word")
    res.render('tasks/create');

}
function mytasks(req,res){
    res.render('tasks/mytasks');

}

module.exports={
    index:index,
    create:create,
    mytasks: mytasks,
}