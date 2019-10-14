import * as fs from "fs";
import * as path from "path";
import { createStorage } from "../../config";
import { v4 as uuid } from "uuid";
import { assert } from "chai";
import { Storage } from "..";

describe.skip("Google Cloud Service functions", function() {
  it("uploads a file. Network call.", async function() {
    const gcStorage = createStorage();
    const storage = new Storage(gcStorage);

    const filePath = path.join(__dirname, "index.ts");
    const filename = `${uuid()}.ts`;

    const readStream = fs.createReadStream(filePath);

    const fileObj = await storage.uploadFile(readStream, filename);

    const bucket = gcStorage.bucket(fileObj.bucketName);
    const file = bucket.file(fileObj.filename);

    const [exists] = await file.exists();

    assert(exists, "File was not uploaded into Google Cloud Storage");

    file.delete();
  });
});
