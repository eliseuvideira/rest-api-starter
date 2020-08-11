import { Router } from 'express';
import { getStatus } from '../controllers/status';

const router = Router();

/**
 * GET /status
 * @tag Status
 * @response 204
 * @response default
 * @responseContent {Error} default.application/json
 */
router.get('/status', getStatus);

export default router;
