import { create } from "../controllers/tickets/create.js";
import { select } from "../controllers/tickets/select.js";
import { update } from "../controllers/tickets/update.js";

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
  },
  {
    method:'PUT',
    path:'/tickets/:id',
    controller: update
  },
];
