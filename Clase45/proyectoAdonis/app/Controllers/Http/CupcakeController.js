const Cupcake = use("App/Models/Cupcake");

class CupcakeController{
  static async getAll(){
    try {
      const cupcakes = (await Cupcake.all()).toJSON();
      return cupcakes;
    } catch (error) {
      throw new Error("Hubo un error");
    }
  }
}

module.exports = {CupcakeController}
