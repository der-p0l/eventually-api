import User from "../entities/User";

class UserService {

  createUser(email: string, password: string) {
    return new User(
      email,
      password
    );
  }

  validatePassword(user: User, password: string) {
    // TODO: secure password
    return user.password === password;
  }

}

export default UserService;
