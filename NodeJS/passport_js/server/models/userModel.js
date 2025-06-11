const { Schema, model } = require("mongoose");
const { common } = require("./common");

const userSchema = new Schema({
    name: common,
    email: {
        ...common,
        unique:false
    },
    password:common,
    token:{
        ...common,
        required:false
    }
},
    {
        timestamps: true
    })

const User = model('User', userSchema)

module.exports = User