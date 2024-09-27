import Header from "./components/Header";
import Movie from "./components/Movie";
import { dummy } from "./Moviedummy";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="app-container">
        {dummy.results.map((item) => (
          <Movie
            key={item.id}
            title={item.title}
            poster_path={item.poster_path}
            // vote_average={item.vote_average}
            release_date={item.release_date}
            // overview={item.overview}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
