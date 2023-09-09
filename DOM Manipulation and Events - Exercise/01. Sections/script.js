function create(words) {

  let content = document.getElementById('content');
  
  words.forEach(string => {
    let divElement = document.createElement('div');

    let pElement = document.createElement('p');
    pElement.textContent = string;
    pElement.style.display = 'none';

    divElement.appendChild(pElement);
    content.appendChild(divElement);
  });

  content.addEventListener('click', (e) => {
    e.target.children[0].style.display = 'block';
  })
}