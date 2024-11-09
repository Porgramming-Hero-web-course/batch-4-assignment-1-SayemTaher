{
  /*
  Problem 7:

Create a TypeScript class Car with properties make, model, and year.
Include a method getCarAge that returns the car's age based on the current year.

// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

// Sample Output 1:
6 (assuming current year is 2024)
   */
    
    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear : number = new Date().getFullYear();
            const ageOfTheCar : number = currentYear - this.year
            return ageOfTheCar
        }
        
    }
    // const createCar = new Car("Honda", "Civic", 2015)
    // const getAge = createCar.getCarAge()
    // console.log(`The Provided model of the car is ${getAge} years old`);
}
