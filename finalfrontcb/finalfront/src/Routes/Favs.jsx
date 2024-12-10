import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const { getFavs, state } = useContext(ContextGlobal)
  const favoritos = getFavs()

  return (
    <main className={state.theme}>
      <h1>Favoritos</h1>
      <div className={`card-grid ${state.theme}`}>
    
        {Object.keys(favoritos).map((id)=>{
          return(
            <Card 
              key={id} 
              name={favoritos[id].name} 
              username={favoritos[id].username} 
              id={id} 
              isFav={ id in favoritos } 
              filterByFavs={ true } 
            />
          )
        })}
      </div>
    </main>
  );
};

export default Favs;