import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  private data: CreateProductDTO[] = [];

  findOne(id: string) {
    return this.data.find((item) => item.id === id);
  }

  create(product: CreateProductDTO) {
    this.data.push(product);
    return product;
  }
}
