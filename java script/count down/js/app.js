//const endDate = "22 feb 2025 10:13 AM"
function getEventName() {
    const event = prompt("enter the name of the event");
    return event;
}
function getEndDate() {
    const date = prompt("Please enter the end date (e.g., 22 Feb 2025 10:13 AM):");
    return date;
}
let eventName = getEventName();
document.getElementById("event").innerHTML = eventName;
let endDate = getEndDate();
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;                                     //converting to seconds
    if(diff<0) return;
    inputs[0].value = Math.floor(diff/3600/24);                        //converting into days
    inputs[1].value = Math.floor(diff/3600) % 24;                      //converting into remaining hours
    inputs[2].value = Math.floor(diff/60) %60 ;                        //conveting into remaining minutes
    inputs[3].value = Math.floor(diff) % 60 ;                          //converting into remaining seconds
}
clock()
setInterval(
    () => {
        clock()
    },1000
)