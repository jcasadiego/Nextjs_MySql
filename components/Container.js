import Head from 'next/head';
import Navegation from "./Navegation";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Container(props) {
    return (
        <div>
            <Head>
                <title>
                    Store
                </title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossOrigin="anonymous"
                />
            </Head>
            <Navegation />
            <div className="container p-4">
                {props.children}
            </div>
        </div>
    );
};