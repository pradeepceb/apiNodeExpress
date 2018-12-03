import * as express from 'express';
const app=express();
const bodyParser=require('body-parser');
import * as cors from 'cors';
import {DB} from '../src/app/config/db_config';
import {userRoutes} from '../src/app/routes/userRoutes';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());

//All User Routes
app.use('/users',userRoutes);



app.listen(4400);
console.log("Running")
DB.connect((err)=>{
    if(err){
        console.log("Database Not Connected")
    }
    else{
        console.log("Database  Connected")
    }
})
app.get('/',(req,res)=>{
    res.send("Welcome to Node Express MySQL Using Typescript");
})
