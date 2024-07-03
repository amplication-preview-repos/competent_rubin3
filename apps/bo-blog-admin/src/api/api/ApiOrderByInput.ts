import { SortOrder } from "../../util/SortOrder";

export type ApiOrderByInput = {
  authRequired?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endpoint?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
