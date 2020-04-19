
$(document).ready(function() {
       function pizza(size, crust, toppings) {
           this.size = size;
           this.crust = crust;
           this.toppings = toppings;
        } 
        var selectedSize=$("select.size").change(function(){
           $("option:selected").val();
           alert("Hello customer you have selected "+ selectedSize +" size");
        })
        var selectedCrust=$("select.crust").change(function(){
            var selected=$("option:selected").val();
            alert("Thanks for choosing your crust");
        })
        var checkedTopping=$("form.toppings").change(function(){
             var checked=$("input:checked").val();
            alert(checked);
        })
        var number=$("input#quantity").change(function(){
            var quantity= $("input#quantity").val();
            alert(quantity);
        })
        var checkedTopping=$("form#deliver").change(function(){
            $("input:checked").val();
            if($("input:checked").val()=== "yes"){
                prompt("Enter the adress you want your order to be delivered to");
                alert("Your deliver cost will be -----")
            
            }
        })    
        var one =$("#submit").click(function(event){
            alert("DONE YOUR ORDER HAS BEEN PLACED");
        })
        var cost=$("#cost").click(function(event){
            alert("Hi Customer this is your total cost 1769354969");
        })
         var customersOrder = new pizza (selectedSize,selectedCrust,toppings)
        alert(customersOrder);
        
       
        
        
      
});
        
    