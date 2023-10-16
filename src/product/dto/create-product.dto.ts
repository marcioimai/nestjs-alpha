import { IsNotEmpty } from 'class-validator';

export class CreateProductDTO {
  id: string;
  @IsNotEmpty()
  name: string;
  description: string;
  @IsNotEmpty()
  price: number;
}
