// import mongoose from 'mongoose';

const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDB = require('./model/fake-db');

async () => {
    await mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    }).then(
        () => {
            const FakeDB = new FakeDB()
            FakeDB.seeDB()
        }
    )
}

const app = express()

app.get('/products', function(req, res){
    res.json({'success': true});
})

const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('I am running!');
})

//mongodb+srv://yoshihiko_sugiyama:<password>@cluster0.cwpzj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority