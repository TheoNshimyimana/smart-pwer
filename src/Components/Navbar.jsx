

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Smart Power Management System</h1>
        <div className="space-x-4">
          <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded ">Login</button>
          <button className="bg-yellow-900 font-semibold px-4 py-2 rounded">Register</button>
        </div>
      </nav>
    )
}

export default Navbar
