import { Model, Types } from "mongoose";
import { PixLinkSchemaType } from "../models/pix-link";

export class PixLinkRepository {
  constructor(private readonly pixlinkModel: Model<PixLinkSchemaType>){}

  async testFromDb() {
    await this.pixlinkModel.create({
      name: "test",
      slug: "test",
      pix_key: "test",
      pix_code: "test",
      pix_razao_social: "test",
      pix_cnpj: "test",
      created_by: new Types.ObjectId(),
    });

    return await this.pixlinkModel.find({}, {}, { lean: true });
  }
}