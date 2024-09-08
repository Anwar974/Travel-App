import { handleSubmit } from './js/handleSubmit.js';
import  {remove_trip} from "./js/app.js";

import './styles/reset.scss'
import './styles/style.scss'

import './views/earth.svg'


// Function to set up event listeners
const setupEventListeners = () => {
    // Assuming there's a form with id 'trip_form' to handle submissions
    const form = document.getElementById('trip_form');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }

    // Assuming there's a button with id 'remove_trip_button' to remove a trip
    const removeButton = document.getElementById('remove_trip_button');
    if (removeButton) {
        removeButton.addEventListener('click', remove_trip);
    }
};

// Initialize event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupEventListeners);

export {handleSubmit,remove_trip}






