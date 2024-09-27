import Header from "./components/Header";
import { MovieProvider } from "./provider/MovieProvider";
import Main from "./components/Main";

function App() {
  return (
    <MovieProvider>
      <Header />
      <button>오늘</button>
      <button>이번주</button>
      <Main />
    </MovieProvider>
  );
}

export default App;
