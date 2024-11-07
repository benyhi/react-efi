import { Fragment } from 'react'
import { Table } from 'react-bootstrap'
import CreateForm from './CreateForm';

function ModelTable({data, orderedCols, campos, onSubmit}){
    // Obtiene las claves del JSON y los guarda en un array como las columnas de la tabla.
    // const columns = data.length > 0 ? Object.keys(data[0]) : [];
    const columns = data.length > 0 
        ? orderedCols.filter(col => col in data[0]) // Solo toma las columnas que existen en los datos
        : [];
    return(
        <Fragment>
        <Table responsive='lg' striped hover>
            <thead>
                <tr>
                    {columns.map((col) =>(
                        <th key={col}>{col}</th>
                    ))}
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody> {/* Itera sobre los datos */}
                    {/* Crea una fila de la tabla para cada elemento en `data` */}
                {data.map((row, rowIndex) =>( 
                    <tr key={rowIndex}>
                        {columns.map((col) => (
                            <td key={`${rowIndex}-${col}`}> {/* Crea una celda para cada columna en la fila */}
                             {/* Verifica si el valor de la columna actual es un objeto y no es null */}
                                {typeof row[col] === 'object' && row[col] !== null
                                    ? row[col].nombre // Si es un objeto, muestra su propiedad `nombre`
                                    : row[col]        // Si no es un objeto, muestra el valor directamente
                                }
                            </td>
                        ))}
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </tr>
                ))}
            </tbody>
        </Table>

            <CreateForm campos={campos} onSubmit={onSubmit} />

        </Fragment>
    );
}

export default ModelTable