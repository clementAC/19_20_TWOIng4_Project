const graph = document.getElementById("graph").getContext('2d');

let myChart = new Chart(graph, {
    type: "bar",
    data: {
        labels: [
            "date0",
            "date1",
            "date2",
            "date3",
            "date4",
            "date5",
            "date6",
            "date7",
            "date8"
        ],
        datasets: [
            {
                label: "Consomation en kWh",
                data: [6, 8, 9, 0, 1, 3, 5, 17, 4, 5, 7, 13, 9, 1, 3, 5, 14, 6, 8, 9, 0, 1, 3, 5, 17, 4, 5, 7, 13, 9, 1, 3, 5, 14],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgb(54, 162, 235)'
            },
        ],
    },
    options: {
        title: {
            display: true,
            text: "Oui",
            fontSize: 20,
        },
        legend: {
            display: false,
        },
        layout: {
            padding: {
                top: 20,
            },
        },
    },
});