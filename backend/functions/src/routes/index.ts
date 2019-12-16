import { Router } from 'express';
import api from './api';

const router = Router();


[api].map((file) => file(router));

export default router;