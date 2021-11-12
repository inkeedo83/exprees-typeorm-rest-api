import { Router } from 'express';
import regionsRouter from '../modules/regions/regions.router';

const router = Router();

router.use(regionsRouter);

export default router;
