import React, { useState } from 'react'

const DodajVozilo = ({dodajVozilo}) => {

    const [novaVozila, setNovaVozila]= useState({
        marka:"",
        tip:"",
        godiste:"",
    })

    const {marka, tip, godiste} = novaVozila;

    const handleChange = (e) => {
        setNovaVozila({
            ...novaVozila,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dodajVozilo(novaVozila);
        setNovaVozila({
            marka:"",
            tip:"",
            godiste:"",
        });
    };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Marka:</label>
            <input
                type="text"
                name="marka"
                value={marka}
                onChange={handleChange}

            />
        </div>

        <div>
            <label>Tip:</label>
            <input
                type='text'
                name='tip'
                value={tip}
                onChange={handleChange}
            />
        </div>

        <div>
            <label>Godiste:</label>
            <input
                type="text"
                name="godiste"
                value={godiste}
                onChange={handleChange}
            />
        </div>
        <button type='submit'>Dodaj vozilo</button>
    </form>
  )
}

export default DodajVozilo