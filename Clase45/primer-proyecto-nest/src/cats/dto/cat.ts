import { ApiProperty } from '@nestjs/swagger';
export class Cat {
  @ApiProperty()
  nombre: string;

  @ApiProperty()
  edad: number;

  @ApiProperty()
  especie: string;
}
