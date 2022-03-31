export default function fetchData(api) {
  return fetch(api)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}
