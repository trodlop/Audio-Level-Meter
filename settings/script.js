// Makes sure that local storage settings have been initialised
function initialise_settings() {
    if (localStorage.getItem("display_type") === null) {
        localStorage.setItem("display_type","max");
    };

    if (localStorage.getItem("weighting") === null) {
        localStorage.setItem("weighting","a");
    };

    if (localStorage.getItem("visualiser_type") === null) {
        localStorage.setItem("visualiser_type","intensity spectrum");
    };
};
document.addEventListener("DOMContentLoaded",initialise_settings);

const option1 = document.getElementById("settings_option1_sub");
const option1_hidden = document.getElementById("settings_option1_hidden");
const option1_preview = document.getElementById("settings_h3_option1");

const option2 = document.getElementById("settings_option2_sub");
const option2_hidden = document.getElementById("settings_option2_hidden");
const option2_preview = document.getElementById("settings_h3_option2");

const option3 = document.getElementById("settings_option3_sub");
const option3_hidden = document.getElementById("settings_option3_hidden");
const option3_preview = document.getElementById("settings_h3_option3");

// Functions to toggle between different settings options
function toggle_options(no) {
    option1_hidden.style.display = "none"
    option2_hidden.style.display = "none"
    option3_hidden.style.display = "none"

    if (no == 1) {
        option1_hidden.style.display = "block"
    }
    else if (no == 2) {
        option2_hidden.style.display = "block"
    }
    else if (no == 3) {
        option3_hidden.style.display = "block"
    };
};
option1.onclick = function() { toggle_options(1); };
option2.onclick = function() { toggle_options(2); };
option3.onclick = function() { toggle_options(3); };

// -------------------------------------------------------------------------------------

// Retrieve all necessary elements for settings option 1
const option1_button1_container = document.getElementById("settings_option1_button1_selector");
const option1_button1 = document.getElementById("settings_option1_button1");

const option1_button2_container = document.getElementById("settings_option1_button2_selector");
const option1_button2 = document.getElementById("settings_option1_button2");

const option1_button3_container = document.getElementById("settings_option1_button3_selector");
const option1_button3 = document.getElementById("settings_option1_button3");

const option1_button4_container = document.getElementById("settings_option1_button4_selector");
const option1_button4 = document.getElementById("settings_option1_button4");

// Function to select option 1 settings
function option1_toggle_button(no) {

    option1_button1.style.backgroundColor = "white";
    option1_button2.style.backgroundColor = "white";
    option1_button3.style.backgroundColor = "white";
    option1_button4.style.backgroundColor = "white";

    if (no == 1) {
        option1_button1.style.backgroundColor = "orange";
        localStorage.setItem("visualiser_type", "intensity spectrum");
    } 
    else if (no == 2) {
        option1_button2.style.backgroundColor = "orange";
        localStorage.setItem("visualiser_type", "spectrogram");
    }
    else if (no == 3) {
        option1_button3.style.backgroundColor = "orange";
        localStorage.setItem("visualiser_type", "waveform");
    }
    else if (no == 4) {
        option1_button4.style.backgroundColor = "orange";
        localStorage.setItem("visualiser_type", "softmax");
    };
    update_previews();
};
option1_button1_container.onclick = function() { option1_toggle_button(1); };
option1_button2_container.onclick = function() { option1_toggle_button(2); };
option1_button3_container.onclick = function() { option1_toggle_button(3); };
option1_button4_container.onclick = function() { option1_toggle_button(4); };

// -------------------------------------------------------------------------------------

// Retrieve all necessary elements for settings option 2
const option2_button1_container = document.getElementById("settings_option2_button1_selector");
const option2_button1 = document.getElementById("settings_option2_button1");

const option2_button2_container = document.getElementById("settings_option2_button2_selector");
const option2_button2 = document.getElementById("settings_option2_button2");

const option2_button3_container = document.getElementById("settings_option2_button3_selector");
const option2_button3 = document.getElementById("settings_option2_button3");

const option2_button4_container = document.getElementById("settings_option2_button4_selector");
const option2_button4 = document.getElementById("settings_option2_button4");

