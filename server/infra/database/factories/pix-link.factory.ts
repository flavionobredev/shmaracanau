import { PixLinkModel } from "../models/pix-link";
import { PixLinkRepository } from "../repository/pix-link.repository";

export const makePixLinkRepository = () => {
  return new PixLinkRepository(PixLinkModel);
};
