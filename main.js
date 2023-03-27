$(document).ready(function(){
    $("#cell-number").change(function(){
        let numberOfCells = $(this).val();
        $("tr").not("#heading").remove();
        for(let i = 0 ; i < numberOfCells ; i++){
            $("table").append("<tr><td><input type='text'></td><td><input type='text'></td></tr>");
        }
    })
});