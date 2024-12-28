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
    title: "Unlocking the Power of Java: A Beginner's Guide to Advanced Programming Concepts",
    divisi: "Java Programming",
    image: "assets/images/img-java.jpg",
    icon: "assets/icons/ic-java.svg",
    lessons: "25 Lessons",
    meetings: "12 Meetings",
  },
  {
    title: "Building User-Centered Designs: A Comprehensive Course on UI/UX Principles",
    divisi: "UI/UX Design",
    image: "assets/images/img-uiux.jpg",
    icon: "assets/icons/ic-uiux.svg",
    lessons: "15 Lessons",
    meetings: "8 Meetings",
  },
];

const container = document.querySelector(".card-course-container");

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

  container.appendChild(courseCard);
});
