import { sql_query } from "../../../lib/db";

const handler = async (_, res) => {
        try{
            const result = await sql_query('SELECT * FROM Frutas');
            return res.json(result);
        }catch(e){
            res.status(500).json({
                message: e.message
            });
    };
};

export default handler;
