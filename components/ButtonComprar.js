import { Button } from "react-bootstrap";
import swal from "sweetalert";

export default function ButtonComprar(){

    const realizarCompra = (event) => {
        event.preventDefault();
        swal('Compra Registrada', 'Su compra se registro con exito', 'success');
    }

    return(
        <Button onClick={(event) => realizarCompra(event)} size="lx" type="submit">
            Registrar compra!!
        </Button>
    );
};