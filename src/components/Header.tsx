import "./Header.scss"
import Button from './Button';

function Header(){
    let str = ['Home', 'About Me', 'Contact']

    return(  
        <>
            <div className={"header"}>
                {str.map((item) =>{
                    return <div className="header-content">
                        <Button text={item} className='Header-Button'></Button>
                    </div>
                })
                }
            </div>
        </>
    )
}

export default Header;