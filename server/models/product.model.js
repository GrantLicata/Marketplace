const Product = require('../models/product.model')
const User = require('../models/user.model')

module.exports = {

    //Gather a list of all products.
    getAllProducts: (req,res)=>{
        Product.find().sort({createdAt:-1})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    getOneProduct: (req,res)=>{
        Product.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    addProduct: async (req,res)=> {
        try{
            console.log(req.body)
            const newProduct = new Product(req.body);
            await newProduct.save();
            const productCreator = await User.findById({_id: newProduct.creator});
            // let creatorPush = productCreator.products.push(newProduct);
            let productArray = productCreator.products
            // await productCreator.updateOne()
            // await productCreator
            await productCreator.updateOne({_id: newProduct.creator, products:[...productArray, newProduct]});
            res.status(200).json({success:true, data:newProduct, user:newProduct.creator.username});
        } catch(err){
            console.log(err);
            res.status(400).json(err);
        }
    },
        // // console.log(req.body)
        // Product.create(req.body)
        // .then((result)=>{
        //     // console.log(result)
        //     res.json(result)
        // })

    updateProduct:(req,res)=>{
        Product.updateOne({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    deleteProduct:(req,res)=>{
        Product.deleteOne({_id:req.params.id})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

    findUser: (request,response) => {
        Product.find({creator:request.params.id})
        .then(products => {
            response.json(products)
        })
        .catch(error => {
            console.log(error)
            response.status(400).json(error)
        })
    }

}