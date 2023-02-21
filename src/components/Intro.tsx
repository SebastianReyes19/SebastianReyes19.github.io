import './Intro.scss'
import portrait from '../portrait.jpg'

function AboutMe(){
    return(
        <div id='introContent'>
        <div className='intro Statement'>
            <h1>
                Welcome.
            </h1>
            <p>
                My name is Sebastian Reyes
                <br/>
                a Computer Science Undergraduate at Texas A&M University.
                <br/>
                I currently specialize in web, software, and 
                <br/>
                game development and computer graphics.

            </p>
        </div>
        <div className='intro Photo'>
            <img src={portrait} alt="Sebastian Reyes"/>
        </div>
        </div>
    )
}

export default AboutMe;