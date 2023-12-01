const product = document.createElement("div");
product.setAttribute("class", "product");
product.innerHTML =
  '<img class="img" src="./products/Magic_moment.png" alt="Magic_moment" /><audio class="audio" controls><source src="./products/Magic_moment.mp3" type="audio/mpeg" /></audio><button class="top_button">В корзину</button>';
products_field.append(product);
