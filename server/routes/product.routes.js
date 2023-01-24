const ProductController = require('../controllers/product.controller')
const {authenticate, isLoggedIn} = require('../config/jwt.config')

module.exports = (app) => {
    app.get('/api/allProducts', ProductController.getAllProducts)
    app.get('/api/product/:id', ProductController.getOneProduct)
    app.post('/api/addProduct', authenticate, ProductController.addProduct)
    app.get('/api/product/user/:id', authenticate, ProductController.findUser)
    app.put('/api/update/:id', authenticate, ProductController.updateProduct)
    app.delete('/api/delete/:id', authenticate, ProductController.deleteProduct)
}