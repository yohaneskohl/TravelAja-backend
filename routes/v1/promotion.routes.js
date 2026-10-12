const express = require("express");
const router = express.Router();
const {
  getAllPromo,
  createPromotion,
  getPromotion,
} = require("../../controllers/promotion.controller");
const { restrict } = require("../../middlewares/auth.middleware");

router.get("/promo", getAllPromo);
router.post("/promotion", restrict, createPromotion);
router.get("/promotion", getPromotion)

module.exports = router;
