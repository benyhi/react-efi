import { useEffect, useState, Fragment } from "react";
import ModelTable from "./components/ModelTable";

function Productos(){
    const [productos, setProductos] = useState([]);
    const orderedCols = ["id","nombre","categoria","modelo","precio","cantidad","proveedor"];
    const campos = [
        { name: 'nombre', label: 'Nombre', type: 'text' },
        { name: 'categoria', label: 'Categoria', type: 'number' },
        { name: 'modelo', label: 'Modelo', type: 'number' },
        { name: 'precio', label: 'Precio', type: 'text' },
        { name: 'cantidad', label: 'Cantidad', type: 'text' },
        { name: 'proveedor', label: 'Proveedor', type: 'text' }
    ];
    

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
    <ModelTable data={productos} orderedCols={orderedCols} campos={campos}/>
);
}

export default Productos