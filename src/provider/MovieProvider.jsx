import { createContext, useReducer, useCallback } from "react";

export const UserContext = createContext();

export function MovieProvider({ children }) {
  const initState = {
    loading: false,
    error: null,
    movies: [],
  };

  const [state, dispatch] = useReducer(reducer, initState);

  function reducer(state, action) {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true };
      case "SUCCESS":
        return { ...state, loading: false, movies: action.movies };
      case "ERROR":
        return { ...state, loading: false, error: action.error };
      default:
        throw new Error(`액션 오류: ${action.type}`);
    }
  }

  const getMovies = useCallback(async () => {
    dispatch({ type: "LOADING" });

    try {
      const key = import.meta.env.VITE_TMDB_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&language=ko-KR`
      );

      if (!response.ok) {
        throw new Error(`HTTP 에러! 상태: ${response.status}`);
      }

      const data = await response.json();
      dispatch({ type: "SUCCESS", movies: data.results });
    } catch (e) {
      dispatch({ type: "ERROR", error: e.message });
    }
  }, []);

  return (
    <UserContext.Provider value={{ state, getMovies }}>
      {children}
    </UserContext.Provider>
  );
}
