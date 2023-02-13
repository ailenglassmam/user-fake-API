//UseEffect: El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales: en este caso la peticion de datos
//useState: es un Hook que te permite añadir el estado de React a un componente de función. Establecemos el inicio siempre en null.
import React, { useEffect, useState } from "react";

// traigo la función de solicitud general a la API de los datos
import { getAllData } from "../functions/getData";

//traigo la hoja de estilos para cada card
import '../stylesheets/general-data-card.css';
import 'flowbite';

//creo un componente React para imprimir la data (general) obtenida de la api
const Users = () => {
    //defino el estado inicial
    const [users, setUsers] = useState(null);

    //
    useEffect(() => {
        getAllData(setUsers);
    }, [])

    //devuelvo lo obtenido

    return (
        //incluyo elementos del DOM para imprimir la data obtenida

        //hago una consulta ternaria donde si el valor es nulo me muestre en pantalla que no hay api y si la hay que me muestre los datos consultados
        <>
            {users != null ? (
                users.map(user => (
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                        <div className="flex flex-col items-center pb-10 pt-10">
                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.picture.large} alt="User image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white name">{user.name.first} {user.name.last}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400 location">{user.location.country}, {user.location.city}</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <table className="information">
                                    <tr>
                                        <td><img className="icon" src="https://img.icons8.com/fluency/48/null/filled-sent.png" /></td>
                                        <td><p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white">{user.email}</p></td>
                                    </tr>
                                    <tr>
                                        <td><img className="icon" src="https://img.icons8.com/fluency/48/null/phone.png" /></td>
                                        <td><p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white">{user.phone}</p></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div id="alert-additional-content-5" className="p-4 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-600 dark:bg-gray-700" role="alert">
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Info</span>
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">ALERT</h3>
                    </div>
                    <div className="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-300">
                        There is no API available.
                    </div>
                </div>
            )}
        </>
    )
}

export default Users;

// https://www.freecodecamp.org/espanol/news/pasar-data-y-eventos-entre-componentes-en-reactjs/