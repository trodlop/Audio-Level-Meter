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
    if (localStorage.getItem("intensity_spectrum_mode") === null) {
        localStorage.setItem("intensity_spectrum_mode","live"); // live, cumulative
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
    if (localStorage.getItem("softmax_axis") === null) {
        localStorage.setItem("softmax_axis","linear"); // logarithmic, linear
    };
    if (localStorage.getItem("softmax_colour") === null) {
        localStorage.setItem("softmax_colour","#008EFF"); // "#008EFF" = cyan 
    };
    if (localStorage.getItem("data_smoothing") === null) {
        localStorage.setItem("data_smoothing","raw"); // raw, savitzky-golay, moving average (mean), moving average (median)
    };
    if (localStorage.getItem("moving_average_window") === null || localStorage.getItem("moving_average_window") != 11) {
        localStorage.setItem("moving_average_window",11); // 0 < int < Decibels.length
    };
    if (localStorage.getItem("download_type") === null) {
        localStorage.setItem("download_type","simple"); // simple, full
    };
    if (localStorage.getItem("frequency_response") === null) {
        localStorage.setItem("frequency_response", JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
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

const option5 = document.getElementById("settings_option5_sub");
const option5_hidden = document.getElementById("settings_option5_hidden");
const option5_preview = document.getElementById("settings_h3_option5");

const option_custom_filter = document.getElementById("settings_option_custom_filter_sub");
const option_custom_filter_hidden = document.getElementById("settings_option_custom_filter_hidden");

const option_glossary = document.getElementById("settings_option_glossary_sub");
const option_glossary_hidden = document.getElementById("settings_option_glossary_hidden");

const option_faq = document.getElementById("settings_option_faq_sub");
const option_faq_hidden = document.getElementById("settings_option_faq_hidden");

let last_selected = null; // Variable to remember the last selected option
// Functions to toggle between different settings options
function toggle_options(no) {
    option1_hidden.style.display = "none";
    option2_hidden.style.display = "none";
    option3_hidden.style.display = "none";
    option4_hidden.style.display = "none";
    option5_hidden.style.display = "none";
    option_custom_filter_hidden.style.display = "none";
    option_glossary_hidden.style.display = "none";
    option_faq_hidden.style.display = "none";

    // If the same option is clicked again, collapse it
    if (last_selected === no) {
        last_selected = null; // Reset last selected option
        return; // End function here
    };

    // Show the selected option and remember it
    last_selected = no;

    if (no == 1) {
        option1_hidden.style.display = "block";
    }
    else if (no == 2) {
        option2_hidden.style.display = "block";
    }
    else if (no == 3) {
        option3_hidden.style.display = "block";
    }
    else if (no == 4) {
        option4_hidden.style.display = "block";
    }
    else if (no == 5) {
        option5_hidden.style.display = "block";
    }
    else if (no == "custom_filter") {
        option_custom_filter_hidden.style.display = "block";
    }
    else if (no == "glossary") {
        option_glossary_hidden.style.display = "block";
    }
    else if (no == "faq") {
        option_faq_hidden.style.display = "block";
    };
};
option1.onclick = function() { toggle_options(1); };
option2.onclick = function() { toggle_options(2); };
option3.onclick = function() { toggle_options(3); };
option4.onclick = function() { toggle_options(4); };
option5.onclick = function() { toggle_options(5); };
option_custom_filter.onclick = function() { toggle_options("custom_filter"); };
option_glossary.onclick = function() { toggle_options("glossary"); };
option_faq.onclick = function() { toggle_options("faq"); };

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
const intensity_spectrum_data_mode_live = document.getElementById("intensity_spectrum_data_mode_live");
const intensity_spectrum_data_mode_cumulative = document.getElementById("intensity_spectrum_data_mode_cumulative");
function intensity_spectrum_data_mode(no) {
    intensity_spectrum_data_mode_live.style.backgroundColor = "#e3e3e3";
    intensity_spectrum_data_mode_live.style.borderColor = "#717171";
    intensity_spectrum_data_mode_cumulative.style.backgroundColor = "#e3e3e3";
    intensity_spectrum_data_mode_cumulative.style.borderColor = "#717171";

    if (no == 1) {
        intensity_spectrum_data_mode_live.style.backgroundColor = "#858585";
        intensity_spectrum_data_mode_live.style.borderColor = "orange";
        localStorage.setItem("intensity_spectrum_mode","live");
    }
    else if (no == 2) {
        intensity_spectrum_data_mode_cumulative.style.backgroundColor = "#858585";
        intensity_spectrum_data_mode_cumulative.style.borderColor = "orange";
        localStorage.setItem("intensity_spectrum_mode","cumulative");
    };
};
intensity_spectrum_data_mode_live.onclick = function() { intensity_spectrum_data_mode(1); };
intensity_spectrum_data_mode_cumulative.onclick = function() { intensity_spectrum_data_mode(2); };

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

// Function to select option 3 settings
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

// Retrieve all necessary elements for settings option 4
const option4_button1_container = document.getElementById("settings_option4_button1_selector");
const option4_button1 = document.getElementById("settings_option4_button1");

const option4_button2_container = document.getElementById("settings_option4_button2_selector");
const option4_button2 = document.getElementById("settings_option4_button2");

const option4_button3_container = document.getElementById("settings_option4_button3_selector");
const option4_button3 = document.getElementById("settings_option4_button3");
const option4_moving_average_settings = document.getElementById("moving_average_settings");

// const option4_button3_container = document.getElementById("settings_option4_button3_selector");
// const option4_button3 = document.getElementById("settings_option4_button3");

// Function to select option 4 settings
function option4_toggle_button(no) {
    
    option4_button1.style.backgroundColor = "white";
    option4_button2.style.backgroundColor = "white";
    option4_button3.style.backgroundColor = "white";

    option4_moving_average_settings.style.display = "none";

    if (no == 1) {
        option4_button1.style.backgroundColor = "orange";
        localStorage.setItem("data_smoothing", "raw");
    } 
    else if (no == 2) {
        option4_button2.style.backgroundColor = "orange";
        localStorage.setItem("data_smoothing", "savitzky-golay");
    }
    else if (no == 3) {
        option4_button3.style.backgroundColor = "orange";
        option4_moving_average_settings.style.display = "block";
        localStorage.setItem("data_smoothing", "moving average (mean)");
    };
    update_previews();
};
option4_button1_container.onclick = function() { option4_toggle_button(1); };
option4_button2_container.onclick = function() { option4_toggle_button(2); };
option4_button3_container.onclick = function() { option4_toggle_button(3); };

// Moving Average Settings

const moving_average_window_width_slider = document.getElementById("moving_average_window_width_slider");
moving_average_window_width_slider.addEventListener("input", function() {
    localStorage.setItem("moving_average_window",moving_average_window_width_slider.value);
    update_previews();
});

const moving_average_mean = document.getElementById("moving_average_mean");
const moving_average_median = document.getElementById("moving_average_median");

function moving_average_type(no) {
    moving_average_mean.style.backgroundColor = "#e3e3e3";
    moving_average_mean.style.borderColor = "#717171";
    moving_average_median.style.backgroundColor = "#e3e3e3";
    moving_average_median.style.borderColor = "#717171";

    if (no == 1) {
        moving_average_mean.style.backgroundColor = "#858585";
        moving_average_mean.style.borderColor = "orange";
        localStorage.setItem("data_smoothing","moving average (mean)");
    }
    else if (no == 2) {
        moving_average_median.style.backgroundColor = "#858585";
        moving_average_median.style.borderColor = "orange";
        localStorage.setItem("data_smoothing","moving average (median)");
    };
    update_previews();
};
moving_average_mean.onclick = function() { moving_average_type(1); };
moving_average_median.onclick = function() { moving_average_type(2); };

// -------------------------------------------------------------------------------------

// Retrieve all necessary elements for settings option 5
const option5_button1_container = document.getElementById("settings_option5_button1_selector");
const option5_button1 = document.getElementById("settings_option5_button1");

const option5_button2_container = document.getElementById("settings_option5_button2_selector");
const option5_button2 = document.getElementById("settings_option5_button2");

// const option5_button3_container = document.getElementById("settings_option5_button3_selector");
// const option5_button3 = document.getElementById("settings_option5_button3");

// Function to select option 5 settings
function option5_toggle_button(no) {
    
    option5_button1.style.backgroundColor = "white";
    option5_button2.style.backgroundColor = "white";

    if (no == 1) {
        option5_button1.style.backgroundColor = "orange";
        localStorage.setItem("download_type", "simple");
    } 
    else if (no == 2) {
        option5_button2.style.backgroundColor = "orange";
        localStorage.setItem("download_type", "full");
    };
    update_previews();
};
option5_button1_container.onclick = function() { option5_toggle_button(1); };
option5_button2_container.onclick = function() { option5_toggle_button(2); };

// -------------------------------------------------------------------------------------

//! THIS SHIT IS A MESS BUT IT'S MY MESS :)
// Code block for drawing filter graph (I cried 4 times writing this)
function throttle(func, delay) { // Throttles the refresh of the mousemove event
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func(...args);
        };
    };
};

// var y_values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var y_values = JSON.parse(localStorage.getItem("frequency_response"));

const canvas = document.getElementById("custom_frequency_visualiser"); // Accesses canvas element in html
var ctx = canvas.getContext('2d'); // Creates a context to be able to draw on the canvas

// Custom plugin to handle dragging points up and down
const dragPlugin = {
    id: 'dragPlugin',
    afterEvent: throttle(function(chart, args) {
        const event = args.event;
        const dataset = chart.data.datasets[0];

        if (event.type === "mousedown") {
            chart.draggingPoint = getElementAtEvent(chart, event);
            
        } else if (event.type === 'mousemove' && chart.draggingPoint) {
            // Get the index of the point being dragged
            const index = chart.draggingPoint.index;

            // Calculate the new Y value based on mouse position (rounded to nearest integer)
            const newValue = Math.round(chart.scales.y.getValueForPixel(event.y));

            // Update the y-value of the point being dragged (constrain to y axis range)
            dataset.data[index] = Math.max(chart.scales.y.min, Math.min(chart.scales.y.max, newValue));

            chart.update();

        } else if (event.type === 'mouseup' || event.type === 'mouseout') {
            if (chart.draggingPoint) {
                // Save the updated y-values after dragging
                y_values[chart.draggingPoint.index] = dataset.data[chart.draggingPoint.index];

                // Clear dragging point
                chart.draggingPoint = null;

                update_custom_frequency_grid(y_values);
            };
        }
    }, 50)  // Throttle function to limit updates to every 50ms rather infinately (avoids callstack error)
};

function getElementAtEvent(chart, event) {
    const points = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
    return points.length ? points[0] : null;
};

Chart.defaults.animation = false; // Makes sure that graph refreshes instantly
var visualiser = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [100, 133, 176, 234, 311, 414, 550, 730, 969, 1288, 1711, 2274, 3020, 4012, 5330, 7080, 9406, 12495, 16599, 22050],
        datasets: [{
            label: 'Data Points',
            data: y_values,
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: "#0060FF",
            borderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: '#0060FF',
            fill: true
        }]
    },
    options: {
        events: ['mousedown', 'mousemove', 'mouseup', 'click', 'touchstart', 'touchmove'], // Allows detection of mouse events
        interaction: {
            mode: 'nearest',
        },
        maintainAspectRatio: false,
        plugins: {
            dragPlugin: true,
            tooltip: {
                enabled: false
            },
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                type: "logarithmic",
                position: 'bottom',
                ticks: {
                    callback: function(value, index, values) { // Displays X axis labels from custom pushed ticks

                        const customLabels = {
                            100: '100',
                            500: '500',
                            1000: '1k',
                            2000: '2k',
                            4000: '4k',
                            8000: '8k',
                            16000: '16k'
                        };

                        return customLabels[value] || '';
                    },
                },
                afterBuildTicks: function(axis) {

                    // Clear all pregenerated ticks
                    axis.ticks = [];

                    // Manually push only wanted ticks (essentially the vertical grid lines):                        

                    // Iterate over the array and add ticks
                    
                    const tickValues = [
                        { value: 100, major: true },
                        { value: 200, major: false },
                        { value: 300, major: false },
                        { value: 400, major: false },
                        { value: 500, major: true },
                        { value: 600, major: false },
                        { value: 700, major: false },
                        { value: 800, major: false },
                        { value: 900, major: false },
                        { value: 1000, major: true },
                        { value: 2000, major: true },
                        { value: 3000, major: false },
                        { value: 4000, major: true },
                        { value: 5000, major: false },
                        { value: 6000, major: false },
                        { value: 7000, major: false },
                        { value: 8000, major: true },
                        { value: 9000, major: false },
                        { value: 10000, major: false },
                        { value: 16000, major: true },
                        { value: 20000, major: false }
                    ];
                    for (let i = 0; i < tickValues.length; i++) {
                        axis.ticks.push({
                            value: tickValues[i].value,
                            major: tickValues[i].major,
                        });
                    };
                },

                
                min: 100, // Set the minimum value for the x-axis
                max: 22050, // Set the maximum value for the x-axis
                grid: {
                    color: 'rgba(0, 0, 0, 0.3)',
                    borderColor: '#333',
                    borderWidth: 1,
                    lineWidth: 1
                },
                title: {
                    display: false,
                }
            },
            y: {
                min: -40,    // Minimum value of the Y-axis
                max: 40,    // Maximum value of the Y-axis
                grid: {
                    color: 'rgba(0, 0, 0, 0.5)', // Adjust the color and opacity
                    borderColor: '#333',
                    borderWidth: 1,
                    lineWidth: 2
                },
                title: {
                    display: false,
                }
            }
        }
    },
    plugins: [dragPlugin] // Adding the drag plugin outside the 'plugins' options
});

