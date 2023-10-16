import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { Response } from 'express';

@Controller({
  version: '1',
  path: '/products',
})
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string, @Res() res: Response) {
    const result = this.productService.findOne(id);

    if (!result) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Product not found' });
    }

    return res.status(HttpStatus.OK).json(result);
  }

  @Post()
  create(@Body() product: CreateProductDTO) {
    return this.productService.create(product);
  }
}
