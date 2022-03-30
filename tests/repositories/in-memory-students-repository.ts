import { StudentsRepository } from "../../src/application/repositories/students-repository";
import { Student } from "../../src/domain/entities/student";

export class InMemoryStudentsRepository implements StudentsRepository {
  public repository: Student[] = [];

  findById(id: string): Student | null {
    const student = this.repository.find(student => student.id === id);

    if (!student) return null;

    return student;
  }
}
