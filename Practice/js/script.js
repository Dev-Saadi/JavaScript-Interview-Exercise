const tableinfo = document.getElementById("table_body");
const API = "https://fakestoreapi.com/products";

fetch(API)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let tableData = "";
    data.map((item, index) => {
      tableData += `<tr><td>${item.title}</td>
      <td>${item.description}</td>
      <td>${item.price}</td>
      <td><img src="${item.image}"></td>
      </tr>`;
    });
    tableinfo.innerHTML = tableData;
  })
  .catch((error) => {
    console.log(error);
  });

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
