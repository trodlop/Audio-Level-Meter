// Initialises all of the settings information in local storage:
function initialise_settings() {
    if (localStorage.getItem("display_type") === null) {
        localStorage.setItem("display_type","max"); // max, mean
    };
    if (localStorage.getItem("weighting") === null) {
        localStorage.setItem("weighting","a"); // itu r, a, c, z
    };
    if (localStorage.getItem("visualiser_type") === null) {
        localStorage.setItem("visualiser_type","intensity spectrum"); // intensity spectrum, spectrogram, waveform, softmax
    };
    if (localStorage.getItem("time_interval") === null) {
        localStorage.setItem("time_interval",100); // 500, 200, 100
    };
    if (localStorage.getItem("intensity_spectrum_colour") === null) {
        localStorage.setItem("intensity_spectrum_colour","#008EFF"); // "#008EFF" = cyan
    };
    if (localStorage.getItem("intensity_spectrum_axis") === null) {
        localStorage.setItem("intensity_spectrum_axis","logarithmic"); // logarithmic, linear
    };
    if (localStorage.getItem("spectrogram_colour") === null) {
        localStorage.setItem("spectrogram_colour","blue-red-white"); // blue-red-white, purple-orange, red-blue-green, red-green, black-white
    };
    if (localStorage.getItem("spectrogram_refresh") === null) {
        localStorage.setItem("spectrogram_refresh",5); // 3, 5, 10
    };
    if (localStorage.getItem("waveform_colour") === null) {
        localStorage.setItem("waveform_colour","#008EFF"); // "#008EFF" = cyan
    };
    if (localStorage.getItem("data_smoothing") === null) {
        localStorage.setItem("data_smoothing","raw"); // raw, savitzky-golay
    };
    console.log("Settings initialised");
};
initialise_settings();

const option1 = document.getElementById("settings_option1_sub");
const option1_hidden = document.getElementById("settings_option1_hidden");
const option1_preview = document.getElementById("settings_h3_option1");

const option2 = document.getElementById("settings_option2_sub");
const option2_hidden = document.getElementById("settings_option2_hidden");
const option2_preview = document.getElementById("settings_h3_option2");

const option3 = document.getElementById("settings_option3_sub");
const option3_hidden = document.getElementById("settings_option3_hidden");
const option3_preview = document.getElementById("settings_h3_option3");

const option4 = document.getElementById("settings_option4_sub");
const option4_hidden = document.getElementById("settings_option4_hidden");
const option4_preview = document.getElementById("settings_h3_option4");

// Functions to toggle between different settings options
function toggle_options(no) {
    option1_hidden.style.display = "none"
    option2_hidden.style.display = "none"
    option3_hidden.style.display = "none"
    option4_hidden.style.display = "none"

    if (no == 1) {
        option1_hidden.style.display = "block"
    }
    else if (no == 2) {
        option2_hidden.style.display = "block"
    }
    else if (no == 3) {
        option3_hidden.style.display = "block"
    }
    else if (no == 4) {
        option4_hidden.style.display = "block"
    };
};
option1.onclick = function() { toggle_options(1); };
option2.onclick = function() { toggle_options(2); };
option3.onclick = function() { toggle_options(3); };
option4.onclick = function() { toggle_options(4); };

// -------------------------------------------------------------------------------------

// Retrieve all necessary elements for settings option 1
const option1_button1_container = document.getElementById("settings_option1_button1_selector");
const option1_button1 = document.getElementById("settings_option1_button1");
const option1_spectrum_settings = document.getElementById("intensity_spectrum_settings");

const option1_button2_container = document.getElementById("settings_option1_button2_selector");
const option1_button2 = document.getElementById("settings_option1_button2");
const option1_spectrogram_settings = document.getElementById("spectrogram_settings");

const option1_button3_container = document.getElementById("settings_option1_button3_selector");
const option1_button3 = document.getElementById("settings_option1_button3");
const option1_waveform_settings = document.getElementById("waveform_settings");

const option1_button4_container = document.getElementById("settings_option1_button4_selector");
const option1_button4 = document.getElementById("settings_option1_button4");
const option1_softmax_settings = document.getElementById("softmax_settings");

