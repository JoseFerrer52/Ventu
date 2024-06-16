import { conectarABaseDeDatos } from "../../config.js";
import { response } from "../../utilities/response.js";


 export const postProducts = async (req, res) => {
    const {businessUserID, productImage, productName, productDescription} = req.body
    const pool = await conectarABaseDeDatos()
    const [rows] = await pool.query('INSERT INTO products (business_user_id, product_image, product_name, product_description) VALUES (?, ?, ?, ? )', [businessUserID, productImage, productName, productDescription])

    response(res, 200, "Producto guardado con exito", {})
}