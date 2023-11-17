import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <div className="bg-primary hover:bg-primary flex gap-3 items-center text-3xl text-white h-[50px]">
            <div>
                <Link className='' to='/'>
                    Home 
                </Link>
            </div>
            <div>
                <Link to='/profile' className=''>
                    Profile 
                </Link>
            </div>
            <div>
                <a href='/props'>
                    Props
                </a>
            </div>
        </div>
    )
}