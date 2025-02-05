const courses = [
  {
    title: "Building Your First Website: A Detailed Introduction to Frontend Development for Beginners",
    divisi: "Frontend Development",
    image: "assets/images/img-frontend.jpg",
    icon: "assets/icons/ic-frontend.svg",
    lessons: "25 Materi",
    meetings: "12 Pertemuan",
  },
  {
    title: "Mastering Backend Web Development: A Guide to Building Scalable Web Applications",
    divisi: "Backend Development",
    image: "assets/images/img-backend.jpg",
    icon: "assets/icons/ic-backend.svg",
    lessons: "25 Materi",
    meetings: "12 Pertemuan",
  },
  {
    title: "Kotlin for Android Development: From Fundamentals to Advanced Techniques for Scalable and Efficient Apps",
    divisi: "Mobile App Development",
    image: "assets/images/img-mobdev.jpg",
    icon: "assets/icons/ic-mobile.svg",
    lessons: "25 Materi",
    meetings: "12 Pertemuan",
  },
  {
    title: "Complete C Programming Course: Learn Fundamentals, Algorithms, and Data Structures",
    divisi: "C Programming",
    image: "assets/images/img-cprog.jpg",
    icon: "assets/icons/ic-cprog.svg",
    lessons: "25 Materi",
    meetings: "12 Pertemuan",
  },
  {
    title: "Unlocking the Power of Java: A Beginner's Guide to Mastering Programming Concepts from Basics",
    divisi: "Java Programming",
    image: "assets/images/img-java.jpg",
    icon: "assets/icons/ic-java.svg",
    lessons: "25 Materi",
    meetings: "12 Pertemuan",
  },
  {
    title: "Building User-Centered Designs: A Course on UI/UX Principles for Creating Intuitive Digital Experiences",
    divisi: "UI/UX Design",
    image: "assets/images/img-uiux.jpg",
    icon: "assets/icons/ic-uiux.svg",
    lessons: "15 Materi",
    meetings: "8 Pertemuan",
  },
];

const testimoni = [
  {
    icon: "assets/icons/ic-petik.svg",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    profile: "assets/images/img-mask-profile.png",
    name: "Leah Curnig",
    position: "CEO Tambang Mas",
  },
  {
    icon: "assets/icons/ic-petik.svg",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    profile: "assets/images/img-mask-profile.png",
    name: "John Smith",
    position: "CEO Suka Mas",
  },
  {
    icon: "assets/icons/ic-petik.svg",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    profile: "assets/images/img-mask-profile.png",
    name: "Alexandra Christy",
    position: "CEO Bisa Mas",
  },
  {
    icon: "assets/icons/ic-petik.svg",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    profile: "assets/images/img-mask-profile.png",
    name: "Alexandra Christy",
    position: "CEO Oke Mas",
  },
  {
    icon: "assets/icons/ic-petik.svg",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    profile: "assets/images/img-mask-profile.png",
    name: "Ludwig John",
    position: "CEO Asoy Mas",
  },
  {
    icon: "assets/icons/ic-petik.svg",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    profile: "assets/images/img-mask-profile.png",
    name: "Leony Marcha",
    position: "CEO Siap Mas",
  },
];

const classContainer = document.querySelector(".card-course-container");
const testiContainer = document.querySelector(".testimoni-container");

