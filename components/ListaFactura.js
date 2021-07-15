import Image from 'next/image';
import { Table, Button } from 'react-bootstrap';
import { Fragment } from 'react';
import swal from 'sweetalert';

export default function ListaFactura(props) {

    const myLoader = ({ src, width, quality }) => {
        return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`
    };

    const eliminarDato = async (data, event) => {
        event.preventDefault();
        const url = window.location.pathname.slice(1);

        function capitalizarPrimeraLetra(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        let Producto = capitalizarPrimeraLetra(url)

        const { id } = data;
        const newDato = {
            id,
            Producto: Producto
        };

        const res = await fetch('http://localhost:3000/api/posts/delete', {
            body: JSON.stringify({
                data: newDato
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        })

        const result = await res.json();
        console.log(result);
        swal('Elemento eliminado', 'Se elimino el producto de db', 'success');
        window.location.reload();
    };

    return (
        <Fragment>
            <div>
                <Table responsive striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Cantidad Comprada</th>
                            <th>Total a pagar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((data) =>

                                <tr id="Fila" key={data.id}>
                                    <td>
                                        <Image loader={myLoader}
                                            src={data.Imagen}
                                            alt="Picture of the autor"
                                            width={70}
                                            height={50}
                                        />
                                    </td>
                                    <td>{data.Descripcion}</td>
                                    <td>{data.Precio}</td>
                                    <td>{data.CantidadCompra}</td>
                                    <td>{data.TotalPago}</td>
                                    <td>
                                        <Button variant="danger" onClick={(event) => eliminarDato(data, event)} size="sm" type="submit"> Eliminar </Button>
                                    </td>
                                </tr>

                            )}
                    </tbody>
                </Table>
            </div>
        </Fragment>
    );
};