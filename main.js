document.addEventListener("keydown", (e) => {
  document.querySelector('.modal').style.display = "none"
  let key = e.key == " " ? "Space" : e.key;
  document.querySelector(".keyCode").innerHTML = key;

  let location =
    e.location == 0
      ? "general keyboards"
      : e.location == 1
      ? "left keyboards"
      : e.location == 2
      ? "right keyboards"
      : "nabtap";
  document.querySelector(".location").innerHTML = location;
  document.querySelector(".code").innerHTML = e.code;
  document.querySelector(".which").innerHTML = e.which;
  document.querySelector(".which1").innerHTML = e.which;
  // document.querySelector(".discription").innerHTML = e.metaKey;
});
