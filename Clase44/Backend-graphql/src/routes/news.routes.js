const {Router} = require("express");
const {NewsController} = require("../controllers/news.controller");

const router = Router();

router.get("/",NewsController.getNews);
router.post("/", NewsController.saveNew);
router.delete("/:id", NewsController.deleteNew);

module.exports = {newsRouter:router}