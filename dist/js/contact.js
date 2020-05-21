const phoneItem = document.getElementById("phone-item");
const phoneTooltip = document.getElementById("phone-tooltip");
const emailItem = document.getElementById("email-item");
const emailTooltip = document.getElementById("email-tooltip");

phoneItem.addEventListener("click", (ev) => copy(ev, "phone-input"));
phoneItem.addEventListener("click", (ev) => showTooltip(ev, phoneTooltip));
emailItem.addEventListener("click", (ev) => copy(ev, "email-input"));
emailItem.addEventListener("click", (ev) => showTooltip(ev, emailTooltip));

function copy(ev, val) {
  /* Get the text field */
  var copyText = document.getElementById(val);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");
}

function showTooltip(ev, el) {
  if (el.classList.contains("tooltip-fade")) {
    return;
  }
  el.classList.remove("hidden");
  el.classList.add("tooltip-fade");
  setTimeout(() => {
    el.classList.remove("tooltip-fade");
    el.classList.add("hidden");
  }, 3000);
}
