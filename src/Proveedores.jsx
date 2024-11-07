import { useEffect, useState } from "react";
import ModelTable from "./components/ModelTable";

function Proveedores(){
    const [proveedores, setProveedores] = useState([]);
    const orderedCols = ["id","nombre","cuit","telefono","email","direccion"];
    const campos = [
        { name: 'nombre', label: 'Nombre', type: 'text' },
        { name: 'cuit', label: 'Cuit', type: 'number' },
        { name: 'telefono', label: 'Telefono', type: 'number' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'direccion', label: 'Direccion', type: 'text' }
    ];


    useEffect(()=>{
        fetch('http://localhost:5000/proveedores')
        .then(response => {
            if(!response.ok){
                throw new Error('Error al obtener proveedores')
            }
            return response.json();
        })
        .then(data => setProveedores(data.proveedores))
        .catch(error => console.error('Error:', error));
    },[])
    
return (
    <ModelTable data={proveedores} orderedCols={orderedCols} campos={campos}/>
);
}

export default Proveedores