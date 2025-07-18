import { parseRoutePath } from "../utils/parseRoutePath.js";
import { routesTickets } from "./tickets.js";

export const routes = [...routesTickets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
