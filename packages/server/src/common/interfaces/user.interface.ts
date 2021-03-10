import { prop, Ref } from '@typegoose/typegoose';

class Address {
  @prop()
  street: string;
  @prop()
  city: string;
}

class User {
  _id: string;
  @prop()
  name: string;
  @prop()
  email: string;
  @prop()
  password: string;
  @prop()
  photoUrl?: string;
  @prop({ ref: () => Address })
  address?: Ref<Address>;
  @prop()
  lastLogin: Date;
}

export default User;
