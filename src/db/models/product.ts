import pool from '../index';
import { v4 as uuidv4 } from 'uuid';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  stock_quantity: number;
}

export class ProductModel {
  static async create(product: Omit<Product, 'id'>): Promise<Product> {
    const query = `
      INSERT INTO products (id, name, description, price, category, image_url, stock_quantity)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    const values = [
      uuidv4(),
      product.name,
      product.description,
      product.price,
      product.category,
      product.image_url,
      product.stock_quantity
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findById(id: string): Promise<Product | null> {
    const query = 'SELECT * FROM products WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
  }

  static async findByCategory(category: string): Promise<Product[]> {
    const query = 'SELECT * FROM products WHERE category = $1';
    const result = await pool.query(query, [category]);
    return result.rows;
  }

  static async updateStock(id: string, quantity: number): Promise<void> {
    const query = `
      UPDATE products 
      SET stock_quantity = stock_quantity + $2
      WHERE id = $1
    `;
    await pool.query(query, [id, quantity]);
  }
}