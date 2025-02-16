import MovieList from "./Component/MovieList";
import Slider from "./Component/Slider";
export default function Home() {
  return (
    <div>
      <div className="mb-10"> 
        <Slider/>
        
      </div>
      <MovieList />
    </div>
  );
}
