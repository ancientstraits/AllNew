import { JsonValue } from "type-fest";

export type Test = {
  age: number | null;
  createdAt: Date;
  dateOfBirth: JsonValue;
  id: string;
  name: string | null;
  updatedAt: Date;
};
