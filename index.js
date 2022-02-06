console.log("hello");

const toggleNav = () => {
  const nav = document.querySelector(".component-list");
  nav.classList.toggle("show");
};

const toggler = document.querySelector(".toggler");
toggler.addEventListener("click", toggleNav);
console.log(toggler);

const togglerNew = document.querySelector(".toggler-new");

console.log(togglerNew);

togglerNew.addEventListener("click", () => {
  console.log("hello");
  const nav = document.querySelector(".component-list");
  nav.classList.toggle("show");
});
