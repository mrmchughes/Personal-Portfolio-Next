import Link from 'next/link';
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiArrowTopRightBoldBox } from "@mdi/js";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Project(props: any) {
    return (
      <div className="shadow-md bg-gray-50 p-2.5">
        <Image
            src={props.src}
            className=""
            alt=""
            height={72}
            width={72}
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