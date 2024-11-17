import { experiences } from "../files/experiences"
import ExperienceCard from "./ExperienceCard"

/**
 * Experiences component displays a collection of experiences, including jobs, internships, and volunteer work.
 * It maps over a list of experiences and renders an ExperienceCard component for each experience from the JSON file.
 * 
 * @returns {JSX.Element} The rendered component that includes a heading and a grid of experience cards.
 */
export default function Experiences() {
    
    return (
        <div className="experience">
            <h1>Experiences</h1>

            {/* Two cards per row */}
            <div className="experience-grid pt-4">
                {experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
                ))}
            </div>
             
        </div>
    )
}