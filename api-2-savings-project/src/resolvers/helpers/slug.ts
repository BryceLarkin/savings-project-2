import * as shortid from "shortid";
import slugify from "slugify";

export const slug = (str: string) => {
  const unique = `${str}-${shortid.generate()}`;

  return slugify(unique, { lower: true });
};
