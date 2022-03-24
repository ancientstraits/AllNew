import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
