const inputName = document.getElementById("input-name").value.trim();
const selectedGender = document.querySelector('input[name="gender"]:checked');
const genderValue = selectedGender ? selectedGender.value : "";
const inputBirthDate = document.getElementById("input-birthdate").value.trim();
const inputBirthPlace = document.getElementById("input-birthplace").value.trim();
const inputDomisili = document.getElementById("input-domisili").value.trim();
const inputAddress = document.getElementById("input-address").value.trim();
const inputWA = document.getElementById("input-whatsapp").value.trim();
const inputLine = document.getElementById("input-line").value.trim();

const btnRegister = document.getElementById("btn-register");
btnRegister.addEventListener("click", function (event) {
  event.preventDefault();

  let isValid = true;

  document.getElementById("name-error").style.display = "none";
  document.getElementById("gender-error").style.display = "none";
  document.getElementById("birthdate-error").style.display = "none";
  document.getElementById("birthplace-error").style.display = "none";
  document.getElementById("domisili-error").style.display = "none";
  document.getElementById("address-error").style.display = "none";
  document.getElementById("whatsapp-error").style.display = "none";
  document.getElementById("line-error").style.display = "none";

  document.getElementById("input-name").classList.remove("error");
  document.getElementById("input-birthdate").classList.remove("error");
  document.getElementById("input-birthplace").classList.remove("error");
  document.getElementById("input-domisili").classList.remove("error");
  document.getElementById("input-address").classList.remove("error");
  document.getElementById("input-whatsapp").classList.remove("error");
  document.getElementById("input-line").classList.remove("error");

  if (inputName === "") {
    isValid = false;
    document.getElementById("name-error").textContent = "Nama lengkap tidak boleh kosong";
    document.getElementById("name-error").style.display = "block";
    document.getElementById("input-name").classList.add("error");
    isValid = false;
  }

  if (genderValue === "") {
    document.getElementById("gender-error").textContent = "Jenis Kelamin tidak boleh kosong";
    document.getElementById("gender-error").style.display = "block";
    isValid = false;
  }

  if (inputBirthDate === "") {
    document.getElementById("birthdate-error").textContent = "Tanggal Lahir tidak boleh kosong";
    document.getElementById("birthdate-error").style.display = "block";
    document.getElementById("input-birthdate").classList.add("error");
    isValid = false;
  }

  if (inputBirthPlace === "") {
    document.getElementById("birthplace-error").textContent = "Tempat Lahir tidak boleh kosong";
    document.getElementById("birthplace-error").style.display = "block";
    document.getElementById("input-birthplace").classList.add("error");
    isValid = false;
  }

  if (inputDomisili === "") {
    document.getElementById("domisili-error").textContent = "Domisili tidak boleh kosong";
    document.getElementById("domisili-error").style.display = "block";
    document.getElementById("input-domisili").classList.add("error");
    isValid = false;
  }

  if (inputAddress === "") {
    document.getElementById("address-error").textContent = "Alamat tidak boleh kosong";
    document.getElementById("address-error").style.display = "block";
    document.getElementById("input-address").classList.add("error");
    isValid = false;
  }

  if (inputWA === "") {
    document.getElementById("whatsapp-error").textContent = "Nomor WhatsApp tidak boleh kosong";
    document.getElementById("whatsapp-error").style.display = "block";
    document.getElementById("input-whatsapp").classList.add("error");
    isValid = false;
  }

  if (inputLine === "") {
    isValid = false;
    document.getElementById("line-error").textContent = "Line ID tidak boleh kosong";
    document.getElementById("line-error").style.display = "block";
    document.getElementById("input-line").classList.add("error");
  }

  if (isValid) {
    alert("Registrasi berhasil!");
  }
});