function set_active_frequency_response(array) {
    localStorage.setItem("frequency_response",JSON.stringify(array))
};

function update_custom_frequency_grid(array) { //Updates custom frequency intervals grid
    for (let i = 0; i < array.length; i++) {
        document.getElementById(`custom_frequency_value_${i}`).innerText = array[i];
    };
    set_active_frequency_response(array);
};
update_custom_frequency_grid(y_values); // Initialises the grid on page load

// Function to search for local storage key substrings and add them to an object
let clicked_object = {}; // Object to store whether a filter is clicked
function retrieve_saved_filters_to_object() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);  // Get the key at index i

        // Check if the key contains the specified substring
        if (key.includes("custom_filter_")) {
            clicked_object[key] = false; // Set clicked to false
        };
    };
};
retrieve_saved_filters_to_object(); // Run function on page load

// Function to create a new child element for a new saved filter
const custom_filter_save = document.getElementById("custom_filter_save");
function create_custom_filter_div(name, key) {

    if (document.getElementById(`custom_filter_${name}`)) { // Exit the function to avoid creating a duplicate div
        return; 
    };

    // Create a new div using the template structure
    const new_filter_div = document.createElement("div");
    new_filter_div.classList.add("template_custom_user_filter_container", "center_h", "flex_space_between", "prevent_select");
    new_filter_div.id = `custom_filter_${name}`;
    // div_object[`custom_filter_${name}`] = false;
    // console.log(div_object);
    

    // Create an h3 element for the filter name
    const filter_name_element = document.createElement("h3");
    filter_name_element.classList.add("template_custom_user_filter_name");
    filter_name_element.textContent = name; // Set the text to the input value

    // Create an h3 element for the filter name
    const filter_array_element = document.createElement("h3");
    filter_array_element.classList.add("template_custom_user_filter_array");
    filter_array_element.textContent = localStorage.getItem(key);

    // Add the h3 element to the div
    new_filter_div.appendChild(filter_name_element);
    new_filter_div.appendChild(filter_array_element);

    // Add the new filter div to the saved_filters_list container
    document.getElementById("saved_filters_list").appendChild(new_filter_div);

    // Clear the input field
    document.getElementById("custom_filter_input_new_name").value = "";
};
function delete_custom_filter_div(name) {
    const filter_div = document.getElementById(name);

    // Check if the element exists
    if (filter_div) {
        filter_div.remove();
    };
};

