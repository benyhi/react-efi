import React, { useState } from 'react';
import './ModelTable.css'

function CreateForm({ campos }) {
    const [formData, setFormData] = useState(
        campos.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/productos/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error al crear el producto');
            }

            const data = await response.json();
            console.log('Producto creado:', data);
            alert('Producto creado exitosamente');
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al crear el producto');
        }
    };

return (
    <div className='form-container'>
    <h2>Añadir un nuevo registro</h2>
    <form className='createForm' onSubmit={handleSubmit}>
        {campos.map((field) => (
            <div key={field.name} style={{ marginBottom: '1em' }}>
                <label htmlFor={field.name}>{field.label}</label>
                    {/* Verifica si el tipo es select */}
                    {field.type === 'select' ? (
                    <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona una opción</option>
                        {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                    />
                )}
            </div>
        ))}
        <button type="submit">Cargar</button>
    </form>
    </div>
)};  

export default CreateForm;
