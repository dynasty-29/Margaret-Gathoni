import Skills from "../components/Skills";
function About(){
    return(
        <div className="about-me">
            <h4>About Me</h4>
            <h5> Who am I? </h5>
            <p>I'm Margaret Gathoni, a proficient Data Scientist, Front-End Developer, and Game Developer with a strong passion for building innovative and market-driven solutions. 
                With 3 years of experience in Data Science and 1 year each in Front-End Development and Game Development, I have honed my skills in data analysis, machine learning, web development, and game design. 
                My expertise includes working with cutting-edge technologies to deliver impactful and scalable solutions that meet both immediate and long-term industry demands.</p>
            <Skills />
            <div className="hire-me">
                <p>I am happy to know you and work with you</p>
            </div>
        </div>
    )
}
export default About;