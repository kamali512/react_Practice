import SecondChild from "./secondChild";
function FirstChild() {
    return(
        <div>
           <h2> FirstChild </h2>
            <SecondChild />
        </div>
    )
}
export default FirstChild;