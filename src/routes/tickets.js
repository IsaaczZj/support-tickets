import { create } from "../controllers/tickets/create.js";
import { remove } from "../controllers/tickets/remove.js";
import { select } from "../controllers/tickets/select.js";
import { update } from "../controllers/tickets/update.js";
import { updateStatus } from "../controllers/tickets/updateStatus.js";

export const routesTickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: select,
  },

  {
    method: "GET",
    path: "/tickets/:id",
    controller: select,
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update,
  },
  {
    method: "PATCH",
    path: "/tickets/:id/close",
    controller: updateStatus,
  },
  {
    method: "DELETE",
    path: "/tickets/:id",
    controller: remove,
  },
];
