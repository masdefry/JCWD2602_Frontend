import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div className="bg-blue-500 text-white flex gap-3 py-5 px-3">
            <Link to='/'>
                <span>
                    Home 
                </span>
            </Link>
            <Link to='/login'>
                <span>
                    Login
                </span>
            </Link>
            <Link to='/todos'>
                <span>
                    Todos
                </span>
            </Link>
        </div>
    )
}