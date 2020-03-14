import {Router} from 'express';

import {tagDAO} from '../dao/tagDAO';

const router = Router();

router.post('/',async (req,res)=>{
    
    let tag = req.body.tag;
    let dao = new tagDAO();
    
    await dao.insertInto(tag).then(()=>{

    }).catch((a)=>{
        console.log(a);
    })
    console.log(tag);
    // try{
    //     await dao.readbyid(tag).then(async(d)=>{
    //         if(d === undefined){
    //             await dao.insertInto(tag);
    //         }
    //         }).catch((a)=>{
    //         })
    //     res.send('tag cadastrada');
    // }catch(err){
    //     res.send(err);
    // }
})

router.get('/all',async (req,res)=>{
    let dao = new tagDAO;

    let result = await dao.readAll();

    res.status(200).send(JSON.stringify(result));

});

router.get('/', function (req, res) {
    res.send('Hello World!')
});


export default router