// Function to select option 1 settings
function option1_toggle_button(no) {

    option1_button1.style.backgroundColor = "white";
    option1_button2.style.backgroundColor = "white";
    option1_button3.style.backgroundColor = "white";
    option1_button4.style.backgroundColor = "white";

    option1_spectrum_settings.style.display = "none";
    option1_spectrogram_settings.style.display = "none";
    option1_waveform_settings.style.display = "none";
    option1_softmax_settings.style.display = "none";

    if (no == 1) {
        option1_button1.style.backgroundColor = "orange";
        localStorage.setItem("visualiser_type", "intensity spectrum");
        option1_spectrum_settings.style.display = "block";
    } 
    else if (no == 2) {
        option1_button2.style.backgroundColor = "orange";
        localStorage.setItem("visualiser_type", "spectrogram");
        option1_spectrogram_settings.style.display = "block";
    }
    else if (no == 3) {
        option1_button3.style.backgroundColor = "orange";
        localStorage.setItem("visualiser_type", "waveform");
        option1_waveform_settings.style.display = "block";
    }
    else if (no == 4) {
        option1_button4.style.backgroundColor = "orange";
        localStorage.setItem("visualiser_type", "softmax");
        option1_softmax_settings.style.display = "block";
    };
    update_previews();
};
option1_button1_container.onclick = function() { option1_toggle_button(1); };
option1_button2_container.onclick = function() { option1_toggle_button(2); };
option1_button3_container.onclick = function() { option1_toggle_button(3); };
option1_button4_container.onclick = function() { option1_toggle_button(4); };

// Intensity Spectrum Settings:
const intensity_spectrum_box_custom_colour = document.getElementById("intensity_spectrum_box_custom_colour");
const intensity_spectrum_box_custom_colour_hex = document.getElementById("intensity_spectrum_box_custom_colour_hex_code");
function intensity_spectrum_line_colour() {
    localStorage.setItem("intensity_spectrum_colour",intensity_spectrum_box_custom_colour.value);
    intensity_spectrum_box_custom_colour_hex.innerText = intensity_spectrum_box_custom_colour.value;
};
intensity_spectrum_box_custom_colour.addEventListener("input",intensity_spectrum_line_colour);

const axis_scale_linear = document.getElementById("axis_scale_linear");
const axis_scale_logarithmic = document.getElementById("axis_scale_logarithmic");

function axis_scale(no) {
    axis_scale_linear.style.backgroundColor = "#e3e3e3";
    axis_scale_linear.style.borderColor = "#717171";
    axis_scale_logarithmic.style.backgroundColor = "#e3e3e3";
    axis_scale_logarithmic.style.borderColor = "#717171";

    if (no == 1) {
        axis_scale_linear.style.backgroundColor = "#858585";
        axis_scale_linear.style.borderColor = "orange";
        localStorage.setItem("intensity_spectrum_axis","linear");
    }
    else if (no == 2) {
        axis_scale_logarithmic.style.backgroundColor = "#858585";
        axis_scale_logarithmic.style.borderColor = "orange";
        localStorage.setItem("intensity_spectrum_axis","logarithmic");
    };
};
axis_scale_linear.onclick = function() { axis_scale(1); };
axis_scale_logarithmic.onclick = function() { axis_scale(2); };

// Spectrogram Settings:
const heatmap_blue_red_white = document.getElementById("heatmap_blue-red-white");
const heatmap_purple_orange = document.getElementById("heatmap_purple-orange");
const heatmap_red_blue_green = document.getElementById("heatmap_red-blue-green");
const heatmap_red_green = document.getElementById("heatmap_red-green")
const heatmap_black_white = document.getElementById("heatmap_black-white");
function heat_map_colour(no) {
    heatmap_blue_red_white.style.borderColor = "black";
    heatmap_purple_orange.style.borderColor = "black";
    heatmap_red_blue_green.style.borderColor = "black";
    heatmap_red_green.style.borderColor = "black";
    heatmap_black_white.style.borderColor = "black";

    if (no == 1) {
        heatmap_blue_red_white.style.borderColor = "orange";
        localStorage.setItem("spectrogram_colour","blue-red-white");
    }
    else if (no == 2) {
        heatmap_purple_orange.style.borderColor = "orange";
        localStorage.setItem("spectrogram_colour","purple-orange");
    }
    else if (no == 3) {
        heatmap_red_blue_green.style.borderColor = "orange";
        localStorage.setItem("spectrogram_colour","red-blue-green");
    }
    else if (no == 4) {
        heatmap_red_green.style.borderColor = "orange";
        localStorage.setItem("spectrogram_colour","red-green");
    }
    else if (no == 5) {
        heatmap_black_white.style.borderColor = "orange";
        localStorage.setItem("spectrogram_colour","black-white");
    };
};
heatmap_blue_red_white.onclick = function() { heat_map_colour(1); };
heatmap_purple_orange.onclick = function() { heat_map_colour(2); };
heatmap_red_blue_green.onclick = function() { heat_map_colour(3); };
heatmap_red_green.onclick = function() { heat_map_colour(4); };
heatmap_black_white.onclick = function() { heat_map_colour(5); };