function reload_saved_filters(deleted) {

    delete_custom_filter_div(deleted); // Deleted the div element passed in function before adding any new ones

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);  // Get the key at index i

        // Check if the key contains the substring "custom_filter_"
        if (key.includes("custom_filter_")) {
            create_custom_filter_div(key.replace("custom_filter_", ""), key);  // Create a div element to show that filter
        };
    };
};
reload_saved_filters();

// Function to save filter arrays in local storage
function save_filter_local_storage(name, array) {
    if (localStorage.getItem(`custom_filter_${name}`) === null) { // Checks to see if a filter with that name doesn't already exist
        localStorage.setItem(`custom_filter_${name}`, JSON.stringify(array));
        create_custom_filter_div(name, `custom_filter_${name}`);
        clicked_object[`custom_filter_${name}`] = false;
    }
    else {
        // Ask the user if they want to overwrite the existing value
        const overwrite = confirm(`The filter "${name}" already exists. Do you want to overwrite it?`);

        // If the user chooses not to overwrite, exit the function
        if (!overwrite) {
            return;
        }
        else {
            localStorage.setItem(`custom_filter_${name}`, JSON.stringify(array));
            // delete_custom_filter(`custom_filter_${name}`);
            // clicked_object[`custom_filter_${name}`] = true;
            reload_saved_filters(`custom_filter_${name}`);
        };
    };
};
custom_filter_save.onclick = function() {
    if (document.getElementById("custom_filter_input_new_name").value == "") { // Checks to see if a string has been entered for the name
        alert("Please input a name for the filter")
    }
    else {
        save_filter_local_storage(document.getElementById("custom_filter_input_new_name").value, y_values); 
    };
};

