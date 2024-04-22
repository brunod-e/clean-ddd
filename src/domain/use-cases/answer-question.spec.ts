import { expect, test } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase();

  const answer = answerQuestion.execute({
    instructorId: "1",
    questionId: "2",
    content: "This is the answer",
  });

  expect(answer.content).toEqual("This is the answer");
});
