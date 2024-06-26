import logo from "./logo.svg";
import "./App.css";
import { BMI_Calculator } from "./components/BMI_Calculator";

function App() {
  return (
    <>
      <header>
        <div id="gradient-background">
          <img src="./images/logo.svg" alt="company-logo" id="logo" />
          <div className="copy-container">
            <h1 className="main-site-title">Body Mass Index Calculator</h1>
            <p>
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
        </div>
        <BMI_Calculator />
      </header>
      <section id="result-meaning">
        <img
          src="./images/image-man-eating.webp"
          alt="A man eating some food."
        />
        <img id="curve-left" src="./images/pattern-curved-line-left.svg" />
        <div className="copy-container">
          <h2>What your BMI result means</h2>
          <p>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </section>
      <section id="tips">
        <ul>
          <li>
            <img
              src="./images/icon-eating.svg"
              alt="icon representing a bowl of food."
            />
            <h3>Healthy Eating</h3>
            <p>
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </li>
          <li>
            <img
              src="./images/icon-exercise.svg"
              alt="icon representing a set of weights."
            />
            <h3>Regular exercise</h3>
            <p>
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </li>
          <li>
            <img
              src="./images/icon-sleep.svg"
              alt="icon representing a moon and stars."
            />
            <h3>Adequate sleep</h3>
            <p>
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </li>
        </ul>
      </section>
      <section id="limitations">
        <div id="limitations-description">
          <h2>Limitations of BMI</h2>
          <p>
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <img id="curve-right" src="./images/pattern-curved-line-right.svg" />
        <div className="limitation" id="gender">
          <div className="limitation-header">
            <img
              src="./images/icon-gender.svg"
              alt="an icon representing gender."
            />
            <h4>Gender</h4>
          </div>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className="limitation" id="age">
          <div className="limitation-header">
            <img
              src="./images/icon-age.svg"
              alt="an icon representing a birthday cake."
            />
            <h4>Age</h4>
          </div>
          <p>
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div className="limitation" id="muscle">
          <div className="limitation-header">
            <img
              src="./images/icon-muscle.svg"
              alt="an icon representing muscles."
            />
            <h4>Muscle</h4>
          </div>
          <p>
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </div>
        <div className="limitation" id="pregnancy">
          <div className="limitation-header">
            <img
              src="./images/icon-pregnancy.svg"
              alt="an icon representing muscles."
            />
            <h4>Pregnancy</h4>
          </div>
          <p>
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimise
            health risks for both mother and child.
          </p>
        </div>
        <div className="limitation" id="race">
          <div className="limitation-header">
            <img
              src="./images/icon-race.svg"
              alt="an icon representing the outline of a person."
            />
            <h4>Race</h4>
          </div>
          <p>
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
