import { useEffect, useState } from "react";
import ModelTable from "./components/ModelTable";

function Clientes(){
    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/clientes')
        .then(response => {
            if(!response.ok){
                throw new Error('Error al obtener los clientes')
            }
            return response.json();
        })
        .then(data => setClientes(data.clientes))
        .catch(error => console.error('Error:', error));
    },[])

return (
    <div>
        <ModelTable data={clientes}/>
    </div>
);
}

export default Clientes