 const productImage1 = document.getElementById("product-image-1");
   const productImage2 = document.getElementById("product-image-2");

   const colors = document.getElementsByClassName("color");

    function changeColor(index) {
      for (var i = 0; i < colors.length; i++) {
        colors[ i ].classList.remove("active");
      }

      colors[ index ].classList.add("active");

      if (colors[ index ].closest(".card").contains(productImage1)) {
        productImage1.src = colors[ index ].getAttribute("data-image");
        productImage1.alt = colors[ index ].getAttribute("data-color") + " Cap";
      } else if (colors[ index ].closest(".card").contains(productImage2)) {
        productImage2.src = colors[ index ].getAttribute("data-image");
        productImage2.alt = colors[ index ].getAttribute("data-color") + " Cap";
      }
    }

    for (var i = 0; i < colors.length; i++) {
      colors[ i ].onclick = (function (n) {
        return function () {
          changeColor(n);
        };
      })(i);
    }