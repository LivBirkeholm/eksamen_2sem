document.addEventListener("DOMContentLoaded", function () {
  const logoLink = document.getElementById("logo-link");
  const currentPage = window.location.pathname;

  if (currentPage.includes("/menu")) {
    logoLink.href = "/forside_norrebro";
  } else if (currentPage.includes("/about")) {
    logoLink.href = "/forside_norrebro";
  } else if (currentPage.includes("/norrebro")) {
    logoLink.href = "/forside_norrebro";
  } else {
    logoLink.href = "/";
  }
});
