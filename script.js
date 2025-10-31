document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.querySelector(".scroll-to-top");
  const navBar = document.querySelector(".hero-header");
  const aboutSection = document.querySelector("#about");
  const skillsSection = document.querySelector("#skills");

  scrollBtn.style.display = "none";

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;

    // Hiện nút scroll-to-top khi cuối trang
    scrollBtn.style.display =
      scrollTop + windowHeight >= documentHeight - 100 ? "flex" : "none";

    // Thu gọn navbar khi gần hết tab 2
    navBar.classList.toggle("shrink", scrollTop + windowHeight / 1.3 >= aboutBottom);
  });

  // Click scroll-to-top
  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
