import "./Header.scss"
import Button from './Button';

function Header(){
    const str = ['Home', 'About Me', 'Projects','Contact']

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