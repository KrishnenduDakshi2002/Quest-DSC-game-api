import { Schema, model } from 'mongoose';

export interface QuestionInterface {
  questionId: number;
  answer: string;
  stage: number;
}

const QuestionSchema = new Schema(
  {
    questionId: {
      type: Number,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    stage: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuestionModel = model<QuestionInterface>('Question', QuestionSchema);
export default QuestionModel;
