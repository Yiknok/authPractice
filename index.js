const express = require ('express');
const mongoose = require ('mongoose');
const authRouter = require ('./authRouter')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use('/auth', authRouter)

  async function start() {
  try{
    await mongoose.connect('mongodb+srv://root:root@cluster0.gvgjy.mongodb.net/test_task',{
      useNewUrlParser: true,
    })
    app.listen(PORT, ()=>console.log(`Server has started on ${PORT} port`))
  }catch(err){
    console.log(err);
  }
}

start();