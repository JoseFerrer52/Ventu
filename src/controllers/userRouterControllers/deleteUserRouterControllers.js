import { conectarABaseDeDatos } from "../../config.js";
import { response } from "../../utilities/response.js";

export const deleteProduct = async (req, res) => {
  const pool = await conectarABaseDeDatos();
  const [result] = await pool.query(
    'DELETE FROM products WHERE product_id= ?',
    [req.params.id]
  );
  const deleteproduct = result.affectedRows;
  console.log(deleteproduct);
  if (deleteproduct <= 0) {
    //ejecutar error 404
  }

  response(res, 200, "Producto eliminado con exito", {});
};