const spectrogram_refresh_10 = document.getElementById("spectrogram_refresh_10");
const spectrogram_refresh_5 = document.getElementById("spectrogram_refresh_5");
const spectrogram_refresh_3 = document.getElementById("spectrogram_refresh_3")
function spectrogram_refresh(no) {
    spectrogram_refresh_10.style.backgroundColor = "#e3e3e3";
    spectrogram_refresh_10.style.borderColor = "#717171";
    spectrogram_refresh_5.style.backgroundColor = "#e3e3e3";
    spectrogram_refresh_5.style.borderColor = "#717171";
    spectrogram_refresh_3.style.backgroundColor = "#e3e3e3";
    spectrogram_refresh_3.style.borderColor = "#717171";

    if (no == 1) {
        spectrogram_refresh_10.style.backgroundColor = "#858585";
        spectrogram_refresh_10.style.borderColor = "orange";
        localStorage.setItem("spectrogram_refresh",10);
    }
    else if (no == 2) {
        spectrogram_refresh_5.style.backgroundColor = "#858585";
        spectrogram_refresh_5.style.borderColor = "orange";
        localStorage.setItem("spectrogram_refresh",5);
    }
    else if (no == 3) {
        spectrogram_refresh_3.style.backgroundColor = "#858585";
        spectrogram_refresh_3.style.borderColor = "orange";
        localStorage.setItem("spectrogram_refresh",3);
    };
};
spectrogram_refresh_10.onclick = function() { spectrogram_refresh(1); };
spectrogram_refresh_5.onclick = function() { spectrogram_refresh(2); };
spectrogram_refresh_3.onclick = function() { spectrogram_refresh(3); };

// Waveform Settings:
const waveform_box_custom_colour = document.getElementById("waveform_box_custom_colour");
const waveform_box_custom_colour_hex = document.getElementById("waveform_box_custom_colour_hex_code");
function waveform_line_colour() {
    localStorage.setItem("waveform_colour",waveform_box_custom_colour.value);
    waveform_box_custom_colour_hex.innerText = waveform_box_custom_colour.value;
};
waveform_box_custom_colour.addEventListener("input",waveform_line_colour);

// Softmax Settings:
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

// Retrieve all necessary elements for settings option 3
const option3_button1_container = document.getElementById("settings_option3_button1_selector");
const option3_button1 = document.getElementById("settings_option3_button1");

const option3_button2_container = document.getElementById("settings_option3_button2_selector");
const option3_button2 = document.getElementById("settings_option3_button2");

// const option3_button3_container = document.getElementById("settings_option3_button3_selector");
// const option3_button3 = document.getElementById("settings_option3_button3");

// Function to select option 2 settings
function option3_toggle_button(no) {
    
    option3_button1.style.backgroundColor = "white";
    option3_button2.style.backgroundColor = "white";

    if (no == 1) {
        option3_button1.style.backgroundColor = "orange";
        localStorage.setItem("display_type", "mean");
    } 
    else if (no == 2) {
        option3_button2.style.backgroundColor = "orange";
        localStorage.setItem("display_type", "max");
    };
    update_previews();
};
option3_button1_container.onclick = function() { option3_toggle_button(1); };
option3_button2_container.onclick = function() { option3_toggle_button(2); };

// -------------------------------------------------------------------------------------

// Retrieve all necessary elements for settings option 3
const option4_button1_container = document.getElementById("settings_option4_button1_selector");
const option4_button1 = document.getElementById("settings_option4_button1");

const option4_button2_container = document.getElementById("settings_option4_button2_selector");
const option4_button2 = document.getElementById("settings_option4_button2");

// const option3_button3_container = document.getElementById("settings_option3_button3_selector");
// const option3_button3 = document.getElementById("settings_option3_button3");

// Function to select option 2 settings
function option4_toggle_button(no) {
    
    option4_button1.style.backgroundColor = "white";
    option4_button2.style.backgroundColor = "white";

    if (no == 1) {
        option4_button1.style.backgroundColor = "orange";
        localStorage.setItem("data_smoothing", "raw");
    } 
    else if (no == 2) {
        option4_button2.style.backgroundColor = "orange";
        localStorage.setItem("data_smoothing", "savitzky-golay");
    };
    update_previews();
};
option4_button1_container.onclick = function() { option4_toggle_button(1); };
option4_button2_container.onclick = function() { option4_toggle_button(2); };

