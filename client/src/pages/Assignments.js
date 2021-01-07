import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
const axios = require('axios');
function WorkDone(){

    return(

        <div>


            <div id="aHeader">
                <h1>Christian Vargas's Assignments</h1>
                <br/><br/>
                <div id="metric">
                <h3>Full-stack app Development 2021</h3>
                <ul>
                    <li><h6>Difficulty: 1 = no problem at all, 5 = could not do</h6></li>
                    <li><h6>Usefulness: 1 = not a good use of time, 5 = very useful</h6></li>
                </ul>
                </div>


            </div>
        

            <Table striped bordered hover size="sm" variant="dark" id="table">
            <thead>
                <tr>
                    <td>#</td>
                    <td>Assignment</td>
                    <td>Submission</td>
                    <td>Time (hours)</td>
                    <td>Difficult (1-5)</td>
                    <td>Useful (1-5)</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1.1</td>
                    <td>Watch tutorial 1, follow along</td>
                    <td class="empty">N/A</td>
                    <td>1.5</td>
                    <td>1</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>1.2</td>
                    <td>Deploy a website to GitHub pages</td>
                    <td><a href="https://orlandpm-demo.github.io">link</a></td>
                    <td>1</td>
                    <td>2</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>1.3</td>
                    <td>Deploy an assignments page (this page!) </td>
                    <td></td>
                    <td>1.5</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>1.4*</td>
                    <td>Create a personal/professional homepage</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>1.5</td>
                    <td>Create two screens of your first app</td>
                    <td><a href=""></a></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>1.6*</td>
                    <td>Create a side-menu in CSS</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>1.7*</td>
                    <td>Create a periodic table of the elements using HTML & CSS</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>1.A</td>
                    <td>What did you like this week?</td>
                    <td colspan="4"></td>
                </tr>
                <tr>
                    <td>1.B</td>
                    <td>What didn't you like this week?</td>
                    <td colspan="4"></td>
                </tr>
                <tr>
                    <td>1.C</td>
                    <td>How can we improve the material from this week?</td>
                    <td colspan="4"></td>
                </tr>
                <tr>
                    <td>1.D*</td>
                    <td>Show us anything else you coded up this week!</td>
                    <td colspan="4"></td>
                </tr>
            </tbody>
        </Table>

        </div>
            

       
    )

}
// function ShowWeather(){
//     let city,temp;
//     axios({
//         method: 'get',

//         url: 'http://api.weatherapi.com/v1/current.json?key=412fc75e772945df97e55438210601&q=London',
//         // 'http://api.weatherapi.com/v1/key=412fc75e772945df97e55438210601&q=London',
//         headers: {
//             "Access-Control-Allow-Origin": "*"
//         }

//     }).then(weather => {
//     // console.log(weather.data);
//         city =  weather.data.location.name;
//         temp=weather.data.current.temp_f;
        
//         //console.log(current);
//     }).catch(err => { console.log(err) })
   
//     return(
//         <h1>City: {city}</h1>
//     )
// }
class Assignments extends React.Component {
    state = {
        loading: true,
        post: null,
        notFound: false,

    }

    componentDidMount() {
        
    }


    render() {
       return(
        <div>
            <WorkDone/>
            

        </div>
       )
        if (this.state.notFound) return <Redirect to="/" />;
        if (this.state.loading) return <Loading />;

        
    }
}

export default Assignments;