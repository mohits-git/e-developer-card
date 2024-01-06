import { Link, NavLink} from 'react-router-dom';
import Button from './Button';
export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-slate-800 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center text-bold text-white">
                       <b>Developers-E-Card</b>
                    </Link>
                    <div className="flex items-center lg:order-2">
                    <Link to="https://github.com/mohits-git/e-developer-card" className="text-white flex items-center">
                        <b>Github Repo</b>
                        <img
                            src="https://pngimg.com/d/github_PNG90.png"
                            className="mr-2 mb-1 h-12 text-white rounded-full"
                            alt="github repository"
                        />
                    </Link>
                    </div>
                    <div className="flex items-center lg:order-1 mr-15">
                    <Link to='/create' className='flex items-center text-bold text-white'> 
                        <Button>
                            Let other developers know about you, Add your own card
                        </Button>
                    </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
