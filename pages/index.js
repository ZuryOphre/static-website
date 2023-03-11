import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

function Home() {
  return (
    <>
      <Header />
      <div className=" text-center px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-4">
          Welcome to the Artificial Intelligence website!
        </h1>
        <p className="text-center text-lg text-gray-700 mb-4">
          Artificial Intelligence (AI) is a branch of computer science that aims
          to create intelligent machines that work and think like humans.
        </p>
        <p className="text-center text-lg text-gray-700 mb-4">
          Our website provides information about the history of AI, its
          applications, and the challenges faced by the field.
        </p>
        <p className="text-center text-lg text-gray-700 mb-4">
          To get started, check out the links in the navigation bar above or use
          the search bar to find specific information.
        </p>
        <Link legacyBehavior href="/history">
          <a className="text-center text-lg text-blue-500 hover:text-blue-700">
            Learn more about the history of AI &rarr;
          </a>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Home;
