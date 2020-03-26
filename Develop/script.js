var plannerentries=JSON.parse(localStorage.getItem("dayplanner"))||[]
$("#savebutton").on("click",function(event){
    event.preventDefault();
    console.log("In on lcikc")
    var currententry = []
    $(".plannerentry").each(function(){
        console.log($(this).val(), $(this).attr("id"))
        var entry={
            time: $(this).attr("id"),
            value:$(this).val()
        }
        
        currententry.push(entry)
       
    })
    plannerentries = currententry;
    localStorage.setItem("dayplanner",JSON.stringify(plannerentries))
    console.log(plannerentries);
    console.log(JSON.parse(localStorage.getItem("dayplanner")))
});
$("#clearbutton").on("click",function(event){
    event.preventDefault();
     localStorage.removeItem("dayplanner")
     console.log("Local storage dayplanner", JSON.parse(localStorage.getItem("dayplanner")))
})
function getlocalstorage(){
    console.log("Local storage dayplanner", JSON.parse(localStorage.getItem("dayplanner")))
    var currenttime=moment().format("HH")
    console.log(currenttime)
    for(let i=0; i < plannerentries.length; i++){
        var timeclock=plannerentries[i].time
        var userentry=plannerentries[i].value
        $(`#${timeclock}`).val(userentry)

    }
}
$("#currentDay").text(moment().format("dddd, MMMM Do"));

getlocalstorage()