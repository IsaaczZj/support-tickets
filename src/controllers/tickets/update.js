export function update({ request, response, database }) {
  const { id } = request.params;
  const { equipment, description } = request.body;
  const updatedTicket = {
    equipment,
    description,
    updated_at: new Date(),
  };
  const ticket = database.update("tickets", id, updatedTicket);
  return response.end(JSON.stringify(ticket));
}
