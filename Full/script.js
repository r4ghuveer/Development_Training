function validate() {
  const card = document.getElementById("card").value;
  const errorCard = document.getElementById("errorcard");
  if (isNaN(card)) {
    errorCard.innerHTML = "Please enter a number.";
    return false;
  }

  const cvc = document.getElementById("cvc").value;
  const errorCVC = document.getElementById("errorcvc");
  if (isNaN(cvc)) {
    errorCVC.innerHTML = "Card CVC should be a number.";
    return false;
  } else if (cvc.length != 3) {
    errorCVC.innerHTML = "Card CVC should be 3 characters long.";
    return false;
  }

  const dd = document.getElementById("dd").value;
  const mm = document.getElementById("mm").value;
  const yyyy = document.getElementById("yyyy").value;
  const doberror = document.getElementById("doberror");
  if (isNaN(dd) || isNaN(mm) || isNaN(yyyy)) {
    doberror.innerHTML = "DOB must be a number";
    return false;
  } else if (dd.length != 2 || mm.length != 2 || yyyy.length != 4) {
    doberror.innerHTML = "Please enter correct DOB";
    return false;
  } else if (yyyy > 2023) {
    doberror.innerHTML = "Year must be less than or equal to 2023";
    return false;
  }
  return true;
}
