import React, {useEffect, useState} from "react";
import "./Header.scss"
import "./Button.scss"
import Intro from './Intro';
import Projects from './Projects'

function Header(){
    const str = ['Home', 'Projects', 'Contact']
    const comps: {[key: string]: JSX.Element}= { 
        Home: <Intro/>,
        Projects: <Projects/>,
        Contacts: <></>
    }
    
    const [comp, setComp] = useState(comps['Home']);

    const [activeComp, setActiveComp] = useState('Home');

    function buttonClick(comp: string){
        setActiveComp(comp)
    }

    useEffect(()=>{
        setComp(comps[activeComp])
    }, [activeComp]);

    return(  
        <>
            <div className={"header"}>
                {Object.keys(comps).map((item) =>{
                    return <div className="header-content">
                        <button className="Header-Button" id={item + "-btn"} onClick={() => buttonClick(item)}>
                            {item}
                        </button>
                    </div>
                })
                }
            </div>
            {comp}
        </>
    )
}

export default Header;