// -------------------------------------------------------------------------------------

// Update selected options preview (NOTE: needs to be last such that toggle variables have already been declared)
function update_previews() {
    option1_preview.innerText = localStorage.getItem("visualiser_type");
    option2_preview.innerText = localStorage.getItem("weighting");
    option3_preview.innerText = localStorage.getItem("display_type");
    option4_preview.innerText = localStorage.getItem("data_smoothing");

    if (localStorage.getItem("visualiser_type") == "intensity spectrum") {
        option1_button1.style.backgroundColor = "orange";
        option1_spectrum_settings.style.display = "block";
    }
    else if (localStorage.getItem("visualiser_type") == "spectrogram") {
        option1_button2.style.backgroundColor = "orange";
        option1_spectrogram_settings.style.display = "block";
    }
    else if (localStorage.getItem("visualiser_type") == "waveform") {
        option1_button3.style.backgroundColor = "orange";
        option1_waveform_settings.style.display = "block";
    }
    else if (localStorage.getItem("visualiser_type") == "softmax") {
        option1_button4.style.backgroundColor = "orange";
        option1_softmax_settings.style.display = "block";
    };

    if (localStorage.getItem("weighting") == "itu r") {
        option2_button1.style.backgroundColor = "orange";
    }
    else if (localStorage.getItem("weighting") == "a") {
        option2_button2.style.backgroundColor = "orange";
    }
    else if (localStorage.getItem("weighting") == "c") {
        option2_button3.style.backgroundColor = "orange";
    }
    else if (localStorage.getItem("weighting") == "z") {
        option2_button4.style.backgroundColor = "orange";
    };

    if (localStorage.getItem("display_type") == "mean") {
        option3_button1.style.backgroundColor = "orange";
    }
    else if (localStorage.getItem("display_type") == "max") {
        option3_button2.style.backgroundColor = "orange";
    };

    if (localStorage.getItem("data_smoothing") == "raw") {
        option4_button1.style.backgroundColor = "orange";
    }
    else if (localStorage.getItem("data_smoothing") == "savitzky-golay") {
        option4_button2.style.backgroundColor = "orange";
    };

    intensity_spectrum_box_custom_colour.value = localStorage.getItem("intensity_spectrum_colour");
    intensity_spectrum_box_custom_colour_hex.innerText = localStorage.getItem("intensity_spectrum_colour");

    waveform_box_custom_colour.value = localStorage.getItem("waveform_colour");
    waveform_box_custom_colour_hex.innerText = localStorage.getItem("waveform_colour");

    if (localStorage.getItem("intensity_spectrum_axis") == "linear") {
        axis_scale_linear.style.backgroundColor = "#858585";
        axis_scale_linear.style.borderColor = "orange";
    }
    else if (localStorage.getItem("intensity_spectrum_axis") == "logarithmic") {
        axis_scale_logarithmic.style.backgroundColor = "#858585";
        axis_scale_logarithmic.style.borderColor = "orange";
    };

    if (localStorage.getItem("spectrogram_colour") == "blue-red-white") {
        heatmap_blue_red_white.style.borderColor = "orange";
    }
    else if (localStorage.getItem("spectrogram_colour") == "purple-orange") {
        heatmap_purple_orange.style.borderColor = "orange";
    }
    else if (localStorage.getItem("spectrogram_colour") == "red-blue-green") {
        heatmap_red_blue_green.style.borderColor = "orange";
    }
    else if (localStorage.getItem("spectrogram_colour") == "red-green") {
        heatmap_red_green.style.borderColor = "orange";
    }
    else if (localStorage.getItem("spectrogram_colour") == "black-white") {
        heatmap_black_white.style.borderColor = "orange";
    };
    if (localStorage.getItem("spectrogram_refresh") == 10) {
        spectrogram_refresh_10.style.backgroundColor = "#858585";
        spectrogram_refresh_10.style.borderColor = "orange";
    }
    else if (localStorage.getItem("spectrogram_refresh") == 5) {
        spectrogram_refresh_5.style.backgroundColor = "#858585";
        spectrogram_refresh_5.style.borderColor = "orange";
    }
    else if (localStorage.getItem("spectrogram_refresh") == 3) {
        spectrogram_refresh_3.style.backgroundColor = "#858585";
        spectrogram_refresh_3.style.borderColor = "orange";
    };
};
document.addEventListener("DOMContentLoaded",update_previews);
