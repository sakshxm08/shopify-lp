let inputEmail = document.getElementById("email");
let emailBtn = document.getElementById("emailBtn");
let spinId = document.getElementById("spinner");
let btnText = document.getElementById("emailBtnText");

// Function for restoring after spinner animation
function removeClass() {
  spinId.className = spinId.className.replace("spin", "");
  spinId.innerHTML = ``;
  btnText.className = btnText.className.replace("dispNone", "");
  inputEmail.value = "";
}

//To prevent reloading the page on pressing Enter.
inputEmail.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    setTimeout(function () {
      alert("Do not press ENTER to register the email.");
    }, 500);
  }
});

// onclick function of button
function SubForm() {
  if (
    inputEmail.value != "" &&
    inputEmail.value.includes("@") &&
    inputEmail.value.includes(".")
  ) {
    // Spinner animation
    spinId.className = spinId.className + " spin";
    btnText.className = btnText.className + " dispNone";
    spinId.innerHTML =
      spinId.innerHTML +
      `
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>`;
    setTimeout(removeClass, 3000);
    // Registering the email
    setTimeout(function () {
      $.ajax({
        url: "https://api.apispreadsheets.com/data/do4Q3KBo2p9PHl2Q/",
        type: "post",
        data: $("#myForm").serializeArray(),
        success: function () {
          alert("Email registered successfully.");
        },
        error: function () {
          alert("There was an error :(");
        },
      });
    }, 2500);
  } else {
    spinId.className = spinId.className + " spin";
    btnText.className = btnText.className + " dispNone";
    spinId.innerHTML =
      spinId.innerHTML +
      `
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>`;
    setTimeout(removeClass, 500);
    setTimeout(function () {
      alert("Please enter a valid email address.");
    }, 600);
  }
}
