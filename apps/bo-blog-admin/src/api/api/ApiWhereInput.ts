import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiWhereInput = {
  authRequired?: BooleanNullableFilter;
  description?: StringNullableFilter;
  endpoint?: StringNullableFilter;
  id?: StringFilter;
  method?: "Option1";
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
