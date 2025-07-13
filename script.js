const ESP32_IP = "http://10.41.247.240"; // Replace with your ESP32 IP

function dispensePills() {
  fetch(`${ESP32_IP}/dispense`)
    .then(res => res.text())
    .then(data => alert("ESP32: " + data))
    .catch(err => alert("ESP32 not found 😢"));
}

function setTime() {
  const h = document.getElementById("hour").value;
  const m = document.getElementById("minute").value;
  if (h === "" || m === "") {
    alert("Please enter hour and minute");
    return;
  }
  fetch(`${ESP32_IP}/settime?hour=${h}&minute=${m}`)
    .then(res => res.text())
    .then(data => alert("Time set: " + data))
    .catch(err => alert("ESP32 not found 😢"));
}

function checkStatus() {
  fetch(`${ESP32_IP}/status`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("statusText").textContent = "Status: " + data;
    })
    .catch(err => {
      document.getElementById("statusText").textContent = "Status: ESP32 not connected";
    });
}
