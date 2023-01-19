
interface butProps {
    text: string,
    className: string
};

function Button(items: butProps){
    return(
        <div>
            <a>
            <button className={items.className}>
                {items.text}
            </button>
            </a>
        </div>
    )
}

export default Button;