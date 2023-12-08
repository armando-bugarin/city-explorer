const Weather = (props) => {
    return (
        <>
            <h2>Weather Forecast:</h2>

            {props.weather.map((forecast, index) => (
                <><p>{forecast.date}</p><p>{forecast.description}</p></>
            ))}
        </>
    );
};

export default Weather;

// everything in here is a lab 7 addition
