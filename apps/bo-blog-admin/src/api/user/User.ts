import { Api } from "../api/Api";
import { JsonValue } from "type-fest";

export type User = {
  apis?: Array<Api>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
