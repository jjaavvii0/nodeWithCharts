import {Router} from "express"
const router = Router()

import * as chartsCtrl from "../controllers/charts.controller"
router.get("/", chartsCtrl.getHome)

export default router;
