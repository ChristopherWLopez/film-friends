import Banner from "./components/head/banner/page";
import NavBar from "./components/head/navBar/page";


export default function Home() {
  return (
    <main >
      <Banner/>
      <NavBar/>
      <p className="Testing">This is how I do it!</p>
    </main>
  );
}
