const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/marketplace', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(( ) => {
    console.log('Connected to CookBook DB')
}).catch((err) => {
    console.log(err)
})