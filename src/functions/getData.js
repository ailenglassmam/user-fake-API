// importo axios para trabajar con la libreria
//Axios: Cliente HTTP basado en promesas para el navegador y node.js
import axios from "axios";

//función para traer todos los datos
const getAllData = async (state) => {
    //guardo en una variable la respuesta. por medio de axios solicito por URL (get) la base de datos
    const res = await axios.get('https://randomuser.me/api/?page=1&results=12&seed=abc');
    state(res.data.results);
}

export {
    getAllData
};