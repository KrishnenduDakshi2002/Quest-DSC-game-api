import { Request, Response, Router } from 'express';
import {
  addQuestionDetails,
  fakeQuestionsDetailsController,
} from '../controllers/question';
import {
  fakeTeamDetailsController,
  teamRegistration,
} from '../controllers/registration';

const router = Router();
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World, This is GDSC quest' });
});

router.post('/register', teamRegistration);
router.post('/add/question-details', addQuestionDetails);
router.get('/fake/questions-details', fakeQuestionsDetailsController);
router.get('/fake/team-details', fakeTeamDetailsController);
export default router;
