const express=require('express');
const {engine}=require('express-handlebars');
const bodyParser=require('body-parser');
const path=require('path');
const dotenv=require('dotenv');
const mysql=require("mysql");
const tasksRoutes=require('./routes/tasks');

dotenv.config({path:'./.env'});
const connection = require("express-myconnection")
const dbOptions = {
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
};

const app=express();
app.set('port',30000);

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

app.set('views',__dirname+'/views');
app.engine('.hbs',engine({
    extname:'.hbs'
}))
app.set('view engine','hbs');

const mysql=require("mysql");
const db=mysql.createConnection({
        host:process.env.DATABASE_HOST,
        user:process.env.DATABASE_USER,
        password:process.env.DATABASE_PASSWORD,
        database:process.env.DATABASE
});
db.connect((error)=>{
if(error){
    console.log(error)
}
else{
    console.log("connected")
}
})



app.listen(app.get('port'),()=>{
console.log('Server is running at port' ,app.get('port'));

});

app.use('/',tasksRoutes);

app.get('/',(req,res)=>{
    res.render('home');
});