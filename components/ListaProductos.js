import Image from 'next/image';
import { Table, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState, Fragment } from 'react';
import swal from 'sweetalert';

export default function ListaProductos(props) {

    const myLoader = ({ src, width, quality }) => {
        return `https://images.pexels.com/${src}?w=${width}&q=${quality || 75}`
    };

    const [cant, setCant] = useState({
        cant: 0
    });


    const handleInputChange = (event) => {
        setCant({
            [event.target.name]: event.target.value
        });
    };

    const clearState = () => {
        setCant({ cant: 0 });
    };

    const enviarDatos = async (data, cant, event) => {
        event.preventDefault();
        clearState();
        event.target.reset();
        const url = window.location.pathname.slice(1);

        function capitalizarPrimeraLetra(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        if ((data.Cantidad >= cant.cant) && (cant.cant != 0)) {
            data.Cantidad = data.Cantidad - cant.cant;
            let TotalPago = cant.cant * data.Precio;

            const { Descripcion, Precio, Imagen } = data;
            const newDato = {
                Descripcion,
                Precio,
                CantidadCompra: cant.cant,
                Imagen,
                TotalPago
            };

            const res = await fetch('http://localhost:3000/api/posts/postFactura', {
                body: JSON.stringify({
                    data: newDato
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })

            const result = await res.json();
            swal('Añadido a Factura', 'Su producto se añadio a su factura!', 'success')

            if (data.Cantidad > 0) {

                let Producto = capitalizarPrimeraLetra(url)

                const { id, Cantidad } = data;
                const newDato = {
                    id,
                    Cantidad,
                    Producto: Producto
                };

                const res = await fetch('http://localhost:3000/api/posts/patch', {
                    body: JSON.stringify({
                        data: newDato
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'PATCH'
                })

                const result = await res.json();
                console.log(result);
            }

            if (data.Cantidad == 0) {

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

            };

            return (
                console.log(`Compro: ${cant.cant} y queda: ${data.Cantidad}, total a pagar: ${TotalPago}`),
                swal('Compra añadida', `Compro: ${cant.cant}, Disponible: ${data.Cantidad}, total a pagar: ${TotalPago}`, 'success')
            );
        };

        if (data.Cantidad == 0) {
            return (
                console.log('Producto agotado!'),
                swal('Producto agotado', 'Se agoto el producto, lo sentimos!', 'success')
            );
        };

        if (cant.cant == 0) {
            event.target.reset();
            return (
                console.log('Inserte cantidad a comprar'),
                swal('Inserte una cantidad', 'Inserte una cantidad a comprar', 'success')
            );
        };
    };

    return (
        <Fragment>
            <div>
                <Table responsive striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Descripcion</th>
                            <th>Precio ($)</th>
                            <th>Cantidad Disponible</th>
                            <th>Agregar al carrito</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((data) =>

                                <tr id="Fila" key={data.id}>
                                    <td>
                                        <Image loader={myLoader}
                                            src={data.Imagen}
                                            alt="Picture of the author"
                                            width={70}
                                            height={50} />
                                    </td>
                                    <td>{data.Descripcion}</td>
                                    <td>{data.Precio}</td>
                                    <td>{data.Cantidad}</td>
                                    <td>
                                        <form onSubmit={(event) => enviarDatos(data, cant, event)}>
                                            <InputGroup className="mb-1" size="sm">
                                                <FormControl
                                                    aria-describedby="basic-addon2"
                                                    type="number"
                                                    name="cant"
                                                    defaultValue='0'
                                                    min='0'
                                                    max={data.Cantidad}
                                                    onChange={handleInputChange}
                                                />
                                            </InputGroup>
                                            <Button size="sm" type="submit"> Add Factura! </Button>
                                        </form>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </Table>
            </div>
        </Fragment>

    );
};