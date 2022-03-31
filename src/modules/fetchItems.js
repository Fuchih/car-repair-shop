export default function fetchItemsData() {
  const itemsData =
    'https://res.cloudinary.com/t19887348/raw/upload/v1648694975/service-items_mgnfpi.json'

  return fetch(itemsData)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}
