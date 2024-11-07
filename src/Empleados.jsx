import { useEffect, useState } from "react";
import ModelTable from "./components/ModelTable";

function Empleados(){
    const [empleados, setEmpleados] = useState([]);
    const orderedCols = ["id","nombre","cargo","dni","sucursal"];

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
    <div>
        <ModelTable data={empleados} orderedCols={orderedCols}/>
    </div>
);
}

export default Empleados