import './Projects.scss' 
import './Button.scss'
import Ray from '../RayTracing.png'
import { useEffect, useState } from 'react';

function Projects(){
    //objects
    const RayTracing = () => {
        return(
            <div className='block'>
                <div className='desc'>
                    <h1>
                        Ray Tracing Algorithm
                    </h1>
                    <p>
                        Simple Ray Tracing Algorithm done in OpenGL
                        using OpenGL Mathematics.
                        <br/>
                        <br/>
                        Complicated, but is capable of rendering various objects
                        in a scene.
                        <br/><br/>
                        Available 
                        <a href='https://github.com/SebastianReyes19/RayTracing'>Here</a>
                    </p>
                </div>
                <div className='photo'>
                    <img src={Ray} alt="Ray Tracing"/>
                </div>
            </div>
        )
    }

    //main proj
    const projects = [<RayTracing/>];
    //functionality
    const [proj, selProj] = useState(projects[0]);
    const [currProj, setCurrProj] = useState(0);

    function setProj(){
        if (currProj + 1 >= projects.length){
            setCurrProj(0);
        }else{
            setCurrProj(currProj + 1);
        }
    }

    useEffect(()=>{
        selProj(projects[currProj]);
    }, [currProj]
    )

    return (
        <div className='container'>
            {proj}
            <div>
                <button className='Next-Button' onClick={setProj}>
                    Next {'>>'}
                </button>
            </div>
        </div>
    )
}

export default Projects;