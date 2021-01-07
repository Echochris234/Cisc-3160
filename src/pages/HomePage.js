import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';
const axios = require('axios');
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
class HomePage extends React.Component {
    state = {
        loading: true,
        post: null,
        notFound: false,

    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                {/* <ShowWeather/> */}
                <h1>Hello Welcome to my Portfolio Page</h1>
                <h2>UPDATE ALERT</h2>

            </div>
        )
        //if (this.state.notFound) return <Redirect to="/" />;
        // if (this.state.loading) return <Loading />;


    }
}

export default HomePage;