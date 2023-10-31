import User from "../entities/User";

interface UserRepository {
  add(user: User): void;
  getByEmail(email: string): User | null;
};

export default UserRepository;
