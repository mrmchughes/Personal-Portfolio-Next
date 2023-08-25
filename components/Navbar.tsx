import Link from 'next/link';

export default function NavBar() {
    return (
        <ul>
            <Link className="flex text-3xl" href="#home">Michael Hughes</Link>
            
            <div className="flex text-center text-3xl space-x-4">
                <Link className="hover:scale-110" href="#about">About</Link>

                <Link className="hover:scale-110" href="#tools">Tools</Link>                

                <Link className="hover:scale-110" href="#myWork">My Work</Link>         

                <Link className="hover:scale-110" href="#contact">Contact</Link>             
            </div>    
        </ul>
    )
}