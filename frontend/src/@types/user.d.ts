export interface IUser {
    id:String,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  dob: Date,
  role: String,
}

export type UserContextType = {
  Users: IUser[];
  state: {};
  updateUser: (id: string, user:IUser) => void;
}