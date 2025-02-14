import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home(){

    const [searchQuery, setSearchQuery] = useState('')

    const movies = [
        {id: 1, title: 'The Shawshank Redemption', release_date: '1994', url: 'https://images.unsplash.com/photo-1612833943300-4b3b3e3b3b3b'},
        {id: 2, title: 'The Godfather', release_date: '1972', url: 'https://images.unsplash.com/photo-1612833943300-4b3b3e3b3b3b'},
        {id: 3, title: 'The Dark Knight', release_date: '2008', url: 'https://images.unsplash.com/photo-1612833943300-4b3b3e3b3b3b'},
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(`Searching for ${searchQuery}`)
        setSearchQuery('')
    }

    return (
        
        <div className="home">
            <form onSubmit={handleSearch} className="search-from" >
                <input type="text" 
                placeholder="Search for movies..." 
                className="search-input" 
                value={searchQuery}
                onChange = {(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) &&
                    (<MovieCard key={movie.id} movie={movie} />)
                ))}
            </div>
        </div>
    )

}

export default Home;