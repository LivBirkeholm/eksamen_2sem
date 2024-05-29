document.addEventListener("DOMContentLoaded", function () {
  const logoLink = document.getElementById("logo-link");
  const currentPage = window.location.pathname;

  if (currentPage.includes("/menu_vesterbro") || currentPage.includes("/about_vesterbro")) {
    logoLink.href = "/forside_vesterbro";
  } else if (currentPage === "/forside_vesterbro") {
    logoLink.href = "/";
  } else {
    logoLink.href = "/";
  }
});
