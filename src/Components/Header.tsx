
import { Link } from "react-router-dom"

function Header() {

  return (

    <div className="bg- max-w-[1028px] mx-auto bg-white py-1 px-20 text-1xl shadow-[0_2px_1px_rgba(0,0,0,0.1)]">
       <header className='flex justify-between'>
          <nav  className="flex items-center gap-4">
            <Link className="flex items-center gap-4" to="/about"><img src='/myimg.png' alt="Logo" className="w-12 h-12" />
            <h3>James Idris</h3></Link>
          </nav>
        <nav  className="flex items-center gap-4">
          <Link to="/home"><h3 className="hover:text-blue-900">Home</h3></Link>
          <Link to="/about"><h3 className="hover:text-blue-900">About</h3></Link>
          <Link to="/projects"><h3 className="hover:text-blue-900">Projects</h3></Link>
          <Link to="/contact.me"><h3 className="hover:text-blue-900">Contact</h3></Link>
        </nav>
       </header>
    </div>
  )
}

export default Header
