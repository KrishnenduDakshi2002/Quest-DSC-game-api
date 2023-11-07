import { Request, Response } from 'express';
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
