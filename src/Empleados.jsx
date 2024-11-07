import { useEffect, useState } from "react";
import ModelTable from "./components/ModelTable";

function Empleados(){
    const [empleados, setEmpleados] = useState([]);
    const orderedCols = ["id","nombre","cargo","dni","sucursal"];
    const campos = [
        { name: 'nombre', label: 'Nombre', type: 'text' },
        { name: 'cargo', label: 'Cargo', type: 'text' },
        { name: 'dni', label: 'DNI', type: 'number' },
        { name: 'sucursal', label: 'Sucursal', type: 'text' }
    ];


    useEffect(()=>{
        fetch('http://localhost:5000/empleados')
        .then(response => {
            if(!response.ok){
                throw new Error('Error al obtener los empleados')
            }
            return response.json();
        })
        .then(data => setEmpleados(data.empleados))
        .catch(error => console.error('Error:', error));
    },[])

return (
    <ModelTable data={empleados} orderedCols={orderedCols} campos={campos}/>
);
}

export default Empleados