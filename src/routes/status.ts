import { Router } from 'express';
import { getStatus } from '../controllers/status';

const router = Router();

/**
 * GET /status
 * @tag Status
 * @response 204 - No body
 * @response 500 - Internal server error
 */
router.get('/status', getStatus);

export default router;
