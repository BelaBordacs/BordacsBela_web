import { children, createContext, useContext, useEffect, useState } from "react";
import { myAxios } from "../api/Axios";


const ApiContext = createContext();
export const ApiProvider = ({children}) => {
    const [tema, setTema] = useState([]);
    const [szavak, setSzavak] = useState([]);

    const fetchTema = async() => {
        const response = await myAxios.get('/tema');
        setTema(response.data)
    }

    useEffect(()=>{
        fetchTema();
    }, [])

    return (
        <ApiContext.Provider value={{tema, fetchTema, szavak, setSzavak}}>
            {children}
        </ApiContext.Provider>
    )
}

export default function useApiContext(){
    return useContext(ApiContext);
}