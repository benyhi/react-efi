import { useEffect, useState } from "react";
import ModelTable from "./components/ModelTable";

function Productos(){
    const [productos, setProductos] = useState([]);
    const orderedCols = ["id","nombre","categoria","modelo","precio","cantidad","proveedor"];

    useEffect(()=>{
        fetch('http://localhost:5000/productos')
        .then(response => {
            if(!response.ok){
                throw new Error('Error al obtener los productos')
            }
            return response.json();
        })
        .then(data => setProductos(data.productos))
        .catch(error => console.error('Error:', error));
    },[])

return (
    <div>
        <ModelTable data={productos} orderedCols={orderedCols}/>
    </div>
);
}

export default Productos