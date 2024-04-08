import amazonClone from "../assets/portfoliosWeb/amazon-clone.png";
import ecommerceWeb from "../assets/portfoliosWeb/ecommerce-website.png";
import bankOfReact from "../assets/portfoliosWeb/bank-of-react.png";
import ageCalculator from "../assets/portfoliosWeb/age-calculator.png";
import stopWatch from "../assets/portfoliosWeb/stopwatch.png";
import movix from "../assets/portfoliosWeb/movix.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: amazonClone,
      demo: "https://challenge-2509f.web.app/",
      gitCode: "https://github.com/rkverma2001/amazon-clone",
    },
    {
      id: 2,
      src: ecommerceWeb,
      demo: "https://ecommerce-website-17ea7.web.app/",
      gitCode: "https://github.com/rkverma2001/Ecommerce-Website.git",
    },
    {
      id: 3,
      src: movix,
      demo: "https://movix.web.app/",
      gitCode: "https://github.com/rkverma2001/Movix",
    },
    {
      id: 4,
      src: bankOfReact,
      demo: "https://vite-firebase-6fed2.web.app/",
      gitCode: "https://github.com/rkverma2001/Bank-of-React",
    },
    {
      id: 5,
      src: ageCalculator,
      demo: "https://rkverma2001.github.io/Age-Calculator/",
      gitCode: "https://github.com/rkverma2001/Age-Calculator",
    },
    {
      id: 6,
      src: stopWatch,
      demo: "https://rkverma2001.github.io/stopwatch/",
      gitCode: "https://github.com/rkverma2001/stopwatch",
    },
  ];

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here...</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, gitCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounder-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => openLinkInNewTab(demo)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => openLinkInNewTab(gitCode)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
