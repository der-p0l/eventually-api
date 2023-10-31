import UserRepository from "../../domain/repositories/UserRepository";
import UserService from "../../domain/services/UserService";

class UserUseCases {

  constructor(
    private userRepository: UserRepository,
    private userService: UserService
  ){}

  register(email: string, password: string) {
    if (this.userRepository.getByEmail(email) !== null) {
      throw new Error(`Email "${email}" is already in use.`);
    }

    const user = this.userService.createUser(email, password);
    this.userRepository.add(user);
  }

  login(email: string, password: string) {
    const user = this.userRepository.getByEmail(email);
    if (user === null) {
      throw new Error(`No user found with "${email}" as email.`);
    }

    if (!this.userService.validatePassword(user, password)) {
      throw new Error(`Invalid password.`);
    }

    // TODO: create and return jwt
  }

}

export default UserUseCases;
