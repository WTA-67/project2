const express=require('express');
const {engine}=require('express-handlebars');
const bodyParser=require('body-parser');
const path=require('path');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'});

const app=express();
app.set('port',8081);

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

app.get('/',(req,res)=>{
    res.render('home');
});