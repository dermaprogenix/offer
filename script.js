document.addEventListener("DOMContentLoaded", function() {

  var closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", function() {
  var overlay = document.getElementById("overlay");
  var buttonContainer = document.getElementById("button-container");
  var firstImage = document.getElementById("first-image");
  firstImage.style.display = "none";
  overlay.style.display = "none";
  buttonContainer.style.display = "none";
});

  // espera 2 segundos e mostra as imagens
  setTimeout(function() {
    var overlay = document.getElementById("overlay");
    var buttonContainer = document.getElementById("button-container");
    overlay.style.display = "block";
    buttonContainer.style.display = "block";
  }, 2000);

  // adiciona evento de clique ao botão
  var discountButton = document.getElementById("first-image");
  discountButton.addEventListener("click", function() {
    var firstImage = document.getElementById("first-image");
    var secondImage = document.getElementById("second-image");
    var thirdImage = document.getElementById("third-image");
    var discountButton = document.getElementById("first-image");

    // oculta a primeira imagem e exibe a segunda imagem após 2 segundos
    setTimeout(function() {
      firstImage.style.display = "none";
      secondImage.style.display = "block";
    }, 0);

    // oculta a segunda imagem e exibe a terceira imagem após mais 2 segundos
    setTimeout(function() {
      secondImage.style.display = "none";
      thirdImage.style.display = "block";
    }, 3000);

    // espera 1 segundo e mostra a mensagem de sucesso
    setTimeout(function() {
      // redireciona para outra página
      window.location.href = "https://www.digistore24.com/redir/431152/promo_applied/";
    }, 3000);
  });
  
});
