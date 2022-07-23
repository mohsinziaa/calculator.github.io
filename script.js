let txt = "";
let theButtons = document.querySelectorAll(".btn");
let calculationSpace = document.querySelector("input");
let prevText = txt;

Array.from(theButtons).forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerHTML) {
      case "AC":
        txt = "";
        calculationSpace.value = txt;
        break;

      case "DEL":
        txt = txt.slice(0, txt.length - 1);
        calculationSpace.value = txt;
        break;

      case "×":
        txt += "*";
        calculationSpace.value = txt;
        break;

      case "÷":
        txt += "/";
        calculationSpace.value = txt;
        break;

      case "π":
        txt += "3.142";
        calculationSpace.value = txt;
        break;

      case "=":
        prevText = txt;
        txt = eval(txt);
        if (txt === prevText) {
          calculationSpace.value = "SYNTAX ERROR!";
        } else {
          calculationSpace.value = txt;
        }
        break;

      default:
        txt += e.target.innerHTML;
        calculationSpace.value = txt;
        break;
    }
  });
});
