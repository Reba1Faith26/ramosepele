function practices(){
    var button = document.getElementsByClassName("btn");
    var number = document.getElementsByClassName("number");
    var practice = document.getElementsByClassName("practice");
    var practiceDetail = document.getElementsByClassName("practiceDetail");
    button[1].addEventListener("click",function(){
        practice[0].innerText = "Energy, Mining and Infrastructure";
        practice[1].innerText = "Property law";
        practice[2].innerText = "Criminal law";

        number[0].innerText = "4";
        number[1].innerText = "5";
        number[2].innerText = "6";

        practiceDetail[0].innerText = 
        "Joint venture agreements,sale and purchase agreements,drilling agreements,service "
        + "agreements";
        practiceDetail[1].innerText = 
        "Our specialized lawyers looks after all our clients’ property needs " 
        + " from  property transfers and estate transfers";
        practiceDetail[2].innerText = 
          "24 hours bail applications, drunk driving matters, dealing in drugs, assault, theft, illegal " 
        + "possession of firearms much more ";
    },false);
    button[0].addEventListener("click",function(){
        practice[0].innerText = "Commecial Law";
        practice[1].innerText = "Litigation & Dispute Resolution";
        practice[2].innerText = " Corporate Law";

        number[0].innerText = "1";
        number[1].innerText = "2";
        number[2].innerText = "3  ";

        practiceDetail[0].innerText = 
        "Contracts, licenses, procurement, tenders, franchising, privacy, risk management and " 
         + " regulatory advice.";
        practiceDetail[1].innerText = 
            "Litigation in all the Courts of South Africa and arbitrations, mediations, letters of demands and "
          + " regulatory advice.";
        practiceDetail[2].innerText = 
          " Corporate law is mostly about deals, Initial Public Offerings, takeovers, mergers, trade sales,"
        + " joint ventures and capital raisings ";
    },false);
}
practices();