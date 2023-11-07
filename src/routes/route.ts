import { Request, Response, Router } from 'express';
import { teamRegistration } from '../controllers/registration';

const router = Router();
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World, This is GDSC quest' });
});

router.post('/register', teamRegistration);

export default router;
