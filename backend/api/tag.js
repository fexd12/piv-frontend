import {Router} from 'express';

import tagDAO from '../dao/tagDAO';

const router = Router();

router.get(('/:tag',async (req,res)=>{
    let tag = req.params.tag;
    let dao = new tagDAO();
    await dao.insertInto(tag);

}))

export default router