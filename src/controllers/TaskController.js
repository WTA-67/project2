
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
        [data.Bookname,data.AuthorName,data.PublicationDate,data.RackNumbe]
    ];
    req.getConnection(function(err,db)
    {
        db.query("insert into users (Bookname,AuthorName,PublicationDate,RackNumbe) values?",[values],function(err,result)
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