var page = document.querySelector('.page');
var button = document.getElementById('load');


button.addEventListener('click', function() {
   alert('Button clicked!');
   page.style.backgroundColor = 'black';
   page.style.trasition = 'background-color 0.5s ease';
   page.style.scale = '1';
   page.style.opacity = '1';
  
   page.style.transition = 'scale 0.6s ease';
 
   
});