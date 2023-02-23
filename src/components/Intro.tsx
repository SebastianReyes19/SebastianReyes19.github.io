import './Intro.scss'
import portrait from '../portrait.jpg'

function AboutMe(){
    return(
        <div className='intro'>
            <div className='intro Statement'>
                <h1>
                    Welcome.
                </h1>
                <p>
                    My name is Sebastian Reyes,
                    <br/>
                    Computer Science Senior at Texas A&M University.
                    <br/>
                    I currently specialize in web, software,
                    <br/>
                    game development, and computer graphics.

                </p>
            </div>
            <div className='intro Photo'>
                <img src={portrait} alt="Sebastian Reyes"/>
            </div>
        </div>
    )
}

export default AboutMe;