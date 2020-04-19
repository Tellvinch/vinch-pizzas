$(document).ready(function () {
  function pizza(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
  }
  $("select.size").change(function () {
    var size = $("option:selected").val();
  });
  var selectedCrust = $("select.crust").change(function () {
    var selected = $("option:selected").val();
    alert("Thanks for choosing your crust.The cost would be ksh 100/=");
  });
  var checkedTopping = $("form.toppings").change(function () {
    var checked = $("input:checked").val();
    alert("Thanks for choosing your topping.The cost would be ksh 100/= ");
  });
  var number = $("input#quantity").change(function () {
    var quantity = $("input#quantity").val();
  });
  $("#submit").click(function (event) {
        $(".whatorder").toggle();
    
  });
  var deliverOrder = $("form#deliver").change(function () {
    $("input:checked").val();
    if ($("input:checked").val() === "yes") {
      prompt("Enter the adress you want your order to be delivered to");
      alert("Your delivering charges will be Sh 55/=");
      confirm("Do you still want the delivery to be made?");
    }
  });

  var cost = $("#cost").click(function (event) {
    alert(
      "Hey! Customer this is your total cost " +
        $("input#quantity").val() * 1000
    );
  });
});
