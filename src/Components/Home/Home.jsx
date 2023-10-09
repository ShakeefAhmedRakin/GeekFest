import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <div className="py-16">
        <Banner></Banner>
        <Services></Services>
        <div className="px-2">
          <ChooseUs></ChooseUs>
        </div>
      </div>
    </>
  );
};

export default Home;
