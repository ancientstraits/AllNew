import { InputJsonValue } from "../../types";

export type TestCreateInput = {
  age?: number | null;
  dateOfBirth?: InputJsonValue;
  name?: string | null;
};
