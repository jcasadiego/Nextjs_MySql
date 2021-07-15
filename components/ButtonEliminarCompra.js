import { Button } from "react-bootstrap";

export default function ButtonEliminarCompra(){

    const eliminarCompra = (event) => {
        event.preventDefault();
        swal('Compra Eliminada', 'Su compra se elimino con exito', 'success');
    }

    return(
        <Button onClick={(event) => eliminarCompra(event)} size="lx" type="submit" variant="danger">
            Eliminar compra!!
        </Button>
    );
};