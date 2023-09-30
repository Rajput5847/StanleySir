let btn = document.querySelector("#btndiv button");
btn.addEventListener("mouseover", function() {
  btn.style.color = "white";
  btn.style.background = "black";
  btn.style.transition = "all ease 0.4s"
  btn.addEventListener("mouseout", function() {
    btn.style.color = "black";
    btn.style.background = "white";
  });
});


// let mf = document.querySelector ("#cursor");
// window.addEventListener ("mousemove", function (dets) {
//   // mf.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//   mf.style.display = "block" ;
//   mf.style.left = dets.x + "px" ;
//   mf.style.top = dets.y + "px" ;
// });

