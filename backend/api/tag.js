import {Router} from 'express';

import {tagDAO} from '../dao/tagDAO';

const router = Router();

router.post('/',async (req,res)=>{
    
    let tag = req.body.tag;
    let dao = new tagDAO();
    
    dao.insertInto(tag);
    
    // dao.readbyid(tag).then((d)=>{
    //     if(d === undefined){
    //         dao.insertInto(tag);
    //     }
    //     else{
    //         res.send('tag já cadastradas')
    //     }
    // })

   
    
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