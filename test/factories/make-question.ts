import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import {
  Question,
  QuestionProps,
} from "@/domain/forum/enterprise/entities/question";
import { Slug } from "@/domain/forum/enterprise/entities/value-objects/slug";

import { faker } from "@faker-js/faker";

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityId
): Question {
  const question = Question.create(
    {
      authorId: new UniqueEntityId(),
      title: faker.lorem.sentences(1),
      content: faker.lorem.text(),
      slug: Slug.create("this-is-the-question"),
      ...override,
    },
    id
  );

  return question;
}
