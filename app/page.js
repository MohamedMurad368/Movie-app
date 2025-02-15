import MovieList from "./Component/MovieList";
import Slider from "./Component/Slider";
export default function Home() {
  return (
    <div>
      <div className="mb-20"> 
        <Slider/>
        
      </div>
      <MovieList />
    </div>
  );
}
