import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiCreateInput = {
  authRequired?: boolean | null;
  description?: string | null;
  endpoint?: string | null;
  method?: "Option1" | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
