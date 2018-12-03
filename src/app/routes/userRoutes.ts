import * as express from 'express';
export const userRoutes=express.Router();
import {DB} from '../config/db_config';

import {TBL_USER} from '../config/constants'


userRoutes.route('/getAllUsers').get((req,res)=>{
    DB.query('Select * from '+TBL_USER,(err,results,fields)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json({
                status:'ok',
                data:results
            })
        }
    })
})

userRoutes.route('/addUser').post((req,res)=>{
    DB.query('insert into '+TBL_USER+' (description,type,issuer) values(?,?,?)',[req.body.description,req.body.type,req.body.issuer],function(err,results,fields){
        if(err){
            res.json(err)
        }
        else{
            res.json({
                status:'ok',
                data:'SuccessFully Inserted',
                fields:fields
            })
        }
    })
})
