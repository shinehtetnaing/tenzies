import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
    // const newDice = [];
    // for (let i = 0; i < 10; i++) {
    //   const rand = Math.ceil(Math.random() * 6);
    //   newDice.push(rand);
    // }
    // return newDice;
  }

  const rollDice = () => {
    setDice(generateAllNewDice());
  };

  return (
    <main className="bg-main-bg flex h-[calc(100vh-40px)] flex-col items-center justify-center rounded p-16">
      <h1 className="mb-3 text-4xl font-bold">Tenzies</h1>
      <p className="max-w-[300px] text-center text-lg">
        Roll until all dice are the same. Click each dice to freeze it at its
        current value between rolls.
      </p>
      <div className="my-10 grid grid-cols-5 gap-4 sm:gap-8 md:gap-12">
        {dice.map((value, index) => (
          <Die key={index} value={value} />
        ))}
      </div>
      <button
        onClick={rollDice}
        className="bg-btn-bg cursor-pointer rounded-lg px-12 py-3 text-lg text-white"
      >
        Roll
      </button>
    </main>
  );
}

export default App;
