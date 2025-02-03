import PropTypes from "prop-types";

const StatsCard = ({ title, value, unit, trend, className }) => {
  return (
    <div className={`px-24 py-4 shadow-md rounded-xl ${className}`}>
      <h3 className="text-md font-medium ">{title}</h3>
      <p className="text-3xl font-bold">
        {value} <span className="text-lg">{unit}</span>
      </p>
      {trend && <p className="text-sm text-red-500">{trend}</p>}
    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string,
  trend: PropTypes.string,
  className: PropTypes.string,
};

export default StatsCard;
