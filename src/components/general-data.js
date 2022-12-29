//UseEffect: El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales: en este caso la peticion de datos
//useState: es un Hook que te permite añadir el estado de React a un componente de función. Establecemos el inicio siempre en null.
import React, {useEffect, useState } from "react";

// traigo la función de solicitud general a la API de los datos
import { getAllData } from "../functions/getData";

//traigo la hoja de estilos para cada card
import '../stylesheets/general-data-card.css';

//creo un componente React para imprimir la data (general) obtenida de la api
const Users = () => {
    //
    const [users, setUsers] = useState(null);

    //
    useEffect(()=> {
        getAllData(setUsers);
    }, [])

    //devuelvo lo obtenido

    return (
        //incluyo elementos del DOM para imprimir la data obtenida

        //hago una consulta ternaria donde si el valor es nulo me muestre en pantalla que no hay api y si la hay que me muestre los datos consultados
        <>
        {users != null ? (
            users.map(user => (
            <div className="card" key={user.id}>
                <img src={user.picture.large} alt="" className="profile-image"/>
                <div className="personal-information">
                    <h2 className="name">{user.name.first} {user.name.last}</h2>
                    <h3 className="location">{user.location.country}, {user.location.city}</h3>
                    <div className="contact">
                        <table className="information">
                            <tr>
                                <td><img className="icon" src="https://img.icons8.com/fluency/48/null/filled-sent.png"/></td>
                                <td><p className="email-contact" href="#">{user.email}</p></td>
                            </tr>
                            <tr>
                                <td><img className="icon" src="https://img.icons8.com/fluency/48/null/phone.png"/></td>
                                <td><p className="phone-number">{user.phone}</p>  </td>
                            </tr>
                        </table>
                    
                    
                    </div>
                    
                </div>
            </div>
            ))  
        ) : ('No hay API disponible')}
        </>
    )
}

export default Users;