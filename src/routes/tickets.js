import { create } from "../controllers/tickets/create.js";
import { select } from "../controllers/tickets/select.js";

export const routesTickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method:'GET',
    path:'/tickets',
    controller: select
  }
];
