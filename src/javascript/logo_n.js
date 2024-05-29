document.addEventListener("DOMContentLoaded", function () {
  const logoLink = document.getElementById("logo-link");
  const currentPage = window.location.pathname;

  if (currentPage.includes("/menu_norrebro") || currentPage.includes("/about_norrebro")) {
    logoLink.href = "/forside_norrebro";
  } else if (currentPage === "/forside_norrebro") {
    logoLink.href = "/";
  } else {
    logoLink.href = "/";
  }
});
