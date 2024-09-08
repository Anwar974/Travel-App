// Import functions
import { handleSubmit } from "./handleSubmit.js";
// Event Listeners
const remove_trip = document.getElementById('remove_trip').addEventListener('click', function (e) {
    document.getElementById('trip_details_form').reset();
    trip_details_section.classList.add('invisible');
    location.reload();
});

document.getElementById("travel_details_submit").addEventListener("click", handleSubmit);



export {
    remove_trip,
};
