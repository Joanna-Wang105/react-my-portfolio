/**
 * About component renders information about my background (educational backgrounds and personal experience) and skills 
 * @returns {JSX.Element} The rendered About component containing my backgrouds and skills I have.
 */
export default function About() {
    const programmingSkills = ["Python", "Java", "C", "HTML", "CSS", "JavaScript", "React", "SQL", "Spark", "Assembly Language", "R", "Bash", "MATLAB"]
    const languages = ['Mandarin', 'English', 'Japanese']
    const softSkills = ['Teamwork', 'Communication', 'Problem Sovling', 'Responsibility', 'Time Management']

    return (
        <div className="nav-bg">
            <div className="about-me">
                {/* Personal Background */}
                <h1>Who Am I</h1>
                    <p>
                        I am a motivated international student from Taiwan, studying Bachelor of Computer Science / Master of Cyber Security at The University of Queensland. 
                        Over the past 8 years, I have been studying in Australia under a student visa, continuously challenging myself to adapt diffrent environments. 
                        I am passionate about learning new things and unlocking my full potential across various skill sets. <br />
                        With one and a half years of progressive experience in programming, I have learned various programming languages that have significantly enhanced my skills and expanded my field of computer science. 
                        Throughout my degree, I have developed both programming and development skills through individual assignments and collaborative team projects. <br />
                        Besides my technical abilities, I am trilingual, fluent in Madarin, English, and Japanese. I enjoy exploring my diverse interests and specialising in them during my leisure time. 
                        Having been born and raised in the multicultural environemnts of Taiwan and Australia, I have learned to see things from multiple prespectives and respect different cultures. 
                        This background enables me to challange myself in unfamiliar environment and accelerats my learning.
                    </p>

                {/* Skills */}
                <h2 style={{marginLeft: '2%', paddingTop: '20px', paddingBottom: '10px'}}>
                    My Skills
                </h2>

                <div class="accordion" id="accordionSkills">
                    {/* Technical/Programming skills */}
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Programming Skills
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionSkills">
                            <div class="accordion-body">
                                <div className="skill-section">
                                        {programmingSkills.map((eachSkill) => 
                                            <div className="each-skill">
                                                <p>{eachSkill}</p>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Languages */}
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Languages
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionSkills">
                            <div class="accordion-body">
                                <div className="skill-section">
                                            {languages.map((language) => 
                                            <div className="each-skill">
                                                <p>{language}</p>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Soft Skills
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionSkills">
                            <div class="accordion-body">
                                <div className="skill-section">
                                    {softSkills.map((softSkill) => 
                                        <div className="each-skill">
                                            <p>{softSkill}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}