import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
          id="contact"
          className="flex flex-row text-center justify-center p-2.5 mt-2.5 bg-gray-50"
        >
        <div>
          <h2 className="text-3xl">Contact me</h2>
          <p className="mt-2.5 text-xl">
            Please get in touch if you think our work could be mutually
            beneficial.
          </p>
          <p className="mt-2.5 text-2xl">Newton, MA</p>
          <p className="mt-2.5 text-2xl">mrmchughes27@gmail.com</p>

          <div className="mt-2.5 flex flex-row justify-center space-x-4 mt-2.5">
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
      </footer>
    )
}