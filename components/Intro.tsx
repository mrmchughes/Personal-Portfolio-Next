import Image from "next/image";
import Link from 'next/link';

export default function Intro() {
    return (
        <header
            id="about"
            className="flex flex-col text-center sm:flex-row sm:text-left justify-center p-2.5"
        >
            <Image         
                src="/images/profile image.webp"
                className="object-contain min-h-48 max-w-sm mr-3.5"
                height={144}
                width={144}
                alt="Michael Hughes" 
            />
        
            <div>
                <div>
                    <p className="text-2xl">About me</p>
                    <p className="mt-2.5 max-w-md text-xl">
                        During a time when I was feeling dissatisfied in my previous career,
                        I began coding by working my way through a beginner’s book on
                        Python.
                    </p>
                    <p className="mt-2.5 max-w-md text-xl">
                        I knew even then I had found something I was truly passionate about.
                    </p>
                    <p className="mt-2.5 max-w-md text-xl">
                        Thinking my way through logical problems and developing projects to
                        expand my skills has been a truly rewarding journey.
                    </p>
                </div>
                
                <div className="mt-2.5 flex flex-row justify-center sm:justify-end space-x-4">
                    <Link href="https://github.com/mrmchughes">
                        <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                            className="h-10 w-10 hover:scale-110"
                            height={144}
                            width={144}
                            alt="Link to Github Profile"
                        />
                    </Link>
                    
                    <Link href="https://www.linkedin.com/in/michaelhughes27/">
                        <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            className="h-10 w-10 hover:scale-110"
                            height={144}
                            width={144}
                            alt="Link to LinkedIn Profile"
                        />
                    </Link>                   
                </div>
            </div>
      </header>
    )
}