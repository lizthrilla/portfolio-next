
import { Conferences, Education, Writing, Work} from  './Subsection/Index'

const Resume = () => (
    <section id="resume" className="bg-light text-default-text font-sans-serif text-xl p-10 w-full">
        <Work />
        <Education />
        <Conferences />
        <Writing />
    </section>
)

export default Resume