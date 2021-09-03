var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();

const route=require('./routes/route');
const { connect } = require('./routes/route');

// connection to database
mongoose.connect('mongodb://localhost:27017/crud');

mongoose.connection.on('connected',()=>{
    console.log("connected to the database");
})

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log("errror in conection ,"+err);
    }
    else
    {console.log("error in the db connection.....");}
 
})
//port no
const port=3000;

// adding middleware -cors
app.use(cors());



//body parser
app.use(bodyparser.json());


// routes
app.use('/api',route);

//static files
app.use(express.static(path.join(__dirname,'public')));


//testing server
app.get('/',(req,res)=>{
    res.send("foobar");
});

app.listen(port,()=>{
    console.log("server started at port:"+port);
});

