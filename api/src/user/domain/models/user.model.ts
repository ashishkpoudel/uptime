export class UserModel {
  public id: string;
  public name: string;
  public emailAddress: string;
  public confirmedAt?: Date;
  public password: string;

  constructor(props?: Partial<UserModel>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}
