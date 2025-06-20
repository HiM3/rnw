

const { SubCategory } = require("../models/subcategory.model")

exports.store = async (req, res) => {
    const { cat_id, sub_cat } = req.body

    const existName = await SubCategory.findOne({ sub_cat, cat_id })
    if (existName) {
        res.json({
            success: false,
            message: "SubCategory Already Exist"
        })
    } else {
        await SubCategory.create({ cat_id, sub_cat })
            .then(() => {
                res.json({
                    success: true,
                    message: "SubCategory added"
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

exports.index = async (req, res) => {
    ///////// simple way ///////

    // await SubCategory.find({},{__v:0}).populate('cat_id')

    //// excluded fields 

    // await SubCategory.find({},{__v:0}).populate({
    //     path:'cat_id',
    //     select: '-__v -createdAt -updatedAt'
    // })

    ///////////// included fields
     await SubCategory.find({},{__v:0}).populate({
        path:'cat_id',
        select: 'name'
    })
        .then((result) => {
            res.json({
                success: true,
                records: result
            })
        })
        .catch((err) => console.log(err))
}