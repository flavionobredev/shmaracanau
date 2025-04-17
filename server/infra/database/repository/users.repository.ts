import { Model } from "mongoose";
import { UserSchemaType } from "../models/user";

export class UserRepository {
  constructor(private readonly userModel: Model<UserSchemaType>) {}

  async findByFirebaseUid(firebaseUid: string) {
    return await this.userModel.findOne({ firebaseUid });
  }
}
