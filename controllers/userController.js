// Acá creamos el modelo controlador de productos. Esto conecta con la base de datos y realiza las operaciones necesarias para la operación
import User from "../models/userModel.js"

// Para obtener los usuarios registrados
export const loginController = async (req, res) => {
    try {

        const {userId, password} = req.body;
        const user = await User.findOne({userId, password});
        if(user){
            res.status(200).send(user);
        } else {
            res.redirect("../src/register")             
        }        
        
    } catch (error) {
        id  
    }
};

// Para registrar usuarios
export const registertController = async (req, res) => {
    try {

        const newUser = new User({...req.body, verified: true});
        await newUser.save();
        res.status(200).send("User Registered Sucessfully");
        
    } catch (error) {
        console.log(error);        
    }  

};
