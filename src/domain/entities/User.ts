class User {

  public email: string;
  public password: string;

  constructor(email: string, password: string) {
    this.email = email;
    // TODO: secure password
    this.password = password;
  }

};

export default User;
