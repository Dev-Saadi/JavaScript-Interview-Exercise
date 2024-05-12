fetch("json/flights.json").then((res) => res.json())
    .then(data => {
        data.forEach(item => {
            console.log(item);
        });
    })