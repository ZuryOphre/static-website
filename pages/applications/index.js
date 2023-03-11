import Footer from "../../components/footer";
import Header from "../../components/header";

function Applications() {
    return (
      <>
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-center text-3xl font-bold mb-4">Applications of Artificial Intelligence</h1>
        <p className="mb-4">
          AI has a wide range of applications in various industries, including healthcare, finance, education, and more. Some of the most common applications of AI include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Chatbots and virtual assistants</li>
          <li>Recommendation engines</li>
          <li>Fraud detection</li>
          <li>Image and speech recognition</li>
          <li>Autonomous vehicles</li>
          <li>Robotics</li>
        </ul>
        <p>
          As AI technology continues to evolve, we can expect to see even more innovative and exciting applications in the future.
        </p>
      </div>
      <Footer />
      </>
    );
  }
  
  export default Applications;
  