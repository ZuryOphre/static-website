import Header from "../../components/header";
import Footer from "../../components/footer";

function Challenges() {
  return (
    <>
    <Header />
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-center text-3xl font-bold mb-4">Challenges</h1>
          <p className="mb-4">
            Artificial intelligence has been the subject of many challenges and
            competitions over the years. Here are a few notable ones:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <a
                href="https://www.kaggle.com/c/titanic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Kaggle Titanic Machine Learning Competition
              </a>{" "}
              - A challenge to build the best machine learning model to predict
              which passengers survived the Titanic shipwreck.
            </li>
            <li className="mt-2">
              <a
                href="https://www.kaggle.com/c/digit-recognizer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Kaggle Digit Recognizer Competition
              </a>{" "}
              - A challenge to build a model that can recognize handwritten
              digits.
            </li>
            <li className="mt-2">
              <a
                href="https://www.image-net.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ImageNet Large Scale Visual Recognition Challenge
              </a>{" "}
              - A challenge to classify images into one of 1000 categories.
            </li>
          </ul>
          <p>
            These challenges have spurred a great deal of research and innovation
            in the field of artificial intelligence, and have led to many advances
            in machine learning and computer vision.
          </p>
        </div>
      </div>
      <Footer />
      </>
  );
}

export default Challenges;
