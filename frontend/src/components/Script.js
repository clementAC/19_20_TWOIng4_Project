import React from 'react';
import axios from 'axios';
// import { Bar } from 'react-chartjs-2';

// let myChart = new Chart(graph, {
//     type: "bar",
//     data: {
//         labels: [
//             "Ber",
//             "Mfdf",
//             "Fdf",
//             "Mfdf",
//             "Fdf",
//             "Nd",
//             "MPP",
//             "Ber",
//             "Fdf"
//         ],
//         datasets: [
//             {
//                 label: "Lettre",
//                 data: [6, 8, 9, 0, 1, 3, 5, 17, 4, 5, 7, 13, 9, 1, 3, 5, 14, 6, 8, 9, 0, 1, 3, 5, 17, 4, 5, 7, 13, 9, 1, 3, 5, 14],
//                 backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                 borderColor: 'rgb(54, 162, 235)',
//                 borderWidth: 1,
//                 hoverBackgroundColor: 'rgb(54, 162, 235)'
//             },
//         ],
//     },
//     options: {
//         title: {
//             display: true,
//             text: "Consommation",
//             fontSize: 20,
//         },
//         legend: {
//             display: false,
//         },
//         layout: {
//             padding: {
//                 top: 20,
//             },
//         },
//     },
// });

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            url: 'http://localhost:3001/enedis'

        }
    }

    componentsDiMount() {
        var config = {
            method: 'get',
            url: this.state.url,
            headers: {}
        };
        axios(config)
            .then(res => {
                this.setState(state => (
                    {
                        data: res.data
                    }
                ));
            });
    }

    render() {

        this.componentsDiMount();
        return (
            <LineChart
                width={1000}
                height={300}
                data={this.state.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </LineChart>
        );
    }
}


// const Script = () => {
//     return (
//         <div>
//             <Bar
//                 data={{
//                     labels: [
//                         'A',
//                         'B',
//                         'C',
//                         'D'
//                     ],
//                     datasets: [
//                         {
//                             data: [10, 14, 4, 5]
//                         },
//                     ],
//                 }}
//             />
//         </div>
//     )
// }
// export default Script;
