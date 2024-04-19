
const apiURL = "https://dummyjson.com/products"



fetch(apiURL)
    .then(res => res.json())
    .then(res => {
        const data = res.products;
        let rows = "";
        data.forEach(products => {
            rows += `<tr>
            <td>${products.id}</td>
            <td>${products.title}</td>
            <td>${products.description}</td>
            <td>${products.price}</td>
            <td>${products.discountPercentage}</td>
            <td>${products.rating}</td>
            <td>${products.stock}</td>
            <td>${products.brand}</td>
            <td>${products.category}</td>
            <td><img src="${products.thumbnail}" style="width:30%"></td>
            </tr>`
        });

        document.getElementById('tableRows').innerHTML = rows;
    })
    .catch((error) => {
        console.log(error);
    })