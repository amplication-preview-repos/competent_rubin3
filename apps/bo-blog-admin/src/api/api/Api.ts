import { User } from "../user/User";

export type Api = {
  authRequired: boolean | null;
  createdAt: Date;
  description: string | null;
  endpoint: string | null;
  id: string;
  method?: "Option1" | null;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
