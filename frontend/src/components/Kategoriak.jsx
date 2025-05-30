import React, { useEffect, useState } from 'react'
import useApiContext from '../context/ApiContext'
import Szavak from './Szavak';
import { myAxios } from '../api/Axios';

const Kategoriak = () => {
    const {tema} = useApiContext();
    const [valasztott, setValasztott] = useState(-1);
    const {szavak, setSzavak} = useApiContext();


    const fetchSzavak = async (egytema) =>{
        const response = await myAxios.get(`szavak/tema/${egytema}`)
        setSzavak(response.data)
    }

    //useEffect(()=>{
    //    fetchSzavak(egytema.id);
   // }, [])

   const handleClick = ((egytema) => {
    console.log(egytema)
    fetchSzavak(egytema);
})

    const handleChange = ((egytema) => {
        console.log(egytema)
        setValasztott(egytema.target.value);
       fetchSzavak(egytema.target.value);
    })

  return (
    <div className='szavak-card'>
        <h2>Szavak</h2>
        <div>
            <select className='kategoria-valaszto' onChange={(egytema) => handleChange(egytema)}> 
                {
                    valasztott === -1 ? (
                        <option value ="-1" >Válassz témát!</option>
                    ) : (
                        ""
                    )
                }
                {
                    tema.length > 0 ? 
                        tema.map ((egytema) =>(
                            <option onClick={(egytema) =>{handleClick(egytema)}} key={egytema.id} value={egytema.id}>{egytema.temanev}</option>
                        )    
                        ) : <option > Nincsenek témák</option>
                }
            </select>

            <Szavak szavak={szavak} />
        </div>
    </div>
  )
}

export default Kategoriak