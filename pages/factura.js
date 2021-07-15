import Container from "../components/Container";
import ListaFactura from "../components/ListaFactura";
import ButtonComprar from "../components/ButtonComprar"
import ButtonEliminarCompra from '../components/ButtonEliminarCompra';

export default function Verduras(props){

    return(
        <Container>
            <div className="text-center text-primary">
                <h1>Factura</h1>
                <br />
                <div className="text-center text-success">
                    <h2>Pedidos añadidos</h2>
                </div>
            </div>
            <br />
            <div>
                <ListaFactura data={props.data} />
            </div>
            <div>
                <ButtonComprar />{"  "}
                <ButtonEliminarCompra />
            </div>
        </Container>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/posts/getFactura`);
    const data = await res.json();
  
    return { 
        props: { data } 
    };
};