function validate(myForm)
{
    var booValid = true;
    var ErrorMessage = " ";
  
    //if (myForm.ID.value == "") {
    //    ErrorMessage += "ID field cannot be empty\n";
    //    booValid = false;
    //}
    if (myForm.country.selectedIndex == 0) {
        ErrorMessage += "select country please! \n";
        booValid = false;
    }
 

    if ((!myForm.radio[0].checked) && (!myForm.radio[1].checked)) {
        ErrorMessage += "please select radiobutton \n";
        booValid = false;
    }
    if ((!myForm.check[0].checked) && (!myForm.check[1].checked)) {
        ErrorMessage += "Please check your language \n";
        booValid = false;
    }
    if (!booValid) {
        alert(ErrorMessage);
    }
    return booValid;
}
