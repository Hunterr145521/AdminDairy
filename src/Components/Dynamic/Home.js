import React from "react";

import CanvasJSReact  from '../../assets/canvasjs.react';
import axios from 'axios'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Home extends React.Component{
    state = {
        list: []
    }
    componentDidMount() {
        let list = [];
        axios.get("https://sahebdairy.herokuapp.com/api/List").then(res =>{
            const listdata = res.data;

            listdata.map(e => {
                list.push({ y: 0, label: e.Name })
            })
        }).then(res => {
            axios.get("https://sahebdairy.herokuapp.com/api/OrderList").then(ress => {
                const result = ress.data;
                result.map(e => {
                    e.todoLists.map(r => {
                        list.map(item => {
                            if (item.label === r.Name) {
                                item.y = item.y+1;
                            }
                        })
                    })
                })

                console.log(list);
                this.setState({
                    list : list
                })
            })
        })

            .catch(err => {
            console.log(err);
        })

    }
    render() {

        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "dark2", // "light1", "dark1", "dark2"
            title:{
                text: "Trip Expenses"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: this.state.list
            }]
        }
        return(
            <div>
                <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref} */
                />
            </div>
        )
    }
}


export default Home;
