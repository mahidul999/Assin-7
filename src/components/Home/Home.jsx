import Footer from "../Shared/Footer";
import Header from "./Header/Header";
import PlayerSelection from "./PlayerSelection/PlayerSelection";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Header />
      <PlayerSelection />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
