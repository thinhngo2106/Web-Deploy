import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';


const userRouter = express.Router()



userRouter.get('/seed', async(req,res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});   
})


userRouter.get('/', 
    expressAsyncHandler(async (req, res) => {
        const pageSize = 10;
        const page = req.query.page >= 0 ? req.query.page : 0;
        const name = req.query.name || '';

        const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
        const count = await User.count({
            ...nameFilter,
        })

        const users = await User.find({
            ...nameFilter,
        })
        .skip(pageSize * (page - 1))
        .limit(pageSize);

        res.send({ users, pages: Math.ceil(count / pageSize) });
}))

export default userRouter;