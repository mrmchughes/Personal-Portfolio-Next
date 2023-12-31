import Image from "next/image";

export default function Tool(props: any) {
    return (
        <figure>
            <Image 
                src={props.src} 
                alt={props.alt} 
                className="h-16 w-16"
                height={72}
                width={72}
            />
            <figcaption className="text-center">{props.caption}</figcaption>
        </figure>
    )
}