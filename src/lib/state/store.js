import create from 'zustand';

const useStore = create((set) => ({
    movies: [],
    selectedMovie: null,
    setMovies: (movies) => set({ movies }),
    setSelectedMovie: (movie) => set({ selectedMovie: movie }),
}));

export default useStore;
