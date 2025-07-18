import { randomUUID } from "node:crypto";

export function create({ request, response, database }) {
  const { equipment, description, user_name } = request.body;
  const newTicket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    created_at: new Date(),
    updated_at: new Date(),
  };
  database.insert("tickets", newTicket);

  return response.writeHead(201).end(JSON.stringify(newTicket));
}
