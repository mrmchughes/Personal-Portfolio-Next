"use client";
import Image from "next/image";
import Link from 'next/link';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

export default function Intro() {
    return (
        <header id="about" className="flex flex-col text-center sm:flex-row sm:text-left justify-center p-2.5">
                <img
                    src="/images/profile image.webp"
                    alt="Michael Hughes"
                    className="object-contain min-h-48 max-w-sm mr-3.5"
                />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Intro
                </Typography>
                <Typography>
                    During a time when I was feeling dissatisfied in my previous career,
                    I began coding by working my way through a beginner’s book on
                    Python.
                </Typography>
                <Typography>
                    I knew even then I had found something I was truly passionate about.
                </Typography>
                <Typography> 
                    Thinking my way through logical problems and developing projects to
                    expand my skills has been a truly rewarding journey.
                </Typography>
      </header>
    )
}