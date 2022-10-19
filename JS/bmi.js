var divide = function(weight, height) {
    return weight / height;
}
var weight = parseInt(prompt("Ether your weight in kgs"));
var height = parseInt(prompt("Enter your height in m"));
var bmi = divide(weight, height);
alert(bmi);