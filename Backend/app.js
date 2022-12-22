const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express =require("express");
const cors =require("cors");
const app =express();
app.use(cors());
dotenv.config({path:'./config.env'});
app.use(express.json());

//router
app.use(require('./router/auth'));
const DB=process.env.DBPATH;
const PORT=process.env.PORT;
mongoose.connect(DB).then(()=>{console.log('connection successful');
}).catch((err)=>{console.log(err)});

//schemas
const User=require('./models/userSchema');
//routes
// app.use(middleware);
//  app.get('/',(req, res)=>{
//      res.send('Hello World from server ');
//  });
//  app.get('/about',middleware, (req, res)=>{
//     res.send('Hello About World from server ');
// });
 app.listen(PORT,()=>{
      console.log('Server Started');
 })
