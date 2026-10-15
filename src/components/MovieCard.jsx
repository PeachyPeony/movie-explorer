function MovieCard({ movie }) {
    return (
        <article className="movie-card">
            <div className="movie-poster">
                {movie.poster ? (
                    <img src={movie.poster} alt={`Poster for ${movie.title}`} />
                ) : (
                    <div className="poster-placeholder">
                        <span>✧</span>
                        <p>Poster coming soon</p>
                    </div>
                )}
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <div className="movie-meta">
                    <span>{movie.year}</span>
                    <span className="movie-rating">★ {movie.rating}</span>
                </div>
            </div>
        </article>
    )
}

export default MovieCard