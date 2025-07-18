export async function jsonHandler(request, response) {
  const buffer = [];
  for await (const chunks of request) {
    buffer.push(chunks);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffer).toString());
  } catch (error) {
    request.body = null;
  }

  response.setHeader('Content-Type', 'application/json')
}
