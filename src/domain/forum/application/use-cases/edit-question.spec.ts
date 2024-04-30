import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { makeQuestion } from "test/factories/make-question";
import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository";
import { EditQuestionUseCase } from "./edit-question";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let sut: EditQuestionUseCase;

describe("Edit Question", () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository();
    sut = new EditQuestionUseCase(inMemoryQuestionsRepository);
  });

  it("should be able to edit a question", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId("author-1"),
      },
      new UniqueEntityId("question-1")
    );

    inMemoryQuestionsRepository.create(newQuestion);

    await sut.execute({
      questionId: newQuestion.id.toValue(),
      authorId: "author-1",
      title: "New title",
      content: "New content",
    });

    expect(inMemoryQuestionsRepository.items[0]).toMatchObject({
      title: "New title",
      content: "New content",
    });
  });

  it("should be not able to edit a question from another author", async () => {
    const newQuestion = makeQuestion(
      {
        authorId: new UniqueEntityId("author-1"),
      },
      new UniqueEntityId("question-1")
    );

    inMemoryQuestionsRepository.create(newQuestion);

    expect(() =>
      sut.execute({
        questionId: newQuestion.id.toValue(),
        authorId: "author-2",
        title: "New title",
        content: "New content",
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
