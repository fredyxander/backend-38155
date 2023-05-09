import { Body, Controller, Post, Get } from '@nestjs/common';
import { Cat } from './dto/cat';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  create(@Body() cat: Cat) {
    const result = this.catsService.create(cat);
    return { status: 'success', payload: result };
  }

  @Get()
  findAll() {
    const cats = this.catsService.getAll();
    return { status: 'success', payload: cats };
  }
}
