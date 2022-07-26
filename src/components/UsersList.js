import React from 'react'

const UsersList = (props) => {
    return (
        <> 
                        <tbody>
                            <tr>
                                <td>{props.id}</td>
                                <td>{props.nombre}</td>
                                <td>{props.apellido}</td>
                                <td>{props.email}</td>
                                <td>{props.profile}</td>
                  
                            </tr>

                        </tbody>
               </>
    )
}

export default UsersList