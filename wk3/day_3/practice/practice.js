function calculate() {
  // alert("replace me in practice.js");
  //definte input data
    //Subtotal amount
      //get subtotal amount from form
      //assign subtotal to a variable
      var subtotal = document.getElementById("subtotal").value;
      subtotal = parseFloat(subtotal);
      console.log(subtotal, "<----THIS IS MY SUBTOTAL");
  //logic
    //find tip amount
      //get tip amount from form
      //assign tip amount to a variable
      var tipPercentage = document.getElementById("tipPercentage").value;
      tipPercentage = parseFloat(tipPercentage);
      console.log(tipPercentage, "<--- THIS IS MY TIPPERCENTAGE");
      //multiply subtotal by tip percentage
        //assign to a variable
      var calulatedTipAmount =  subtotal * tipPercentage;
      //divide subtotal*tip by 100 --> total tip amount
      calulatedTipAmount = calulatedTipAmount / 100;
      console.log(calulatedTipAmount, "CALULATED TIPAMOUNT");
      //display tip amount
      var tipDisplay = document.getElementById("calculatedTipAmount");
      tipDisplay.innerText = calulatedTipAmount;
    //find tax amount
      //get tax amount from form
        //assign to a variable
        var taxPercentage = document.getElementById("taxPercentage").value;
        taxPercentage = parseFloat(taxPercentage / 100);
        var taxAmount = subtotal * taxPercentage;
        console.log(taxPercentage, "<--- THIS IS MY taxPercentage");
        console.log(taxAmount, "<---THIS IS MY TOTAL TAX AMOUNT")
    //find total amount
      //add tip amount + tax + subtotal amount ---> total amount
      var totalAmount = subtotal + taxAmount + calulatedTipAmount;
      console.log(totalAmount, "<--- THIS IS THE TOTAL AMOUNT");
  //define output (updating the HTML page in the browser)
    document.getElementById("totalAmount").innerText = totalAmount;
  //time permitting: refactor (can we re-write code that it is: easier to read for other developers, faster, more concise)
}

