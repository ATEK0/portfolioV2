var x = 0;
// document.getElementById("navs").style.display = "none";
function myFunction() {
  if (x == 0) {
    document.getElementById("arrowUp").classList.remove("transform4");
  }
  if (x == 1) {
    document.getElementById("esq").classList.remove("transform2");
  }
  if (x == 2) {
    document.getElementById("line").classList.remove("transform3");
  }
  if (x == 3) {
    document.getElementById("dir").classList.remove("transform1");
  }
  if (x == 4) {
    document.getElementById("baixo").classList.remove("transform5");
  }

  x++;
}

function otherfunction() {
  if (x > 4) {
    x = 0;
  }
  if (x == 0) {
    document.getElementById("dir").classList.add("transform1");
  }
  if (x == 1) {
    document.getElementById("esq").classList.add("transform2");
  }
  if (x == 2) {
    document.getElementById("baixo").classList.add("transform3");
  }
  if (x == 3) {
    document.getElementById("arrowUp").classList.add("transform4");
  }
  if (x == 4) {
    document.getElementById("line").classList.add("transform5");
  }

  x++;
}

setTimeout(myFunction, 1000);
setTimeout(myFunction, 1100);
setTimeout(myFunction, 1200);
setTimeout(myFunction, 1300);
setTimeout(myFunction, 1400);

// setTimeout(upscale, 2100);

setTimeout(otherfunction, 3800);
setTimeout(otherfunction, 3850);
setTimeout(otherfunction, 3900);
setTimeout(otherfunction, 3950);
setTimeout(otherfunction, 4000);
setTimeout(() => {
  document.getElementById("svgintro").classList.add("bgsmooth");
  document.getElementById("body2").style.display = "block";
}, 4070);
setTimeout(() => {
  document.getElementById("svgintro").remove();
  // document.getElementById("body").classList.remove("overflow");
  document.getElementById("body2").classList.add("show");
//   document.getElementById("navs").style.display = "block";
}, 4130);

// function upscale() {
//   document.getElementById("Camada_1").classList.add("expand");
// }

//NAVBAR

// $(document).ready(function () {
//   $(".menu-icon").on("click", function () {
//     $("nav ul").toggleClass("showing");
//   });
// });

// Scrolling Effect

// $(window).on("scroll", function () {
//   if ($(window).scrollTop()) {
//     $("nav").addClass("black");
//     $(".menu-icon").addClass("black");
//   } else {
//     $("nav").removeClass("black");
//     $(".menu-icon").removeClass("black");

//   }
// });

//cursor after mouse
// let circle = document.getElementById('circle');

// const onMouseMove = (e) =>{
//   setTimeout(() => {
//     circle.style.left = e.pageX + 'px';
//   circle.style.top = e.pageY + 'px';
// }, 50);
  
// }

// document.addEventListener('mousemove', onMouseMove);


//onhover one only

// const skills = document.querySelectorAll('.skill');
// skills.forEach(skill => {
//   skill.addEventListener('mouseover', () => {
//     skills.forEach(otherSkill => {
//       if (otherSkill !== skill) {
//         otherSkill.classList.add('not-hovered');
//       }
//     });
//   });
  
//   skill.addEventListener('mouseout', () => {
//     skills.forEach(otherSkill => {
//       if (otherSkill !== skill) {
//         otherSkill.classList.remove('not-hovered');
//       }
//     });
//   });
// });



// function reveal() {
//   var reveals = document.querySelectorAll(".fade-in");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 200;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("show");
//     } else {
//       reveals[i].classList.remove("show");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);

// window.addEventListener('load', reveal);

