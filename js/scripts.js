
$(document).ready(function() {
       function pizza(size, crust, toppings) {
           this.size = size;
           this.crust = crust;
           this.toppings = toppings;
        } 
        var selectedSize=$("select.size").change(function(){
           var size=$("option:selected").val();
           alert("Hello customer you have selected "+ size +" size");
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
        $("#submit").click(function(event){
            alert("You have ordered a " +  + " sized Pizza");//just to see if its working
        })
        var deliverOrder=$("form#deliver").change(function(){
            $("input:checked").val();
            if($("input:checked").val()=== "yes"){
                prompt("Enter the adress you want your order to be delivered to");
                alert("Your deliver cost will be -----")
            
            }
        })    
       
        var cost=$("#cost").click(function(event){
            alert("Hi Customer this is your total cost "+ $("input#quantity").val()*1000);
        })
          
        
       
        
        
      
});
        
    