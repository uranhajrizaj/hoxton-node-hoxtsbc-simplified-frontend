const baseUrl = "http://localhost:5555";

export function request(url: string, method: string, body: {}) {
  return fetch(`${baseUrl}${url}`, {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((resp) => resp.json());
}
