function Main() {
  Cursor();
}
Main();

function Cursor() {
  document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", function (e) {
      const x = e.clientX - cursor.clientWidth / 2;
      const y = e.clientY - cursor.clientHeight / 2;

      cursor.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}


