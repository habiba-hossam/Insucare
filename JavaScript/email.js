function sendEmail(event) {
  var name = document.getElementById('name');
  var mssg = document.getElementById('mssg');
  document.location.href = "mailto:Insucare.company@gmail.com?subject="
    + encodeURIComponent("Complains and Suggestions")
    + "&body="
    +"Name: "+ encodeURIComponent(name.value)
    +"%0D%0A"
    +"\nMessage: "+ encodeURIComponent(mssg.value);
  event.preventDefault()
}


window.addEventListener("submit", sendEmail);