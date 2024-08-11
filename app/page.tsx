import Banner from "./components/head/banner/page";
import NavBar from "./components/head/navBar/page";
import Movies from "./components/movie/page";


export default function Home() {
  return (
    <>
      <Movies />
      <Banner/>
      <NavBar/>
      
    </>
  );
}
