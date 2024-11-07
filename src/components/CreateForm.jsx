import React, { useState } from 'react';

function CreateForm({ campos, onSubmit }) {
    const [formData, setFormData] = useState(
        campos.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Llamar al manejador para enviar el formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            {campos.map((field) => (
                <div key={field.name} style={{ marginBottom: '1em' }}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                    />
                </div>
            ))}
            <button type="submit">Cargar</button>
        </form>
    );
}
export default CreateForm;
