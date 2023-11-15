import { Router } from "express";
import { sample_foods } from "../data";
import expressAsyncHandler from "express-async-handler";
import { FoodModel } from "../models/food.model";

const router = Router();

router.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const foodcount = await FoodModel.countDocuments({});
    if (foodcount > 0) {
      res.send("Seed is already done");
      return;
    } else {
      const createdFoods = await FoodModel.create(sample_foods);
      res.send("Seed is done");
      return;
    }
  })
);

router.get(
  "",
  expressAsyncHandler(async (req, res) => {
    const foods = await FoodModel.find({});
    res.send(foods);
  })
);

router.get(
  "/search/:searchTerm",
  expressAsyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, "i");
    const foods = await FoodModel.find({ name: { $regex: searchRegex } });
    res.send(foods);
  })
);

export default router;
