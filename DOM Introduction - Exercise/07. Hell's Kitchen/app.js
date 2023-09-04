function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let restaurants = {};
   let bestRestaurant = {};

   function onClick() {
      let input = document.querySelector('#inputs textarea');
      let inputArr = input.value.split('"').filter(x => x.length > 4);
      let restaurantName;

      inputArr.forEach(curArrItem => {
         curArrItem = curArrItem.split(' - ');
         restaurantName = curArrItem.shift();

         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = {};
         }

         curArrItem = curArrItem.join('').split(' ');
         let currentEmployee;
         let curSalary = 0;
         let salarySum = 0;

         for (let i = 0; i < curArrItem.length; i++) {
            let curItem = curArrItem[i];

            if (i % 2 !== 0) {
               curSalary = curItem.replace(',', '');
               curSalary = Number(curSalary);
               salarySum += curSalary;
            } else {
               currentEmployee = curItem;
               continue;
            }
            restaurants[restaurantName][currentEmployee] = curSalary;
         }
      });

      for (let key in restaurants) {
         let sum = 0;
         for (let innerKey in restaurants[key]) {
            sum += restaurants[key][innerKey];
         }
         let objectLength = Object.keys(restaurants[key]).length;
         bestRestaurant[key] = (sum / objectLength).toFixed(2);
         console.log(bestRestaurant);
      }

      bestRestaurant = Object.entries(bestRestaurant).sort((a, b) => b[1] - a[1]);
      let bestRestaurantName = bestRestaurant[0][0];
      let bestRestaurantSalary = bestRestaurant[0][1];

      let sortedSalaries = Object.entries(restaurants[bestRestaurantName]).sort((a, b) => b[1] - a[1]);
      let highestEmployeeSalary = sortedSalaries[0][1].toFixed(2);

      let bestRestOutput = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantSalary} Best Salary: ${highestEmployeeSalary}`
      let outputOne = document.querySelector('#bestRestaurant p');
      outputOne.textContent = bestRestOutput;

      let employeesOutput = '';

      for (let salary of sortedSalaries) {
         employeesOutput += `Name: ${salary[0]} With Salary: ${salary[1]} `
      }

      let outputTwo = document.querySelector('#workers p');
      outputTwo.textContent = employeesOutput;
   }
}