// Function to select option 2 settings
function option2_toggle_button(no) {
    
    option2_button1.style.backgroundColor = "white";
    option2_button2.style.backgroundColor = "white";
    option2_button3.style.backgroundColor = "white";
    option2_button4.style.backgroundColor = "white";

    if (no == 1) {
        option2_button1.style.backgroundColor = "orange";
        localStorage.setItem("weighting", "itu r");
    } 
    else if (no == 2) {
        option2_button2.style.backgroundColor = "orange";
        localStorage.setItem("weighting", "a");
    }
    else if (no == 3) {
        option2_button3.style.backgroundColor = "orange";
        localStorage.setItem("weighting", "c");
    }
    else if (no == 4) {
        option2_button4.style.backgroundColor = "orange";
        localStorage.setItem("weighting", "z");
    };
    update_previews();
};
option2_button1_container.onclick = function() { option2_toggle_button(1); };
option2_button2_container.onclick = function() { option2_toggle_button(2); };
option2_button3_container.onclick = function() { option2_toggle_button(3); };
option2_button4_container.onclick = function() { option2_toggle_button(4); };

// -------------------------------------------------------------------------------------

// Retrieve all necessary elements for settings option 2
const option3_button1_container = document.getElementById("settings_option3_button1_selector");
const option3_button1 = document.getElementById("settings_option3_button1");

const option3_button2_container = document.getElementById("settings_option3_button2_selector");
const option3_button2 = document.getElementById("settings_option3_button2");

const option3_button3_container = document.getElementById("settings_option3_button3_selector");
const option3_button3 = document.getElementById("settings_option3_button3");

// Function to select option 2 settings
function option3_toggle_button(no) {
    
    option3_button1.style.backgroundColor = "white";
    option3_button2.style.backgroundColor = "white";
    option3_button3.style.backgroundColor = "white";

    if (no == 1) {
        option3_button1.style.backgroundColor = "orange";
        localStorage.setItem("display_type", "mean");
    } 
    else if (no == 2) {
        option3_button2.style.backgroundColor = "orange";
        localStorage.setItem("display_type", "trimmed mean");
    }
    else if (no == 3) {
        option3_button3.style.backgroundColor = "orange";
        localStorage.setItem("display_type", "max");
    };
    update_previews();
};
option3_button1_container.onclick = function() { option3_toggle_button(1); };
option3_button2_container.onclick = function() { option3_toggle_button(2); };
option3_button3_container.onclick = function() { option3_toggle_button(3); };

// -------------------------------------------------------------------------------------

// Update selected options preview (NOTE: needs to be last such that toggle variables have already been declared)
function update_previews() {
    option1_preview.innerText = localStorage.getItem("visualiser_type");
    option2_preview.innerText = localStorage.getItem("weighting");
    option3_preview.innerText = localStorage.getItem("display_type");

    if (localStorage.getItem("visualiser_type") == "intensity spectrum") {
        option1_button1.style.backgroundColor = "orange"
    }
    else if (localStorage.getItem("visualiser_type") == "spectrogram") {
        option1_button2.style.backgroundColor = "orange"
    }
    else if (localStorage.getItem("visualiser_type") == "waveform") {
        option1_button3.style.backgroundColor = "orange"
    }
    else if (localStorage.getItem("visualiser_type") == "softmax") {
        option1_button4.style.backgroundColor = "orange"
    };

    if (localStorage.getItem("weighting") == "itu r") {
        option2_button1.style.backgroundColor = "orange"
    }
    else if (localStorage.getItem("weighting") == "a") {
        option2_button2.style.backgroundColor = "orange"
    }
    else if (localStorage.getItem("weighting") == "c") {
        option2_button3.style.backgroundColor = "orange"
    }
    else if (localStorage.getItem("weighting") == "z") {
        option2_button4.style.backgroundColor = "orange"
    };

    if (localStorage.getItem("display_type") == "mean") {
        option3_button1.style.backgroundColor = "orange"
    }
    else if (localStorage.getItem("display_type") == "trimmed mean") {
        option3_button2.style.backgroundColor = "orange"
    }
    else if (localStorage.getItem("display_type") == "max") {
        option3_button3.style.backgroundColor = "orange"
    }
};
document.addEventListener("DOMContentLoaded",update_previews);
