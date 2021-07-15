import { sql_query } from "../../../lib/db";

const handler = async (req, res) => {
    try {
        const result = await sql_query(`UPDATE ${req.body.data.Producto} SET Cantidad = ${req.body.data.Cantidad} WHERE id = ${req.body.data.id};`);
        return res.status(200).json({
            message: 'Producto actualizado'
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    };
    console.log(req.body.data.Producto);
};

export default handler;