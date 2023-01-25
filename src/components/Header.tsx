import React from 'react';
import Button from './Button';

function Header(){
    let str = ['Home', 'About Me', 'Contact']
    return(  
        <div style={
            {
            display: 'grid',
            justifyContent: 'space-around',
            position: 'absolute',
            top: '10px',
            //padding: '10px'
            }
        }>
            {str.map((item) =>{
                return <div>
                    <Button text={item} className='Header-Button'></Button>
                </div>
            })}
        </div>
    )
}

export default Header;