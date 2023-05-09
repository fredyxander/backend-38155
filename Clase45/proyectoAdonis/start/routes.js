'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const {CupcakeController} = use("App/Controllers/Http/CupcakeController");

Route.on('/').render('welcome')

Route.get("/home",()=>{
  return "pagina de bienvenida";
});

Route.get("/cupcakes", async()=>{
  const cupcakes = await CupcakeController.getAll();
  return {status:"success", data: cupcakes};
});

Route.get("/cupcakes-view", async({view})=>{
  const cupcakes = await CupcakeController.getAll();
  return view.render("cupcakesPage",{cupcakes});
});
