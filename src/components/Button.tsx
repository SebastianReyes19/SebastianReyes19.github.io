import './Button.scss';

interface butProps {
    text: string,
    className: string
};

function Button(items: butProps){
    return(
        <button className={items.className}>
            {items.text}
        </button>
    )
}

export default Button;