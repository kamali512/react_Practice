function Button(props) {
    console.log("Props", props)
    return(
        <div>
            <button style={{color:props.color}}>{props.title}</button>
        </div>
    )
}
export default Button;