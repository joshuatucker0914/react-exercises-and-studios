import SaveButton from "./SaveButton"
import ClickedButton from "./ClickedButton";

const saveButton = props.SaveButton;

function Button() {
   return saveButton ? <SaveButton /> : <ClickedButton />;;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 