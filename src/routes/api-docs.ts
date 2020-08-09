import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';
import { openapi } from '../utils/openapi';

const router = Router();

router.use('/api-docs', serve, setup(openapi));

export default router;
