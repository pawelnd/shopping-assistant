import mongoose, {
  Schema,
  Document,
  Model,
  DocumentQuery,
  MongooseFilterQuery,
} from 'mongoose';
import User from '../../common/interfaces/user.interface';

abstract class BaseRepository<T> {
  protected Model: Model<T & Document>;

  protected constructor(private name: string, private schema: Schema<T>) {
    this.Model = mongoose.model(name, schema);
  }

  async create(item): Promise<T> {
    const result = await new this.Model({ ...item }).save();
    return { ...result };
  }

  async createOrUpdate(item: T): Promise<T> {
    const query = item as MongooseFilterQuery<T>;
    const id = query._id ?? null;
    const newitem = await this.Model.findOneAndUpdate(
      id ? { _id: id } : {},
      item,
      {
        upsert: true,
        setDefaultsOnInsert: true,
      },
    );
    return newitem.toObject();
  }

  update(id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<T[]> {
    const result = await this.Model.find({});
    return result;
  }

  async removeAll(): Promise<number> {
    const result = await this.Model.remove({});
    return result.deletedCount;
  }

  find(item): Promise<T[]> {
    return this.Model.find(item).exec();
  }

  async findOne(item): Promise<T> {
    return (await this.Model.findOne(item).exec()).toJSON();
  }

  async findById(id: string): Promise<T> {
    return (await this.Model.findById(id).exec()).toJSON();
  }
}

export default BaseRepository;
