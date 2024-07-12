// src/app/product.service.ts
import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1', imageUrl: 'https://example.com/image1.jpg' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description for Product 2', imageUrl: 'https://example.com/image2.jpg' },
    { id: 3, name: 'Product 3', price: 300, description: 'Description for Product 3', imageUrl: 'https://example.com/image3.jpg' },
    { id: 4, name: 'Product 4', price: 400, description: 'Description for Product 4', imageUrl: 'https://example.com/image4.jpg' },
    { id: 5, name: 'Product 5', price: 500, description: 'Description for Product 5', imageUrl: 'https://example.com/image5.jpg' }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
