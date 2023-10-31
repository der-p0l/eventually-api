import User from "../../domain/entities/User";

interface MemoryDb {
  users: User[],
};

export default MemoryDb;
