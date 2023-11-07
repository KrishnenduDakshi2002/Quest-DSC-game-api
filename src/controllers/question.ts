import { Request, Response } from 'express';
import { fakeQuestionDetails } from '../faker/questionDetails';
import QuestionModel, { QuestionInterface } from '../models/question.model';

export async function addQuestionDetails(req: Request, res: Response) {
  try {
    const { questionId, answer, stage }: QuestionInterface = req.body;
    const question = await new QuestionModel({
      questionId,
      answer,
      stage,
    }).save();
    res.json({ message: 'Question added successfully', question });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
export async function fakeQuestionsDetailsController(
  req: Request,
  res: Response
) {
  try {
    const fakes = fakeQuestionDetails(5);
    fakes.forEach(async (fake) => {
      await new QuestionModel(fake).save();
    });
    res.json({ message: 'Questions added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
