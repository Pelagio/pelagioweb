export const anchorScroll = e => {
  let hashval = e.target.getAttribute("href");
  let target = document.querySelector(hashval);
  target.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
  window.history.pushState(null, null, hashval);
  e.preventDefault();
};
