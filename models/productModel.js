import mongoose from "mongoose";

// Modelos para crear tablas en la base de datos 
const productSchema = mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }

}, {
    // Para fecha de creación del producto y registro
    timestamps: true,
});

// Acá exportamos el modelo para ser usado en otras dependencias
const Product = mongoose.model("Product", productSchema);
export default Product;