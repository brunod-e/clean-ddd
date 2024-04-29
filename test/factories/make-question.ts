import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import {
  Question,
  QuestionProps,
} from "@/domain/forum/enterprise/entities/question";
import { Slug } from "@/domain/forum/enterprise/entities/value-objects/slug";

export function makeQuestion(override: Partial<QuestionProps> = {}): Question {
  const question = Question.create({
    authorId: new UniqueEntityId(),
    title: "This is the title",
    content: "This is the content",
    slug: Slug.create("this-is-the-question"),
    ...override,
  });

  return question;
}
