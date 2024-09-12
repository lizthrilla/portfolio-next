'use client'
import { IOrgEntry, OrgData } from "../data/OrganizationData";
import OrgEntry from "../components/Org/OrgEntry";


const Orgs = () => {
    return (
        <section id="organizations" className="bg-gray-dark w-full flex flex-col items-center justify-center py-10">
            <h2 className="uppercase mb-10">Organizations I have worked with:</h2>
            <div className="grid text-center md:grid-cols-5">
                {
                    OrgData.map((org:IOrgEntry, i: number) => (
                        <OrgEntry imgSrc={org.imgSrc} link={org.link} altText={org.altText} roleTitle={org.roleTitle} key={i} />
                    ))
                }
            </div>
        </section>

    )
}
export default Orgs