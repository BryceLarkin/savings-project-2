import {
  CreateSpendsInput,
  SpendAmountAndDateInput
} from "./createSpendsInput";

import { createSpendsMutation } from "./createSpendsMutation";

export const createSpends = [
  CreateSpendsInput,
  SpendAmountAndDateInput,
  createSpendsMutation
];
