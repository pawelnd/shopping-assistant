interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  address?: {
    street: string;
    city: string;
  };
  lastLogin: Date,
}

export default User;
