export const anchorScroll = (e, delay = 0) => {
  e.preventDefault();
  const t = e.currentTarget || e.target;
  const scroll = () => {
    let hashval = t.getAttribute("href");
    if (!hashval) return;
    let target = document.querySelector(hashval);
    if (!target) return;
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.pushState(null, null, hashval);
  };

  setTimeout(scroll, delay);
};
