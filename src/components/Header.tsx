import React, {useState} from "react";
import "./Header.scss"
import "./Button.scss"
import Intro from './Intro';

function Header(){
    const str = ['Home', 'About Me', 'Projects','Contact']

    const [activeComp, setActiveComp] = useState('Home');

    function buttonClick(comp: string){
        switch (comp) {
            case str[0]:
                setActiveComp(comp);
                break;
            case str[1]:
                setActiveComp(comp);
                break;
            case str[2]:
                setActiveComp(comp);
                break;
            case str[3]:
                setActiveComp(comp);
                break
            default:
                setActiveComp(str[0]);
                break;
        }
    }

    return(  
        <>
            <div className={"header"}>
                {str.map((item) =>{
                    return <div className="header-content">
                        <button className="Header-Button" id={item + "-btn"} onClick={() => buttonClick(item)}>
                            {item}
                        </button>
                    </div>
                })
                }
            </div>
            {activeComp === str[0] ? <Intro/> : null}
        </>
    )
}

export default Header;