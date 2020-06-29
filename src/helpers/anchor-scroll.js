export const anchorScroll = (e, delay = 0) => {
  e.preventDefault();
  const t = e.target;
  const scroll = () => {
    let hashval = t.getAttribute("href");
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    window.history.pushState(null, null, hashval);
  };

  setTimeout(scroll, delay);
};
