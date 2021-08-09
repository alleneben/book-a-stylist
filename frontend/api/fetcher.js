// import getCookie from "../helpers/getCookie";

export default function fetcher(query, payload) {

  let headers = { 
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.apiKey}`
  };



  return fetch('http://localhost:4000/graphql', {
    method: "POST",
    headers: headers,
    body: JSON.stringify({query}),
  })
  .then((res) => res.json())
  .then((json) => json.data)

}
