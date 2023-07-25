import React, { useState } from 'react'
import Vozilo from './components/Vozilo'
import DodajVozilo from './components/DodajVozilo'

const App = () => {

  const [vozila, setVozila] = useState([
    {id:1, marka:"Mercedes", tip:"terenac", godiste: "2023"},
    {id:1, marka:"BMW", tip:"limuzina", godiste: "2023"},
  ]); 


  const dodajVozilo = (novoVozilo) => {
    setVozila([...vozila, {id: Date.now(), ...novoVozilo}])
  }

  return (
    <div>
    
      <h1>Lista vozila</h1>
      {vozila.map((vozilo) =>(
        <Vozilo

          key={vozilo.id}
          marka={vozilo.marka}
          tip={vozilo.tip}
          godiste={vozilo.godiste}

          

        />
        ))}

        <hr></hr>

        <h2>Dodaj novo vozilo</h2>
        <DodajVozilo dodajVozilo={dodajVozilo} />
    </div>
  )
}

export default App
