import { createContext, useReducer, useEffect } from "react";

// UserContext 생성: 다른 컴포넌트에서 사용할 수 있도록 내보냄
export const UserContext = createContext();

export function MovieProvider({ children }) {
  // 초기 상태 정의
  const initState = {
    loading: false, // 로딩 상태
    error: null, // 에러 메시지
    movies: [], // 영화 목록
  };

  // useReducer를 사용하여 상태 관리
  const [state, dispatch] = useReducer(reducer, initState);

  // 상태 변경을 위한 리듀서 함수
  function reducer(state, action) {
    switch (action.type) {
      case "LOADING":
        return { ...state, loading: true }; // 로딩 시작
      case "SUCCESS":
        return { ...state, loading: false, movies: action.movies }; // 성공적으로 영화 목록 받아옴
      case "ERROR":
        return { ...state, loading: false, error: action.error }; // 에러 발생
      default:
        throw new Error(`액션 오류: ${action.type}`); // 잘못된 액션 타입
    }
  }

  // 영화 목록을 가져오는 함수
  const getMovies = async () => {
    dispatch({ type: "LOADING" }); // 로딩 상태로 변경

    try {
      const key = import.meta.env.VITE_TMDB_API_KEY; // API 키 가져오기
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&language=ko-KR`
      );

      // 응답이 정상인지 확인
      if (!response.ok) {
        throw new Error(`HTTP 에러! 상태: ${response.status}`);
      }

      const data = await response.json(); // JSON 데이터 파싱
      dispatch({ type: "SUCCESS", movies: data.results }); // 영화 목록 업데이트
    } catch (e) {
      dispatch({ type: "ERROR", error: e.message }); // 에러 발생 시 상태 업데이트
    }
  };

  // 컴포넌트가 마운트될 때 한 번만 영화 목록 가져오기
  useEffect(() => {
    getMovies(); // 컴포넌트가 처음 렌더링될 때 호출
  }, []); // 의존성 배열 비워두기: 마운트 시에만 호출됨

  // UserContext.Provider로 상태를 하위 컴포넌트에 전달
  return (
    <UserContext.Provider value={{ state }}>{children}</UserContext.Provider>
  );
}
