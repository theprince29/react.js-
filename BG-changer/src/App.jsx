import { useState } from "react";
import "././App.css"
function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{   
          background: color,
          backgroundSize: '400% 400%',
          animation: 'gradientAnimation 3s infinite alternate',}}
      ></div>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-sm">

          <button
            onClick={() => {
              setcolor("linear-gradient(-45deg,#ae2012, #ff0000,#e63946)");
            }}
            className="outline-none px-4 rounded-sm text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => {
              setcolor("linear-gradient(-45deg,  #00FF00,#1b9200,	#007c15)");
            }}
            className="outline-none px-4 rounded-sm text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => {setcolor("linear-gradient(-45deg, #003366, #3399CC, #66CCFF)");}
          }
            className="outline-none px-4 rounded-sm text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

        </div>
      </div>
    </>
  );
}

export default App;
