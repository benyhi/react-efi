import { useEffect, useState } from "react";
import ModelTable from "./components/ModelTable";

function Clientes(){
    const [clientes, setClientes] = useState([]);
    const orderedCols = ["id","nombre","dni","telefono","email","direccion"];
    const campos = [
        { name: 'nombre', label: 'Nombre', type: 'text' },
        { name: 'dni', label: 'DNI', type: 'number' },
        { name: 'telefono', label: 'Telefono', type: 'number' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'direccion', label: 'Direccion', type: 'text' }
    ];


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
    <ModelTable data={clientes} orderedCols={orderedCols} campos={campos}/>
);
}

export default Clientes