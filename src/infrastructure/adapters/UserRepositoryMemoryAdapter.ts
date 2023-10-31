import User from "../../domain/entities/User";
import MemoryDb from "../interfaces/MemoryDb";
import UserRepository from "../../domain/repositories/UserRepository";

class UserRepositoryMemoryAdapter implements UserRepository {

  constructor(
    private db: MemoryDb
  ){}

  add(user: User): void {
    this.db.users.push(user);
  }

  getByEmail(email: string): User | null {
    return this.db.users.find((user) => user.email === email) || null;
  }

}

export default UserRepositoryMemoryAdapter;
