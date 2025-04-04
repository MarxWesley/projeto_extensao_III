const { Link } = require("react-router-dom");

function Navbar() {
    <nav>
        <Link to='/'>
            <img src="" alt="Logo do Instituto"/>
        </Link>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/comoajudar'>Como ajudar?</Link></li>
        </ul>
        <h1> ola mundo</h1>
    </nav>
}

export default Navbar