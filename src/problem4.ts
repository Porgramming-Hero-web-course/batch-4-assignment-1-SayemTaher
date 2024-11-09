{
  /*
  Define a union type Circle and Rectangle, where each type has a unique shape property.
    Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24;
   */
    
    type Circle = {
        shape: "circle";
        radius: number;
    }
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }
    

    const calculateShapeArea = (value: Circle | Rectangle) : number =>{
        let area = 0
        if (value.shape === "circle") {
            area = Math.PI * value.radius * value.radius
            return area
        }
        else if (value.shape === "rectangle") {
            area = value.width * value.height
            return area
        }
        return area
    }
    const areaOfaCircle : Circle = {
        shape: "circle",
        radius : 5
    }
    const areaOfaRectangle : Rectangle = {
        shape: "rectangle",
        width: 10,
        height: 10

    }
    // console.log(calculateShapeArea(areaOfaCircle));
    // console.log(calculateShapeArea(areaOfaRectangle));

}
