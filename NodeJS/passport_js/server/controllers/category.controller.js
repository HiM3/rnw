const { Category } = require("../models/category.model")

exports.store = async (req, res) => {
    const { name } = req.body

    const existName = await Category.findOne({ name })
    if (existName) {
        res.json({
            success: false,
            message: "Category Already Exist"
        })
    } else {
        await Category.create({ name })
            .then((result) => {
                res.json({
                    success:true,
                    message:"Category added"
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

exports.index  = async (req,res)=>{
    await Category.find()
    .then((result)=>{
        res.json({
            success:true,
            category:result
        })
    })
    .catch((err)=>console.log(err))
}