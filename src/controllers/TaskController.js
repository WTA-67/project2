
function index(req,res){
    req.getConnection(function(err,db)
    {
       db.query("Select * from users",[],function(err,result)
      {
          if(err)
          {
            console.log(err);
            return err
        }
        else{
           
          //   res.render('tasks/index',{tasks:[{id :1,title:"hello"}]});
            res.render('tasks/index',{tasks:result});
        }


      });
    });
    
    
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