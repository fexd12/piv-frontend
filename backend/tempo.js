import 'use strict';
import {Router} from 'express';
import requests from 'requests';

const router = Router();

let apiKey = "";
let cidade;
//let url = `api.openweathermap.org/data/2.5/weather?zip=${94040},br`

router.get('/',async(req,res)=>{
    requests(url, function(err,response,body){

    });
});

export default router;