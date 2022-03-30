import { ChallengesRepository } from "../../src/application/repositories/challenges-repository";
import { Challenge } from "../../src/domain/entities/challenge";

export class InMemoryChallengesRepository implements ChallengesRepository {
  public repository: Challenge[] = [];

  findById(id: string): Challenge | null {
    const challenge = this.repository.find(challenge => challenge.id === id);

    if (!challenge) return null;

    return challenge;
  }
}
