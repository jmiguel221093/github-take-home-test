const Button = ({
    text,
    onClick,
    buttonStyle,
    outline,
    disabled
}) => {

    const buttonClass = ['btn'];
    if(outline){
        buttonClass.push('outline');
    }
    if(buttonStyle){
        buttonClass.push(buttonStyle);
    }

    return <button disabled={disabled} className={`btn ${buttonClass.join('-')}`} onClick={onClick}>{text}</button>
}

export default Button;