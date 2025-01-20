const courses = [
  {
    title: "Building Your First Website: A Detailed Introduction to Frontend Development for Beginners",
    divisi: "Frontend Development",
    image: "assets/images/img-frontend.jpg",
    icon: "assets/icons/ic-frontend.svg",
    lessons: "25 Lessons",
    meetings: "12 Meetings",
  },
  {
    title: "Mastering Backend Web Development: A Comprehensive Guide to Building Scalable Web Applications",
    divisi: "Backend Development",
    image: "assets/images/img-backend.jpg",
    icon: "assets/icons/ic-backend.svg",
    lessons: "25 Lessons",
    meetings: "12 Meetings",
  },
  {
    title: "Kotlin for Android Development: From Fundamentals to Advanced Techniques for Scalable and Efficient Apps",
    divisi: "Mobile App Development",
    image: "assets/images/img-mobdev.jpg",
    icon: "assets/icons/ic-mobile.svg",
    lessons: "25 Lessons",
    meetings: "12 Meetings",
  },
  {
    title: "Complete C Programming Course: Learn Fundamentals, Algorithms, and Data Structures",
    divisi: "C Programming",
    image: "assets/images/img-cprog.jpg",
    icon: "assets/icons/ic-cprog.svg",
    lessons: "25 Lessons",
    meetings: "12 Meetings",
  },
  {
    title: "Unlocking the Power of Java: A Beginner's Guide to Mastering Programming Concepts from Basics to Advanced Applications",
    divisi: "Java Programming",
    image: "assets/images/img-java.jpg",
    icon: "assets/icons/ic-java.svg",
    lessons: "25 Lessons",
    meetings: "12 Meetings",
  },
  {
    title: "Building User-Centered Designs: A Comprehensive Course on UI/UX Principles for Creating Intuitive Digital Experiences",
    divisi: "UI/UX Design",
    image: "assets/images/img-uiux.jpg",
    icon: "assets/icons/ic-uiux.svg",
    lessons: "15 Lessons",
    meetings: "8 Meetings",
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
  enrollButton.textContent = "Enroll This Course";

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
