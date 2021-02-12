import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';
import { Card, CardDeck, Carousel } from 'react-bootstrap'

function Image(prop){
    console.log(prop.image);
    return(

        
        <div>

            {/* <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={prop.image.hdurl}
                    alt=""
                />
                <Carousel.Caption>
                    {prop.image.copyright}
                    {prop.image.explanation}
                </Carousel.Caption>
            </Carousel.Item> */}


            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prop.image.hdurl} />
                <Card.Body>
                    <Card.Title>{prop.image.copyright}</Card.Title>
                    <Card.Text>
                        {prop.image.explanation}
                        </Card.Text>
                    
                </Card.Body>
            </Card>
        
        </div>
        
    )
    
    // <img src="" />
}
class DisplayImage extends React.Component {
    state = {
        images:[]
    }

    componentDidMount() {
        // const { id } = this.props.match.params;
        fetch("https://api.nasa.gov/planetary/apod?api_key=ou2bvWawMCbcGuXaqdVlHtlDMahcnKi4Kgg7aRnm&count=4&thumbs=true")
            .then(res => res.json())
            .then(images => {
                this.setState({
                    images:images
                });
            })
            .catch(err => {
                this.setState({
                    images:[]
                });
            });
    }


    render() {
        return(
        // if (this.state.notFound) return <Redirect to="/" />;
        // if (this.state.loading) return <Loading />;
       this.state.images.map((picture)=>{
           
               return( 
                <div>
                    <CardDeck>
                       <Image image={picture}/>
                    </CardDeck>
                    
                </div>   
               )
           
            

       })
        )
    }
}

export default DisplayImage;