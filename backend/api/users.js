import {Router} from 'express';

import {usersDAO} from '../dao/usersDAO';

const router = Router();

router.get('/all',async(req,res)=>{
    let dao = new usersDAO();

    await dao.readAll().then((result)=>{
        //console.log(result);
        res.status(200).send(JSON.stringify(result));
    }).catch((a)=>{
        //console.log(a);
        res.send(a)
    })
    
});

router.get('/userstag',async(req,res)=>{
    let dao = new usersDAO();
    await dao.readUsersTags().then((result)=>{
        res.status(200).send(JSON.stringify(result))
    }).catch((a)=>{
        res.send(a)
    })

});

export default router