import HomePage from "./components/Home";
import Footer from "./components/Footer";
import { globSync } from "glob";

const Page = () => {
  const productImages = globSync("public/images/*.product.{png,jpg}")
    .map((file: string) => {
      return file.replace("public", "").replaceAll("\\", "/");
    })
    .sort((a, b) => {
      const matchA = a.match(/\/(\d+)\.product\./);
      const matchB = b.match(/\/(\d+)\.product\./);
      const numA = matchA ? parseInt(matchA[1]) : 0;
      const numB = matchB ? parseInt(matchB[1]) : 0;
      return numA - numB;
    });

  return (
    <>
      <HomePage productImages={productImages} />
      <hr className="mt-16 h-1.5 bg-emerald-600" />
      <Footer />
    </>
  );
};

export default Page;
