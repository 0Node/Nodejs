const express = require('express')
const path = require('path')
const app = express();
const port = 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.post('/contact', (req, res) => {
   if(!req.body.name){
    return res.status(400).send('Name is required');
   }
   
   //DATA STUFF
   res.status(201).send(`Thank you ${req.body.name}`)
});

app.post('/login', (req, res) => {
    if(!req.header('x-auth-token')){
        return res.status(400).send('No Token!')
        }
    if(req.header('x-auth-token') == '123456'){
        return res.status(401).send('Not authorised!')
    }
    res.send('Logged in:)')
});

app.put('/post/:id', (req,res) => {
//DATADASE STUFF

res.json({
    id:req.params.id,
    title:req.body.title
})
})

app.delete('/delete/:id', (req,res) => {
    //DATADASE STUFF
    res.json({ msg: `The post ${req.params.id} has been deleted`})
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
