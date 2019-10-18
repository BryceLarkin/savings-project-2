import { baseQueries } from "./baseQueries";
import * as spend from "./spend";

export const queries = [baseQueries, Object.values(spend)];
