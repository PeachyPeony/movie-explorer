import './App.css'
import { movies } from './data/movies'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="site-logo" href="/">
          ☾ The Otherworld
        </a>
        <nav>
          <a href="#movies">Discover films</a>
        </nav>
      </header>
      <section className="hero">
        <p className="eyebrow">A COLLECTION OF FANTASTICAL CINEMA</p>
        <h1>Enter another world.</h1>
        <p className="hero-description">
          Discover extraordinary stories, magical realms, and worlds beyond
          the ordinary.
        </p>
        <a className="discover-button" href="#movies">
          Explore the collection
        </a>
      </section>

      <section className="movies-section" id="movies">
        <p className="eyebrow">YOUR NEXT ADVENTURE AWAITS</p>
        <h2>Discover films</h2>
        <p className="section-description">
          Find your next escape into the extraordinary.
        </p>
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
