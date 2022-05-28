const connection = require("express-myconnection");
function index(req,res){
    res.render('tasks/index');

}
function store(req,res){
    
    const data=req.body;
    console.log(data);
    req.getConnection(function(err,db)
    {
      db.query("Select * from users")
    });
        
        
        
    res.render('tasks/create')
    

}

module.exports={
    index:index,
    create:create,
    mytasks: mytasks,
}