import { Submission } from "../../domain/entities/submission";
import { ChallengesRepository } from "../repositories/challenges-repository";
import { StudentsRepository } from "../repositories/students-repository";

type CreateChallengeSubmissionRequest = {
  studentId: string;
  challengeId: string;
}

export class CreateChallengeSubmission {
  constructor(
    private studentsRepository: StudentsRepository,
    private challengesRepository: ChallengesRepository,
  ) { }

  execute({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const studentExists = this.studentsRepository.findById(studentId);

    if (!studentExists) {
      throw new Error("Student does not exists.");
    }

    const challengeExists = this.challengesRepository.findById(challengeId);

    if (!challengeExists) {
      throw new Error("Challenge does not exists.");
    }

    const submission = Submission.create({
      studentId,
      challengeId
    });

    return submission;
  }
}
