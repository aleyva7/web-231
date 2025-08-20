/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Amanda Leyva
      Date:   8-20-25

      Filename: project02-02.js
 */

//verify form is all filled out
function verifyForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  //check if all fields are filled out
  name && email && phone
    ? window.alert('Thank you!')
    : window.alert('Please fill in all fields');
}

//Check submission
document.getElementById('submit').onclick = verifyForm;
