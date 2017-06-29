document.addEventListener("DOMContentLoaded", function(){
     const email = document.querySelector('#email');
     const agree = document.querySelector('#agree');
     const form = document.querySelector('form');
     const errorMessage = document.querySelector('.error-message');

     form.addEventListener('submit', function( event ){
         if ( email.value.indexOf('@') === -1 ){
             event.preventDefault();
             errorMessage.innerText = 'Email musi posiadać znak @';
             return;
         }

         if ( !agree.checked ){
             event.preventDefault();
             errorMessage.innerText = 'Musisz zaakceptować regulamin';
             return;
         }


     });
 });
