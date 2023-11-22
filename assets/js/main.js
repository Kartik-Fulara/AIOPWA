const navigation = document.querySelectorAll("[data-navigate]");

navigation.forEach((navigate) => {
  navigate.addEventListener("click", (e) => {
    let origin = window.location.origin;
    let pathName = navigate.getAttribute("data-navigate");
    if (window.location.pathname !== `/${pathName}/`) {
      window.location.href = `${origin}/${pathName}/`;
    }
  });
});
