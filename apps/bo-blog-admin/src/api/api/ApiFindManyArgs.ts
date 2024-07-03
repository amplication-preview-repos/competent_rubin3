import { ApiWhereInput } from "./ApiWhereInput";
import { ApiOrderByInput } from "./ApiOrderByInput";

export type ApiFindManyArgs = {
  where?: ApiWhereInput;
  orderBy?: Array<ApiOrderByInput>;
  skip?: number;
  take?: number;
};