function click_filter(name) {   
    for ([key, value] of Object.entries(clicked_object)) { // Loops over object changing every value to false
        document.getElementById(key).style.backgroundColor = "#c9c9c9";
        clicked_object[key] = false;
    };
    document.getElementById(name).style.backgroundColor = "#aaaaab"; // Changes styling and true/false value for correct div
    clicked_object[name] = true;
};
// Parent element where the new divs are being added
const filterList = document.getElementById('saved_filters_list');
// Event delegation: listen for clicks on the parent, and filter for child divs
filterList.addEventListener('click', function(event) {
    // Check if the clicked element is one of the custom filter containers
    if (event.target.closest('.template_custom_user_filter_container')) {
        const clickedDiv = event.target.closest('.template_custom_user_filter_container');
        const filterId = clickedDiv.id; // Get the unique ID
        click_filter(filterId); // Call the function with the ID
    }
});

function open_custom_filter() {
    let clicked_value = "";

    for ([key, value] of Object.entries(clicked_object)) { // Loops over object to find clicked value (value = true)
        if (clicked_object[key] == true) {
            clicked_value = key;
            break;
        };
    };
    if (clicked_value == "") { // Checks to see if loop found no filter had been clicked
        alert("No filter selected");
        return;
    };
    
    let array = JSON.parse(localStorage.getItem(clicked_value));    

    visualiser.data.datasets[0].data = array; // Updates visualiser with the loaded array
    visualiser.update();

    update_custom_frequency_grid(array);
};
const open_button = document.getElementById("saved_filters_open");
open_button.addEventListener("click",open_custom_filter);

