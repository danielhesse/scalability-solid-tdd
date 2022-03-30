import { CreateChallengeSubmission } from "./create-challenge-submission";

describe("Create challenge submission use case", () => {
  it("should be able to create a new challenge submission", () => {
    // sut = system under test
    const sut = new CreateChallengeSubmission();

    const response = sut.execute({
      studentId: "fake-student-id",
      challengeId: "fake-challenge-id",
    });

    expect(response).toBeTruthy();
  });
});
