export function select({ request, response, database }) {
  const { status } = request.query;
  const { id } = request.params;

  if (id) {
    const ticket = database.select("tickets", null, id);
    if (ticket) {
      return response.end(JSON.stringify(ticket));
    } else {
      return response.end(JSON.stringify({ error: "Ticket não encontrado" }));
    }
  }
  if (status) {
    const filters = status ? { status } : null;
    const tickets = database.select("tickets", filters);
    return response.end(JSON.stringify(tickets));
  }
  const tickets = database.select("tickets");
  return response.end(JSON.stringify(tickets));
}
