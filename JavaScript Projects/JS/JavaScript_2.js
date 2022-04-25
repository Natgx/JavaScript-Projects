function Validation() {
    let x = document.forms["my_name"]["Username"].value;
    if (x == "") {
      alert("Username must be filled out");
      return false;
    }
  }