function delete_custom_filter() {
    let clicked_value = "";

    for ([key, value] of Object.entries(clicked_object)) { // Loops over object to find clicked value (value = true)
        if (clicked_object[key] == true) {
            clicked_value = key;
            break;
        };
    };
    if (clicked_value == "") { // Checks to see if loop found no filter had been clicked
        alert("No filter selected");
        return;
    };

    localStorage.removeItem(clicked_value);
    delete clicked_object[clicked_value];    
    reload_saved_filters(clicked_value);
};
const test_button = document.getElementById("saved_filters_delete");
test_button.addEventListener("click", delete_custom_filter);

// Update selected options preview (NOTE: needs to be last such that toggle variables have already been declared)
function update_previews() {
    option1_preview.innerText = localStorage.getItem("visualiser_type");
    option2_preview.innerText = localStorage.getItem("weighting");
    option3_preview.innerText = localStorage.getItem("display_type");
    option4_preview.innerText = localStorage.getItem("data_smoothing");
    option5_preview.innerText = localStorage.getItem("download_type");

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
    }
    else if (localStorage.getItem("data_smoothing") == "moving average (mean)") {
        option4_button3.style.backgroundColor = "orange";
        option4_moving_average_settings.style.display = "block";
        moving_average_mean.style.backgroundColor = "#858585";
        moving_average_mean.style.borderColor = "orange";
        moving_average_median.style.backgroundColor = "#e3e3e3";
        moving_average_median.style.borderColor = "#717171";
    }
    else if (localStorage.getItem("data_smoothing") == "moving average (median)") {
        option4_button3.style.backgroundColor = "orange";
        option4_moving_average_settings.style.display = "block";
        moving_average_median.style.backgroundColor = "#858585";
        moving_average_median.style.borderColor = "orange";
        moving_average_mean.style.backgroundColor = "#e3e3e3";
        moving_average_mean.style.borderColor = "#717171";
    };

    moving_average_window_width_value.innerText = localStorage.getItem("moving_average_window");

    if (localStorage.getItem("download_type") == "simple") {
        option5_button1.style.backgroundColor = "orange";
    }
    else if (localStorage.getItem("download_type") == "full") {
        option5_button2.style.backgroundColor = "orange";
    };

    intensity_spectrum_box_custom_colour.value = localStorage.getItem("intensity_spectrum_colour");
    intensity_spectrum_box_custom_colour_hex.innerText = localStorage.getItem("intensity_spectrum_colour");

    waveform_box_custom_colour.value = localStorage.getItem("waveform_colour");
    waveform_box_custom_colour_hex.innerText = localStorage.getItem("waveform_colour");

    if (localStorage.getItem("intensity_spectrum_mode") == "live") {
        intensity_spectrum_data_mode_live.style.backgroundColor = "#858585";
        intensity_spectrum_data_mode_live.style.borderColor = "orange";
    }
    else if (localStorage.getItem("intensity_spectrum_mode") == "cumulative") {
        intensity_spectrum_data_mode_cumulative.style.backgroundColor = "#858585";
        intensity_spectrum_data_mode_cumulative.style.borderColor = "orange";
    };

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