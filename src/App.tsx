import Die from "./components/Die";

function App() {
  return (
    <main className="bg-main-bg flex h-[calc(100vh-40px)] flex-col items-center justify-center rounded p-16">
      <h1 className="mb-3 text-4xl font-bold">Tenzies</h1>
      <p className="max-w-[300px] text-center text-lg">
        Roll until all dice are the same. Click each dice to freeze it at its
        current value between rolls.
      </p>
      <div className="my-10 grid grid-cols-5 gap-4 sm:gap-8 md:gap-12">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
      </div>
      <button className="bg-btn-bg cursor-pointer rounded-lg px-12 py-3 text-lg text-white">
        Roll
      </button>
    </main>
  );
}

export default App;
