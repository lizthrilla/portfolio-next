import Image from "next/image";
import sdglogo from '@/app/assets/images/orgs/sdglogo.svg';
import WWCTampa from '@/app/assets/images/orgs/WWCTampa.jpg'
import sdgjr from '@/app/assets/images/orgs/sdgjr.svg'
import techladies from '@/app/assets/images/orgs/techladies.png'

const Orgs = () => {
    return (
        <section id="organizations" className="bg-gray-dark w-full flex flex-col items-center justify-center py-10">
            <h2 className="uppercase mb-10">Organizations I have worked with:</h2>
            <div className="grid text-center md:grid-cols-4 md:max-w-5xl">
                <div className="col-span-1 m-4">
                    <Image src={sdglogo} alt={'Suncoast Developers Guild'} />
                </div>
                <div className="col-span-1 m-4">
                    <Image src={sdgjr} alt={'Suncoast Developers Guild'} />
                </div>
                <div className="col-span-1 m-4">
                    <Image src={WWCTampa} alt={'Suncoast Developers Guild'} />
                </div>
                <div className="col-span-1 m-4">
                    <Image src={techladies} alt={'Suncoast Developers Guild'} />
                </div>
            </div>
        </section>

    )
}
export default Orgs