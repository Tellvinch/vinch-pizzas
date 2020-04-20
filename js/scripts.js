$(document).ready(function () {
  function pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }
  pizza.prototype.order = function () {
    return this.size + this.crust;
  };
  $("button#submit").click(function (event) {
    event.preventDefault();
    var prices = {
      size: {
        small: 450,
        medium: 550,
        large: 650,
        extralarge: 900,
      },
      crust: {
        crispy: 100,
        stuffy: 70,
        glutenfree: 60,
      },
    };
    var size = $("select#size option:checked").val();
    var crust = $("select#crust option:selected").val();
    var topping = $("form#toppings input:checked").val();
    var number = $("input#quantity").val();
    var customersOrder =
      "You have ordered " +
      number +
      " " +
      size +
      " sized " +
      crust +
      " pizza(s) with " +
      topping +
      " as topping";

    Swal.fire(customersOrder);
    Swal.fire(deliverOrder);
  });
  $("button#cost").click(function (event) {
    var total =
      "Hello Customer! this is your total cost " +
      $("input#quantity").val() * 805;
    Swal.fire(total);
  });
  $("form#deliver ").change(function () {
    var deliver = $("input:checked").val();
    if ($("input:checked").val() === "yes") {
      prompt("Enter your adress");
      Swal.fire("The delivery cost to your location is KSH 55/=");
    }
  });
});

