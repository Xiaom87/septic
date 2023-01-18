const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');


button.addEventListener('click', function () { 
   modal.classList.remove('hidden');

   });





const tabHeaders = document.querySelectorAll('[data-tab]');

tabHeaders.forEach(function(item) {
   item.addEventListener('click', function() {
     const contentBox = document.querySelector('#' + this.dataset.tab);
     contentBox.classList.toggle('hidden');
   })
});


