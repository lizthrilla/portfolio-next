import Work from './Work';
import Education from './Education'

const Resume = () => (
    <section id="resume" className="bg-light text-default-text font-sans-serif text-xl p-10 w-full">
        <Work />
        <Education />
    </section>
)

export default Resume