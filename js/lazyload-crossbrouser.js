"use strict";
//Начало секции
//Леннивая загрузка изображений с выбором нативной функции и кроссс-браузерной поддержкой
// Определение возможности браузера - Feature detection (lazyload)
if ("loading" in HTMLImageElement.prototype) {
  console.log("Браузер поддерживает lazyload");
  addSrcAttrToLazyImages();
} else {
  console.log("Браузер НЕ поддерживает lazyload");
  addLazySizesScript();
}
//Выбор изображений которые должны лениво грузится
//для установки слушателя событий
const lazyImages = document.querySelector("img[data-src]");
lazyImages.forEach((image) => {
  image.addEventListener("load", onImageloaded, { once: true });
});

function onImageloaded(e) {
  console.log("Картинка загрузилась");
  e.target.classList.add("appear");
}

function addLazySizesScript() {
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossOrigin = "anonymous";
  script.referrerpolicy = "no-referrer";
  document.body.appendChild(script);
}

function addSrcAttrToLazyImages() {
  const lazyImages = document.querySelector("img[loading='lazy']");
  lazyImages.forEach((image) => {
    image.src = image.dataset.src;
  });
}
//Леннивая загрузка изображений с выбором нативной функции и кроссс-браузерной поддержкой
//Конец секции
