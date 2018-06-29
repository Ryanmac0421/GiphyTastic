//creates array of baseball players

var baseballersArray = ['Buster Posey', 'Giancarlo Stanton', 'Babe Ruth', 'Bryce Harper', 'Barry Bonds', 'Hank Aaron', 'Alex Rodriguez', 'Mike Piazza', 'Albert Pujols', 'Willie Mays'];


//starts document to go through array to populate buttons




function refresh() {
    
    $('.baseballBtns').empty();
    
    for ( i = 0; i < baseballersArray.length; i++) {
        $('.baseballBtns').append('<button class="btns">' + baseballersArray[i] + ' </button> ')
        
        
    }
    
};
    refresh();

    $(document).on("click", ".btns", function(ele) {
     
       console.log($(this)[0].innerText);
       
       
       
        
        $.ajax({


        url: "http://api.giphy.com/v1/gifs/search?limit=10&q=" + $(this)[0].innerText  +  "&api_key=dc6zaTOxFJmzC",
            type: "GET",
            success: function(data) {
                console.log("This works too")
                
               // console.log(data[0] ) // here is where I'm having an issue!
                 $("#gifs-appear-here").empty();
                data["data"].forEach(element => {
                    var div = '<img class="pics" src="'+ element.images.fixed_height.url + '" >'
                    $("#gifs-appear-here").append(div).css('display','inline');
                    var upprCse = element.rating;
                    var ratings = '<p class = "rating"> Rating : ' + upprCse.toUpperCase() + '</p>'
                    $("#gifs-appear-here").append(ratings);

                    
                });
            }

            
        });
        
    })
        $(document).on("click",".pics", function(event) { 

                // get the src of the image
                var src = $(event.target).attr("src");
                console.log(src);
                
            console.log(src.split("200"));
            
                // change the image
                if(src.split("200")[1][0] == "."){
                   var url = src.split(".gif")[0].replace("200","200_s.gif")
                   $(event.target).attr("src",url);
                }
                else{
                    var url = src.split(".gif")[0].replace("200_s","200.gif")
                    $(event.target).attr("src",url);
                }
            })

            $("#form").submit(function(event){
                event.preventDefault();
                // console.log();
                (baseballersArray).push(event.target[0].value);
                refresh();

                
            });
            

   



        
    //target each button














        // // Adding click event listen listener to all buttons
        // $("button").on("click", function() {
                    
        //     var person = $(this).attr("data-person");

        //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        //     person + "&api_key=dc6zaTOxFJmzC&limit=10";

        //     $.ajax({
        //         url: queryURL,
        //         method: "GET"
        //     })

        //     .then(function(response) {
        //     console.log(queryURL);