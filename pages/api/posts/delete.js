import { sql_query } from "../../../lib/db";

const handler = async (req, res) => {
    try {
        const result = await sql_query(`DELETE FROM ${req.body.data.Producto} WHERE id = ${req.body.data.id};`);
        return res.status(200).json({
            message: 'Se elimino el producto de db'
        });
    } catch (e) {
        res.status(500).json({
            message: e.message
        });
    };
    console.log(req.body.data.Producto);
};

export default handler;