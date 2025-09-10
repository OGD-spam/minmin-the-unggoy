// Fungsi untuk memulai musik
function playMusic() {
  const music = document.getElementById('background-music');
  music.play();
}
window.addEventListener('DOMContentLoaded', function () {
  playMusic();
});
document.body.addEventListener('click', playMusic, { once: true });
const content = document.getElementById('content');
const footer = document.getElementsByTagName('footer')[0];
const timer = document.getElementById('timer');

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
let countDown = new Date('Oct 22, 2023 00:00:00').getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById('hours').innerText = Math.floor(distance / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {
      timer.classList.add('d-none');
      confetti();
      clearInterval(x);
      _slideSatu();
    }

  }, second)

const _slideSatu = function () {
  const tap = document.getElementById('tap');
  const slideSatu = document.getElementById('slideSatu');
  slideSatu.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      _slideDua();
    })
  }, 7000);
};

const _slideDua = function () {
  const slideSatu = document.getElementById('slideSatu');
  const tap = document.getElementById('tap');
  const slideDua = document.getElementById('slideDua');

  setTimeout(function () {
    slideSatu.classList.replace('animate__slideInDown', 'animate__backOutDown');
    tap.classList.add('d-none');
    setTimeout(function () {
      slideSatu.classList.add('d-none');
    }, 1000);
  }, 1000);

  slideDua.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
      slideDua.classList.remove('animate__delay-2s', 'animate__slow');
      tap.classList.add('d-none');
      setTimeout(function () {
        slideDua.remove();
        _slideTiga();
      }, 1000);
    })
  }, 40000);
};

const _slideTiga = function () {
  const tap = document.getElementById('tap');
  const slideTiga = document.getElementById('slideTiga');

  slideTiga.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function () {
      slideTiga.classList.remove('animate__delay-2s', 'animate__slow');
      slideTiga.classList.replace('animate__fadeInRight', 'animate__fadeOut');
      tap.remove();
      setTimeout(function () {
        slideTiga.remove();
        _slideEmpat();
      }, 1000);
    })
  }, 43000);
}

function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;
  var randomX = Math.floor(Math.random() * 500);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
};

const _slideEmpat = function () {
  const slideEmpat = document.getElementById('slideEmpat');
  const btn = document.getElementsByTagName('button');
  slideEmpat.classList.remove('d-none');

  btn[0].addEventListener('click', function () {
    var xy = getRandomPosition(slideEmpat);
    slideEmpat.style.top = xy[0] + 'px';
  });

  btn[1].addEventListener('click', function () {
    slideEmpat.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideEmpat.classList.remove('animate__delay-2s');
    setTimeout(function () {
      slideEmpat.remove()
      setTimeout(() => {
        _slideLima();
      }, 500);
    }, 1000);
  })
};

const _slideLima = function () {
  const slideLima = document.getElementById('slideLima');
  slideLima.classList.remove('d-none');
  const trims = document.getElementById('trims');

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);

  slideLima.addEventListener('animationend', () => {
    slideLima.classList.add('animate__delay-3s')
    slideLima.classList.replace('animate__bounceIn', 'animate__fadeOut');
    trims.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');
    setTimeout(() => {
      trims.remove();
      setTimeout(() => {
        slideLima.remove();
        _slideEnam();
      }, 1000);
    }, 6000);
  });
};

const _slideEnam = function () {
  // Instead of another slide, show the Next button
  const nextButton = document.getElementById('nextButton');
  if (nextButton) {
    nextButton.classList.remove('d-none');
  }
};


// TypeIt animations
new TypeIt("#teks1", {
  strings: ["Happy Birthday, bitch! 🎉","You are truly one of the most amazing humans I know, bitch."," You light up every room you walk into, bitch, and you make life about 1000x better just by being yourself, bitch.","I hope today is filled with laughter, love, and all the good things you deserve, bitch. ","Thank you for being the funniest, kindest, most badass friend a person could ask for, bitch. ","Never forget how loved and appreciated you are, bitch. "," ","Now go slay your birthday like the queen you are, bitch. 👑✨"],
  startDelay: 4000,
  speed: 75,
  waitUntilVisible: true
}).go();

new TypeIt("#teks2", {
  strings: [
    "At the end of the day, I just want you to know how deeply loved you are. You make life brighter for everyone around you, and I’m so grateful to have you in mine. I can’t wait to see all the amazing things you’ll continue to do. Wishing you a year full of joy, success, laughter, and love, you deserve nothing less. 💖",
    " ",
    "- OGD"
  ],
  startDelay: 2000,
  speed: 75,
  waitUntilVisible: true
}).go();

new TypeIt("#trims", {
  strings: ["Wait for it."],
  startDelay: 2000,
  speed: 150,
  loop: false,
  waitUntilVisible: true,
}).go();


// Confetti function (unchanged)
'use strict';
var onlyOnKonami = false;

function confetti() {
  // ... your confetti code unchanged ...
}
