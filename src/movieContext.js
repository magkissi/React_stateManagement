import React, {useState, createContext} from 'react'

export const MovieContext = createContext();

export function MovieProvider(props) {
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$25",
            id: 123456,
        },

        {
            name: "Game of thrones",
            price: "$30",
            id: 12345678,
        },

        {
            name: "Inception",
            price: "$15",
            id: 23456,
        },
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
       </MovieContext.Provider>
    )
}



