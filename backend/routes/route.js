const express=require('express');
const router = express.Router();

const Contact = require('../models/contacts');
router.get('/contacts',(req,res,next)=>{
    // res.send("retrieving the contact list:");
    Contact.find(function(err,contacts)
    {
        res.json(contacts);
    })
});

router.post('/contact',(req,res,next)=>{
    // res.send("retrieving the contact list:");
    let newContact=new Contact(
        {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            phone:req.body.phone,
        }
    );
    newContact.save((err,contact)=>{
        if(err)
        {
            res.json({"msg":"failed to add connect"});
        }
        else{
            res.json({"msg":"Data saved successfully."});
        }
    })
});

router.delete('/contact/:id',(req,res,next)=>{
    // res.send("retrieving the contact list:");
    Contact.remove({'_id':req.params.id},function(err,result)
    {
        console.log("-------------------------------------");
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});
module.exports=router;


// Todos.findByIdAndRemove(req.body.id, function(err) {
//     if (err) throw err;
//     res.send('DATA delete operation Success');
//     // res.send('Success');
// })