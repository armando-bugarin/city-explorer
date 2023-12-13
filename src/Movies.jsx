
const Movies = (props) => {
    return (
        <>
            <h2>Movies:</h2>
            {movies.map((movie) => (
                <div key={movie.title}>
                    <h3>{movie.title}</h3>
                    <h3>{movie.overview}</h3>
                    <h3>{movie.averageVotes}</h3>
                    <h3>{movie.totalVotes}</h3>
                    <h3>{movie.imageUrl}</h3>
                    <h3>{movie.popularity}</h3>
                    <h3>{movie.releasedOn}</h3>
                </div>
            ))}
        </>
    );
};

export default Movies;

/// lab 8.2 addition ///
