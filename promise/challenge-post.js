import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

// POST METHOD
function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "Isra Product",
  price: 999,
  description: "A description to Isra Product",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));

// DELETE METHOD
// function deleteData(urlApi, id) {
//   const response = fetch(urlApi, {
//     method: "DELETE",
//     mode: "cors",
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: id,
//   });
//   return response;
// }

// const id = 394;

// deleteData(`${API}/products`, id)
//   .then((response) => response.json())
//   .then((product) => console.log(`id del producto eliminado: ${id}`))
//   .catch((error) => console.error(error));
