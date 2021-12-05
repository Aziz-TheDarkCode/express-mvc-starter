const app = require('./app')
require('dotenv').config()
app.listen(process.env.PORT || 3000 ,() =>{
    console.log(`Your app serve on https//:localhost:${process.env.PORT || 3000}`);
})