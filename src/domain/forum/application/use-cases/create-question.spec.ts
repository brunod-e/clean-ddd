import { Question } from "../../enterprise/entities/question";
import { QuestionsRepository } from "../repositories/questions-repository";
import { CreateQuestionUseCase } from "./create-question";

const mockQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {},
};

test("create a question", async () => {
  const createQuestion = new CreateQuestionUseCase(mockQuestionsRepository);

  const { question } = await createQuestion.execute({
    authorId: "1",
    title: "This is the title",
    content: "This is the question",
  });

  expect(question.id).toBeTruthy();
});
