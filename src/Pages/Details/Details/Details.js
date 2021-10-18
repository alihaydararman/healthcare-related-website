import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';


const Details = () => {
    const { serviceId } = useParams();
    return (
        <div className='container col-12'>
            <h2>Service Details: {serviceId}</h2>
            <CardGroup>
                <Card>
                    <Card.Img style={{ width: 'fitcontent', height: 'fitcontent' }} variant="top" src="https://i.ibb.co/JjrJkN8/General-practitioner-and-young-nurse-wearing-surgical-face-mask-against-covid-19-while-having-a-disc.jpg" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div>
    );
};

export default Details;