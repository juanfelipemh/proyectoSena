// Acá creamos el modelo controlador de productos. Esto conecta con la base de datos y realiza las operaciones necesarias para la operación

import Product from "../models/productModel.js";

// Obtiene todos los datos y los envía a la vista completos
export const getProductController = async (req, res) => {
    try {

        const products = await Product.find();
        res.status(200).send(products);
        
    } catch (error) {
        console.log(error);        
    }
};

// Para agregar productos
export const addProductController = async (req, res) => {
    try {

        const newProducts = new Product(req.body);
        await newProducts.save();
        res.status(200).send("Products created Sucessfully");
        
    } catch (error) {
        console.log(error);        
    }  

};

// Para actualizar
export const updateProductController = async (req, res) => {
    try {

        await Product.findOneAndUpdate({_id: req.body.productId}, req.body, {new: true});
        res.status(201).json("Product updated succesfully");
        
    } catch (error) {
        res.status(400).send(error);
        console.log(error);        
    }  
};

// Para eliminar
export const deleteProductController = async (req, res) => {
    try {

        await Product.findOneAndDelete({_id: req.body.productId});
        res.status(200).json("Product deleted succesfully");
        
    } catch (error) {
        res.status(400).send(error);
        console.log(error);        
    }  
};