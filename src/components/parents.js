import FirstChild from "./child";
import Button from "./button";
function Parent() {
    return(
        <div>
           <h1> Parent </h1>
            <FirstChild />
            <Button title="HTML TAGS" color="blue"/>
        </div>
    )
}
export default Parent;