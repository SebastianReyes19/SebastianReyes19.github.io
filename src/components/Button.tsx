import './Button.scss';

interface butProps {
    text: string,
    className: string
};

function Button(items: butProps){
    return(
        <button className={items.className} id={items.text + "-btn"}>
            {items.text}
        </button>
    )
}

export default Button;