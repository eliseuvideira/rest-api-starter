import { Router } from "express";
import { statusGet } from "../endpoints/status";

const router = Router();

/**
 * GET /status
 * @tag status
 * @response 204
 * @response default
 * @responseContent {error} default.application/json
 */
router.get("/status", statusGet);

export default router;
