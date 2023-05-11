import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if (
      !createUserDto.first_name ||
      !createUserDto.email ||
      !createUserDto.password
    ) {
      throw new HttpException('campos incompletos', HttpStatus.BAD_REQUEST);
    }
    const userCreated = this.usersService.create(createUserDto);
    return { status: 'success', data: userCreated };
  }

  @Get()
  findAll() {
    const users = this.usersService.findAll();
    return { status: 'success', data: users };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.usersService.findOne(parseInt(id));
    return { status: 'success', data: user };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const result = this.usersService.update(+id, updateUserDto);
    return { status: 'sucess', message: result };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const result = this.usersService.remove(+id); //+ string-> numerico
    return { status: 'sucess', message: result };
  }
}
