// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.
document.addEventListener('DOMContentLoaded', (event) => {
    const preferencesForm = document.getElementById('preferences-form');
    const nameInput = document.getElementById('name');
    const backgroundColorInput = document.getElementById('background-color');
    const foregroundColorInput = document.getElementById('foreground-color');
    const greetingElement = document.getElementById('greeting');
    const bodyElement = document.body;

    function applyPreferences() {
        const savedName = localStorage.getItem('userName');
        const savedBackgroundColor = localStorage.getItem('backgroundColor');
        const savedForegroundColor = localStorage.getItem('foregroundColor');

        if (savedName) {
            greetingElement.textContent = `Hello, ${savedName}!`;
            nameInput.value = savedName;//saves user's name 
        } else {
            greetingElement.textContent = 'Hello, please enter your name!';//if new user, name is requested
        }

        if (savedBackgroundColor) {
            bodyElement.style.backgroundColor = savedBackgroundColor;
            backgroundColorInput.value = savedBackgroundColor; //will save background color
        }

        if (savedForegroundColor) {
            bodyElement.style.color = savedForegroundColor;
            foregroundColorInput.value = savedForegroundColor;//will save text color
        }
    }    
    
    preferencesForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const name = nameInput.value;
        const backgroundColor = backgroundColorInput.value;
        const foregroundColor = foregroundColorInput.value;

        
        localStorage.setItem('userName', name);
        localStorage.setItem('backgroundColor', backgroundColor);
        localStorage.setItem('foregroundColor', foregroundColor);
        // Saved to localStorage
        
        alert('Your preferences have been saved!');//popup message stating preferences selected 
    });

    
    applyPreferences();//applies users selected preferences 
});