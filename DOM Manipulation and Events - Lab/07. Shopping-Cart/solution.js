function solve() {
   
   let button = document.querySelectorAll('button.add-product');
   button = Array.from(button);
   let totalPrice = 0;
   let itemList = new Set();
   let textArea = document.getElementsByTagName('textarea');

   button.forEach(x => {
      x.addEventListener('click', (e) => {
         let curProduct = e.target.parentNode.parentNode.children;
         let price = Number(curProduct[3].textContent);
         totalPrice += price;

         let curName = e.currentTarget.parentElement.parentElement.getElementsByClassName('product-title');
         curName = curName[0].textContent;
         itemList.add(curName);
         
         textArea[0].textContent += `Added ${curName} for ${price.toFixed(2)} to the cart.\n`;
      });
   });

   let checkout = document.getElementsByClassName('checkout')[0];
   let buttons = document.querySelectorAll('button');

   checkout.addEventListener('click', () => {
         let listItems = [...itemList];
         textArea[0].textContent += `You bought ${listItems.join(', ')} for ${totalPrice.toFixed(2)}.`;
         
         for (let button of buttons) {
            button.setAttribute('disabled', true);
         }
   })
}