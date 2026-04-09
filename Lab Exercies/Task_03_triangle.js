/*✅ Triangle Classifier:


Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.
*/
let side1 = 10, side2 = 9, side3 = 9;
if (side1 === side2 && side2 === side3 && side1 === side3)
    console.log("Equilateral triangle : all sides are equal");
else if (side1 != side2 && side2 != side3 && side1 != side3)
    console.log("Scalene triangle : none of the sides are equal");
else
    console.log("Isosceles triangle : two sides are equal");