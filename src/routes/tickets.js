import { create } from "../controllers/tickets/create.js";

export const routesTickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
];
