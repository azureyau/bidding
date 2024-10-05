import Footer from "./Footer";
import Navbar from "./Navbar.jsx";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <br />
      <br />
      {props.children}
      <br />
      <br />
      <Footer />
    </>
  );
}
