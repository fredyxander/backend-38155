const {TaskClass} = require("../taskClass");
const assert = require("assert");

describe("test de la clase taskClass y sus metodos",()=>{
    it("cuando se cree una instancia de la clase, se debe crear una propiedad tasklist como un arreglo vacio",()=>{
        const tasks = new TaskClass();
        assert.strictEqual(tasks.list().length,0);
    });

    it("deberia agregar tareas correctamente",()=>{
        const tasks = new TaskClass();
        tasks.add("primera tarea");
        tasks.add("segunda tarea");
        assert.strictEqual(tasks.list().length,2);
    });
});


// const sumar = (num1,num2)=>{
//     return num1+num2;
// };
// sumar(5,2);// resultado 10-resultado esperado
// 7 //resultado actual->resultado de ejecutar el codigo
