import Image from "next/image"
import { IOrgEntry } from "@/app/data/OrganizationData"

const OrgEntry: React.FC<IOrgEntry> = ({imgSrc, link, roleTitle, altText, key}) => {
    return (
        <div className="col-span-1 my-1" key={key}>
            <a href={link} target="_blank" title={`${altText} - ${roleTitle}`}>
                <Image src={imgSrc} alt={altText} className="size-10/12 mx-auto" />
            </a>
            <h4 className="tracking-tight p-0">{roleTitle}</h4>
        </div>
    )
}

export default OrgEntry