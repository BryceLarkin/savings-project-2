import { Storage as GCStorage } from "@google-cloud/storage";
import { ReadStream } from "fs";
import { keys } from "../../config";
import * as shortid from "shortid";

interface IUpload {
  createReadStream: () => ReadStream;
  filename: string;
  mimetype: string;
  encoding: string;
}

export interface IStorage {
  uploadFile(
    filePromise: any,
    bucketName: string
  ): Promise<{ filename: string; bucketName: string }>;
  getSignedUrl(filename: string, bucketName: string): Promise<string>;
}

class Storage implements IStorage {
  storage: GCStorage;
  constructor(storage: GCStorage) {
    this.storage = storage;
  }

  async uploadFile(filePromise: any, bucketName = keys.google.storageBucket) {
    const { createReadStream, filename } = (await filePromise) as IUpload;

    const readStream = createReadStream();

    const bucket = this.storage.bucket(bucketName);

    const uniqueFilename = `${shortid()}-${filename}`;

    const file = bucket.file(uniqueFilename);

    return new Promise<{ filename: string; bucketName: string }>(
      (resolve, reject) =>
        readStream
          .pipe(file.createWriteStream({ gzip: true }))
          .on("error", e => {
            console.error("Error uploading file in uploadFile function", e);
            reject(e);
          })
          .on("finish", () => resolve({ filename: uniqueFilename, bucketName }))
    );
  }

  async getSignedUrl(filename: string, bucketName: string) {
    const bucket = this.storage.bucket(bucketName);

    const file = bucket.file(filename);

    const ONE_HOUR = 1000 * 60 * 60;
    const expires = Date.now() + ONE_HOUR;

    const [signedUrl] = await file.getSignedUrl({
      expires,
      action: "read"
    });

    return signedUrl;
  }
}

export { Storage };
