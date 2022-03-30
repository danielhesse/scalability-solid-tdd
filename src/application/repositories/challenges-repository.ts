import { Challenge } from "../../domain/entities/challenge";

export interface ChallengesRepository {
  findById(id: string): Challenge | null;
}
