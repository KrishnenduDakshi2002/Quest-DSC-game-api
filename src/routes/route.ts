import { Request, Response, Router } from 'express';

const router = Router();
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World, I am krishnendu Dakshi, HIIII' });
});

export default router;
