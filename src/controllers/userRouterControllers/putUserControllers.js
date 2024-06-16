import { conectarABaseDeDatos } from "../../config.js";
import { response } from "../../utilities/response.js";


export const putProduct = async (req, res) => {
   const pool = await conectarABaseDeDatos();
   const productID = req.params.id
   const {businessUserID, productImage, productName, productDescription} = req.body
   const [result] = await pool.query('UPDATE products SET business_user_id = IFNULL(?, business_user_id), product_image = IFNULL(?, product_image), product_name = IFNULL(?, product_name), product_description = IFNULL(?, product_description) WHERE product_id = ? ', [businessUserID, productImage, productName, productDescription, productID]
   );
   const product = result.affectedRows;
   //console.log(product);
   if (product <= 0) {
     //ejecutar error 404
   } else{
      const [rows] = await pool.query('SELECT * FROM products WHERE product_id = ?', [productID])
      console.log(rows);
      response(res, 200, "ok", rows[0]);
   }
 
 };