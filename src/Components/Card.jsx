function Card({ title, value }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-xl text-gray-600">{value}</p>
    </div>
    )
}

export default Card
