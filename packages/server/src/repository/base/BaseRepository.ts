import mongoose, { Schema, Document, Model } from 'mongoose';

abstract class BaseRepository<T> {
  private Model: Model<T & Document>;

  protected constructor(private name: string, private schema: Schema<T>) {
    this.Model = mongoose.model(name, schema);
  }

  async create(item: T): Promise<T> {
    const result = await new this.Model({ ...item }).save();
    return { ...result };
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

  find(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
}

export default BaseRepository;
