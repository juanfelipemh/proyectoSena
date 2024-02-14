import mongoose from "mongoose";

// Modelos para crear tablas en la base de datos 
const userSchema = mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean
    }
}, {
    // Para fecha de creación del producto y registro
    timestamps: true,
});

// Acá exportamos el modelo para ser usado en otras dependencias
const User = mongoose.model("User", userSchema);
export default User;