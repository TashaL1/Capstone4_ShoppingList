function addToCart(){
  //Step 1: find the element
  var cart = document.getElementsById('primary')
  	for (var i = 0; i < cart.length; i++){
  		var button = cart[i];
 button.addEventListener('click', addToCart)
  	}
}
function displayProducts(){
  var products = ['Leave-In Conditioner', 'Moisturizing Shampoo', 'Deep Conditioner', 'Satin Pillowcase', 'Wide-Tooth Comb', 'Detangler', 'Hair Gel', 'Diffuser'];
products;
}
function(){
  var prices = ['$13.99', '$15.99', '$14.59', '$12.99', '$3.79', '$14.09', '$12.99', '$6.49'];
  prices;
} 
function addToCartClicked(event){
  var button = event.target
  var shopItem = button.parentElement
  var productName = shopItem.getElementsById('products')[0].innertext
   var productPrice = shopItem.getElementsById('prices')[0].innertext
  
}
function displayCart('btn-secondary'){
  var listItem = document.createElement('li');
 listItem.textContent = itemText;
 list.appendChild(listItem);
}