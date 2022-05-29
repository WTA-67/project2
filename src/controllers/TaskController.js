
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
            console.log("Save");
            console.log(result);
          //   res.render('tasks/index',{tasks:[{id :1,title:"hello"}]});
            res.render('tasks/index',{tasks:result});
        }


      });
    });
    
    
}
function create(req,res){
   
    
    res.render('tasks/create');
    

}
function store(req,res){
    
    const data=req.body;
    console.log(data);

   let values = 
    [
        [data.Book_name,data.Author_Name,data.Publication_Date,data.Rack_Number]
    ];
    req.getConnection(function(err,db)
    {
              db.query("insert into users (Book_name,Author_Name,Publication_Date,Rack_Numbe)  values?",[values],function(err,result)
      {
          if(err)
          {
              console.log(err);
              return err
          } 
          else{
            console.log("connectedd1");
              console.log(result);
          }

      });
   
    });
        
        
        
  
        
        
        
    res.render('tasks/create')
    

}

module.exports={
    index:index,
    create:create,
   store: store,
}