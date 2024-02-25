const router = require("express").Router();
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json" assert { type: "json"};

const swaggerRouter = Routeur();

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerDocument));

module.exports = router;