import Directory from "../../components/directory/Directory.component";
import LandingPage from "../../components/landing-page/LandingPage.component";
import Navbar from "../../components/navbar/Navbar.component";

const Homepage = () => {
  return (
    <>
      <Navbar invert={0} />
      <LandingPage />
      <Directory />
    </>
  );
};

export default Homepage;
