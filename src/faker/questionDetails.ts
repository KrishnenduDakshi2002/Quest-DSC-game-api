import { faker } from '@faker-js/faker';

export function fakeQuestionDetails(count: number) {
  const questionDetails = [];
  for (let i = 0; i < count; i++) {
    const questionDetail = {
      questionId: faker.string.numeric({
        length: 4,
      }),
      answer: faker.lorem.words({
        min: 1,
        max: 3,
      }),
      stage: i + 1,
    };
    questionDetails.push(questionDetail);
  }
  return questionDetails;
}
