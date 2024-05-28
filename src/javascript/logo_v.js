document.addEventListener("DOMContentLoaded", function () {
  const logoLink = document.getElementById("logo-link");
  const currentPage = window.location.pathname;

  if (currentPage.includes("/menu")) {
    logoLink.href = "/forside_vesterbro";
  } else if (currentPage.includes("/about")) {
    logoLink.href = "/forside_vesterbro";
  } else if (currentPage.includes("/vesterbro")) {
    logoLink.href = "/forside_vesterbro";
  } else {
    logoLink.href = "/";
  }
});
