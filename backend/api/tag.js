import {Router} from 'express';

import tagDAO from '../dao/tagDAO';

const router = Router();

router.post('/:tag',async (req,res)=>{
    let tag = req.params.tag;
    let dao = new tagDAO();
    
    await dao.readbyid(tag).then(async (d)=>{
        if(d === undefined){
            await dao.insertInto(tag);
        }
    })
    res.status(200).send("text");
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