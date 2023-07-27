const mongoose = require('mongoose')

const local_url="mongodb://127.0.0.1:27017/expressproject"
const live_url ="mongodb+srv://jainprasoon835:prasoon123@cluster0.o2d2iqp.mongodb.net/bestschool?retryWrites=true&w=majority"

const connectDb = () =>{

    return mongoose.connect("mongodb://127.0.0.1:27017/expressproject")
    .then(()=>{
        console.log("connected succesfully");
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports= connectDb