"use client"
import { Typography } from "@material-tailwind/react";

export default function Footer() {
    return (
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              <span>&copy; 2023 Michael Hughes | Email: mrmchughes27@gmail.com</span>
            </Typography>
          </li>
        </ul>
    </footer>
    )
}