

const Card = ({ title, value }) => {
  return (
    <div className="bg-slate-200 py-6 rounded-lg shadow-md mt-8 text-center">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
};

export default Card;