courses.forEach((course) => {
  const courseCard = document.createElement("div");
  courseCard.classList.add("card-course");

  const imgCourse = document.createElement("img");
  imgCourse.src = course.image;
  imgCourse.alt = "Class Image";
  imgCourse.classList.add("img-course");

  const courseDetail = document.createElement("div");
  courseDetail.classList.add("course-detail");

  const division = document.createElement("div");
  division.classList.add("division");

  const icon = document.createElement("img");
  icon.src = course.icon;
  icon.alt = "Icon";

  const divName = document.createElement("p");
  divName.classList.add("div-name");
  divName.textContent = course.divisi;

  divName.textContent = course.divisi;
  if (course.divisi === "Frontend Development") {
    divName.classList.add("frontend-development");
  } else if (course.divisi === "Backend Development") {
    divName.classList.add("backend-development");
  } else if (course.divisi === "Mobile App Development") {
    divName.classList.add("mobile-app-development");
  } else if (course.divisi === "UI/UX Design") {
    divName.classList.add("uiux-design");
  } else if (course.divisi === "C Programming") {
    divName.classList.add("c-prog");
  } else if (course.divisi === "Java Programming") {
    divName.classList.add("java-prog");
  }

  division.appendChild(icon);
  division.appendChild(divName);

  const meetings = document.createElement("div");
  meetings.classList.add("meetings");

  const meetDesc1 = document.createElement("p");
  meetDesc1.classList.add("meet-desc");
  meetDesc1.textContent = course.lessons;

  const separator = document.createElement("img");
  separator.src = "assets/icons/ic-dot.svg";
  separator.alt = "Icon Separator";

  const meetDesc2 = document.createElement("p");
  meetDesc2.classList.add("meet-desc");
  meetDesc2.textContent = course.meetings;

  meetings.appendChild(meetDesc1);
  meetings.appendChild(separator);
  meetings.appendChild(meetDesc2);

  courseDetail.appendChild(division);
  courseDetail.appendChild(meetings);

  const courseName = document.createElement("h4");
  courseName.classList.add("course-name");
  courseName.textContent = course.title;

  const enrollButton = document.createElement("button");
  enrollButton.classList.add("btn-enroll");
  enrollButton.textContent = "Gabung Kelas Ini";

  enrollButton.addEventListener("click", () => {
    alert(`Kamu mendaftar di kelas ${course.title}`);
  });

  courseCard.appendChild(imgCourse);
  courseCard.appendChild(courseDetail);
  courseCard.appendChild(courseName);
  courseCard.appendChild(enrollButton);

  classContainer.appendChild(courseCard);
});

testimoni.forEach((testi) => {
  const testimoniCard = document.createElement("div");
  testimoniCard.classList.add("card-testimoni");

  const imgPetik = document.createElement("img");
  imgPetik.src = testi.icon;
  imgPetik.alt = "Petik Icon";

  const comment = document.createElement("p");
  comment.classList.add("comment");
  comment.textContent = testi.comment;

  const divPerson = document.createElement("div");
  divPerson.classList.add("person");

  const imgprofile = document.createElement("img");
  imgprofile.src = testi.profile;
  imgprofile.alt = "Profile Icon";
  divPerson.appendChild(imgprofile);

  const divPersonDesc = document.createElement("div");
  divPersonDesc.classList.add("person-desc");

  const personName = document.createElement("h3");
  personName.classList.add("person-name");
  personName.textContent = testi.name;

  const personPosition = document.createElement("p");
  personPosition.classList.add("person-position");
  personPosition.textContent = testi.position;

  divPersonDesc.appendChild(personName);
  divPersonDesc.appendChild(personPosition);

  divPerson.appendChild(imgprofile);
  divPerson.appendChild(divPersonDesc);

  testimoniCard.appendChild(imgPetik);
  testimoniCard.appendChild(comment);
  testimoniCard.appendChild(divPerson);

  testiContainer.appendChild(testimoniCard);
});

const testiPerPage = 3;
let currentPage = 1;

