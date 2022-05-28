const connection = require("express-myconnection");
function index(req,res){
    res.render('tasks/index');

}
function create(req,res){
    res.render('tasks/create');

}
function store(req,res){
    
    const data=req.body;
    console.log(data);
    db.connect((error)=>{
if(error){
    console.log(error)
}
else{
    console.log("connected")
}
})



    res.render('tasks/create')
    

}

module.exports={
    index:index,
    create:create,
    mytasks: mytasks,
}