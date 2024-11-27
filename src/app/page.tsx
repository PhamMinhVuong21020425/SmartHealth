import HomePage from "./components/Home";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <>
      <HomePage />
      <hr className="mt-16 h-1.5 bg-emerald-600" />
      <Footer />
    </>
  );
};

export default Page;
