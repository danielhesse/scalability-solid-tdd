import { InMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../../tests/repositories/in-memory-students-repository";
import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create challenge submission use case", () => {
  it("should be able to create a new challenge submission", () => {
    const studentsRepository = new InMemoryStudentsRepository();
    const challengesRepository = new InMemoryChallengesRepository();

    const student = Student.create({
      name: "Daniel Hessel",
      email: "daniel@sharbe.com.br"
    });

    const challenge = Challenge.create({
      title: "SOLID + TDD",
      instructionUrl: "http://example.com"
    });

    studentsRepository.repository.push(student);
    challengesRepository.repository.push(challenge);

    // sut = system under test (by Rodrigo Manguinho)
    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengesRepository,
    );

    const response = sut.execute({
      studentId: student.id,
      challengeId: challenge.id,
    });

    expect(response).toBeTruthy();
  });
});
