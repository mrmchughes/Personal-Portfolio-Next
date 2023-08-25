import Link from 'next/link';
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiArrowTopRightBoldBox } from "@mdi/js";

export default function Project(props: any) {
    return (
      <div className="shadow-md bg-gray-50 p-2.5">
        <Image
            src={props.src}
            className="w-full h-36 mb-2"
            alt=""
            height={144}
            width={144}
        />
        
        <div>
          <div className="flex justify-evenly flex-row space-x-4">
            <p className="text-xl">{props.projectName}</p>


            <Link className="" href={props.repositoryUrl}>
                <label className='text-lg'>
                    Repo
                </label>
                <Image 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    className="h-8 w-8 hover:scale-110"
                    alt="Repo"
                    height={25}
                    width={25}
                />
            </Link>

            <Link className='' href={props.livePreview}>
                <label className='text-lg'>Live</label>
                <Icon
                    path={mdiArrowTopRightBoldBox}
                    size={1.4}
                    className="hover:scale-110"
                />
            </Link>
          </div>
          <p className="mt-2.5">{props.description}</p>
          <p className="mt-2.5">{props.builtWith}</p>
        </div>
      </div>
    );
  }