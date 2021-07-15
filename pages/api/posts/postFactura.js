import { sql_query } from "../../../lib/db";

const handler = async (req, res) => {
    try {
        const result = await sql_query(`INSERT INTO Factura (Descripcion, Precio, CantidadCompra, Imagen, TotalPago) VALUES (?, ?, ? ,?, ?)`, [req.body.data.Descripcion, req.body.data.Precio, req.body.data.CantidadCompra, req.body.data.Imagen, req.body.data.TotalPago]);
        return res.status(200).json({
            message: 'Se añadio a factura'
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    };
};

export default handler;