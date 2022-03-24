import { InputJsonValue } from "../../types";

export type TestUpdateInput = {
  age?: number | null;
  dateOfBirth?: InputJsonValue;
  name?: string | null;
};