function displayTestimonials() {
  testiContainer.innerHTML = "";

  const startIndex = (currentPage - 1) * testiPerPage;
  const endIndex = startIndex + testiPerPage;
  const currentTesti = testimoni.slice(startIndex, endIndex);

  currentTesti.forEach((testi) => {
    const testimoniCard = document.createElement("div");
    testimoniCard.classList.add("card-testimoni");

    const imgPetik = document.createElement("img");
    imgPetik.src = testi.icon;
    imgPetik.alt = "Petik Icon";

    const comment = document.createElement("p");
    comment.classList.add("comment");
    comment.textContent = testi.comment;

    const divPerson = document.createElement("div");
    divPerson.classList.add("person");

    const imgprofile = document.createElement("img");
    imgprofile.src = testi.profile;
    imgprofile.alt = "Profile Icon";

    const divPersonDesc = document.createElement("div");
    divPersonDesc.classList.add("person-desc");

    const personName = document.createElement("h3");
    personName.classList.add("person-name");
    personName.textContent = testi.name;

    const personPosition = document.createElement("p");
    personPosition.classList.add("person-position");
    personPosition.textContent = testi.position;

    divPersonDesc.appendChild(personName);
    divPersonDesc.appendChild(personPosition);
    divPerson.appendChild(imgprofile);
    divPerson.appendChild(divPersonDesc);

    testimoniCard.appendChild(imgPetik);
    testimoniCard.appendChild(comment);
    testimoniCard.appendChild(divPerson);

    testiContainer.appendChild(testimoniCard);
  });
}

function setupPagination() {
  const paginationContainer = document.querySelector(".pagination");
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(testimoni.length / testiPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === currentPage) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentPage = i;
      updatePagination();
    });
    paginationContainer.appendChild(dot);
  }
}

function updatePagination() {
  displayTestimonials();
  setupPagination();
}

updatePagination();

// login
const btnLogin = document.querySelector(".btn-login");
btnLogin.addEventListener("click", function () {
  window.location.href = "./pages/login/index.html";
});
// register
const btnRegister = document.querySelector(".btn-register");
btnRegister.addEventListener("click", function () {
  window.location.href = "./pages/register/index.html";
});

// contact us
const inputName = document.getElementById("input-name").value.trim();
const inputInsta = document.getElementById("input-insta").value.trim();
const inputTelp = document.getElementById("input-telp").value.trim();
const inputAddress = document.getElementById("input-address").value.trim();
const inputMessage = document.getElementById("input-message").value.trim();

const btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  let isValid = true;

  document.getElementById("name-error").style.display = "none";
  document.getElementById("insta-error").style.display = "none";
  document.getElementById("telp-error").style.display = "none";
  document.getElementById("message-error").style.display = "none";

  document.getElementById("input-name").classList.remove("error");
  document.getElementById("input-insta").classList.remove("error");
  document.getElementById("input-telp").classList.remove("error");
  document.getElementById("input-message").classList.remove("error");

  document.querySelectorAll(".error-message").forEach((el) => (el.style.display = "none"));
  document.querySelectorAll(".form-input").forEach((el) => el.classList.remove("error"));

  if (!inputName) {
    document.getElementById("name-error").textContent = "Nama tidak boleh kosong";
    document.getElementById("name-error").style.display = "block";
    document.getElementById("input-name").classList.add("error");
    isValid = false;
  }

  if (!inputInsta) {
    document.getElementById("insta-error").textContent = "Instagram tidak boleh kosong";
    document.getElementById("insta-error").style.display = "block";
    document.getElementById("input-insta").classList.add("error");
    isValid = false;
  }

  if (!inputTelp) {
    document.getElementById("telp-error").textContent = "Nomor telepon tidak boleh kosong";
    document.getElementById("telp-error").style.display = "block";
    document.getElementById("input-telp").classList.add("error");
    isValid = false;
  }

  if (!inputAddress) {
    document.getElementById("address-error").textContent = "Alamat tidak boleh kosong";
    document.getElementById("address-error").style.display = "block";
    document.getElementById("input-address").classList.add("error");
    isValid = false;
  }

  if (!inputMessage) {
    document.getElementById("message-error").textContent = "Pesan tidak boleh kosong";
    document.getElementById("message-error").style.display = "block";
    document.getElementById("input-message").classList.add("error");
    isValid = false;
  }

  if (isValid) {
    alert("Form berhasil dikirim!");
  }
});
