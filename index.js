
// create event on burger icon so that nav links collapse on click.
const navBar = document.getElementsByClassName('navbar-list')[0];
const burgerBar = document.getElementById('burger-bar');

burgerBar.addEventListener('click', () => {
    navBar.classList.toggle('active');
})

// initialise Masontry layout on grid

var elem = document.querySelector('.masonry');
console.log(elem)
let msnry = new Masonry( elem, {
  // options
  itemSelector: '.card'
});
