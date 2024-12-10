import React, { useEffect, useState,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {

  const { state } = useContext(ContextGlobal)
  const [singleDentist, setSingleDentist] = useState({})
  const paramsForDentist = useParams()

  const getSingleDentists = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/" + paramsForDentist.id)
      .then((response) => {
        return response.json()
      })
    setSingleDentist(data)
  }

  useEffect(() => {
    getSingleDentists()
    },
  );

  return (
    <main className={state.theme}>
      <h1>Datos del Odontologo {singleDentist.id}</h1>
      <table>
        <tr> 
          <td>{singleDentist.name}</td>
          <td>{singleDentist.email}</td>
          <td>{singleDentist.phone}</td>
          <td>{singleDentist.website}</td>
        </tr>
      </table>
    
    </main>
  )
}

export default Detail