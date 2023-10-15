window.addEventListener('load', solve);

function solve() {

    let productTypeElement = document.getElementById('type-product');
    let descriptionElement = document.getElementById('description');
    let nameElement = document.getElementById('client-name');
    let phoneElement = document.getElementById('client-phone');

    let sendBtn = document.querySelector('#right button');

    let ordersSection = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');

    let productValue;
    let nameValue;
    let phoneValue;
    let descriptionValue;

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (productTypeElement.value === '' ||
            nameElement.value === '' ||
            phoneElement.value === '' ||
            descriptionElement.value === '') {
            return
        }

        productValue = productTypeElement.value;
        nameValue = nameElement.value;
        phoneValue = phoneElement.value;
        descriptionValue = descriptionElement.value;

        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        
        let h2Heading = document.createElement('h2');
        let h3Headnig = document.createElement('h3');
        let h4Heading = document.createElement('h4');
        
        let startBtn = document.createElement('button');
        startBtn.classList.add('start-btn');
        startBtn.textContent = 'Start repair';

        let finishBtn = document.createElement('button');
        finishBtn.classList.add('finish-btn');
        finishBtn.setAttribute('disabled', true);
        finishBtn.textContent = 'Finish repair';

        h2Heading.textContent = `Product type for repair: ${productValue}`;
        h3Headnig.textContent = `Client information: ${nameValue}, ${phoneValue}`;
        h4Heading.textContent = `Description of the problem: ${descriptionValue}`;

        divContainer.appendChild(h2Heading);
        divContainer.appendChild(h3Headnig);
        divContainer.appendChild(h4Heading);
        divContainer.appendChild(startBtn);
        divContainer.appendChild(finishBtn);

        ordersSection.appendChild(divContainer);

        productTypeElement.value = '';
        descriptionElement.value = '';
        nameElement.value = '';
        phoneElement.value = '';

        startBtn.addEventListener('click', (e) => {
            e.currentTarget.setAttribute('disabled', true);
            e.currentTarget.parentNode.querySelector('.finish-btn').removeAttribute('disabled', true);
        });

        finishBtn.addEventListener('click', (e) => {
            let curCompletedOrder = e.currentTarget.parentNode.cloneNode(true);
          
            let buttonToRemove = curCompletedOrder.querySelector('.start-btn');
            let buttonToRemoveTwo = curCompletedOrder.querySelector('.finish-btn');
            curCompletedOrder.removeChild(buttonToRemove);
            curCompletedOrder.removeChild(buttonToRemoveTwo);
            
            completedOrders.appendChild(curCompletedOrder);
            ordersSection.removeChild(e.currentTarget.parentNode);
        });

        let clearBtn = document.querySelector('.clear-btn');

        clearBtn.addEventListener('click', () => {

            let divsArr = Array.from(completedOrders.querySelectorAll('div'));

            for (let element of divsArr) {
                completedOrders.removeChild(element);   
            }
        })
    })
}