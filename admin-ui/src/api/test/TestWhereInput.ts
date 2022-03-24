import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TestWhereInput = {
  age?: IntNullableFilter;
  dateOfBirth?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
