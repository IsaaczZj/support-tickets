import { randomUUID } from "node:crypto";

export function create({ request, response }) {
  const { equipment, description, user_name } = request.body;
  const newTicket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
  };

  return response.end(JSON.stringify(newTicket));
}
