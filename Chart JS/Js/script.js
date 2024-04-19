let employeeLabel = [],
    employeeSalaryData = [],
    employeeAgeData = []

async function chartAPI() {

    await callingDummyAPI()

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: employeeLabel,
            datasets: [{
                label: "Employee Salary",
                borderColor: "#588157",
                backgroundColor: "#588157",
                data: employeeSalaryData,
                borderWidth: 1
            },
            {
                label: "Employee Age",
                borderColor: "#fdf0d5",
                backgroundColor: "#fdf0d5",
                data: employeeAgeData,
                borderWidth: 1
            }
            ]
        },
        options: {
            interaction: {
                mode: 'index',
                axis: 'y'

            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

chartAPI()


// Fetching Data from Dummy API

async function callingDummyAPI() {

    const apiURL = "https://dummy.restapiexample.com/api/v1/employees"
    const response = await fetch(apiURL)
    const chartData = await response.json()


    const name = chartData.data.map((item) => (item.employee_name))
    const salary = chartData.data.map((item) => (item.employee_salary))
    const age = chartData.data.map((item) => (item.employee_age))

    employeeLabel = name
    employeeSalaryData = salary
    employeeAgeData = age


}



