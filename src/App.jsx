import Header from "./components/Header";
import { MovieProvider } from "./provider/MovieProvider"; // UserProvider -> MovieProvider로 수정
import Main from "./components/Main";

function App() {
  return (
    <>
      <MovieProvider>
        <Header />
        <Main />
      </MovieProvider>
    </>
  );
}

export default App;
