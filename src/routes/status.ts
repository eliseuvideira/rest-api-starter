import { Router } from "express";
import { statusGet } from "../endpoints/status";

const router = Router();

/**
 * GET /status
 * @tag Status
 * @response 204
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get("/status", statusGet);

export default router;
