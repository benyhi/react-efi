import { useEffect, useState } from "react";
import ModelTable from "./components/ModelTable";

function Clientes(){
    const [clientes, setClientes] = useState([]);
    const orderedCols = ["id","nombre","dni","telefono","email","direccion"];

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

    console.log(clientes)
return (
    <div>
        <ModelTable data={clientes} orderedCols={orderedCols}/>
    </div>
);
}

export default Clientes