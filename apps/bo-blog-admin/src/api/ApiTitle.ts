import { Api as TApi } from "./api/Api";

export const API_TITLE_FIELD = "name";

export const ApiTitle = (record: TApi): string => {
  return record.name?.toString() || String(record.id);
};
