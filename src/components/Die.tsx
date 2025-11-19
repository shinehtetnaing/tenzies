const Die = ({
  value,
  held,
  hold,
}: {
  value: number;
  held: boolean;
  hold: () => void;
}) => {
  const bgColor = held ? "bg-green-300" : "bg-white";
  return (
    <button
      onClick={hold}
      className={`${bgColor} size-14 cursor-pointer rounded-xl text-2xl font-semibold shadow-md`}
    >
      {value}
    </button>
  );
};

export default Die;
