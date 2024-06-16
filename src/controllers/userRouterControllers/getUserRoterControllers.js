import { conectarABaseDeDatos } from "../../config.js";
import { response } from "../../utilities/response.js";

export const getindex = async (req, res) => {
  const pool = await conectarABaseDeDatos();
  const [rows] = await pool.query('SELECT user_password FROM user');
  res.status(200).json(rows);
};

export const getProducts = async (req, res) => {
  const pool = await conectarABaseDeDatos();
  const [result] = await pool.query('SELECT * FROM products');
  const products = result;
  response(res, 200, "ok", products);
};

export const getProduct = async (req, res) => {
  const pool = await conectarABaseDeDatos();
  const [result] = await pool.query(
  'SELECT * FROM products WHERE product_id= ?',
    [req.params.id]
  );
  const product = result[0];
  //console.log(product);
  if (product === undefined) {
    //ejecutar error 404
  }

  response(res, 200, "ok", product);
};
