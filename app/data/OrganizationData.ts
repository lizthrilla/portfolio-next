
import { sdgjr, sdglogo, techladies, WomensTechNetwork, WWCTampa } from "../assets/images/orgs/Index";

export interface IOrgEntry {
    altText: string;
    roleTitle: string;
    imgSrc: any;
    link?: string;
}

export const OrgData = [
    {
        altText: 'Suncoast Developers Guild',
        roleTitle: `Developer Avocado`,
        imgSrc: sdglogo,
        link: "https://www.suncoast.io"
    },
    {
        altText: 'Suncoast Developers Guild Jr',
        roleTitle: "Former Organizer",
        imgSrc: sdgjr,
        link: "https://suncoast.io/jr"
    },
    {
        altText: "Women Who Code - Tampa",
        roleTitle: "Former Co-Director",
        imgSrc: WWCTampa,
    },
    {
        altText: "Tampa Bay Women's Tech Network",
        roleTitle: "Former Organizer",
        imgSrc: WomensTechNetwork,
    },
    {
        altText: "Tech Ladies",
        roleTitle: "Former Organizer",
        imgSrc: techladies,
        link: "https://www.hiretechladies.com"
    }
]