import { useParams, Link } from 'react-router-dom'
import { movies } from '../data/movies'

function MovieDetails() {
    const { id } = useParams()

    const movie = movies.find((movie) => movie.id === Number(id))

    if (!movie) {
        return (
            <main>
                <h1>Movie not found</h1>
                <Link to="/">Back to Discover films</Link>
            </main>
        )
    }

    return (
        <main>
            <header className="site-header">
                <Link className="site-logo" to="/">
                    ☾ The Otherworld
                </Link>
                <nav>
                    <Link to="/">Discover films</Link>
                </nav>
            </header>

            <section className="movie-details">
                <p className="eyebrow">YOUR NEXT ADVENTURE AWAITS</p>

                <div className="movie-details-layout">
                    <div className="details-poster">
                        {movie.poster ? (
                            <img
                                src={movie.poster}
                                alt={`Poster for ${movie.title}`} />
                        ) : (
                            <div className="poster-placeholder">
                                <span>✧</span>
                                <p>Poster coming soon</p>
                            </div>
                        )}
                    </div>

                    <div className="details-info">
                        <h1>{movie.title}</h1>


                        <div className="movie-meta">
                            <span>{movie.year}</span>
                        </div>

                        <p className="movie-overview">{movie.overview}</p>
                        <Link className="discover-button" to="/">
                            Back to Discover films
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default MovieDetails