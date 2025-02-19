import React, { useEffect, useState, useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {

  const [dentist, setDentist] = useState([])
  const { getFavs, state } = useContext(ContextGlobal)

  const getDentists = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json()
      })
    setDentist(data)
  }

  const favoritos = getFavs()

  useEffect(() => {
    getDentists()
  }, [])

  return (
    <main className={state.theme}>
      <h1>Inicio</h1>
      <div className={`card-grid ${state.theme}`}>
        {dentist.map((dentist) => {
          return (<Card key={dentist.id} name={dentist.name} id={dentist.id} username={dentist.username} isFav={ dentist.id in favoritos } />)
        })}
      </div>
    </main>
  )
}

export default Home;