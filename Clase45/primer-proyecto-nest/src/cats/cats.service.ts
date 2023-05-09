import { Injectable } from '@nestjs/common';
import { Cat } from './dto/cat';

@Injectable()
export class CatsService {
  //creamos un arreglo de gatos
  #cats: Array<Cat> = [];

  //metodo para crear gatos
  create(cat: Cat) {
    this.#cats.push(cat);
    return 'gato agregado';
  }

  //metodo para obtener todos los gatos
  getAll() {
    return this.#cats;
  }
}
