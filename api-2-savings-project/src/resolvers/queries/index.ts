import { baseQueries } from "./baseQueries";
import * as reportData from "./reportData";

export const queries = [baseQueries, Object.values(reportData)];
