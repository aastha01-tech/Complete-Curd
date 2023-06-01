const express = require('express');
const multer = require('multer');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const Student = require('./db/Student');
const app = express();
const PORT = process.env.PORT || '5000'


app.use(express.json());
app.use(cors());

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'./../crud/public/uploads')
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("image");
app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save()
    //resp.send("app is is working...!");
    result = result.toObject();
    delete result.password;
    resp.send(result)
})
app.get('/showuser',async(req,res)=>{
    let user = await User.find()
    res.send(user)
})
app.post("/showadmin", async (req, resp) => {
    const email = req.body.email;
    if (!email) {
      console.log("invalid email");
      return;
    }
  
    const user = await User.findOne({ email });
    if (!user) {
      resp.send({ result: "No Records found" });
      return;
    }
  
    resp.send(user);
  });
  
  app.put("/showadmin/:id", async (req, resp) => {
    let id = req.params.id;
    let o_password = req.body.oldPassword;
    const c_password = req.body.newPassword;
    const user = await User.findOne({ _id: id });
    if (!user) {
      resp.send({ error: "Invalid old password" });
      return;
    }
    else if(user.password == o_password){
        await User.updateOne({ _id: id }, { $set: {password: c_password } });
        resp.send({ success: "Password changed successfully" });
    }
    else{
        resp.send('fegrhtyfng');
    } 
  });
  
app.post("/login", async (req, resp) => {
    //resp.send(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "No User Found" })
        }
    } else {
        resp.send({ result: "No User Found" })
    }

})

app.post('/create',upload,async(req,res)=>{
    let image=req.file.filename;
    let name=req.body.name;
    let email=req.body.email;
    let address=req.body.address;
    let contact=req.body.contact;
    let mobile=req.body.mobile;
    let branch=req.body.branch;
    let technology=req.body.technology;
    let gender=req.body.gender;
  let data = new  Student({
      name:name,
      email:email,
      address:address,
      contact:contact,
      mobile:mobile,
      branch:branch,
      image:image,
      technology:technology,
      gender:gender

  })
  let result = await data.save()
      res.send(result);
})

app.get("/show",async (req,resp)=>{
    let student = await Student.find();
    if(student.length>0){
        resp.send(student)
    }else{
        resp.send({result:"No Products found"})
    }
})

app.delete("/show/:id",async (req,resp)=>{
    const result = await Student.deleteOne({_id:req.params.id});
    resp.send(result);
});

app.get("/show/:id", async (req,resp)=>{
    let result = await Student.findOne({_id:req.params.id});
    if(result){
        resp.send(result)
    }else{
        resp.send({result:"No Record found"})
    }
});
app.put("/show/:id",async (req,resp)=>{
    let result = await Student.updateOne(
        {_id: req.params.id},{$set : req.body}
    ) 
    resp.send(result)
});
app.get('/search/:key',async(req,res)=>{
    let result = await Student.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {address:{$regex:req.params.key}}

        ]
    })
    res.send(result)
})
app.listen(PORT,(req,res)=>{
    console.log('server started')
});
