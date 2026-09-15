import "server-only";

export const getDictionary = async (_locale?: string) => {
  return import("../dictionaries/en.json").then((module) => module.default);
};
