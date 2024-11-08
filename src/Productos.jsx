import { useEffect, useState, Fragment } from "react";
import ModelTable from "./components/ModelTable";
import CreateForm from "./components/CreateForm"

function Productos(){
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [modelos, setModelos] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const orderedCols = ["id","nombre","categoria","modelo","precio","cantidad","proveedor"];
    
    useEffect(()=>{
        fetch('http://localhost:5000/productos')
        .then(response => {
            if(!response.ok){
                throw new Error('Error al obtener los productos')
            }
            return response.json();
        })
        .then(data => {
            setProductos(data.productos);
            setCategorias(data.categorias);
            setModelos(data.modelos);
            setProveedores(data.proveedores);

        })
        .catch(error => console.error('Error:', error));
    },[])

    const campos = [
        { name: 'nombre', label: 'Nombre', type: 'text' },
        {
            name: 'categoria_id',
            label: 'Categoría',
            type: 'select',
            options: categorias.map(cat => ({
                value: cat.id,
                label: cat.nombre
            }))
        },
        { 
            name: 'modelo_id', 
            label: 'Modelo', 
            type: 'select',
            options: modelos.map(mod => ({
                value: mod.id,
                label: mod.nombre
            }))
        
        },
        { name: 'precio', label: 'Precio', type: 'text' },
        { name: 'cantidad', label: 'Cantidad', type: 'text' },
        { 
            name: 'proveedor_id',
            label: 'Proveedor',
            type: 'select',
            options: proveedores.map(prov => ({
                value: prov.id,
                label: prov.nombre
            }))
            
            }
    ];


return (
    <div>
        <div>
            <ModelTable data={productos} orderedCols={orderedCols} campos={campos}/>
        </div>
        <div>
            <CreateForm campos={campos}/>
        </div>
    </div>
);
}

export default Productos