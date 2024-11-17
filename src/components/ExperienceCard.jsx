/**
 * ExperienceCard component renders a card displaying details of a specific experience.
 * @param {Object} experience The experience object containing details of a specific experience from the JSON file
 * @returns {JSX.Element} The rendered experience card containing all the details of the experience.
 */
export default function ExperienceCard({experience}) {

    const styles = {
        backgroundColor: 
        experience.type === "Internship" ? '#f091e4' : 
        experience.type === "Part-Time" ? '#ffc86c' :
        '#5ae0d7',
    }

    return (
        <div className="card me-4">
            <div className="card-body">
                <div>
                    <p className="card-subtitle text-body-secondary">{experience.startDate} - {experience.endDate}</p>
                    <div className="d-flex align-items-center">
                        <p className="card-title experience-title">{experience.title}</p>
                        <p className="experience-type" style={styles}>{experience.type}</p>
                    </div>
                    <p className="experience-company">
                        <i className="bi bi-geo-alt-fill" style={{color:'red'}}></i> 
                        <span className="ms-2">{experience.company}</span>
                    </p>                
                </div>
                <p className="experience-des">{experience.description}</p>
            </div>
        </div>
    )
}

