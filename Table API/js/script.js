const apiURL = "https://jsonplaceholder.typicode.com/users"


async function dummyApi() {

    await fetch(apiURL)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })

}

dummyApi()