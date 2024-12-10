import pool from '../index';
import { v4 as uuidv4 } from 'uuid';

export interface Sale {
  id: string;
  user_id: string;
  total_amount: number;
  status: string;
}

export interface SaleItem {
  id: string;
  sale_id: string;
  product_id: string;
  quantity: number;
  price_at_time: number;
}

export class SaleModel {
  static async createSale(userId: string, totalAmount: number): Promise<Sale> {
    const query = `
      INSERT INTO sales (id, user_id, total_amount)
      VALUES ($1, $2, $3)
      RETURNING *
    `;
    const values = [uuidv4(), userId, totalAmount];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async addSaleItem(saleId: string, productId: string, quantity: number, price: number): Promise<SaleItem> {
    const query = `
      INSERT INTO sale_items (id, sale_id, product_id, quantity, price_at_time)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const values = [uuidv4(), saleId, productId, quantity, price];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async getUserSales(userId: string): Promise<Sale[]> {
    const query = `
      SELECT s.*, si.product_id, si.quantity, si.price_at_time
      FROM sales s
      LEFT JOIN sale_items si ON s.id = si.sale_id
      WHERE s.user_id = $1
      ORDER BY s.created_at DESC
    `;
    const result = await pool.query(query, [userId]);
    return result.rows;
  }

  static async updateStatus(saleId: string, status: string): Promise<void> {
    const query = `
      UPDATE sales
      SET status = $2
      WHERE id = $1
    `;
    await pool.query(query, [saleId, status]);
  }
}