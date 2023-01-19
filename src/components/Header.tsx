import React from 'react';
import Button from './Button';

function Header(){
    let str = ['Home', 'About Me', 'Contact']
    let span = "span" + str.length.toString();
    console.log(span)
    return(  
        <div className='row-fluid'>
            {str.map((item) =>{
                return <div className={span}>
                    <Button text={item} className='Header-Button'></Button>
                </div>
            })}
        </div>
    )
}

export default Header;