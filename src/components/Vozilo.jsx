import React from 'react'

const Vozilo = ({marka, tip, godiste}) => {
  return (
    <div>
        <p>Marka: {marka}</p>
        <p>Tip: {tip}</p>
        <p>Godiste: {godiste}</p>
    </div>
  )
}

export default Vozilo