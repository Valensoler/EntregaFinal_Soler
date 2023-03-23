import "../Button/Button.css"

const Button = (props) => {
    return <button className="BtnItem" onClick={props.handleClick}> {props.label} </button>
}

export default Button
