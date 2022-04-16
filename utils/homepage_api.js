const baseUrl = "https://example.com"

async function apiCall(method, url, data = {}) {
  const resp = await fetch(url, {
    method: method,
    credentials: "same-origin",
    headers: new Headers({ "content-type": "application/json" }),
    data: data,
  })
  const jsonData = await resp.json()
  return jsonData
}

export async function getDeals(page) {
  const res = await apiCall("GET", baseUrl + "deals/deals/")
  return res.results
}
