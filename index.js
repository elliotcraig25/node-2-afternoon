const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const pro_ctrl = require('./products_controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((dbInstance)=>{
    app.set('db', dbInstance)
}).catch((err)=>
    console.log(err)
)

app.post(`/api/products`, pro_ctrl.create)

app.get(`/api/products`, pro_ctrl.getAll)

app.get(`/api/products/:id`, pro_ctrl.getOne)

app.put(`/api/products/:id`, pro_ctrl.update)

app.delete(`/api/products/:id`, pro_ctrl.delete)

port = process.env.PORT || 3000
app.listen(port, ()=>{console.log(`listening on port ${port}`)})