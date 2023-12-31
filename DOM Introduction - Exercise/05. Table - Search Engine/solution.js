function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let cells = document.querySelectorAll('tbody tr');
      let input = document.getElementById('searchField').value;

      for (let cell of cells) {
         if (cell.textContent.includes(input)) {
            cell.classList.add('select');
         } else {
            cell.classList.remove('select');
         }
         document.getElementById('searchField').value = '';
      }
   }
}