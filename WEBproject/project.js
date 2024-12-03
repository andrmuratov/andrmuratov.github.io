window.onload = function () {
  let start = false;

  function slicker() {
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    console.log(vh, vw);
    if (start) {
      $(".autoplay").slick("unslick");
    }

    if (vw >= 1000) {
      $(".autoplay").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      setTimeout(function () {
        $(".autoplay2").slick({
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      }, 800);
    } else if (vw >= 600) {
      $(".autoplay").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      setTimeout(function () {
        $(".autoplay2").slick({
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      }, 800);
    } else if (vw <= 480) {
      $(".autoplay").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      setTimeout(function () {
        $(".autoplay2").slick({
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      }, 800);
    }
  }

  slicker();
  start = true;

  window.addEventListener("resize", function () {
    slicker();
  });

  // Обработчик клика по моб. меню
  $(".mob_menu").on("click", function () {
    $("body").toggleClass("menu_active");
  });

  // Установка высоты для элемента
  $(".a").css("height", $(".aa > div:eq(0)").height());

  // Функция для анимации
  function aa(p) {
    console.log(p);
    $(".aa > div").css("opacity", "0");
    setTimeout(function () {
      $(".aa > div").css("display", "block");
    }, 0);
    $(".aa > div:eq(" + p + ")").css("display", "block");
    setTimeout(function () {
      $(".aa > div:eq(" + p + ")").css("opacity", "1");
    }, 0);

    setTimeout(function () {
      $(".a").animate(
        {
          height: $(".aa > div:eq(" + p + ")").height(),
        },
        300,
        "linear"
      );
    }, 100);

    $(".ednum").html((p + 1).toString().padStart(2, "0"));
  }

  (p = 0), (pl = $(".aa > div").length - 1);
  $(".b2").on("click", function () {
    if (p == 0) p = pl;
    else p--;
    aa(p);
  });
  $(".b1").on("click", function () {
    if (p == pl) p = 0;
    else p++;
    aa(p);
  });

  /*Footer*/

  document.addEventListener("DOMContentLoaded", (event) => {
    const recaptcha = document.querySelector(".g-recaptcha");
    recaptcha.setAttribute("data-theme", "dark");
  });

  // Обработка reCAPTCHA
  function onSubmit(token) {
    // Получаем токен reCAPTCHA
    console.log("Token received: " + token);

    // Находим форму
    const form = document.querySelector('form');

    // Создаем скрытое поле для токена
    const hiddenTokenField = document.createElement('input');
    hiddenTokenField.type = 'hidden';
    hiddenTokenField.name = 'recaptcha-token'; // Название поля, которое будет отправлено на сервер
    hiddenTokenField.value = token;

    // Добавляем скрытое поле в форму
    form.appendChild(hiddenTokenField);

    // Отправляем форму
    form.submit();
  }

  // Инициализация reCAPTCHA при загрузке страницы
  document.querySelector(".g-recaptcha").addEventListener("click", function () {
    grecaptcha.enterprise.ready(function () {
      grecaptcha.enterprise.execute('6LfJoJAqAAAAAITbRppA4HY2uD2ma_Bn5hUtvCUQ', { action: 'submit' }).then(function (token) {
        // Вызов функции onSubmit с полученным токеном
        onSubmit(token);
      });
    });
  });
};

window.onload = function () {
  let start = false;

  function slicker() {
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    console.log(vh, vw);
    if (start) {
      $(".autoplay").slick("unslick");
    }

    if (vw >= 1000) {
      $(".autoplay").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      setTimeout(function () {
        $(".autoplay2").slick({
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      }, 800);
    } else if (vw >= 600) {
      $(".autoplay").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      setTimeout(function () {
        $(".autoplay2").slick({
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      }, 800);
    } else if (vw <= 480) {
      $(".autoplay").slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      setTimeout(function () {
        $(".autoplay2").slick({
          arrows: false,
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      }, 800);
    }
  }

  slicker();
  start = true;

  window.addEventListener("resize", function () {
    slicker();
  });

  // Обработчик клика по моб. меню
  $(".mob_menu").on("click", function () {
    $("body").toggleClass("menu_active");
  });

  // Установка высоты для элемента
  $(".a").css("height", $(".aa > div:eq(0)").height());

  // Функция для анимации
  function aa(p) {
    console.log(p);
    $(".aa > div").css("opacity", "0");
    setTimeout(function () {
      $(".aa > div").css("display", "block");
    }, 0);
    $(".aa > div:eq(" + p + ")").css("display", "block");
    setTimeout(function () {
      $(".aa > div:eq(" + p + ")").css("opacity", "1");
    }, 0);

    setTimeout(function () {
      $(".a").animate(
        {
          height: $(".aa > div:eq(" + p + ")").height(),
        },
        300,
        "linear"
      );
    }, 100);

    $(".ednum").html((p + 1).toString().padStart(2, "0"));
  }

  (p = 0), (pl = $(".aa > div").length - 1);
  $(".b2").on("click", function () {
    if (p == 0) p = pl;
    else p--;
    aa(p);
  });
  $(".b1").on("click", function () {
    if (p == pl) p = 0;
    else p++;
    aa(p);
  });

  /*Footer*/

  document.addEventListener("DOMContentLoaded", (event) => {
    const recaptcha = document.querySelector(".g-recaptcha");
    recaptcha.setAttribute("data-theme", "dark");
  });

  // Обработка reCAPTCHA
  function onSubmit(token) {
    // Получаем токен reCAPTCHA
    console.log("Token received: " + token);

    // Находим форму
    const form = document.querySelector('form');

    // Создаем скрытое поле для токена
    const hiddenTokenField = document.createElement('input');
    hiddenTokenField.type = 'hidden';
    hiddenTokenField.name = 'recaptcha-token'; // Название поля, которое будет отправлено на сервер
    hiddenTokenField.value = token;

    // Добавляем скрытое поле в форму
    form.appendChild(hiddenTokenField);

    // Отправляем форму
    form.submit();
  }

  // Инициализация reCAPTCHA при загрузке страницы
  document.querySelector(".g-recaptcha").addEventListener("click", function () {
    grecaptcha.enterprise.ready(function () {
      grecaptcha.enterprise.execute('6LfJoJAqAAAAAITbRppA4HY2uD2ma_Bn5hUtvCUQ', { action: 'submit' }).then(function (token) {
        // Вызов функции onSubmit с полученным токеном
        onSubmit(token);
      });
    });
  });
};
