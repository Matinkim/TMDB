import Header from "./components/Header";
import Movie from "./components/Movie";
import { dummy } from "./Moviedummy";
import Footer from "./components/Footer";
import { MovieProvider } from "./provider/MovieProvider";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <UserProvider>
        <Main />
      </UserProvider>
    </div>
  );
}

export default App;
