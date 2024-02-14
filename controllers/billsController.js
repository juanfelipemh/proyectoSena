// Acá creamos el modelo controlador de productos. Esto conecta con la base de datos y realiza las operaciones necesarias para la operación

import Bills from "../models/billsModel.js";

export const getBillsController = async (req, res) => {
    try {

        const bills = await Bills.find();
        res.send(bills);

    } catch(error) {
        console.log(error);
    }
};


// Para agregar productos
export const addBillsController = async (req, res) => {
    try {

        const newBills = new Bills(req.body);
        await newBills.save();
        res.send("Invoices created Sucessfully");
        
    } catch (error) {
        console.log(error);        
    }  

};

