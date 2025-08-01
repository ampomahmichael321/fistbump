let phone = "";
let message = "";
let conditionsMet = false;

function verifyPhoneNumber(str) {
  if (!str.startsWith("+")) {
    alert("Please Enter a valid phone number");
  } else if (str.startsWith("+")) {
    conditionsMet = true;
  }
}

function getValues() {
  phone = document.getElementById("phone").value;
  message = document.getElementById("message").value;
}

function sendMessage() {
  getValues();
  verifyPhoneNumber(phone);
  if (conditionsMet) {
    let url = `https://wa.me/${phone}?text=${message}`;
    window.open(url);
  }
}
