const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/marketplace', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(( ) => {
    console.log('Connected to Marketplace Database')
}).catch((err) => {
    console.log(err)
})