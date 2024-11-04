function revealChange() {
  var is = document.getElementsByName("switch");
  if (is) {
    if (is[0].checked) {
      var txt = document.querySelector(".side-txt");
      var img = document.querySelector(".side-img-img");
      txt.classList.add("active");
      img.classList.add("active");
      setTimeout(function () {
        img.classList.remove("active");
        txt.classList.remove("active");
      }, 2000);
    } else if (is[1].checked) {
      var points = document.querySelectorAll(".point");
      for (var j = 0; j < points.length; j++) {
        points[j].classList.add("active");
      }
      setTimeout(function () {
        for (var j = 0; j < points.length; j++) {
          points[j].classList.remove("active");
        }
      }, 2000);
    } else if (is[2].checked) {
      var measures = document.querySelector(".measures");
      var ground = document.querySelector(".ground");
      measures.classList.add("active");
      ground.classList.add("active");
      setTimeout(function () {
        measures.classList.remove("active");
        ground.classList.remove("active");
      }, 2000);
    } else if (is[3].checked) {
      var AIOimg = document.querySelector(".AIO-img");
      var AIO = document.querySelector(".AIO");
      var AIOsub = document.querySelector(".AIO-sub");
      var AIOpara = document.querySelector(".AIO-para");
      AIO.classList.add("active");
      AIOimg.classList.add("active");
      AIOsub.classList.add("active");
      AIOpara.classList.add("active");
      setTimeout(function () {
        AIO.classList.remove("active");
        AIOimg.classList.remove("active");
        AIOsub.classList.remove("active");
        AIOpara.classList.remove("active");
      }, 2000);
    }
  }
}

function revealScroll() {
  var img = document.querySelector(".child");
  var rightImg = document.querySelector(".right-img");
  var leftTxt = document.querySelector(".left-txt");
  var rightTxt = document.querySelector(".right-txt");
  var leftImg = document.querySelector(".left-img");
  var windowHeight = window.innerHeight;
  var elementTop = img.getBoundingClientRect().top;
  var elementVisible1 = 600;
  var elementVisible2 = 1000;

  if (elementTop < windowHeight - elementVisible1) {
    rightImg.classList.add("active");
    leftTxt.classList.add("active");
  }
  if (elementTop < windowHeight - elementVisible2) {
    rightTxt.classList.add("active");
    leftImg.classList.add("active");
  }

  var img = document.querySelector(".message");
  var card2 = document.querySelector(".mssg-card2");
  var card3 = document.querySelector(".mssg-card3");
  var windowHeight = window.innerHeight;
  var elementTop = img.getBoundingClientRect().top;
  var elementVisible1 = 710;
  if (elementTop < windowHeight - elementVisible1) {
    card2.classList.add("active");
    card3.classList.add("active");
  }
}
window.addEventListener("change", revealChange);
window.addEventListener("scroll", revealScroll);
