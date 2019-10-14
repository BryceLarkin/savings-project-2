import { IStorage } from "../services/Storage/Storage";
import { keys } from "../config";
import { v4 as uuid } from "uuid";

class Storage implements IStorage {
  constructor() {}

  async uploadFile(filePromise: any, bucketName = keys.google.storageBucket) {
    return {
      filename: uuid(),
      bucketName: "MOCKED_BUCKETNAME"
    };
  }

  async getSignedUrl(filename: string, bucketName: string) {
    return filename;
  }
}

export { Storage };
