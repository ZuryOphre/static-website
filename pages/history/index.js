import Header from "../../components/header";
import Footer from "../../components/footer";

function History() {
  return (
    <>
      <Header />
      <div className=" text-center max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">History of Artificial Intelligence</h1>
        <p className="text-center text-lg mb-6">
          The history of AI dates back to the mid-20th century, when the idea of
          creating intelligent machines was first proposed. Since then, AI has
          gone through several phases of development and has had a significant
          impact on many areas of society.
        </p>
        <p className="text-lg">
          Some of the key milestones in the history of AI include the creation of
          the first neural network in the 1950s, the development of expert
          systems in the 1970s and 1980s, and the rise of machine learning and
          deep learning in recent years.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default History;
