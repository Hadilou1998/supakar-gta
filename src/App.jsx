import { useState } from "react";
import supakarLogo from "../public/logo.png";

// Cars color
import brownCar from "../public/cars/brown.png";
import grayCar from "../public/cars/gray.png";
import greenCar from "../public/cars/green.png";
import purpleCar from "../public/cars/purple.png";
import skyCar from "../public/cars/skyblue.png";
import yellowCar from "../public/cars/yellow.png";

// Sounds
import loadingSound from "../public/sounds/loading.mp3";
import selectSound from "../public/sounds/select.wav";
import spraySound from "../public/sounds/spray.wav";

function App() {
  const [CarImage, setCarImage] = useState(yellowCar);

  const colors = [
    {
      name: "brown",
      image: brownCar,
    },
    {
      name: "gray",
      image: grayCar,
    },
    {
      name: "green",
      image: greenCar,
    },
    {
      name: "yellow",
      image: yellowCar,
    },
    {
      name: "sky",
      image: skyCar,
    },
    {
      name: "purple",
      image: purpleCar,
    },
  ];

  const loading = new Audio(loadingSound);
  const select = new Audio(selectSound);
  const spray = new Audio(spraySound);
  /**
  Lancer un son
  audio.play();
  */

  /**
  Mettre en place un delai en ms
    setTimeout(() => {}, 1300);
 */

  const changeColor = (e) => {
    e.preventDefault();
    const color = e.target.getAttribute("data-color");
    console.log(color);
    select.play();
    setTimeout(() => {
      spray.play();
    }, 500);
    setTimeout(() => {
      setCarImage(
        colors.find((c) => c.name === color).image);
    }, 900);
  };

  return (
    <>
      <div
        className="p-5 flex flex-col items-center justify-center h-screen"
        style={{
          backgroundImage: "url('" + CarImage + "')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="p-10 flex flex-col items-center justify-center shadow-2xl rounded-2xl w-96 bg-white bg-opacity-70">
          <div className="w-64 mb-10">
            <img src={supakarLogo} alt="Supakar Logo" />
            {colors.map((color) => (
              <button
                key={color.name}
                data-color={color.name}
                className={
                  "bg-" + color.name + "-500 text-white p-2 text-xl rounded-md"
                }
                onClick={changeColor}
              >
                {color.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;