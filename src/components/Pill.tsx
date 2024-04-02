type PillProp = {
  item: string;
};

const Pill = ({ item }: PillProp) => {
  return (
    <div className="p-1 px-2 rounded-md bg-main-light">
      <p className="text-purple-primary text-nowrap">{item}</p>
    </div>
  );
};

export default Pill;
