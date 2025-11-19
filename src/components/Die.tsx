const Die = ({ value }: { value: number }) => {
  return (
    <button className="size-14 cursor-pointer rounded-xl text-2xl font-semibold shadow-md">
      {value}
    </button>
  );
};

export default Die;
