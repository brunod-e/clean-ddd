import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { AnswersRepository } from "../repositories/answers-repository";

const mockAnswersRepository: AnswersRepository = {
  create: async () => {},
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(mockAnswersRepository);

  const answer = await answerQuestion.execute({
    instructorId: "1",
    questionId: "2",
    content: "This is the answer",
  });

  expect(answer.content).toEqual("This is the answer");
});
