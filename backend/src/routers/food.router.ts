import { Router } from "express";
import { sample_foods } from "../data";
import expressAsyncHandler from "express-async-handler";
import { FoodModel } from "../models/food.model";


const router = Router();

router.get("/seed", expressAsyncHandler(
  async (req, res) => {
    const foodcount = await FoodModel.countDocuments({});
    if (foodcount >0)
    {
      res.send("Seed is already done");
      return
    }
  res.send(sample_foods);
});

router.get("", (req, res) => {
  res.send(sample_foods);
});

router.get("/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm.toLowerCase();
  const foods = sample_foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm)
  );
  res.send(foods);
});

export default router;
