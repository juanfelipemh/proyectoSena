import mongoose from "mongoose";

// Modelos para crear tablas en la base de datos 
const billsSchema = mongoose.Schema({

    customerName:{
        type: String,
        required: true,
    },
    customerPhone: {
        type: String,
        required: true,
    },
    customerAddress: {
        type: String,
        required: true,
    },
    subTotal:{
        type: Number,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    tax: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    cartItems: {
        type: Array,
        required: true,
    },
}, {
    // Para fecha de creación del producto y registro
    timestamps: true,
});

// Acá exportamos el modelo para ser usado en otras dependencias
const Bills = mongoose.model("Bills", billsSchema);
export default Bills;