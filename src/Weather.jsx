
import Accordion from 'react-bootstrap/Accordion';

const Weather = (props) => {
    return (
        <>
            <h2>Weather Forecast:</h2>
            <Accordion defaultActiveKey="0">

                {props.weather.map((forecast, index) => (
                    <Accordion.Item eventKey="0" key={index}>

                        <Accordion.Header><p>{forecast.date}</p></Accordion.Header>
                        <Accordion.Body><p>{forecast.description}</p></Accordion.Body>

                    </Accordion.Item>
                ))}
            </Accordion>
        </>
    );
};

export default Weather;

// everything in here is a lab 7 addition
