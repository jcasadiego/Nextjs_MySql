import Container from "../components/Container";
import ListaProductos from "../components/ListaProductos";

export default function Verduras(props){

    return(
        <Container>
            <div className="text-center text-primary">
                <h1>Verduras</h1>
                <br />
                <div className="text-center text-success">
                    <h2>Realizar compra</h2>
                </div>
            </div>
            <br />
            <div>
                <ListaProductos data={props.data} />
            </div>
        </Container>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/posts/getVerduras`);
    const data = await res.json();
  
    return { 
        props: { data } 
    };
};