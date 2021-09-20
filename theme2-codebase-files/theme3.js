var EASYCHAT_IMG_PATH = "/static/EasyChatApp/img/";

////////////////  Multilingual Template Variable(with default value) start
var selected_language = SELECTED_LANGUAGE;
var EASYCHAT_INPUT_QUERY_DEFAULT_PLACEHOLDER = "How may I help you?";
var EASYCHAT_INPUT_QUERY_THEME_1_PLACEHOLDER = "Type your question here";
var EASYCHAT_INPUT_QUERY_THEME_2_PLACEHOLDER = "Type here...";
var TYPING_TEXT = ""
var CARDS_TEXT = "Know more"
var MENU_TEXT = "Menu"
var GO_BACK_TEXT = "Go Back"
var SEARCH_TEXT = "Search"
var DROPDOWN_TEXT = "Choose from the following "
var START_TEXT = "Start"
var STOP_TEXT = "Stop"
var SUBMIT_TEXT = "Submit"
var CANCEL_TEXT = "Cancel"
var SAVE_TEXT = "Save"
var RESET_TEXT = "Reset"
var FEEDBACK_TEXT = "Please provide your feedback"
var FEEDBACK_ERROR_TEXT = "Please select from the below options."
var SUCCESS_FEEDBACK_TEXT = "Thank you for your feedback"
var POSITIVE_FEEDBACK_1 = "Easy Communication"
var POSITIVE_FEEDBACK_2 = "Fully Satisfied"
var POSITIVE_FEEDBACK_3 = "Quick Response"
var POSITIVE_FEEDBACK_4 = "Query Resolved Quickly"
var POSITIVE_FEEDBACK_5 = "Good Experience"
var NEGATIVE_FEEDBACK_1 = "Inappropriate Answer"
var NEGATIVE_FEEDBACK_2 = "Response is slow"
var NEGATIVE_FEEDBACK_3 = "Need more information"
var NEGATIVE_FEEDBACK_4 = "I couldn’t find what I was looking for"
var NEGATIVE_FEEDBACK_5 = "Content is too complicated"
var FILE_SIZE_LIMIT_TEXT = "File size must be less than"
var FILE_ATTACHEMENT_TEXT = "Drag and drop your files here<br>Or Click in this area.";
var UPLOAD_VIDEO_TEXT = "Uploading your video. Please wait."
var CSAT_ALL_FIELD_ERROR = "Select at least one feedback."
var INVALID_MOBILE_NUMBER = "Please enter a valid phone number."
var INVALID_EMAIL_ID = "Please fill a valid email id."
var MIN_TEXT = "Min";
var MAX_TEXT = "Max";
var RANGE_TEXT = "Range";
var INVALID_SESSION_ID_RESPONSE_TEXT = "Looks like, I can not not answer your query for now. Please try again after some time.";
var FILL_FORM_TEXT = "Please fill the form"
var SUBMIT_FORM_TEXT = "Are you sure you want to submit these details?"
var YES = "yes"
var NO = "no"
var READ_MORE = "Read More";
var READ_LESS = "Read Less";
var SHOW_LESS = "Show Less";
var VIEW_MORE = "View more";
var SPEAK_NOW = "speak now";
var BOT_MINIMIZE_TEXT = "Click here to minimize";
var BOT_MAXIMIZE_TEXT = "Click here to maximize";
var MUTE_TEXT = "Mute";
var UNMUTE_TEXT = 'Unmute';
var NO_RESULT_FOUND = "No results found";
var cancel_text_to_speech_response = true;
var SELECT_VALUE_TEXT = "Select Value";
var SELECTED_VALUE_TEXT = "Selected Value";
var OTP_SIX_DIGIT_ERROR_TEXT = "Please enter a valid 6 digit OTP.";
var OTP_FOUR_DIGIT_ERROR_TEXT = "Please enter a valid 4 digit OTP.";
var EMAIL_ERROR_TEXT = "Please enter a valid Email Id.";
var PAN_ERROR_TEXT = "Invalid PAN number";
var NAME_ERROR_TEXT = "Please enter a valid name.";
var FILE_UPLOADED_TEXT = "File has been uploaded successfully."
var LABEL_DATE = "Date"
var LABEL_TIME = "Time"
var LABEL_ADD = "Add"
var LABEL_FROM = "From"
var LABEL_TO = "To"

////////////////////////////////  End
var CLEAR_API_URL = "/chat/clear-user-data/";
var EASYCHAT_FEEDBACK_SAVE_URL = "/chat/save-easychat-feedback-msg/";
var EASYCHAT_QUERY_URL = "/chat/query/";
var RESPONSE_SENTENCE_SEPARATOR = "$$$";
var is_doubletick = false;
var code_list = [];
var custom_quote_list_flag = "";
var BOT_MESSAGE_COLOR = '';
var USER_MESSAGE_COLOR = '';
var DEFAULT_ICON_COLOR = "";
var bot_id = null;
var bot_name = null;
var user_id = "";
var session_id = "";
var window_location = "";
var easychat_card_counter = 0;
var captcha_id = "";
var is_map_js_loaded = false;
var is_captcha = null;
var is_flow_ended = true;
var hide_mic = false;
var is_custom_complete = false;
var message = null;
var voices = null;
var final_transcript = '';
var recognizing = false;
var ignore_onend;
var recognition = null;
var marker = null;
var form_assist_enabled = false;
var GallaryslideIndex, gallery_slides, gallery_dots;
var attached_file_src = "";
var do_not_disturb = "";
var MAX_TEXT_RESPONSE_LENGTH = 200;
var embed_cookies = ""
var embed_meta_data = ""
var bot_inactivity_detection_enabled = false
var bot_inactivity_detection_required = false
var bot_inactivity_timer = null
var bot_inactivity_msg = ""
var bot_inactivity_time = null
var is_bot_inactivity_msg_present = false
var mask_next_input = false
var file_extension = null;
var is_save_attachment_required = null;
var query_token_id = null;
var session_continue = false;
var easychat_prev_session_id = ""
var max_file_size_allowed = 0;
var is_go_back_enabled = false;
var widget_user_selected_list = null;
var is_sticky_message = false;
var is_conversaion_started = false;
var is_video_recorder_allowed = false;
var recorded_video_data_url = null;
var livechat_trigger_message = "";
var is_remove_widget = false;

var queue_timer = 0;
var livechat_queue_time = 0;
var bot_restarted = false

var EASYCHAT_BOT_THEME = "";
var entered_suggestion = false;
var file_type_ext = {
    "image(ex. .jpeg, .png, .jpg)": ".jpeg, .png, .gif, .jpg",
    "word processor(i.e. .doc,.pdf)": ".doc, .docx, .odt, .pdf, .rtf, .tex, .wks, .wkp",
    "compressed file(ex. .zip)": ".zip, .rar, .rpm, .z, .tar.gz, .pkg",
    "video file(ex. .mp4)": ".mp4",

}
var isFeedBackDone = get_cookie("isFeedBackDone") ? get_cookie("isFeedBackDone") : "0";
var is_bot_minimized = false;
var is_automatic_carousel_enabled = false;
var carousel_timer, carousel_time = 5;
var is_welcome_banner_present = true
var STATIC_MP3_PATH = '/static/EasyChatApp/mp3';
var user_message_index = 0;
var bot_message_index = 0;

var bot_response_delay_allowed = false;
var bot_response_delay_timer = null;
var bot_response_delay_message = null;
var bot_message_delay_timer = null;
var is_campaign_link = false;
var mic_access = true;
var is_bot_notification_sound_enabled = false;
var default_order_of_response = []
var form_fields_length = 0
var form_fields = []
var widget_form_name = ""
var element_response_previous_height = 0
var initial_intent_in_welcome_message = false
var web_landing_intent = false
var is_web_landing_allowed = "false"
var welcome_message_appended = false
var form_data_misdashboard = ""
var user_has_uploaded_previous_file = true
var fuzzyhound = ""
var autocorrect_bot_replace = []
var change_is_flow_ended_variable = true
var suggestion_list = []
var word_mapper_list = []
var db;
var db_name = "suggestion_list"
var table_name = "suggestion_list_table"
var table_index = "suggestion_list_key"
var contentvalue = 1;
var csat_feedback_form_enabled = false;
var mark_all_fields_csat_compulsory = false;
var collect_phone_number = false;
var collect_email_id = false;
var mobile_width = 450;
var is_user_authenticated = false;
var update_last_seen_chatbot = null;
var client_location_city = null;
var client_location_state = null;
var client_location_pincode = null;
var geocoder;
var calender_date_widget_value = null;
var calender_time_widget_value = null;
var complete_hamburger_list;
var is_initial_trigger_intent = false;


//record video initializers
var video_element_id = "global-video-captured-response"
var video_captured_canvas = "global-canvas-video-capture"
var start_button_id = "btn-start-recording"
var stop_button_id = "btn-stop-recording"
var preview_button_id =  "btn-stop-recording"
var is_audio_required = true
var submit_button_id = "btn-submit-recording"
var mask_confidential_info = false;

var drop_down_choices_theme6;
var xhttp_livechat_attachment;
var quick_menu_html;
var is_audio_notification_enabled = false;
var is_bot_response_appended = false;
var x_down_banner;
var slider_range;
var slider_from;
var slider_to;
var is_internet_explorer = false || !!document.documentMode;
var current_form_list
var global_file_name=""
var current_request_xhttp
var last_chosen_file_type
var global_calendar_input
var currently_opened_time_modal_id = ""
var currently_time_picker_type = ""
var timepicker_in_form = true
var inital_calendar_html = ""
var show_user_input = true


///////////////////////////////////  SVG'S ///////////////////////////////////////////

var FILE_ICON_SVG = '<svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">\
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8331 0V7.79765C12.8331 8.55542 13.4442 9.16652 14.202 9.16652H21.9996V27.964C21.9996 28.7218 21.3885 29.3329 20.6308 29.3329H1.36887C0.6111 29.3329 0 28.7218 0 27.964V1.36887C0 0.611101 0.6111 0 1.36887 0H12.8331ZM15.9867 0.391105L21.5844 6.01324C21.8533 6.28212 22 6.62434 22 6.991V7.33322H14.6668V0H15.009C15.3756 0 15.7179 0.146664 15.9867 0.391105Z" fill="url(#paint0_linear)"/>\
            <defs>\
            <linearGradient id="paint0_linear" x1="2.19182" y1="2.74996" x2="21.4413" y2="29.333" gradientUnits="userSpaceOnUse">\
            <stop stop-color="white"/><stop offset="1" stop-color="#C8DDFF"/></linearGradient></defs></svg>';

var FILE_ICON_SVG2 = '<svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">\
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8331 0V7.79765C12.8331 8.55542 13.4442 9.16652 14.202 9.16652H21.9996V27.964C21.9996 28.7218 21.3885 29.3329 20.6308 29.3329H1.36887C0.6111 29.3329 0 28.7218 0 27.964V1.36887C0 0.611101 0.6111 0 1.36887 0H12.8331ZM15.9867 0.391105L21.5844 6.01324C21.8533 6.28212 22 6.62434 22 6.991V7.33322H14.6668V0H15.009C15.3756 0 15.7179 0.146664 15.9867 0.391105Z" fill="url(#paint1_linear)"/>\
            <defs>\
            <linearGradient id="paint1_linear" x1="2.19182" y1="2.74996" x2="21.4413" y2="29.333" gradientUnits="userSpaceOnUse">\
            <stop stop-color="white"/><stop offset="1" stop-color="#C8DDFF"/></linearGradient></defs></svg>';

var FILE_LOADER_SVG =   '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <g clip-path="url(#clip0)">\
                        <g filter="url(#filter0_d)">\
                        <path d="M9.23483 3.47016C9.38128 3.32372 9.38128 3.08628 9.23483 2.93983L9.06016 2.76516C8.91372 2.61872 8.67628 2.61872 8.52983 2.76516L6.26516 5.02983C6.11872 5.17628 5.88128 5.17628 5.73483 5.02983L3.47016 2.76516C3.32372 2.61872 3.08628 2.61872 2.93983 2.76517L2.76516 2.93983C2.61872 3.08628 2.61872 3.32372 2.76517 3.47016L5.02983 5.73483C5.17628 5.88128 5.17628 6.11872 5.02983 6.26516L2.76516 8.52983C2.61872 8.67628 2.61872 8.91372 2.76516 9.06016L2.93983 9.23483C3.08628 9.38128 3.32372 9.38128 3.47017 9.23483L5.73483 6.97016C5.88128 6.82372 6.11872 6.82372 6.26516 6.97016L8.52983 9.23483C8.67628 9.38128 8.91372 9.38128 9.06016 9.23483L9.23483 9.06016C9.38128 8.91372 9.38128 8.67628 9.23483 8.52983L6.97016 6.26516C6.82372 6.11872 6.82372 5.88128 6.97016 5.73483L9.23483 3.47016Z" fill="#979797"/>\
                        </g>\
                        </g>\
                        <defs>\
                        <filter id="filter0_d" x="-5.34473" y="-5.34473" width="30.6893" height="30.6893" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>\
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\
                        <feOffset dx="4" dy="4"/>\
                        <feGaussianBlur stdDeviation="6"/>\
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>\
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\
                        </filter>\
                        <clipPath id="clip0">\
                        <rect width="12" height="12" fill="white"/>\
                        </clipPath>\
                        </defs>\
                        </svg>';
var download_button_html = '<div style="position: absolute;right: 12px;margin: 2px;display: inline-block;"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.875 11.25H3.125C2.77982 11.25 2.5 11.5298 2.5 11.875C2.5 12.2202 2.77982 12.5 3.125 12.5H11.875C12.2202 12.5 12.5 12.2202 12.5 11.875C12.5 11.5298 12.2202 11.25 11.875 11.25Z" fill="#757575"></path><path d="M2.5 10.625V11.875C2.5 12.2202 2.77982 12.5 3.125 12.5C3.47018 12.5 3.75 12.2202 3.75 11.875V10.625C3.75 10.2798 3.47018 10 3.125 10C2.77982 10 2.5 10.2798 2.5 10.625Z" fill="#757575"></path><path d="M11.25 10.625V11.875C11.25 12.2202 11.5298 12.5 11.875 12.5C12.2202 12.5 12.5 12.2202 12.5 11.875V10.625C12.5 10.2798 12.2202 10 11.875 10C11.5298 10 11.25 10.2798 11.25 10.625Z" fill="#757575"></path> \
                               <path d="M7.50003 9.375C7.37046 9.37599 7.24378 9.33667 7.13753 9.2625L4.63753 7.5C4.50279 7.40442 4.41137 7.25937 4.38326 7.09658C4.35515 6.93379 4.39264 6.76649 4.48753 6.63125C4.5349 6.56366 4.59518 6.50611 4.66491 6.46194C4.73463 6.41777 4.81242 6.38785 4.89377 6.37391C4.97512 6.35996 5.05843 6.36227 5.13889 6.38069C5.21934 6.39911 5.29535 6.43329 5.36253 6.48125L7.50003 7.975L9.62503 6.375C9.75764 6.27555 9.92432 6.23284 10.0884 6.25628C10.2525 6.27973 10.4006 6.36739 10.5 6.5C10.5995 6.63261 10.6422 6.7993 10.6187 6.96339C10.5953 7.12749 10.5076 7.27555 10.375 7.375L7.87503 9.25C7.76685 9.33114 7.63526 9.375 7.50003 9.375Z" fill="#757575"></path>   \
                             <path d="M7.5 8.125C7.33424 8.125 7.17527 8.05915 7.05806 7.94194C6.94085 7.82473 6.875 7.66576 6.875 7.5V2.5C6.875 2.33424 6.94085 2.17527 7.05806 2.05806C7.17527 1.94085 7.33424 1.875 7.5 1.875C7.66576 1.875 7.82473 1.94085 7.94194 2.05806C8.05915 2.17527 8.125 2.33424 8.125 2.5V7.5C8.125 7.66576 8.05915 7.82473 7.94194 7.94194C7.82473 8.05915 7.66576 8.125 7.5 8.125Z" fill="#757575"></path></svg></div>'

///////////////////////////////////  SVG'S Ends ///////////////////////////////////////////


function set_url_parameter(parameter, parameter_value) {
    var final_query_param = "?";
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        final_query_param += key + "=" + (key == parameter ? parameter_value:value) + "&"
    });
    
    return window.location.origin + window.location.pathname + final_query_param;
}

// Language Support data retrieval 

function get_language_templates_from_server(selected_language, bot_id) {

    var json_string = JSON.stringify({
        bot_id: bot_id,
        selected_language: selected_language,
    });
    json_string = encrypt_variable(json_string);
    json_string = encodeURIComponent(json_string);

    var xhttp = new XMLHttpRequest();
    var params = 'json_string=' + json_string
    xhttp.open("POST", "/chat/get-language-template/", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            response = custom_decrypt(response)
            response = JSON.parse(response);
            if (response['status'] == 200) {

                EASYCHAT_INPUT_QUERY_DEFAULT_PLACEHOLDER = response["placeholder"]
                EASYCHAT_INPUT_QUERY_THEME_1_PLACEHOLDER = response["placeholder"]
                EASYCHAT_INPUT_QUERY_THEME_2_PLACEHOLDER = response["placeholder"]
                TYPING_TEXT = response["typing_text"]
                CARDS_TEXT = response["cards_text"]
                MENU_TEXT = response["menu_text"]
                GO_BACK_TEXT = response["go_back_text"]
                DROPDOWN_TEXT = response["dropdown_text"]
                SEARCH_TEXT = response["search_text"]
                START_TEXT = response["start_text"]
                STOP_TEXT = response["stop_text"]
                SUBMIT_TEXT = response["submit_text"]
                UPLOAD_VIDEO_TEXT = response["uploading_video_text"]
                CANCEL_TEXT = response["cancel_text"]
                FILE_ATTACHEMENT_TEXT = response["file_attachment_text"]
                FILE_SIZE_LIMIT_TEXT = response["file_size_limit_text"]
                FEEDBACK_TEXT = response["feedback_text"]
                FEEDBACK_ERROR_TEXT = response["feedback_error_text"]
                SUCCESS_FEEDBACK_TEXT = response["success_feedback_text"]
                POSITIVE_FEEDBACK_1 = response["positive_feedback_options_text"].split(RESPONSE_SENTENCE_SEPARATOR)[0]
                POSITIVE_FEEDBACK_2 = response["positive_feedback_options_text"].split(RESPONSE_SENTENCE_SEPARATOR)[1]
                POSITIVE_FEEDBACK_3 = response["positive_feedback_options_text"].split(RESPONSE_SENTENCE_SEPARATOR)[2]
                POSITIVE_FEEDBACK_4 = response["positive_feedback_options_text"].split(RESPONSE_SENTENCE_SEPARATOR)[3]
                POSITIVE_FEEDBACK_5 = response["positive_feedback_options_text"].split(RESPONSE_SENTENCE_SEPARATOR)[4]
                NEGATIVE_FEEDBACK_1 = response["negative_feedback_options_text"].split(RESPONSE_SENTENCE_SEPARATOR)[0]
                NEGATIVE_FEEDBACK_2 = response["negative_feedback_options_text"].split(RESPONSE_SENTENCE_SEPARATOR)[1]
                NEGATIVE_FEEDBACK_3 = response["negative_feedback_options_text"].split(RESPONSE_SENTENCE_SEPARATOR)[2]
                NEGATIVE_FEEDBACK_4 = response["negative_feedback_options_text"].split(RESPONSE_SENTENCE_SEPARATOR)[3]
                NEGATIVE_FEEDBACK_5 = response["negative_feedback_options_text"].split(RESPONSE_SENTENCE_SEPARATOR)[4]
                CSAT_ALL_FIELD_ERROR = response["csat_form_error_mobile_email_text"].split(RESPONSE_SENTENCE_SEPARATOR)[0]
                INVALID_MOBILE_NUMBER = response["csat_form_error_mobile_email_text"].split(RESPONSE_SENTENCE_SEPARATOR)[1]
                INVALID_EMAIL_ID = response["csat_form_error_mobile_email_text"].split(RESPONSE_SENTENCE_SEPARATOR)[2]
                MIN_TEXT = response["date_range_picker_text"].split(RESPONSE_SENTENCE_SEPARATOR)[7]
                MAX_TEXT = response["date_range_picker_text"].split(RESPONSE_SENTENCE_SEPARATOR)[8]
                RANGE_TEXT = response["date_range_picker_text"].split(RESPONSE_SENTENCE_SEPARATOR)[9];
                SELECT_VALUE_TEXT = response["date_range_picker_text"].split(RESPONSE_SENTENCE_SEPARATOR)[10];
                SELECTED_VALUE_TEXT = response["date_range_picker_text"].split(RESPONSE_SENTENCE_SEPARATOR)[11];
                INVALID_SESSION_ID_RESPONSE_TEXT = response["invalid_session_id_response"];
                FILL_FORM_TEXT = response["form_widget_text"].split(RESPONSE_SENTENCE_SEPARATOR)[0]
                SUBMIT_FORM_TEXT = response["form_widget_text"].split(RESPONSE_SENTENCE_SEPARATOR)[1]
                YES = response["form_widget_text"].split(RESPONSE_SENTENCE_SEPARATOR)[2]
                NO = response["form_widget_text"].split(RESPONSE_SENTENCE_SEPARATOR)[3]
                READ_MORE = response["general_text"].split(RESPONSE_SENTENCE_SEPARATOR)[12]
                READ_LESS = response["general_text"].split(RESPONSE_SENTENCE_SEPARATOR)[13]
                SHOW_LESS = response["general_text"].split(RESPONSE_SENTENCE_SEPARATOR)[14]
                VIEW_MORE = response["general_text"].split(RESPONSE_SENTENCE_SEPARATOR)[15]
                SPEAK_NOW = response["general_text"].split(RESPONSE_SENTENCE_SEPARATOR)[16]
                BOT_MINIMIZE_TEXT = response.minimize_text;
                BOT_MAXIMIZE_TEXT = response.maximize_text;
                MUTE_TEXT = response["mute_text"]
                UNMUTE_TEXT = response["unmute_text"];
                NO_RESULT_FOUND = response["no_result_found"];
                OTP_SIX_DIGIT_ERROR_TEXT = response["form_widget_error_text"].split(RESPONSE_SENTENCE_SEPARATOR)[0]
                OTP_FOUR_DIGIT_ERROR_TEXT = response["form_widget_error_text"].split(RESPONSE_SENTENCE_SEPARATOR)[1]
                EMAIL_ERROR_TEXT = response["form_widget_error_text"].split(RESPONSE_SENTENCE_SEPARATOR)[2]
                PAN_ERROR_TEXT = response["form_widget_error_text"].split(RESPONSE_SENTENCE_SEPARATOR)[3]
                NAME_ERROR_TEXT = response["form_widget_error_text"].split(RESPONSE_SENTENCE_SEPARATOR)[4]
                SAVE_TEXT = response["form_widget_error_text"].split(RESPONSE_SENTENCE_SEPARATOR)[5]
                RESET_TEXT = response["form_widget_error_text"].split(RESPONSE_SENTENCE_SEPARATOR)[6]
                FILE_UPLOADED_TEXT = response["widgets_response_text"].split(RESPONSE_SENTENCE_SEPARATOR)[0]
                LABEL_DATE = response["widgets_response_text"].split(RESPONSE_SENTENCE_SEPARATOR)[1]
                LABEL_TIME = response["widgets_response_text"].split(RESPONSE_SENTENCE_SEPARATOR)[2]
                LABEL_ADD = response["widgets_response_text"].split(RESPONSE_SENTENCE_SEPARATOR)[3]
                LABEL_FROM = response["widgets_response_text"].split(RESPONSE_SENTENCE_SEPARATOR)[4]
                LABEL_TO = response["widgets_response_text"].split(RESPONSE_SENTENCE_SEPARATOR)[5]


            }
        }
    }
    xhttp.send(params);
}

function disable_language_change_options() {

    if(document.getElementsByClassName("language-dropdown-container").length) {
        
        document.getElementsByClassName("language-dropdown-container")[0].style.display="none"
    }
}

function update_bot_based_on_selected_language(element) {

    selected_language = element.id;
    parent.postMessage({
        event_id: 'set_local_storage',
        data: {
            var_value: selected_language,
        }
    }, "*")
    setTimeout(function() {
        var params = get_url_vars();
        params["selected_language"] = selected_language;
        var redirect_url = "?";
        for (param in params){
            if (redirect_url != "?"){
                redirect_url += "&";
            }
            redirect_url += param + "=" + params[param];
        }
        // url = set_url_parameter("selected_language", selected_language);
        // window.location.href = url;
        window.location = redirect_url;
    }, 1000);
}

function show_bot_language_animation(initial_delay_time){
    setTimeout(function() {
        // Display the div containing the class "bottomdiv"
        $(".bot-selected-language-animation-text").show('slow');
    }, initial_delay_time);
    setTimeout(function() {
        // Display the div containing the class "bottomdiv"
        $(".bot-selected-language-animation-text").hide('slow');

    }, 2500);
}
//       Session management

function update_last_seen(user_id) {

    if(is_user_authenticated  == false){

        return ;
    }
    var json_string = JSON.stringify({
        user_id: user_id,
    });
    json_string = encrypt_variable(json_string);
    json_string = encodeURIComponent(json_string);

    var xhttp = new XMLHttpRequest();
    var params = 'json_string=' + json_string
    xhttp.open("POST", "/chat/update-last-seen-chatbot/", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            response = custom_decrypt(response)
            response = JSON.parse(response);
            if (response['status'] == 200) {
                console.log("Success"); // debugging purpose
            }
        }
    }
    xhttp.send(params);
}

function start_authenticated_session(user_id, is_user_authenticated) {

    if(is_user_authenticated == true) {

        if(update_last_seen_chatbot == null) {

            update_last_seen_chatbot = setInterval(function() {
                                            update_last_seen(user_id);
                                        }, 15000);
        } else {

            clearInterval(update_last_seen_chatbot);
            update_last_seen_chatbot = setInterval(function() {
                                            update_last_seen(user_id);
                                        }, 15000);
        }
    }
}

(function (exports) {
    var is_text_to_speech_required = false;
    var is_bot_response_message_showed = false;
    var show_livechat_form_or_no = true;
    var is_abruptly_closed = false;
    var is_livechat = false;
    var is_livechat_msg = false;
    var default_response = "Hi, I am your personal virtual assistant. How may I assist you further?";

    exports.is_text_to_speech_required = is_text_to_speech_required;
    exports.is_bot_response_message_showed = is_bot_response_message_showed;
    exports.show_livechat_form_or_no = show_livechat_form_or_no;
    exports.is_abruptly_closed = is_abruptly_closed;
    exports.is_livechat = is_livechat;
    exports.is_livechat_msg = is_livechat_msg;
    exports.window_location = window_location;

    function enable_language_change_options() {

        if(document.getElementsByClassName("language-dropdown-container").length) {

            document.getElementsByClassName("language-dropdown-container")[0].style.display="flex"
        }
    }

    exports.enable_language_change_options = enable_language_change_options

    function disable_user_input() {
        var user_input_elem = document.getElementById("user_input");
        if (window.outerWidth < mobile_width) {
            // keyboard opens and closes on input
            // checks mobile and accordingly disables user input 
            user_input_elem.readOnly = true;
        } else {
            user_input_elem.disabled = true;
        }
    }
    exports.disable_user_input = disable_user_input;

    function user_input_paste() {
       activate_query_submit_button() 
    }

    exports.user_input_paste = user_input_paste;

    function enable_user_input() {
    
        var user_input_elem = document.getElementById("user_input");
        if (window.outerWidth < mobile_width) {
            user_input_elem.readOnly = false;
        } else {
            user_input_elem.disabled = false;
        }
   
    }
    exports.enable_user_input = enable_user_input;

    function page_embed_in_iframe() {
        try {
            if (parent.location === self.location) {
                return false;
            } else {
                return true;
            }
        } catch (err) {
            return true;
        }
    }
    exports.page_embed_in_iframe = page_embed_in_iframe;

    function scroll_to_bottom() {
        var objDiv = document.getElementById("easychat-chat-container");
        objDiv.scrollTop = objDiv.scrollHeight;
 
    }
    exports.scroll_to_bottom = scroll_to_bottom;

    function resize_chabot_window() {

        var sticky_intent_height = 0;

        if (document.getElementById("easychat-sticky") != null && document.getElementById("easychat-sticky").style.display != "none") {
            sticky_intent_height = document.getElementById('easychat-sticky').clientHeight;
        } else {
            if (document.getElementById("easychat-end-chat") != null && document.getElementById("easychat-end-chat").style.display != 'none') {
                sticky_intent_height = document.getElementById("easychat-end-chat").clientHeight;
            } else {
                
                sticky_intent_height = document.getElementById("easychat-footer").clientHeight;
            }
        }

        
        document.getElementById('easychat-chat-container').style.height = (document.documentElement.clientHeight - (document.getElementById("easychat-navbar").clientHeight + sticky_intent_height) - 25).toString() + "px ";
        if (navigator.userAgent.indexOf("Firefox") != -1) {
            if (document.getElementById("easychat-sticky") == null) {
                document.getElementById('easychat-chat-container').style.height = parseInt(document.getElementById('easychat-chat-container').style.height.slice(0, -2)) - 15 + "px";
            }
            else if (document.getElementById("easychat-sticky") != null) {
                document.getElementById('easychat-chat-container').style.height = parseInt(document.getElementById('easychat-chat-container').style.height.slice(0, -2)) - 2 + "px";
            }
        }

        if (EASYCHAT_BOT_THEME == "theme_1") {
            document.getElementById('easychat-chat-container').style.height = (document.documentElement.clientHeight - (document.getElementById("easychat-navbar").clientHeight + sticky_intent_height)).toString() + "px ";
            if (navigator.userAgent.indexOf("Firefox") != -1) {
                if (document.getElementById("easychat-sticky") == null) {
                    document.getElementById('easychat-chat-container').style.height = parseInt(document.getElementById('easychat-chat-container').style.height.slice(0, -2)) - 10 + "px";
                }
                else if (document.getElementById("easychat-sticky") != null) {
                    document.getElementById('easychat-chat-container').style.height = parseInt(document.getElementById('easychat-chat-container').style.height.slice(0, -2)) - 2 + "px";
                }
            }
            document.getElementById('easychat-chat-container').style.top = document.getElementById("easychat-navbar").clientHeight + 'px';
        }

        if (EASYCHAT_BOT_THEME == "theme_2") {

            if (window.innerHeight > 610) {
                
                document.getElementById('easychat-chat-container').style.height = (document.documentElement.clientHeight - document.getElementById("easychat-navbar").clientHeight - 30).toString() + "px ";

            } else {
                document.getElementById('easychat-chat-container').style.height = (document.documentElement.clientHeight - document.getElementById("easychat-navbar").clientHeight - 24).toString() + "px ";
            }
            document.getElementById('easychat-chat-container').style.height = (document.getElementById('easychat-chat-container').clientHeight - (sticky_intent_height - document.getElementById("easychat-footer").clientHeight)).toString() + "px ";

            if ((sticky_intent_height - document.getElementById("easychat-footer").clientHeight) == 0) {
                document.getElementById('easychat-chat-container').style.height = (document.getElementById('easychat-chat-container').clientHeight - document.getElementById("easychat-footer").clientHeight).toString() + "px ";

            }

            if (navigator.userAgent.indexOf("Firefox") != -1) {

                if (window.innerHeight > 610) {
                    document.getElementById('easychat-chat-container').style.height = (document.getElementById('easychat-chat-container').clientHeight - 10).toString() + "px ";
                }
            }
        }

        if(EASYCHAT_BOT_THEME == ""){ 

            if (navigator.userAgent.indexOf("Firefox") != -1 && navigator.userAgent.toLowerCase().indexOf("android") &&window.outerWidth < 450) {
              if (document.getElementById("easychat-sticky") != null) {
                    document.getElementById('easychat-chat-container').style.height = parseInt(document.getElementById('easychat-chat-container').style.height.slice(0, -2)) - 17 + "px";
                }

            }
        }

      }
    exports.resize_chabot_window = resize_chabot_window;

    function encrypt_variable(data) {

        utf_data = EasyChatCryptoJS.enc.Utf8.parse(data);
        encoded_data = utf_data;
        random_key = generate_random_string(16);
        encrypted_data = custom_encrypt(encoded_data, random_key);

        return encrypted_data;
    }
    exports.encrypt_variable = encrypt_variable;

    function custom_decrypt(msg_string) {

        var payload = msg_string.split(".");
        var key = payload[0];
        var decrypted_data = payload[1];
        var decrypted = EasyChatCryptoJS.AES.decrypt(decrypted_data, EasyChatCryptoJS.enc.Utf8.parse(key), { iv: EasyChatCryptoJS.enc.Base64.parse(payload[2]) });
        return decrypted.toString(EasyChatCryptoJS.enc.Utf8);
    }
    exports.custom_decrypt = custom_decrypt;

    function changeMiddleContainer() {
        var sticky_intent_height = 0;
        try {
            sticky_intent_height = document.getElementById("easychat-sticky").offsetHeight;
        } catch (err) {
            sticky_intent_height = 0;
        }

        if (sticky_intent_height == null || sticky_intent_height == undefined) {
            sticky_intent_height = 0;
        }

        document.getElementById("easychat-chat-container").style.height = String(window.innerHeight - (document.getElementById("easychat-navbar").offsetHeight + document.getElementById("easychat-footer").offsetHeight + sticky_intent_height)) + "px";
        
    }
    exports.changeMiddleContainer = changeMiddleContainer;

    function append_bot_text_response(text_response, default_time) {
        if (typeof default_time === 'undefined') {
            default_time = return_time()
        }
        text_response = easychat_linkify(text_response);
        text_response = text_response.replace(new RegExp('\r?\n', 'g'), '<br>');
        text_response = text_response.replace(new RegExp('\r?<table', 'g'), '<table class="easychat-bot-table" style="width:100%"');

        is_livechat = is_livechat_enabled()
        window.clearTimeout(bot_inactivity_timer);
        is_bot_inactivity_msg_present = false
        is_bot_response_message_showed = true
        var time = default_time;
        hide_bot_typing_loader();



        if (EASYCHAT_BOT_THEME == "theme_1") {
            if (text_response.match("http://") != null || text_response.match("https://") != null) {
                var html = '<div class="easychat-bot-message-div" ><div class = "easychat-bot-message-wrapper"><div id="easychat-bot-message-' + bot_message_index + '" class="easychat-message-animation easychat-bot-message easychat-bot-message-line" style="color:' + BOT_MESSAGE_COLOR + '; word-break: break-word;" ><div class="easychat-show-less-text">' + text_response + '</div>'
            } else {
                var html = '<div class="easychat-bot-message-div" ><div class = "easychat-bot-message-wrapper"><div id="easychat-bot-message-' + bot_message_index + '" class="easychat-message-animation easychat-bot-message easychat-bot-message-line" style="color:' + BOT_MESSAGE_COLOR + '; word-break: break-word;" ><div class="easychat-show-less-text">' + text_response + '</div>'
            }

            html += '<div class=view_more_wrapper style="margin-right:5px;display:none "><div style="float:right;cursor: pointer; color:' + BOT_THEME_COLOR + '; padding-bottom:10px; margin-right: 23px;" onclick="viewMore(this)">' + READ_MORE + '</div></div>';
            if (is_livechat) {
                html += '</div><div class="message-time-bot" style="margin-top: -5px;">' + time + '</div></div>'
            }
            html+='</div>'
            bot_message_index += 1;

            setTimeout(function () {
                const elem = document.getElementById('easychat-bot-message-' + (bot_message_index - 1));
                $(elem).removeClass('easychat-message-animation')
            }, 300)
        } else if (EASYCHAT_BOT_THEME == "theme_2") {

            if (text_response.match("http://") != null || text_response.match("https://") != null) {
                var html = '<div class="easychat-bot-message-div" ><div class = "easychat-bot-message-wrapper"><div id="easychat-bot-message-' + bot_message_index + '" class="easychat-message-animation easychat-bot-message easychat-bot-message-line" style="color:' + BOT_MESSAGE_COLOR + '; word-break: break-word;" ><div class="easychat-show-less-text">' + text_response + '</div>'
            } else {
                var html = '<div class="easychat-bot-message-div" ><div class = "easychat-bot-message-wrapper"><div id="easychat-bot-message-' + bot_message_index + '" class="easychat-message-animation easychat-bot-message easychat-bot-message-line" style="color:' + BOT_MESSAGE_COLOR + '; word-break: break-word;" ><div class="easychat-show-less-text">' + text_response + '</div>'
            }

            html += '<div class=view_more_wrapper style="display:none "><div style="float:right;cursor: pointer; color:' + BOT_THEME_COLOR + '; " onclick="viewMore(this)">' + READ_MORE + '</div></div>';

            if (is_livechat) {
                html += '</div><div class="message-time-bot" style=" margin-top: -5px;">' + time + '</div></div>'

            }
            html += '</div>'
            bot_message_index += 1;

            setTimeout(function () {
                const elem = document.getElementById('easychat-bot-message-' + (bot_message_index - 1));
                $(elem).removeClass('easychat-message-animation')
            }, 300)
        } else {

            if (text_response.match("http://") != null || text_response.match("https://") != null) {
                var html = '<div class="easychat-bot-message-div" ><div id="easychat-bot-message-' + bot_message_index + '" class="easychat-bot-message easychat-bot-message-line" style="color:' + BOT_MESSAGE_COLOR + '; word-break: break-word;" ><div class="easychat-show-less-text">' + text_response + '</div>'
            } else {
                var html = '<div class="easychat-bot-message-div" ><div id="easychat-bot-message-' + bot_message_index + '" class="easychat-bot-message easychat-bot-message-line" style="color:' + BOT_MESSAGE_COLOR + '; word-break: break-word;" ><div class="easychat-show-less-text">' + text_response + '</div>'
            }
            html += '<div class="view_more_wrapper" style="margin-right:5px;display:none "><div style="float:right;cursor: pointer;" onclick="viewMore(this)">' + VIEW_MORE + '<i class="fa fa-chevron-down" style="color:' + BOT_THEME_COLOR + ';margin-left:5px"></i></div></div>';

            if (is_livechat) {
                html += '</div><span class="message-time-bot" style="display:inline-block !important;">' + time + '</span></div>'
            } else {
                html += '<span class="message-time-bot">' + time + '</span></div></div>'
            }

            bot_message_index += 1;
        }

        document.getElementById("easychat-chat-container").innerHTML += html;

        if (is_livechat) {

            const elem = document.getElementById('easychat-bot-message-' + (bot_message_index - 1));
            //message_time_position(elem)

        }
        // checks the total height of every bot response
        // adds it
        // then checks whether it's greater than container height
        // then scrolls to bottom

        element_response = document.querySelectorAll(".easychat-bot-message-div")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight

        resize_chabot_window();

        setTimeout(function (e) { reset_size_of_text_field(1); }, 100);
        if (bot_inactivity_detection_enabled && bot_inactivity_detection_required) {
            reset_bot_inactivity_timer()
        }
        if (bot_response_delay_allowed && is_livechat_msg == false) {
            reset_bot_response_delay_timer();
        }
        set_target_blank();
    }
    exports.append_bot_text_response = append_bot_text_response;

    function text_to_speech(message_to_be_spoken) {
        if (is_mute()) return;

        if(cancel_text_to_speech_response) {
            cancel_text_to_speech();
        }
        else {
            cancel_text_to_speech_response = true
        }
        message_to_be_spoken = message_to_be_spoken.replace(/<[^>]*>?/gm, '');
        speech_synthesis_utterance_instance = new SpeechSynthesisUtterance(message_to_be_spoken);
        speech_synthesis_utterance_instance.lang = selected_language;
        speech_synthesis_utterance_instance.rate = 0.95;
        speech_synthesis_utterance_instance.pitch = 1;
        speech_synthesis_utterance_instance.volume = 1;
        voices = speech_synthesis_instance.getVoices();
        speech_synthesis_instance.speak(speech_synthesis_utterance_instance);

    }
    exports.text_to_speech = text_to_speech;

    function hide_bot_typing_loader() {

        var element = document.getElementById("div-bottyping-loader")
        if (element != null || element != undefined) {
            document.getElementById("div-bottyping-loader").remove();
        }
    }
    exports.hide_bot_typing_loader = hide_bot_typing_loader;

    function maximize_chatbot(count) {
        if (!count) {
            count = count_of_unread_message;
        }

        if (is_bot_minimized == true) {

            if (is_audio_notification_enabled) {
                play_notification_sound(STATIC_MP3_PATH+'/swiftly.mp3');
            }
            
            parent.postMessage({
                event_id: 'agent_unread_message',
                data: {
                    'message_count': count,
                }
            }, "*");
        } else {
            count_of_unread_message = 0;
        }

        setTimeout(function () {
            scroll_to_bottom();
        }, 500)
    }
    exports.maximize_chatbot = maximize_chatbot;

    function validate_phone_number(phone) {
        
        phone = phone.trim();
        var is_number = /^\d+$/.test(phone);
        var regex = /[6-9][0-9]{9}/;
        if (phone != "" && regex.test(phone) && phone.length == 10 && is_number) {
            return true;
        }
    
        return false;
    }

    function validate_name(name) {
    var regex = /^[a-zA-Z ]{2,30}$/;
    var name_list = name.trim().split(" ");
    for (var i = 0; i < name_list.length; i++) {
        if (name_list[i] == "" || !regex.test(name_list[i])) return false;
    }

    return true;
    }

    exports.validate_phone_number = validate_phone_number; 
    
    function validate_email(email) {
       var email = email.trim();
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email != "" && regex.test(email)) {
            return true;
        }
    
        return false;
    }
    exports.validate_email = validate_email;    

})(window)

if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

// Create Element.remove() function if not exist
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

/////////////////////////////// Encryption And Decription //////////////////////////

function custom_encrypt(msgString, key) {
    // msgString is expected to be Utf8 encoded
    var iv = EasyChatCryptoJS.lib.WordArray.random(16);
    var encrypted = EasyChatCryptoJS.AES.encrypt(msgString, EasyChatCryptoJS.enc.Utf8.parse(key), {
        iv: iv
    });
    var return_value = key;
    return_value += "." + encrypted.toString();
    return_value += "." + EasyChatCryptoJS.enc.Base64.stringify(iv);

    return return_value;
}

function generate_random_string(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

////////////////////////////////////////////////////////////////////////////////////

function un_entity(str) {
    return $("<textarea></textarea>").html(str).text();
}

function clear_modal_fields() {
    try {
        document.getElementById("new-issue-name").value = "";
        document.getElementById("new-issue-phone").value = "";
        document.getElementById("new-issue-issue").value = "";
        document.getElementById("create-issue-error-message").innerHTML = "";

        document.getElementById("new-meeting-name").value = "";
        document.getElementById("new-meeting-phone").value = "";
        document.getElementById("new-meeting-date").value = "";
        document.getElementById("new-meeting-time").value = "";
        document.getElementById("new-meeting-pincode").value = "";
        document.getElementById("new-meeting-issue").value = "";
        document.getElementById("schedule-error-message").innerHTML = "";

        document.getElementById("check-ticket-id").value = "";
        document.getElementById("ticket-status-error-message").innerHTML = "";

        document.getElementById("check-meeting-id").value = "";
        document.getElementById("meeting-status-error-message").innerHTML = "";
    } catch (err) { }
    enable_user_input();
}


function show_scroll_image() {
    var scrollHeight = document.getElementById("easychat-chat-container").scrollHeight;
    var scrollTop = document.getElementById("easychat-chat-container").scrollTop;
    var clientHeight = document.getElementById("easychat-chat-container").clientHeight;

    if (scrollHeight - (scrollTop + clientHeight) > 100) {
        document.getElementById("img-scroll-to-bottom").style.display = "block";
    } else {
        document.getElementById("img-scroll-to-bottom").style.display = "none";
    }
}

function get_url_vars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function set_cookie(cookiename, cookievalue) {
    document.cookie = cookiename + "=" + cookievalue;
}

function get_cookie(cookiename) {
    var cookie_name = cookiename + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookie_array = decodedCookie.split(';');
    for (var i = 0; i < cookie_array.length; i++) {
        var c = cookie_array[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookie_name) == 0) {
            return c.substring(cookie_name.length, c.length);
        }
    }
    return "";
}

// send_form_assist_recommendation() if "do not distrub" is true
function send_form_assist_recommendation(bot_id, bot_name, form_assist_id) {
    append_bot_text_response("It looks like you are stuck here. Do you need any assistance");
    recommendations_list = ["Need Form Assistance", "Chat with the Bot"]
    append_bot_recommendation(recommendations_list)
}

//show_form_assist_result()
function show_form_assist_result() {
    url_parameters = get_url_vars();
    bot_id = url_parameters["id"];
    bot_name = 'uat';
    form_assist_id = url_parameters["form_assist_id"];
    // session_id = get_cookie("easychat_session_id");
    //set_cookie("isFeedbackDone", "0");

    parent.postMessage({ event_id: 'isFeedBackDone', data: "0" }, "*")
    window_location = decodeURIComponent(url_parameters["easychat_window_location"])
    if (window_location == undefined) {
        window_location = 'localhost'
    }

    setTimeout(function (e) {
        if (form_assist_id != null && form_assist_id != undefined && form_assist_id != "") {
            form_assist_enabled = true;
            form_assist_id = decodeURI(form_assist_id);
            var server_text = send_message_to_server(form_assist_id, user_id, bot_id, bot_name, "None");
            scroll_to_bottom();
        } else {
            append_welcome_message(bot_id, bot_name);
            get_suggestion_list(bot_id, bot_name);
        }
    }, 1000);
}

// function start_chatbot(){


window.onmessage = function (e) {
    if (e.data.event_id == "isFeedBackDone") {
        isFeedBackDone = e.data.data
        if (!page_embed_in_iframe()) {
            set_cookie("isFeedBackDone", isFeedBackDone);
        }
    }
    if (e.data.event_id == "chatbot_minimized_state") {
        is_bot_minimized = e.data.data
    }
    if (e.data.event_id == "is_chatbot_opened") {
        document.getElementById('tooltiptext-minimize').style.display = "block";
        show_bot_language_animation(1000)
        count_of_unread_message = 0;
        is_bot_minimized = false
    }

    if (e.data.event_id == "livechat_cookie_session_user_id") {
        if (page_embed_in_iframe()) {
            livechat_session_id = e.data.livechat_cookie_session_id
        }
    }

    if (e.data.event_id == "chatbot_opened") {
        document.getElementById('tooltiptext-minimize').style.display = 'block';
        show_bot_language_animation(1000)
        count_of_unread_message = 0;
        is_bot_minimized = false

    }
    // here post msg
    if (e.data.event_id == "close-chatbot") {
        is_nps_required = "False"
        if (e.data.data) {
            is_nps_required = "True"
        }
        close_chatbot(is_nps_required);
    }

    if (e.data.event_id == "collect_from_local_storage") {
        get_messages_from_local()
        word_mapper_list = JSON.parse(window.localStorage['word_mapper_list'])
        autocorrect_bot_replace = JSON.parse(window.localStorage['autocorrect_bot_replace'])
    }

    resize_chabot_window();
};

function setting_up_livechat() {

    setTimeout(function () {
        if (livechat_session_id != "") {
            try {
                if (window.localStorage) {
                    var time_when_last_refresh_or_closing_of_tab_was_called = Number(window.localStorage['myUnloadEventFlag']);
                    if (isNaN(time_when_last_refresh_or_closing_of_tab_was_called)) {
                        time_when_last_refresh_or_closing_of_tab_was_called = 0
                    };
                    var current_time = new Date().getTime();
                    var duration = current_time - time_when_last_refresh_or_closing_of_tab_was_called;
                    // less than 5 minutes since the previous Unload event

                    if (duration < 5 * 60 * 1000) {
                        refresh_was_called = true;
                    } else {
                        refresh_was_called = false
                    }
                }
            } catch (err) {

                console.log(err)
            }

            if (refresh_was_called == true) {
                
                livechat_previous_message_history(livechat_session_id);
                show_end_chat_button();
                resize_chabot_window();
                append_attachment_icon();
            } else {

                unset_livechat_cookies();
            }
        }
    }, 1100);
}

window.onload = function (e) {


    if(client_location_city == null){

        initialize_client_location();
    }
    query_token_id = $('input[name="csrfquerytoken"]').val();
    changeMiddleContainer();
    url_parameters = get_url_vars();
    // to differentiate between refresh
    // and tab close
    var refresh_was_called = false;

    parent.postMessage({
        event_id: 'send_livechat_session_id',
    }, "*")

    // selected_language = window.localStorage['selected_language']
    get_language_templates_from_server(selected_language, url_parameters["id"]);
    
    if (is_internet_explorer && document.getElementById("easychat-mute-unmute-div")){
        document.getElementById("easychat-mute-unmute-div").remove();
    }

    setting_up_livechat()
    bot_id = url_parameters["id"];
    bot_name = 'uat';
    form_assist_id = url_parameters["form_assist_id"];
    do_not_disturb = url_parameters["do_not_disturb"];
    is_lead_generation = url_parameters["is_lead_generation"];
    embed_cookies = ""
    embed_meta_data = url_parameters["meta_data"]
    session_id = window.SESSION_ID;
    // window_location = window.top.location.href;
    window_location = decodeURIComponent(url_parameters["easychat_window_location"])

    is_web_landing_allowed = url_parameters["is_web_landing_allowed"]
    if (is_web_landing_allowed == null || is_web_landing_allowed == undefined){
        is_web_landing_allowed = "false";
    }
    easychat_intent_name = decodeURIComponent(url_parameters["easychat_intent_name"]);

    campaign_link_query_id = url_parameters["campaign_link_query_id"]

    is_initial_trigger_intent = url_parameters["is_initial_trigger_intent"]

    if (is_initial_trigger_intent == null || is_initial_trigger_intent == undefined){
        is_initial_trigger_intent = false;
    }

    if (campaign_link_query_id != 'INTENT_ID' && campaign_link_query_id != undefined && campaign_link_query_id != null && campaign_link_query_id != "") {
        
        is_campaign_link = true;
        setTimeout(function () {
            send_message_to_server(campaign_link_query_id, user_id, bot_id, bot_name, "None");
        }, 2000)

    } else {
        is_campaign_link = false
    }

    if (window_location == undefined) {
        window_location = 'localhost'
    }

    if (embed_cookies != "" && embed_cookies != null && embed_cookies != undefined) {
        embed_cookies_decrypted = custom_decrypt(embed_cookies)
        embed_cookies_decrypted = JSON.parse(embed_cookies_decrypted)
        if ("easychat_userid" in embed_cookies_decrypted) {
            if (embed_cookies_decrypted["easychat_userid"] != "") {
                user_id = embed_cookies_decrypted["easychat_userid"]
            }
        }
        if ("easychat_prev_session_id" in embed_cookies_decrypted) {

            easychat_prev_session_id = embed_cookies_decrypted["easychat_prev_session_id"]
        }
    }
    parent.postMessage({
        event_id: 'set_cookie',
        data: {
            cookie_value: session_id,
            cookie_name: "easychat_prev_session_id",
            expiration: "",
            path: "/"
        }
    }, "*")
    
    if (is_web_landing_allowed == 'true') {
        easychat_intent_name = easychat_intent_name.replace(/%20|_/g, ' ');
        web_landing_intent = true
        send_message_to_server(easychat_intent_name, user_id, bot_id, bot_name, "None");

    }

    if (is_lead_generation == "true") {
        // modal_lead_generation.style.display="block";
        append_welcome_message(bot_id, bot_name);
        setTimeout(function () {
            var server_text = send_message_to_server("Learn more about us", user_id, bot_id, bot_name, "None");
        }, 2000);
    } else if (is_lead_generation != 'true') {
        if (form_assist_id != null && form_assist_id != undefined && form_assist_id != "" && do_not_disturb != "true") {
            form_assist_enabled = true;
            form_assist_id = decodeURI(form_assist_id);
            var server_text = send_message_to_server(form_assist_id, user_id, bot_id, bot_name, "None");
            scroll_to_bottom();
        } else {
            append_welcome_message(bot_id, bot_name);
        }
        load_feedback_images();
        get_suggestion_list(bot_id, bot_name);
    }

function load_feedback_images() {
    document.getElementById('angry-emoji-div').src = EASYCHAT_IMG_PATH + 'angry-emoji.svg';
    document.getElementById('sad-emoji-div').src = EASYCHAT_IMG_PATH + 'sad-emoji.svg';
    document.getElementById('happy-emoji-div').src = EASYCHAT_IMG_PATH + 'happy-emoji.svg';
    document.getElementById('inlove-emoji-div').src = EASYCHAT_IMG_PATH + 'in-love-emoji.svg';
}

    if (get_url_vars()["easychat_window_location"] == undefined) {
        // $("#easychat-navbar-wrapper").find("i").css("visibility", "hidden");
        $("#easychat-navbar-wrapper").find("i:eq(0)").css("visibility", "hidden");
        $("#user_input").parent().css("width", "90%");
    }
    detectmob();
    resize_chabot_window();
    $('#botloader').hide();
    show_bot_language_animation(500);
    
}

function close_feedback_modal() {
    document.getElementById("feedback_modal").style.display = "none";
    document.getElementById("feedback_form_demoter").style.display = "none";
}
function restart_chatbot(el) {
    try {
        if (is_livechat == true && livechat_session_id != "") {
            is_abruptly_closed = true;
            unset_livechat_cookies();
            mark_chat_unavailable_or_abandoned(livechat_session_id, false);
            enable_user_input();
        }
    } catch (err) { }

    try {
        enable_user_input();
        is_livechat = false;
        enable_language_change_options();
        document.getElementById("easychat-mic-div").style.pointerEvents = "all";
        document.getElementById("easychat-mic-div").style.paddingRight = "10px";
        document.getElementById("easychat-img-div").style.display = "none";
    } catch (err) { }
    
    enable_sticky_div();
    display_sticky_div();
    enable_sticky_intents();
    document.getElementById("easychat-chat-container").style.overflow = "auto";
    el.style.pointerEvents = 'none';
    el.style.color = BOT_THEME_COLOR;
    clear_userData();
    bot_restarted = true
    var myNode = document.querySelectorAll("#easychat-chat-container div");
    for (i = 0; i < myNode.length; i++) {
        myNode[i].remove();
    }
    url_parameters = get_url_vars();
    bot_id = url_parameters["id"];
    bot_name = 'uat';
    // session_id = get_cookie("easychat_session_id");
    parent.postMessage({
        event_id: 'set_cookie',
        data: {
            cookie_value: "",
            cookie_name: "easychat_prev_session_id",
            expiration: "",
            path: "/"
        }
    }, "*")
    easychat_session_id = ""
    easychat_prev_session_id = ""
    // window_location = window.location.href;
    window_location = url_parameters["easychat_window_location"]
    if (window_location == undefined) {
        window_location = 'localhost'
    }
    change_is_flow_ended_variable = true
    cancel_text_to_speech_response = true
    document.getElementById("user_input").value = "";
    document.getElementById("easychat-footer").style.pointerEvents = "auto";

    document.getElementById("easychat-chat-container").innerHTML += '<div id="sound"></div>';

    if (is_web_landing_allowed == 'true') {
        easychat_intent_name = easychat_intent_name.replace(/%20|_/g, ' ');
        web_landing_intent = true
        send_message_to_server(easychat_intent_name, user_id, bot_id, bot_name, "None");
    }

    show_scroll_image();
    append_welcome_message(bot_id, bot_name);
    get_suggestion_list(bot_id, bot_name);
    setTimeout(function () {
        el.style.pointerEvents = 'auto';
        el.style.color = "#808080";
    }, 1000);
    is_flow_ended = true

}

function minimize_chatbot() {

    document.getElementById('tooltiptext-minimize').style.display = 'none';
    cancel_text_to_speech();
    document.getElementById('tooltiptext-minimize').style.display = "none";
    parent.postMessage({
        event_id: 'minimize-chatbot',
        data: {
            minimize_text: BOT_MINIMIZE_TEXT,
            maximize_text: BOT_MAXIMIZE_TEXT,
        }
    }, '*');

    if(parent.document.getElementById('allincall-minimize-popup-tooltip'))
        parent.document.getElementById('allincall-minimize-popup-tooltip').innerHTML = BOT_MINIMIZE_TEXT;
    if(parent.document.getElementById('allincall-maximize-popup-tooltip'))
        parent.document.getElementById('allincall-maximize-popup-tooltip').innerHTML = BOT_MAXIMIZE_TEXT;
}

function disable_bot_footer() {
    document.getElementById("easychat-footer").style.pointerEvents = "none";
}

function load_initial_feedback_settings() {
    if (document.getElementById("feedback_form_demoter").style.display == "block") {
        document.getElementById("feedback_form_demoter").style.display == "none"
    }
    else if (document.getElementById("feedback_modal").style.display = "none") {
        document.getElementById("feedback_modal").style.display = "block"
    }
    else {
        document.getElementById("feedback_modal").style.display = "none";
    }

    // document.getElementById("feedback_form_demoter").style.display = "block";
    document.getElementById("easychat-chat-container").style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    document.getElementById("easychat-chat-container").style.opacity = "0.5";
    document.getElementById("easychat-chat-container").style.pointerEvents = "none";
    document.getElementById("easychat-footer").style.opacity = "0.5";
    document.getElementById('angry-emoji-div').src = EASYCHAT_IMG_PATH + 'angry-emoji.svg';
    document.getElementById('sad-emoji-div').src = EASYCHAT_IMG_PATH + 'sad-emoji.svg';
    document.getElementById('happy-emoji-div').src = EASYCHAT_IMG_PATH + 'happy-emoji.svg';
    document.getElementById('inlove-emoji-div').src = EASYCHAT_IMG_PATH + 'in-love-emoji.svg';
    document.getElementById('angry-emoji-div').style.width = '52px';
    document.getElementById('angry-emoji-div').style.height = '52px';
    disable_sticky_div();
    disable_bot_footer();

}
function close_chatbot(is_nps_required) {
    try {
        document.getElementById('tooltiptext-close').style.display = "none";
        modal_create_issue.style.display = "none";
        modal_check_ticket_status.style.display = "none";
        modal_check_meeting_status.style.display = "none";
        modal_schedule_meeting.style.display = "none";
    } catch (err) {
        console.log(err)
    }
    cancel_text_to_speech();

    if (is_nps_required == "True" && user_id != "" && isFeedBackDone == "0" && is_conversaion_started) {
        load_initial_feedback_settings()
    } else {

        if (is_livechat) {
            if (!something_assigned_livechat) {
                is_abruptly_closed = true
            }
            close_livechat();
        } else {
            clear_userData();
            save_time_spent();
        }

        parent.postMessage({
            event_id: 'set_cookie',
            data: {
                cookie_value: "",
                cookie_name: "easychat_prev_session_id",
                expiration: "",
                path: "/"
            }
        }, "*")
        if (EASYCHAT_BOT_THEME != "theme_1") {
            parent.postMessage({
                event_id: 'auto_pop_up_denied',
                data: {
                    cookie_value: "true",
                    cookie_name: "auto_pop_up_denied",
                    expiration: "",
                    path: "/"
                }
            }, "*")
        }
        
        parent.postMessage('close-bot', '*');
    }
}

function save_time_spent() {
    var json_string = JSON.stringify({
        session_id: session_id,
        user_id: user_id,
    });

    json_string = encrypt_variable(json_string);
    json_string = encodeURIComponent(json_string);
    var params = 'json_string=' + json_string;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/chat/save-time-spent/", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Session Time saved!!!");

            if (!page_embed_in_iframe()) {
                window.close();
            }
        }
    }
    xhttp.send(params);
}

// ##############   FeedBack #######################


function no_feedback_given(e) {
    document.getElementById("feedback_modal").style.display = "none";
    if (something_assigned_livechat == false) {
        is_abruptly_closed = true
    }
    clear_userData();
    parent.postMessage({
        event_id: 'set_cookie',
        data: {
            cookie_value: "",
            cookie_name: "easychat_prev_session_id",
            expiration: "",
            path: "/"
        }
    }, "*")
    parent.postMessage('close-bot', '*');
    document.getElementById("feedback_modal").style.display = "none";
    document.getElementById("feedback_form_demoter").style.display = "none";
    document.getElementById("feedback_form_promoter").style.display = "none";
    document.getElementById("easychat-chat-container").style.backgroundColor = "unset";
    document.getElementById("easychat-chat-container").style.opacity = "1";
    document.getElementById("easychat-chat-container").style.pointerEvents = "auto";
    document.getElementById("easychat-footer").style.opacity = "1";
    enable_sticky_div();
    save_time_spent()
}

function submit_feedback() {
    document.getElementById("feedback_modal").style.display = "none";

    if (contentvalue <= 2 && csat_feedback_form_enabled == true) {
        document.getElementById("feedback_form_demoter").style.display = "block";
    } else {
        document.getElementById("feedback_form_promoter").style.display = "block";
    }
}

function save_demoter_form() {
    if (something_assigned_livechat == false) {
        is_abruptly_closed = true
    }
    var text_value = document.getElementById("demoter_feedback_text_area").value
    text_value = stripHTML(text_value);
    text_value = strip_unwanted_characters(text_value);
    save_feedback(contentvalue, text_value)
}

function save_promoter_form() {
    if (something_assigned_livechat == false) {
        is_abruptly_closed = true
    }
    var text_value = document.getElementById("promoter_feedback_text_area").value;
    text_value = stripHTML(text_value);
    text_value = strip_unwanted_characters(text_value);
    save_feedback(contentvalue, text_value)
}

function save_feedback(contentvalue, text_value) {
    var checkbox_csat_clicked_list = []
    var feedback_phone_number = ""
    var feedback_email_id = ""
    var call_save_feedback_api = true
    if (csat_feedback_form_enabled == true) {
        var checkbox_csat_clicked = document.querySelectorAll('.filled-in');
        var checkbox_csat_clicked_list = ""
        for (var i = 0; i < checkbox_csat_clicked.length; i++) {
            if (checkbox_csat_clicked[i].checked) {
                checkbox_csat_clicked_list += strip_unwanted_characters(document.getElementsByClassName('feedback_demoter_checkbox_value')[i].innerHTML) + ","
            }
        }
        if (mark_all_fields_csat_compulsory == true && contentvalue <= 2) {
            if (checkbox_csat_clicked_list.length == 0) {
                document.getElementById('complete_form_text').innerHTML = CSAT_ALL_FIELD_ERROR
                document.getElementById('complete_form_text').style.display = 'block';
                document.getElementById('complete_form_text').style.color = "red";
                call_save_feedback_api = false;
            } else {
                document.getElementById('complete_form_text').style.display = 'none';
            }

            if (collect_phone_number) {
                var phone_no = document.getElementById('feedback_phone_number').value;
                if (validate_phone_number(phone_no) == false) {
                    call_save_feedback_api = false;
                    if (document.getElementById('incorrect_phone_number_nps') == null) {
                        document.getElementsByClassName('contact-details-text')[0].innerHTML += "<p id='incorrect_phone_number_nps' style='color:red'>" + INVALID_MOBILE_NUMBER + "</p>"
                    }
                } else {
                    if (document.getElementById('incorrect_phone_number_nps') != null) {
                        document.getElementById('incorrect_phone_number_nps').style.display = "none";
                    }
                }
            }

            if (collect_email_id) {
                var email_id = document.getElementById('feedback_email_id').value;
                if (validate_email(email_id) == false) {
                    call_save_feedback_api = false;
                    if (document.getElementById('incorrect_email_id_nps') == null) {
                        document.getElementsByClassName('contact-details-text')[0].innerHTML += "<p id='incorrect_email_id_nps' style='color:red'>" + INVALID_EMAIL_ID + "</p>"
                    }
                } else {
                    if (document.getElementById('incorrect_email_id_nps') != null) {
                        document.getElementById('incorrect_email_id_nps').style.display = "none";
                    }
                }
            }
    
            if (text_value == true) {
                document.getElementById('complete_form_text').innerHTML = CSAT_ALL_FIELD_ERROR
                document.getElementById('complete_form_text').style.color = "red";
                call_save_feedback_api = false;
            }

        }
        if (collect_phone_number == true && call_save_feedback_api == true && contentvalue <= 2) {
            feedback_phone_number = document.getElementById('feedback_phone_number').value
        }
        if (collect_email_id == true && call_save_feedback_api == true && contentvalue <= 2) {
            feedback_email_id = document.getElementById('feedback_email_id').value
        }
        checkbox_csat_clicked_list = checkbox_csat_clicked_list

    }
    if (call_save_feedback_api == true) {
        var json_string = JSON.stringify({
            session_id: session_id,
            user_id: user_id,
            bot_id: bot_id,
            rating: contentvalue,
            comments: text_value,
            feedback_phone_number: feedback_phone_number,
            feedback_email_id: feedback_email_id,
            checkbox_csat_clicked_list: checkbox_csat_clicked_list.slice(0, -1),
        });
        // set_cookie("isFeedbackDone", "1")
        json_string = encrypt_variable(json_string);
        json_string = encodeURIComponent(json_string);

        var xhttp = new XMLHttpRequest();
        var params = 'json_string=' + json_string
        xhttp.open("POST", "/chat/save-feedback/", true);
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("Feedback saved!!!");
                parent.postMessage({
                    event_id: 'isFeedBackDone',
                    data: "1"
                }, "*")

                setTimeout(function () {
                    close_chatbot('False');
                }, 1000);
                document.getElementById("feedback_modal").style.display = "none";
                document.getElementById("feedback_form_demoter").style.display = "none";
                document.getElementById("feedback_form_promoter").style.display = "none";
                document.getElementById("easychat-chat-container").style.backgroundColor = "unset";
                document.getElementById("easychat-chat-container").style.opacity = "1";
                document.getElementById("easychat-chat-container").style.pointerEvents = "auto";
                document.getElementById("easychat-footer").style.opacity = "1";
                enable_sticky_div();
            }
        }
        xhttp.onerror = function () {
            close_chatbot('False');
        }
        xhttp.send(params);
    }
}

// ######################################################

function focus_user_input() {
     if (window.outerWidth < 450) {
        blur_user_input();
    } else {
        var field = document.getElementById("user_input");
    field.focus();
    }
}

function blur_user_input() {
    document.getElementById("user_input").blur();
}

function hide_mic_icon() {
    if (EASYCHAT_BOT_THEME != 'theme_1' || !mic_access) {
        try {

            document.getElementById("easychat-mic-div").style.display = "none";
        } catch (err) {
            console.log(err);
        }

        try {
            document.getElementById("easychat-mic-div-not-allowed").style.display = "flex";
        } catch (err) {
            console.log(err);
        }
    }
}

function show_mic() {
    if (EASYCHAT_BOT_THEME != 'theme_1' || mic_access) {
        document.getElementById("easychat-mic-div").style.display = "flex";

        try {
            document.getElementById("easychat-mic-div-not-allowed").style.display = "none";
        } catch (err) {
            console.log(err);
        }
    }
}

function activate_mic() {
    if (EASYCHAT_BOT_THEME == "theme_1") {
        document.getElementById('easychat-mic-div').style.display = 'flex';
        document.getElementById('easychat-mic-div-not-allowed').style.display = 'none';
        document.getElementById("img-mic-up").style.fill = BOT_THEME_COLOR;
        document.getElementById("img-mic-down").style.fill = BOT_THEME_COLOR;
    } else if (EASYCHAT_BOT_THEME == "theme_2") {
        document.getElementById("easychat-mic-div").style.color = BOT_THEME_COLOR;
        document.getElementById("easychat-mic-div").style.opacity = "0.5";
    }
    else {
        document.getElementById("img-mic").style.color = BOT_THEME_COLOR;
    }
    document.getElementById("user_input").placeholder = SPEAK_NOW;
    document.getElementById("easychat-query-submit-div").style.display = "none";
    document.getElementById("easychat-mic-disable").style.display = "inline-block";
    document.getElementById("easychat-mic-disable").style.marginLeft = "20px";
    disable_user_input();
    if (recognition != null) {
        recognition.start();
    } else {
        mic_access = false;
        hide_mic_icon();
    }
}

function deactivate_mic() {
    if (EASYCHAT_BOT_THEME == "theme_1") {
        try {
            document.getElementById("img-mic-up").style.fill = DEFAULT_ICON_COLOR;
            document.getElementById("img-mic-down").style.fill = DEFAULT_ICON_COLOR;
        } catch (err) {
            console.log(err);
        }
        document.getElementById("user_input").placeholder = EASYCHAT_INPUT_QUERY_THEME_1_PLACEHOLDER;
    } else if (EASYCHAT_BOT_THEME == "theme_2") {
        try {
            document.getElementById("easychat-mic-div").style.opacity = "1";
            document.getElementById("user_input").placeholder = EASYCHAT_INPUT_QUERY_THEME_2_PLACEHOLDER;
        } catch (err) {
            console.log(err)
        }
    } else {
        try {
            document.getElementById("img-mic").style.color = DEFAULT_ICON_COLOR;
            document.getElementById("user_input").placeholder = EASYCHAT_INPUT_QUERY_DEFAULT_PLACEHOLDER;
        } catch (err) {
            console.log(err);
        }
    }
    document.getElementById("easychat-query-submit-div").style.display = "flex";
    document.getElementById("easychat-mic-disable").style.display = "none";
    enable_user_input();
    if (recognition != null) {
        recognition.abort();

        document.getElementById('user_input').value = "";

    } else {
        mic_access = false;
        hide_mic_icon();
    }
}

function check_mic_access() {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    var user_input_disabled = false
    if (window.outerWidth < mobile_width) {
        user_input_disabled = document.getElementById('user_input').readOnly
    } else {
        user_input_disabled = document.getElementById('user_input').disabled
    }
   
    if (!user_input_disabled)
    {
        recognition.onstart = function () {
            recognizing = true;
        };

        recognition.onerror = function (event) {
            if (event.error == 'no-speech') {
                ignore_onend = true;
                console.log('mic error: no speech');
            }
            if (event.error == 'audio-capture') {
                ignore_onend = true;
                console.log('mic error: audio capture');
            }
            if (event.error == 'not-allowed') {
                ignore_onend = true;
                recognition = null;
                deactivate_mic();
                alert("Please allow microphone access for this webpage to use voicebot feature");
            }
        };

        recognition.onend = function () {
            recognizing = false;
            if (ignore_onend) {
                return;
            }
            if (!final_transcript) {
                return;
            }
        };

        recognition.onresult = function (event) {
            document.getElementById('user_input').value = event.results[0][0].transcript;
            send_typing_message_to_agent();
            if (event.results[0].isFinal) {
                user_input = document.getElementById('user_input').value;
                if (user_input.trim() != '' && user_input.length < 300) {
                    send_user_input(user_input);
                }
                recognition.stop();
                document.getElementById("user_input").value = "";
            }
        };

        if (recognition != null) {
            activate_mic();
        } else {
            mic_access = false;
            hide_mic_icon();
        }
    }
}

function activate_query_submit_button() {


    var elem = document.getElementById("img-submit-query");
    document.getElementById("img-submit-query").style.cursor = "pointer";
    document.getElementById("easychat-query-submit-div").style.pointerEvents = "auto";

    if (EASYCHAT_BOT_THEME == "theme_1" || EASYCHAT_BOT_THEME == "theme_2") {

        elem.style.opacity = '1';
    } else {

        elem.style.color = BOT_THEME_COLOR;
    }
}

function deactivate_query_submit_button() {
    var elem = document.getElementById("img-submit-query");
    document.getElementById("img-submit-query").style.cursor = "default";
    document.getElementById("easychat-query-submit-div").style.pointerEvents = "none";
    if (EASYCHAT_BOT_THEME == "theme_1" || EASYCHAT_BOT_THEME == "theme_2") {
        elem.style.opacity = '0.5';
    } else {

        elem.style.color = DEFAULT_ICON_COLOR;

    }
}

function return_time() {
    var d = new Date();
    var hours = d.getHours().toString();
    var minutes = d.getMinutes().toString();
    var flagg = "AM";
    if (parseInt(hours) == 12) {
        hours = 12;
        flagg = "PM";
    }
    if (parseInt(hours) > 12) {
        hours = hours - 12;
        flagg = "PM";
    }
    if (hours.length == 1) {
        hours = "0" + hours;
    }
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }

    var time = hours + ":" + minutes + " " + flagg;
    return time;
}

function viewMore(element) {
    element.parentNode.previousElementSibling.classList.add("easychat-expand-text");
    element.setAttribute("onclick", "showLess(this)")

    if (EASYCHAT_BOT_THEME == "theme_1" || EASYCHAT_BOT_THEME == "theme_2") {
        element.innerHTML = READ_LESS + '</div>'
    } else {
        element.innerHTML = SHOW_LESS + '<i class="fa fa-chevron-up" style="color:' + BOT_THEME_COLOR + ';margin-left:5px"></i></div>'
    }
}

function showLess(element) {
    element.parentNode.previousElementSibling.classList.remove("easychat-expand-text");
    element.setAttribute("onclick", "viewMore(this)")
    if (EASYCHAT_BOT_THEME == "theme_1" || EASYCHAT_BOT_THEME == "theme_2") {
        element.innerHTML = READ_MORE + '</div>'
    } else {
        element.innerHTML = VIEW_MORE + '<i class="fa fa-chevron-down" style="color:' + BOT_THEME_COLOR + ';margin-left:5px"></i></div>'
    }
}


function scroll_to_element() {
    objDiv = document.getElementById("easychat-chat-container")
    objDiv.scrollTop = objDiv.scrollTop + 10
}

function easychat_linkify(inputText) {
    //inputText.replace(/&nbsp;/g, '');
    var replacedText, replacePattern1, replacePattern2, replacePattern3, replacePattern4;

    var anchor_tag_pattern = /<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)<\/a>/gim;

    var is_matched = anchor_tag_pattern.test(inputText);

    replacedText = inputText;
    if (!is_matched) {
        //URLs starting with http://, https://, or ftp://
        replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=_|!:,.;]*[-A-Z0-9+&@#\/%=_|])/gim;
        replacedText = replacedText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

        //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
        replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
    }

    // Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    // Change mobile numbers to tel:: links.
    replacePattern4 = /([6-9][0-9]{9})/g;
    replacedText = replacedText.replace(replacePattern4, function (number) {
        return '<a href="tel:' + number + '">' + number + '</a>';
    });

    return replacedText;
}

function reset_size_of_text_field(no_of_elem) {
    var elements = document.getElementsByClassName('easychat-show-less-text');

    var len = elements.length;
    if (len > 0) {
        for (el_index = len - no_of_elem; el_index < len; ++el_index) {
            var el = elements[el_index];
            var el_style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
            var viewmore_height = parseInt(el_style.height)

            if (EASYCHAT_BOT_THEME == 'theme_1' || EASYCHAT_BOT_THEME == 'theme_2') {
                if (viewmore_height >= 290) {
                    el.nextSibling.style.display = 'block';
                }
            } else {
                if (viewmore_height > 295 + 20) {
                    el.style.maxHeight = '295px';
                    el.nextSibling.style.display = 'block';
                }
            }
        }
    }
}

function stripHTML(text) {
    return text.replace(/(<([^>]+)[><])/ig, ' ');
}

function strip_unwanted_characters(text) {
    var characters_to_remove = autocorrect_bot_replace

    for (var i = 0; i < characters_to_remove.length; i++) {
        try {
            text = text.replaceAll(characters_to_remove[i], ' ')
        } catch (err) {
            text = text.split(characters_to_remove[i]).join(' ');
        }

    }
    return text
}

function extract_emails (text)
{
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}
function extract_pan_nos(text){
    return text.match(/([a-zA-Z]{3}[pP][a-zA-Z][1-9][0-9]{3}[a-zA-Z])/gi);
}

function extract_ddmmyyyy(text){
    return text.match(/(\d{1,2}\/\d{1,2}\/\d{2,4})/gi);
} 
function extract_date_format_ddmmyyyy_two(text){
    return text.match(/(\d{1,2}-\d{1,2}-\d{2,4})/gi);
}  
function extract_date_format_ddmonthnameyyyy(text){
    return text.match(/([\d]{1,2} [ADFJMNOS]\w* [\d]{2,4})/gi);
}    
function extract_date_format_monthnameddyyyy(text){
    return text.match(/([ADFJMNOS]\w* [\d]{1,2} [\d]{2,4})/gi);
}    
function extract_mobile_pattern(text){
    return text.match(/(\b[0-9]{10,12}\b)/gi);
}
function extract_age_pattern(text){
    return text.match(/(\b[0-9]{1,3}\b)/gi);
}
function extract_id_pattern(text){
    return text.match(/(\b[A-Za-z0-9]*\d[A-Za-z0-9]*\b)/gi);
}

function mask_user_input(message) {
     
    final_string = message

    pan_list = extract_pan_nos(message)
    if(pan_list!=null){
        for(var i=0;i<pan_list.length ; i++){
            pan = pan_list[i]
            message = message.replace(pan,"X".repeat(pan.length))
        }
    }

    email_list = extract_emails(message)
    if(email_list!=null){
        for(var i=0;i<email_list.length ; i++){
            email = email_list[i]
            message = message.replace(email,"X".repeat(email.length))
        }
    }
     // Regex date format: dd/mm/yyyy
    ddmmyyyy_list = extract_ddmmyyyy(message)
    if(ddmmyyyy_list!=null){
        for(var i=0;i<ddmmyyyy_list.length ; i++){
            date = ddmmyyyy_list[i]
            message = message.replace(date,"X".repeat(date.length))
        }
    }
    // Regex date format: dd-mm-yy
    ddmmyyyy_list_two = extract_date_format_ddmmyyyy_two(message)
    if(ddmmyyyy_list_two!=null){
        for(var i=0;i<ddmmyyyy_list_two.length ; i++){
            date = ddmmyyyy_list_two[i]
            message = message.replace(date,"X".repeat(date.length))
        }
    }
    //  Regex date format: dd AUG YYYY
    ddmonthnameyyyy_list = extract_date_format_ddmonthnameyyyy(message)
    if(ddmonthnameyyyy_list!=null){
        for(var i=0;i<ddmonthnameyyyy_list.length ; i++){
            date = ddmonthnameyyyy_list[i]
            message = message.replace(date,"X".repeat(date.length))
        }
    }
    // Regex date format:  AUG dd YYYY
    monthnameddyyyy_list = extract_date_format_monthnameddyyyy(message)
    if(monthnameddyyyy_list!=null){
        for(var i=0;i<monthnameddyyyy_list.length ; i++){
            date = monthnameddyyyy_list[i]
            message = message.replace(date,"X".repeat(date.length))
        }
    }
    // mobile number, account number, aadhar number (10-12 digits number
    //      should have space before and after)
    mobile_pattern_list = extract_mobile_pattern(message)
    if(mobile_pattern_list!=null){
        for(var i=0;i<mobile_pattern_list.length ; i++){
            item = mobile_pattern_list[i]
            message = message.replace(item,"X".repeat(item.length))
        }
    }
    //  age and address (1-3 digits number
        //  should have space before and after)
    age_list = extract_age_pattern(message)
    if(age_list!=null){
        for(var i=0;i<age_list.length ; i++){
            age = age_list[i]
            message = message.replace(age,"X".repeat(age.length))
        }
    }
    // customer_id (any string that contains atleast 1 digit)
    id_list = extract_id_pattern(message)
    if(id_list!=null){
        for(var i=0;i<id_list.length ; i++){
            id = id_list[i]
            message = message.replace(id,"X".repeat(id.length))
        }
    }
    
    final_string = message
    return final_string
}
function close_preview_image(event){
    event.preventDefault();
    event.stopPropagation();
    if( event.target.tagName == "IMG" ){
        return;
    }
    document.getElementById("preview-big-image-modal").style.display = "none";
    
}
function preview_big_image(elem){
    image_src = elem.src
    document.getElementById("preview-big-image-modal").style.display = "block";
    document.getElementById("preview-big-image").src = image_src;
}
function get_image_html_based_on_file(file_name ,attached_file_path){
    return "<div class='easychat-user-message-image-container'><img onclick='preview_big_image(this)' src='" + attached_file_path+"'><a href='"+ attached_file_path +"' target='_blank'><div class='easychat-customer-attchment-file-name-div' style='color:gray;padding-left:10px;'>"+ file_name + "</div>"+  download_button_html +"</a></div>"
}
function get_vedio_preview_html(file_name ,attached_file_path,thumbnail_url){
    return '<div class="easychat-user-message-video-container" ><video style="width:100%;height: 100%;" controls><source src="' + attached_file_path +'" type="video/mp4"></video><a href="'+ attached_file_path +'" target="_blank"><div class="easychat-customer-attchment-file-name-div" style="color:gray;padding-left:10px;">'+ file_name + '</div>'+  download_button_html +'</a></div>'
}
function get_document_preview_html(file_name ,attached_file_path){
    return '<div class="easychat-user-message-doc-container"><a href="'+ attached_file_path +'" target="_blank"><img src="/static/LiveChatApp/img/document.png" style="width:60%;margin-left:35px;object-fit:contain;"></img><div class="easychat-customer-attchment-file-name-div" style="color:gray;padding-left:10px;">'+ file_name + '</div>'+  download_button_html +'</a></div>'
}

function append_user_attachment_preview(file_name,attached_file_path,thumbnail_url){
    let html = ""
    if(is_image(file_name)){
        html = get_image_html_based_on_file(file_name,attached_file_path)
    }
    else if(is_video(file_name)){
        html = get_vedio_preview_html(file_name ,attached_file_path,thumbnail_url)
    }else{
        html = get_document_preview_html(file_name ,attached_file_path)
    }

    document.getElementById("easychat-chat-container").innerHTML += '<div class="easychat-user-message-div">' + html + '</div>';
    
    setTimeout(function () {
        scroll_to_bottom();
    }, 300)
    
    
}
function append_user_input(user_input, default_time) {

    if (typeof default_time === 'undefined') {
        default_time = return_time()
    }
    user_input = easychat_linkify(user_input);
    var time = default_time;

    if (EASYCHAT_BOT_THEME == "theme_1") {
        if (is_livechat) {
            hide_bot_typing_loader();
            document.getElementById("easychat-chat-container").innerHTML += '<div class="easychat-user-message-div"><div id="easychat-user-message-' + user_message_index + '" class="easychat-message-animation easychat-user-message easychat-user-message-line" style="background-color:' + BOT_THEME_COLOR + ';color: ' + USER_MESSAGE_COLOR + '">' + user_input + '</div><span class="livechat-doubletick">' + time + '&nbsp;&nbsp;&nbsp;<img class="doubletick_livechat" src="' + EASYCHAT_IMG_PATH + 'doubletick_black.svg" style="height:1em;"></span></div>';
            return;
        }
        if(show_user_input)
            document.getElementById("easychat-chat-container").innerHTML += '<div class="easychat-user-message-div"><div id="easychat-user-message-' + user_message_index + '" class="easychat-message-animation easychat-user-message easychat-user-message-line" style="background-color:' + BOT_THEME_COLOR + ';color: ' + USER_MESSAGE_COLOR + '">' + user_input + '</div></div>';
        else 
            show_user_input = true
        user_message_index += 1;

        setTimeout(function () {
            const elem = document.getElementById('easychat-user-message-' + (user_message_index - 1));
            $(elem).removeClass('easychat-message-animation')
        }, 300)
    } else if (EASYCHAT_BOT_THEME == "theme_2") {

        if (is_livechat) {
            hide_bot_typing_loader();
            document.getElementById("easychat-chat-container").innerHTML += '<div class="easychat-user-message-div"><div id="easychat-user-message-' + user_message_index + '" class="easychat-message-animation easychat-user-message easychat-user-message-line" style="background-color:' + BOT_THEME_COLOR + ';color: ' + USER_MESSAGE_COLOR + '">' + user_input + '</div><span class="livechat-doubletick">' + time + '&nbsp;&nbsp;&nbsp;<img class="doubletick_livechat" src="' + EASYCHAT_IMG_PATH + 'doubletick_black.svg" style="height:1em;margin: 3px 0px -3px -2px;"></span></div>';
            return;
        }
        if(show_user_input)
            document.getElementById("easychat-chat-container").innerHTML += '<div class="easychat-user-message-div"><div id="easychat-user-message-' + user_message_index + '" class="easychat-message-animation easychat-user-message easychat-user-message-line" style="background-color:' + BOT_THEME_COLOR + ';color: ' + USER_MESSAGE_COLOR + '">' + user_input + '</div></div>';
        else 
            show_user_input = true
        user_message_index += 1;

        setTimeout(function () {
            const elem = document.getElementById('easychat-user-message-' + (user_message_index - 1));
            $(elem).removeClass('easychat-message-animation')
        }, 300)
    } else {
        if (is_livechat) {
            hide_bot_typing_loader();
            document.getElementById("easychat-chat-container").innerHTML += '<div class="easychat-user-message-div"><div class="easychat-user-message easychat-user-message-line" style="background-color:' + BOT_THEME_COLOR + ';color: ' + USER_MESSAGE_COLOR + '">' + user_input + '</div><span class="livechat-doubletick">' + time + '&nbsp;&nbsp;&nbsp;<img class="doubletick_livechat" src="' + EASYCHAT_IMG_PATH + 'doubletick_black.svg" style="height:1em;"></span></div>';
            return;
        }
        if(show_user_input)
            document.getElementById("easychat-chat-container").innerHTML += '<div class="easychat-user-message-div"><div class="easychat-user-message easychat-user-message-line" style="background-color:' + BOT_THEME_COLOR + ';color: ' + USER_MESSAGE_COLOR + '">' + user_input + '<span class="message-time-user">' + time + '&nbsp;&nbsp;<div style="display:inline-block;" ><img class="doubletick_easychat" src="' + EASYCHAT_IMG_PATH + 'doubletick_black.svg" style="height:1.5em;"></div></span></div></div>';
        else 
            show_user_input = true
    }

    if(!is_livechat) {
        disable_footer_except_home();
        disable_sticky_div();
    }

    // try {
    //     if_datepicker_not_closed_class = document.getElementsByClassName("datepicker")
    //     for (i = 0; i < if_datepicker_not_closed_class.length; i++) {
    //         if_datepicker_not_closed_class[i].remove()
    //     }
    // } catch (err) { }

    var calendar_divs = document.getElementsByClassName("easychat-calendar-div")
    var div_length = calendar_divs.length
    if(div_length > 0)
    {
        calendar_divs[div_length - 1].style.opacity = "0.9"
        calendar_divs[div_length-1].style.pointerEvents= "none"
    }
    element_response_previous_height = 0
}

function playSound(filename) {
    if (EASYCHAT_BOT_THEME != 'theme_1' || !is_bot_notification_sound_enabled) return;
    var mp3Source = '<source src="' + filename + '" type="audio/mpeg">';
    document.getElementById("sound").innerHTML = '<audio autoplay>' + mp3Source + '</audio>';
}

function play_notification_sound(filename) {
    var mp3Source = '<source src="' + filename + '" type="audio/mpeg">';
    document.getElementById("sound").innerHTML = '<audio autoplay>' + mp3Source + '</audio>';

    setTimeout(function() {
        document.getElementById("sound").innerHTML = '';
    }, 1000);
}

function empty_user_input() {
    if (document.getElementById("user_input") !== null || document.getElementById("user_input") !== undefined) {
        document.getElementById("user_input").value = "";
    }
}
function send_user_input(user_input, intent_id) {
    window.clearTimeout(bot_inactivity_timer);
    remove_banner();
    remove_feedback_div();
    user_input = stripHTML(user_input);
    user_input = strip_unwanted_characters(user_input);

    if (user_input.trim() == "") {
        return;
    }
    if (is_captcha == true) {
        verify_captcha(user_input);
        return;
    }

    var temp_user_input = user_input

    user_input = !is_livechat && mask_confidential_info == true ? mask_user_input(user_input) : user_input
    playSound(STATIC_MP3_PATH + '/juntos1.mov');
    append_user_input(user_input)
    user_input = temp_user_input
    livechat_trigger_message = user_input;
    
    if (!isNaN(intent_id)) user_input = intent_id;
    var server_text = send_message_to_server(user_input, user_id, bot_id, bot_name, "None");

    deactivate_mic()
    empty_user_input()
    setTimeout(function () {
        scroll_to_bottom();
    }, 200)

    is_bot_inactivity_msg_present = false

    if (EASYCHAT_BOT_THEME != 'theme_1') {
        is_doubletick = true;
    }
    is_conversaion_started = true;
}

function append_captcha(url) {
    captcha_element = document.getElementById("recaptcha-div");
    if (captcha_element != null || captcha_element != undefined) {
        captcha_element.remove();
    }
    captcha_html = '<div class="easychat-captcha-div" id="recaptcha-div" align="center">\
        <img src="/' + url + '" id="img-captcha">\
        </div>';
    document.getElementById("easychat-chat-container").innerHTML += captcha_html;
    scroll_to_bottom();
    scroll_to_bottom();
}


function create_captcha() {
    var xhttp = new XMLHttpRequest();
    var params = '';
    xhttp.open("POST", "/chat/get_captcha/", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            if (response["status"] == 200) {
                captcha_id = response["random"];
                append_captcha(response["url"]);
                scroll_to_bottom();
            }
        }
    }
    xhttp.send(params);
}

function get_quotes_suggestions(query_code) {
    if (custom_quote_list_flag != query_code) {
        var json_string = JSON.stringify({
            query_code: query_code
        });
        // json_string = encrypt_variable(json_string);
        // json_string = encodeURIComponent(json_string);

        var xhttp = new XMLHttpRequest();
        // var params = 'json_string='+json_string
        var params = 'query_code=' + query_code
        xhttp.open("POST", "/chat/get-quote-codes/", true);
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
                if (response["status"] == 200) {
                    code_list = response["code_list"];
                    custom_quote_list_flag = query_code
                    //custom_autocomplete(document.getElementById("user_input"), code_list)
                }
            }
        }
        xhttp.send(params);
    }
}

function verify_captcha(user_input) {
    var xhttp = new XMLHttpRequest();
    var params = 'random=' + captcha_id;
    xhttp.open("POST", "/chat/get_captcha_value/", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            if (response["status"] == 200) {
                // console.log(String(user_input), String(response['value']));
                if (String(user_input) == String(response['value'])) {
                    is_captcha = null;
                    send_message_to_server("correct", user_id, bot_id, bot_name, "None")
                } else {
                    create_captcha();
                    scroll_to_bottom();
                }
            }
        }
    }
    xhttp.send(params);
}

function append_recaptcha() {
    create_captcha();
}

function handle_input_type(modes, modes_param) {
    var input_maxlength = "5000000";
    var is_numeric = '';
    if ('is_numeric_input' in modes) {

        is_numeric = modes['is_numeric_input'];
    }

    if ('input_maxlength' in modes_param) {
        input_maxlength = modes_param['input_maxlength'];
    }

    if (is_numeric == "true") {
        document.getElementById("user_input").type = "number";
        hide_mic = true;
    } else {
        document.getElementById("user_input").type = "text";
    }

    document.getElementById("user_input").maxlength = input_maxlength;
}


function append_google_map_location() {
    map_element = document.getElementById("google-map");
    if (map_element != null || map_element != undefined) {
        map_element.remove();
    }

    location_html = '<div class="easychat-gmap-wrapper" id="google-map">\
        <div id="map" class="easychat-gmap-div"></div>\
    </div>';
    document.getElementById("easychat-chat-container").innerHTML += location_html;

    element_response = document.querySelectorAll(".easychat-gmap-wrapper")
    element_response_previous_height += element_response[element_response.length - 1].clientHeight


    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBAHTtk1lkVvIl1X_i7_1aIK9RCrhqGEpQ&libraries=places&callback=initMap";
    document.getElementById("google-map").appendChild(script);
    is_map_js_loaded = true;
}


function get_message_list(message, separator) {
    message_list = message.split(separator);
    return message_list;
}

var speech_synthesis_utterance_instance = null;
var speech_synthesis_instance = window.speechSynthesis;
var voices = null;

function cancel_text_to_speech() {
    if (speech_synthesis_instance != null) {
        speech_synthesis_instance.cancel();
    }
}

function detectmob() {
    if (window.outerWidth < 450) {
        blur_user_input();
    } else {
        enable_user_input();
        focus_user_input();
    }
}

function append_prev_session_response(response) {
    var server_reply = response.response.text_response.text;
    if (is_doubletick) {
        easychat_doubletick_list = document.getElementsByClassName("doubletick_easychat");
        easychat_doubletick_list[easychat_doubletick_list.length - 1].src = EASYCHAT_IMG_PATH + 'doubletick_blue.svg';
    }
    var recommendations = response.response.recommendations;
    var choices = response.response.choices;
    var cards = response.response.cards;
    var videos = response.response.videos;
    var images = response.response.images;
    var tables = response.response.tables;

    var easy_search_results = response.response.easy_search_results;

    var google_search_results = response.response.google_search_results;
    var modes = response.response.text_response.modes;
    var modes_param = response.response.text_response.modes_param;
    if ("is_recommendation_menu" in modes && modes["is_recommendation_menu"] == "true") {
        set_cookie("is_recommendation_menu", "true")
    } else {
        set_cookie("is_recommendation_menu", "false")
    }
    is_tms_intent = false
    if (("raise_service_request" in modes && modes["raise_service_request"] == "true") || ("schedule_meeting" in modes && modes["schedule_meeting"] == "true") || ("check_meeting_status" in modes && modes["check_meeting_status"] == "true") || ("check_ticket_status" in modes && modes["check_ticket_status"] == "true")) {
        is_tms_intent = true
    }

    if (is_tms_intent == false) {
        message_list = get_message_list(server_reply, RESPONSE_SENTENCE_SEPARATOR);
        for (var i = 0; i < message_list.length; i++) {
            append_bot_text_response(message_list[i]);
        }
        reset_size_of_text_field(message_list.length);
    }
    if (cards.length > 0) {
        append_bot_slider_cards(cards);
    }

    if (easy_search_results != null && easy_search_results != undefined && easy_search_results.length > 0) {

        append_bot_slider_cards(easy_search_results);
    }
    if (google_search_results != null && google_search_results != undefined && google_search_results.length > 0) {

        append_google_search_result(google_search_results);
    }
    if (tables != undefined && tables != null && tables.length > 0) {
        append_bot_tables(tables);
    }

    if (images.length > 0) {
        append_bot_slider_images(images);
    }

    if (videos.length > 0) {
        append_bot_slider_videos(videos);
    }

    if (choices.length > 0) {
        append_bot_choices(choices);
    }

    if (recommendations.length > 0) {
        append_bot_recommendation(recommendations);
    }
    enable_user_input();
    setTimeout(function (e) {
        scroll_to_bottom();
    }, 500);
}
function disable_previous_attahments(){
    try{
 var attachment_selector = document.querySelectorAll(".easychat-dragdropContainer__XPS")
        attachment_selector = attachment_selector[attachment_selector.length -1 ]
        attachment_selector.style.pointerEvents = "none"
        attachment_selector.style.opacity = "0.5"
        attachment_selector.style.background = "#CCC"
    }catch(err){

    }

}

function append_bot_response(response) {
    disable_previous_attahments()
    hide_mic = false;
    var server_reply = response.response.text_response.text;
    var speech_response = response.response.speech_response.text;
    var is_text_to_speech_required = response.response.is_text_to_speech_required;
    if (is_internet_explorer){
        is_text_to_speech_required = false;
    }
    is_go_back_enabled = response.response.is_go_back_enabled;
    var is_custom_order_selected = response.response.is_custom_order_selected
    var order_of_response = response.response.order_of_response;
    var is_widgets = false;
    disable_user_input();

    if (is_doubletick) {

        easychat_doubletick_list = document.getElementsByClassName("doubletick_easychat");
        if (easychat_doubletick_list.length >= 1) {

            easychat_doubletick_list[easychat_doubletick_list.length - 1].src = EASYCHAT_IMG_PATH + 'doubletick_blue.svg';

        }
    }

    var recommendations = response.response.recommendations;
    var choices = response.response.choices;
    var cards = response.response.cards;
    var videos = response.response.videos;
    var images = response.response.images;
    var tables = response.response.tables;

    var easy_search_results = response.response.easy_search_results;

    var google_search_results = response.response.google_search_results;

    if (change_is_flow_ended_variable == true) {
        is_flow_ended = response.response.is_flow_ended;
    }



    if (is_flow_ended) {
        autocomplete(document.getElementById("user_input"), suggestion_list, []);
        bot_inactivity_detection_required = bot_inactivity_detection_enabled;
    } else {
        disable_bot_inactivity_detection();
    }

    var modes = response.response.text_response.modes;
    var modes_param = response.response.text_response.modes_param;

    if ("is_livechat" in modes && modes["is_livechat"] == "true") {
        if (window.hasOwnProperty("WebSocket") == false) {
            return;
        }
    }

    if ("mask_next_input" in modes && modes["mask_next_input"] == "true") {

        mask_next_input = true
    }

    if ("enable_screenshare" in modes && modes["enable_screenshare"] == "true") {
        show_connect_with_agent_modal();
        return;
    }

    is_quote_response = false;
    if ("is_quote_response" in modes && modes["is_quote_response"] == "true") {
        is_quote_response = true
    }

    is_tms_intent = false
    if (("raise_service_request" in modes && modes["raise_service_request"] == "true") || ("schedule_meeting" in modes && modes["schedule_meeting"] == "true") || ("check_meeting_status" in modes && modes["check_meeting_status"] == "true") || ("check_ticket_status" in modes && modes["check_ticket_status"] == "true")) {
        is_tms_intent = true
    }

    if ("form_assist_disable" in modes && modes["form_assist_disable"] == "true") {
        parent.postMessage('disable-form-assist', '*');
        return;
    }

    if ("check_ticket_status" in modes && modes["check_ticket_status"] == "true") {
        is_bot_response_message_showed = true;
        html = '<center><button onclick="check_ticket_status(this)" style="padding: 0.4em 1em 0.4em 1em;border-radius: 0.5em;background-color:' + BOT_THEME_COLOR + ';color:white;font-size:15px;">Check Status</button></center>'
        document.getElementById("check_ticket_status_submit_button").innerHTML = html;
        modal_check_ticket_status.style.display = "block";
        disable_user_input();
        return;
    }

    if ("check_meeting_status" in modes && modes["check_meeting_status"] == "true") {
        is_bot_response_message_showed = true;
        html = '<center><button onclick="check_meeting_status(this)" style="padding: 0.4em 1em 0.4em 1em;border-radius: 0.5em;background-color:' + BOT_THEME_COLOR + ';color:white;font-size:15px;">Check Status</button></center>'
        document.getElementById("check_meeting_status_submit_button").innerHTML = html;
        modal_check_meeting_status.style.display = "block";
        disable_user_input();
        return;
    }

    if ("raise_service_request" in modes && modes["raise_service_request"] == "true") {
        is_bot_response_message_showed = true;
        html = '<center><button onclick="create_issue(this)" style="padding: 0.4em 1em 0.4em 1em;border-radius: 0.5em;background-color:' + BOT_THEME_COLOR + ';color:white;font-size:15px;">Submit</button></center>'
        document.getElementById("create_issue_submit_button").innerHTML = html;
        modal_create_issue.style.display = "block";
        disable_user_input();
        return;
    }

    if ("schedule_meeting" in modes && modes["schedule_meeting"] == "true") {
        is_bot_response_message_showed = true;
        html = '<center><button onclick="schedule_meeting(this)" style="padding: 0.4em 1em 0.4em 1em;border-radius: 0.5em;background-color:' + BOT_THEME_COLOR + ';color:white;font-size:15px;">Submit</button></center>'
        document.getElementById("schedule_meeting_submit_button").innerHTML = html;
        $(".easychat-modal-content").css('margin', '');
        $(".easychat-modal-content").css('height', '');
        modal_schedule_meeting.style.display = "block";
        disable_user_input();
        return;
    }

    if ("is_livechat" in modes && modes["is_livechat"] == "true") {
        if (window.hasOwnProperty("WebSocket") == true) {
            message_list = get_message_list(server_reply, RESPONSE_SENTENCE_SEPARATOR);
            for (var message_list_iterator = 0; message_list_iterator < message_list.length; message_list_iterator++) {
                append_bot_text_response(message_list[message_list_iterator]);
            }
            reset_size_of_text_field(message_list.length);
            if (false) {
                is_livechat = false;
                append_bot_text_response("Chat with an Expert is not supported on Internet Explorer. Please use Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari for a better experience. Sorry for the inconvenience.")
                scroll_to_bottom()
                enable_user_input();
                return;
            }
            is_livechat = true;
            disable_language_change_options();
            append_livechat_response(is_text_to_speech_required, speech_response);
            is_bot_response_message_showed = true;
        }
        return;
    }

    if (is_text_to_speech_required == true && speech_response != "") {
        text_to_speech(speech_response);
    }

    if ("is_typable" in modes) {
        if (modes["is_typable"] == "true") {
            // enable_user_input();
            // focus_user_input();
            handle_input_type(modes, modes_param);
            //focus_user_input();
        } else {
            disable_user_input();
        }
    }

    if (easy_search_results != null && easy_search_results != undefined && easy_search_results.length > 0) {

        append_bot_slider_cards(easy_search_results);
    }

    if (google_search_results != null && google_search_results != undefined && google_search_results.length > 0) {

        append_google_search_result(google_search_results);
    }

    if ("is_recaptcha" in modes && modes["is_recaptcha"] == "true") {
        append_recaptcha();
        is_captcha = true;
        hide_mic = true;
        handle_input_type(modes, modes_param);
    }

    if ("is_recommendation_menu" in modes && modes["is_recommendation_menu"] == "true") {
        set_cookie("is_recommendation_menu", "true");
    } else {
        set_cookie("is_recommendation_menu", "false")
    }

    if ("is_location_required" in modes && modes["is_location_required"] == "true") {
        append_google_map_location();
    }

    is_custom_complete = false
    if ("is_custom_complete" in modes && modes["is_custom_complete"] == "true") {
        start_custom_complete();
        is_custom_complete = true
    }

    try {
        if (!is_custom_order_selected || order_of_response.length == 0) {
            order_of_response = default_order_of_response

            if (order_of_response.length == 0) {
                order_of_response = ['Text', 'Image', 'Table', 'Video', 'Link Cards', 'Quick Recommendations', 'Drop Down', 'Date Picker', 'Checkbox', 'Radio Button', 'Range Slider', 'Form', 'Time Picker', 'Calender Picker', 'File Attach', 'Video Record'];
            }
        }
    } catch (err) {
        order_of_response = ['Text', 'Image', 'Table', 'Video', 'Link Cards', 'Quick Recommendations', 'Drop Down', 'Date Picker', 'Checkbox', 'Radio Button', 'Range Slider', 'Form', 'Time Picker', 'Calender Picker', 'File Attach', 'Video Record'];
    }


    for (let j = 0; j < order_of_response.length; ++j) {
        let element = order_of_response[j];
        if (initial_intent_in_welcome_message == false && web_landing_intent == false && is_initial_trigger_intent == false)
            is_bot_response_appended = true;
        if (element == "Text" && is_tms_intent == false) {
            message_list = get_message_list(server_reply, RESPONSE_SENTENCE_SEPARATOR);
            for (var i = 0; i < message_list.length; i++) {
                append_bot_text_response(message_list[i]);
            }

            reset_size_of_text_field(message_list.length);
        }

        if (element == "File Attach" && response.is_attachment_required == true) {
            is_widgets = true;
            disable_user_input();
            var choosen_file_type = response.choosen_file_type;
            choosen_file_type = choosen_file_type.replace(/"/g, '');
            choosen_file_ext = file_type_ext[choosen_file_type];
            if ("is_save_attachment_required" in modes && modes["is_save_attachment_required"] == "true") {
                is_save_attachment_required = true;
            } else {
                is_save_attachment_required = false;
            }
            append_attachment(choosen_file_ext, is_flow_ended);
            continue;
        }

        if (element == "Link Cards" && cards.length > 0) {
            append_bot_slider_cards(cards);
            continue;
        }

        if (element == "Date Picker" && "is_datepicker" in modes && modes["is_datepicker"] == "true") {
            is_widgets = true;
            disable_user_input();
            // DatePicker input format [{"placeholder":"From Date"}, {"placeholder":"To Date"}]

            append_datepicker(modes_param["datepicker_list"]);
            continue;
        }

        if (element == "Time Picker" && "is_timepicker" in modes && modes["is_timepicker"] == "true") {
            is_widgets = true;
            disable_user_input();
            // DatePicker input format [{"placeholder":"From Time"}, {"placeholder":"To Time"}]
            append_timepicker(modes_param["timepicker_list"])
            continue;
        }

        if (element == "Calender Picker" && "is_calender" in modes && modes["is_calender"] == "true") {
            is_widgets = true;
            disable_user_input();
            show_user_input = false
            append_calender_date_time(modes_param["datepicker_list"], modes_param["timepicker_list"])
            continue;
        }        

        if (element == "Range Slider" && "is_range_slider" in modes && modes["is_range_slider"] == "true") {
            is_widgets = true;
            disable_user_input();
            // Input Range Slider list format [{"placeholder":"Loan Amount", "min":50000, "max":640000}]
            if(modes_param["range_slider_list"][0]["range_type"] == "single-range-slider")
                append_single_bot_range_slider(modes_param["range_slider_list"]);
            else if(modes_param["range_slider_list"][0]["range_type"] == "multi-range-slider")
                append_multi_bot_range_slider(modes_param["range_slider_list"]);
            continue;
        }

        if (element == "Form" && "is_create_form_allowed" in modes && modes["is_create_form_allowed"] == "true") {
            is_widgets = true;
            disable_user_input();
            append_create_form_modal(modes_param["form_name"], modes_param["form_fields_list"]);
            continue;
        }

        if (element == "Radio Button" && "is_radio_button" in modes && modes["is_radio_button"] == "true") {
            is_widgets = true;
            disable_user_input();
            append_radio_buttons(modes_param["radio_button_choices"]);
            continue;
        }

        if (element == "Checkbox" && "is_check_box" in modes && modes["is_check_box"] == "true") {
            is_widgets = true;
            disable_user_input();
            append_checkbox(modes_param["check_box_choices"]);
            continue;
        }

        if (element == "Drop Down" && "is_drop_down" in modes && modes["is_drop_down"] == "true") {
            is_widgets = true;
            disable_user_input();
            append_dropdown(modes_param["drop_down_choices"]);
            continue;
        }

        if (element == "Video Record" && "is_video_recorder_allowed" in modes && modes["is_video_recorder_allowed"] == "true") {
            is_widgets = true;
            disable_user_input();
            if ("is_save_video_attachment" in modes && modes["is_save_video_attachment"] == "true") {
                is_save_attachment_required = true;
            } else {
                is_save_attachment_required = false;
            }
            append_video_recorder();
            continue;
        }

        if (element == "Table" && tables != undefined && tables != null && tables.length > 0) {
            append_bot_tables(tables);
            continue;
        }

        if (element == "Image" && images.length > 0) {
            append_bot_slider_images(images);
            continue;
        }

        if (element == "Video" && videos.length > 0) {
            append_bot_slider_videos(videos);
            continue;
        }

        if (element == "Quick Recommendations") {
            if (is_go_back_enabled) {
                recommendations.push(GO_BACK_TEXT)
                append_bot_recommendation(recommendations);
            } else if (recommendations.length > 0) {
                append_bot_recommendation(recommendations);
            }
        }
    }

    if (choices.length > 0) {
        append_bot_choices(choices);
    }
    
    if ("is_feedback_required" in response["response"]) {
        try{
        var is_feedback_required = response["response"]["is_feedback_required"]
        if (is_feedback_required) {
            var feedback_id = response["response"]["feedback_id"]
            append_feedback_btns(feedback_id)
        }
    }catch(err)
    {console.log(err)}
    }

    if ("auto_trigger_last_intent" in modes && modes["auto_trigger_last_intent"] == "true") {
        last_identified_intent = response.response.last_identified_intent_name
        send_message_to_server(last_identified_intent, user_id, bot_id, bot_name, "None");
        return;
    }

    //scroll_to_bottom();
    if (is_widgets == false) {
        deactivate_mic();
    }
    deactivate_query_submit_button();

    if (is_widgets) {
        disable_bot_inactivity_detection();
    } else {
        bot_inactivity_detection_required = bot_inactivity_detection_enabled;
    }

    if (recognition != null) {
        if (hide_mic == true) {
            hide_mic_icon();
        } else {
            show_mic();
        }
    } else {
        hide_mic_icon();
    }

    if (initial_intent_in_welcome_message == false && web_landing_intent == false && is_initial_trigger_intent.toString().trim() == "false") {
        objDiv = document.getElementById("easychat-chat-container")
        element_user_response_list = document.querySelectorAll(".easychat-user-message-div")
        element_user_response = element_user_response_list[element_user_response_list.length - 1]
        let prevValue = 0,
            currValue = 0;
        var interval_scroll = setInterval(function () {
            scroll_to_element();
            try {
                if(element_user_response == undefined){
                    clearInterval(interval_scroll);
                    scroll_to_bottom();
                    is_bot_response_appended = false;
                }
                if (currValue == 0) {
                    currValue = element_user_response.getBoundingClientRect().top
                } else {
                    prevValue = currValue;
                    currValue = element_user_response.getBoundingClientRect().top
                }
                if (EASYCHAT_BOT_THEME == "theme_1") {
                    if (element_user_response.getBoundingClientRect().top <= 90 || currValue - prevValue == 0) {
                        clearInterval(interval_scroll)
                        is_bot_response_appended = false;
                    }
                } else {
                    if (element_user_response.getBoundingClientRect().top <= 80 || currValue - prevValue == 0) {
                        clearInterval(interval_scroll)
                        is_bot_response_appended = false;
                    }
                }
            } catch (err) { }
        }, 10);
    }
    web_landing_intent = false

    is_bot_inactivity_msg_present = false
    is_initial_trigger_intent = false
    if (bot_inactivity_detection_enabled && bot_inactivity_detection_required) {
        reset_bot_inactivity_timer()
    }

    if (EASYCHAT_BOT_THEME == "theme_1") {
        playSound(STATIC_MP3_PATH + '/juntos3.mov');
    }

    is_bot_response_message_showed = true;
    if (bot_response_delay_allowed) {
        reset_bot_response_delay_timer();
    }
}

function start_custom_complete() {
    if (true) {
        custom_autocomplete(document.getElementById("user_input"), [])
    }
}

function append_bot_slider_videos(video_url_list) {
    if (video_url_list.length > 0) {
        slider_main_container = document.getElementById("easychat-slideshow-container-main-div");
        if (slider_main_container != undefined && slider_main_container != null) {
            slider_main_container.remove();
        }

        video_html = '<div class="easychat-slider-wrapper">\
        <div style="color:' + BOT_THEME_COLOR + '; width: 80%;margin: auto;"><div class="slideshow-container"  value=1 >';
        total_video = video_url_list.length;

        for (var i = 0; i < video_url_list.length; i++) {
            current_video_no = i + 1;
            if (i == 0) {
                video_html += '<div class="mySlides fade" >'
                if (video_url_list[i].indexOf("embed") != -1) {
                    video_html += '<div class="video-container">\
                      <iframe class="easychat-video-iframe" src="' + video_url_list[i] + '" frameborder="1" allowfullscreen></iframe>\
                    </div>';
                } else {
                    video_html += '<video width="325" height="200" style="border-radius: 1em;" controls>\
                      <source src="' + video_url_list[i] + '" type="video/mp4">\
                    </video>';
                }
            } else {
                video_html += '<div class="mySlides fade" style="display: none;">'
                if (video_url_list[i].indexOf("embed") != -1) {
                    video_html += '<div class="video-container">\
                      <iframe class="easychat-video-iframe" src="' + video_url_list[i] + '" frameborder="1" allowfullscreen></iframe>\
                    </div>';
                } else {
                    video_html += '<video width="325" height="200" style="border-radius: 1em;" controls>\
                      <source src="' + video_url_list[i] + '" type="video/mp4">\
                    </video>';
                }
            }
            if (video_url_list.length != 1) {
                video_html += '<div class="pageno-co">' + current_video_no + ' / ' + total_video + '</div></div>';
            } else {
                video_html += '</div>'
            }

        }
        if (video_url_list.length != 1) {
            if (EASYCHAT_BOT_THEME == "theme_2") {
                video_html += '<div style ="width: 30px;height: 30px;background-color: #fff;border-radius: 50%;left: -15px;top:55%;" class="prev-image-video" onclick="plusImageSlides(-1,this)"><a>&#10094;</a></div>\
            <div style ="width: 30px;height: 30px;background-color: #fff;border-radius: 50%;right: -15px;top: 55%;" class="next-image-video" onclick="plusImageSlides(1,this)" ><a>&#10095;</a></div>\
            </div><script>showSlides(1,this);</script><br><div style="text-align:center"></div>';
            } else {
                video_html += '<a class="prev-image-video" onclick="plusImageSlides(-1,this)">&#10094;</a>\
            <a class="next-image-video" onclick="plusImageSlides(1,this)">&#10095;</a>\
            </div><script>showSlides(1,this);</script><br><div style="text-align:center"></div>';
            }
        }
        video_html += '</div></div>';

        document.getElementById("easychat-chat-container").innerHTML += video_html;
        element_response = document.querySelectorAll(".easychat-slider-wrapper")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight
        resize_chabot_window();

    }
}

function append_bot_slider_images(image_url_list, compressed_img_url_list) {

    slider_main_container = document.getElementById("easychat-slideshow-container-main-div");
    if (slider_main_container != undefined && slider_main_container != null) {
        slider_main_container.remove();
    }
    image_slidershow_html = '<div class="easychat-slider-wrapper">\
    <div style="color:' + BOT_THEME_COLOR + '; width: 80%;margin: auto;"><div class="slideshow-container"  value=1 >';
    total_images = image_url_list.length;

    for (var i = 0; i < image_url_list.length; i++) {
        current_image_no = i + 1;
        if (i == 0) {
            image_slidershow_html += '<div class="mySlides fade" >'
        } else {
            image_slidershow_html += '<div class="mySlides fade" style="display: none;">'
        }
        if (image_url_list.length != 1) {   
          
            image_slidershow_html += '<div class="pageno-co">' + current_image_no + ' / ' + total_images + '</div>\
                    <img src="' + image_url_list[i] + '" class="easychat-image-el" onclick = "open_link_image(this)" style = "cursor:pointer;">\
                </div>';
        } else {
            try{
            var img = image_url_list[i];

            if (compressed_img_url_list && compressed_img_url_list[i]) img = compressed_img_url_list[i];

            image_slidershow_html += '<img src="' + img + '" class="easychat-image-el" onclick = "open_link_image(this,\'' + image_url_list[i] + '\')" style = "cursor:pointer;" ></div>';
            }catch(err){
                console.log(err)
            }
        }
    }
    if (image_url_list.length != 1) {
        if (EASYCHAT_BOT_THEME == "theme_2") {
            image_slidershow_html += '<div style ="width: 30px;height: 30px;background-color: #fff;border-radius: 50%;left: -15px;top:55%;" class="prev-image-video" onclick="plusImageSlides(-1,this)"><a>&#10094;</a></div>\
            <div style ="width: 30px;height: 30px;background-color: #fff;border-radius: 50%;right: -15px;top: 55%;" class="next-image-video" onclick="plusImageSlides(1,this)" ><a>&#10095;</a></div>\
            </div><script>showSlides(1,this);</script><br><div style="text-align:center"></div>';
        } else {
            image_slidershow_html += '<a class="prev-image-video" onclick="plusImageSlides(-1,this)">&#10094;</a>\
            <a class="next-image-video" onclick="plusImageSlides(1,this)">&#10095;</a>\
            </div><script>showSlides(1,this);</script><br><div style="text-align:center"></div>';
        }
        // image_slidershow_html += '<a class="prev-image-video" onclick="plusImageSlides(-1,this)">&#10094;</a>\
        // <a class="next-image-video" onclick="plusImageSlides(1,this)">&#10095;</a>\
        // </div><script>showSlides(1,this);</script><br><div style="text-align:center"></div>';
    }
    image_slidershow_html += '</div></div>';


    document.getElementById("easychat-chat-container").innerHTML += image_slidershow_html;

    element_response = document.querySelectorAll(".easychat-slider-wrapper")
    const el = element_response[element_response.length - 1]
    el_style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
    //element_response_previous_height += element_response[element_response.length-1].clientHeight
    element_response_previous_height += parseInt(el_style.height);

    resize_chabot_window();
}
function update_card_status(slide_show_container) {
    scroll_left = slide_show_container.scrollLeft;


    cards = slide_show_container.childNodes;
    var card_style = cards[0].currentStyle || window.getComputedStyle(cards[0]);
    margin_left = parseInt(card_style.marginLeft)
    margin_right = parseInt(card_style.marginRight)

    container_width = slide_show_container.offsetWidth;

    card_length = cards[0].offsetWidth + margin_left + margin_right;
    card_count = cards.length;

    right_button = slide_show_container.parentNode.childNodes[2]
    left_button = slide_show_container.parentNode.childNodes[0]

    if (scroll_left == 0) {

        left_button.style.display = "none";

    } else {
        left_button.style.display = "flex";
    }
    if ((scroll_left) == ((card_length) * card_count - container_width)) {

        right_button.style.display = "none";
    } else {
        right_button.style.display = "flex";
    }
    if (((card_length) * card_count - container_width) < 0) {
        right_button.style.display = "none";
    }
}
function card_move_forward(elem) {
    slide_show_container = elem.parentElement.childNodes[3];

    slide_show_container.scrollBy(200, 0);
    update_card_status(slide_show_container)
}
function card_move_backward(elem) {
    slide_show_container = elem.parentElement.childNodes[3];

    slide_show_container.scrollBy(-200, 0);
    update_card_status(slide_show_container)
}
function append_bot_slider_cards(cards) {
    if (EASYCHAT_BOT_THEME == "theme_2") {

        cards_html = '<div id ="easychat-card-slides-wrapper" style="color:' + BOT_THEME_COLOR + ';" class="easychat-slides-wrapper" ><div id="easychat-card-left-button-div" class="prev-image-video-card" onclick="card_move_backward(this)" style="width:30px;height:30px;background-color:#fff;border-radius:50%;"><a id="easychat-card-left-button"  >&#10094;</a></div>\
            <div id= "easychat-card-right-button-div" class="next-image-video-card" onclick="card_move_forward(this)"style="width:30px;height:30px;background-color:#fff;border-radius:50%;"><a id="easychat-card-right-button"  >&#10095;</a></div><div id="easychat-cards-slideshow-container" class="slideshow-container"  value=1 >';
        total_images = cards.length;

        for (var i = 0; i < cards.length; i++) {
            current_image_no = i + 1;
            if (i == 0) {
                // cards_html += '<div onclick="'
                // cards_html += "window.open('" + cards[i]["link"] + "');"
                cards_html += '<div '
                if (cards[i]["img_url"] != "" && cards[i]["img_url"] != undefined) {
                    cards_html += '  class="mySlides fade easychat-slider-card">'
                } else {
                    cards_html += '  class="mySlides fade easychat-slider-card" style = "box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);">'
                }
            } else {
                // cards_html += '<div onclick="'
                // cards_html += "window.open('" + cards[i]["link"] + "');"
                cards_html += '<div '
                if (cards[i]["img_url"] != "" && cards[i]["img_url"] != undefined) {
                    cards_html += '  class="mySlides fade easychat-slider-card" style="display: none;">';
                } else {
                    cards_html += '  class="mySlides fade easychat-slider-card" style="display: none; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);">';
                }
            }
            if (cards.length != 1) {
                // cards_html += '<div class="pageno-co">' + current_image_no + ' / ' + total_images + '</div>'

                if (cards[i]["img_url"] != "" && cards[i]["img_url"] != undefined) {
                    cards_html += '<img src="' + cards[i]["img_url"] + '"><div>'
                } else {
                    cards_html += '<div class = "card-background">\
                    <svg width="78" height="69" viewBox="0 0 78 69" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M72.9762 0H4.86508C3.57478 0 2.33733 0.512569 1.42495 1.42495C0.512569 2.33733 0 3.57478 0 4.86508V63.246C0 64.5363 0.512569 65.7738 1.42495 66.6862C2.33733 67.5985 3.57478 68.1111 4.86508 68.1111H72.9762C74.2665 68.1111 75.5039 67.5985 76.4163 66.6862C77.3287 65.7738 77.8413 64.5363 77.8413 63.246V4.86508C77.8413 3.57478 77.3287 2.33733 76.4163 1.42495C75.5039 0.512569 74.2665 0 72.9762 0V0ZM4.86508 63.246V4.86508H72.9762V63.246H4.86508Z" fill="black" fill-opacity="0.05"/>\
                    <path d="M16.8333 24.3255C18.2766 24.3255 19.6875 23.8975 20.8876 23.0956C22.0877 22.2937 23.023 21.154 23.5754 19.8205C24.1277 18.4871 24.2722 17.0198 23.9907 15.6042C23.7091 14.1886 23.0141 12.8882 21.9935 11.8677C20.9729 10.8471 19.6726 10.152 18.257 9.87045C16.8414 9.58887 15.3741 9.73339 14.0406 10.2857C12.7071 10.8381 11.5674 11.7734 10.7655 12.9735C9.96364 14.1736 9.53564 15.5845 9.53564 17.0278C9.53564 18.9633 10.3045 20.8195 11.6731 22.188C13.0416 23.5566 14.8978 24.3255 16.8333 24.3255V24.3255ZM16.8333 13.1358C17.6041 13.131 18.3589 13.3551 19.0022 13.7799C19.6454 14.2046 20.148 14.8107 20.4464 15.5215C20.7447 16.2322 20.8252 17.0155 20.6778 17.7721C20.5304 18.5287 20.1616 19.2245 19.6183 19.7712C19.075 20.318 18.3815 20.6911 17.6259 20.8432C16.8702 20.9954 16.0864 20.9198 15.3738 20.6259C14.6612 20.3321 14.0519 19.8332 13.6232 19.1927C13.1944 18.5521 12.9655 17.7987 12.9655 17.0278C12.9719 16.004 13.3814 15.024 14.1054 14.3C14.8294 13.576 15.8094 13.1665 16.8333 13.1601V13.1358Z" fill="black" fill-opacity="0.05"/>\
                    <path d="M50.5483 27.658L37.4126 40.7938L27.6824 31.0636C27.2266 30.6105 26.6101 30.3562 25.9675 30.3562C25.3248 30.3562 24.7083 30.6105 24.2525 31.0636L9.53564 45.9751V52.8592L26.0526 36.3422L34.0556 44.2236L24.9336 53.3457H31.6231L52.1781 32.7907L68.1112 48.6509V41.7911L53.9782 27.658C53.5224 27.205 52.9059 26.9507 52.2632 26.9507C51.6206 26.9507 51.004 27.205 50.5483 27.658Z" fill="black" fill-opacity="0.05"/>\
                    </svg>\
                    </div><div>'
                }
                cards_html += '<div class="tooltip" style="min-height:70px;max-height:70px;">'
                if (cards[i]["title"].length > 25) {
                    var cards_title = cards[i]["title"].slice(0, 25) + " ..."
                    cards_html += '<h5 style = "padding: 10px; margin: 0;padding-bottom: 5px;">' + cards_title + '</h5>'
                } else {
                    cards_html += '<h5 style = "padding: 10px; margin: 0;padding-bottom: 5px;">' + cards[i]["title"] + '</h5>'
                }
                if (cards[i]["content"].length > 0) {

                    if (cards[i]["content"].length > 51) {
                        cards_html += '<p class="tooltip" style = "padding: 10px; padding-top: 0; margin: 0;">' + (cards[i]["content"].slice(0, 48) + " . . . ") + '</p><span class="tooltiptext" id="tooltiptext-card-content">' + cards[i]["content"].slice(0, 48) + '...</span>'
                    } else {
                        cards_html += '<p style = "padding: 10px; padding-top: 0; margin: 0;" class="tooltip">' + cards[i]["content"] + '</p>'
                    }
                }
                cards_html += '</div><div style ="text-align: center;" ><h5 onclick='
                cards_html += "window.open('" + cards[i]["link"] + "');"
                cards_html += ' style = "padding: 10px; margin: 0;color: ' + BOT_THEME_COLOR + '; background-color: #fff;border-top: 1px solid #E4E4E4;">' + CARDS_TEXT + '</h5></div>'

                cards_html += '</div></div>';
            } else {


                if (cards[i]["img_url"] != "" && cards[i]["img_url"] != undefined) {
                    cards_html += '<img src="' + cards[i]["img_url"] + '"><div>'
                } else {
                    cards_html += '<div class = "card-background">\
                    <svg width="78" height="69" viewBox="0 0 78 69" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M72.9762 0H4.86508C3.57478 0 2.33733 0.512569 1.42495 1.42495C0.512569 2.33733 0 3.57478 0 4.86508V63.246C0 64.5363 0.512569 65.7738 1.42495 66.6862C2.33733 67.5985 3.57478 68.1111 4.86508 68.1111H72.9762C74.2665 68.1111 75.5039 67.5985 76.4163 66.6862C77.3287 65.7738 77.8413 64.5363 77.8413 63.246V4.86508C77.8413 3.57478 77.3287 2.33733 76.4163 1.42495C75.5039 0.512569 74.2665 0 72.9762 0V0ZM4.86508 63.246V4.86508H72.9762V63.246H4.86508Z" fill="black" fill-opacity="0.05"/>\
                    <path d="M16.8333 24.3255C18.2766 24.3255 19.6875 23.8975 20.8876 23.0956C22.0877 22.2937 23.023 21.154 23.5754 19.8205C24.1277 18.4871 24.2722 17.0198 23.9907 15.6042C23.7091 14.1886 23.0141 12.8882 21.9935 11.8677C20.9729 10.8471 19.6726 10.152 18.257 9.87045C16.8414 9.58887 15.3741 9.73339 14.0406 10.2857C12.7071 10.8381 11.5674 11.7734 10.7655 12.9735C9.96364 14.1736 9.53564 15.5845 9.53564 17.0278C9.53564 18.9633 10.3045 20.8195 11.6731 22.188C13.0416 23.5566 14.8978 24.3255 16.8333 24.3255V24.3255ZM16.8333 13.1358C17.6041 13.131 18.3589 13.3551 19.0022 13.7799C19.6454 14.2046 20.148 14.8107 20.4464 15.5215C20.7447 16.2322 20.8252 17.0155 20.6778 17.7721C20.5304 18.5287 20.1616 19.2245 19.6183 19.7712C19.075 20.318 18.3815 20.6911 17.6259 20.8432C16.8702 20.9954 16.0864 20.9198 15.3738 20.6259C14.6612 20.3321 14.0519 19.8332 13.6232 19.1927C13.1944 18.5521 12.9655 17.7987 12.9655 17.0278C12.9719 16.004 13.3814 15.024 14.1054 14.3C14.8294 13.576 15.8094 13.1665 16.8333 13.1601V13.1358Z" fill="black" fill-opacity="0.05"/>\
                    <path d="M50.5483 27.658L37.4126 40.7938L27.6824 31.0636C27.2266 30.6105 26.6101 30.3562 25.9675 30.3562C25.3248 30.3562 24.7083 30.6105 24.2525 31.0636L9.53564 45.9751V52.8592L26.0526 36.3422L34.0556 44.2236L24.9336 53.3457H31.6231L52.1781 32.7907L68.1112 48.6509V41.7911L53.9782 27.658C53.5224 27.205 52.9059 26.9507 52.2632 26.9507C51.6206 26.9507 51.004 27.205 50.5483 27.658Z" fill="black" fill-opacity="0.05"/>\
                    </svg>\
                    </div><div>'
                }

                cards_html += '<h5 style="overflow-wrap: break-word; padding: 10px; margin: 0;">' + cards[i]["title"] + '</h5>';

                if (cards[i]["content"].length > 0) {
                    cards_html += '<p style="overflow-wrap: break-word; padding: 10px; padding-top: 0; margin: 0;">' + cards[i]["content"] + '</p>';
                }
                cards_html += '<div style ="text-align: center;" ><h5 onclick='
                cards_html += "window.open('" + cards[i]["link"] + "');"
                cards_html += ' style = "padding: 10px; margin: 0;color: ' + BOT_THEME_COLOR + '; background-color: #fff;border-top: 1px solid #E4E4E4;">' + CARDS_TEXT + '</h5></div>'

            }
        }
        if (cards.length != 1) {

            cards_html += '</div><script>showSlides(1,this);</script><br><div style="text-align:center"></div>';
        }
        cards_html += '</div>';
        cards_html += '</div></div>'
    }
    else if (EASYCHAT_BOT_THEME == "theme_1") {
        var cards_html = '<div class="easychat-card-slider-wrapper"><div>'

        cards_html = '<div style="color:' + BOT_THEME_COLOR + ';" class="easychat-slides-wrapper" ><div class="slideshow-container"  value=1 ontouchmove="card_scroll_mobile(event)" ontouchstart="handle_first_mobile_touch(event)">';
        total_images = cards.length;

        for (var i = 0; i < cards.length; i++) {
            current_image_no = i + 1;
            if (i == 0) {
                cards_html += '<div onclick="'
                cards_html += "window.open('" + cards[i]["link"] + "');"

                if (cards[i]["img_url"] != "" && cards[i]["img_url"] != undefined) {
                    cards_html += '"  class="mySlides fade easychat-slider-card">'
                } else {
                    cards_html += '"  class="mySlides fade easychat-slider-card" style = "box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);">'
                }
            } else {
                cards_html += '<div onclick="'
                cards_html += "window.open('" + cards[i]["link"] + "');"

                if (cards[i]["img_url"] != "" && cards[i]["img_url"] != undefined) {
                    cards_html += '"  class="mySlides fade easychat-slider-card" style="display: none;">';
                } else {
                    cards_html += '"  class="mySlides fade easychat-slider-card" style="display: none; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);">';
                }
            }
            if (cards.length != 1) {
                cards_html += '<div class="pageno-co">' + current_image_no + ' / ' + total_images + '</div>'

                if (cards[i]["img_url"] != "" && cards[i]["img_url"] != undefined) {
                    cards_html += '<img src="' + cards[i]["img_url"] + '"><div>'
                } else {
                    cards_html += '<div class = "card-background">\
                    <svg width="78" height="69" viewBox="0 0 78 69" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M72.9762 0H4.86508C3.57478 0 2.33733 0.512569 1.42495 1.42495C0.512569 2.33733 0 3.57478 0 4.86508V63.246C0 64.5363 0.512569 65.7738 1.42495 66.6862C2.33733 67.5985 3.57478 68.1111 4.86508 68.1111H72.9762C74.2665 68.1111 75.5039 67.5985 76.4163 66.6862C77.3287 65.7738 77.8413 64.5363 77.8413 63.246V4.86508C77.8413 3.57478 77.3287 2.33733 76.4163 1.42495C75.5039 0.512569 74.2665 0 72.9762 0V0ZM4.86508 63.246V4.86508H72.9762V63.246H4.86508Z" fill="black" fill-opacity="0.05"/>\
                    <path d="M16.8333 24.3255C18.2766 24.3255 19.6875 23.8975 20.8876 23.0956C22.0877 22.2937 23.023 21.154 23.5754 19.8205C24.1277 18.4871 24.2722 17.0198 23.9907 15.6042C23.7091 14.1886 23.0141 12.8882 21.9935 11.8677C20.9729 10.8471 19.6726 10.152 18.257 9.87045C16.8414 9.58887 15.3741 9.73339 14.0406 10.2857C12.7071 10.8381 11.5674 11.7734 10.7655 12.9735C9.96364 14.1736 9.53564 15.5845 9.53564 17.0278C9.53564 18.9633 10.3045 20.8195 11.6731 22.188C13.0416 23.5566 14.8978 24.3255 16.8333 24.3255V24.3255ZM16.8333 13.1358C17.6041 13.131 18.3589 13.3551 19.0022 13.7799C19.6454 14.2046 20.148 14.8107 20.4464 15.5215C20.7447 16.2322 20.8252 17.0155 20.6778 17.7721C20.5304 18.5287 20.1616 19.2245 19.6183 19.7712C19.075 20.318 18.3815 20.6911 17.6259 20.8432C16.8702 20.9954 16.0864 20.9198 15.3738 20.6259C14.6612 20.3321 14.0519 19.8332 13.6232 19.1927C13.1944 18.5521 12.9655 17.7987 12.9655 17.0278C12.9719 16.004 13.3814 15.024 14.1054 14.3C14.8294 13.576 15.8094 13.1665 16.8333 13.1601V13.1358Z" fill="black" fill-opacity="0.05"/>\
                    <path d="M50.5483 27.658L37.4126 40.7938L27.6824 31.0636C27.2266 30.6105 26.6101 30.3562 25.9675 30.3562C25.3248 30.3562 24.7083 30.6105 24.2525 31.0636L9.53564 45.9751V52.8592L26.0526 36.3422L34.0556 44.2236L24.9336 53.3457H31.6231L52.1781 32.7907L68.1112 48.6509V41.7911L53.9782 27.658C53.5224 27.205 52.9059 26.9507 52.2632 26.9507C51.6206 26.9507 51.004 27.205 50.5483 27.658Z" fill="black" fill-opacity="0.05"/>\
                    </svg>\
                    </div><div>'
                }

                if (cards[i]["title"].length > 25) {
                    var cards_title = cards[i]["title"].slice(0, 25) + " ..."
                    cards_html += '<h5 style = "padding: 10px; margin: 0;">' + cards_title + '</h5>'
                } else {
                    cards_html += '<h5 style = "padding: 10px; margin: 0;">' + cards[i]["title"] + '</h5>'
                }
                if (cards[i]["content"].length > 0) {
                    if (cards[i]["content"].length > 300) {
                        cards_html += '<p style = "padding: 10px; padding-top: 0; margin: 0;">' + (cards[i]["content"].slice(0, 300) + " ... ") + '</p>'
                    } else {
                        cards_html += '<p style = "padding: 10px; padding-top: 0; margin: 0;">' + cards[i]["content"] + '</p>'
                    }
                }

                cards_html += '</div></div>';
            } else {
                if (cards[i]["img_url"] != "" && cards[i]["img_url"] != undefined) {
                    cards_html += '<img src="' + cards[i]["img_url"] + '"><div>'
                } else {
                    cards_html += '<div class = "card-background">\
                    <svg width="78" height="69" viewBox="0 0 78 69" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M72.9762 0H4.86508C3.57478 0 2.33733 0.512569 1.42495 1.42495C0.512569 2.33733 0 3.57478 0 4.86508V63.246C0 64.5363 0.512569 65.7738 1.42495 66.6862C2.33733 67.5985 3.57478 68.1111 4.86508 68.1111H72.9762C74.2665 68.1111 75.5039 67.5985 76.4163 66.6862C77.3287 65.7738 77.8413 64.5363 77.8413 63.246V4.86508C77.8413 3.57478 77.3287 2.33733 76.4163 1.42495C75.5039 0.512569 74.2665 0 72.9762 0V0ZM4.86508 63.246V4.86508H72.9762V63.246H4.86508Z" fill="black" fill-opacity="0.05"/>\
                    <path d="M16.8333 24.3255C18.2766 24.3255 19.6875 23.8975 20.8876 23.0956C22.0877 22.2937 23.023 21.154 23.5754 19.8205C24.1277 18.4871 24.2722 17.0198 23.9907 15.6042C23.7091 14.1886 23.0141 12.8882 21.9935 11.8677C20.9729 10.8471 19.6726 10.152 18.257 9.87045C16.8414 9.58887 15.3741 9.73339 14.0406 10.2857C12.7071 10.8381 11.5674 11.7734 10.7655 12.9735C9.96364 14.1736 9.53564 15.5845 9.53564 17.0278C9.53564 18.9633 10.3045 20.8195 11.6731 22.188C13.0416 23.5566 14.8978 24.3255 16.8333 24.3255V24.3255ZM16.8333 13.1358C17.6041 13.131 18.3589 13.3551 19.0022 13.7799C19.6454 14.2046 20.148 14.8107 20.4464 15.5215C20.7447 16.2322 20.8252 17.0155 20.6778 17.7721C20.5304 18.5287 20.1616 19.2245 19.6183 19.7712C19.075 20.318 18.3815 20.6911 17.6259 20.8432C16.8702 20.9954 16.0864 20.9198 15.3738 20.6259C14.6612 20.3321 14.0519 19.8332 13.6232 19.1927C13.1944 18.5521 12.9655 17.7987 12.9655 17.0278C12.9719 16.004 13.3814 15.024 14.1054 14.3C14.8294 13.576 15.8094 13.1665 16.8333 13.1601V13.1358Z" fill="black" fill-opacity="0.05"/>\
                    <path d="M50.5483 27.658L37.4126 40.7938L27.6824 31.0636C27.2266 30.6105 26.6101 30.3562 25.9675 30.3562C25.3248 30.3562 24.7083 30.6105 24.2525 31.0636L9.53564 45.9751V52.8592L26.0526 36.3422L34.0556 44.2236L24.9336 53.3457H31.6231L52.1781 32.7907L68.1112 48.6509V41.7911L53.9782 27.658C53.5224 27.205 52.9059 26.9507 52.2632 26.9507C51.6206 26.9507 51.004 27.205 50.5483 27.658Z" fill="black" fill-opacity="0.05"/>\
                    </svg>\
                    </div><div>'
                }

                cards_html += '<h5 style="overflow-wrap: break-word; padding: 10px; margin: 0;">' + cards[i]["title"] + '</h5>';

                if (cards[i]["content"].length > 0) {
                    cards_html += '<p style="overflow-wrap: break-word; padding: 10px; padding-top: 0; margin: 0;">' + cards[i]["content"] + '</p>';
                }
            }
        }
        if (cards.length != 1) {
            cards_html += '<a class="prev-image-video" onclick="plusImageSlides(-1,this)">&#10094;</a>\
            <a class="next-image-video" onclick="plusImageSlides(1,this)">&#10095;</a>\
            </div><script>showSlides(1,this);</script><br><div style="text-align:center"></div>';
        }
        cards_html += '</div>';
        cards_html += '</div></div>'
    } else {
        var cards_html = '<div class="easychat-card-slider-wrapper"><div>'
        if (cards[0]["content"] == "" && (cards[0]["img_url"] == "" || cards[0]["img_url"] == undefined)) {
            for (var i = 0; i < cards.length; i++) {
                cards_html += '<a href="' + cards[i]["link"] + '" target="_blank" style="color:black;"><div class="easychat-card">\
                <div class="container" onmouseover="custom_button_change_card(this)" onmouseout="custom_button_change_normal_card(this)">\
                    <b>' + cards[i]["title"] + '</b>\
                </div>\
                </div></a>';
            }
        } else if (cards[0]["img_url"] == "" || cards[0]["img_url"] == undefined) {
            cards_html = '<div style="color:' + BOT_THEME_COLOR + ';" class="easychat-slides-wrapper"><div class="slideshow-container"  value=1 >';
            total_images = cards.length;

            for (var i = 0; i < cards.length; i++) {
                current_image_no = i + 1;

                if (i == 0) {
                    cards_html += '<div onclick="'
                    cards_html += "window.open('" + cards[i]["link"] + "');"
                    cards_html += '"  class="mySlides fade easychat-slider-card" styles="border: 2px solid ' + BOT_THEME_COLOR + ';">'
                } else {
                    cards_html += '<div onclick="'
                    cards_html += "window.open('" + cards[i]["link"] + "');"
                    cards_html += '"  class="mySlides fade easychat-slider-card" style="display: none; border: 2px solid ' + BOT_THEME_COLOR + ';">'
                }

                if (cards.length != 1) {
                    cards_html += '<div class="pageno-co">' + current_image_no + ' / ' + total_images + '</div>'
                    if (cards[i]["title"].length > 25) {
                        var cards_title = cards[i]["title"].slice(0, 25) + " ..."
                        cards_html += '<h5>' + cards_title + '</h5>'
                    } else {
                        cards_html += '<h5>' + cards[i]["title"] + '</h5>'
                    }
                    if (cards[i]["content"].length > 300) {
                        cards_html += '<p>' + (cards[i]["content"].slice(0, 300) + " ... ") + '</p></div>'
                    } else {
                        cards_html += '<p>' + cards[i]["content"] + '</p></div>'
                    }


                } else {
                    cards_html += '<h5 style="overflow-wrap: break-word">' + cards[i]["title"] + '</h5>';
                    cards_html += '<p style="overflow-wrap: break-word">' + cards[i]["content"] + '</p></div>';
                }
            }
            if (cards.length != 1) {
                cards_html += '<a class="prev-image-video" onclick="plusImageSlides(-1,this)">&#10094;</a>\
                <a class="next-image-video" onclick="plusImageSlides(1,this)">&#10095;</a>\
                </div><script>showSlides(1,this);</script><br><div style="text-align:center"></div>';
            }
            cards_html += '</div>';
        } else {
            cards_html = '<div style="color:' + BOT_THEME_COLOR + ';" class="easychat-slides-wrapper" ><div class="slideshow-container"  value=1 >';
            total_images = cards.length;

            for (var i = 0; i < cards.length; i++) {
                current_image_no = i + 1;
                if (i == 0) {
                    cards_html += '<div onclick="'
                    cards_html += "window.open('" + cards[i]["link"] + "');"
                    cards_html += '"  class="mySlides fade easychat-slider-card" style="border: 2px solid ' + BOT_THEME_COLOR + ';" >'
                } else {
                    cards_html += '<div onclick="'
                    cards_html += "window.open('" + cards[i]["link"] + "');"
                    cards_html += '"  class="mySlides fade easychat-slider-card" style="display: none; border: 2px solid ' + BOT_THEME_COLOR + ';">'
                }
                if (cards.length != 1) {
                    cards_html += '<div class="pageno-co">' + current_image_no + ' / ' + total_images + '</div>'
                    if (cards[i]["title"].length > 25) {
                        var cards_title = cards[i]["title"].slice(0, 25) + " ..."
                        cards_html += '<h5>' + cards_title + '</h5>'
                    } else {
                        cards_html += '<h5>' + cards[i]["title"] + '</h5>'
                    }
                    if (cards[i]["content"].length > 300) {
                        cards_html += '<p>' + (cards[i]["content"].slice(0, 300) + " ... ") + '</p>'
                    } else {
                        cards_html += '<p>' + cards[i]["content"] + '</p>'
                    }
                    cards_html += '<img src="' + cards[i]["img_url"] + '"> </div>'
                } else {
                    cards_html += '<h5 style="overflow-wrap: break-word">' + cards[i]["title"] + '</h5>';
                    cards_html += '<p style="overflow-wrap: break-word">' + cards[i]["content"] + '</p>';
                    cards_html += '<img src="' + cards[i]["img_url"] + '"> </div>'
                }
            }
            if (cards.length != 1) {
                cards_html += '<a class="prev-image-video" onclick="plusImageSlides(-1,this)">&#10094;</a>\
            <a class="next-image-video" onclick="plusImageSlides(1,this)">&#10095;</a>\
            </div><script>showSlides(1,this);</script><br><div style="text-align:center"></div>';
            }
            cards_html += '</div>';
        }
        cards_html += '</div></div>'
    }
    document.getElementById("easychat-chat-container").innerHTML += cards_html;

    if (cards.length == 1 && EASYCHAT_BOT_THEME == "theme_2") {

        //setTimeout(function () {

            prev_image_video = document.querySelectorAll(".prev-image-video-card")
            prev_image_video[prev_image_video.length - 1].style.display = "none";

            next_image_video = document.querySelectorAll(".next-image-video-card")
            next_image_video[next_image_video.length - 1].style.display = "none";

            feedback_wrapper = document.querySelectorAll(".easychat-feedback-wrapper")
            if (feedback_wrapper.length != 0) {
                feedback_wrapper[feedback_wrapper.length - 1].style.width = "60%";
            }

        //}, 300);

    } else if (cards.length != 1 && EASYCHAT_BOT_THEME == "theme_2") {
        slide_show_container = document.querySelectorAll(".slideshow-container")
        slide_show_container = slide_show_container[slide_show_container.length - 1]
        update_card_status(slide_show_container)
    }
    try {
        element_response = document.querySelectorAll(".easychat-card-slider-wrapper")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight
    } catch (err) {
        element_response = document.querySelectorAll(".easychat-slides-wrapper")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight

    }
    resize_chabot_window();
}

function append_google_search_result(cards) {
    cards_html = '<div style="color:' + BOT_THEME_COLOR + ';" class="easychat-slides-wrapper" ><div class="slideshow-container"  value=1 >';
    total_images = cards.length;

    for (var i = 0; i < cards.length; i++) {
        current_image_no = i + 1;
        if (i == 0) {
            cards_html += '<div onclick="'
            cards_html += "window.open('" + cards[i]["google_search_link"] + "');"
            cards_html += '"  class="mySlides fade easychat-slider-card" >'
        } else {
            cards_html += '<div onclick="'
            cards_html += "window.open('" + cards[i]["google_search_link"] + "');"
            cards_html += '"  class="mySlides fade easychat-slider-card" style="display: none;">'
        }
        if (cards.length != 1) {
            cards_html += '<div class="pageno-co">' + current_image_no + ' / ' + total_images + '</div>'
            if (cards[i]["google_search_title"].length > 25) {
                var cards_title = cards[i]["google_search_title"].slice(0, 25) + " ..."
                cards_html += '<h5>' + cards_title + '</h5>'
            } else {
                cards_html += '<h5>' + cards[i]["google_search_title"] + '</h5>'
            }
            if (cards[i]["google_search_descrptn"].length > 300) {
                cards_html += '<p>' + (cards[i]["google_search_descrptn"].slice(0, 300) + " ... ") + '</p></div>'
            } else {
                cards_html += '<p>' + cards[i]["google_search_descrptn"] + '</p></div>'
            }
        } else {
            cards_html += '<h5>' + cards[i]["google_search_title"] + '</h5><p>' + cards[i]["google_search_descrptn"] + '</p></div>';
        }
    }
    if (cards.length != 1) {
        cards_html += '<a class="prev-image-video" onclick="plusImageSlides(-1,this)">&#10094;</a>\
            <a class="next-image-video" onclick="plusImageSlides(1,this)">&#10095;</a>\
            </div><script>showSlides(1,this);</script><br><div style="text-align:center"></div>';
    }
    cards_html += '</div>';
    cards_html += '</div></div>'
    document.getElementById("easychat-chat-container").innerHTML += cards_html;
    element_response = document.querySelectorAll(".easychat-slides-wrapper")
    element_response_previous_height += element_response[element_response.length - 1].clientHeight

}

var inputDiv=""
var previewImg=""
var previewImgSubmitBtnDiv=""
var outputImage=""
var successfulMessage=""

function append_attachment(choosen_file_type, is_flow_ended) {
        handleCancelClick()
    var html = '<div class="easychat-dragdropContainer__XPS">\
                <span class="easychat-dragdropMsg__XPS" style="color:'+BOT_THEME_COLOR+';height:80%;flex-direction: column;">\
                    <svg width="48" height="48" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\
                        <rect width="78" height="78" fill="url(#pattern0)"/>\
                        <defs>\
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">\
                        <use xlink:href="#image0" transform="scale(0.00195312)"/>\
                        </pattern>\
                        <image id="image0" width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d1rkFxnfefx39Onu6fnKll32VZsXWxJlrls4uDFgC3J9tpJ1oQFQgi7IUC2sikW2M0LMMtShMAmRZZsKLLspWIo2HJIsWQrgMOaYCyNjcFeiEmBQdaMJFsGgdHV1mVGM9N9+jz74misizWjnpnT5znPeb6fqi4blzX9p7vdz3fO1QiltP+wXWVN+xVJYjcaYzZK9lpJKyX1n3ksdjshyiqxkqyUSLJWShIpPvNoJ1IrkVrt9O8vpmJsksjERpqSNUcT2UkjHZP0nGSOGdljidWhSsUcUDv5sWztmW1bzMEc/y8CpWBcD4Bs7N1rezTYvrNS0e2ydpuMrnM9EzCbdiJNxWcfzViy8/9xk5KekbTLGP3QJuZHkY2fOLS55+k3GdPOaGSgVAgAz+0/2PynSVR5qxL7mzJa4noeYL4SK0220sfp1sxbCObotJG+Z6XHJPNoqxo9dscGcziTnwx4jgDwkLXW7D/avsvKfkBWN7qeB8iclSZiabwpnZ5a0JaBFzNmnxINS/q6aUQ7tq01x7P88YAvCADPPH0kfq219j9JeonrWYA8JFY63ZTGptJdBRmLJX1H0tcTJV+5bVPPE5k/A1BQBIAnRo/aK6pJ/AlJv+F6FsCVqVg6MSlNNLv1DPYZydxnjP5m67XVbxtjMt34ABQJAVBw1lrz9JHWeyTzJ5L6XM8DFMFULJ2YkCZaXXwSY/ZJ9t4oqn72lg3mQBefCXCCACiwp56zixTH94jf+oGLaral50+nBw52USLpG1bmM1NRdN+vXmOmuvpsQE4IgILaf7j58sToy7LmKtezAEU31pSOn87szIHZHJXRX1bb1U/dfJ35edefDegiAqCA9h5pba1YfVnSItezAL5IrHR8QhqbzPisgYtrGukrSuyfb7uu/v+6/3RA9giAgtl3KP4Xxti/ltRwPQvgo6lYOjqWXnkwD0YatlZ/tH1z7eF8nhHIBgFQIE8diX9N1n5ZUtX1LIDPrJWOjqenD+bo2zL6w+0baztyfVZgngiAgth/sHljUjE7lF6nH0AGTk1Jz4/nskvgXDsTqw/etrn2WL5PC8wNAVAATx+Z3GiT6FEu5Qtkr9WWDp/Kb5fAGdZa+79la++/9Trz41yfGegQAeDY/v22kfTHj0l6uetZgLJqJ9LhsfSGQzlrSvqf7Vr1Q7evNydyf3ZgFhXXA4Su3d/+r2LxB7oqqkgrB6VGLfenrkt6T9SKR4ZH4zfn/uzALNgC4NDTh+M3Wtm/cT0HEApHBwe+wEhfk43fuW1z7zNuJgDOIgAcGTliB2s23i3pCtezACGxSg8MPOXuen7jMvrQ0Wurn3yTMW1nUyB47AJwpGbjj4jFH8idkbSkXxqoOxuhX1b/Zdlo/OjDT05e42wKBI8tAA7s/fnUlkpU+b443x9wx6YHBnb1hkKXdtrIfmDbpvonnU6BIBEADjx1qPl5GfMW13MAobNWOnjKydkB5zFWX1Kl+nvbNpqjbidBSAiAnO05NLkuMtGo+O0fKIS2lQ6elGL3e+N/ahL7G9xbAHnhGICcVVW9Wyz+QGFERloxIFXc/zp0pa2YR4ZHWne7HgRhcP+RD8jBg7Z/vBIflDTgehYA5xubko6Nu55imv3r1lTt9+54mSnMRCgftgDkaMy03yAWf6CQBnqkfndnBlzAvKXWE3/74X12jetJUF4EQI5Mxf626xkAzGxJv1SLXE/xgpe14/g7wyPNG1wPgnIiAHJy4IRdIqttrucAMLOKkZYNqEg7R1dbmeEdu+O7XA+C8iEActKcbG+VVJzfLQBcVD2ShnpcT3GeAWPsl4ZHm//W9SAoFwIgJ9bw2z/gi0W9UrViXY9xrsha86kdI62PuR4E5UEA5MQYSwAAnqgY6bK+4uwHmGaku3eOtP7UWlu84eAdAiAHu6yty2qj6zkAdK6vLvXmf/vgTrzvodH2f/+wtXx/Y0H4AOWg/lxzg7j4D+CdJX0q0gGBL7Cyv3/zaPseIgALwYcnB5U42uR6BgBzV42k/mJuBZBk3/GaPe3PEAGYLz44OTCy61zPAGB+FvUWciOAJMlY+zYiAPPFhyYHidFi1zMAmJ9alB4PUFREAOaLD0wODJf/Bbw21Ot6gtkRAZgPPiy5MIOuJwAwf/WosGcEvMBY+7abR9ufJgLQKT4oebBJwX9/AHApgw3XE3TCvp0tAegUHxIA6EBvNb1AUNGxOwCd4gMCAJ0wRbpd8OyIAHSCDwcAdKjfi90AKSIAl8IHAwA61BOlpwX6ggjAbPhQAMAcFPmaABfD2QGYCR8IAJiDhpd39eDsALwYHwYAmIOeWnEvDTwbdgfgQnwQAGAOjNII8BERgHPxIQCAOfJzN0CKCMA0H7dk5W541C6zNt5orNlgK0m/sWbQGi2ytrOAWj2ku3qquq7bcwLIx1QsHTzpeoqFscZ87pFro9/9sDGJ61ngBgFwgfv32p4eG9+otrYbo62Srpe0dCE/c1m/1N+TyXgACsBa6cDx9K8+IwLCRgBIevxxWzvR375Txr7VSL8mKdNr9xMAQPk8e0JqtV1PsXBEQLiCDoAHRuzlNcV/YKXfkbS8W89DAADlc3RcGp9yPUVWzGe/uTH610RAWIIMgIdHJta2Vbtbsm+T1PWlmQAAyuf4hHRiwvUU2WFLQHiCCoBHD9jeibH4bmP0fuWw8E8jAIDyGZ9KtwKUCREQlmBOAxneHf/zyfHWk8boD5Xj4g+gnCKP7gnQKS4bHJbSv8n377U9O0dan7TG3ieZqx2PA6AkqqXdfsplg0NR6jd4eNfkhkY7flTSexTY7g4A3VUp8TcKFwsKQ2nf3AdHm79so+gxSb/oehYA5VOpqNS/VhAB5VfKN3Z4T+u2ijU7JC1zPQuA8irlF+g5iIByK92bunN3/Hqb6H5Jg65nAQDfEQHlVao3dHh3a6uM/bwkT+/VBcAnpsS7AM5FBJRTad7MB0emXmqNviSp4XoWAGEIZP2XxCmCZVSKN/Lvd9klFZn7JC12PQsAlBenCJaJ92+itdbUo/izkrnK9SwAUHbsDigP79/A4dH4vZJe63oOAAgFEVAOXr95Dz85eY2kj7ieAwBCQwT4z+s3rl2J/kJc1x8AnCAC/ObtmzY8Gr9Z0p2u5wCAkBEB/vLyDfuitZGVPup6DgAApwj6yss3a/lo+7dk7QbXcwAAptm3EwF+8e6NstYaK3u36zkAABciAnzi3Zv00Gh8h6TrXc8BALgYIsAX3r1B1ti3up4BADAbIsAHXr059++1Q7Lm113PAQC4FCKg6Lx6Y3rj1usl9bmeAwDQCSKgyLx6UxLpDtczAADmgggoKm/eEGutMcZsdT0HAGCuiIAi8ubNGH6yeZ2kVa7nAADMBxFQNN68EaZqXul6BgDAQhABReLNm5DIbHI9AwBgoYiAovDpDdjoegAAQBaIgCLw5sU3Vte6ngEAkBUiwDWfXngOAASAUiECXPLiRbfWGkn9rucAAGSNCHDFixf8gSfUJylyPQcAoBuIABe8eLGjigZczwAA6CYiIG9evNBJjd/+AaD8iIA88SIDAAqECMgLLzAAoGCIgDzw4gIACogI6DZeWABAQREB3cSLCgAoMCKgW3hBAQAFRwR0Ay8mAMADREDWeCEBAJ4gArLEiwgA8AgRkBVeQACAZ4iALPDiAQA8ZN9+82j7HiJg/njhAGCejHE9QejsO9gSMH+8aAAwT3yBFgG7A+aLFwwA5oktAEVBBMwHLxYAzFOFb9AC4ZiAueKFAoB5qvINWjAcEzAXvEgAME/1yPUEeLF0S4C1lh00l0AAAMA8VQmAgrLvGB5tf8r1FEVHAADAPNUiSfyeWVD2nTtHWn/qeooiIwAAYJ4qRurhW7TI3rdjpPVB10MUFR9dAFiARt31BJiNkT66Y3fz3a7nKCICAAAWoFFzPQEuxRjziZ0j8Wtdz1E0BAAALEAjkiK+SYsukuwXdu5p3uh6kCLhYwsAC2GkPnYD+KBXifnSjiftVa4HKQoCAAAWaIAA8MVqVeK/G95lB1wPUgQEAAAsUL2aPlB8RnpJUmnd43qOIiAAACADixquJ0CnjDFv3jHS/Peu53CNAACADPTVz1wYCF4wMh/fsad1s+s5XCIAACAji3tdT4A5qJpEX3jwh3al60FcIQAAICN9da4L4JnVlVr8v0K9cRABAAAZWtLH7QE8c8fO0dbvux7CBQIAADJUi6QhdgV4xcj82c6RyY2u58gbAQAAGVvckHo4LdAnfVL0V48/boPagUMAAEDWjLR8IL1bILxxw8n++L2uh8gTAQAAXRBVpGUD4oAAnxh9cHjX5AbXY+SFAACALumtScs4KNAnvTaK7gnlrAACAAC6qL9HWtznegrMwdaHRtpvdT1EHggAAOiyoYZ0GRHgDWvsnz3yhL3M9RzdRgAAQA6GGtJSjgnwxbK4Hn/I9RDdRgAAQE4G6tKKAanCN2/hWemdD+6evNb1HN3ExxAActRbk1YPcp0AD9QrJvq46yG6iQAAgJxVI2nl4JlbCLNLoMheu2Oktd31EN1CAACAA8akZwesHmJrQJEZ6T+X9bRAAgAAHKpH0qohaWm/VOUbuYh+aXhP+1dcD9ENfNwAoAAGeqTLF6dXD6xFrqfBeaz9SBm3AhAAAFAQRlJ/XVq9SFo5lF5EyJRu2fHSLw3vbf+q6yGyRgAAQMEYSY2qtKxfuvLMVoGBBlsGnEps6a4LQAAAQIFVTLpVYGmfdPmiNAiWD6RXFhzoSUOhHqXHD1Qq4qyC7nnFjj2tm10PkSWOPQUAj0QVqa/ueor5sZKsldqJlJz5a9yW4iR9NNvpPyusRH8g6Zuux8gKAQAAyIVRekxDZZZdGYmVpuJzHq00HIrASK/dsXdy/a3XNJ5yPUsW2AUAACiMikmvlri4N71Y0pol6V8HG+nWD+fjJdV/53qIrLh/OQEAmIGR1KhJS/qkKxZLKwbTeypUXB3rYO3bvzViBx09e6YIAACAF4zSrQNLB86eHdHIf0f2QMu0fjP3Z+0CAgAA4B1z5uyIlUPplRR78zww0pp35PhsXUMAAAC81lNNb7O8elG6e6Dbewes9MoH905d1+Wn6ToCAABQCvUo3T2welF63EA3maTi/VYAAgAAUCq1M7dbXtbfvTMHjNW//KK1Xl+bkQAAAJRSf0969cShhrqxX2DV8pH4NZn/1BwRAACA0qqY9LLJqwelasa/r1uZN2b7E/NFAAAASq9elS4/c4fFzBj7Bp93AxAAAIAgGJMeF7BsILMLCa1aujd+VSY/yQECAAAQlOnrB1QzWAFNW69b+E9xgwAAAASnHqUXEKov/EqCd2QwjhMEAAAgSFFFWjWYXl543oyu+8Yu+wuZDZUjAgAAECxjpOUDUt8CLiVcjVq3ZzdRfggAAEDQjEkPDBxozO/PJzJ3ZjtRPvK/jxJQIhMt6ecnpWNj0qkpabIlWddDoZCqlfQ69Yv70gPQlvalCw+KwSi95bBNpPHmnP/sNmutMcZ49Z8/AQDMkbXSgePS6CHp0Kn0fwOdOCxJx9K/76tL65dJm1Z2/7r16IxReppgYtO4n4OlD+1pbpQ00pXBuoQAAObg0Cnpu89IxydcTwLfnW5KP3xWevKgtGW1dP3lUsQWAffOHBNw8JTUjDv/Y9aam+RZAHAMANABa6V//In0wG4Wf2SrnUhP/Ez6vz+STvDZKgRjpBVzvHSwVeWV3ZuoOwgA4BLiRNq5R9p10PUkKLMTE9L9T0rPnnA9CaR0a8yKOVwx0Fh7U3cnyh4BAMwiSaSH9/KljHzEbWl4b3pgKdyrRemNhDpitPn+vXaoqwNljAAAZvHYfhZ/5CtJpG/uk8amXE8CSRroSc/e6ICpx/GWLo+TKQIAmMHTx9IHkLdmLD3yFGeYFMWS/nRrwKVUZF/S/WmyQwAAFzEVS4//2PUUCNnRMWnPEddTQDp7oSBd6niASuX6PObJCgEAXMTug2kEAC498bP0IFS4V4+kRT2z/zvGWgIA8FnbSqOHXU8BpFeW3H/U9RSYtqg3vYHQTKzEMQCAz376/NwuAAJ001MEQGEYc8mzAlZ8a8QO5jTOghEAwAV+etz1BMBZR8fZHVUk/fXZbx/cbDe9uTUwAQBc4PAp1xMAZ1nLZ7JoLuub5XjAWnR1jqMsCAEAnKM9jzuBAd12ctL1BDhXLZL6Zjgg0Njk6lyHWQACADjHRItzr1E8RGnxLGrMsBXAmqvznWT+CADgHJxyhSJqtV1PgAvVIqn3IlcItNauyH+a+SEAAKDguEtwMS3qvdg/NUvznmO+CADgHFX+i0ABzeW2tMhPPZIaF54RUBEBAPior56e6wsUycAlrkAHdwYveG+sJQAAL1UMX7YonqGG6wkwk95a+r0xzYgAALy10pvreCEExkgrBlxPgZkY86JTAr15twgA4AJXLnY9AXDWikGpXnU9BWYzcP7ZAHVrrRc7EgkA4AJXLJJ6+MJFQazzZoNyuHqq5x9A/LV9usgJgsVDAAAXqFSkzStdTwGk+5fXLnM9BTrRd/6S78WRRAQAcBGbVs1+ww8gDy+/Uoq82JiMc08HXGa0yN0knSMAgIuoRdIvX+V6CoRs5aC0nt/+vdFTPXsKca3hx5kABAAwg6uWSNd4c1FPlElPVXr1eq5J4ZOKkXrOXLDJGD8u3kgAALO48SrpCs4KQI6qFWn7tS/apwwP9Hi225AAAGZhjLT1mnRrANBt9ap060ZpmTdnkuNcDc/OHvJsXCB/FSO9Zr20uFd64lluF4zuWNov3byBK1H6rKfm142bCACgA8ZIL70ivUjQd5+Rjoy7nghlUYukl14ubV7FPn/fGfl14yYCAJiDJf3SnVukZ09Iew5LPz3OFgHMz1AjPcr/2hVc6a9MagQAUG6XL0ofzVg6dEo6Oi6dnJCm2lKr7Xo6FE3FpLeOHeiRFvdJqwZnupc8fEcAAIGoV6U1l6UPAIg8OrTeo1EBACg2n7YAEAAAAGTEp0s3EwAAAGSkQgAAABCeyEg1Ky/ODSIAAADIipGm2mq6HqMTBAAAABnqqRAAAAAEpxERAAAABKdWU+x6hk4QAAAABIgAAAAgQAQAAAABIgAAAAgQAQAAQIAIAAAAAkQAAAAQIAIAAIAAEQAAAASIAAAAIEAEAAAAASIAAAAIEAEAAECACAAAAAJEAAAAEKCq6wEA+C9JpGOnpaNj0qlJaTKWmrEUVaR6JA00pMW90opBqbfmeloAEgEAYAEOnpT2HZUOPC/F7c7+zNIBae0SacNyqRZ1dz4AMyMAAMzZwZPS9w5Iz43P/c8eG0sfP/iZtGmVdP1qqcrOSCB3BACAjrXa0neekfYfy+Zn/fBn0tNHpZvWSquGFv4zAXSO7gbQkeMT0ld/lM3if67xKenB0TQGAOSHLQAALunImLRzT3pgXzdYK33/Z9J4S7rxKsmY7jwPgLPYAgBgVkfG0t/Qu7X4n2vvYelbT6dBAKC7CAAAM5pe/Ds9wj8LzxwjAoA8EAAALsrF4j+NCAC6jwAA8CIuF/9pRADQXQQAgPMUYfGfRgQA3UMAAHhBkRb/aUQA0B0EAABJxVz8pxEBQPYIAACFXvynEQFAtggAIHA+LP7TiAAgOwQAEDCfFv9pRACQDQIACJSPi/80IgBYOAIACJDPi/80IgBYGAIACEwZFv9pRAAwfwQAEJAyLf7TiABgfggAIBBlXPynEQHA3BEAQADKvPhPIwKAuSEAgJILYfGfRgQAnSMAgBILafGfRgQAnSEAgJIKcfGfRgQAl0YAACUU8uI/jQgAZkcAACXD4n8WEQDMjAAASoTF/8WIAODiCACgJFj8Z0YEAC9GAAAlwOJ/aUQAcD4CAPAci3/niADgLAIA8BiL/9wRAUCKAAA8xeI/f0QAQAAAXmLxXzgiAKEjAADPsPhnhwhAyAgAwCMs/tkjAhAqAgDwBIt/9xABCBEBAHiAxb/7iACEhgAACo7FPz9EAEJCAAAFxuKfPyIAoSAAgIJi8XeHCEAICACggFj83SMCUHYEAFAwLP7FQQSgzAgAoEBY/IuHCEBZEQBAQbD4FxcRgDIiAIACYPEvPiIAZUMAAI6x+PuDCECZEACAQyz+/iECUBYEAOAIi7+/iACUAQEAOMDi7z8iAL4jAICcsfiXBxEAnxEAQI5Y/MuHCICvCAAgJyz+5UUEwEcEAJADFv/yIwLgGwIA6DIW/3AQAfAJAQB0EYt/eIgA+IIAALqExT9cRAB8QAAAXcDiDyIARUcAABlj8cc0IgBFRgAAGWLxx4WIABQVAQBk5PiEtIPFHxfxzDHp8Z+4ngI4HwEAZKBtpYf2Si0Wf8xg5JD0k+ddTwGcRQAAGdhzSDo16XoKFN33fsKuABQHAQBkYO8R1xPAB2NT0sFTrqcAUgQAsEBTsXRiwvUU8MWhk64nAFIEALBA41OuJ4BP+LygKAgAAMiTcT0AkCIAgAUa6HE9AXzSz+cFBUEAAAtUr0qLel1PAV+sGHA9AZAiAIAMrF/megL4oK9HWj3kegogRQAAGdi4Quqru54CRfdPrpAMxwCgIAgAIAPVSHr1OqnCf1GYwdVLpXVsKUKB8HUFZGTlkHTLhjQGgHNdvVR61VrXUwDnIwCADF25WLrreukXLmNTL9IzRF61Xnr1erYOoXiqrgcAymagR7rlGul0M73s66lJqZ109zmfPy09e6K7z1EGPVVpw/LuP09fTVo6IC3rJwRRXAQA0CV9dWnd0nyea98RAqATjZr0i2tcTwEUAxulAAAIEAEAAECACAAAAAJEAAAAECACAACAABEAAAAEiAAAACBABAAAAAEiAAAACBABAABAgAgAAAACRAAAABAgAgAAgAARAAAABIgAAAAgQAQAAAABIgAAAAgQAQAAQIAIAAAAAkQAAAAQIAIAAIAAEQAAAASIAAAAIEAEAAAAASIAAAAIEAEAAECACAAAAAJEAAAAECACAACAABEAAAAEiAAAACBABAAAAAEiAAAACBABAABAgAgAAAACRAAAABAgAgAAgAARAAAABIgAAAAgQAQAAAABIgAAAAgQAQAAQIAIAAAAAkQAAAAQIAIAAIAAEQAAAASIAAAAIEAEAAAAASIAAAAIEAEAAECACAAAAAJEAAAAECACAACAABEAAAAEiAAAACBABAAAAAEiAAAACBABAABAgAgAAAACRAAAABAgAgAAgAARAAAABIgAAAAgQAQAAAABIgAAAAgQAQAAQIAIAAAAAkQAAAAQIAIAAIAAEQAAAASIAAAAIEAEAAAAASIAAAAIEAEAAECACAAAAAJEAAAAECACAACAABEAAAAEiAAAACBABAAAAAEiAAAACBABAABAgAgAAAACRAAAABAgAgAAgAARAAAABIgAAAAgQAQAAAABIgAAAAgQAQAAQIAIAAAAAkQAAAAQIAIAAIAAEQAAAASIAAAAIEAEAAAAASIAAAAIEAEAAECACAAAAAJEAAAAECACAACAABEAAAAEiAAAACBABAAAAAEiAAAACBABAABAgAgAAAACRAAAJVAxrifwA68TcBYBAJRAo+Z6Aj80qq4nAIqDAABKYKjhegI/DPW6ngAoDgIAKIGBHmkxi9slrbnM9QRAcRAAQElsWe16gmJb0ietGnQ9BVAcBABQEmuXSiuHXE9RTBUj3bhWMhwECLyAAABKwhhp6wZ2BVzIGOmmtdKyfteTAMVCAAAlUq9Kv3JdujUA0kDd6vaN0tplricBioeTYoCSqUbSq9dLm1dK+45Kz56QxpuSta4ny0dPNd3ff9USaf1yw7n/wAwIAKCklg6kD0myklqx03FyEUVSxIIPdIQAAAJglO4eAIBpHAMAAECACAAAAAJEAAAAECACAACAABEAAAAEiAAAACBABAAAAAEiAAAACBABAABAgAgAAAACRAAAABAgAgAAgAARAAAABIgAAAAgQAQAAAABIgAAAAgQAQAAQIAIAAAAAkQAAAAQIAIAAIAAEQAAAASIAAAAIEAEAAAAASIA8mBcDwAAyEucqO16hk4QADlIrOsJAAB5qTV10vUMnSAAckAAAEAw4jVrzITrITpBAOTAEgAAEIox1wN0igDIQZsAAIBQHHQ9QKcIgBy0vDgcBACwYEYjrkfoFAGQg5gAAIAwWI26HqFTBEAO2gkHAgJAGCwBgPNNxa4nAAB0mzHJo65n6BQBkJPJlusJAADdZKVn1y1vsAUA55tkCwAAlJuxO1yPMBcEQE5acXosAACgnIwqX3c9w1wQADmxksabrqcAAHTJ+KSNvuJ6iLkgAHJEAABAOVlj/3bLCuPNVQAlAiBXzZiLAgFAGVUSc6/rGeaKAMjZyUnXEwAAMmW0a+2KqlcHAEoEQO7GmlLMwYAAUBrWmo8aY7z7ZicA8malU2wFAICSMPvWL4/+j+sp5oMAcODUJPcHAIAysFbvNcZ4+Y1OADhgJT132vUUAICFsNLXN6ysftn1HPNFADgy0eK0QADw2JQx7fe4HmIhCACHnj/N1QEBwEvGvn/98sYe12MsBAHgUDuRjo6nuwQAAN746rpltU+6HmKhCADHJlvSyQnXUwAAOmMPNJvVtxljvP/djQAogBMTHA8AAB44Yazu2nylOeZ6kCwQAAVgJR0bTw8MBAAU0qSR7lq3sv4D14NkhQAoCGulo2PSVOx6EgDAeaya1prfWrei9ojrUbJEABRIYqXDp9LjAgAAhTBujXmdz+f7z4QAKJjESofHpNMcEwAAThnpWGJ1+4YV1a+5nqUbCIACslY6MnbmaoHeH2cKAF56PLbtV1yzsvaY60G6hQAosFOT0qFTXCwIAHJkjfQXk8urr7p2ZeNp18N0U9X1AJjdZCw9e0Ja0if197ieBgBKba+xete6lbUHXA+SB7YAeCCx6RUDD56Uml7ecwoABUSl6AAABSJJREFUCm1CVn9UGa++NJTFX2ILgFemYunnJ6WBmjTUK9Ui1xMBgNcmjMynkyj6+Ial5oDrYfJGAPjGSmPN9MqBvXVpqCH18C4CwFwckvQ5Y6ufWLfSHHI9jCssHZ6ySk8VPN2UqpX0+ID+OlsFAGAGY7L2PpnK53+yPHpgmzHBX3aNACiBOEnvJ3BiQqpG6RaB3ppUj6RaRZJxPSEA5O6IjJ6w0sNKtPPAiup3WPTPRwCUTNxOH+NTZ/6BSSOgFkmVSnrUpzFShSgAUFDVSE/21fR3nfy7Vmob6aSsPWFUGTM22Vftre1Zs8g81+05fUcAlJ2VWu30AQBeMPYH2zfW3+96jLLjNEAAAAJEAAAAECACAACAABEAAAAEiAAAACBABAAAAAEiAAAACBABAABAgLwIgEYi63oGAADKxIsAaPdqwvUMAICc2Mpp1yOEwIsA0DMacz0CACAfRvaU6xlC4EUAbNtmYkmTrucAAHSftTrpeoYQeBEAZxx3PQAAIAcVnXA9Qgh8CoCnXA8AAMiBNftcjxACjwLAjLqeAACQh5jv+xx4FACWDwQAlF88NNbztOshQuBPAFj9wPUIAICue/KGG0zL9RAh8CYAxserj0hqup4DANA9RtrpeoZQeBMAd91gTkv6rus5AADdk1hDAOTEmwCQJFnKEABKLE7q0TddDxEKvwIgSb7oegQAQHcY6Ru3rzdcAyAnXgXA9i09uyR93/UcAIDsJdbc63qGkHgVAJIkIz4gAFA+Y3Ezus/1ECHxLgCqleq9krhTFACUirn3jpeZcddThMS7ALj5GnNE0qddzwEAyEwrUuvjrocIjXcBIEkmqn5cXBMAAErC/NUtm3r3u54iNF4GwLZrzE8l8xnXcwAAFqyZ2PhjrocIkZcBIEnNdvRBSUdczwEAmD9j9ee3bW7scT1HiLwNgDu3mOeMsR9wPQcAYL7sASXVP3Y9Rai8DQBJ2npt7TNGesT1HACA+ai8a9sWM+Z6ilB5HQDGGKuo+hZJR13PAgDonDHmU9s3VTnv3yGvA0A6c0CgMb8jybqeBQDQkSd6+qL3uR4idN4HgCRt31i930p/4noOAMAlHbFR+/U3rTETrgcJnXE9QFastWZ4tH2PZH/X9SwAgIs6nVjddtvm2mOuB0FJtgBI6fEARzdG/0ZGf+t6FgDAi7SM9AYW/+IoTQBI0puMaTf6qv9KEgeWAEBxTEjmjds21f7e9SA4q1QBIEk3rTETRzdWXy9j/tL1LAAAHU+M7uCI/+IpzTEAF7LWmof2xB+yVh9SCUMHAArPmH2K26/bvqVnl+tR8GKlDYBpD460tlWkz0ta7XoWAAiFsfqSGtV3bFtrjrueBRdX+gCQpG8+aVfHlfhzkv6Z61kAoOTGrOz7bt1U/x+uB8HsggiAaTt2x3cZk/w3yaxxPQsAlI01+qra1Xfdep35setZcGlBBYAk3b/XDjXa8X+U9E5JA67nAYAS+Edr9R9u3Vx7wPUg6FxwATDtwd12qVH8bmP0bklLXM8DAB561Frzse2boq8aY7gcu2eCDYBp3xqxgy3beoM15rclbRVnDADAbI7ImC8kSu69bWP9H1wPg/kLPgDO9fA+uyZutX69IrPdGt0itgwAgLXSjyTtlDFfX3QqevCGG0zL9VBYOAJgBh+2trJtX+tl7aTyEslulNVGSVdL5jLJDio9fqDX7ZQAkInnJY1LGpN0SNbsMbKjNjIjrUr0D3dsMIcdz4cu+P/SjihghBhptgAAAABJRU5ErkJggg=="/>\
                        </defs>\
                    </svg>\
                    <p style="width:90%;color: #3D3D3D;margin-bottom: 0;">'
                    + FILE_ATTACHEMENT_TEXT +'<br><span style="color: #A8A8A8;">'+choosen_file_type+'</span>\
                    </p>\
                    <p id="max-file-size-allowed-message" style="color:red;font-size:13px; padding-left: 10px; padding-right: 10px;">*' 
                    + FILE_SIZE_LIMIT_TEXT + ' '+ max_file_size_allowed + ' MB\
                    </p>\
                </span>\
                <div class="easychat-dragdrop__XPS" style="border: 1px dashed '+BOT_THEME_COLOR+';margin-top: 0;">\
                    <input onchange="change_span_name_to_file_name(this,\''+choosen_file_type+'\')" style="font-size: 0px !important;" id="easychat-uploadfile__XPS" type="file" accept="' + choosen_file_type + '">\
                     <span id="easychat-dragdropAlertMsg__XPS" style="margin-bottom: 5px"></span>\
                </div>\
            <div class="easychat-upload-file-container" style="display: none">\
            </div>\
            </div>\
            <div class="preview-img">'
             if(choosen_file_type.indexOf("mp4") == -1)
             {
                 html+='<img id="outputImage" class="output-image" src="" alt="preview-img"/>'
             } else {
                 html+='<video  style="    left: 30%; width: 67%;margin-bottom: 5px;position: relative;" class="output-image" src="" alt="preview-img" controls>\
                 <source src="" type="video/mp4" id="outputImage">\
                 </video>'
             }   
             

                html += '<div class="submit-cancel-btns-wrapper">\
                    <div class="submit-cancel-btns">\
                        <button class="cancel-btn" type="submit" onclick="handleCancelClick()">'+CANCEL_TEXT+'</button>\
                        <button class="submit-btn" type="submit" onclick="save_attachment_to_data_models(this,' + is_flow_ended + ',\''+choosen_file_type+'\')">'+SUBMIT_TEXT+'</button>\
                    </div>\
                </div>\
            </div>\
            <div class="successful-submission-text">\
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M9.54961 1.80591C5.57521 1.80591 2.34961 5.03151 2.34961 9.00591C2.34961 12.9803 5.57521 16.2059 9.54961 16.2059C13.524 16.2059 16.7496 12.9803 16.7496 9.00591C16.7496 5.03151 13.524 1.80591 9.54961 1.80591ZM8.10961 12.6059L4.50961 9.00591L5.52481 7.99071L8.10961 10.5683L13.5744 5.10351L14.5896 6.12591L8.10961 12.6059Z" fill="#25B139"/>\
                </svg>\
                <span>'
                 + FILE_UPLOADED_TEXT +
                '</span>\
            </div>'

    document.getElementById("easychat-chat-container").innerHTML += html;

    element_response = document.querySelectorAll(".easychat-dragdropContainer__XPS")
    element_response_previous_height += element_response[element_response.length - 1].clientHeight
    scroll_to_bottom();
    disable_user_input();

      inputDiv=document.querySelectorAll(".easychat-dragdropContainer__XPS");
      inputDiv = inputDiv[inputDiv.length -1]
      previewImg=document.querySelectorAll(".output-image");
      previewImg = previewImg[previewImg.length -1]
      previewImgSubmitBtnDiv=document.querySelectorAll(".submit-cancel-btns-wrapper");
      previewImgSubmitBtnDiv = previewImgSubmitBtnDiv[previewImgSubmitBtnDiv.length -1]

      successfulMessage=document.querySelectorAll(".successful-submission-text");
      successfulMessage = successfulMessage[successfulMessage.length -1]
 
  
}

function handleCancelClick(){
   try{
        previewImgSubmitBtnDiv.style.display="none";
        inputDiv.style.display="block";
        global_file_name = ""
        var attachment_selector = document.querySelectorAll(".easychat-dragdropContainer__XPS")
        previewImg.remove()
        // document.querySelectorAll(".easychat-dragdropMsg__XPS")[attachment_selector.length - 1].style.display = "block"
        attachment_selector = attachment_selector[attachment_selector.length -1 ]
        attachment_selector.remove()
        successfulMessage.remove()
        enable_user_input()
    } catch(err)
    {enable_user_input()}
  
    }

function capturing_video_start(element) {

    var video = document.getElementById(video_element_id);
    var canvas = document.getElementById(video_captured_canvas);

     // Disable start recording button
        element.disabled = true;
        element.style.backgroundColor = 'grey';
        // Request access to the media devices
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        }).then(function (stream) {
            // Display a live preview on the video element of the page
            setSrcObject(stream, video);

            // Start to display the preview on the video element
            // and mute the video to disable the echo issue !
            video.play();
            video.muted = true;

            // Initialize the recorder
            recorder = new RecordRTCPromisesHandler(stream, {
                mimeType: 'video/webm',
                bitsPerSecond: 128000
            });

            // Start recording the video
            recorder.startRecording().then(function () { }).catch(function (error) {
                console.error('Cannot start video recording: ', error);
            });

            // release stream on stopRecording
            recorder.stream = stream;
            videoStarted = true;

            // Enable stop recording button
            document.getElementById(stop_button_id).disabled = false;
            document.getElementById(stop_button_id).style.backgroundColor = BOT_THEME_COLOR;

            // document.getElementById(preview_button_id).disabled = true;
        }).catch(function (error) {
            alert("Please allow access to webcam.");
            console.error("Cannot access media devices: ", error);
        });
}

function capturing_video_stop(element)
{
    var video = document.getElementById(video_element_id);
    var canvas = document.getElementById(video_captured_canvas);
            element.disabled = true;
            recorder.stopRecording().then(function () {
            if (document.pictureInPictureElement) {
                document.exitPictureInPicture();
            }

            // Retrieve recorded video as blob and display in the preview element
            videoBlob = recorder.blob;
            recorder.getDataURL().then(function (result) {
                recorded_video_data_url = result;
            });

            // video.src = URL.createObjectURL(videoBlob);
            // video.play();

            // Unmute video on preview
            // video.muted = false;

            // Stop the device streaming
            recorder.stream.stop();
            videoStopped = true;

            document.getElementById(start_button_id).disabled = false;
            document.getElementById(start_button_id).style.backgroundColor = BOT_THEME_COLOR;
            // document.getElementById(start_button_id).style.backgroundColor = "grey";
            // document.getElementById(preview_button_id).disabled = false;
            document.getElementById(submit_button_id).disabled = false;
            document.getElementById(submit_button_id).style.backgroundColor = BOT_THEME_COLOR;

            document.getElementById(stop_button_id).style.backgroundColor = "grey";
        }).catch(function (error) {
            console.error('stopRecording failure', error);
        });
}


function capturing_video_submit(element)
{
    var video = document.getElementById(video_element_id);
    var canvas = document.getElementById(video_captured_canvas);
    append_bot_text_response(UPLOAD_VIDEO_TEXT);
    document.getElementById("global-canvas-video-capture").remove();
    document.getElementById("global-video-captured-response").remove();
    document.getElementById(stop_button_id).remove();
    document.getElementById(start_button_id).remove();
    document.getElementById(submit_button_id).remove();
    // document.getElementById(preview_button_id).style.display = 'none';
    attached_file_src = recorded_video_data_url
    file_extension = "mp4"
    send_message_to_server("attachment", user_id, bot_id, bot_name, "");
    recorded_video_data_url = null;
}


function append_video_recorder() {
    try {
        document.getElementById("global-canvas-video-capture").remove();
        document.getElementById("global-video-captured-response").remove();
        document.getElementById("btn-start-recording").remove();
        document.getElementById("btn-stop-recording").remove();
        document.getElementById("btn-submit-recording").remove();
    } catch (err) { }
    is_video_recorder_allowed = true
    var html = '<div class="col s12 easychat-video-recorder-div" style="\
    width: 70%;"">\
    <div class="col s12" style="">\
        <div class="col s12">\
          <video class="responsive-video" id="global-video-captured-response" controls autoplay style="height:10em; margin-top: 10px" type="video/webm"></video>\
        </div>\
    </div>\
      <button id="btn-start-recording" onclick="capturing_video_start(this)" style="background-color:' + BOT_THEME_COLOR + ';color:white;border-radius:7px;font-size:14px;height:30px; padding: 0px 12px; margin: 0px 8px 8px 0px; border: none;">' + START_TEXT + '</button>\
      <button id="btn-stop-recording" onclick="capturing_video_stop(this)" disabled="disabled" style="background-color:grey;color:white;border-radius:7px;font-size:14px;height:30px; padding: 0px 12px; margin: 0px 8px 8px 0px; border: none;">' + STOP_TEXT + '</button>\
      <button id="btn-submit-recording" onclick="capturing_video_submit(this)" disabled="disabled" style="background-color:grey;color:white;border-radius:7px;font-size:14px;height:30px; padding: 0px 12px; margin: 0px 8px 8px 0px; border: none;">' + SUBMIT_TEXT + '</button>\
      <canvas style="display:none;" id="global-canvas-video-capture"></canvas>\
    </div>'
    document.getElementById("easychat-chat-container").innerHTML += html;
    element_response = document.querySelectorAll(".responsive-video")
    element_response_previous_height += element_response[element_response.length - 1].clientHeight

    change_is_flow_ended_variable = false
}

function change_span_name_to_file_name(el, choosen_file_type) {
    if (el.files[0] != undefined || el.files[0] != null) {
        var file_ext = el.files[0].name.split(".");
        file_ext = el.files[0].name.split(".")[file_ext.length - 1];
        if (document.getElementById("easychat-uploadfile__XPS").getAttribute("accept").toString().indexOf(file_ext.toLowerCase()) !== -1) {
            if (el.files[0].size <= (max_file_size_allowed) * 1024 * 1024) {
              var length_of_attachments = document.getElementsByClassName('easychat-upload-file-container').length
                document.getElementsByClassName('easychat-upload-file-container')[length_of_attachments-1].innerHTML = add_attachment_loader_html()

                file_name = el.files[0].name.split(".")
                global_file_name = file_name
                file_length = file_name.length
                file_ext = parseInt(parseInt(file_length) - 1)
        
                if (el.files[0].name.length >= 15) {
                    file_name_mod = file_name[0].slice(0, 10) + "... ." + file_name[file_name.length - 1]
                } else {
                    file_name_mod = el.files[0].name
                }
                // document.getElementsByClassName('easychat-upload-file-container')[0].style.display = "inline-flex"
                var name_div_length =  document.getElementsByClassName('upload-file-name-div').length
                document.getElementsByClassName('upload-file-name-div')[name_div_length-1].innerHTML = file_name_mod
                // var reader=new FileReader();

                // inputDiv.style.display="none";
               
                previewImgSubmitBtnDiv.style.display="block";
              

                $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);

                function animateElements() {
                $('.progressbar').each(function() {
                    var elementPos = $(this).offset().top;
                    var topOfWindow = $(window).scrollTop();
                    var percent = $(this).find('.circle').attr('data-percent');
                    var percentage = parseInt(percent, 10) / parseInt(100, 10);
                    var animate = $(this).data('animate');
                    if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                        $(this).data('animate', true);
                        $(this).find('.circle').circleProgress({
                            startAngle: -Math.PI / 2,
                            value: percent / 100,
                            size: 40,
                            thickness: 4,
                            emptyFill: "#eeeaef",
                            fill: {
                                color: '#1E9DF7'
                            }
                        }).on('circle-animation-progress', function(event, progress, stepValue) {
                            $(this).find('div').text((stepValue * 100).toFixed(0) + "%");
                        }).stop();
                    }
                });
            }

            // Show animated elements
            animateElements();
            $(window).scroll(animateElements);
                var reader = new FileReader()
                reader.onload = function() {
                    if(choosen_file_type.indexOf("png") != -1 || choosen_file_type.indexOf("jpeg") != -1 || choosen_file_type.indexOf("jpg") != -1 ||choosen_file_type.indexOf("gif") != -1 || choosen_file_type.indexOf("mp4") != -1 )

                     {
                        previewImg.style.display="block";
                        previewImg.setAttribute("src",reader.result);
                    } else 
                    {
                        document.getElementsByClassName('easychat-upload-file-container')[0].style.display = "inline-flex"
                    }
                };


                reader.readAsDataURL(el.files[0]);
               
                    // document.getElementById("easychat-dragdropAlertMsg__XPS").innerHTML = file_name_mod + ' <div onclick="remove_file_from_attachment()" class="easychat-dragdropAlertMsgClose__XPS" style="color: ' + BOT_THEME_COLOR + ';">' + get_cross_button_svg() + '</div>'
               
                
                // document.getElementById("easychat-dragdropUploadBTN__XPS").style.display = "inline-block"
                // document.getElementsByClassName("easychat-dragdropafterSelect__XPS")[0].style.display = "flex"
                document.getElementsByClassName("easychat-dragdropMsg__XPS")[length_of_attachments - 1].style.display = "none"
                document.getElementsByClassName("easychat-dragdrop__XPS")[length_of_attachments -1].style.display = "none"
                scroll_to_bottom()
            } else {
               
                document.getElementById("easychat-dragdropAlertMsg__XPS").style.display = "inline-flex"
                document.getElementById("easychat-dragdropAlertMsg__XPS").style.fontSize = "unset"
                document.getElementById("easychat-dragdropAlertMsg__XPS").style.color = "red"
                document.getElementById("easychat-dragdropAlertMsg__XPS").textContent = "Please Select file < " + max_file_size_allowed + "MB*"
                scroll_to_bottom()
            }
        } else {
            document.getElementById("easychat-dragdropAlertMsg__XPS").style.display = "inline-block"
            document.getElementById("easychat-dragdropAlertMsg__XPS").style.fontSize = "unset"
            document.getElementById("easychat-dragdropAlertMsg__XPS").style.color = "red"
            document.getElementById("easychat-dragdropAlertMsg__XPS").textContent = "Please Select Correct File Type*"
        }
    } else {
        document.getElementById("easychat-dragdropAlertMsg__XPS").style.display = "inline-flex"
        document.getElementById("easychat-dragdropAlertMsg__XPS").style.fontSize = "unset"
        document.getElementById("easychat-dragdropAlertMsg__XPS").style.color = "red"
        document.getElementById("easychat-dragdropAlertMsg__XPS").textContent = "No File Selected*"
        document.getElementById("easychat-dragdropUploadBTN__XPS").style.display = "none"
    }
}
function stop_uploading_attachment(){
    if(current_request_xhttp != null && current_request_xhttp != undefined)
    current_request_xhttp.abort();
    handleCancelClick()
    current_request_xhttp = null
}

function add_attachment_loader_html() {
    var html= '<div class="upload-file-icon-div">\
            <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">\
                <path d="M0.600098 3.79995C0.600098 2.84517 0.979382 1.9295 1.65451 1.25437C2.32964 0.579236 3.24532 0.199951 4.2001 0.199951H13.2001L16.8001 3.79995H25.8001C26.7549 3.79995 27.6705 4.17924 28.3457 4.85437C29.0208 5.5295 29.4001 6.44517 29.4001 7.39995V18.2C29.4001 19.1547 29.0208 20.0704 28.3457 20.7455C27.6705 21.4207 26.7549 21.8 25.8001 21.8H4.2001C3.24532 21.8 2.32964 21.4207 1.65451 20.7455C0.979382 20.0704 0.600098 19.1547 0.600098 18.2V3.79995Z" fill="#DBE8FB"/>\
                </svg>\
        </div>\
        <div class="upload-file-name-div">\
            adli-wahid-3-QB... .jpg\
        </div>\
        <div class="upload-file-loader">\
            <div class="progressbar" data-animate="false">\
                <button class="delete-choose-file" onclick="stop_uploading_attachment()">\
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <g clip-path="url(#clip0)">\
                        <g filter="url(#filter0_d)">\
                        <path d="M9.23483 3.47016C9.38128 3.32372 9.38128 3.08628 9.23483 2.93983L9.06016 2.76516C8.91372 2.61872 8.67628 2.61872 8.52983 2.76516L6.26516 5.02983C6.11872 5.17628 5.88128 5.17628 5.73483 5.02983L3.47016 2.76516C3.32372 2.61872 3.08628 2.61872 2.93983 2.76517L2.76516 2.93983C2.61872 3.08628 2.61872 3.32372 2.76517 3.47016L5.02983 5.73483C5.17628 5.88128 5.17628 6.11872 5.02983 6.26516L2.76516 8.52983C2.61872 8.67628 2.61872 8.91372 2.76516 9.06016L2.93983 9.23483C3.08628 9.38128 3.32372 9.38128 3.47017 9.23483L5.73483 6.97016C5.88128 6.82372 6.11872 6.82372 6.26516 6.97016L8.52983 9.23483C8.67628 9.38128 8.91372 9.38128 9.06016 9.23483L9.23483 9.06016C9.38128 8.91372 9.38128 8.67628 9.23483 8.52983L6.97016 6.26516C6.82372 6.11872 6.82372 5.88128 6.97016 5.73483L9.23483 3.47016Z" fill="#979797"/>\
                        </g>\
                        </g>\
                        <defs>\
                        <filter id="filter0_d" x="-5.34473" y="-5.34473" width="30.6893" height="30.6893" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>\
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>\
                        <feOffset dx="4" dy="4"/>\
                        <feGaussianBlur stdDeviation="6"/>\
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"/>\
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\
                        </filter>\
                        <clipPath id="clip0">\
                        <rect width="12" height="12" fill="white"/>\
                        </clipPath>\
                        </defs>\
                        </svg>\
                </button>\
                <div class="circle" style="display: none" data-percent="0">\
                     <div style="color:'+BOT_THEME_COLOR+'" class="circle-progress-value"></div>\
                </div>\
            </div>\
        </div>\
'
                return html
}

function disable_previous_recomendations(){
    let list_of_el = document.getElementsByClassName("easychat-recommendation-wrapper");
    var last_recomendation_wrapper = list_of_el[list_of_el.length - 1]
    if ((typeof last_recomendation_wrapper !== 'undefined')) {
        for (var i = 0; i < last_recomendation_wrapper.children.length; i++) {
            if (last_recomendation_wrapper.children[i].hasAttribute("onclick")) { last_recomendation_wrapper.children[i].removeAttribute("onclick") }
            if (last_recomendation_wrapper.children[i].hasAttribute("onmouseout")) { last_recomendation_wrapper.children[i].removeAttribute("onmouseout") }
            if (last_recomendation_wrapper.children[i].hasAttribute("onmouseover")) { last_recomendation_wrapper.children[i].removeAttribute("onmouseover") }
            last_recomendation_wrapper.children[i].style.opacity = 0.5;
            last_recomendation_wrapper.children[i].style.cursor = "default";
        }
    }
}
function save_attachment_to_data_models(el, is_flow_ended, choosen_file_type) {
    disable_user_input();
    var attachment_data = document.querySelector('#easychat-uploadfile__XPS').files[0]

    document.getElementsByClassName('easychat-upload-file-container')[0].style.display = "inline-flex"

    previewImgSubmitBtnDiv.style.display="none";
    
    previewImg.style.display = "none"
    last_chosen_file_type = choosen_file_type
    reader = new FileReader();
    reader.onloadend = function () {
        var b64 = reader.result.split(",")[1];
        var file_name = global_file_name[0]
        var file_ext = global_file_name[1]
        setTimeout(function () {
         
            // document.getElementsByClassName("easychat-dragdropContainer__XPS")[0].remove()
            // append_bot_text_response("Uploading " + file_name)
            attached_file_src = b64
            file_extension = file_ext
            // if(!is_flow_ended){
            send_message_to_server("attachment", user_id, bot_id, bot_name, "");
            // }
            
            disable_previous_recomendations()
            
        }, 1000);
    };
    reader.readAsDataURL(attachment_data);
    change_is_flow_ended_variable = false
}


/*
// We are know using different method for stoing the file -> save_attachment_to_data_models()
function upload_attachment_to_server(el,is_flow_ended){
    var formData = new FormData();
    var upload_attachment_data = document.querySelector('#easychat-uploadfile__XPS').files[0]
    formData.append("upload_attachment", upload_attachment_data);
    document.getElementById("easychat-dragdropbottyping-loader").style.display = "inline-block"
    var xhttp = new XMLHttpRequest();
    var params = formData;
    xhttp.open("POST", "/chat/upload-attachment/", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            if(response.status==200){
                            attached_file_src = response.src;
                    var file_name = document.getElementById("easychat-dragdropAlertMsg__XPS").childNodes[0].textContent
                    setTimeout(function(){
                    document.getElementById("easychat-dragdropbottyping-loader").style.display = "none"
                    document.getElementsByClassName("easychat-dragdropContainer__XPS")[0].remove()
                    append_bot_text_response(file_name+" has been successfully uploaded.")
                    if(!is_flow_ended){
                        send_message_to_server("attachment", user_id, bot_id, bot_name, "");
                    }
                    }, 1000);
            }
            else{
                document.getElementById("easychat-dragdropUploadBTN__XPS").style.display = "none"
                setTimeout(function(){
                    document.getElementById("easychat-dragdropbottyping-loader").style.display = "none"
                    document.getElementById("easychat-dragdropAlertMsg__XPS").style.color = "red"
                    document.getElementById("easychat-dragdropAlertMsg__XPS").innerHTML = "Unable to Upload"
                    setTimeout(function(){
                        remove_file_from_attachment();
                        }, 1000);
                }, 1000);
            }
        }
    }
    xhttp.send(params);
}*/

function remove_file_from_attachment() {
    document.getElementById("easychat-dragdropAlertMsg__XPS").innerHTML = ""
    document.getElementById("easychat-uploadfile__XPS").value = ""
    document.getElementById("easychat-dragdropUploadBTN__XPS").style.display = "none"
    document.getElementById("easychat-dragdropAlertMsg__XPS").style.display = "none"
    document.getElementsByClassName("easychat-dragdropMsg__XPS")[0].style.display = "flex"
    document.getElementsByClassName("easychat-dragdrop__XPS")[0].style.display = "block"
    document.getElementsByClassName("easychat-dragdropafterSelect__XPS")[0].style.backgroundColor = "unset"
    document.getElementsByClassName("easychat-dragdropafterSelect__XPS")[0].style.padding = "0"
    document.getElementsByClassName("easychat-dragdropafterSelect__XPS")[0].style.boxShadow = "unset"
    document.getElementsByClassName("easychat-dragdropafterSelect__XPS")[0].style.borderRadius = "unset"
    document.getElementsByClassName("easychat-dragdropafterSelect__XPS")[0].style.display = "none"
}


function append_bot_recommendation(recommendations_list) {
    var is_recommendation_menu = get_cookie("is_recommendation_menu")
    var recommendations_html = '';

    if (is_recommendation_menu == "true") {
        recommendations_html = '<div class="easychat-recommendation-wrapper-menu"  align="left">';
        for (var i = 0; i < recommendations_list.length; i++) {
            var rec_name = recommendations_list[i].name ? recommendations_list[i].name : recommendations_list[i];

            if (EASYCHAT_BOT_THEME == "theme_2") {
                recommendations_html += "<div class=\"easychat-recommendation-menu\"  style=\"border: 0.05em solid " + BOT_THEME_COLOR + ";background-color: " + BOT_THEME_COLOR + "\" data-id=" + recommendations_list[i].id + " onclick=\"send_selected_recommendation(this)\">" + rec_name + "</div>";

            } else {
                recommendations_html += "<div class=\"easychat-recommendation-menu\" onmouseover='custom_button_change(this)' onmouseout='custom_button_change_normal(this)' style=\"border: 0.05em solid " + BOT_THEME_COLOR + ";color: " + BOT_THEME_COLOR + "\" data-id=" + recommendations_list[i].id + " onclick=\"send_selected_recommendation(this)\">" + rec_name + "</div>";
            }

            if (EASYCHAT_BOT_THEME == "theme_1" && i < recommendations_list.length - 1) {
                recommendations_html += '<hr class = "recommendations-menu-border">';
            }
        }
        recommendations_html += "</div>";

    } else {
        recommendations_html = '<div class="easychat-recommendation-wrapper"  align="left">';

        for (var i = 0; i < recommendations_list.length; i++) {
            var rec_name = recommendations_list[i].name ? recommendations_list[i].name : recommendations_list[i];

            if (EASYCHAT_BOT_THEME == "theme_2") {
                recommendations_html += "<div class=\"easychat-recommendation\"  style=\"border: 0.05em solid " + BOT_THEME_COLOR + ";background-color: " + BOT_THEME_COLOR + "\" data-id=" + recommendations_list[i].id + " onclick=\"send_selected_recommendation(this)\">" + rec_name + "</div>";

            } else {
                recommendations_html += "<div class=\"easychat-recommendation\" onmouseover='custom_button_change(this)' onmouseout='custom_button_change_normal(this)' style=\"border: 0.05em solid " + BOT_THEME_COLOR + ";color: " + BOT_THEME_COLOR + "\" data-id=" + recommendations_list[i].id + " onclick=\"send_selected_recommendation(this)\">" + rec_name + "</div>";
            }
        }


        recommendations_html += "</div>";
    }
    document.getElementById("easychat-chat-container").innerHTML += recommendations_html;
    try {
        element_response = document.querySelectorAll(".easychat-recommendation-wrapper-menu")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight
    } catch (err) {
        element_response = document.querySelectorAll(".easychat-recommendation-wrapper")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight
    }
    resize_chabot_window();
}

function append_bot_initial_questions(recommendations_list) {
    var recommendations_html = '<div class="easychat-initial-question-wrapper" align="left"><h6>Suggestions:</h6><div class = "easychat-initial-question-div">';

    for (var i = 0; i < recommendations_list.length; i++) {
        recommendations_html += '<div class="easychat-initial-question" id="border" style = "background: linear-gradient(180deg, ' + BOT_THEME_COLOR_LIGHT + ' 0%, ' + BOT_THEME_COLOR + ' 100%) !important;" data-id='+recommendations_list[i].id+' onclick="send_selected_initial_question(this)"><p id="initial-question' + i + '">' + recommendations_list[i].name + '</p></div>';
    }

    recommendations_html += "</div></div>";

    document.getElementById("easychat-chat-container").innerHTML += recommendations_html;

    for (var recommendation_id = 0; recommendation_id < recommendations_list.length; recommendation_id++) {
        var height = document.getElementById("initial-question" + recommendation_id).offsetHeight;
        var height_parent = document.getElementById('border').clientHeight;
        var fontsize = window.getComputedStyle(document.querySelector('.easychat-initial-question p')).fontSize;
        fontsize = parseFloat(fontsize);
        while (height > height_parent - 35) {
            fontsize = fontsize - 1;
            $("#initial-question" + recommendation_id).css('fontSize', fontsize);
            height = document.getElementById("initial-question" + recommendation_id).offsetHeight;
        }
    }
    resize_chabot_window();
}

function append_bot_choices(choices_list) {
    var choices_html = '<div class="easychat-choices-wrapper">';
    for (var i = 0; i < choices_list.length; i++) {
        var display = choices_list[i]["display"];
        var value = choices_list[i]["value"];
        if (EASYCHAT_BOT_THEME == "theme_2") {
            choices_html += '<button class="easychat-choices" onmouseover="custom_button_change(this)" onmouseout="custom_button_change_normal(this)" style=\"border: 0.05em solid ' + BOT_THEME_COLOR + ';background-color: ' + BOT_THEME_COLOR + '\" value="' + value + '" onclick="send_selected_choice(this)">' + display + '</button>';

        } else {
            choices_html += '<button class="easychat-choices" onmouseover="custom_button_change(this)" onmouseout="custom_button_change_normal(this)" style=\"border: 0.05em solid ' + BOT_THEME_COLOR + ';color: ' + BOT_THEME_COLOR + '\" value="' + value + '" onclick="send_selected_choice(this)">' + display + '</button>';
        }
    }
    choices_html += "</div>";
    document.getElementById("easychat-chat-container").innerHTML += choices_html;
    element_response = document.querySelectorAll(".easychat-choices-wrapper")
    element_response_previous_height += element_response[element_response.length - 1].clientHeight
}

function append_feedback_btns(feedback_id) {
    let el = document.getElementById("easychat-chat-container").lastChild.lastChild;
    let is_bot_icon_width_required = true;
    let paddingRight = '10px';

    try {
        if (el.classList.contains('easychat-datepicker-div') || el.classList.contains('easychat-timepicker-div')) {
            is_bot_icon_width_required = false;
        }

        if (el.classList.contains('easychat-recommendation') || el.classList.contains('easychat-datepicker-div') || el.classList.contains('easychat-timepicker-div')) {
            el = el.parentElement;
        }

        if (el.parentElement.classList.contains('easychat-range-slider-container')) {
            paddingRight = '6em';
        } else if (el.classList.contains('easychat-bot-table')) {
            paddingRight = '2em';
        }
    } catch (err) { 
        console.log("class error "+err)
    }

    let el_style;
    const bot_icon_width = 35;
    try {
        el_style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
    } catch (err) {
        el = el.parentElement;
        el_style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
    }

    let width = parseInt(el_style.width)
    if (EASYCHAT_BOT_THEME == "theme_2" ) {
        is_bot_icon_width_required = false;
    }
    if (is_bot_icon_width_required) {
        width += bot_icon_width;
    }

    if (EASYCHAT_BOT_THEME == "theme_1" || EASYCHAT_BOT_THEME == "theme_2") {
        var choices_html = '<div class="easychat-feedback-wrapper" style = "width:' + width + 'px; padding-right: ' + paddingRight + '">\
        <div id = "thumbs-up" onmouseover="change_thumbs_color(this)" onmouseout="change_thumbs_color_normal(this)" onclick="easychat_send_feedback_msg(this,' + feedback_id + ',1,\'\')" style = "margin: 10px;">\
        <svg style = "pointer-events: none;" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">\
        <ellipse id="thumbs-up-part-1" cx="19.5" cy="19.5" rx="18.5" ry="18.5" fill="white" stroke="#BABABA" stroke-width="2" ></ellipse>\
        <g clip-path="url(#clip0)">\
        <path id="thumbs-up-part-2" d="M13.9383 18.825C13.1345 18.825 12.48 19.4795 12.48 20.2833V24.9499C12.48 25.7538 13.1345 26.4083 13.9383 26.4083H15.6883C16.0167 26.4083 16.3189 26.2974 16.5633 26.1131V18.825H13.9383Z" fill="#BABABA"/>\
        <path id="thumbs-up-part-3" d="M26.4799 21.0125C26.4799 20.662 26.3411 20.3353 26.1002 20.0943C26.3726 19.7963 26.5114 19.3967 26.4735 18.9808C26.4053 18.2393 25.7373 17.6583 24.9522 17.6583H21.3489C21.5274 17.1164 21.8133 16.123 21.8133 15.325C21.8133 14.0598 20.7382 12.9917 20.0633 12.9917C19.4572 12.9917 19.0243 13.3329 19.0057 13.3469C18.9369 13.4024 18.8966 13.4864 18.8966 13.575V15.5531L17.2166 19.1925L17.1466 19.2281V25.4803C17.6214 25.7043 18.2223 25.825 18.6049 25.825H23.9594C24.5946 25.825 25.1505 25.3968 25.2812 24.806C25.3483 24.502 25.3092 24.1958 25.1756 23.9298C25.6067 23.7128 25.8966 23.2688 25.8966 22.7625C25.8966 22.556 25.8494 22.3583 25.7595 22.1792C26.1906 21.9622 26.4799 21.5183 26.4799 21.0125Z" fill="#BABABA"/>\
        </g>\
        <defs>\
        <clipPath id="clip0">\
        <rect width="14" height="14" fill="white" transform="translate(12.48 12.7)"/>\
        </clipPath>\
        </defs>\
        </svg>\
        </div>\
        <div id = "thumbs-down" onmouseover="change_thumbs_color(this)" onmouseout="change_thumbs_color_normal(this)" onclick="easychat_send_feedback_msg(this,' + feedback_id + ',-1,\'\')" style = "margin: 10px 0px 10px 10px;">\
        <svg style = "pointer-events: none;" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">\
        <ellipse cx="19.5" cy="19.5" rx="19.5" ry="19.5" fill="white"></ellipse>\
        <ellipse id="thumbs-down-part-1" cx="19.5" cy="19.5" rx="18.5" ry="18.5" stroke="#BABABA" stroke-width="2"></ellipse>\
        <path id="thumbs-down-part-2" d="M25.5417 20.875C26.3455 20.875 27 20.2205 27 19.4167V14.75C27 13.9462 26.3455 13.2917 25.5417 13.2917H23.7917C23.4633 13.2917 23.1611 13.4025 22.9167 13.5869V20.875H25.5417Z" fill="#CFCFCF"/>\
        <path id="thumbs-down-part-3" d="M13 18.6874C13 19.038 13.1389 19.3647 13.3798 19.6056C13.1074 19.9037 12.9685 20.3033 13.0065 20.7192C13.0747 21.4606 13.7426 22.0416 14.5278 22.0416H18.131C17.9525 22.5835 17.6667 23.5769 17.6667 24.3749C17.6667 25.6402 18.7418 26.7083 19.4167 26.7083C20.0228 26.7083 20.4557 26.367 20.4743 26.353C20.5431 26.2976 20.5834 26.2136 20.5834 26.1249V24.1469L22.2634 20.5074L22.3334 20.4719V14.2197C21.8585 13.9957 21.2577 13.8749 20.875 13.8749H15.5206C14.8854 13.8749 14.3294 14.3031 14.1988 14.894C14.1317 15.1979 14.1708 15.5042 14.3044 15.7702C13.8733 15.9872 13.5834 16.4311 13.5834 16.9374C13.5834 17.1439 13.6306 17.3417 13.7204 17.5208C13.2894 17.7378 13 18.1817 13 18.6874Z" fill="#CFCFCF"/>\
        </svg>\
        </div>\
    </div>';
    } else {
        var choices_html = '<div class="easychat-choices-wrapper">\
        <button class="easychat-choices" onmouseover="custom_button_change(this)" onmouseout="custom_button_change_normal(this)" style=\"border: 0.05em solid ' + BOT_THEME_COLOR + ';color: ' + BOT_THEME_COLOR + '\" onclick="easychat_send_feedback_msg(this,' + feedback_id + ',1,\'\')"><img src="/static/EasyChatApp/img/thumbs-up-filled.png" style="height:2em;"></button>\
        <button class="easychat-choices" onmouseover="custom_button_change(this)" onmouseout="custom_button_change_normal(this)" style=\"border: 0.05em solid ' + BOT_THEME_COLOR + ';color: ' + BOT_THEME_COLOR + '\" onclick="easychat_send_feedback_msg(this,' + feedback_id + ',-1,\'\')"><img src="/static/EasyChatApp/img/thumbs-down-filled.png" style="height:2em;"></button>\
    </div>';
    }


    document.getElementById("easychat-chat-container").innerHTML += choices_html;

    if (EASYCHAT_BOT_THEME == "theme_1" || EASYCHAT_BOT_THEME == "theme_2") {
        try {
            element_response = document.querySelectorAll(".easychat-feedback-wrapper")
        } catch (err) { }
    } else {
        try {
            element_response = document.querySelectorAll(".easychat-choices-wrapper")
        } catch (err) { }
    }
    element_response_previous_height += element_response[element_response.length - 1].clientHeight
}

function change_thumbs_color(elem) {
    elem.style.cursor = "pointer";
    if (elem.id == "thumbs-up") {
        elem.innerHTML = '<svg style = "pointer-events: none;" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <ellipse id="thumbs-up-part-1" cx="19.5" cy="19.5" rx="18.5" ry="18.5" fill="white" stroke="' + BOT_THEME_COLOR + '" stroke-width="2" ></ellipse>\
                        <g clip-path="url(#clip0)">\
                        <path id="thumbs-up-part-2" d="M13.9383 18.825C13.1345 18.825 12.48 19.4795 12.48 20.2833V24.9499C12.48 25.7538 13.1345 26.4083 13.9383 26.4083H15.6883C16.0167 26.4083 16.3189 26.2974 16.5633 26.1131V18.825H13.9383Z" fill="' + BOT_THEME_COLOR + '"/>\
                        <path id="thumbs-up-part-3" d="M26.4799 21.0125C26.4799 20.662 26.3411 20.3353 26.1002 20.0943C26.3726 19.7963 26.5114 19.3967 26.4735 18.9808C26.4053 18.2393 25.7373 17.6583 24.9522 17.6583H21.3489C21.5274 17.1164 21.8133 16.123 21.8133 15.325C21.8133 14.0598 20.7382 12.9917 20.0633 12.9917C19.4572 12.9917 19.0243 13.3329 19.0057 13.3469C18.9369 13.4024 18.8966 13.4864 18.8966 13.575V15.5531L17.2166 19.1925L17.1466 19.2281V25.4803C17.6214 25.7043 18.2223 25.825 18.6049 25.825H23.9594C24.5946 25.825 25.1505 25.3968 25.2812 24.806C25.3483 24.502 25.3092 24.1958 25.1756 23.9298C25.6067 23.7128 25.8966 23.2688 25.8966 22.7625C25.8966 22.556 25.8494 22.3583 25.7595 22.1792C26.1906 21.9622 26.4799 21.5183 26.4799 21.0125Z" fill="' + BOT_THEME_COLOR + '"/>\
                        </g>\
                        <defs>\
                        <clipPath id="clip0">\
                        <rect width="14" height="14" fill="white" transform="translate(12.48 12.7)"/>\
                        </clipPath>\
                        </defs>\
                        </svg>';
    } else {
        elem.innerHTML = '<svg style = "pointer-events: none;" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <ellipse cx="19.5" cy="19.5" rx="19.5" ry="19.5" fill="white"></ellipse>\
                        <ellipse id="thumbs-down-part-1" cx="19.5" cy="19.5" rx="18.5" ry="18.5" stroke="' + BOT_THEME_COLOR + '" stroke-width="2"></ellipse>\
                        <path id="thumbs-down-part-2" d="M25.5417 20.875C26.3455 20.875 27 20.2205 27 19.4167V14.75C27 13.9462 26.3455 13.2917 25.5417 13.2917H23.7917C23.4633 13.2917 23.1611 13.4025 22.9167 13.5869V20.875H25.5417Z" fill="' + BOT_THEME_COLOR + '"/>\
                        <path id="thumbs-down-part-3" d="M13 18.6874C13 19.038 13.1389 19.3647 13.3798 19.6056C13.1074 19.9037 12.9685 20.3033 13.0065 20.7192C13.0747 21.4606 13.7426 22.0416 14.5278 22.0416H18.131C17.9525 22.5835 17.6667 23.5769 17.6667 24.3749C17.6667 25.6402 18.7418 26.7083 19.4167 26.7083C20.0228 26.7083 20.4557 26.367 20.4743 26.353C20.5431 26.2976 20.5834 26.2136 20.5834 26.1249V24.1469L22.2634 20.5074L22.3334 20.4719V14.2197C21.8585 13.9957 21.2577 13.8749 20.875 13.8749H15.5206C14.8854 13.8749 14.3294 14.3031 14.1988 14.894C14.1317 15.1979 14.1708 15.5042 14.3044 15.7702C13.8733 15.9872 13.5834 16.4311 13.5834 16.9374C13.5834 17.1439 13.6306 17.3417 13.7204 17.5208C13.2894 17.7378 13 18.1817 13 18.6874Z" fill="' + BOT_THEME_COLOR + '"/>\
                        </svg>';
    }
}

function change_thumbs_color_normal(elem) {
    if (elem.getAttribute("easychat-feedback-selected") == "true") { return; }

    if (elem.id == "thumbs-up") {
        elem.innerHTML = '<svg style = "pointer-events: none;" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <ellipse id="thumbs-up-part-1" cx="19.5" cy="19.5" rx="18.5" ry="18.5" fill="white" stroke="#BABABA" stroke-width="2" ></ellipse>\
                        <g clip-path="url(#clip0)">\
                        <path id="thumbs-up-part-2" d="M13.9383 18.825C13.1345 18.825 12.48 19.4795 12.48 20.2833V24.9499C12.48 25.7538 13.1345 26.4083 13.9383 26.4083H15.6883C16.0167 26.4083 16.3189 26.2974 16.5633 26.1131V18.825H13.9383Z" fill="#BABABA"/>\
                        <path id="thumbs-up-part-3" d="M26.4799 21.0125C26.4799 20.662 26.3411 20.3353 26.1002 20.0943C26.3726 19.7963 26.5114 19.3967 26.4735 18.9808C26.4053 18.2393 25.7373 17.6583 24.9522 17.6583H21.3489C21.5274 17.1164 21.8133 16.123 21.8133 15.325C21.8133 14.0598 20.7382 12.9917 20.0633 12.9917C19.4572 12.9917 19.0243 13.3329 19.0057 13.3469C18.9369 13.4024 18.8966 13.4864 18.8966 13.575V15.5531L17.2166 19.1925L17.1466 19.2281V25.4803C17.6214 25.7043 18.2223 25.825 18.6049 25.825H23.9594C24.5946 25.825 25.1505 25.3968 25.2812 24.806C25.3483 24.502 25.3092 24.1958 25.1756 23.9298C25.6067 23.7128 25.8966 23.2688 25.8966 22.7625C25.8966 22.556 25.8494 22.3583 25.7595 22.1792C26.1906 21.9622 26.4799 21.5183 26.4799 21.0125Z" fill="#BABABA"/>\
                        </g>\
                        <defs>\
                        <clipPath id="clip0">\
                        <rect width="14" height="14" fill="white" transform="translate(12.48 12.7)"/>\
                        </clipPath>\
                        </defs>\
                        </svg>';
    } else {
        elem.innerHTML = '<svg style = "pointer-events: none;" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <ellipse cx="19.5" cy="19.5" rx="19.5" ry="19.5" fill="white"></ellipse>\
                        <ellipse id="thumbs-down-part-1" cx="19.5" cy="19.5" rx="18.5" ry="18.5" stroke="#BABABA" stroke-width="2"></ellipse>\
                        <path id="thumbs-down-part-2" d="M25.5417 20.875C26.3455 20.875 27 20.2205 27 19.4167V14.75C27 13.9462 26.3455 13.2917 25.5417 13.2917H23.7917C23.4633 13.2917 23.1611 13.4025 22.9167 13.5869V20.875H25.5417Z" fill="#CFCFCF"/>\
                        <path id="thumbs-down-part-3" d="M13 18.6874C13 19.038 13.1389 19.3647 13.3798 19.6056C13.1074 19.9037 12.9685 20.3033 13.0065 20.7192C13.0747 21.4606 13.7426 22.0416 14.5278 22.0416H18.131C17.9525 22.5835 17.6667 23.5769 17.6667 24.3749C17.6667 25.6402 18.7418 26.7083 19.4167 26.7083C20.0228 26.7083 20.4557 26.367 20.4743 26.353C20.5431 26.2976 20.5834 26.2136 20.5834 26.1249V24.1469L22.2634 20.5074L22.3334 20.4719V14.2197C21.8585 13.9957 21.2577 13.8749 20.875 13.8749H15.5206C14.8854 13.8749 14.3294 14.3031 14.1988 14.894C14.1317 15.1979 14.1708 15.5042 14.3044 15.7702C13.8733 15.9872 13.5834 16.4311 13.5834 16.9374C13.5834 17.1439 13.6306 17.3417 13.7204 17.5208C13.2894 17.7378 13 18.1817 13 18.6874Z" fill="#CFCFCF"/>\
                        </svg>';
    }
}

function easychat_send_feedback_msg(element, feedback_id, feedback_type, feedback_cmt) {
    var elements = document.getElementsByClassName("easychat-intent-feedback-wrapper");
    try {
        for (var i = 0; i < elements.length; i++) {
            elements[i].parentNode.removeChild(elements[elements.length - 1]);
        }
    } catch (err) { }

    for (var i = 0; i < element.parentElement.children.length; i++) {
        element.parentElement.children[i].style.backgroundColor = "white";
        element.parentElement.children[i].style.color = BOT_THEME_COLOR;
        element.parentElement.children[i].style.borderColor = BOT_THEME_COLOR;
        element.parentElement.children[i].removeAttribute("easychat-feedback-selected");
    }

    if (EASYCHAT_BOT_THEME == "theme_1" || EASYCHAT_BOT_THEME == "theme_2") {
        if (element.id == "thumbs-up") {
            element.innerHTML = '<svg style = "pointer-events: none;" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <ellipse id="thumbs-up-part-1" cx="19.5" cy="19.5" rx="18.5" ry="18.5" fill="white" stroke="' + BOT_THEME_COLOR + '" stroke-width="2" ></ellipse>\
                            <g clip-path="url(#clip0)">\
                            <path id="thumbs-up-part-2" d="M13.9383 18.825C13.1345 18.825 12.48 19.4795 12.48 20.2833V24.9499C12.48 25.7538 13.1345 26.4083 13.9383 26.4083H15.6883C16.0167 26.4083 16.3189 26.2974 16.5633 26.1131V18.825H13.9383Z" fill="' + BOT_THEME_COLOR + '"/>\
                            <path id="thumbs-up-part-3" d="M26.4799 21.0125C26.4799 20.662 26.3411 20.3353 26.1002 20.0943C26.3726 19.7963 26.5114 19.3967 26.4735 18.9808C26.4053 18.2393 25.7373 17.6583 24.9522 17.6583H21.3489C21.5274 17.1164 21.8133 16.123 21.8133 15.325C21.8133 14.0598 20.7382 12.9917 20.0633 12.9917C19.4572 12.9917 19.0243 13.3329 19.0057 13.3469C18.9369 13.4024 18.8966 13.4864 18.8966 13.575V15.5531L17.2166 19.1925L17.1466 19.2281V25.4803C17.6214 25.7043 18.2223 25.825 18.6049 25.825H23.9594C24.5946 25.825 25.1505 25.3968 25.2812 24.806C25.3483 24.502 25.3092 24.1958 25.1756 23.9298C25.6067 23.7128 25.8966 23.2688 25.8966 22.7625C25.8966 22.556 25.8494 22.3583 25.7595 22.1792C26.1906 21.9622 26.4799 21.5183 26.4799 21.0125Z" fill="' + BOT_THEME_COLOR + '"/>\
                            </g>\
                            <defs>\
                            <clipPath id="clip0">\
                            <rect width="14" height="14" fill="white" transform="translate(12.48 12.7)"/>\
                            </clipPath>\
                            </defs>\
                            </svg>';

            document.getElementById('thumbs-down-part-1').style.stroke = '#BABABA';
            document.getElementById('thumbs-down-part-2').style.fill = '#CFCFCF';
            document.getElementById('thumbs-down-part-3').style.fill = '#CFCFCF';
        } else {
            element.innerHTML = '<svg style = "pointer-events: none;" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <ellipse cx="19.5" cy="19.5" rx="19.5" ry="19.5" fill="white"></ellipse>\
                            <ellipse id="thumbs-down-part-1" cx="19.5" cy="19.5" rx="18.5" ry="18.5" stroke="' + BOT_THEME_COLOR + '" stroke-width="2"></ellipse>\
                            <path id="thumbs-down-part-2" d="M25.5417 20.875C26.3455 20.875 27 20.2205 27 19.4167V14.75C27 13.9462 26.3455 13.2917 25.5417 13.2917H23.7917C23.4633 13.2917 23.1611 13.4025 22.9167 13.5869V20.875H25.5417Z" fill="' + BOT_THEME_COLOR + '"/>\
                            <path id="thumbs-down-part-3" d="M13 18.6874C13 19.038 13.1389 19.3647 13.3798 19.6056C13.1074 19.9037 12.9685 20.3033 13.0065 20.7192C13.0747 21.4606 13.7426 22.0416 14.5278 22.0416H18.131C17.9525 22.5835 17.6667 23.5769 17.6667 24.3749C17.6667 25.6402 18.7418 26.7083 19.4167 26.7083C20.0228 26.7083 20.4557 26.367 20.4743 26.353C20.5431 26.2976 20.5834 26.2136 20.5834 26.1249V24.1469L22.2634 20.5074L22.3334 20.4719V14.2197C21.8585 13.9957 21.2577 13.8749 20.875 13.8749H15.5206C14.8854 13.8749 14.3294 14.3031 14.1988 14.894C14.1317 15.1979 14.1708 15.5042 14.3044 15.7702C13.8733 15.9872 13.5834 16.4311 13.5834 16.9374C13.5834 17.1439 13.6306 17.3417 13.7204 17.5208C13.2894 17.7378 13 18.1817 13 18.6874Z" fill="' + BOT_THEME_COLOR + '"/>\
                            </svg>';

            document.getElementById('thumbs-up-part-1').style.stroke = '#BABABA';
            document.getElementById('thumbs-up-part-2').style.fill = '#CFCFCF';
            document.getElementById('thumbs-up-part-3').style.fill = '#CFCFCF';
        }
        element.setAttribute("easychat-feedback-selected", "true");
    } else {
        element.style.backgroundColor = BOT_THEME_COLOR;
        element.style.color = "white";
        element.style.borderColor = BOT_THEME_COLOR;
        element.setAttribute("easychat-feedback-selected", "true");
    }

    for (var i = 0; i < element.parentElement.children.length; i++) {
        //if(element.parentElement.children[i].hasAttribute("onclick")){element.parentElement.children[i].removeAttribute("onclick")}
        //if(element.parentElement.children[i].hasAttribute("onmouseout")){element.parentElement.children[i].removeAttribute("onmouseout")}
        //if(element.parentElement.children[i].hasAttribute("onmouseover")){element.parentElement.children[i].removeAttribute("onmouseover")}
    }

    easychat_send_feedback_message_to_server(feedback_id, feedback_type, feedback_cmt);

    var html = '<div class="easychat-intent-feedback-wrapper">\
                    <div class="easychat-intent-feedback-cmt-wrapper easychat-bot-message easychat-bot-message-line">\
                    <p style="margin: 0;\
    padding: 0.4em 0.3em 0.4em 0.6em;\
    max-height: 300px;\
    height: unset;\
    overflow-y: hidden;\
    transition: max-height 0.2s ease;"\
    id="feedback-provide-title"\
    >\
                    ' + FEEDBACK_TEXT + ':\
                    </p>\
                    <p style="margin: 0;\
    padding: 0.1em 0.3em 0.4em 0.6em;\
    max-height: 300px;\
    height: unset;\
    overflow-y: hidden;\
    transition: max-height 0.2s ease;\
    display:none;\
    color:red"\
    id="feedback-empty-warning"\
    >\
                    ' + FEEDBACK_ERROR_TEXT + '\
                    </p>\ '

    if (feedback_type == 1) {
        html += '<p\
        id = "positive-feedback-options"\
        > \
    <label><input type="radio" name="feedback-radio" value="Easy Communication" onclick="feedback_radio_checked()"><span>' + POSITIVE_FEEDBACK_1 + '</span></label> <br> \
    <label><input type="radio" name="feedback-radio" value="Fully Satisfied" onclick="feedback_radio_checked()"><span>' + POSITIVE_FEEDBACK_2 + '</span></label> <br>\
    <label><input type="radio" name="feedback-radio" value="Quick Response" onclick="feedback_radio_checked()"><span>' + POSITIVE_FEEDBACK_3 + '</span></label> <br>\
    <label><input type="radio" name="feedback-radio" value="Query Resolved Quickly" onclick="feedback_radio_checked()"><span>' + POSITIVE_FEEDBACK_4 + '</span></label> <br>\
    <label><input type="radio" name="feedback-radio" value="Good Experience" onclick="feedback_radio_checked()"><span>' + POSITIVE_FEEDBACK_5 + '</span></label> <br>\
    </p>\
    '
    } else if (feedback_type == -1) {
        html += '<p\
        id = "negative-feedback-options"\
        > \
        <label><input type="radio" name="feedback-radio" value="Inappropriate Answer," onclick="feedback_radio_checked()"><span>' + NEGATIVE_FEEDBACK_1 + '</span></label> <br> \
        <label><input type="radio" name="feedback-radio" value="Response is slow" onclick="feedback_radio_checked()"><span>' + NEGATIVE_FEEDBACK_2 + '</span></label> <br>\
        <label><input type="radio" name="feedback-radio" value="Need more information" onclick="feedback_radio_checked()"><span>' + NEGATIVE_FEEDBACK_3 + '</span></label> <br>\
        <label><input type="radio" name="feedback-radio" value="I couldn’t find what I was looking for" onclick="feedback_radio_checked()"><span>' + NEGATIVE_FEEDBACK_4 + '</span></label> <br>\
        <label><input type="radio" name="feedback-radio" value="Content is too complicated" onclick="feedback_radio_checked()"><span>' + NEGATIVE_FEEDBACK_5 + '</span></label> <br>\
        </p>\
        '
    }

    html += '<button id ="easychat-intent-level-feedback-submit-button" onclick="easychat_submit_feedback_message_to_server(' + feedback_id + ',' + feedback_type + ')" style="margin: 10px 0;margin-right: 10px;float: right;">\
                    ' + SUBMIT_TEXT + '\
                    </button>\
                </div>\
                </div>'
    document.getElementById("easychat-chat-container").innerHTML += html;
    scroll_to_bottom()
}

function easychat_submit_feedback_message_to_server(feedback_id, feedback_type) {

    if ($("input[name='feedback-radio']:checked").val()) {
        var feedback_cmt = $("input[name='feedback-radio']:checked").val();
        feedback_cmt = feedback_cmt.trim();
        if (feedback_cmt.length == 0) {
            $("#feedback-empty-warning").css("display", "block");
            return;
        } else {
            $("#feedback-empty-warning").css("display", "none");
        }
        var elmnt = document.getElementsByClassName("easychat-intent-feedback-wrapper")[
            document.getElementsByClassName("easychat-intent-feedback-wrapper").length - 1]
        elmnt.setAttribute("feedback_submitted", "true");

        if (EASYCHAT_BOT_THEME == "theme_1" || EASYCHAT_BOT_THEME == "theme_2") {
            elmnt.innerHTML = '<div class="easychat-bot-message easychat-bot-message-line">\
        <p style="margin: 12px 17px 11px 17px;\
        max-height: 300px;\
        height: unset;\
        overflow-y: hidden;\
        transition: max-height 0.2s ease;">\
                        ' + SUCCESS_FEEDBACK_TEXT + '\
                        </p>\
                </div>';
        } else {
            elmnt.innerHTML = '<div class="easychat-intent-feedback-cmt-wrapper easychat-bot-message easychat-bot-message-line">\
        <p style="margin: 0;\
        padding: 0.4em 0.3em 0.4em 0.6em;\
        max-height: 300px;\
        height: unset;\
        overflow-y: hidden;\
        transition: max-height 0.2s ease;">\
                        ' + SUCCESS_FEEDBACK_TEXT + '\
                        </p>\
                </div>';
        }

        //scroll_to_bottom()
        easychat_send_feedback_message_to_server(feedback_id, feedback_type, feedback_cmt);
        element_response = document.querySelectorAll(".easychat-bot-message-line")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight
        try {
            //document.querySelector(".easychat-choices-wrapper").remove();
            var easychat_choices_wrapper_query_selector = document.querySelectorAll(".easychat-choices-wrapper");
            easychat_choices_wrapper_query_selector[easychat_choices_wrapper_query_selector.length - 1].remove()
        } catch (err) { }
        try {
            // document.querySelector(".easychat-feedback-wrapper").remove();
            var easychat_feedback_wrapper_query_selector = document.querySelectorAll(".easychat-feedback-wrapper");
            easychat_feedback_wrapper_query_selector[easychat_feedback_wrapper_query_selector.length - 1].remove()
        } catch (err) { console.log(err) }
    }
    else {
        $("#feedback-empty-warning").css("display", "block");
        scroll_to_bottom();
        return;  
    }

}

function feedback_radio_checked(){
    $("#feedback-empty-warning").css("display", "none");
}

function easychat_send_feedback_message_to_server(feedback_id, feedback_type, feedback_cmt) {
    var json_string = JSON.stringify({
        feedback_id: feedback_id,
        feedback_type: feedback_type,
        feedback_cmt: feedback_cmt
    });
    json_string = encrypt_variable(json_string);
    json_string = encodeURIComponent(json_string);

    var xhttp = new XMLHttpRequest();
    var params = 'json_string=' + json_string
    xhttp.open("POST", EASYCHAT_FEEDBACK_SAVE_URL, true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
        }
    }
    xhttp.send(params);
}
function un_entity(str) {
    return $("<textarea></textarea>").html(str).text();
}

function append_bot_tables(table_list) {
    var empty_tag = true;
    var str
    var tables_html = '<!--<style>table {border-left: 0;border-spacing: 0px;box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);background-color: white;}th,td {    padding: 5px 4px 6px 4px; text-align: left; vertical-align: top;}tr {display: table-row;    vertical-align: inherit;    border-color: inherit;}td {    border-top: 1px solid #000;word-break: break-all;    min-width: 65px;}th {    text-align: center;background-color: #9D1D27;    color: white;}</style>--><div style="margin-top:0.3em;width:100%;display:inline-block;border-radius:10px;overflow:hidden"><table class="easychat-bot-table"><tbody>';
    for (var row_index = 0; row_index < table_list.length; row_index++) {
        tables_html += "<tr>";
        if (row_index == 0) {
            for (var col_index = 0; col_index < table_list[row_index].length; col_index++) {
                 str = un_entity(table_list[row_index][col_index]).trim().replace(/<[^>]*>?/gm, '')
                if(str.trim() != "")
                {  
                    empty_tag = false

                }
                  tables_html += "<th style=background-color:" + BOT_THEME_COLOR + ">" + un_entity(table_list[row_index][col_index]) + "</th>";
            }
        } else {
            for (var col_index = 0; col_index < table_list[row_index].length; col_index++) {
                 str = un_entity(table_list[row_index][col_index]).trim().replace(/<[^>]*>?/gm, '')
                if(str.trim() != "")
                {  
                empty_tag = false
            }
                tables_html += "<td>" + un_entity(table_list[row_index][col_index]) + "</td>";
            }
        }
        tables_html += "</tr>";
    }
    tables_html += '</tbody></table></div>';
    if(empty_tag == false)
    document.getElementById("easychat-chat-container").innerHTML += tables_html;
    element_response = document.querySelectorAll(".easychat-bot-table")
    element_response_previous_height += element_response[element_response.length - 1].clientHeight
}

function append_datepicker(datepicker_list) {
    if (datepicker_list.length > 0) {
        datepicker_container = document.getElementById("easychat-datepicker-container");
        if (datepicker_container != undefined && datepicker_container != null) {
            datepicker_container.remove();
        }

        var datepicker_html = '<div class="easychat-datepicker-container"  align="center" id="easychat-datepicker-container">';
        for (var i = 0; i < datepicker_list.length; i++) {
            datepicker_html += '<div style="width:50%" class="easychat-datepicker-div"><br>\
                ' + datepicker_list[i]["placeholder"] + '<br><p id="datepicker_error_' + i + '"style="color:red;display:none;">Please enter a valid date(dd/mm/yyyy)</p><input type="text" inputmode="none" style="width:83%" name="datepicker" class="easychat-datepicker" id="easychat-datepicker-' + i + '" onchange="append_selected_date_into_user_query(this)" placeholder="' + datepicker_list[i]["placeholder"] + '">\
                </div>';
        }
        datepicker_html += "</div>";

        document.getElementById("easychat-chat-container").innerHTML += datepicker_html;

        setTimeout(function () {
            for (var i = 0; i < datepicker_list.length; i++) {
                $("#easychat-datepicker-" + i).datepicker({
                    showOtherMonths: true,
                    selectOtherMonths: true,
                    showAnim: "clip",
                    format: "dd/mm/yyyy",
                    minDate: "01/01/1900",
                    maxDate: "31/12/2050",
                    changeMonth: true,
                    changeYear: true,
                    yearRange: "1900:2050",
                    regional: "it",
                    minDate: Date.parse("1900-01-01"),
                    maxDate: Date.parse("2100-01-01"),
                    yearRange: "c-90:c+150",
                    autoclose: true,
                    todayHighlight: false,
                    forceParse: false
                });
            }
        }, 200)
        element_response = document.querySelectorAll("#easychat-datepicker-container")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight
    }
}

function append_timepicker(timepicker_list) {
    if (timepicker_list.length > 0) {
        timepicker_container = document.getElementById("easychat-timepicker-container");
        if (timepicker_container != undefined && timepicker_container != null) {
            timepicker_container.remove();
        }

        var timepicker_html = '<div class="easychat-timepicker-container" align="center" id="easychat-timepicker-container">';
        for (var i = 0; i < timepicker_list.length; i++) {
            timepicker_html += '<div style="width:100%" class="easychat-timepicker-div"><br>\
            <input type="text" inputmode="none" name="timepicker" class="easychat-timepicker timepicker" onfocusout="append_selected_time_into_user_query(this)" oninput="append_selected_time_into_user_query(this)" onchange="append_selected_time_into_user_query(this)" id="easychat-timepicker-' + i + '" placeholder="' + timepicker_list[i]["placeholder"] + '">\
            </div>';
        }
        timepicker_html += "</div>";


        setTimeout(function () {
            for (var i = 0; i < timepicker_list.length; i++) {
                $("#easychat-timepicker-" + i).timepicker({
                    timeFormat: 'h:i a',
                    appendTo: 'body',
                    className: null,
                    closeOnWindow: false,
                    disableTextInput: false,
                    disableTimeRanges: [],
                    disableTouchKeyboard: false,
                    durationTime: null,
                    forceRoundTime: false,
                    maxTime: null,
                    minTime: null,
                    noneOption: false,
                    orientation: 'l',
                    scrollDefault: null,
                    selectOnBlur: false,
                    show2400: true,
                    showDuration: false,
                    showOnFocus: true,
                    step: 15,
                    stopScrollPropagation: false,
                    typeaheadHighlight: false,
                    useSelect: false,
                    autoclose: true,
                });
            }
        }, 200)
        document.getElementById("easychat-chat-container").innerHTML += timepicker_html;
    }
}

function append_calender_date_time(datepicker_list, timepicker_list) {
    calender_date_widget_value = null; 
    var calendar_divs_length = document.getElementsByClassName('easychat-calendar-div').length;
    var div_id = calendar_divs_length + 1

    if(timepicker_list == undefined || timepicker_list == null)
    {
        timepicker_list = []
    }

    if(datepicker_list == undefined || datepicker_list == null)
    {
        datepicker_list = []
    }

     if (datepicker_list.length > 0 && timepicker_list.length == 0) {
//----------------------------only date picker-----------------
var html = '<div class="easychat-calendar-div" id="calendar-div-'+div_id+'">'
for (var i = 0; i < datepicker_list.length; i++) {
    var id = div_id + "-"+i
    var label = LABEL_ADD
    var hr_add = false
    var type_picker = "Single date"
    if(datepicker_list.length == 2)
    { type_picker = "Double date"
     }
    if(datepicker_list.length > 1 && i == 0)
    {
        label = LABEL_FROM
        hr_add = true
         html += '<label style="margin-left: -77%;color: #615b5b;">'+LABEL_FROM+'</label>'
    } else if(datepicker_list.length>1 && i == 1)
    {
        hr_add = false
        label = LABEL_TO
         html += '<label style="margin-left: -85%;color: #615b5b;">'+LABEL_TO+'</label>'
    }

         html += '\
                <div class="main-wrapping-div">\
                    <div class="easychat-date-btn">\
                        <input type="text" readonly  id="datepicker-'+id+'" onchange="changedDate(\''+id+'\',\''+type_picker+'\',this)" style="width: 150px !important;" class="date-time-picker-btns easychat-datepicker-btn" value="'+label+' '+LABEL_DATE+'">\
                            <div class="date-displayer datepicker" id="date-displayer-'+id+'" onclick="callModal(\''+id+'\')" style="margin-top: -35px; visibility: hidden">\
                                <div class="row" style="display: flex; justify-content: center; margin-top: -5px;">\
                                    <div class="col s6 date">\
                                        16\
                                    </div>\
                                    <div class="col s6" style="margin-left: 10px">\
                                        <div class="row month-year" style="margin-bottom: 1px !important;margin-top: 8px !important;">\
                                            May 2021\
                                        </div>\
                                        <div class="row day">\
                                            Thursday\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </input>\
                    </div>\
                </div>\
                <div class="btns-sections">\
                    <div class="left-btns">\
                        <button type="submit" class="reset-btn" onclick="handleReset('+div_id+','+datepicker_list.length+')">'+RESET_TEXT+'</button>\
                    </div>\
                    <div class="right-btns">\
                        <button type="submit" class="cancel-btn" onclick="handleCalendarClose()">'+CANCEL_TEXT+'</button>\
                        <button type="submit" class="submit-btn" onclick="handleCalendarSubmit(\'\')">'+SUBMIT_TEXT+'</button>\
                    </div> \
                </div>'

        if(hr_add)
        {
            html += '<hr style="width: 85%; background-color: #e7e8ec; margin-top: 12px; margin-bottom: 8px "/>'
        }
    }

        html+= '</div>'
     } else if (datepicker_list.length == 0 && timepicker_list.length > 0) {

//----------------------------only time picker-----------------
     
var html = '<div class="easychat-calendar-div" id="calendar-div-'+div_id+'">'
for (var i = 0; i < timepicker_list.length; i++) {
    var id = div_id + "-"+i
    var label = LABEL_ADD
    var hr_add = false
    var type_picker = "Single time"
    if(timepicker_list.length == 2)
    { type_picker = "Double time"
     }
    if(timepicker_list.length > 1 && i == 0)
    {
        label = LABEL_FROM
        hr_add = true
         html += '<label style="margin-left: -77%;color: #615b5b;">'+LABEL_FROM+'</label>'
    } else if(timepicker_list.length>1 && i == 1)
    {
        hr_add = false
        label = LABEL_TO
         html += '<label style="margin-left: -85%;color: #615b5b;">'+LABEL_TO+'</label>'
    }

    currently_time_picker_type = type_picker

         html += '\
                <div class="main-wrapping-div">\
                    <div class="easychat-time-btn">\
                      <input type="button" id="time-picker-btn-'+id+'" class="date-time-picker-btns easychat-timepicker-btn" value="'+label+' '+LABEL_TIME+'" onclick="handleTimePickerClick(\''+id+'\')" style="width: 150px !important;" onchange="handleTimeBtnChange(\''+type_picker+'\')"></input>\
                    </div>\
                </div>\
                <div class="btns-sections" style="margin-top: 15px">\
                    <div class="left-btns">\
                        <button type="submit" class="reset-btn" onclick="handleReset('+div_id+')">'+RESET_TEXT+'</button>\
                    </div>\
                    <div class="right-btns">\
                        <button type="submit" class="cancel-btn" onclick="handleCalendarClose()">'+CANCEL_TEXT+'</button>\
                        <button type="submit" class="submit-btn" onclick="handleCalendarSubmit(\'\')">'+SUBMIT_TEXT+'</button>\
                    </div> \
                </div>'

        if(hr_add)
        {
            html += '<hr style="width: 85%; background-color: #e7e8ec; margin-top: 12px; margin-bottom: 8px "/>'
        }
    }

        html+= '</div>'
        

     } else if (datepicker_list.length > 0 && timepicker_list.length > 0) {

        if((datepicker_list.length == 1 && timepicker_list.length == 1) || (datepicker_list.length == 2 && timepicker_list.length == 2))
        {
            //-------------------------------date and time in equal nos-------------- both single or both double
            var html = '<div class="easychat-calendar-div" id="calendar-div-'+div_id+'">'
for (var i = 0; i < datepicker_list.length; i++) {
    var id = div_id + "-"+i
    var label = LABEL_ADD
    var hr_add = false
    var type_picker = "Single datetime"
    if(datepicker_list.length == 2)
    { type_picker = "Double datetime"
     }
    if(datepicker_list.length > 1 && i == 0)
    {
        label = LABEL_FROM
        hr_add = true
         html += '<label style="margin-left: -77%;color: #615b5b;">'+LABEL_FROM+'</label>'
    } else if(datepicker_list.length>1 && i == 1)
    {
        hr_add = false
        label = LABEL_TO
         html += '<label style="margin-left: -85%;color: #615b5b;">'+LABEL_TO+'</label>'
    }
    currently_time_picker_type = type_picker

         html += '\
                <div class="main-wrapping-div">\
                    <div class="easychat-date-btn">\
                        <input type="text" readonly id="datepicker-'+id+'" onchange="changedDate(\''+id+'\',\''+type_picker+'\',this)" style="width: 100px !important;" class="date-time-picker-btns easychat-datepicker-btn" value="'+label+' '+LABEL_DATE+'">\
                            <div class="date-displayer datepicker" id="date-displayer-'+id+'" onclick="callModal(\''+id+'\')" style="margin-top: -35px;">\
                                <div class="row" style="display: flex; justify-content: center; margin-top: -5px;">\
                                    <div class="col s6 date">\
                                        16\
                                    </div>\
                                    <div class="col s6" style=" margin-left: 10px">\
                                        <div class="row month-year" style="margin-bottom: 1px !important;margin-top: 8px !important;">\
                                            May 2021\
                                        </div>\
                                        <div class="row day">\
                                            Thursday\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </input>\
                    </div>\
                    <div class="easychat-time-btn">\
                      <input type="button" id="time-picker-btn-'+id+'" class="date-time-picker-btns easychat-timepicker-btn" value="'+label+' '+LABEL_TIME+'" onclick="handleTimePickerClick(\''+id+'\')" style="width: 100px !important;" onchange="handleTimeBtnChange(\''+type_picker+'\')"></input>\
                    </div>\
                </div>\
                <div class="btns-sections">\
                    <div class="left-btns">\
                        <button type="submit" class="reset-btn" onclick="handleReset('+div_id+','+datepicker_list.length+')">'+RESET_TEXT+'</button>\
                    </div>\
                    <div class="right-btns">\
                        <button type="submit" class="cancel-btn" onclick="handleCalendarClose()">'+CANCEL_TEXT+'</button>\
                        <button type="submit" class="submit-btn" onclick="handleCalendarSubmit(\''+type_picker+'\')">'+SUBMIT_TEXT+'</button>\
                    </div> \
                </div>'

        if(hr_add)
        {
            html += '<hr style="width: 85%; background-color: #e7e8ec; margin-top: 12px; margin-bottom: 8px "/>'
        }
    }

        html+= '</div>'
        } else if( datepicker_list.length > 0  && timepicker_list.length == 1 )
        {   
            // -----------------multi dates but single time ---------------
            var html = '<div class="easychat-calendar-div" id="calendar-div-'+div_id+'">'
            var id = div_id + "-0"
            var label = LABEL_ADD
            var hr_add = true
            var type_picker = "Double date single time"
            currently_time_picker_type = type_picker
            html += ''

            html += '<div class="main-wrapping-div">\
            <div>\
            <label style="margin-left:20%;color: #615b5b;">From</label>\
                    <div class="easychat-date-btn">\
                        <input type="text" readonly id="datepicker-'+id+'" onchange="changedDate(\''+id+'\',\''+type_picker+'\',this)" style="width: 100px !important;" class="date-time-picker-btns easychat-datepicker-btn" value="'+LABEL_FROM+' '+LABEL_DATE+'">\
                            <div class="date-displayer datepicker" id="date-displayer-'+id+'" onclick="callModal(\''+id+'\')" style="margin-top: -35px;">\
                                <div class="row" style="display: flex; justify-content: flex-end; margin-top: -5px;">\
                                    <div class="col s6 date">\
                                        16\
                                    </div>\
                                    <div class="col s6" style=" margin-left: 10px">\
                                        <div class="row month-year" style="margin-bottom: 1px !important;margin-top: 8px !important;">\
                                            May 2021\
                                        </div>\
                                        <div class="row day">\
                                            Thursday\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </input>\
                    </div>\
                    </div>'
                   id = div_id + "-1"
                   html += '<div>\
                    <label style="margin-left:20%;color: #615b5b;">To</label>\
                   <div class="easychat-date-btn">\
                        <input type="text" readonly  id="datepicker-'+id+'" onchange="changedDate(\''+id+'\',\''+type_picker+'\',this)" style="width: 100px !important;" class="date-time-picker-btns easychat-datepicker-btn" value="'+LABEL_TO+' '+LABEL_DATE+'">\
                            <div class="date-displayer datepicker" id="date-displayer-'+id+'" onclick="callModal(\''+id+'\')" style="margin-top: -35px;">\
                                <div class="row" style="display: flex; justify-content: flex-start; margin-top: -5px;">\
                                    <div class="col s6 date">\
                                        16\
                                    </div>\
                                    <div class="col s6" style="margin-left: 10px">\
                                        <div class="row month-year" style="margin-bottom: 1px !important;margin-top: 8px !important;">\
                                            May 2021\
                                        </div>\
                                        <div class="row day">\
                                            Thursday\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </input>\
                    </div>\
                    </div>\
                </div>'

            if(hr_add)
            {
                html += '<hr style="width: 85%; background-color: #e7e8ec; margin-top: 12px; margin-bottom: 12px "/>'
            }

            id = div_id + "-0"
             html += '\
                    <div class="main-wrapping-div">\
                        <div class="easychat-time-btn">\
                          <input type="button" id="time-picker-btn-'+id+'" class="date-time-picker-btns easychat-timepicker-btn" value="'+LABEL_ADD+' '+LABEL_TIME+'" onclick="handleTimePickerClick(\''+id+'\')" style="width: 200px !important;" onchange="handleTimeBtnChange(\''+type_picker+'\')"></input>\
                        </div>\
                    </div>\
                    <div class="btns-sections" style="margin-top: 15px">\
                        <div class="left-btns">\
                            <button type="submit" class="reset-btn" onclick="handleReset('+div_id+','+datepicker_list.length+')">'+RESET_TEXT+'</button>\
                        </div>\
                        <div class="right-btns">\
                            <button type="submit" class="cancel-btn" onclick="handleCalendarClose()">Cancel</button>\
                            <button type="submit" class="submit-btn" onclick="handleCalendarSubmit(\''+type_picker+'\')">'+SUBMIT_TEXT+'</button>\
                        </div> \
                    </div>'

                 html+= '</div>'
        
        } else if(datepicker_list.length == 1 && timepicker_list.length > 0)
        {
            //-----------------double time picker single date picker----------
            var html = '<div class="easychat-calendar-div" id="calendar-div-'+div_id+'">'
            var id = div_id + "-0"
            var label = LABEL_ADD
            var hr_add = true
            var type_picker = "Single date double time"
            currently_time_picker_type = type_picker
            html += ''

             html += '\
                <div class="main-wrapping-div">\
                    <div class="easychat-date-btn">\
                        <input type="text" readonly id="datepicker-'+id+'" onchange="changedDate(\''+id+'\',\''+type_picker+'\',this)" style="width: 200px !important;" class="date-time-picker-btns easychat-datepicker-btn" value="'+LABEL_ADD+' '+LABEL_DATE+'">\
                            <div class="date-displayer datepicker" id="date-displayer-'+id+'" onclick="callModal(\''+id+'\')" style="margin-top: -35px;">\
                                <div class="row" style="display: flex; justify-content: center; margin-top: -5px;">\
                                    <div class="col s6 date">\
                                        16\
                                    </div>\
                                    <div class="col s6" style="margin-left: 10px">\
                                        <div class="row month-year" style="margin-bottom: 1px !important;margin-top: 8px !important;">\
                                            May 2021\
                                        </div>\
                                        <div class="row day">\
                                            Thursday\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </input>\
                    </div>\
                </div>'

                if(hr_add)
            {
                html += '<hr style="width: 85%; background-color: #e7e8ec; margin-top: 12px; margin-bottom: 12px "/>'
            }

            id = div_id + "-0"
             html += '\
                    <div class="main-wrapping-div">\
                    <div>\
                    <label style="margin-left: 20%;color: #615b5b;">From</label>\
                        <div class="easychat-time-btn">\
                          <input type="button" id="time-picker-btn-'+id+'" class="date-time-picker-btns easychat-timepicker-btn" value="'+LABEL_FROM+' '+LABEL_TIME+'" onclick="handleTimePickerClick(\''+id+'\')" style="width: 100px !important;" onchange="handleTimeBtnChange(\''+type_picker+'\')"></input>\
                        </div>\
                        </div>'

            id = div_id + "-1"

            html += '<div>\
                    <label style="margin-left: 20%;color: #615b5b;">To</label>\
            <div class="easychat-time-btn">\
                          <input type="button" id="time-picker-btn-'+id+'" class="date-time-picker-btns easychat-timepicker-btn" value="'+LABEL_TO+' '+LABEL_TIME+'" onclick="handleTimePickerClick(\''+id+'\')" style="width: 100px !important;" onchange="handleTimeBtnChange(\''+type_picker+'\')"></input>\
                        </div>\
                        </div>\
                    </div>\
                    <div class="btns-sections" style="margin-top: 15px">\
                        <div class="left-btns">\
                            <button type="submit" class="reset-btn" onclick="handleReset('+div_id+','+datepicker_list.length+')">'+RESET_TEXT+'</button>\
                        </div>\
                        <div class="right-btns">\
                            <button type="submit" class="cancel-btn" onclick="handleCalendarClose()">'+CANCEL_TEXT+'</button>\
                            <button type="submit" class="submit-btn" onclick="handleCalendarSubmit(\''+type_picker+'\')">'+SUBMIT_TEXT+'</button>\
                        </div>\
                        </div>'

            html+= '</div>'

        } 
        

     }


     document.getElementById("easychat-chat-container").innerHTML += html;
     inital_calendar_html = document.querySelector("#calendar-div-"+div_id).innerHTML;

     var node=document.getElementById("ui-datepicker-div");
     if(node != undefined)
    {
            document.getElementById("ui-datepicker-div").remove();
            document.querySelector("#top-container").appendChild(node);
    }
    if(datepicker_list.length > 0)
     {
        if(datepicker_list.length == 1)
            {   
           
            $( "#datepicker-"+div_id+"-0" ).datepicker({
                    autoclose: true});
        }
        else if(datepicker_list.length == 2)
        {

            $( "#datepicker-"+div_id+"-0" ).datepicker({ autoclose: true});
            $( "#datepicker-"+div_id+"-1" ).datepicker({autoclose: true});
        }
    }


             $("#easychat-chat-container").scroll(function() {

            setTimeout(function() {
            if(document.getElementById("datepicker-"+div_id+"-0"))
            {
                $("#datepicker-"+div_id+"-0").datepicker('hide');
                $("#datepicker-"+div_id+"-0").blur();
            }

            if(document.getElementById("datepicker-"+div_id+"-1"))
            {
                $("#datepicker-"+div_id+"-1").datepicker('hide');
                $("#datepicker-"+div_id+"-1").blur();
            }
            
       
    }, 200);
          

        });         

     if(document.getElementsByClassName('easychat-time-btn').length>0)
       { 
        const input = document.querySelector('.easychat-timepicker-btn');

        const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value');

        Object.defineProperty(input, 'value', {
            set: function(t) {
                console.log('Input value was changed programmatically');
                return descriptor.set.apply(this, arguments);
            },
            get: function() {
            return descriptor.get.apply(this);
            }
        });

           
     }



      
}

//date picker script
function callModal(i){
        $( "#datepicker-"+i ).datepicker({autoclose: true});
    }


// time picker script
var ansHr="",ansMin="",ansAmpm="";
        function handleclickTime(){
            let allHrs=document.querySelectorAll(".hr-clock ul li");
            let allMins=document.querySelectorAll(".min-clock ul li");
            let allAmpm=document.querySelectorAll(".ampm-clock ul li");
            allHrs = Array.prototype.slice.call(allHrs);
            allMins = Array.prototype.slice.call(allMins);
            allAmpm = Array.prototype.slice.call(allAmpm);
            allHrs.forEach(function(eachHr) {
                if(eachHr.childNodes[1].checked===true)
                {
                    eachHr.childNodes[0].classList.add("datetimepicker-selected-time");
                    ansHr=eachHr.childNodes[0].innerText;
                }
                else
                eachHr.childNodes[0].classList.remove("datetimepicker-selected-time");
            })
            allMins.forEach(function(eachMin) {
                if(eachMin.childNodes[1].checked===true)
                {
                    eachMin.childNodes[0].classList.add("datetimepicker-selected-time");
                    ansMin=eachMin.childNodes[0].innerText;
                }
                else
                eachMin.childNodes[0].classList.remove("datetimepicker-selected-time");
            })
            allAmpm.forEach(function (eachAmpm) {
                if(eachAmpm.childNodes[1].checked===true)
                {
                    eachAmpm.childNodes[0].classList.add("datetimepicker-selected-time");
                    ansAmpm=eachAmpm.childNodes[0].innerText;
                }
                else
                eachAmpm.childNodes[0].classList.remove("datetimepicker-selected-time");
            })
        }

        function unCheckAll(){
            let allHrs=document.querySelectorAll(".hr-clock ul li");
            let allMins=document.querySelectorAll(".min-clock ul li");
            let allAmpm=document.querySelectorAll(".ampm-clock ul li");
            allHrs = Array.prototype.slice.call(allHrs);
            allMins = Array.prototype.slice.call(allMins);
            allAmpm = Array.prototype.slice.call(allAmpm);
            allHrs.forEach(function(eachHr) {
                if(eachHr.childNodes[1].checked===true)
                {
                    eachHr.childNodes[1].checked = false
   
                }
            
                eachHr.childNodes[0].classList.remove("datetimepicker-selected-time");
            })
            allMins.forEach(function (eachMin){
                if(eachMin.childNodes[1].checked===true)
                {
                    eachMin.childNodes[1].checked = false
                }
            
                eachMin.childNodes[0].classList.remove("datetimepicker-selected-time");
            })
            allAmpm.forEach(function (eachAmpm){
                if(eachAmpm.childNodes[1].checked===true)
                {
                    eachAmpm.childNodes[1].checked = false
                }
               
                eachAmpm.childNodes[0].classList.remove("datetimepicker-selected-time");
            })
        }

        function handleTimePickerClick(id){
            document.querySelector(".custom-timepicker").style.display="inline-block";
            timepicker_in_form = false
            unCheckAll()
            currently_opened_time_modal_id = id

        }
        function closeTimeModal(){
            document.querySelector(".custom-timepicker").style.display="none";
        }
        function handleSaveTime(){
            document.querySelector(".custom-timepicker").style.display="none";
            
            if(timepicker_in_form)
            {
                if(ansHr && ansAmpm && ansMin)
                {
                    document.getElementById("time-picker-btn-"+currently_opened_time_modal_id).value=ansHr.toString().trim()+":"+ansMin.toString().trim()+" "+ansAmpm;
                    update_answers_filled(document.getElementById("time-picker-btn-"+currently_opened_time_modal_id)) 
                }
            }else {

                if(ansHr && ansAmpm && ansMin)
                {
                    document.getElementById("time-picker-btn-"+currently_opened_time_modal_id).value=ansHr.toString().trim()+":"+ansMin.toString().trim()+" "+ansAmpm;
                    
                    if(currently_time_picker_type == "Single time" || currently_time_picker_type == "Double time")
                        append_selected_calender_time_into_user_query(document.getElementById("time-picker-btn-"+currently_opened_time_modal_id), currently_opened_time_modal_id)
                    
                    handleTimeBtnChange(currently_time_picker_type);
                }
            }
        }
        function handleBtnSection(type_picker){
         
            if(type_picker == "Single date")
            {
                 var btns = document.getElementsByClassName('easychat-datepicker-btn')
                var btn_sections = document.getElementsByClassName('btns-sections')
                if(btns[btns.length-1].value!==(LABEL_ADD+" "+LABEL_DATE))
                     {btn_sections[btn_sections.length-1].style.display="flex";
                        $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
                else
                    btn_sections[btn_sections.length-1].style.display="none";
            } else if(type_picker == "Double date")
            {
                var btns = document.getElementsByClassName('easychat-datepicker-btn')
                var btn_sections = document.getElementsByClassName('btns-sections')
            if(btns[btns.length-2].value !==(LABEL_FROM+" "+LABEL_DATE) && btns[btns.length-1].value != (LABEL_TO+" "+LABEL_DATE))
             {btn_sections[btn_sections.length-1].style.display="flex";
                       $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
            else
            btn_sections[btn_sections.length-1].style.display="none";

            } else if(type_picker == "Single datetime")
            {
              var btns_date = document.getElementsByClassName('easychat-datepicker-btn')
              var btns_time = document.getElementsByClassName('easychat-timepicker-btn')
                var btn_sections = document.getElementsByClassName('btns-sections')
                if(btns_date[btns_date.length-1].value!==(LABEL_ADD+" "+LABEL_DATE) && btns_time[btns_time.length-1].value!==(LABEL_ADD+" "+LABEL_TIME))
                    {btn_sections[btn_sections.length-1].style.display="flex";
                        $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
                else
                    btn_sections[btn_sections.length-1].style.display="none";   
            } else if(type_picker == "Double datetime"){
            
            var btns_date = document.getElementsByClassName('easychat-datepicker-btn')
            var btns_time = document.getElementsByClassName('easychat-timepicker-btn')
            var btn_sections = document.getElementsByClassName('btns-sections')
            if(btns_date[btns_date.length-2].value !==(LABEL_FROM+" "+LABEL_DATE) && btns_date[btns_date.length-1].value != (LABEL_TO+" "+LABEL_DATE) && btns_time[btns_time.length-2].value !==(LABEL_FROM+" "+LABEL_TIME) && btns_time[btns_time.length-1].value !=(LABEL_TO+" "+LABEL_TIME))
             {btn_sections[btn_sections.length-1].style.display="flex";
                       $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
            else
            btn_sections[btn_sections.length-1].style.display="none";

            } else if(type_picker == "Double date single time")
            {
              var btns_date = document.getElementsByClassName('easychat-datepicker-btn')
              var btns_time = document.getElementsByClassName('easychat-timepicker-btn')
                var btn_sections = document.getElementsByClassName('btns-sections')
                if(btns_date[btns_date.length-2].value!==(LABEL_FROM+" "+LABEL_DATE)&& btns_date[btns_date.length-1].value != (LABEL_FROM+" "+LABEL_DATE)&& btns_time[btns_time.length-1].value!==(LABEL_ADD+" "+LABEL_TIME))
                    {btn_sections[btn_sections.length-1].style.display="flex";
                        $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
                else
                    btn_sections[btn_sections.length-1].style.display="none";
            } else if(type_picker == "Single date double time")
            {
                var btns_date = document.getElementsByClassName('easychat-datepicker-btn')
              var btns_time = document.getElementsByClassName('easychat-timepicker-btn')
                var btn_sections = document.getElementsByClassName('btns-sections')
                if(btns_date[btns_date.length-1].value!==(LABEL_ADD+" "+LABEL_DATE) && btns_time[btns_time.length-2].value != (LABEL_FROM+" "+LABEL_TIME) && btns_time[btns_time.length-1].value!==(LABEL_TO+" "+LABEL_TIME))
                    {btn_sections[btn_sections.length-1].style.display="flex";
                       $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
                else
                    btn_sections[btn_sections.length-1].style.display="none";   
            }
            
            // if( document.querySelector(".easychat-timepicker-btn").value!=="Add Time" && document.querySelector(".easychat-datepicker-btn").value!=="Add Date")
            // document.querySelector(".btns-sections").style.display="flex";
            // else
            // document.querySelector(".btns-sections").style.display="none";
        }
        function handleTimeBtnChange(type_picker){
            if(type_picker == "Single time")
            {
                 var btns = document.getElementsByClassName('easychat-timepicker-btn')
                var btn_sections = document.getElementsByClassName('btns-sections')
                if(btns[btns.length-1].value!==(LABEL_ADD+" "+LABEL_TIME))
                    {btn_sections[btn_sections.length-1].style.display="flex";
                       $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
                else
                    btn_sections[btn_sections.length-1].style.display="none";
            } else if (type_picker == "Double time")
            {
              var btns = document.getElementsByClassName('easychat-timepicker-btn')
              
                var btn_sections = document.getElementsByClassName('btns-sections')
                if(btns[btns.length-2].value !==(LABEL_FROM+" "+LABEL_TIME) && btns[btns.length-1].value != (LABEL_TO+" "+LABEL_TIME))
                    {btn_sections[btn_sections.length-1].style.display="flex";
                      $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
                else
                    btn_sections[btn_sections.length-1].style.display="none";
            }  else if(type_picker == "Single datetime")
            {
              var btns_date = document.getElementsByClassName('easychat-datepicker-btn')
              var btns_time = document.getElementsByClassName('easychat-timepicker-btn')
                var btn_sections = document.getElementsByClassName('btns-sections')
                if(btns_date[btns_date.length-1].value!==(LABEL_ADD+" "+LABEL_DATE) && btns_time[btns_time.length-1].value!==(LABEL_ADD+" "+LABEL_TIME))
                    {btn_sections[btn_sections.length-1].style.display="flex";
                       $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
                else
                    btn_sections[btn_sections.length-1].style.display="none";   
            } else if(type_picker == "Double datetime"){

            var btns_date = document.getElementsByClassName('easychat-datepicker-btn')
            var btns_time = document.getElementsByClassName('easychat-timepicker-btn')
            var btn_sections = document.getElementsByClassName('btns-sections')
            if(btns_date[btns_date.length-2].value !==(LABEL_FROM+" "+LABEL_DATE) && btns_date[btns_date.length-1].value != (LABEL_TO+" "+LABEL_DATE) && btns_time[btns_time.length-2].value !==(LABEL_FROM+" "+LABEL_TIME) && btns_time[btns_time.length-1].value != (LABEL_TO+" "+LABEL_TIME))
             {btn_sections[btn_sections.length-1].style.display="flex";
                      $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
            else
            btn_sections[btn_sections.length-1].style.display="none";
            } else if(type_picker == "Double date single time")
            {
              var btns_date = document.getElementsByClassName('easychat-datepicker-btn')
              var btns_time = document.getElementsByClassName('easychat-timepicker-btn')
                var btn_sections = document.getElementsByClassName('btns-sections')
                if(btns_date[btns_date.length-2].value!==(LABEL_FROM+" "+LABEL_DATE) && btns_date[btns_date.length-1].value != (LABEL_TO+" "+LABEL_DATE) && btns_time[btns_time.length-1].value!==(LABEL_ADD+" "+LABEL_TIME))
                    {btn_sections[btn_sections.length-1].style.display="flex";
                      $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
                else
                    btn_sections[btn_sections.length-1].style.display="none";   
            } else if(type_picker == "Single date double time")
            {
                var btns_date = document.getElementsByClassName('easychat-datepicker-btn')
              var btns_time = document.getElementsByClassName('easychat-timepicker-btn')
                var btn_sections = document.getElementsByClassName('btns-sections')
                if(btns_date[btns_date.length-1].value!==(LABEL_ADD+" "+LABEL_DATE) && btns_time[btns_time.length-2].value != (LABEL_FROM+" "+LABEL_TIME) && btns_time[btns_time.length-1].value!==(LABEL_TO+" "+LABEL_TIME))
                    {btn_sections[btn_sections.length-1].style.display="flex";
                      $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);
                    }
                else
                    btn_sections[btn_sections.length-1].style.display="none";   
            }
          
        }
        function changedDate(i, type, element){
            
            if(document.querySelector("#datepicker-"+i).value!==(LABEL_ADD+" "+LABEL_DATE) && document.querySelector("#datepicker-"+i).value!==(LABEL_FROM+" "+LABEL_DATE) && document.querySelector("#datepicker-"+i).value!==(LABEL_TO+" "+LABEL_DATE) ){
               
                var dayArr=["Monday","Tueday","Wednesday","Thursday","Friday","Saturday","Sunday"];
                var monthArr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                var date=new Date(document.querySelector("#datepicker-"+i).value);
                var datenum=date.getDate();
                var month=date.getMonth();
                var year=date.getFullYear();
                var day=date.getDay();
                if(day == 0)
                    day = 7
               
                document.querySelector("#date-displayer-"+i+" .date").innerHTML=datenum;
                document.querySelector("#date-displayer-"+i+" .month-year").innerHTML=monthArr[month]+" "+year;
                
                document.querySelector("#date-displayer-"+i+" .day").innerHTML=dayArr[day-1];
                if(!isNaN(datenum))
                {
                  
                  if(document.getElementById('calendar-div-'+i.split("-")[0]).style.opacity+""!="0.9")
                {
                    handleBtnSection(type);
                    document.getElementById("datepicker-"+i).style.opacity="0 ";
                    document.getElementById("date-displayer-"+i).style.visibility="visible";
                    if(type == "Single date" || type == "Double date")
                        append_selected_calender_date_into_user_query(element, i)
                    else if(type == "Single date double time")
                    {
                        document.getElementById("datepicker-"+i).style.width = "130px"
                    }
                }
            }
            }
        
        }
        function handleCalendarClose(){
            set_global_calendar_input("")
            var calendar_divs = document.getElementsByClassName("easychat-calendar-div")
            var length = calendar_divs.length
            calender_date_widget_value = null
            calender_time_widget_value = null
            currently_time_picker_type = ""
            currently_opened_time_modal_id = ""
            inital_calendar_html = ""
            set_global_calendar_input("")
            if(length>0)
            {
                calendar_divs[length -1].remove()
                enable_user_input()
            }
        }

        function handleCalendarSubmit(type_picker){
         
            if(type_picker == "Single datetime")
            {
                var date_input = ""
                date_input = document.getElementsByClassName('easychat-datepicker-btn')
               if(date_input.length > 0)
                {
                    date_input = date_input[date_input.length - 1].value
                    date_input = render_date_in_alpha(date_input)
                } 

                var time_input = ""
                time_input = document.getElementsByClassName('easychat-timepicker-btn')
                if(time_input.length > 0)
                {
                    time_input = time_input[time_input.length - 1].value
                }
                 document.getElementById("user_input").value = "Date: "+date_input+", Time: "+time_input

            } else if(type_picker == "Double datetime")
            {
                var date_input = ""
                var date_input2 = ""
                date_input = document.getElementsByClassName('easychat-datepicker-btn')
               if(date_input.length > 0)
                {   
                    date_input2 = date_input[date_input.length - 1].value
                    date_input = date_input[date_input.length - 2].value
                    if(new Date(date_input) > new Date(date_input2))
                    {
                        alert("'From date' must be less than 'To date'")
                        return;
                    }
                    date_input = render_date_in_alpha(date_input)
                    date_input2 = render_date_in_alpha(date_input2)
                } 

                var time_input = ""
                var time_input2 = ""
                time_input = document.getElementsByClassName('easychat-timepicker-btn')
                if(time_input.length > 0)
                {
                    time_input2 = time_input[time_input.length - 1].value
                    time_input = time_input[time_input.length - 2].value
                }
                document.getElementById("user_input").value = "From Date: "+date_input+", From Time: "+time_input+", To Date: "+date_input2+", To Time: "+time_input2
            } else if(type_picker == "Double date single time")
            {
                var date_input = ""
                var date_input2 = ""
                date_input = document.getElementsByClassName('easychat-datepicker-btn')
               if(date_input.length > 0)
                {   
                    date_input2 = date_input[date_input.length - 1].value
                    date_input = date_input[date_input.length - 2].value
                    if(new Date(date_input) > new Date(date_input2))
                    {
                        alert("'From date' must be less than 'To date'")
                        return;
                    }
                    date_input = render_date_in_alpha(date_input)
                    date_input2 = render_date_in_alpha(date_input2)
                } 

               var time_input = ""
                time_input = document.getElementsByClassName('easychat-timepicker-btn')
                if(time_input.length > 0)
                {
                    time_input = time_input[time_input.length - 1].value
                }
                document.getElementById("user_input").value = "From Date: "+date_input+", To Date: "+date_input2+", Time: "+time_input
            } else if(type_picker == "Single date double time") 
            {

                var date_input = ""
                date_input = document.getElementsByClassName('easychat-datepicker-btn')
               if(date_input.length > 0)
                {
                    date_input = date_input[date_input.length - 1].value
                    date_input = render_date_in_alpha(date_input)
                } 

               var time_input = ""
                var time_input2 = ""
                time_input = document.getElementsByClassName('easychat-timepicker-btn')
                if(time_input.length > 0)
                {
                    time_input2 = time_input[time_input.length - 1].value
                    time_input = time_input[time_input.length - 2].value

                    var fromdt = "2013/05/29 "+ time_input;
                    var todt = "2013/05/29 "+time_input2;
                    var from = new Date(Date.parse(fromdt));
                    var to = new Date(Date.parse(todt));

                    if(from > to)
                    {
                        alert("'From time' must be less than 'To time'")
                        return;
                    }
                }
                document.getElementById("user_input").value = "Date: "+date_input+", From Time: "+time_input+", To Time: "+time_input2

            }
            else if(type_picker == "")
            {
                document.getElementById("user_input").value = get_global_calendar_input()
            }

             var btn_sections= document.getElementsByClassName("btns-sections")
            var length= btn_sections.length
            btn_sections[length-1].style.display = "none"

            var calendar_divs = document.getElementsByClassName("easychat-calendar-div")
            length = calendar_divs.length
            calendar_divs[length - 1].style.opacity = "0.9"
            calendar_divs[length-1].style.pointerEvents= "none"


            document.getElementById("easychat-query-submit-div").click();
            enable_user_input();
            calender_date_widget_value = null
            calender_time_widget_value = null
            currently_time_picker_type = ""
            currently_opened_time_modal_id = ""
            set_global_calendar_input("")
            is_remove_widget = false; 
            currently_time_picker_type = ""
            inital_calendar_html = ""
        }
        function handleReset(div_id, length){
    
            if(length != 1 && length != 2)
            {
                length = 0
            }
          
            document.querySelector("#calendar-div-"+div_id).innerHTML=inital_calendar_html;



            //date picker
              if(length > 0)
     {
        if(length == 1)
            {   
         
            $( "#datepicker-"+div_id+"-0" ).datepicker({autoclose: true});
        }
        else if(length == 2)
        {
            $( "#datepicker-"+div_id+"-0" ).datepicker({autoclose: true});
            $( "#datepicker-"+div_id+"-1" ).datepicker({autoclose: true});
        }
    }


             $("#easychat-chat-container").scroll(function() {

            setTimeout(function() {
            if(document.getElementById("datepicker-"+div_id+"-0"))
            {
                $("#datepicker-"+div_id+"-0").datepicker('hide');
                $("#datepicker-"+div_id+"-0").blur();
            }

            if(document.getElementById("datepicker-"+div_id+"-1"))
            {
                $("#datepicker-"+div_id+"-1").datepicker('hide');
                $("#datepicker-"+div_id+"-1").blur();
            }
            
       
    }, 200);
          

        });   

            //time picker
             if(document.getElementsByClassName('easychat-time-btn').length>0)
       { 
        const input = document.querySelector('.easychat-timepicker-btn');

        const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value');

        Object.defineProperty(input, 'value', {
            set: function(t) {
                console.log('Input value was changed programmatically');
                return descriptor.set.apply(this, arguments);
            },
            get: function() {
            return descriptor.get.apply(this);
            }
        });

           
     }

        }

function render_date_in_alpha(date_in_num)
{      
     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      try {
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var dd_MM_yyyy = ""
            if (date_in_num.split("/").length == 3) {
                var date_input = new Date(date_in_num);
                var day = date_input.getDate();
                var month = date_input.getMonth();
                month = monthNames[month]
                var year = date_input.getFullYear();
                dd_MM_yyyy = day + "-" + month + "-" + year;
                return dd_MM_yyyy
            }
        } catch (err) {
        console.log(err) 
        return ""
    }
}
// time picker script ends

function append_calender_time(timepicker_list){
        if (timepicker_list.length > 0) {
        timepicker_container = document.getElementById("easychat-timepicker-container");
        if (timepicker_container != undefined && timepicker_container != null) {
            timepicker_container.remove();
        }
        calender_time_widget_value = null;
        var timepicker_html = '<div class="easychat-timepicker-container easychat-calender-timepicker-container" align="center" id="easychat-timepicker-container">';
        for (var i = 0; i < timepicker_list.length; i++) {
            timepicker_html += '<div style="width:100%" class="easychat-timepicker-div"><br>\
            <input type="text" inputmode="none" name="timepicker" class="easychat-timepicker timepicker easychat-timepicker-theme-sp" onfocusout="append_selected_calender_time_into_user_query(this)" oninput="append_selected_calender_time_into_user_query(this)" onchange="append_selected_calender_time_into_user_query(this)" id="easychat-timepicker-' + i + '" placeholder="' + timepicker_list[i]["placeholder"] + '">\
            </div>';
        }
        timepicker_html += "</div>";


        setTimeout(function () {
            for (var i = 0; i < timepicker_list.length; i++) {
                $("#easychat-timepicker-" + i).timepicker({
                    timeFormat: 'h:i a',
                    appendTo: 'body',
                    className: null,
                    closeOnWindow: false,
                    disableTextInput: false,
                    disableTimeRanges: [],
                    disableTouchKeyboard: false,
                    durationTime: null,
                    forceRoundTime: false,
                    maxTime: null,
                    minTime: null,
                    noneOption: false,
                    orientation: 'l',
                    scrollDefault: null,
                    selectOnBlur: false,
                    show2400: true,
                    showDuration: false,
                    showOnFocus: true,
                    step: 15,
                    stopScrollPropagation: false,
                    typeaheadHighlight: false,
                    useSelect: false,
                    autoclose: true,
                });
            }
        }, 200)
        document.getElementById("easychat-chat-container").innerHTML += timepicker_html;
    }
}

function append_selected_calender_date_into_user_query(element, id) {
    var div_id = id.split("-")
    div_id = div_id[0]
    easychat_datepicker_list = document.querySelectorAll("#calendar-div-"+div_id+" .easychat-datepicker-btn");

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var user_input = "";
    var date_array = []
    calender_date_widget_value = null;
    if(easychat_datepicker_list.length == 1)
    {
        easychat_datepicker_list[easychat_datepicker_list.length - 1].placeholder = "Date"
    } else if(easychat_datepicker_list.length == 2){
        easychat_datepicker_list[easychat_datepicker_list.length - 2].placeholder = "From Date"
        easychat_datepicker_list[easychat_datepicker_list.length - 1].placeholder = "To Date"
    }
    for (var i = 0; i < easychat_datepicker_list.length; i++) {
        var date_input_value = easychat_datepicker_list[i].value
        date_input_split_with_hyphen = true
        try {
            var dd_MM_yyyy = ""
            if (date_input_value.split("/").length == 3) {
                date_input_split_with_hyphen = false
                var date_input = new Date(date_input_value);
                var day = date_input.getDate();
                var month = date_input.getMonth();
                month = monthNames[month]
                var year = date_input.getFullYear();
                dd_MM_yyyy = day + "-" + month + "-" + year;

            }
        } catch (err) {
        console.log(err) 
    }
        if (date_input_split_with_hyphen == true) {
            try {
                var dd_MM_yyyy = ""
                if (date_input_value.split("-").length == 3) {
                    date_input_split_with_hyphen = false
                    date_input_value = date_input_value.split("-")
                    date_input_value = date_input_value[1] + "/" + date_input_value[0] + "/" + date_input_value[2]
                    var date_input = new Date(date_input_value);
                    var day = date_input.getDate();
                    var month = date_input.getMonth();
                    month = monthNames[month]
                    var year = date_input.getFullYear();
                    dd_MM_yyyy = day + "-" + month + "-" + year;

                }

            } catch (err) { }
        }
        user_input += easychat_datepicker_list[i].placeholder + ": " + dd_MM_yyyy;
        date_array.push(dd_MM_yyyy)
        if (i != easychat_datepicker_list.length - 1) {
            user_input += ", ";
        }
    }

    for (var i = 0; i < date_array.length; i++) {
        if (date_array[i] == "NaN-undefined-NaN") {
            easychat_datepicker_list[i].value = ""
            return;
        }
    }

    for (var i = 0; i < date_array.length; i++) {
        if (date_array[i] == "") {
            document.getElementById("user_input").value = "";
            is_remove_widget = false;
            return;
        }
    }
    calender_date_widget_value = user_input;
    if(calender_date_widget_value != null 
        // && calender_time_widget_value != null
        ){
        activate_query_submit_button();
        if(calender_time_widget_value == null )
            set_global_calendar_input(calender_date_widget_value)
        else
            set_global_calendar_input(calender_date_widget_value + ", " + calender_time_widget_value)

    }
    is_remove_widget = true;
    disable_user_input(); 

}

function set_global_calendar_input(text)
{
    global_calendar_input = text
}

function get_global_calendar_input(){
    return global_calendar_input
}

function  convertTime12to24(time12h){
    try{
      var complete_time = time12h.split(' ');
      var time = complete_time[0]
      var modifier = complete_time[1]

      var hrsmins = time.split(':');
       var hours = hrsmins[0]
       var minutes = hrsmins[1]
      if (hours === '12') {
        hours = '00';
      }

      if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
      }
      var final_time = hours+":"+minutes
      return final_time
    }catch(err)
    {
        return ""
    }
}

function append_selected_calender_time_into_user_query(element, id) {
    var div_id = id.split("-")
    div_id = div_id[0]
    easychat_timepicker_list = document.querySelectorAll("#calendar-div-"+div_id+" .easychat-timepicker-btn");
    var user_input = "";
    calender_time_widget_value = null;
    if(easychat_timepicker_list.length == 1)
    {
        easychat_timepicker_list[easychat_timepicker_list.length - 1].placeholder = "Time"
    } else if(easychat_timepicker_list.length == 2){
        easychat_timepicker_list[easychat_timepicker_list.length - 2].placeholder = "From Time"
        easychat_timepicker_list[easychat_timepicker_list.length - 1].placeholder = "To Time"
    }

    for (var i = 0; i < easychat_timepicker_list.length; i++) {
        var time_input_value = easychat_timepicker_list[i].value
        hh_mm = time_input_value
        hh_mm = hh_mm.replace(" ", "")

        if (/^([0-9]{1,2}:[0-9]{1,2}[aApP][mM])$/.test(hh_mm) == false) {
            document.getElementById("user_input").value = ""
            is_remove_widget = false;
            return;
        }
        user_input += easychat_timepicker_list[i].placeholder + ": " + hh_mm;
        if (i != easychat_timepicker_list.length - 1) {
            user_input += " , ";
        }
    }
    
    calender_time_widget_value = user_input;
    if(calender_time_widget_value != null){

        if(calender_date_widget_value == null )
            set_global_calendar_input(calender_time_widget_value)
        else
            set_global_calendar_input(calender_date_widget_value + ", " + calender_time_widget_value)
        
        activate_query_submit_button();
    }
    is_remove_widget = true;
    disable_user_input();    
}

function append_selected_date_into_user_query(element) {

    easychat_datepicker_list = document.getElementsByClassName("easychat-datepicker-btn");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var user_input = "";
    var date_array = []
    for (var i = 0; i < easychat_datepicker_list.length; i++) {
        var date_input_value = easychat_datepicker_list[i].value
        date_input_split_with_hyphen = true
        try {
            var dd_MM_yyyy = ""
            if (date_input_value.split("/").length == 3) {
                date_input_split_with_hyphen = false
                // date_input_value = date_input_value.split("/")
                // date_input_value = date_input_value[1] + "/" + date_input_value[0] + "/" + date_input_value[2]
                var date_input = new Date(date_input_value);
                var day = date_input.getDate();
                var month = date_input.getMonth();
                month = monthNames[month]
                var year = date_input.getFullYear();
                dd_MM_yyyy = day + "-" + month + "-" + year;

            }
        } catch (err) { }
        if (date_input_split_with_hyphen == true) {
            try {
                var dd_MM_yyyy = ""
                if (date_input_value.split("-").length == 3) {
                    date_input_split_with_hyphen = false
                    date_input_value = date_input_value.split("-")
                    date_input_value = date_input_value[1] + "/" + date_input_value[0] + "/" + date_input_value[2]
                    var date_input = new Date(date_input_value);
                    var day = date_input.getDate();
                    var month = date_input.getMonth();
                    month = monthNames[month]
                    var year = date_input.getFullYear();
                    dd_MM_yyyy = day + "-" + month + "-" + year;

                }

            } catch (err) { }
        }
        user_input += easychat_datepicker_list[i].placeholder + ": " + dd_MM_yyyy;
        date_array.push(dd_MM_yyyy)
        if (i != easychat_datepicker_list.length - 1) {
            user_input += ", ";
        }
    }

    for (var i = 0; i < date_array.length; i++) {
        if (date_array[i] == "NaN-undefined-NaN") {
            easychat_datepicker_list[i].value = ""
            return;
        }
    }
    for (var i = 0; i < date_array.length; i++) {
        if (date_array[i] == "") {
            document.getElementById("user_input").value = "";
            is_remove_widget = false;
            return;
        }
    }
    document.getElementById("user_input").value = user_input;
    activate_query_submit_button();
    is_remove_widget = true;
    disable_user_input();
}


 function handleRadio(element){
    $(".radio-item").removeClass("radio-item-active");
    $(element.parentElement).addClass("radio-item-active");
}

 function handleFormRadio(element,id){
    $(".radio-item-"+id).removeClass("radio-item-active");
    $(element.parentElement).addClass("radio-item-active");
}


function append_radio_buttons(radio_button_choices) {
    if (radio_button_choices.length > 0) {

        radio_button_container = document.getElementById("easychat-radio-button-container");
        if (radio_button_container != undefined && radio_button_container != null) {
            radio_button_container.remove();
        }

        var radio_button_html = '<div class="easychat-radio-button-container"  align="left" id="easychat-radio-button-container">';
               
        if (EASYCHAT_BOT_THEME == "theme_1") {
       
            radio_button_html += '<div class="radio-div">'
            for (var i = 0; i < radio_button_choices.length; i++) {
          
                radio_button_html += '<label for="easychat-radio-' + i + '">\
                    <div class="radio-item">\
                        <input type="radio" class="radio-input" name="radio_button" onchange="handleRadio(this)"  id="easychat-radio-' + i + '" onclick="select_radio_choice(this,' + i + ',' + radio_button_choices.length + ')" value=\"' + radio_button_choices[i] + '\">\
                        <span class="radio_btn_choices_span" style="height: auto !important; padding-left: 20px !important;">'+ radio_button_choices[i] +'</span>\
                    </div>\
                </label>'
            }
            radio_button_html += "</div>"

        } else if (EASYCHAT_BOT_THEME == "theme_2") {
            radio_button_html += '<div class="radio-div">'
          
            for (var i = 0; i < radio_button_choices.length; i++) {
            
                radio_button_html += '<label for="easychat-radio-' + i + '">\
                    <div class="radio-item">\
                        <input type="radio" class="radio-input" name="radio_button" onchange="handleRadio(this)"  id="easychat-radio-' + i + '" onclick="select_radio_choice(this,' + i + ',' + radio_button_choices.length + ')" value=\"' + radio_button_choices[i] + '\">\
                        <span class="radio_btn_choices_span" style="height: auto !important;  padding-left: 20px !important;">'+ radio_button_choices[i] +'</span>\
                    </div>\
                </label>'
            }

                    radio_button_html += "</div>";

        } else {
            for (var i = 0; i < radio_button_choices.length; i++) {
                radio_button_html += '<table><tbody>'
                radio_button_html +=
                    '<tr>\
                    <th style="font-weight:inherit">\
                        <label>\
                        <input type="radio" name="radio_button" class="easychat-radio" id="easychat-radio-' + i + '" onclick="append_selected_radio_choice_into_user_query(this)" value=\"' + radio_button_choices[i] + '\">\
                        <span style="font-family: "Silka", Sans-Serif;"><th style="font-weight:inherit;text-align: left;">' + radio_button_choices[i] + '</th></span>\
                        </label>\
                    </th>\
                </tr>'
            }
            radio_button_html += "</tbody></table>"
        }

        radio_button_html += "</div>";

        document.getElementById("easychat-chat-container").innerHTML += radio_button_html;
        element_response = document.querySelectorAll(".easychat-radio-button-container")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight
    }

}

function select_radio_choice(element, index, choices_length) {
    var selected_div_id = 'easychat-radio-div-' + index;
    append_selected_radio_choice_into_user_query(element);
}

function append_selected_radio_choice_into_user_query(element) {

    activate_query_submit_button();
    var user_input = element.value;
    document.getElementById("user_input").value = user_input;
    widget_user_selected_list = user_input.split();
    is_remove_widget = true;
    disable_user_input();
}

 function onCheckBoxClick(element){
            $(element.parentElement).toggleClass("checkbox-item-active");
        }

 function onFormCheckBoxClick(element){
    $(element.parentElement).toggleClass("checkbox-item-active");
    update_answers_filled(element)
}


function append_checkbox(check_box_choices) {
    if (check_box_choices.length > 0) {

        checkbox_container = document.getElementById("easychat-check-box-container");
        if (checkbox_container != undefined && checkbox_container != null) {
            checkbox_container.remove();
        }

        var check_box_html = '<div class="easychat-check-box-container"  align="left" id="easychat-check-box-container">';

        if (EASYCHAT_BOT_THEME == "theme_1") {
            check_box_html += '<div class="checkbox-div">'  
            for (var i = 0; i < check_box_choices.length; i++) {
                   check_box_html +=  '<label for="easychat-checkbox-' + i + '">\
                    <div class="checkbox-item">\
                        <input type="checkbox" class="checkbox-input" onchange="onCheckBoxClick(this)" id="easychat-checkbox-' + i + '" onclick="select_checkbox(this)" value=\"' + check_box_choices[i] + '\">\
                        <span class="checkbox_btn_choices_span" style="height: auto !important;  padding-left: 20px !important;">'+ check_box_choices[i] +'</span>\
                    </div>\
                </label>'
            }
            check_box_html += "</div>"
        }
        else if (EASYCHAT_BOT_THEME == "theme_2") {
            check_box_html += '<div class="checkbox-div">'  
            for (var i = 0; i < check_box_choices.length; i++) {
                 check_box_html +=  '<label for="easychat-checkbox-' + i + '">\
                    <div class="checkbox-item">\
                        <input type="checkbox" class="checkbox-input" onchange="onCheckBoxClick(this)" id="easychat-checkbox-' + i + '" onclick="select_checkbox(this)" value=\"' + check_box_choices[i] + '\">\
                        <span class="checkbox_btn_choices_span" style="height: auto !important;  padding-left: 20px !important;">'+ check_box_choices[i] +'</span>\
                    </div>\
                </label>'
            }
            check_box_html += "</div>"

        } else {
            check_box_html += '<table><tbody>'
            for (var i = 0; i < check_box_choices.length; i++) {
                check_box_html +=
                    '<tr>\
                    <th style="font-weight:inherit">\
                        <label>\
                            <input type="checkbox" class="easychat-check-box" id="easychat-checkbox-' + i + '" onclick="append_selected_check_box_into_user_query(this)" value=\"' + check_box_choices[i] + '\">\
                            <span style="font-family: "Silka", Sans-Serif;"><th style="font-weight:inherit;text-align: left;">' + check_box_choices[i] + '</th></span>\
                        </label>\
                    </th>\
                </tr>'
            }
            check_box_html += "</tbody></table>"
        }
        check_box_html += "</div>";

        document.getElementById("easychat-chat-container").innerHTML += check_box_html;
        element_response = document.querySelectorAll(".easychat-check-box-container")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight
    }

}

function select_checkbox(element, i) {
    append_selected_check_box_into_user_query(element)
}

function append_selected_check_box_into_user_query(element) {
    activate_query_submit_button();
    var user_input = element.value;
    var user_input_element = document.getElementById("user_input").value;

    if (user_input_element == "") {
        if (document.getElementById(element.id).checked) {
            document.getElementById("user_input").value = user_input;
        } else {
            document.getElementById("user_input").value = document.getElementById("user_input").value.replace(user_input, "")
        }
    } else {
        if (document.getElementById(element.id).checked) {
            document.getElementById("user_input").value = user_input_element + ", " + user_input;
        } else {
            var input = user_input_element.split(",")
            if (input.slice(-1)[0].trim() == user_input) {
                if (user_input_element.indexOf(', ') > -1) {
                    document.getElementById("user_input").value = document.getElementById("user_input").value.replace(", " + user_input, "")
                } else {
                    document.getElementById("user_input").value = document.getElementById("user_input").value.replace(user_input, "")
                }
            } else if (user_input_element.indexOf(', ') > -1) {
                document.getElementById("user_input").value = document.getElementById("user_input").value.replace(user_input + ", ", "")
            } else {
                document.getElementById("user_input").value = document.getElementById("user_input").value.replace(user_input, "")
            }
        }
    }

    user_input_element = document.getElementById("user_input").value;
    if (user_input_element == '') {
        deactivate_query_submit_button();
    }

    widget_user_selected_list = document.getElementById("user_input").value.split(",")
    is_remove_widget = true;
    disable_user_input();
}

function click_dropdown(elem) {
    $(".easychat-widget-dropdown-content").toggleClass("easychat-display-dropdown");
    scroll_to_bottom();
}

function search_dropdown(element)
{       var original_height = 0,
            el;
                    if (original_height == 0) {
                    el = document.getElementsByClassName('easychat-widget-dropdown-content')[0];
                    var el_style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
                    original_height = parseInt(el_style.height);
                }

                var inputVal = $(element).val();
                var elem = document.getElementById('dropdown_choices');

                if (inputVal != '') {
                    drop_down_html = '<a href="#" style = "display:none;"></a>'
                    var is_empty = true;
                    for (var i = 0; i < drop_down_choices_theme6.length; i++) {
                        if (drop_down_choices_theme6[i].toUpperCase().indexOf(inputVal.toUpperCase()) != -1) {
                            drop_down_html += '<a href="#" onclick="append_selected_drop_down_into_user_query(this); return false;"> ' + drop_down_choices_theme6[i] + '</a>';
                            is_empty = false;
                        }
                    }

                    if (is_empty) {
                        drop_down_html = '<a href="#">' + NO_RESULT_FOUND + '</a>'
                    }
                } else {
                    drop_down_html = '<a href="#" style = "display:none;"></a>'

                    for (var i = 0; i < drop_down_choices_theme6.length; i++) {
                        drop_down_html += '<a href="#" onclick="append_selected_drop_down_into_user_query(this); return false;"> ' + drop_down_choices_theme6[i] + '</a>';
                    }
                }

                elem.innerHTML = drop_down_html;


                var el_style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
                var height = parseInt(el_style.height);
                if (window.outerWidth > 450) {
                if (height < original_height) {
                    el.style.marginBottom = (original_height - height) + 10 + 'px';
                    scroll_to_bottom();
                } else {
                    el.style.marginBottom = '10px';
                    scroll_to_bottom();
                }
            }
}


var selected 
        var last_selected = ""
        var dropdown
        var optionsContainer
        var searchBox
            var optionsList 
        var radioBtns
        var arrow
        let open

function dropdown_click(){
     selected = document.getElementsByClassName("selected-dropdown")[0];
         dropdown=document.getElementsByClassName("wrapper-box-dropdown")[0];
        optionsContainer = document.getElementsByClassName("options-container-dropdown")[0];
         searchBox=document.getElementsByClassName("search-box-dropdown")[0].firstElementChild;
     
         optionsList = document.querySelectorAll(".option-dropdown");
         radioBtns=document.querySelectorAll(".radio-dropdown");
         arrow=document.getElementsByClassName("arrow-dropdown")[0];
   
     open=!open;
     if(optionsContainer.classList.contains("active"))
     {
        optionsContainer.className = "options-container-dropdown"
     } else {

         document.getElementsByClassName("options-container-dropdown")[0].className = "options-container-dropdown active"
        optionsContainer.classList.add("active")
     }

          if(open)
          {
            selected.innerHTML=DROPDOWN_TEXT;
            selected.style.border="none";
            arrow.style.transform="rotate(180deg)";
            searchBox.parentElement.style.display = "block"
            $('#easychat-chat-container').animate({ scrollTop: 9999 }, 400);

          }
          else
          {
            
             searchBox.parentElement.style.display =  "none"
            radioBtns.forEach(function(eachRadioBtn){
                if(eachRadioBtn.checked)
                {
                  selected.innerHTML=eachRadioBtn.nextElementSibling.innerText;
                  eachRadioBtn.parentElement.setAttribute("id","selected-blue-radio-dropdown");
                }
                else{
                  eachRadioBtn.parentElement.removeAttribute("id");
                }
                  
            })

            arrow.style.transform="rotate(0deg)";
            
           
          }
          searchBox.value="";
          filterList("");
          if(optionsContainer.classList.contains("active"))
          searchBox.focus(); 
}

function search_keyup_dropdown(e)
{
    filterList(e.target.value);
}

 //Searching
        
          function filterList(searchTerm) {
            searchTerm=searchTerm.toLowerCase();
            let flag=0;
            document.querySelector(".no-elem-dropdown").style.display="none";
        
                
            optionsList = Array.prototype.slice.call(optionsList);
            optionsList.forEach(function(option){
              let label=option.firstElementChild.nextElementSibling.innerText.toLowerCase();
              if(label.indexOf(searchTerm)!=-1)
              {
                flag=1;
                option.style.display="block";
              }
              else
              {
                option.style.display="none";
              }
            })
            if(flag===0)
            document.querySelector(".no-elem-dropdown").style.display="block";
          }

//drop select
function dropdown_select(eachOption){

                append_selected_drop_down_into_user_query(eachOption.getElementsByClassName('dropdown-label')[0])
                

                if(last_selected != "")
                last_selected.removeAttribute("id");

                eachOption.setAttribute("id","selected-blue-radio-dropdown");
                selected.innerHTML = eachOption.getElementsByClassName('dropdown-label')[0].innerText
                last_selected = eachOption

                searchBox.parentElement.style.display =  "none"
                
                open=false;
                if(open)
                arrow.style.transform="rotate(180deg)";
                else
                arrow.style.transform="rotate(0deg)";
                optionsContainer.classList.remove("active");
         
}


function append_dropdown(drop_down_choices) {
    var search_dropdown_icon = '<svg style="cursor: pointer; margin: 0px 10px; " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M5.55942 11.1182C6.79289 11.118 7.99083 10.7051 8.96247 9.94526L12.0174 13L13 12.0174L9.9451 8.96269C10.7054 7.991 11.1185 6.79285 11.1188 5.55912C11.1188 2.49396 8.62474 0 5.55942 0C2.49409 0 0 2.49396 0 5.55912C0 8.62428 2.49409 11.1182 5.55942 11.1182ZM5.55942 1.38978C7.85893 1.38978 9.72898 3.25973 9.72898 5.55912C9.72898 7.85851 7.85893 9.72846 5.55942 9.72846C3.2599 9.72846 1.38985 7.85851 1.38985 5.55912C1.38985 3.25973 3.2599 1.38978 5.55942 1.38978Z" fill="#757575"/>\
                            </svg> '

    if (drop_down_choices.length > 0) {
        drop_down_choices_theme6 = drop_down_choices;

    try {
        $('.easychat-drop-down-container').remove()
        
        }catch(err)
        {
            console.log(err)
        }

        var drop_down_html = '<div id="easychat-drop-down-container" class="easychat-drop-down-container easychat-theme6-drop-down-widget" >'
       
        drop_down_html +=  '<div class="container-dropdown">\
                <div class="select-box-dropdown">\
                  <div class="options-container-dropdown">'
                        for (var i = 0; i < drop_down_choices.length; i++) {
        drop_down_html += ' <div class="option-dropdown" onclick="dropdown_select(this)">\
                            <input type="radio" class="radio-dropdown" id="dropdown-option-'+i+'" name="category"/>\
                            <label class="dropdown-label" for="dropdown-option-'+i+'">'+drop_down_choices[i] +'</label>\
                        </div>\
                        <hr />'

         }
                           
                      drop_down_html += '<p class="no-elem-dropdown">'+NO_RESULT_FOUND+'</p>\
                  </div>\
                  <div class="wrapper-box-dropdown" onclick="dropdown_click()">\
                    <div class="box-dropdown">\
                      <div class="selected-dropdown" style="color: #909090 !important; border: none !important;">'
                        +DROPDOWN_TEXT+
                      '</div>\
                    </div>\
                    <div class="arrow-dropdown">\
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M0.200408 0.739665C0.48226 0.436132 0.956809 0.418556 1.26034 0.700408L5 4.22652L8.73967 0.700408C9.0432 0.418556 9.51775 0.436132 9.7996 0.739665C10.0815 1.0432 10.0639 1.51775 9.76034 1.7996L5.51034 5.7996C5.22258 6.0668 4.77743 6.0668 4.48967 5.7996L0.239665 1.7996C-0.0638681 1.51775 -0.081444 1.0432 0.200408 0.739665Z" fill="#909090"/>\
                        </svg>\
                        </div>\
                  </div>\
                    <div class="search-box-dropdown" style="display: none">\
                      <input type="text" placeholder="&nbsp; &nbsp; &nbsp; '+SEARCH_TEXT+'" onkeyup="search_keyup_dropdown(event)">\
                      </input>\
                    </div>\
                </div>\
              </div>\
              </div>'

        document.getElementById("easychat-chat-container").innerHTML += drop_down_html;


         selected = document.getElementsByClassName("selected-dropdown")[0];
         last_selected = ""
         dropdown=document.getElementsByClassName("wrapper-box-dropdown")[0];
        optionsContainer = document.getElementsByClassName("options-container-dropdown")[0];
         searchBox=document.getElementsByClassName("search-box-dropdown")[0].firstElementChild;
    
         optionsList = document.querySelectorAll(".option-dropdown");
         radioBtns=document.querySelectorAll(".radio-dropdown");
         arrow=document.getElementsByClassName("arrow-dropdown")[0];
         open=false;
            }

}
function append_selected_drop_down_into_user_query(element) {
    activate_query_submit_button();
    document.getElementById("user_input").value = element.innerText;
    widget_user_selected_list = document.getElementById("user_input").value.split()
    is_remove_widget = true;
    disable_user_input();
}

function append_selected_time_into_user_query(element) {
    easychat_timepicker_list = document.getElementsByClassName("easychat-timepicker");
    var user_input = "";
    for (var i = 0; i < easychat_timepicker_list.length; i++) {
        var time_input_value = easychat_timepicker_list[i].value
        hh_mm = time_input_value
        hh_mm = hh_mm.replace(" ", "")
        if (/^([0-9]{1,2}:[0-9]{1,2}[aApP][mM])$/.test(hh_mm) == false) {
            document.getElementById("user_input").value = ""
            is_remove_widget = false;
            return;
        }
        user_input += easychat_timepicker_list[i].placeholder + ": " + hh_mm;
        if (i != easychat_timepicker_list.length - 1) {
            user_input += ", ";
        }
    }
    activate_query_submit_button();
    document.getElementById("user_input").value = user_input;
    is_remove_widget = true;
    disable_user_input();
}


function append_bot_range_slider(range_slider_list) {
    if (range_slider_list.length > 0) {
        easychat_range_slider_container = document.getElementById("easychat-range-slider-container");
        if (easychat_range_slider_container != undefined && easychat_range_slider_container != null) {
            easychat_range_slider_container.remove();
        }

        var range_slider_html = '<div class="easychat-range-slider-container" id="easychat-range-slider-container">';
        for (var i = 0; i < range_slider_list.length; i++) {
            range_slider = range_slider_list[i];
            range_slider_html += '<div style="width:100%;display:inline-block;">\
              <p>' + MIN_TEXT + ': ' + range_slider["min"] + ', ' + MAX_TEXT + ': ' + range_slider["max"] + '</p>\
              <p>' + range_slider["placeholder"] + ': <span id="easychat-range-slider-value-' + i + '"></span></p>\
              <div class = "range-slider-div">'
            if (EASYCHAT_BOT_THEME == 'theme_2') {
                range_slider_html += '<label>' + RANGE_TEXT + '</label>'
            }
            range_slider_html += '<input class = "range-slider-input easychat-range-slider" type="range" min="' + range_slider["min"] + '" max="' + range_slider["max"] + '" value="' + range_slider["max"] + '" id="easychat-range-slider-' + i + '" oninput="append_selected_value_into_user_query(this)" placeholder="' + range_slider["placeholder"] + '">\
            </div></div>';
        }
        range_slider_html += '</div>';
        document.getElementById("easychat-chat-container").innerHTML += range_slider_html;
        element_response = document.querySelectorAll(".easychat-range-slider-container")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight

        disable_user_input();
        /*for (var i = 0; i < range_slider_list.length; i++) {
            document.getElementById("easychat-range-slider-" + i).onchange();
        }*/
    }
}

function append_single_bot_range_slider(range_slider_list){
    if (range_slider_list.length > 0) {
        easychat_range_slider_container = document.getElementById("easychat-bot-single-range-slider");
        if (easychat_range_slider_container != undefined && easychat_range_slider_container != null) {
            easychat_range_slider_container.remove();
        }
        var range_slider = range_slider_list[0];
        var range_slider_html = '<div class="easychat-bot-range-slider-div" id="easychat-bot-single-range-slider">\
                <div class="easychat-bot-range-slider-div-heading">'
                    + SELECT_VALUE_TEXT +
                '</div>\
                <div class="easychat-bot-range-slider-area">\
                    <input type="range" min="' + range_slider["min"] + '" max="' + range_slider["max"] + '" value="' + range_slider["max"] + '" steps="1" id="easychat-single-range-input" ';
        if (is_internet_explorer){
            range_slider_html += 'onchange="change_single_range_slider_values_for_ie(this.value)';
        }else{
            range_slider_html += 'oninput="change_single_range_slider_values()';
        }
        range_slider_html += '">\
                    <div id="easychat-bot-slider-output">'+range_slider["max"]+'</div>\
                </div>\
                <div class="easychat-bot-range-min-max-value-wrapper">\
                    <div class="easychat-bot-range-min-value-div">\
                        <div class="easychat-bot-range-min-inner-value" id="easychat-bot-range-selected-value" style="color:'+BOT_THEME_COLOR+'">\
                        </div>\
                        <p>'+ SELECTED_VALUE_TEXT +'</p>\
                    </div>\
                </div>\
                <div class="easychat-bot-range-button-wrapper">\
                    <button type="button" class="easychat-bot-range-cancel-button" onclick="remove_single_range_slider()" style="color:'+BOT_THEME_COLOR+'">'
                       + CANCEL_TEXT +  
                    '</button>\
                    <button type="button" class="easychat-bot-range-confirm-button" onclick="append_selected_range_slider_value()" style="background:'+BOT_THEME_COLOR+'">'
                      + SUBMIT_TEXT +  
                     '</button>\
                </div>\
            </div>'
        document.getElementById("easychat-chat-container").innerHTML += range_slider_html;
        element_response = document.querySelectorAll(".easychat-bot-range-slider-div")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight

        var single_range_slider = document.getElementById("easychat-single-range-input")
        var min = single_range_slider.min
        var max = single_range_slider.max
        var value = single_range_slider.value
        var percent_grad = ((value-min)/(max-min))*100 
        var single_range_output = document.getElementById("easychat-bot-range-selected-value");
        single_range_output.innerHTML = single_range_slider.value;

        single_range_slider.style.background = 'linear-gradient(94.34deg, '+ BOT_THEME_COLOR +' 1%, '+ BOT_THEME_COLOR +' '+ percent_grad+'%, rgba(106, 109, 205, 0.3) '+percent_grad+'%, rgba(106, 109, 205, 0.3) 100%)'
        disable_user_input();
        /*for (var i = 0; i < range_slider_list.length; i++) {
            document.getElementById("easychat-range-slider-" + i).onchange();
        }*/
    }    
}

function change_single_range_slider_values(){
    var single_range_slider = document.getElementById("easychat-single-range-input")
    var min = single_range_slider.min
    var max = single_range_slider.max
    var value = single_range_slider.value
    var single_range_output = document.getElementById("easychat-bot-range-selected-value");
    single_range_output.innerHTML = single_range_slider.value;
    var percent_grad = (value - min)/(max - min)*100

    single_range_slider.style.background = 'linear-gradient(94.34deg, '+ BOT_THEME_COLOR +' 1%, '+ BOT_THEME_COLOR +' '+ percent_grad+'%, rgba(106, 109, 205, 0.3) '+percent_grad+'%, rgba(106, 109, 205, 0.3) 100%)'
    single_range_slider.oninput = function() {
        var this_percent_grad = (this.value - this.min)/(this.max - this.min)*100
        this.style.background = 'linear-gradient(94.34deg, '+ BOT_THEME_COLOR +' 1%, '+ BOT_THEME_COLOR +' '+ this_percent_grad+'%, rgba(106, 109, 205, 0.3) '+this_percent_grad+'%, rgba(106, 109, 205, 0.3) 100%)'
        single_range_output.innerHTML = this.value;
    };
}

function change_single_range_slider_values_for_ie(value){
    var single_range_output = document.getElementById("easychat-bot-range-selected-value");
    single_range_output.innerHTML = value;
}

function remove_single_range_slider(){
    document.getElementById("easychat-bot-single-range-slider").remove();
    enable_user_input();
    is_remove_widget = true;
}

function append_selected_range_slider_value(){
    var range_slider_selected_value = document.getElementById("easychat-bot-range-selected-value").innerHTML;
    document.getElementById("user_input").value = SELECTED_VALUE_TEXT+': ' + range_slider_selected_value;
    document.getElementById("easychat-bot-single-range-slider").remove();
    document.getElementById("easychat-query-submit-div").click();
    enable_user_input();
    is_remove_widget = true;
}

function append_multi_bot_range_slider(range_slider_list){
    if (range_slider_list.length > 0) {
        easychat_range_slider_container = document.getElementById("easychat-bot-multi-range-slider");
        if (easychat_range_slider_container != undefined && easychat_range_slider_container != null) {
            easychat_range_slider_container.remove();
        }
        var range_slider = range_slider_list[0];
        var range_slider_html = '<div class="easychat-bot-range-slider-div" id="easychat-bot-multi-range-slider">\
                <div class="easychat-bot-range-slider-div-heading">'
                + SELECT_VALUE_TEXT +
                '</div>\
                <div class="easychat-bot-range-slider-area" style="margin-bottom: 28px; margin-top:0px;">\
                    <input type="text" class="js-range-slider" name="my_range" value="" data-skin="round" data-type="double" data-min="' + range_slider["min"] + '" data-max="' + range_slider["max"] + '" data-grid="false" />\
                    <div id="multi-range-slider-min-max-static-value"><div>' + range_slider["min"] + '</div><div>' + range_slider["max"] + '</div></div>\
                    <input type="text" maxlength="1" value="' + range_slider["min"] + '" class="from dual-range-min-value" id="multi-range-slider-min-val" readonly oninput="change_multi_range_min_value()" style="display: none" />\
                    <input type="text" maxlength="1" value="' + range_slider["max"] + '" class="to dual-range-max-value" id="multi-range-slider-max-val" readonly oninput="change_multi_range_max_value()" style="display: none" />\
                </div>\
                <div class="easychat-bot-range-min-max-value-wrapper">\
                    <div class="easychat-bot-range-min-value-div">\
                        <div class="easychat-bot-range-min-inner-value" id="easychat-bot-range-min-selected-value" style="color:'+BOT_THEME_COLOR+'">\
                            12000\
                        </div>\
                        <p>'+ MIN_TEXT +'</p>\
                    </div>\
                    <svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <path d="M0 0.905273H9" stroke="#8F8F8F"/>\
                        </svg>\
                    <div class="easychat-bot-range-max-value-div">\
                        <div class="easychat-bot-range-max-inner-value" id="easychat-bot-range-max-selected-value" style="color:'+BOT_THEME_COLOR+'">\
                            1023400\
                        </div>\
                        <p>'+ MAX_TEXT +'</p>\
                    </div>\
                </div>\
                <div class="easychat-bot-range-button-wrapper">\
                    <button type="button" class="easychat-bot-range-cancel-button" onclick="remove_multi_range_slider()" style="color:'+BOT_THEME_COLOR+'">'
                       + CANCEL_TEXT +  
                    '</button>\
                    <button type="button" class="easychat-bot-range-confirm-button" onclick="append_selected_multi_range_slider_value()" style="background:'+BOT_THEME_COLOR+'">'
                        + SUBMIT_TEXT +
                     '</button>\
                </div>\
            </div>'

        document.getElementById("easychat-chat-container").innerHTML += range_slider_html;
        element_response = document.querySelectorAll(".easychat-bot-range-slider-div")
        element_response_previous_height += element_response[element_response.length - 1].clientHeight

        var multi_range_min_slider = document.getElementById("multi-range-slider-min-val");
        var multi_range_max_slider = document.getElementById("multi-range-slider-max-val");
        document.getElementById("easychat-bot-range-min-selected-value").innerHTML = multi_range_min_slider.value;
        document.getElementById("easychat-bot-range-max-selected-value").innerHTML = multi_range_max_slider.value;

        setTimeout(function(){$(".js-range-slider").ionRangeSlider({
            onChange: function(data) {
                slider_from = data.from;
                slider_to = data.to;
                updateValues();
            }
        }); }, 100);

        disable_user_input();
    }
}

function change_multi_range_min_value(){
            slider_from = +$(this).prop("value");
            var min = $range.data('min');
            var max = $range.data('max')
            if (slider_from < min) {
                slider_from = min;
            }
            if (slider_from > slider_to) {
                slider_from = slider_to;
            }
            updateValues();
            updateRange();    
}

function change_multi_range_max_value(){
            slider_to = +$(this).prop("value");
            var min = $range.data('min');
            var max = $range.data('max')
            if (slider_to > max) {
                slider_to = max;
            }
            if (slider_to < slider_from) {
                slider_to = slider_from;
            }
            updateValues();
            updateRange();    
}

var updateValues = function() {
    $(".from").prop("value", slider_from);
    $(".to").prop("value", slider_to);
    document.getElementById("easychat-bot-range-min-selected-value").innerHTML = document.getElementById("multi-range-slider-min-val").value;
    document.getElementById("easychat-bot-range-max-selected-value").innerHTML = document.getElementById("multi-range-slider-max-val").value;
};

var updateRange = function() {
    slider_range = $range.data("ionRangeSlider");
    range.update({
        slider_from: slider_from,
        slider_to: slider_to
    });
};


function remove_multi_range_slider(){
    document.getElementById("easychat-bot-multi-range-slider").remove();
    enable_user_input();
    is_remove_widget = true;    
}

function append_selected_multi_range_slider_value(){
    var range_slider_selected_min_value = document.getElementById("easychat-bot-range-min-selected-value").innerHTML;
    var range_slider_selected_max_value = document.getElementById("easychat-bot-range-max-selected-value").innerHTML;
    document.getElementById("user_input").value = MIN_TEXT+': ' + range_slider_selected_min_value + ', '+MAX_TEXT +': ' + range_slider_selected_max_value;
    document.getElementById("easychat-bot-multi-range-slider").remove();
    document.getElementById("easychat-query-submit-div").click();
    enable_user_input();
    is_remove_widget = true;    
}

function append_selected_value_into_user_query(element) {
    activate_query_submit_button();
    range_count = element.id.split("-")[3];
    document.getElementById("easychat-range-slider-value-" + range_count).innerHTML = element.value;
    var user_input = "";
    easychat_range_slider_list = document.getElementsByClassName("easychat-range-slider");
    for (var i = 0; i < easychat_range_slider_list.length; i++) {
        range_slider_element = easychat_range_slider_list[i];
        user_input += range_slider_element.placeholder + ": " + range_slider_element.value;
        if (i != easychat_range_slider_list.length - 1) {
            user_input += ", ";
        }
    }
    document.getElementById("user_input").value = user_input;
    is_remove_widget = true;
    disable_user_input();
}

/* Form Widget function starts */
var answers_filled = {};

function get_form_dropdown_html(id, options) {

    let html = 
    '<select id="' + id + '" class="easychat-form-select-input" onchange="update_answers_filled(this)" data-type="dropdown_list" >\
    <option selected></option>';

    options = options.split('$$$');
    for (let j = 0; j < options.length; ++j) {
        let option = options[j].trim();

        html += '<option value="' + option + '">' + option + '</option>';
    }

    html += '</select></div>';

    return html;


    

}

function get_form_checkbox_html(id, choices) {
    choices = choices.split('$$$');
    let html = '';
    for (let j = 0; j < choices.length; ++j) {
        let choice = choices[j].trim();

                   html +=  '<label for="easychat-check-box-' +id+'-'+ j + '">\
                    <div class="checkbox-item">\
                        <input type="checkbox" class="id="easychat-check-box '+id+'" onchange="onFormCheckBoxClick(this)" id="easychat-check-box-' +id+'-'+ j + '"  data-type="checkbox" value=\"' + choice + '\">\
                        <span class="checkbox_btn_choices_span" style="height: auto !important;  padding-left: 20px !important; font-size: 13px !important">'+ choice +'</span>\
                    </div>\
                </label>'
            

        // html += '<div style = "width: inherit; padding: 10px 3px 3px 10px; margin: 5px 0px;">\
        //             <label>\
        //                 <input type="checkbox" class="easychat-check-box ' + id + '" value=\"' + choice + '\" onchange="update_answers_filled(this)" data-type="checkbox">\
        //                 <span style="font-family: \'Silka\', Sans-Serif;"><th style="font-weight:inherit;text-align: left;">' + choice + '</th></span>\
        //             </label>\
        //         </div>';
    }

    html += '</div>'

    return html;
}

function get_form_radio_html(id, choices) {
    choices = choices.split('$$$');
    let html = '';
    for (let j = 0; j < choices.length; ++j) {
        let choice = choices[j].trim();

          html += '<label for="easychat-radio-' +id+'-'+ j + '">\
                    <div class="radio-item-'+id+'" >\
                        <input type="radio" class="easychat-radio" name="radio_button-"' +id+ ' onchange="handleFormRadio(this,\''+id+'\')" onclick="update_answers_filled(this)" data-type="radio"  id="easychat-radio-' +id+'-'+ j + '"  value=\"' + choice + '\">\
                        <span class="radio_btn_choices_span" style="height: auto !important; padding-left: 20px !important; font-size: 13px !important">'+ choice +'</span>\
                    </div>\
                </label>'

        // html += '<div style="width:inherit; padding: 5px 10px 8px 7px">\
        //             <label>\
        //             <input type="radio" name="radio_button-' + id + '" class="easychat-radio" onclick="update_answers_filled(this)" value="' + choice + '" data-type="radio">\
        //             <span style="font-family: "Silka", Sans-Serif;"><th style="font-weight:inherit;text-align: left;">' + choice + '</th></span>\
        //             </label>\
        //         </div>'
    }

    html += '</div>'

    return html;
}

function get_form_range_html(id, range) {
    range = range.split('-');

    let html = '<div class="easychat-range-slider-container">\
                    <div style="width:100%;display:inline-block;">\
                        <p> ' + MIN_TEXT + ': ' + range[0] + ', ' + MAX_TEXT + ': ' + range[1] + '</p>\
                        <p>' + RANGE_TEXT + ': <span id="easychat-range-slider-value-' + id + '"></span></p>\
                        <div class = "range-slider-div">\
                            <input class = "range-slider-input easychat-range-slider" type="range" min="' + range[0] + '" max="' + range[1] + '" value="' + range[1] + '" onchange="update_answers_filled(this)" data-type="range">\
                        </div>\
                    </div>\
                </div>';

    html += '</div>';

    return html;
}

//single range slider form

function get_form_append_single_bot_range_slider(id, range){
        var range_slider = range.split('-');
        easychat_range_slider_container = document.getElementById("easychat-bot-single-range-slider-"+id);
        if (easychat_range_slider_container != undefined && easychat_range_slider_container != null) {
            easychat_range_slider_container.remove();
        }
    
        var range_slider_html = '<div class="easychat-bot-range-slider-div" id="easychat-bot-single-range-slider-'+id+'" style="width: 318px !important;">\
                <div class="easychat-bot-range-slider-div-heading">'
                    + SELECT_VALUE_TEXT +
                '</div>\
                <div class="easychat-bot-range-slider-area">\
                    <input type="range" min="' + range_slider[0] + '" max="' + range_slider[1] + '" value="' + range_slider[1] + '" steps="1" id="easychat-single-range-input-'+id+'" onchange="form_change_single_range_slider_values(\''+id+'\')" data-type="range">\
                    <div id="easychat-bot-slider-output-'+id+'">'+range_slider[1]+'</div>\
                </div>\
                <div class="easychat-bot-range-min-max-value-wrapper">\
                    <div class="easychat-bot-range-min-value-div">\
                        <div class="easychat-bot-range-min-inner-value" id="easychat-bot-range-selected-value-'+id+'" style="color:'+BOT_THEME_COLOR+'; width: 130px !important;">\
                        </div>\
                        <p>'+ SELECTED_VALUE_TEXT +'</p>\
                    </div>\
                </div>\
            </div>'
        // document.getElementById("easychat-chat-container").innerHTML += range_slider_html;
        return range_slider_html;
          
       
}

function form_range_slider_initializations(id){
     // element_response = document.querySelectorAll("#easychat-bot-range-slider-div-"+id)
     //    element_response_previous_height += element_response[element_response.length - 1].clientHeight

        var single_range_slider = document.getElementById("easychat-single-range-input-"+id)
        var min = single_range_slider.min
        var max = single_range_slider.max
        var value = single_range_slider.value
        var single_range_output = document.getElementById("easychat-bot-range-selected-value-"+id);
        single_range_output.innerHTML = single_range_slider.value;
        var percent_grad = (value - min)/(max - min)*100
        update_answers_filled(single_range_slider)
        single_range_slider.style.background = 'linear-gradient(94.34deg, '+ BOT_THEME_COLOR +' 1%, '+ BOT_THEME_COLOR +' '+ percent_grad+'%, rgba(106, 109, 205, 0.3) '+percent_grad+'%, rgba(106, 109, 205, 0.3) 100%)'
 
}

function form_change_single_range_slider_values(id){
    var single_range_slider = document.getElementById("easychat-single-range-input-"+id)
    var min = single_range_slider.min
    var max = single_range_slider.max
    var value = single_range_slider.value
    var single_range_output = document.getElementById("easychat-bot-range-selected-value-"+id);
    single_range_output.innerHTML = single_range_slider.value;
    var percent_grad = (value - min)/(max - min)*100

    single_range_slider.style.background = 'linear-gradient(94.34deg, '+ BOT_THEME_COLOR +' 1%, '+ BOT_THEME_COLOR +' '+ percent_grad+'%, rgba(106, 109, 205, 0.3) '+percent_grad+'%, rgba(106, 109, 205, 0.3) 100%)'
    single_range_slider.oninput = function() {
        var this_percent_grad = (this.value - this.min)/(this.max - this.min)*100
        this.style.background = 'linear-gradient(94.34deg, '+ BOT_THEME_COLOR +' 1%, '+ BOT_THEME_COLOR +' '+ this_percent_grad+'%, rgba(106, 109, 205, 0.3) '+this_percent_grad+'%, rgba(106, 109, 205, 0.3) 100%)'
        single_range_output.innerHTML = this.value;
    };
    update_answers_filled(single_range_slider)
}

//Multi Range slider form

function get_form_append_multi_bot_range_slider(id, range){
        var range_slider = range.split('-');
        easychat_range_slider_container = document.getElementById("easychat-bot-multi-range-slider-"+id);
        if (easychat_range_slider_container != undefined && easychat_range_slider_container != null) {
            easychat_range_slider_container.remove();
        }
        var range_slider_html = '<div class="easychat-bot-range-slider-div" id="easychat-bot-multi-range-slider-'+id+'" style="width: 318px !important;">\
                <div class="easychat-bot-range-slider-div-heading">'
                + SELECT_VALUE_TEXT +
                '</div>\
                <div class="easychat-bot-range-slider-area" style="margin-bottom: 28px; margin-top:0px;">\
                    <input  type="text" id="js-range-slider-'+id+'" class="js-range-slider" name="my_range" value="" data-skin="round" data-type="double" data-min="' + range_slider[0] + '" data-max="' + range_slider[1] + '" data-grid="false" />\
                    <div id="multi-range-slider-min-max-static-value-'+id+'"><div>' + range_slider[0] + '</div><div>' + range_slider[1] + '</div></div>\
                    <input type="text" maxlength="1" value="' + range_slider[0] + '" class="from dual-range-min-value" id="multi-range-slider-min-val-'+id+'" readonly onchange="form_change_multi_range_min_value(\''+id+'\',this)" style="display: none" data-type="range"/>\
                    <input type="text" maxlength="1" value="' + range_slider[1] + '" class="to dual-range-max-value" id="multi-range-slider-max-val-'+id+'" readonly onchange="form_change_multi_range_max_value(\''+id+'\',this)" style="display: none" data-type="range"/>\
                </div>\
                <div class="easychat-bot-range-min-max-value-wrapper">\
                    <div class="easychat-bot-range-min-value-div">\
                        <div class="easychat-bot-range-min-inner-value" id="easychat-bot-range-min-selected-value-'+id+'" style="color:'+BOT_THEME_COLOR+'; width: 130px !important;">\
                            12000\
                        </div>\
                        <p>'+ MIN_TEXT +'</p>\
                    </div>\
                    <svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <path d="M0 0.905273H9" stroke="#8F8F8F"/>\
                        </svg>\
                    <div class="easychat-bot-range-max-value-div">\
                        <div class="easychat-bot-range-max-inner-value" id="easychat-bot-range-max-selected-value-'+id+'" style="color:'+BOT_THEME_COLOR+'; width: 130px !important;">\
                            1023400\
                        </div>\
                        <p>'+ MAX_TEXT +'</p>\
                    </div>\
                </div>\
            </div>'
            return range_slider_html;


        // disable_user_input();
    }

    function form_multi_range_slider_initializations(id){

        var multi_range_min_slider = document.getElementById("multi-range-slider-min-val-"+id);
        var multi_range_max_slider = document.getElementById("multi-range-slider-max-val-"+id);
        document.getElementById("easychat-bot-range-min-selected-value-"+id).innerHTML = multi_range_min_slider.value;
        document.getElementById("easychat-bot-range-max-selected-value-"+id).innerHTML = multi_range_max_slider.value;
        document.getElementById("js-range-slider-"+id).value= multi_range_min_slider.value+";"+multi_range_max_slider.value
        update_answers_filled(document.getElementById("js-range-slider-"+id))
        setTimeout(function(){$("#js-range-slider-"+id).ionRangeSlider({
            onChange: function(data) {
                slider_from = data.from;
                slider_to = data.to;
                updateValuesForm(id);
                update_answers_filled(document.getElementById("js-range-slider-"+id))
            }
        }); }, 100);
    }

    var updateValuesForm = function(id) {
    $("#multi-range-slider-min-val-"+id).prop("value", slider_from);
    $("#multi-range-slider-max-val-"+id).prop("value", slider_to);
    document.getElementById("easychat-bot-range-min-selected-value-"+id).innerHTML = document.getElementById("multi-range-slider-min-val-"+id).value;
    document.getElementById("easychat-bot-range-max-selected-value-"+id).innerHTML = document.getElementById("multi-range-slider-max-val-"+id).value;
};

function form_change_multi_range_min_value(id){
            slider_from = +$(this).prop("value");
            var min = $range.data('min');
            var max = $range.data('max')
            if (slider_from < min) {
                slider_from = min;
            }
            if (slider_from > slider_to) {
                slider_from = slider_to;
            }
            updateValuesForm(id);
            updateRangeForm();    
            
}

function form_change_multi_range_max_value(id){
            slider_to = +$(this).prop("value");
            var min = $range.data('min');
            var max = $range.data('max')
            if (slider_to > max) {
                slider_to = max;
            }
            if (slider_to < slider_from) {
                slider_to = slider_from;
            }
            updateValuesForm(id);
            updateRangeForm();  
}

var updateRangeForm = function() {
    slider_range = $range.data("ionRangeSlider");
    range.update({
        slider_from: slider_from,
        slider_to: slider_to
    });
};


function get_form_date_picker(form_id, calendar_type)
{
    calender_date_widget_value = null; 
    var calendar_divs_length = document.getElementsByClassName('easychat-calendar-div').length;
    var div_id = calendar_divs_length + 1
    var list_length = 0
    if(calendar_type.indexOf("Single") != -1)
    {
        list_length = 1
    } else {
        list_length = 2
    }

//----------------------------only date picker-----------------
var html = '<div class="easychat-calendar-div" id="form-calendar-div-'+form_id+'" style = "margin-bottom: 8px; left: 0% !important; width: 90% !important; margin-bottom: 15px;">'
for (var i = 0; i < list_length; i++) {
    var id = form_id + "-"+i
    var label = LABEL_ADD
    var hr_add = false
    var data_type = "single_date"
    var type_picker = "Single date"
    if(list_length == 2)
    { type_picker = "Double date"
      data_type = "double_date"
    }
    if(list_length > 1 && i == 0)
    {
        label = LABEL_FROM
        hr_add = true
        data_type = "double_date"
         html += '<label style="margin-left: -70%;color: #615b5b;font-weight: 100 !important;">'+LABEL_FROM+'</label>'
    } else if(list_length>1 && i == 1)
    {
        hr_add = false
        label = LABEL_TO
        data_type = "double_date"
         html += '<label style="margin-left: -70%;color: #615b5b;font-weight: 100 !important;">'+LABEL_TO+'</label>'
    }
  
         html += '<div class="main-wrapping-div">\
                    <div class="easychat-date-btn">\
                        <input type="text" readonly id="datepicker-'+id+'" data-type="'+data_type+'" onchange="formchangedDate(\''+id+'\',\''+type_picker+'\',this)" style="width: 150px !important;" class="date-time-picker-btns easychat-datepicker-btn" value="'+label+' '+LABEL_DATE+'">\
                            <div class="date-displayer datepicker" id="date-displayer-'+id+'" onclick="callModal(\''+id+'\')" style="margin-top: -35px;">\
                                <div class="row" style="display: flex; justify-content: center; margin-top: -5px;">\
                                    <div class="col s6 date">\
                                        16\
                                    </div>\
                                    <div class="col s6" style="margin-left: 10px">\
                                        <div class="row month-year" style="margin-bottom: 1px !important;margin-top: 8px !important;">\
                                            May 2021\
                                        </div>\
                                        <div class="row day">\
                                            Thursday\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </input>\
                    </div>\
                </div>'
        if(hr_add)
        {
            html += '<hr style="width: 85%; background-color: #e7e8ec; margin-top: 12px; margin-bottom: 8px "/>'
        }
    }

        html+= '</div>'

    return html;
     
}

function form_date_picker_initializations(id, type_picker)
{

    var list_length = 0
    if(type_picker.indexOf("Single") != -1)
    {
        list_length = 1
    } else {
        list_length = 2
    }
    if(list_length > 0)
     {
        if(list_length == 1)
            {   
                $( "#datepicker-"+id+"-0" ).datepicker({autoclose: true}) 
                     
            }
        else if(list_length == 2)
        {
            $( "#datepicker-"+id+"-0" ).datepicker({autoclose: true});
            $( "#datepicker-"+id+"-1" ).datepicker({autoclose: true});
        }
    }

}

function formchangedDate(i, type, element){
            if(document.querySelector("#datepicker-"+i).value!==(LABEL_ADD+" "+LABEL_DATE) && document.querySelector("#datepicker-"+i).value!==(LABEL_FROM+" "+LABEL_DATE) && document.querySelector("#datepicker-"+i).value!==(LABEL_TO+" "+LABEL_DATE)){
                var dayArr=["Monday","Tueday","Wednesday","Thursday","Friday","Saturday","Sunday"];
                var monthArr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
                var date=new Date(document.querySelector("#datepicker-"+i).value);
                var datenum=date.getDate();
                var month=date.getMonth();
                var year=date.getFullYear();
                var day=date.getDay();
                if(day == 0)
                    day = 7
                document.querySelector("#date-displayer-"+i+" .date").innerHTML=datenum;
                document.querySelector("#date-displayer-"+i+" .month-year").innerHTML=monthArr[month]+" "+year;
                document.querySelector("#date-displayer-"+i+" .day").innerHTML=dayArr[day-1];
                document.getElementById("datepicker-"+i).style.opacity="0";
                document.getElementById("date-displayer-"+i).style.visibility="visible";
                
                update_answers_filled(document.getElementById("datepicker-"+i))
                
            }
        
        }


        //------------------form time picker


function get_form_time_picker(form_id, calendar_type)
{
    calender_time_widget_value = null; 
    var calendar_divs_length = document.getElementsByClassName('easychat-calendar-div').length;
    var div_id = calendar_divs_length + 1
    var list_length = 0
    if(calendar_type.indexOf("Single") != -1)
    {
        list_length = 1
    } else {
        list_length = 2
    }

//----------------------------only date picker-----------------
var html = '<div class="easychat-calendar-div" id="calendar-div-'+div_id+'" style = "margin-bottom: 8px; left: 0% !important; width: 90% !important; margin-bottom: 15px;">'
for (var i = 0; i < list_length; i++) {
    var id = form_id + "-"+i
    var label = LABEL_ADD
    var hr_add = false
    var data_type = "single_time"
    var type_picker = "Single time"
    if(list_length == 2)
    { type_picker = "Double time"
    data_type = "double_time"
     }
    if(list_length > 1 && i == 0)
    {
        label = LABEL_FROM
        hr_add = true
        data_type = "double_time"
         html += '<label style="margin-left: -70%;color: #615b5b;">'+LABEL_FROM+'</label>'
    } else if(list_length>1 && i == 1)
    {
        hr_add = false
        label = LABEL_TO
        data_type = "double_time"
         html += '<label style="margin-left: -70%;color: #615b5b;">'+LABEL_TO+'</label>'
    }

    currently_time_picker_type = type_picker

         html += '\
                <div class="main-wrapping-div">\
                    <div class="easychat-time-btn">\
                      <input type="button" id="time-picker-btn-'+id+'" data-type="'+data_type+'" class="date-time-picker-btns easychat-timepicker-btn" value="'+label+' '+LABEL_TIME+'" onclick="formhandleTimePickerClick(\''+id+'\')" style="width: 150px !important;"></input>\
                    </div>\
                </div>'

        if(hr_add)
        {
            html += '<hr style="width: 85%; background-color: #e7e8ec; margin-top: 12px; margin-bottom: 8px "/>'
        }
    }

        html+= '</div>'


    return html;
     
}

function formhandleTimePickerClick(id){
            document.querySelector(".custom-timepicker").style.display="inline-block";
            timepicker_in_form = true
            unCheckAll()
            currently_opened_time_modal_id = id

        }

function form_time_picker_initializations()
{

  if(document.getElementsByClassName('easychat-time-btn').length>0)
       { 
        const input = document.querySelector('.easychat-timepicker-btn');

        const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(input), 'value');

        Object.defineProperty(input, 'value', {
            set: function(t) {
                console.log('Input value was changed programmatically');
                return descriptor.set.apply(this, arguments);
            },
            get: function() {
            return descriptor.get.apply(this);
            }
        });

           
     }

}


     
        

function get_form_file_attach_html(id, file_type) {
    file_type = file_type_ext[file_type];
    let html = '<div class="easychat-dragdropContainer__XPS" style="width: 85% !important; left: 0% !important;">\
                    <span class="easychat-dragdropMsg__XPS" style="color:' + BOT_THEME_COLOR + ';height:80%;flex-direction: column;"><p style="width:90%;">' + FILE_ATTACHEMENT_TEXT + ' <br>(' + file_type + ')</p><p id = "max-file-size-allowed-message"style="color:red;font-size:13px;padding-left: 10px; padding-right: 10px;">*' + FILE_SIZE_LIMIT_TEXT + ' '+ max_file_size_allowed + ' MB</p></span>\
                    <div class="easychat-dragdrop__XPS" style="border: 4px dashed ' + BOT_THEME_COLOR + '"><input id="s32" onchange="check_selected_file(this)" type="file" accept="' + file_type + '"></div>\
                    <div class="easychat-dragdropafterSelect__XPS" style="display:none;"><span>'+ FILE_ICON_SVG + '</span>\
                        <span class="easychat-form-widget-file-alert">Error Message</span>\
                        <button class="easychat-form-widget-upload-btn" onclick="upload_form_attachment(this)" style="color:' + BOT_THEME_COLOR + '" data-type="file_attach">' + SUBMIT_TEXT + '</button>\
                        <div style="width:auto;float:left;display:none;"><img src="' + EASYCHAT_IMG_PATH + 'preloader.svg" style="height:3em;"></div>\
                    </div>\
                    <div class="form-uploaded-file" style="display: none;">\
                    ' + FILE_ICON_SVG2 + '\
                    <p id="file-name-'+id+'"></p>\
                    </div>\
                </div>\
                </div>';
    
    return html;
}

function check_selected_file(el) {
    if (el.files[0] != undefined || el.files[0] != null) {
        var file_ext = el.files[0].name.split(".");
        file_ext = el.files[0].name.split(".")[file_ext.length - 1];

        if (el.getAttribute("accept").toString().indexOf(file_ext.toLowerCase()) !== -1) {
            if (el.files[0].size <= (max_file_size_allowed) * 1024 * 1024) {
                el.parentElement.nextElementSibling.style.backgroundColor = BOT_THEME_COLOR;
                el.parentElement.nextElementSibling.style.cssText += "padding: 1em; box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2); border-radius: 1em;";
                el.parentElement.nextElementSibling.firstElementChild.nextElementSibling.style.cssText += "display: flex; font-size: unset; color: black;";
                
                file_name = el.files[0].name.split(".")
                if (el.files[0].name.length >= 9) {
                    file_name_mod = file_name[0].slice(0, 8) + "... ." + file_name[file_name.length - 1]
                } else {
                    file_name_mod = el.files[0].name
                }

                el.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = file_name_mod + ' <div onclick="remove_file_from_form_attachment(this)" class="easychat-dragdropAlertMsgClose__XPS" style="color: ' + BOT_THEME_COLOR + ';">' + get_cross_button_svg() + '</div>'
                el.parentElement.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.style.display = "inline-block"
                el.parentElement.nextElementSibling.style.display = "flex";
                el.parentElement.nextElementSibling.style.alignItems = "center";
                el.parentElement.previousElementSibling.style.display = "none"
                el.parentElement.style.display = "none"
            } else {
                alert("Please Select file < " + max_file_size_allowed + "MB*")
                scroll_to_bottom()
            }
        } else {
            alert('Please select correct file type');
        }
    } else {
        alert('No file selected')
    }
}

function remove_file_from_form_attachment(el) {
    el.parentElement.parentElement.previousElementSibling.firstElementChild.value = "";
    
    el.parentElement.nextElementSibling.style.display = "none";
    
    el.parentElement.style.display = "none";
    el.parentElement.parentElement.previousElementSibling.previousElementSibling.style.display = "flex";
    el.parentElement.parentElement.previousElementSibling.style.display = "block";
    
    el.parentElement.parentElement.style.cssText += "background-color: unset; padding: 0; box-shadow: unset; border-radius: unset; display: none";
    el.parentElement.innerHTML = "";
}

function upload_form_attachment(el) {
    var attachment_data = el.parentElement.previousElementSibling.firstElementChild.files[0];

    el.nextElementSibling.style.height = "34px";
    el.nextElementSibling.style.display = "inline-block"
    el.previousElementSibling.firstElementChild.style.display = "none"
    el.style.display = "none"

    var reader = new FileReader();
    reader.readAsDataURL(attachment_data);
    reader.onload = function() {

        base64_str = reader.result.split(",")[1];

        uploaded_file = [];
        uploaded_file.push({
            "filename": attachment_data.name,
            "base64_file": base64_str,
            "user_id": user_id,
        });

        upload_form_attachment_to_server(uploaded_file, el);
    };

    reader.onerror = function(error) {
        console.log('Error: ', error);
    };

}

function upload_form_attachment_to_server(uploaded_file, el) {
    var json_string = JSON.stringify(uploaded_file)
    json_string = encrypt_variable(json_string)

    encrypted_data = {
        "Request": json_string
    }

    var params = JSON.stringify(encrypted_data);

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/chat/upload-attachment/", true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = this.response
            response = JSON.parse(response)
            response = custom_decrypt(response)
            response = JSON.parse(response);

            el.parentElement.style.display = 'none';
            if (response.status == 200) {
                attached_file_src = response.src;
                attached_file_name = response.name;
                el.parentElement.nextElementSibling.lastElementChild.innerHTML = attached_file_name;
                el.parentElement.nextElementSibling.style.display = 'flex';
                update_answers_filled(el, attached_file_src);
                attached_file_src = "";
            } else {
                alert("Malicious File not accepted");
                el.parentElement.previousElementSibling.style.display = 'block';
                el.parentElement.previousElementSibling.previousElementSibling.style.display = 'flex';
                attached_file_src = "";
            }
        }
    }
    xhttp.send(params);
}

function append_create_form_modal(form_name, form_fields_list) {
    disable_sticky_div();
    form_fields_list = JSON.parse(form_fields_list);
    current_form_list = form_fields_list
    widget_form_name = form_name;
    form_fields = form_fields_list;
    form_fields_length = form_fields_list.length;

    if (form_fields_list.length > 0) {
        let html = '\
        <div class="easychat-form-container" id="easychat-form-container">\
            <h5>' + form_name + '</h5>\
            <hr style="\
    margin-bottom: 10px;\
    margin-left: -18px;\
    margin-right: -17px;\
    background-color: #f0f1f5 !important;\
">';

        var dropdown_ids = []
        for (let i = 0; i < form_fields_list.length; ++i) {
            let id = "input-" + i;
            let parent_id = 'parent-' + id;
            if(form_fields_list[i].optional == "true")
           { html += '\
            <div class="input-field-custom" id="parent-' + id + '">\
                <label for="' + id + '">' + form_fields_list[i].label_name + '</label>\
            ';
        }else {
            html += '\
            <div class="input-field-custom" id="parent-' + id + '">\
                <label for="' + id + '">' + form_fields_list[i].label_name + '<span style="color: red;">*</span></label>\
            ';
            
        }

            answers_filled[parent_id] = {type: form_fields_list[i].input_type, validator: form_fields_list[i].validator, optional: form_fields_list[i].optional};
            
            if (form_fields_list[i].input_type == "text_field") {             
                html += '<input type="text" style="border:0px !important; border-bottom: 1px solid #D9D9D9 !important; border-radius: 0px !important;font-size: 13px !important;" id="' + id + '" class="easychat-form-input" placeholder="' + form_fields_list[i].placeholder_or_options + '" autocomplete="off" onkeyup="update_answers_filled(this)" data-type="text_field">\
                                </div>\
                ';
            } else if (form_fields_list[i].input_type == "dropdown_list") {
                dropdown_ids.push(id);
                html += get_form_dropdown_html(id, form_fields_list[i].placeholder_or_options);

            } else if (form_fields_list[i].input_type == "checkbox") {
                html += get_form_checkbox_html(id, form_fields_list[i].placeholder_or_options);

            } else if (form_fields_list[i].input_type == "radio") {
                html += get_form_radio_html(id, form_fields_list[i].placeholder_or_options);

            } else if (form_fields_list[i].input_type == "range") {

                if(form_fields_list[i].range_type.toString().indexOf("Single") != -1)
                    html += get_form_append_single_bot_range_slider(id, form_fields_list[i].placeholder_or_options);
                else {
                    html += get_form_append_multi_bot_range_slider(id, form_fields_list[i].placeholder_or_options);
                }

            } else if (form_fields_list[i].input_type == "file_attach") {
                html += get_form_file_attach_html(id, form_fields_list[i].placeholder_or_options);
            } else if(form_fields_list[i].input_type == "date_picker")
            {
                html += get_form_date_picker(id, form_fields_list[i].calendar_type);
            }
            else if(form_fields_list[i].input_type == "time_picker")
            {
                html += get_form_time_picker(id, form_fields_list[i].calendar_type);
            }
        }
         html += '<div id = "easychat_customer_info_form_error" style="display:none;">';
    html +=
        '<p id = "easychat_customer_info_form_error_ptag" style="color:red; margin-bottom:0px; margin-top:8px;"></p>';
    html += "</div>";
        html += '<div style = "height: 5em;"><input class="livechat-modal-submit-btn" style="background-color:' + BOT_THEME_COLOR + ' ; float: right; padding: 0px;"onclick="submit_form_confirmation()" type="submit" value="' + SUBMIT_TEXT + '">'
        html += '<input type = "button" value = "' + CANCEL_TEXT + '" class = "easychat-customer-modal-cancel-btn" onclick="remove_form_from_container(this)" style = "float: right;"></div>';

        html += '</div>';

        document.getElementById('easychat-chat-container').innerHTML += html;
       
        for (let i = 0; i < form_fields_list.length; ++i) {
            let id = "input-" + i;
            if(form_fields_list[i].input_type == "range")
                {
                if(form_fields_list[i].range_type.indexOf("Single") != -1)
                { 
                    form_range_slider_initializations(id)
                } else {
                    form_multi_range_slider_initializations(id)
                }
                } 
                else if (form_fields_list[i].input_type == "date_picker")
                {
                    form_date_picker_initializations(id, form_fields_list[i].calendar_type)
                }
    } 

    if (form_fields_list[i].input_type == "time_picker"){
        form_time_picker_initializations()
    }

        setTimeout(function () {
            for (let i = 0; i < dropdown_ids.length; ++i) {
                $('#' + dropdown_ids[i]).select2({
                    width: "100%",
                    placeholder: DROPDOWN_TEXT,
                    allowClear: true,
                });
            }
        }, 200)
    }

}

function update_answers_filled(el, file_src) {
    let parent_id = el.parentElement.id;

    if (!parent_id) parent_id = el.parentElement.parentElement.parentElement.id;
    if (!parent_id) parent_id = el.parentElement.parentElement.parentElement.parentElement.id;

    let id = parent_id.split('-')[2];
    let single_answer_type = ['text_field', 'dropdown_list', 'radio', 'range', 'file_attach', 'double', 'single_date', 'double_date', 'single_time', 'double_time'];


    if(single_answer_type.toString().indexOf(el.dataset.type) != -1 ) {

        if (el.dataset.type == 'file_attach') {
            answers_filled[parent_id]['value'] = file_src;

        } else {
            if(el.dataset.type == "double")
            {   
                var value = el.value.split(';')
                el.value = value[0]+' - '+value[1]
            } 

            if(el.dataset.type == "single_date")
            {
                parent_id = el.parentElement.parentElement.parentElement.parentElement.id;
                answers_filled[parent_id]['value'] = LABEL_DATE+": "+render_date_in_alpha(el.value);

            } else if(el.dataset.type == "double_date"){
                var div_id = el.id.split("-")[2]
                var from_date=$("#datepicker-input-"+div_id+"-0").val()
                var to_date=$("#datepicker-input-"+div_id+"-1").val()
                from_date = render_date_in_alpha(from_date)
                to_date = render_date_in_alpha(to_date);
                if(from_date== null || from_date+"" == "undefined")
                    from_date = ""
                if(to_date == null || to_date+"" == "undefined")
                    to_date =""
                parent_id = el.parentElement.parentElement.parentElement.parentElement.id;
                answers_filled[parent_id]['value'] = LABEL_FROM+" "+LABEL_DATE+": "+from_date+", "+LABEL_TO+" "+LABEL_DATE+": " +to_date

            } else if(el.dataset.type == "single_time")
            {
                parent_id = el.parentElement.parentElement.parentElement.parentElement.id;

                answers_filled[parent_id]['value'] = LABEL_TIME+": "+convertTime12to24(el.value);

            } else if(el.dataset.type == "double_time"){
               
                var div_id = el.id.split("-")[4]
                var from_time=$("#time-picker-btn-input-"+div_id+"-0").val()
                var to_time=$("#time-picker-btn-input-"+div_id+"-1").val()
                from_time = convertTime12to24(from_time)
                to_time = convertTime12to24(to_time)

                if(from_time== null || (from_time+"").indexOf("undefined")!=-1)
                    from_time = ""

                if(to_time == null || (to_time+"").indexOf("undefined")!=-1)
                    to_time =""
                parent_id = el.parentElement.parentElement.parentElement.parentElement.id;
                answers_filled[parent_id]['value'] = LABEL_FROM+" "+LABEL_TIME+": "+from_time+", "+LABEL_TO+" "+LABEL_TIME+": "+to_time;

            } 
            else {
                answers_filled[parent_id]['value'] = el.value;
            }
                     
                        // if (el.dataset.type == 'range') {
            //     el.parentElement.previousElementSibling.lastElementChild.innerHTML = el.value;
            // }
        }
    } else {
        if (el.checked) {
            if(!answers_filled[parent_id]['value']) {
                answers_filled[parent_id]['value'] = [];
            }
            answers_filled[parent_id]['value'].push(el.value);
        } else {
            let choices = answers_filled[parent_id]['value'];
            for (let i=0; i<choices.length; ++i) {
                if (choices[i] == el.value) choices.splice(i, i+1);
            }
        }
    }
}

function remove_form_from_container() {
    current_form_list = ""
    document.getElementById('easychat-form-container').remove();
    enable_user_input();
    enable_sticky_div();
}

function submit_form_confirmation() {


 var error_elem = document.getElementById("easychat_customer_info_form_error");
    error_elem.style.display = "none";
   var error_text = ""

    for (id in answers_filled) {
        let value = answers_filled[id]['value'];
        if(value == undefined)
        {
         
        }
        else {
        if(answers_filled[id]['type'] == 'text_field')
        {
            if(answers_filled[id]['validator'] == '6digitotp_validator')
            {
                let isnum = /^\d+$/.test(value);

                if(!isnum || value.length != 6)
                {
                    error_text=OTP_SIX_DIGIT_ERROR_TEXT
                } 
            } else if( answers_filled[id]['validator'] == '4digitotp_validator' )
            {
                let isnum = /^\d+$/.test(value);
                if(!isnum || value.length != 4)
                {
                    error_text=OTP_FOUR_DIGIT_ERROR_TEXT
                
                }
            }
            else if( answers_filled[id]['validator'] == 'email_validator' )
            {
                if(validate_email(value) == false)
                {
                   error_text=EMAIL_ERROR_TEXT
                
                }
            }
            else if( answers_filled[id]['validator'] == 'pan_validator' )
            {
                 var regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;    
                  if(!regex.test(value)){          
                  error_text=PAN_ERROR_TEXT 
                     
                  }    
            }
            else if( answers_filled[id]['validator'] == 'name_validator' )
            {
               
                 if(validate_name(value)== false)
                {
                   error_text=NAME_ERROR_TEXT 
                    
                }
            }
        }

         if(value.toString().length == 0 && answers_filled[id]['optional'] == "true")
                    {
                        error_text = ""
                    }

             if (error_text != "") {
                error_elem.style.display = "block";
                error_elem.firstChild.innerHTML = error_text;
                return;
            }


        }
        if (value == undefined || (Array.isArray(value) && value.length == 0)) {
            if(answers_filled[id]['optional'] != "true")
            {
                alert(FILL_FORM_TEXT);
                return;
            } 
        }
    }
    document.getElementById('form-submit-confirmation-text').innerHTML = SUBMIT_FORM_TEXT;
    document.getElementById('form-submit-confirmation-yes').value = YES;
    document.getElementById('form-submit-confirmation-no').value = NO;
    document.getElementById('submit-form-confirmation-modal').style.display = 'flex';

}

function cancel_form_submission() {
    document.getElementById('submit-form-confirmation-modal').style.display = 'none';
}

function submit_form_widget() {
    let html = '<div class = "easychat-form-container"><h5>' + widget_form_name + '</h5>';

    let form_data = {};
    for (let i = 0; i < form_fields_length; ++i) {
        html += '<p class= "easychat-form-label">' + form_fields[i].label_name + '</p>'

        let input_val = answers_filled['parent-input-'+i]['value'];
        if(input_val == undefined)
            input_val = ""

        if (Array.isArray(input_val)) {
            for(let j=0; j<input_val.length; ++j) {
                html += '<p class="easychat-form-value">' + input_val[j] + '</p>';    
            }
        } else {
            let value = input_val;
            if (answers_filled['parent-input-'+i]['type'] == 'file_attach') {
                value = input_val.split('/');
                value = value[value.length-1];
            }
            html += '<p class="easychat-form-value">' + value + '</p>';
        }

        if (i != form_fields_length - 1) {
            html += '<hr style = "border: 1px solid #e6e6e6">';
        }
        form_data[form_fields[i].label_name] = [answers_filled['parent-input-'+i]['type'], input_val];
    }

    form_data_misdashboard = JSON.stringify([widget_form_name, form_data])

    html += '</div>';

    document.getElementById('easychat-chat-container').innerHTML += html;
    remove_form_from_container();
    document.getElementById('submit-form-confirmation-modal').style.display = 'none';

    var json_string = JSON.stringify({
        user_id: user_id,
        form_name: widget_form_name,
        form_data: form_data,
        bot_id: bot_id
    });

    json_string = encrypt_variable(json_string);
    json_string = encodeURIComponent(json_string);

    var xhttp = new XMLHttpRequest();
    var params = 'json_string=' + json_string
    xhttp.open("POST", '/chat/save-form-data/', true);

    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            entered_suggestion = false;
            response = JSON.parse(this.responseText);
            response = custom_decrypt(response)
            response = JSON.parse(response);

            if (response.status == 200) {
                console.log('Form data saved!');
                form_data = {}
                form_data_misdashboard = ""
            }
        }
    }
    xhttp.send(params);

    send_message_to_server("", user_id, bot_id, bot_name, "");
    change_is_flow_ended_variable = false
    timepicker_in_form = false


    enable_user_input();
    scroll_to_bottom();
}

/* Form Widget function ends */

function show_bot_typing_loader() {

    var element = document.getElementById("div-bottyping-loader")
    if (element == null || element == undefined) {
        if (EASYCHAT_BOT_THEME == "theme_1") {
            document.getElementById("easychat-chat-container").innerHTML += '<div class="spinner" id="div-bottyping-loader" style="display: block;">\
                                                                                <div class="bounce1"></div>\
                                                                                <div class="bounce2"></div>\
                                                                                <div class="bounce3"></div>\
                                                                            </div>'
        } else if (EASYCHAT_BOT_THEME == "theme_2") {

            document.getElementById("easychat-chat-container").innerHTML += '<div class="typing-indicator" id="div-bottyping-loader">' + TYPING_TEXT + '<span></span>\
                                                                                <span></span><span></span>\
                                                                            </div>'
        }
        else {
            document.getElementById("easychat-chat-container").innerHTML += '<div style="width:100%;float:left;display:inline-block;" id="div-bottyping-loader"><img src="' + EASYCHAT_IMG_PATH + 'preloader.svg" style="height:3em;"></div>';
        }
        scroll_to_bottom()
    }
}


function show_start_bot_loader() {
    if (EASYCHAT_BOT_THEME == "theme_1") {
        document.getElementById("easychat-chat-container").innerHTML += '<div class="spinner" id="div-bot-start-loader" style="display: block;">\
                                                                            <div class="bounce1"></div>\
                                                                            <div class="bounce2"></div>\
                                                                            <div class="bounce3"></div>\
                                                                        </div>'
    } else {
        document.getElementById("easychat-chat-container").innerHTML += '<div style="width:100%;float:left;padding-left:28%;padding-top:46%" id="div-bot-start-loader"><img src="' + EASYCHAT_IMG_PATH + 'preloader.svg" style="height:12em;"></div>';
    }
}

function hide_start_bot_loader() {
    document.getElementById("div-bot-start-loader").remove();
}



function increase_brightness(hex, percent){
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return '#' +
       ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}

function send_message_to_server(message, userid, bot_id, bot_name, channel_params, path, thumbnail_url,preview_attachment_path) {
    is_bot_response_message_showed = false
    if (bot_response_delay_allowed) {
        reset_bot_response_delay_timer();
    }
    if (path === undefined) {
        path = ""
    }
    if (thumbnail_url == undefined) {
        thumbnail_url = "";
    }
    window.clearTimeout(bot_inactivity_timer);

    if (is_livechat) {
        send_message_in_socket(message, livechat_session_id, "Customer", path, thumbnail_url, preview_attachment_path);
        return;
    }


    url_parameters = get_url_vars();

    document.getElementById("easychat-chat-container").click();
    if(global_file_name[0] == "" || global_file_name[0] == undefined)
    show_bot_typing_loader();
    disable_user_input();
    data = {
        "session_id": session_id,
        "window_location": decodeURIComponent(window_location),
        "is_form_assist": form_assist_enabled,
        "attached_file_src": attached_file_src,
        "file_extension": file_extension,
        "is_save_attachment_required": is_save_attachment_required,
        "widget_user_selected_list": widget_user_selected_list,
        "is_sticky_message": is_sticky_message,
        "is_video_recorder_allowed": is_video_recorder_allowed,
        "is_go_back_enabled": is_go_back_enabled,
        "entered_suggestion": entered_suggestion,
        "is_campaign_link": is_campaign_link,
        "form_data_misdashboard": form_data_misdashboard,
        "client_city": client_location_city,
        "client_state": client_location_state,
        "client_pincode": client_location_pincode,
        "web_page_source": decodeURIComponent(url_parameters["web_page_source"])
    }
    if (embed_cookies != "" && embed_cookies != null && embed_cookies != undefined) {
        embed_cookies_decrypted = custom_decrypt(embed_cookies)
        embed_cookies_decrypted = JSON.parse(embed_cookies_decrypted)
        try {
            data = Object.assign({}, data, embed_cookies_decrypted);
        } catch (err) {
            for (key in embed_cookies_decrypted) {
                data[key] = embed_cookies_decrypted[key];
            }
        }
    }
    if (embed_meta_data != "" && embed_meta_data != null && embed_meta_data != undefined) {
        embed_meta_data_decrypted = custom_decrypt(embed_meta_data)
        embed_meta_data_decrypted = JSON.parse(embed_meta_data_decrypted)
        try {
            data = Object.assign({}, data, embed_meta_data_decrypted);
        } catch (err) {
            for (key in embed_meta_data_decrypted) {
                data[key] = embed_meta_data_decrypted[key];
            }
        }
    }

    try {
        var thumbs_down_queryselector = document.querySelectorAll("#thumbs-down");
        for (i = 0; i < thumbs_down_queryselector.length; i++) {
            thumbs_down_queryselector[i].removeAttribute('onclick');
            thumbs_down_queryselector[i].removeAttribute('onmouseover');
            thumbs_down_queryselector[i].removeAttribute('onmouseout');
            thumbs_down_queryselector[i].style.cursor = "unset";
        }
    } catch (err) { }
    try {
        var thumbs_up_queryselector = document.querySelectorAll("#thumbs-up");
        for (i = 0; i < thumbs_up_queryselector.length; i++) {
            thumbs_up_queryselector[i].removeAttribute('onclick');
            thumbs_up_queryselector[i].removeAttribute('onmouseover');
            thumbs_up_queryselector[i].removeAttribute('onmouseout');
            thumbs_up_queryselector[i].style.cursor = "unset";
        }
    } catch (err) { }

    channel_params = JSON.stringify(data);
    var json_string = JSON.stringify({
        query_token_id: query_token_id,
        message: message,
        user_id: userid,
        channel: "Web",
        channel_params: channel_params,
        bot_id: bot_id,
        bot_name: bot_name,
        bot_display_name: bot_name,
        selected_language: selected_language,
    });
    json_string = encrypt_variable(json_string);
    json_string = encodeURIComponent(json_string);

    var xhttp = new XMLHttpRequest();
    var params = 'json_string=' + json_string
    xhttp.open("POST", EASYCHAT_QUERY_URL, true);

    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    current_request_xhttp = xhttp
    if(global_file_name[0] != "" && global_file_name[0] != undefined)
    {   
        
        var progress_circle = $('.circle')

         progress_circle.circleProgress({
            startAngle: -Math.PI / 2,
            value: 0.0,
            size: 40,
            thickness: 4,
            emptyFill: "#eeeaef",
            fill: {gradient: [increase_brightness(BOT_THEME_COLOR,25),increase_brightness(BOT_THEME_COLOR,50)]}
        });  

        xhttp.upload.onprogress = function (e){
            let upload_value = (e.loaded/e.total).toFixed(2);
           
            progress_circle.circleProgress('value', upload_value).on('circle-animation-progress', function(event, progress, stepValue) {
                        progress_circle.css("display", "block")
                        $('.circle-progress-value').text((stepValue * 100).toFixed(0) + "%");
                        if((stepValue * 100).toFixed(0) == 100)
                        {
                              var element = document.getElementsByClassName("easychat-dragdropContainer__XPS")[0]
                              if (element != null && element != undefined) {
                                if(last_chosen_file_type.indexOf("png") != -1 || last_chosen_file_type.indexOf("jpeg") != -1 || last_chosen_file_type.indexOf("jpg") != -1 ||last_chosen_file_type.indexOf("gif") != -1 || last_chosen_file_type.indexOf("mp4") != -1 )
                                        {
                                            element.remove()
                                        }
                                }     

                        }
                    });
                };
    }


   
    xhttp.onreadystatechange = function () {
            var succesfull_attachment = document.querySelectorAll('.successful-submission-text')
            succesfull_attachment = succesfull_attachment[succesfull_attachment.length - 1]
            if (this.readyState == 4 && this.status == 200) {
            entered_suggestion = false;
            response = JSON.parse(this.responseText);
            response = custom_decrypt(response)
            response = JSON.parse(response);

             if(global_file_name[0] != "" && global_file_name[0] != undefined)
                    {
                        var element = document.getElementsByClassName("easychat-dragdropContainer__XPS")[0]
                              if (element != null && element != undefined) {

                                    element.remove()
                                }  
                    }

            if (response.status_code == '200') {
         if(global_file_name[0] != "" && global_file_name[0] != undefined)
            {
             
                 succesfull_attachment.style.display = "block"
                 if( previewImg != null &&  previewImg != undefined && previewImg != "")
                    {
                        if(last_chosen_file_type.indexOf("png") != -1 || last_chosen_file_type.indexOf("jpeg") != -1 || last_chosen_file_type.indexOf("jpg") != -1 ||last_chosen_file_type.indexOf("gif") != -1 || last_chosen_file_type.indexOf("mp4") != -1)
                        {
                            previewImg.style.display = "block"  
                            scroll_to_bottom()
                        }
                    }
                  global_file_name = ""

            }

                user_id = response.user_id;
                is_user_authenticated = response["response"]["is_user_authenticated"]

                // starting session management

                start_authenticated_session(user_id, is_user_authenticated)
                
                query_token_id = response.query_token_id
                var date = new Date();
                date.setTime(date.getTime() + (BOT_USER_ID_EXPIRATION * 60 * 1000));
                parent.postMessage({
                    event_id: 'set_cookie',
                    data: {
                        cookie_value: user_id,
                        cookie_name: "easychat_userid",
                        expiration: date.toGMTString(),
                        path: ""
                    }
                }, "*")
                attached_file_src = "";
                file_extension = null;
                is_save_attachment_required = null;
                widget_user_selected_list = null;
                is_sticky_message = false;
                is_video_recorder_allowed = false;
                is_campaign_link = false;
                hide_bot_typing_loader();
                if (form_assist_enabled) {
                    response["response"]["recommendations"].push(["Do not disturb"]);
                    do_not_disturb = "true";
                }
                file_src = ""
                file_name = ""
                try{
                    if("attached_file_src" in response["response"]){
                        file_src = window.location.origin + response["response"]["attached_file_src"]
                        file_name = response["response"]["attached_file_name"]
                    }
                }catch(err){
                    console.log(err)
                }
                if(file_src != "" && file_src != undefined &&  file_src != null){
                    append_user_attachment_preview(file_name,file_src,file_src)
                }
               

                enable_user_input();
                detectmob();
                append_bot_response(response);
                enable_footer();
                enable_sticky_div();
                focus_user_input();
                //scroll_to_bottom();
                current_request_xhttp=null
                
                form_assist_enabled = false;
            } else if (response.status_code == '500') {
                enable_user_input();
                append_bot_text_response(INVALID_SESSION_ID_RESPONSE_TEXT);
                global_file_name = ""
                is_bot_response_message_showed = true;
                attached_file_src = "";
                scroll_to_bottom();
                current_request_xhttp = null

            }
        }
    }
    xhttp.send(params);
}

function getPrevSessionHistory(prev_session_id) {
    var json_string = JSON.stringify({
        session_id: prev_session_id,
        bot_id: bot_id
    });
    json_string = encrypt_variable(json_string);
    json_string = encodeURIComponent(json_string);

    var xhttp = new XMLHttpRequest();
    var params = 'json_string=' + json_string
    xhttp.open("POST", "/chat/get-previous-session-data/", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            response = custom_decrypt(response)
            response = JSON.parse(response);
            if (response['status'] == 200) {
                response_objs = response["prev_session_response"]
                for (var i = 0; i < response_objs.length; i++) {
                    user_msg = response_objs[i]['message_received']
                    bot_resp = response_objs[i]['response_json']
                    playSound(STATIC_MP3_PATH + '/juntos1.mov');
                    append_user_input(user_msg)
                    append_prev_session_response(bot_resp);
                }
            }
            scroll_to_bottom();
        }
    }
    xhttp.send(params);
}

function default_bot_color(bot_id) {
    var json_string = JSON.stringify({
        bot_id: bot_id,
    });
    json_string = encrypt_variable(json_string);
    json_string = encodeURIComponent(json_string);

    var xhttp = new XMLHttpRequest();
    var params = "json_string=" + json_string;
    xhttp.open("POST", "/chat/get-bot-message-image/", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onload = function () {
        if (this.status == 200) {
            response = JSON.parse(this.responseText);
            response = custom_decrypt(response)
            response = JSON.parse(response);
            BOT_THEME_COLOR = "#" + response.bot_theme_color
            document.getElementById("easychat-navbar-wrapper").style.backgroundColor = BOT_THEME_COLOR;
            document.getElementById("user_input").style.borderColor = BOT_THEME_COLOR;
            document.getElementById("model-feedback-header").style.color = BOT_THEME_COLOR;
            document.getElementById("img-scroll-to-bottom").style.color = BOT_THEME_COLOR;
        }
    }
    xhttp.send(params);
}

function custom_button_change(x) {
    // x.style.backgroundColor = BOT_THEME_COLOR;
    x.style.setProperty('background-color', BOT_THEME_COLOR, 'important')
    x.style.color = "white";
    x.style.borderWidth = "0.05em";
    x.style.borderColor = BOT_THEME_COLOR
    x.style.borderStyle = "solid";
}

function custom_button_change_normal(x) {
    if (x.getAttribute("easychat-feedback-selected") == "true") { return; }

    if (EASYCHAT_BOT_THEME == 'theme_1') {
        x.style.setProperty('background-color', "transparent", 'important')
        x.style.color = BOT_THEME_COLOR;
    } else if (EASYCHAT_BOT_THEME == 'theme_2') {
        //do nothing  if theme 6 
    }
    else {
        x.style.setProperty('background-color', "#f6f6f6", 'important')
        x.style.color = BOT_THEME_COLOR;
    }
}

function custom_button_change_card(x) {
    x.style.backgroundColor = BOT_THEME_COLOR;
    x.style.color = "white";
    x.style.borderRadius = "1em";
}


function custom_button_change_normal_card(x) {
    x.style.backgroundColor = "white";
    x.style.color = "black";
    x.style.borderRadius = "1em";
}

function append_bot_inactivity_msg() {
    if (is_livechat == true) {
        return;
    }
    if (!is_bot_inactivity_msg_present && is_livechat == false) {
        append_bot_text_response(bot_inactivity_msg)
        if (is_text_to_speech_required) {
            text_to_speech(bot_inactivity_msg)
        }
        is_bot_inactivity_msg_present = true
        scroll_to_bottom();

        maximize_chatbot(1);
    }
}


function reset_bot_inactivity_timer() {
    window.clearTimeout(bot_inactivity_timer);
    bot_inactivity_timer = setTimeout(append_bot_inactivity_msg, bot_inactivity_time * 1000);
}

function disable_bot_inactivity_detection() {
    bot_inactivity_detection_required = false;

    if (bot_inactivity_timer != null) {
        window.clearTimeout(bot_inactivity_timer);
    }
}

function append_bot_response_delay_message() {
    if (is_livechat == false && is_bot_response_message_showed == false) {
        append_bot_text_response(bot_response_delay_message)
        if (is_text_to_speech_required) {
            text_to_speech(bot_response_delay_message)
        }
        scroll_to_bottom();
        show_bot_typing_loader()
    }
}

function reset_bot_response_delay_timer() {

    if(bot_message_delay_timer != null){
        window.clearTimeout(bot_message_delay_timer);
    }
    bot_message_delay_timer = setTimeout(append_bot_response_delay_message, bot_response_delay_timer * 1000);
}

function sticky_scroll_forward() {
    document.getElementById("easychat-sticky-intents").scrollBy(200, 0);
}

function sticky_scroll_backward() {
    document.getElementById("easychat-sticky-intents").scrollBy(-200, 0);
}

function send_sticky_message(user_input, intent_id) {
    if (sticky_button_display_format == "Menu") {
        let sticky_menu = document.getElementById('easychat_sticky_menu_items');
        sticky_menu.className = 'easychat-sticky-menu-items';
    }

    entered_suggestion = true;
    is_sticky_message = true;
    send_user_input(user_input, intent_id);
}

function disable_sticky_div() {
    try {
        var easychat_sticky_div = document.getElementById('easychat-sticky');

        if (easychat_sticky_div) {
            easychat_sticky_div.style.pointerEvents = 'none';
        }
    } catch (err) {
        console.log(err);
    }
}

function enable_sticky_div() {
    try {
        var easychat_sticky_div = document.getElementById('easychat-sticky');

        if (easychat_sticky_div) {
            easychat_sticky_div.style.pointerEvents = 'auto';
        }
    } catch (err) {
        console.log(err);
    }
}

function append_hamburger_items(hamburger_items)
{
    var html=""
    var index=717;
    complete_hamburger_list = hamburger_items
    if(hamburger_items.length>0 && EASYCHAT_BOT_THEME == "theme_7")
    {
        for(var i=0;i<hamburger_items.length;i++)
    {     
    if(EASYCHAT_BOT_THEME == "theme_7")
    {index= index+2;
        if(i%2 == 0)
        {
                
        html = html+'<li  class="category even" onclick="send_hamburger_intent('+i+')" id="hamburger_li_'+i+'" data-ember-action="" data-ember-action-'+index+'="'+index+'">'
        
        }else
        {html = html+'<li class="category odd" onclick="send_hamburger_intent('+i+')" id="hamburger_li_'+i+'" data-ember-action="" data-ember-action-'+index+'="'+index+'">'
        }
             html=html+ '<div class="category-inner">\
                        <div class="category-icon">\
                            <i class="fa ' + hamburger_items[i][2] + ' category-icon-img" aria-hidden="true" style = "font-size: 1.2em; color: '+BOT_THEME_COLOR+'" id="bot-hamburger-icon_'+index+'"></i>\
                        </div>\
                        <div class="block-with-text">'+hamburger_items[i][3]+'</div>\
                    </div>\
                </li>'

        }
    }
    document.getElementById("bot_hamburger_container").innerHTML = html
    }   
}


var send_hamburger_intent = function (index)
{
    intent_key = complete_hamburger_list[index][1]
    intent_name = complete_hamburger_list[index][4]
    link = complete_hamburger_list[index][5]

    if(intent_key == "1883")
    {
         var pattern = /^((http|https|ftp):\/\/)/;
    if (!pattern.test(link)) { link = "http://" + link; }
    window.open(link);
         $('.chatFullMenu').fadeToggle(250);
    

    }
    else
    {
        send_user_input(intent_name)
        $('.chatFullMenu').fadeToggle(250);
    }
}

function append_quick_menu_items(quick_items)
{
    quick_menu_html = 
        '<div class="quick-links-cards-container" style="display: inline-block;">'
    if(quick_items.length>0 && EASYCHAT_BOT_THEME == "theme_7")
    {
        for(var i=0;i<quick_items.length;i++)
    {     
        
        if(quick_items[i][5] == "nil")
        {
           
            quick_menu_html += '<div class="quick-link-card" onclick="send_user_input(\''+quick_items[i][4]+'\')">\
                <div class="quick-link-card-image-div"> <img class="quick-link-card-img" src="'+quick_items[i][2]+'"> </div>\
                <div class="quick-link-card-title" style="cursor: pointer;"><span>'+quick_items[i][3]+'</span></div>\
                </div>'
    
        }
        else 
        {
            quick_menu_html += '<div class="quick-link-card" onclick="window.open(\''+quick_items[i][5]+'\', \'_blank\')">\
                                <div class="quick-link-card-image-div"> <img class="quick-link-card-img" style="height:40px;" src="'+quick_items[i][2]+'"> </div>\
                                <div class="quick-link-card-title" style="cursor: pointer;"><span>'+quick_items[i][3]+'</span></div>\
                                </div>'
        }
        
    }
    quick_menu_html += '</div>'
    $('.easychat-bot-message-div').css("flex-direction","column")
    $('.easychat-bot-message-div div:eq(0)').after(quick_menu_html)
    }   
}

function append_sticky_intents(sticky_intents_list) {
    if (typeof sticky_intents_list !== 'undefined' && sticky_intents_list.length > 0) {
        var html = "";
        if (EASYCHAT_BOT_THEME == "theme_1") {
            html = '<div id="sticky-div" style=overflow:hidden;width:max-content;margin-bottom:1rem>'
            html += '<button class="arrow-button-left" onclick="sticky_scroll_backward()" style="border: none !important;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\
<path d="M0 0H18C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H0V0Z" fill=""/>\
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill=' + BOT_THEME_COLOR + '>\
</svg></button>'
            for (var i = 0; i < sticky_intents_list.length; i++) {
                html += '<button class="button_sticky" onclick="send_sticky_message(\'' + sticky_intents_list[i].name + '\', \'' + sticky_intents_list[i].id + '\')" style="color:' + BOT_THEME_COLOR + ';font-size:15px;outline:auto;border-radius:10px;border:0;height:30px;">' + sticky_intents_list[i].name + '</button>&nbsp;&nbsp;&nbsp;&nbsp;'
            }
            html += '<button class="arrow-button-right" onclick="sticky_scroll_forward()" style="border: none !important;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\
            <path d="M24 0H6C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H24V0Z" fill=""/>\
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.2929 4.29289C7.9024 4.68342 7.9024 5.31658 8.2929 5.70711L14.5858 12L8.2929 18.2929C7.9024 18.6834 7.9024 19.3166 8.2929 19.7071C8.6834 20.0976 9.3166 20.0976 9.7071 19.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L9.7071 4.29289C9.3166 3.90237 8.6834 3.90237 8.2929 4.29289Z" fill=' + BOT_THEME_COLOR + '>\
            </svg></button>'
            html += '</div>'
        } else {
            html = '<div id="sticky-div" style=overflow:hidden;width:max-content;margin-bottom:0.5em>'
            html += '<button class="arrow-button-left" onclick="sticky_scroll_backward()" style="border: none !important;"><svg width="24" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\
<path d="M0 0H18C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H0V0Z" fill=""/>\
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill=' + BOT_THEME_COLOR + '>\
</svg></button>'
            for (var i = 0; i < sticky_intents_list.length; i++) {
                html += '<button class="button_sticky" onclick="send_sticky_message(\'' + sticky_intents_list[i].name + '\', \'' + sticky_intents_list[i].id + '\')" style="color:' + BOT_THEME_COLOR + ';font-size:15px;outline:auto;border-radius:10px;border:0;height:30px;">' + sticky_intents_list[i].name + '</button>&nbsp;&nbsp;&nbsp;&nbsp;'
            }
            html += '<button class="arrow-button-right" onclick="sticky_scroll_forward()" style="border: none !important;"><svg width="24" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\
<path d="M24 0H6C2.68629 0 0 2.68629 0 6V18C0 21.3137 2.68629 24 6 24H24V0Z" fill=""/>\
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.2929 4.29289C7.9024 4.68342 7.9024 5.31658 8.2929 5.70711L14.5858 12L8.2929 18.2929C7.9024 18.6834 7.9024 19.3166 8.2929 19.7071C8.6834 20.0976 9.3166 20.0976 9.7071 19.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L9.7071 4.29289C9.3166 3.90237 8.6834 3.90237 8.2929 4.29289Z" fill=' + BOT_THEME_COLOR + '>\
</svg></button>'
            html += '</div>'
        }
        document.getElementById("easychat-sticky-intents").innerHTML = html;
        total_length_of_buttons = 0
        for (var button_iterator = 0; button_iterator < document.getElementsByClassName("button_sticky").length; button_iterator++) {
            total_length_of_buttons += document.getElementsByClassName("button_sticky")[button_iterator].offsetWidth
        }
        if (detectIEEdge()) {
            document.getElementById("sticky-div").style.width = 1.15 * (total_length_of_buttons) + "px";
            //document.getElementsByClassName("arrow-button-left")[0].style.display = "none";
            //document.getElementsByClassName("arrow-button-right")[0].style.display = "none";
        }

        if (total_length_of_buttons < 0.9 * document.getElementById("easychat-sticky-intents").offsetWidth) {
            document.getElementsByClassName("arrow-button-left")[0].style.display = "none";
            document.getElementsByClassName("arrow-button-right")[0].style.display = "none";
        }
        resize_chabot_window()
    } else {
        try {
            document.getElementById("easychat-sticky").remove();
            if (EASYCHAT_BOT_THEME == "theme_1") {
                document.getElementById('easychat-footer').style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.1)';
            }
            document.getElementById("easychat-chat-container").style.height = '500px';
        } catch (err) { }
    }
    
}

function append_sticky_intents_menu(sticky_intents_list_menu) {
   
    var arrow_up_svg = '<svg style = "fill:#000;width:15px;height:8px;" width="10" height="6" viewBox="0 0 10 6"  xmlns="http://www.w3.org/2000/svg">\
<path d="M5 4.37114e-07L10 5L9 6L5 2L0.999999 6L-8.74228e-08 5L5 4.37114e-07Z" />\
</svg>'
    var arrow_down_svg = '<svg style = "fill:#000;width:15px;height:8px;" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">\
<path d="M5 6.05344L0 1.07251L1 0.0763245L5 4.06107L9 0.0763245L10 1.07251L5 6.05344Z" />\
</svg>'

    if (typeof sticky_intents_list_menu !== 'undefined' && sticky_intents_list_menu.length > 0) {
        document.getElementById('easychat-sticky-intents').style.width = '100%';
        document.getElementById('easychat-sticky-intents').style.marginLeft = '0';
        document.getElementById('easychat-sticky').style.background = 'white';
        
        let html = ""

        if (EASYCHAT_BOT_THEME == "theme_2") {

            html = '<div onclick="display_sticky_menu_items()"><div class="easychat-sticky-menu">\
                            <div style="color: #4d4d4d; font-size: 17px">' + MENU_TEXT + '</div>\
                            <div id="arrow_up" class="arrow_up" style="display:block">'+ arrow_up_svg + '</div>\
                            <div id="arrow_down" class="arrow_up" style="display:none;">'+ arrow_down_svg + '</div>\
                        </div><div class = "easychat-sticky-menu-items" id="easychat_sticky_menu_items">';

        } else {
            html = '<div onclick="display_sticky_menu_items()"><div class="easychat-sticky-menu">\
                            <div style="color: #4d4d4d; font-size: 17px">' + MENU_TEXT + '</div>\
                            <div id="arrow_up" class="arrow_up" style="margin-right:3%;display:block"><img src="' + EASYCHAT_IMG_PATH + 'arrow_up_sticky.svg"></div>\
                            <div id="arrow_down" class="arrow_up" style="margin-right:3%;display:none;"><img src="' + EASYCHAT_IMG_PATH + 'arrow_down_sticky.svg"></div>\
                        </div><div class = "easychat-sticky-menu-items" id="easychat_sticky_menu_items">';

        }
        for (let i = 0; i < sticky_intents_list_menu.length; ++i) {
            let sticky_intent = sticky_intents_list_menu[i];
            html += '<div class="easychat-sticky-menu-item" style="display:flex; margin: 0px 0px 10px 0px;" onclick="send_sticky_message(\'' + sticky_intent[0] + '\', \'' + sticky_intent[2] + '\')"><div><i class = "fa ' + sticky_intent[1] + ' sticky-menu-item-icon" style="color:' + BOT_THEME_COLOR + '"></i></div><div class = "easychat-sticky-menu-item-text" style="margin-left:10px; color: #4d4d4d; font-size:15px;">' + sticky_intent[0] + '</div></div>';
        }

        html += '</div></div>';

        document.getElementById("easychat-sticky-intents").innerHTML = html;
        document.getElementById("easychat-sticky-intents").style.overflow = "hidden";
        resize_chabot_window()
    } else {
        try {
            document.getElementById("easychat-sticky").remove();
            if (EASYCHAT_BOT_THEME == "theme_1") {
                document.getElementById('easychat-footer').style.boxShadow = '0px 0px 15px rgba(0, 0, 0, 0.1)';
            }
            document.getElementById("easychat-chat-container").style.height = '500px';
        } catch (err) { }
    }


    var obj_div = document.getElementById("easychat_sticky_menu_items");

    if (obj_div != null || obj_div != undefined) {

        var obj = document.getElementById("user_input");
        var currentFocus = -1;

        obj.addEventListener("keydown", function (e) {
            var is_menu_open = document.getElementsByClassName('easychat-sticky-menu-items-show');

            if (is_menu_open.length > 0) {
                if (obj.value != "") {
                    document.getElementById("arrow_up").style.display = "block";
                    document.getElementById("arrow_down").style.display = "none";
                    let sticky_menu = document.getElementById(
                        "easychat_sticky_menu_items"
                    );
                    sticky_menu.className = " easychat-sticky-menu-items";
                    resize_chabot_window();
                    scroll_to_bottom();
                } else {
                    objDiv = document.getElementById("easychat_sticky_menu_items");
                    current_div = objDiv.getElementsByClassName(
                        "easychat-sticky-menu-item"
                    );

                    if (e.keyCode == 40) {
                        currentFocus++;
                        addActive(current_div);
                    } else if (e.keyCode == 38) {
                        currentFocus--;
                        addActive(current_div);
                    } else if (e.keyCode == 13) {
                        e.preventDefault();
                        if (currentFocus > -1 && obj.value == "") {
                            if (current_div) current_div[currentFocus].click();
                        }
                    }
                }
            }
        });
    }

    function addActive(current_div) {

        if (!current_div) return false;
        removeActive(current_div);
        if (currentFocus >= current_div.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = current_div.length - 1;

        current_div[currentFocus].classList.add("autocomplete-active");
        if (navigator.userAgent.indexOf("Firefox") != -1) {
            current_div[currentFocus].scrollIntoView({
                behaviour: "smooth",
                block: "nearest",
            });
        } else {
            current_div[currentFocus].scrollIntoViewIfNeeded();
        }
    }

    function removeActive(current_div) {
        for (var elem = 0; elem < current_div.length; elem++) {
            current_div[elem].classList.remove("autocomplete-active");
        }
    }
}

function display_sticky_menu_items() {
    if (document.getElementById("arrow_up").style.display == "block") {
        document.getElementById("arrow_up").style.display = "none";
        document.getElementById("arrow_down").style.display = "block";
        let sticky_menu = document.getElementById('easychat_sticky_menu_items');
        sticky_menu.className += ' easychat-sticky-menu-items-show';
    } else {
        document.getElementById("arrow_up").style.display = "block";
        document.getElementById("arrow_down").style.display = "none";
        let sticky_menu = document.getElementById('easychat_sticky_menu_items');
        sticky_menu.className = ' easychat-sticky-menu-items';
    }
    resize_chabot_window();
    scroll_to_bottom();
}

function display_sticky_div() {
    var elem = document.getElementById('easychat-sticky');
    if (elem != undefined && elem != null) {
        elem.style.display = 'block';
    }
}

function append_welcome_message(bot_id, bot_name) {

    show_bot_typing_loader();
    url_parameters = get_url_vars();
    var json_string = JSON.stringify({
        bot_id: bot_id,
        bot_name: bot_name,
        user_id: user_id,
        session_id: session_id,
        channel_name: "Web",
        selected_language: selected_language,
        bot_web_page: decodeURIComponent(url_parameters["easychat_window_location"]),
        web_page_source: decodeURIComponent(url_parameters["web_page_source"])
    });
    json_string = encrypt_variable(json_string);
    json_string = encodeURIComponent(json_string);

    var xhttp = new XMLHttpRequest();
    var params = 'json_string=' + json_string
    xhttp.open("POST", "/chat/get-channel-details/", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onload = function () {
        if (this.status == 200) {
            response = JSON.parse(this.responseText);
            response = custom_decrypt(response)
            response = JSON.parse(response);
            welcome_message = response.welcome_message;
            default_response = welcome_message;
            recommendations = response.initial_messages["items"];
            carousel_img_url_list = response.carousel_img_url_list["items"];
            compressed_img_url_list =response.carousel_img_url_list["compressed_items"];
            redirect_url_list = response.redirect_url_list["items"];
            welcome_msg_images = response.initial_messages["images"];
            welcome_msg_compressed_imgs = response.initial_messages["compressed_images"];
            user_id = response.user_id;
            sticky_intents_list = response.sticky_intents_list;
            sticky_intents_list_menu = response.sticky_intents_list_menu;
            hamburger_items = response.hamburger_items
            quick_items = response.quick_items
            sticky_button_display_format = response.sticky_button_display_format;
            welcome_msg_videos = response.initial_messages["videos"];
            is_text_to_speech_required = response.is_text_to_speech_required
            if (is_internet_explorer){
                is_text_to_speech_required = false;
            }
            // bot_start_conversation_intent = response.bot_start_conversation_intent
            poweredby_required = response.is_powered_by_required;
            bot_inactivity_detection_enabled = response.bot_inactivity_detection_enabled;
            bot_inactivity_msg = response.bot_inactivity_msg;
            bot_inactivity_time = response.bot_inactivity_time;
            bot_response_delay_allowed = response.bot_response_delay_allowed;
            bot_response_delay_timer = response.bot_response_delay_timer;
            bot_response_delay_message = response.bot_response_delay_message;
            query_token_id = response.query_token_id
            EASYCHAT_BOT_THEME = response.bot_theme
            is_automatic_carousel_enabled = response.is_automatic_carousel_enabled
            carousel_time = parseInt(response.carousel_time)
            livechat_queue_time = parseInt(response.queue_timer)
            web_url_initial_intent_present = response.web_url_initial_intent_present
            web_url_is_welcome_message_present = response.web_url_is_welcome_message_present
            web_url_initial_image_present = response.web_url_initial_image_present
            web_url_initial_videos_present = response.web_url_initial_videos_present
            web_url_is_welcome_banner_present = response.web_url_is_welcome_banner_present
            is_bot_notification_sound_enabled = response.is_bot_notification_sound_enabled
            queue_timer = (livechat_queue_time / 5) + 1;
            default_order_of_response = response.default_order_of_response;
            show_livechat_form_or_no = response.show_livechat_form_or_no

            max_file_size_allowed = response.max_file_size_allowed;
            bot_inactivity_detection_required = bot_inactivity_detection_enabled;
            csat_feedback_form_enabled = response.csat_feedback_form_enabled
            mark_all_fields_csat_compulsory = response.mark_all_fields_mandatory
            collect_phone_number = response.collect_phone_number
            collect_email_id = response.collect_email_id
            mask_confidential_info = response.mask_confidential_info
            is_audio_notification_enabled = response.is_audio_notification_enabled

            if (sticky_button_display_format == 'Menu') {
                append_sticky_intents_menu(sticky_intents_list_menu);
            } else {
                append_sticky_intents(sticky_intents_list);
            }

            // append_hamburger_items(hamburger_items);

            if (poweredby_required === true) {
                document.getElementById("easychat-powered-by-div").style.display = "block";
            };

            var display_welcome_banner = true

            if (is_web_landing_allowed == "true" && web_url_is_welcome_banner_present == false) {
                display_welcome_banner = false
            }


            if (carousel_img_url_list.length && display_welcome_banner == true) {
                is_welcome_banner_present = true;
                if (compressed_img_url_list && compressed_img_url_list.length != 0) {
                    carousel_img_url_list = compressed_img_url_list;
                }
                add_banner(carousel_img_url_list, redirect_url_list);
                init_gallery();

                if (is_automatic_carousel_enabled) {
                    carousel_timer = setInterval(function () {
                        move_gallary_slides(1);
                    }, carousel_time * 1000);
                }
            }
            // prev_session_id = get_cookie("easychat_prev_session_id");
            if (is_text_to_speech_required) {
                speech_welcome_message = response['speech_welcome_message']
                text_to_speech(speech_welcome_message);
            }

            

            message_list = get_message_list(welcome_message, RESPONSE_SENTENCE_SEPARATOR);
            if (is_web_landing_allowed == "false") {
                for (var i = 0; i < message_list.length; i++) {
                    append_bot_text_response(message_list[i]);
                }
                reset_size_of_text_field(message_list.length);
            } else if (is_web_landing_allowed == "true" && web_url_is_welcome_message_present == true) {
                for (var i = 0; i < message_list.length; i++) {
                    append_bot_text_response(message_list[i]);
                }
                reset_size_of_text_field(message_list.length);
            }

            // append_quick_menu_items(quick_items); 

            hide_bot_typing_loader();


            if (welcome_msg_videos != null && welcome_msg_videos != undefined && welcome_msg_videos.length > 0) {
                if (is_web_landing_allowed == "false") {
                    append_bot_slider_videos(welcome_msg_videos);
                } else if (is_web_landing_allowed == "true" && web_url_initial_videos_present == true) {
                    append_bot_slider_videos(welcome_msg_videos);
                }
            }

            if (welcome_msg_images != null && welcome_msg_images != undefined && welcome_msg_images.length > 0) {
                if (is_web_landing_allowed == "false") {
                    append_bot_slider_images(welcome_msg_images, welcome_msg_compressed_imgs);
                } else if (is_web_landing_allowed == "true" && web_url_initial_image_present == true) {
                    append_bot_slider_images(welcome_msg_images, welcome_msg_compressed_imgs);
                }
            }
            if (recommendations.length > 0) {
                set_cookie("is_recommendation_menu", "false")

                if (EASYCHAT_BOT_THEME == "theme_1") {
                    if (is_web_landing_allowed == "false") {
                        append_bot_initial_questions(recommendations);
                    } else if (is_web_landing_allowed == "true" && web_url_initial_intent_present == true) {
                        append_bot_initial_questions(recommendations);
                    }
                } else {
                    if (is_web_landing_allowed == "false") {
                        append_bot_recommendation(recommendations);
                    } else if (is_web_landing_allowed == "true" && web_url_initial_intent_present == true) {
                        append_bot_recommendation(recommendations);
                    }
                }
            }
            if (easychat_prev_session_id != "") {
                getPrevSessionHistory(easychat_prev_session_id);
                // session_id = prev_session_id;
            }

            if (bot_inactivity_detection_enabled && bot_inactivity_detection_required) {
                reset_bot_inactivity_timer()
            }
            if (is_web_landing_allowed == "false") {
                if (response["initial_intent"] != null && is_initial_trigger_intent.toString() == 'false') {
                    initial_intent_in_welcome_message = true
                    cancel_text_to_speech_response = false
                    append_bot_response(response["initial_intent"])
                    initial_intent_in_welcome_message = false
                }
            }
            is_bot_response_message_showed = true;
            if (is_initial_trigger_intent == 'true'){
                easychat_intent_name = easychat_intent_name.replace(/%20|_/g,' ');
                is_initial_trigger_intent = true
                send_user_input(easychat_intent_name)
            }
            welcome_message_appended = true
            document.getElementById("user_input").disabled = true;
            document.getElementById("user_input").disabled = false;
            detectmob();
        }
    }
    xhttp.send(params);
}

function remove_widgets() {
    $('.easychat-radio-button-container').remove()
    $('.easychat-range-slider-container').remove()
    $('.easychat-drop-down-container').remove()
    $('.easychat-check-box-container').remove()
    is_remove_widget = false;
}

function send_message() {
    if (is_remove_widget == true) {
        remove_widgets();
    }
    var user_input = document.getElementById("user_input").value.trim();
    if (user_input.length == 0) {
        return;
    }
    document.getElementById("user_input").value = '';
    send_user_input(user_input);
}

document.onkeyup = function (e) {
    e = e || window.event;

    var input_element = document.getElementById("user_input");
    var user_query = input_element.value.trim();
    if (user_query != "") {
        activate_query_submit_button();
    } else {
        deactivate_query_submit_button();
    }

    if (is_livechat && user_query != "") {
        send_typing_message_to_agent();
    }

    maxlength = input_element.maxlength;
    if (input_element.value.length > maxlength) {
        restricted_value = input_element.value.substr(0, maxlength);
        input_element.value = restricted_value;
    }

    if (e.keyCode == 13) {
        send_message();
    }
}

function confirm_do_not_disturb() {
    append_bot_text_response("Are you sure, you want to enable 'Do not disturb'? By clicking 'Yes', form assistant will be disabled.");
    var choices_html = '<div class="easychat-choices-wrapper">';
    choices_html += '<button class="easychat-choices" onmouseover="custom_button_change(this)" onmouseout="custom_button_change_normal(this)" style=\"border: 0.05em solid ' + BOT_THEME_COLOR + ';color: ' + BOT_THEME_COLOR + '\" value="Yes" onclick="disable_form_assist(this)">Yes</button>';
    choices_html += '<button class="easychat-choices" onmouseover="custom_button_change(this)" onmouseout="custom_button_change_normal(this)" style=\"border: 0.05em solid ' + BOT_THEME_COLOR + ';color: ' + BOT_THEME_COLOR + '\" value="No" onclick="nothing_form_assist(this)">No</button>';
    choices_html += "</div>";
    document.getElementById("easychat-chat-container").innerHTML += choices_html;
}

function disable_form_assist(element) {
    parent.postMessage('disable-form-assist', '*');
}

function nothing_form_assist(element) {
    append_bot_text_response("Great, How may I help you?");
}

function send_selected_initial_question(element) {
    var user_input = element.innerHTML;
    var intent_id = element.dataset.id

    entered_suggestion = true;
    if (do_not_disturb == "true") {
        if (user_input == "Do not disturb") {
            confirm_do_not_disturb();
        }
        do_not_disturb = "false";
    } else {

        send_user_input(user_input, intent_id);
        element.remove();
    }
}


function send_selected_recommendation(element) {
    var user_input = element.innerHTML;
    var intent_id = element.dataset.id

    entered_suggestion = true;
    if (do_not_disturb == "true") {
        if (user_input == "Do not disturb") {
            // show_form_assist_result();
            // do_not_disturb = "false"
            // form_assist_enabled = true
            // document.getElementsByClassName("easychat-recommendation")[0].style.pointerEvents = "none"
            // document.getElementsByClassName("easychat-recommendation")[1].style.pointerEvents = "none"
            // parent.postMessage('enable-form-assist','*');
            confirm_do_not_disturb();
        } else {
            // do_not_disturb = "true"
            // form_assist_enabled = false
            // document.getElementsByClassName("easychat-recommendation")[0].style.pointerEvents = "none"
            // document.getElementsByClassName("easychat-recommendation")[1].style.pointerEvents = "none"
            // append_welcome_message(bot_id, bot_name);
            // get_suggestion_list(bot_id, bot_name);
        }
        do_not_disturb = "false";
    } else {
        // var user_input = element.innerHTML;

        let list_of_el = document.getElementsByClassName("easychat-choices-wrapper");
        var last_choice_wrapper = list_of_el[list_of_el.length - 1]
        if ((typeof last_choice_wrapper !== 'undefined')) {
            for (var i = 0; i < last_choice_wrapper.children.length; i++) {
                if (last_choice_wrapper.children[i].hasAttribute("onclick")) { last_choice_wrapper.children[i].removeAttribute("onclick") }
                if (last_choice_wrapper.children[i].hasAttribute("onmouseout")) { last_choice_wrapper.children[i].removeAttribute("onmouseout") }
                if (last_choice_wrapper.children[i].hasAttribute("onmouseover")) { last_choice_wrapper.children[i].removeAttribute("onmouseover") }
                last_choice_wrapper.children[i].style.opacity = 0.5;
                last_choice_wrapper.children[i].style.cursor = "default";
            }
        }


        for (var i = 0; i < element.parentElement.children.length; i++) {
            if (element.parentElement.children[i].hasAttribute("onclick")) { element.parentElement.children[i].removeAttribute("onclick") }
            if (element.parentElement.children[i].hasAttribute("onmouseout")) { element.parentElement.children[i].removeAttribute("onmouseout") }
            if (element.parentElement.children[i].hasAttribute("onmouseover")) { element.parentElement.children[i].removeAttribute("onmouseover") }
            element.parentElement.children[i].style.opacity = 0.5;
            element.parentElement.children[i].style.cursor = 'default';
        }
        send_user_input(user_input, intent_id);
        element.remove();
    }
}

function send_selected_choice(element) {
    var user_input = element.value;
    let list_of_el = document.getElementsByClassName("easychat-recommendation-wrapper");
    var last_recomendation_wrapper = list_of_el[list_of_el.length - 1]
    if ((typeof last_recomendation_wrapper !== 'undefined')) {
        for (var i = 0; i < last_recomendation_wrapper.children.length; i++) {
            if (last_recomendation_wrapper.children[i].hasAttribute("onclick")) { last_recomendation_wrapper.children[i].removeAttribute("onclick") }
            if (last_recomendation_wrapper.children[i].hasAttribute("onmouseout")) { last_recomendation_wrapper.children[i].removeAttribute("onmouseout") }
            if (last_recomendation_wrapper.children[i].hasAttribute("onmouseover")) { last_recomendation_wrapper.children[i].removeAttribute("onmouseover") }
            last_recomendation_wrapper.children[i].style.opacity = 0.5;
            last_recomendation_wrapper.children[i].style.cursor = "default";
        }
    }
    for (var i = 0; i < element.parentElement.children.length; i++) {
        if (element.parentElement.children[i].hasAttribute("onclick")) { element.parentElement.children[i].removeAttribute("onclick") }
        if (element.parentElement.children[i].hasAttribute("onmouseout")) { element.parentElement.children[i].removeAttribute("onmouseout") }
        if (element.parentElement.children[i].hasAttribute("onmouseover")) { element.parentElement.children[i].removeAttribute("onmouseover") }
        element.parentElement.children[i].style.opacity = 0.5;
        element.parentElement.children[i].style.cursor = 'default';
    }
    send_user_input(user_input);
}

if (!('webkitSpeechRecognition' in window)) {
    document.getElementById("easychat-mic-div").remove();
    document.getElementById("easychat-mic-disable").style.display = "none";


    try {
        document.getElementById('user-input-div').style.marginRight = '15px';
    } catch (err) { }


    setTimeout(function () {

        if (EASYCHAT_BOT_THEME == "theme_1") {
            document.getElementById('easychat-mic-div-not-allowed').style.display = 'flex';
        }

    }, 1000);
    //document.getElementById("recognition-img").display="none";
} else {

    if (EASYCHAT_BOT_THEME == "theme_1") {
        var stream;
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function (s) {
                return stream = s;
            }, function (e) {
                if (e.message === 'Permission denied') {
                    mic_access = false;
                    document.getElementById('easychat-mic-div').style.display = 'none';
                    document.getElementById('easychat-mic-div-not-allowed').style.display = 'flex';
                }
            })
            .catch(function (e) { console.log(e); });
    }
    // start_button.style.display = 'inline-block';
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = function () {
        recognizing = true;
    };

    recognition.onerror = function (event) {
        if (event.error == 'no-speech') {
            ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
            ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
            ignore_onend = true;
            recognition = null;
            deactivate_mic();
            alert("You will not be able to use voicebot feature as you haven't allowed microphone access.");
        }
    };

    recognition.onend = function () {
        recognizing = false;
        if (ignore_onend) {
            return;
        }
        if (!final_transcript) {
            return;
        }
    };

    recognition.onresult = function (event) {
        document.getElementById('user_input').value = event.results[0][0].transcript;
        send_typing_message_to_agent();
        if (event.results[0].isFinal) {
            user_input = document.getElementById('user_input').value;
            if (user_input.trim() != '' && user_input.length < 300) {
                send_user_input(user_input);
            }
            recognition.stop();
            document.getElementById("user_input").value = "";
        }
    };
}

function initMap() {
    var current_latitude = "";
    var current_longitude = "";

    if (("geolocation" in navigator)) {
        navigator.geolocation.getCurrentPosition(
            function success(position) {
                current_latitude = position.coords.latitude
                current_longitude = position.coords.longitude

                var map = new google.maps.Map(document.getElementById('map'), {
                    center: { lat: current_latitude, lng: current_longitude },
                    zoom: 15
                });

                var request = {
                    placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
                    fields: ['name', 'formatted_address', 'place_id', 'geometry']
                };

                var infowindow = new google.maps.InfoWindow();
                var service = new google.maps.places.PlacesService(map);

                service.getDetails(request, function (place, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        marker = new google.maps.Marker({
                            map: map,
                            position: place.geometry.location
                        });

                        marker.setPosition(map.getCenter())

                        var centerControlDiv = document.createElement("div");
                        var centerControl = new CenterControl(centerControlDiv, map);
                        centerControlDiv.index = 1;
                        map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(centerControlDiv);
                    }
                });

                function CenterControl(controlDiv, map) {
                    var controlUI = document.createElement("div");
                    controlUI.style.backgroundColor = "#fff";
                    controlUI.style.border = "2px solid #fff";
                    controlUI.style.borderRadius = "3px";
                    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
                    controlUI.style.cursor = "pointer";
                    controlUI.style.marginBottom = "22px";
                    controlUI.style.textAlign = "center";
                    controlUI.title = "Click to Submit the location";
                    controlDiv.appendChild(controlUI);
                    // Set CSS for the control interior.\
                    var controlText = document.createElement("div");
                    controlText.style.color = "rgb(25,25,25)";
                    controlText.style.fontFamily = "Roboto,Arial,sans-serif";
                    controlText.style.fontSize = "16px";
                    controlText.style.lineHeight = "38px";
                    controlText.style.paddingLeft = "5px";
                    controlText.style.paddingRight = "5px";
                    controlText.innerHTML = "Click here to submit your location";
                    controlUI.appendChild(controlText);
                    // Setup the click event listeners: simply set the map to Chicago.\
                    controlUI.addEventListener("click", function () {
                        var lat = marker.getPosition().lat();
                        var lng = marker.getPosition().lng();
                        user_input = lat + "__" + lng;
                        send_message_to_server(user_input, user_id, bot_id, bot_name, "None");
                        scroll_to_bottom();
                    });
                }
            },
            function error(error_message) {
                // for when getting location results in an error
                console.error('An error has occured while retrieving' +
                    'location before', error_message)
                document.getElementById("google-map").remove();
                append_bot_text_response("Unable to fetch your location details.");
                send_message_to_server("Share Pincode", user_id, bot_id, bot_name, "None");
            });
    } else {
        document.getElementById("google-map").remove();
        append_bot_text_response("Unable to fetch your location details.");
        send_message_to_server("Share Pincode", user_id, bot_id, bot_name, "None");
    }
}

/*

// Commenting this older approach for future uses
function autocomplete(inp, arr, word_mapper_list) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);

        for (var word_index = 0; word_index < word_mapper_list.length; word_index++) {
            for (var s_index = 0; s_index < word_mapper_list[word_index]["similar_words"].length; s_index++) {
                if (word_mapper_list[word_index]["similar_words"][s_index].toLowerCase() == val.toLowerCase()) {
                    //similar_word_list.push(word_mapper_list[word_index]["keyword"].toLowerCase());
                    val = word_mapper_list[word_index]["keyword"].toLowerCase();
                }
            }
        }

        var count = 0;
        arr_value_list = []
        for (i = 0; i < arr.length; i++) {
            if (is_flow_ended && count < 5 && is_livechat == false) {
                if (arr[i]["key"].toUpperCase().indexOf(val.toUpperCase()) != -1 && arr_value_list.indexOf(arr[i]["value"]) < 0) {
                    b = document.createElement("DIV");
                    arr_value_list.push(arr[i]["value"]);
                    b.innerHTML = "" + arr[i]["value"].substr(0, val.length) + "";
                    b.innerHTML += arr[i]["value"].substr(val.length);
                    //b.innerHTML += "<input type='hidden' value='" + arr[i]["value"] + "'>";
                    b.innerHTML += '<input type="hidden" value="' + arr[i]["value"] + '">';
                    b.addEventListener("click", function(e) {
                        inp.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                        entered_suggestion = true
                        send_user_input(inp.value);
                        inp.value = "";
                    });
                    a.appendChild(b);
                    count += 1;
                }
            }
        }

        if (count == 0) {

            token_list = val.split(" ");

            query_token_list = token_list.filter(function(e) { return e != ""; });

            if (query_token_list.length == 0) {
                return;
            }

            split_val = 1
            while( split_val <= query_token_list.length ){

                val = query_token_list[query_token_list.length - split_val];
                
                arr_value_list = [];

                for (i = 0; i < arr.length; i++) {

                    if (is_flow_ended && count < 5 && is_livechat == false) {
                        if (arr[i]["key"].toUpperCase().indexOf(val.toUpperCase()) != -1 && arr_value_list.indexOf(arr[i]["value"]) < 0) {
                            b = document.createElement("DIV");
                            arr_value_list.push(arr[i]["value"]); 
                            b.innerHTML = "" + arr[i]["value"].substr(0, val.length) + "";
                            b.innerHTML += arr[i]["value"].substr(val.length);
                            b.innerHTML += "<input type='hidden' value='" + arr[i]["value"] + "'>";
                            b.addEventListener("click", function(e) {
                                inp.value = this.getElementsByTagName("input")[0].value;
                                closeAllLists();

                                send_user_input(inp.value);
                                inp.value = "";
                            });
                            a.appendChild(b);
                            count += 1;
                        }
                    }
                }

                if(count == 0){
                    split_val += 1
                }else{
                    break;
                }
            }
        }
    });

    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            
            currentFocus++;
           
            addActive(x);
        } else if (e.keyCode == 38) { //up
            
            currentFocus--;

            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function(e) {
        closeAllLists(e.target);
    });
}*/


function autocomplete(inp, arr, word_mapper_list) {
    var currentFocus;

    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/


    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", temp_function_before_input)
    var autocomplete_timer = null;

    function temp_function_before_input() {
        if (autocomplete_timer != null) {
            clearTimeout(autocomplete_timer);
        }
        autocomplete_timer = setTimeout(add_suggestions_html, 20);
    }

    function add_suggestions_html() {
        var a, b, i, val = inp.value;
        /*close any already open lists of autocompleted values*/

        closeAllLists();
        if (!val) {
            return false;
        }
        if (val.length >= 2) {
            if (is_flow_ended && is_livechat == false) {
                currentFocus = -1;
                /*create a DIV element that will contain the items (values):*/
                a = document.createElement("DIV");
                a.setAttribute("id", inp.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items");
                /*append the DIV element as a child of the autocomplete container:*/
                inp.parentNode.appendChild(a);
                /*for each item in the array...*/

                for (var word_index = 0; word_index < word_mapper_list.length; word_index++) {
                    for (var s_index = 0; s_index < word_mapper_list[word_index]["similar_words"].length; s_index++) {
                        if (word_mapper_list[word_index]["similar_words"][s_index].toLowerCase() == val.toLowerCase()) {
                            //similar_word_list.push(word_mapper_list[word_index]["keyword"].toLowerCase());
                            val = word_mapper_list[word_index]["keyword"].toLowerCase();
                        }
                    }
                }

                var count = 0;
                filtered_arr_value = []
                arr_value_list = []
                fuzzyhound.search(val)
                results_fuzzy = fuzzyhound.results
                already_added_keys = []
                results_fuzzy.sort(function (first, second) {
                    return second["_item"]["count"] - first["_item"]["count"];
                });


                for (var i = 0; i < results_fuzzy.length; i++) {
                    if (already_added_keys.indexOf(results_fuzzy[i]["_item"]["value"].toLowerCase()) == -1 && results_fuzzy[i]["_score"] >= 7) {
                        already_added_keys.push(results_fuzzy[i]["_item"]["value"].toLowerCase())
                        filtered_arr_value.push({ "key": results_fuzzy[i]["_item"]["value"], "count": results_fuzzy[i]["_item"]["count"] })
                        count += 1;
                        if (count >= 6) {
                            break;
                        }
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "" + results_fuzzy[i]["_item"]["value"].substr(0, results_fuzzy[i]["_item"]["value"].length) + "";
                        b.innerHTML += results_fuzzy[i]["_item"]["value"].substr(results_fuzzy[i]["_item"]["value"].length);
                        /*insert a input field that will hold the current array item's value:*/
                        //b.innerHTML += "<input type='hidden' value='" + arr[i]["value"] + "'>";
                        b.innerHTML += '<input type="hidden" value="' + results_fuzzy[i]["_item"]["value"] + '" data-id='+results_fuzzy[i]["_item"]["pk"]+'>';
                        //execute a function when someone clicks on the item value (DIV element):
                        b.addEventListener("click", function (e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;
                            id = this.getElementsByTagName("input")[0].dataset.id;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                            entered_suggestion = true
                            send_user_input(inp.value, id);
                            inp.value = "";
                        });
                        a.appendChild(b);
                    }
                }
            }


            /*Empty suggestion list check*/
            if (count == 0) {

                token_list = val.split(" ");

                query_token_list = token_list.filter(function (e) { return e != ""; });

                if (query_token_list.length == 0) {
                    return;
                }

                arr_value_list = [];
                filtered_arr_value = []
                split_val = 1
                while (split_val <= query_token_list.length) {

                    val = query_token_list[query_token_list.length - split_val];

                    for (i = 0; i < arr.length; i++) {

                        if (is_flow_ended && is_livechat == false) {
                            /*check if the item starts with the same letters as the text field value:*/
                            if (arr[i]["key"].toUpperCase().indexOf(val.toUpperCase()) != -1 && arr_value_list.indexOf(arr[i]["value"]) < 0) {
                                // Creating a dictionary with intent and it's count
                                if (!filtered_arr_value.some(function (e) { return e.key == arr[i]["value"]; })) {
                                    filtered_arr_value.push({ "key": arr[i]["value"], "count": arr[i]["count"] })
                                    count += 1;
                                }
                            }
                        }
                    }
                    split_val += 1;
                }

                /* if suggestion list is not empty */
                if (filtered_arr_value.length > 0) {

                    // Sorting the intent in descending order
                    filtered_arr_value.sort(function (first, second) {
                        return second.count - first.count;
                    });

                    for (var value in filtered_arr_value) {
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "" + filtered_arr_value[value]["key"].substr(0, val.length) + "";
                        b.innerHTML += filtered_arr_value[value]["key"].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        //b.innerHTML += "<input type='hidden' value='" + arr[i]["value"] + "'>";
                        b.innerHTML += '<input type="hidden" value="' + filtered_arr_value[value]["key"] + '" data-id='+results_fuzzy[i]["_item"]["pk"]+'>';
                        /*execute a function when someone clicks on the item value (DIV element):*/
                        b.addEventListener("click", function (e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                            entered_suggestion = true
                            send_user_input(inp.value);
                            inp.value = "";
                        });
                        a.appendChild(b);
                    }
                }

            }
        };
    }

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
        if (navigator.userAgent.indexOf("Firefox") != -1) {
            x[currentFocus].scrollIntoView({ behaviour: 'smooth', block: 'nearest' });
        }
        else {
            x[currentFocus].scrollIntoViewIfNeeded();
        }
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

function custom_autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        if (val.length == 2 && is_custom_complete) { get_quotes_suggestions(val) }
        currentFocus = -1;

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        var count = 0;

        //console.log(arr)
        arr_value_list = []
        arr = code_list
        for (i = 0; i < arr.length; i++) {
            if (is_custom_complete && count < 5 && is_livechat == false) {
                //console.log(arr[i])
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i]["key"].toUpperCase().indexOf(val.toUpperCase()) != -1 && arr_value_list.indexOf(arr[i]["value"]) < 0) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    arr_value_list.push(arr[i]["value"]);
                    /*make the matching letters bold:*/
                    b.innerHTML = "" + arr[i]["value"].substr(0, val.length) + "";
                    b.innerHTML += arr[i]["value"].substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr[i]["value"] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function (e) {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        closeAllLists();
                        send_user_input(inp.value);
                        inp.value = "";
                    });
                    a.appendChild(b);
                    count += 1;
                }
            }
        }

        /*Empty suggestion list check*/
        if (count == 0) {

            token_list = val.split(" ");

            query_token_list = token_list.filter(function (e) { return e != ""; });

            if (query_token_list.length == 0) {
                return;
            }

            val = query_token_list[query_token_list.length - 1];

            arr_value_list = [];

            for (i = 0; i < arr.length; i++) {

                if (is_flow_ended && count < 5 && is_livechat == false) {
                    /*check if the item starts with the same letters as the text field value:*/
                    if (arr[i]["key"].toUpperCase().indexOf(val.toUpperCase()) != -1 && arr_value_list.indexOf(arr[i]["value"]) < 0) {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        arr_value_list.push(arr[i]["value"]);
                        /*make the matching letters bold:*/
                        b.innerHTML = "" + arr[i]["value"].substr(0, val.length) + "";
                        b.innerHTML += arr[i]["value"].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i]["value"] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                        b.addEventListener("click", function (e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                            send_user_input(inp.value);
                            inp.value = "";
                        });
                        a.appendChild(b);
                        count += 1;
                    }
                }
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}



function get_suggestion_list(bot_id, bot_name) {

        word_mapper_list = []
        autocorrect_bot_replace = []
        try{
            open_local_db()
            word_mapper_list = JSON.parse(window.localStorage['word_mapper_list'])
            autocorrect_bot_replace = JSON.parse(window.localStorage['autocorrect_bot_replace'])
            fuzzyhound = new FuzzySearch({output_limit: 20, output_map:"alias"});
            fuzzyhound.setOptions({
                source: suggestion_list,
                keys: ["key"],
                score_test_fused: true,
                score_per_token: true,
                score_acronym:true,
            })
        }catch(err){
            console.log(err)
        }
        autocomplete(document.getElementById("user_input"), suggestion_list, word_mapper_list);
    }



window.onresize = function () {
    changeMiddleContainer();
    resize_chabot_window();
    scroll_to_bottom();
}

function plusImageSlides(n, el) {
    slideIndex = parseInt(el.parentElement.getAttribute("value"))
    slideIndex += n
    el.parentElement.setAttribute("value", slideIndex.toString())
    showSlides(slideIndex, el.parentElement);
}

function showSlides(n, el) {
    var i;
    slideIndex = parseInt(el.getAttribute("value"))
    var c = el.children
    var slides = []
    for (var i = 0; i < c.length; i++) {
        if (c[i].className == "mySlides fade easychat-slider-card") {
            slides.push(c[i])
        } else if (c[i].className == "mySlides fade") {
            slides.push(c[i])
        }
    }
    //var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { el.setAttribute("value", "1") }
    if (n < 1) { el.setAttribute("value", (slides.length).toString()) }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex = parseInt(el.getAttribute("value"))
    slides[slideIndex - 1].style.display = "block";
}

function add_banner(carousel_img_url_list, redirect_url_list) {

    html = '<div class="galleryContainer"><div class="slideShowContainer" ontouchmove="welcome_banner_scroll_mobile(event)" ontouchstart="handle_first_mobile_touch(event)" style="touch-action: none;">';
    html += '<div onclick="move_gallary_slides(-1)" class="nextPrevBtn leftArrow"><span class="arrow arrowLeft"></span></div>';

    if (carousel_img_url_list.length > 1) {
        html += '<div onclick="move_gallary_slides(1)" class="nextPrevBtn rightArrow"><span class="arrow arrowRight"></span></div>';
    }

    for (var i = 0; i < carousel_img_url_list.length; i++) {

        var redirect_url = redirect_url_list[i];
        if (redirect_url == "") {
            redirect_url = "javascript:void(0)"
        }

        html += '<div style="cursor: pointer;" class="GallarySlidesimageHolder">';
        html += '<img vlink="' + redirect_url + '" onclick="open_link_banner(this)" src="' + carousel_img_url_list[i] + '"></div>'
    }

    html += "</div>";

    if (carousel_img_url_list.length > 1) {
        html += '<div id="GallarydotsContainer"></div>';
    }

    html += '</div>';

    document.getElementById("easychat-chat-container").innerHTML += html;
}

function open_link_banner(el) {
    var url = el.getAttribute("vlink")
    var pattern = /^((http|https|ftp):\/\/)/;
    if (!pattern.test(url)) { url = "http://" + url; }
    window.open(url);
}

function open_link_image(el, img_src) {

    if(!img_src) img_src = el.getAttribute("src")
    
    window.open(img_src);
}
//function open_link_banner(el){window.open(el.getAttribute("vlink"));}

function remove_banner() {
    var elements = document.getElementsByClassName("galleryContainer");
    if (elements) {
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
        is_welcome_banner_present = false;
    }
}

function remove_feedback_div() {
    var elements = document.getElementsByClassName("easychat-intent-feedback-wrapper");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("feedback_submitted") != "true") {
            elements[i].parentNode.removeChild(elements[i]);
        }
    }
}

function init_gallery() {

    GallaryslideIndex = 0;
    gallery_slides = document.getElementsByClassName("GallarySlidesimageHolder");
    gallery_slides[GallaryslideIndex].style.opacity = 1;
    for (i = 0; i < gallery_slides.length; i++) { gallery_slides[i].style.display = "none"; }
    gallery_slides[GallaryslideIndex].style.display = "block";

    //disable nextPrevBtn if slide count is one
    if (gallery_slides.length < 2) {
        var nextPrevBtns = document.querySelector(".leftArrow,.rightArrow");
        if (nextPrevBtns != undefined && nextPrevBtns != null) {
            nextPrevBtns.style.display = "none";
            for (i = 0; i < nextPrevBtns.length; i++) {
                nextPrevBtns[i].style.display = "none";
            }
        }
    }

    //add gallery_dots
    gallery_dots = [];
    try {
        var dotsContainer = document.getElementById("GallarydotsContainer"),
            i;

        for (i = 0; i < gallery_slides.length; i++) {
            var dot = document.createElement("span");
            dot.className += " gallary_dots";
            try {
                dotsContainer.append(dot);
            } catch (e) {
                dotsContainer.appendChild(dot);
            }
            dot.setAttribute("onclick", "move_slide(" + i + ")");
            gallery_dots.push(dot);
        }
        gallery_dots[GallaryslideIndex].className += " active";
    } catch (e) { console.log(e) }

    if (EASYCHAT_BOT_THEME == "theme_1" || EASYCHAT_BOT_THEME == "theme_2") {
        if (gallery_slides.length > 1) {
            nextSlideIndex = 1;
            gallery_slides[nextSlideIndex].style.transform = 'translate(67%, 0) scale(0.6, 0.7)';
            gallery_slides[nextSlideIndex].style.display = 'block';
            gallery_slides[nextSlideIndex].style.opacity = '0.3';
        }
        if (gallery_slides.length > 2) {
            lastSlideIndex = gallery_slides.length - 1;
            gallery_slides[lastSlideIndex].style.transform = 'translate(-67%, 0) scale(0.6, 0.7)';
            gallery_slides[lastSlideIndex].style.display = 'block';
            gallery_slides[lastSlideIndex].style.opacity = '0.3';
        }
    }
}

function welcome_banner_scroll_mobile(event){
    var x_up_banner = event.changedTouches[0].screenX; 
    var x_diff_banner = x_down_banner - x_up_banner;
    if(x_diff_banner > 0)
        n = 1;
    else
        n = -1;
    if (EASYCHAT_BOT_THEME == 'theme_1' || EASYCHAT_BOT_THEME == 'theme_2') {
        move_slide2(GallaryslideIndex + n);
    } else {
        move_slide(GallaryslideIndex + n);
    }
}

function handle_first_mobile_touch(event){
    x_down_banner = event.changedTouches[0].screenX;                                                                       
}

function card_scroll_mobile(event){
    var x_up_banner = event.changedTouches[0].screenX; 
    var x_diff_banner = x_down_banner - x_up_banner;
    var el;
    if(x_diff_banner > 0){
        n = 1;
        el = document.getElementsByClassName('next-image-video')[0];
    }
    else{
        n = -1;
        el = document.getElementsByClassName('prev-image-video')[0];
    }
    plusImageSlides(n, el);
}

function move_gallary_slides(n) {
    if (is_automatic_carousel_enabled) {
        clearInterval(carousel_timer);
    }

    if (is_welcome_banner_present) {
        if (EASYCHAT_BOT_THEME == 'theme_1' || EASYCHAT_BOT_THEME == 'theme_2') {
            move_slide2(GallaryslideIndex + n);
        } else {
            move_slide(GallaryslideIndex + n);
        }

        if (is_automatic_carousel_enabled) {
            carousel_timer = setInterval(function () {
                move_gallary_slides(1);
            }, carousel_time * 1000)
        }
    }
}

function move_slide(n) {
    var i;
    var current, next;
    var move_slideAnimClass = {
        forCurrent: "",
        forNext: ""
    };

    var slideTextAnimClass;
    for (i = 0; i < gallery_slides.length; i++) {
        gallery_slides[i].style.display = "none";
    }
    if (n > GallaryslideIndex) {
        if (n >= gallery_slides.length) { n = 0; }
        move_slideAnimClass.forCurrent = "moveLeftCurrentSlide";
        move_slideAnimClass.forNext = "moveLeftNextSlide";
        slideTextAnimClass = "slideTextFromTop";
    } else if (n < GallaryslideIndex) {
        if (n < 0) { n = gallery_slides.length - 1; }
        move_slideAnimClass.forCurrent = "moveRightCurrentSlide";
        move_slideAnimClass.forNext = "moveRightPrevSlide";
        slideTextAnimClass = "slideTextFromBottom";
    }

    gallery_slides[n].style.display = "block";

    if (n != GallaryslideIndex) {
        next = gallery_slides[n];
        current = gallery_slides[GallaryslideIndex];
        for (i = 0; i < gallery_slides.length; i++) {
            gallery_slides[i].className = "GallarySlidesimageHolder";
            gallery_slides[i].style.opacity = 0;

            if (gallery_dots.length > 0) {
                gallery_dots[i].className = gallery_dots[i].className.replace(/\bactive\b/g, "");
                document.getElementsByClassName("gallary_dots")[i].className = document.getElementsByClassName("gallary_dots")[i].className.replace(/\bactive\b/g, "");
            }
        }
        current.className += " " + move_slideAnimClass.forCurrent;
        next.className += " " + move_slideAnimClass.forNext;

        if (gallery_dots.length > 0) {
            gallery_dots[n].className = "gallary_dots active"
            document.getElementsByClassName("gallary_dots")[n].className = "gallary_dots active"
        }
        GallaryslideIndex = n;
    }

}


function move_slide2(n) {
    var i;
    var current, next, nextnext, nextnextSlideIndex;

    var gallery_slides_length = gallery_slides.length;
    var move_slideAnimClass = {
        forCurrent: "",
        forNext: "",
        forNextNext: ""
    };

    var slideTextAnimClass;
    for (i = 0; i < gallery_slides_length; i++) {
        gallery_slides[i].style.display = "none";
    }
    if (n > GallaryslideIndex) {
        if (n >= gallery_slides_length) { n = 0; }
        move_slideAnimClass.forCurrent = "moveLeftCurrentSlide";
        move_slideAnimClass.forNext = "moveLeftNextSlide";
        move_slideAnimClass.forNextNext = "moveLeftNextNextSlide";
        slideTextAnimClass = "slideTextFromTop";

        nextnextSlideIndex = n + 1 < gallery_slides_length ? n + 1 : 0;

    } else if (n < GallaryslideIndex) {
        if (n < 0) { n = gallery_slides_length - 1; }
        move_slideAnimClass.forCurrent = "moveRightCurrentSlide";
        move_slideAnimClass.forNext = "moveRightPrevSlide";
        move_slideAnimClass.forNextNext = "moveRightPrevPrevSlide";
        slideTextAnimClass = "slideTextFromBottom";

        nextnextSlideIndex = n - 1 >= 0 ? n - 1 : gallery_slides_length - 1;
    }

    if (gallery_slides_length > 2) {
        gallery_slides[nextnextSlideIndex].style.display = "block";
    }

    gallery_slides[GallaryslideIndex].style.display = "block";

    gallery_slides[n].style.display = "block";

    if (n != GallaryslideIndex) {
        next = gallery_slides[n];
        current = gallery_slides[GallaryslideIndex];
        nextnext = gallery_slides[nextnextSlideIndex];
        for (i = 0; i < gallery_slides.length; i++) {
            gallery_slides[i].className = "GallarySlidesimageHolder";
            gallery_slides[i].style.opacity = 0;
            //gallery_dots[i].className = gallery_dots[i].className.replace(/\bactive\b/g, "");
            //document.getElementsByClassName("gallary_dots")[i].className = document.getElementsByClassName("gallary_dots")[i].className.replace(/\bactive\b/g, "");
        }
        current.className += " " + move_slideAnimClass.forCurrent;
        next.className += " " + move_slideAnimClass.forNext;
        nextnext.className += " " + move_slideAnimClass.forNextNext;
        // gallery_dots[n].className = "gallary_dots active"
        //document.getElementsByClassName("gallary_dots")[n].className = "gallary_dots active"
        GallaryslideIndex = n;
    }
}

// function get_url_vars() {
//     var vars = {};
//     var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
//         vars[key] = value;
//     });
//     return vars;
// }

function create_issue(element) {
    name = document.getElementById("new-issue-name").value;
    document.getElementById("create-issue-error-message").innerHTML = "";

    if (name == "") {
        //showToast("Please enter your name.");
        document.getElementById("create-issue-error-message").innerHTML = "Please enter your name.";
        return;
    }

    if (!/^[a-zA-Z ]*$/.test(name)) {
        // showToast("Please enter a valid name.");
        document.getElementById("create-issue-error-message").innerHTML = "Please enter a valid name.";
        return;
    }

    if (!name.replace(/\s/g, '').length) {
        document.getElementById("create-issue-error-message").innerHTML = "Please enter a valid name.";
        return;
    }

    phone_no = document.getElementById("new-issue-phone").value;
    if (phone_no == "" || phone_no.length != 10) {
        // showToast("Please enter your 10 digits mobile number.");
        document.getElementById("create-issue-error-message").innerHTML = "Please enter your 10 digits mobile number";
        return;
    }

    if (phone_no.length != 10 || !/^\d{10}$/.test(phone_no)) {
        // showToast("Please enter a valid phone no.");
        document.getElementById("create-issue-error-message").innerHTML = "Please enter a valid phone no.";
        return;
    }

    issue = document.getElementById("new-issue-issue").value;
    if (issue == "") {
        // showToast("Please describe your issue.");
        document.getElementById("create-issue-error-message").innerHTML = "Please describe your issue.";
        return;
    }
    if (!issue.replace(/\s/g, '').length) {
        document.getElementById("create-issue-error-message").innerHTML = "Please describe your issue.";
        return;
    }

    priority = document.getElementById("ticket-priority").value;
    if (priority == "") {
        // showToast("Please select the priority.");
        document.getElementById("create-issue-error-message").innerHTML = "Please select the priority.";
        return;
    }

    category = document.getElementById("ticket-category").value;
    if (category == "") {
        // showToast("Please select the category.");
        document.getElementById("create-issue-error-message").innerHTML = "Please select the category.";
        return;
    }

    // bot_id = getUrlVars()["id"]

    json_string = JSON.stringify({
        name: name,
        phone_no: phone_no,
        email: "",
        issue: issue,
        priority: priority,
        category: category,
        "channel": "Web"
        // bot_id:"bot_id"
    });
    json_string = encrypt_variable(json_string);
    document.getElementById("new-issue-name").value = "";
    document.getElementById("new-issue-phone").value = "";
    document.getElementById("new-issue-issue").value = "";
    document.getElementById("ticket-priority").value = "1";
    document.getElementById("ticket-category").value = "";
    $.ajax({
        url: '/tms/create-issue/',
        type: 'POST',
        data: {
            data: json_string
        },
        success: function (response) {
            response = custom_decrypt(response["response"])
            response = JSON.parse(response);
            if (response["status_code"] == 200 && response["ticket_id"] != "") {

                modal_create_issue.style.display = "none";
                message = "Thank you for reporting your issue. Your Ticket ID is " + response["ticket_id"] + ". Kindly save it for further reference. Our customer service agent will contact you shortly."
                append_bot_text_response(message);
            } else if (response["status_code"] == 305 && response["ticket_id"] != "") {

                modal_create_issue.style.display = "none";
                message = "Your issue has been registred. Your Ticket ID is " + response["ticket_id"] + " Today our office is closed. We will proceed with your issue as soon as possible."
                append_bot_text_response(message);
            } else {

                console.log("Please report this. ", response["status_message"]);
            }

            scroll_to_bottom();
        },
        error: function (xhr, textstatus, errorthrown) {
            console.log("Please report this error: " + errorthrown + xhr.status + xhr.responseText);
        }
    });
    enable_user_input();
}

function schedule_meeting(element) {
    document.getElementById("schedule-error-message").innerHTML = "";
    name = document.getElementById("new-meeting-name").value;

    if (name == "") {
        // showToast("Please enter your name.");
        document.getElementById("schedule-error-message").innerHTML = "Please enter your name";
        return;
    }
    if (!/^[a-zA-Z ]*$/.test(name)) {
        // showToast("Please enter a valid name.");
        document.getElementById("schedule-error-message").innerHTML = "Please enter a valid name";
        return;
    }
    if (!name.replace(/\s/g, '').length) {
        document.getElementById("schedule-error-message").innerHTML = "Please enter a valid name.";
        return;
    }

    phone_no = document.getElementById("new-meeting-phone").value;
    if (phone_no == "" || phone_no.length != 10) {
        // showToast("Please enter your 10 digits mobile number.");
        document.getElementById("schedule-error-message").innerHTML = "Please enter 10 digits mobile number";
        return;
    }

    if (phone_no.length != 10 || !/^\d{10}$/.test(phone_no)) {
        // showToast("Please enter a valid phone no.");
        document.getElementById("schedule-error-message").innerHTML = "Please enter a valid phone no.";
        return;
    }

    //Meeting Date

    meet_date = document.getElementById("new-meeting-date").value;
    if (meet_date == "") {
        // showToast("Please enter meeting date.")
        document.getElementById("schedule-error-message").innerHTML = "Please enter date.";
        return;
    }

    meet_date_year = meet_date.split("-")[0]
    meet_date_month = meet_date.split("-")[1]
    meet_date_date = meet_date.split("-")[2]

    if (meet_date_year < new Date().getFullYear()) {
        document.getElementById("schedule-error-message").innerHTML = "Please enter a valid year.";
        return;
    } else if (meet_date_year == new Date().getFullYear() && meet_date_month < (new Date().getMonth() + 1)) {
        document.getElementById("schedule-error-message").innerHTML = "Please enter a valid month.";
        return;
    } else if (meet_date_year == new Date().getFullYear() && meet_date_month == (new Date().getMonth() + 1) && meet_date_date < new Date().getDate()) {
        document.getElementById("schedule-error-message").innerHTML = "Please enter a valid day.";
        return;
    }

    // Meeting Time
    meet_time = document.getElementById("new-meeting-time").value;
    if (meet_time == "") {
        // showToast("Please enter meeting time.")
        document.getElementById("schedule-error-message").innerHTML = "Please enter meeting time.";
        return;
    }
    if (meet_date_year == new Date().getFullYear() && meet_date_month == (new Date().getMonth() + 1) && meet_date_date == new Date().getDate()) {
        meet_time_hour = meet_time.split(":")[0]
        meet_time_hour = parseInt(meet_time_hour)

        meet_time_minute = meet_time.split(":")[1]
        meet_time_minute = parseInt(meet_time_minute)

        current_hour = new Date().getHours()
        current_minute = new Date().getMinutes()
        if (meet_time_hour < current_hour) {
            // showToast("Please enter valid time.")
            document.getElementById("schedule-error-message").innerHTML = "Please enter valid time.";
            return;
        } else if (meet_time_hour == current_hour && meet_time_minute < current_minute) {
            // showToast("Please enter valid time.");
            document.getElementById("schedule-error-message").innerHTML = "Please enter valid time.";
            return;
        }
    }

    meet_agent_date_time = meet_date + "T" + meet_time

    user_pincode = document.getElementById("new-meeting-pincode").value;

    issue = document.getElementById("new-meeting-issue").value;
    if (issue == "") {
        //showToast("Please describe your issue.");
        document.getElementById("schedule-error-message").innerHTML = "Please describe your issue";
        return;
    }
    if (!issue.replace(/\s/g, '').length) {
        document.getElementById("schedule-error-message").innerHTML = "Please describe your issue";
        return;
    }

    json_string = JSON.stringify({
        name: name,
        phone_no: phone_no,
        email: "",
        issue: issue,
        meet_agent_date_time: meet_agent_date_time,
        user_pincode: user_pincode,
        "channel": "Web"
    });
    json_string = encrypt_variable(json_string);

    document.getElementById("new-meeting-name").value = "";
    document.getElementById("new-meeting-phone").value = "";
    document.getElementById("new-meeting-date").value = "";
    document.getElementById("new-meeting-time").value = "";
    document.getElementById("new-meeting-pincode").value = "";
    document.getElementById("new-meeting-issue").value = "";

    $.ajax({
        url: '/tms/schedule-meeting/',
        type: 'POST',
        data: {
            data: json_string
        },
        success: function (response) {
            response = custom_decrypt(response["response"])
            response = JSON.parse(response);
            if (response["status_code"] == 200 && response["meeting_id"] != "") {
                modal_schedule_meeting.style.display = "none";
                // appendResponseServer("Thank you for scheduling the meeting. Our agent will contact you soon.",false, "", "", "");
                message = "Thank you for scheduling the meeting. Your Meeting ID is " + response["meeting_id"] + " .Kindly save it for further reference. Our customer service agent will contact you shortly."
                // message = "Thank you for scheduling the meeting. Our agent will contact you soon.";
                append_bot_text_response(message);
            } else {
                // showToast("Unable to schedule meeting due to some internal server error. Kindly report the same", 2000);
                console.log("Please report this. ", response["status_message"]);
            }

            scroll_to_bottom();
        },
        error: function (xhr, textstatus, errorthrown) {
            console.log("Please report this error: " + errorthrown + xhr.status + xhr.responseText);
        }
    });
    enable_user_input();
}

function check_ticket_status(element) {
    document.getElementById("ticket-status-error-message").innerHTML = "";
    ticket_id = document.getElementById("check-ticket-id").value;
    if (ticket_id == "" || !ticket_id.replace(/\s/g, '').length) {
        // showToast("Please enter your ticket id.");
        document.getElementById("ticket-status-error-message").innerHTML = "Please enter your ticket id.";
        return;
    }
    json_string = JSON.stringify({
        ticket_id: ticket_id,
    });
    json_string = encrypt_variable(json_string);

    document.getElementById("check-ticket-id").value = "";

    $.ajax({
        url: '/tms/check-ticket-status/',
        type: 'POST',
        data: {
            data: json_string
        },
        success: function (response) {
            response = custom_decrypt(response["response"])
            response = JSON.parse(response);
            if (response["status_code"] == 200 && response["ticket_exist"] == true) {
                // $('#modal-check-ticket-status').modal('close');
                modal_check_ticket_status.style.display = "none";
                message = response["ticket_status_message_response"]
                append_bot_text_response(message);
            } else if (response["ticket_exist"] == false) {
                // $('#modal-check-ticket-status').modal('close');
                modal_check_ticket_status.style.display = "none";
                message = "Sorry, no such ticket found. Please check your Ticket ID and try again."
                append_bot_text_response(message);
            } else {
                showToast("Unable to get your ticket due to some internal server error. Kindly report the same", 2000);
                console.log("Please report this. ", response["status_message"]);
            }
            scroll_to_bottom();
        },
        error: function (xhr, textstatus, errorthrown) {
            console.log("Please report this error: " + errorthrown + xhr.status + xhr.responseText);
        }
    });
    enable_user_input();
}

function check_meeting_status(element) {
    document.getElementById("meeting-status-error-message").innerHTML = "";
    meeting_id = document.getElementById("check-meeting-id").value;
    if (meeting_id == "" || !meeting_id.replace(/\s/g, '').length) {
        // showToast("Please enter your meeting id.");
        document.getElementById("meeting-status-error-message").innerHTML = "Please enter your meeting id.";
        return;
    }
    json_string = JSON.stringify({
        meeting_id: meeting_id,
    });
    json_string = encrypt_variable(json_string);

    document.getElementById("check-meeting-id").value = "";

    $.ajax({
        url: '/tms/check-meeting-status/',
        type: 'POST',
        data: {
            data: json_string
        },
        success: function (response) {
            response = custom_decrypt(response["response"])
            response = JSON.parse(response);
            if (response["status_code"] == 200 && response["meeting_exist"] == true) {
                // $('#modal-check-meeting-status').modal('close');
                modal_check_meeting_status.style.display = "none";
                message = response["meeting_status_message_response"]
                append_bot_text_response(message);
            } else if (response["meeting_exist"] == false) {
                // $('#modal-check-meeting-status').modal('close');
                modal_check_meeting_status.style.display = "none";
                message = "Sorry, no such meeting found. Please check your Meeting ID and try again."
                append_bot_text_response(message);
            } else {
                showToast("Unable to submit your issue due to some internal server error. Kindly report the same", 2000);
                console.log("Please report this. ", response["status_message"]);
            }
            scroll_to_bottom();
        },
        error: function (xhr, textstatus, errorthrown) {
            console.log("Please report this error: " + errorthrown + xhr.status + xhr.responseText);
        }
    });
    enable_user_input();
}

$(document).ready(function () {
    $(':input').on('focus', function () {
        $(this).attr('autocomplete', 'off');
    });
});

// var mark_offline_var = false;
window.onbeforeunload = function (e) {

    cancel_text_to_speech()
    // clear_userData()
    if (window.localStorage) {
        // flag the page as being unloading
        window.localStorage['myUnloadEventFlag'] = new Date().getTime();
    }
}

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        cancel_text_to_speech();
    }
}, false);


function clear_userData(end_message) {

    var json_string = JSON.stringify({
        user_id: user_id,
    });
    json_string = encrypt_variable(json_string);
    json_string = encodeURIComponent(json_string);
    var xhttp = new XMLHttpRequest();
    var params = 'json_string=' + json_string;
    xhttp.open("POST", CLEAR_API_URL, true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
        }
    }
    xhttp.send(params);

    clear_livechat_data(end_message);
}

function detectIEEdge() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return true;
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return true;
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge => return version number
        return false;
    }
    // other browser
    return false;
}

// ############## NPS  FeedBack js  END #######################
// ############## Height Adjustment #################

// ############## Cobrowsing Integration Start ####################

function screenshare_with_agent(element) {
    element.innerHTML = "Connecting...";
    document.getElementById("connect-agent-status-error-message").innerHTML = "";
    var full_name = document.getElementById("connect-agent-name").value;
    var mobile_number = document.getElementById("connect-agent-phone").value;
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var regMob = /^[6-9]{1}[0-9]{9}$/;

    if (!regName.test(full_name)) {
        document.getElementById("connect-agent-status-error-message").innerHTML = "Please enter full name";
        return;
    }

    if (!regMob.test(mobile_number)) {
        document.getElementById("connect-agent-status-error-message").innerHTML = "Please enter valid 10-digit mobile number";
        return;
    }

    parent.postMessage({
        event_id: 'connect-with-agent',
        data: {
            "full_name": full_name,
            "mobile_number": mobile_number
        }
    }, "*");

    document.getElementById("modal-connect-with-agent").style.display = "none";
}

// function append_connect_with_agent(){
//     var recommendations_html = '<div class="easychat-recommendation-wrapper" align="left">';
//     if(window.EASYCHAT_EASYASSIST_ENABLED=="True"){
//      recommendations_html+= "<div class=\"easychat-recommendation\" onmouseover='custom_button_change(this)' onmouseout='custom_button_change_normal(this)' style=\"border: 0.05em solid "+BOT_THEME_COLOR+";color: "+BOT_THEME_COLOR+"\" onclick=\"show_connect_with_agent_modal(this)\">Connect with expert</div>";
//     }else if(window.EASYCHAT_LIVECHAT_ENABLED=="True"){
//      recommendations_html+= "<div class=\"easychat-recommendation\" onmouseover='custom_button_change(this)' onmouseout='custom_button_change_normal(this)' style=\"border: 0.05em solid "+BOT_THEME_COLOR+";color: "+BOT_THEME_COLOR+"\" onclick=\"append_livechat_response(this)\">Chat with expert</div>";
//     }
//     recommendations_html+="</div>";
//     document.getElementById("easychat-chat-container").innerHTML += recommendations_html;
// }

// ############## Cobrowsing Integration End ########################

window.addEventListener('message', handle_parent_message, false);

function handle_parent_message(event) {
    try {
        data = JSON.parse(event.data);
        if (data.attachment == "None" || data.attachment == undefined) {
            if (data.message != undefined) {
                append_bot_text_response(data.message);
            }
        } else {
            var html = '<a href="' + data.attachment + '" target="_blank"><img src="/static/EasyAssistApp/img/documents2.png" style="height: 100%;width: 100%;border-radius: 1em;object-fit: contain;"></a>';
            document.getElementById("easychat-chat-container").innerHTML += '<div style="width:98%;display:inline-block;"><div class="easychat-livechat-customer-attachment" style="float:left;">' + html + '<div class="easychat-livechat-message">' + data.message + '</div></div></div>';
        }
        scroll_to_bottom();
        is_cobrowsing_chat = true;
    } catch (err) { }
}


function get_cross_button_svg() {
    var svg = '<svg width="8" height="8" class="livechat-cross-btn-svg" viewBox="0 0 8 8" fill="' + BOT_THEME_COLOR + '" xmlns="http://www.w3.org/2000/svg"><path d="M5.1875 3.9875L7.8875 1.3125C8.0375 1.1625 8.0375 0.8875 7.8875 0.7375L7.2625 0.1125C7.1125 -0.0375 6.8375 -0.0375 6.6875 0.1125L4.0125 2.8125L1.3125 0.1125C1.1625 -0.0375 0.8875 -0.0375 0.7375 0.1125L0.1125 0.7375C-0.0375 0.8875 -0.0375 1.1625 0.1125 1.3125L2.8125 3.9875L0.1125 6.6875C-0.0375 6.8375 -0.0375 7.1125 0.1125 7.2625L0.7375 7.8875C0.8875 8.0375 1.1625 8.0375 1.3125 7.8875L4.0125 5.1875L6.6875 7.8875C6.8375 8.0375 7.1125 8.0375 7.2625 7.8875L7.8875 7.2625C8.0375 7.1125 8.0375 6.8375 7.8875 6.6875L5.1875 3.9875Z" ></path> </svg>'
    return svg;
}
function change_span_name_to_file_name_livechat(el) {

    if (user_has_uploaded_previous_file == true) {
        if (el.files[0] != undefined || el.files[0] != null) {
            var file_ext = el.files[0].name.split(".");
            file_ext = el.files[0].name.split(".")[file_ext.length - 1];
            var file_name_malicious = false
            var check_file_more_than_one_fullstop = el.files[0].name.replace(" ", "").split(".");
            if (check_file_more_than_one_fullstop.length > 2) {
                file_name_malicious = true
            }

            allowed_file_extensions = ["png", "PNG", "JPG", "JPEG", "jpg", "jpeg", "svg", "bmp", "gif", "tiff", "exif", "jfif", "WEBM", "MPG", "MP2", "MPEG", "MPE", "MPV", "OGG", "MP4", "M4P", "M4V", "AVI", "WMV", "MOV", "QT", "FLV", "SWF", "AVCHD", "pdf", "docs", "docx", "doc", "PDF"]
            if (file_name_malicious == false && allowed_file_extensions.indexOf(file_ext) != -1) {


                var html =
                    '<div class="easychat-user-message-div"><div id ="livechat-user-upload-attachment-div"class="easychat-drag-drop-after-select" style="background-color: white;padding: 1em;box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 6px;border-radius: 1em;margin-top: .7em; width:85%; display:flex;float:right"">'

                html += '<span> ' + FILE_ICON_SVG + '</span>'

                html += '<span id="easychat-drag-drop-alert-msg" style="width: 60%;word-break: break-all;padding-top: .5em;vertical-align: middle;margin-left: 11px;">Error Message</span>\
           <button onclick="save_attachment_to_data_models_livechat()" id="easychat-drag-drop-upload-btn" style="background-color:' + BOT_THEME_COLOR + ';display: inline-block;float: right;padding: .5em;border: none;color: white;border-radius: 5px;cursor:pointer;margin-left:20px;">Upload</button>\
           <div style="width:100%;float:left;display:none;" id="easychat-dragdropbottyping-loader"><img src="' + EASYCHAT_IMG_PATH + 'preloader.svg" style="height:3em;"></div>\
       </div></div></div>';


                scroll_to_bottom()

                if (el.files[0].size <= 5 * 1024 * 1024) {
                    document.getElementById("easychat-chat-container").innerHTML += html;
                    document.getElementsByClassName("easychat-drag-drop-after-select")[document.getElementsByClassName('easychat-drag-drop-after-select').length - 1].style.backgroundColor = "white"
                    document.getElementById("easychat-drag-drop-alert-msg").style.fontSize = "unset"
                    document.getElementsByClassName("easychat-drag-drop-after-select")[document.getElementsByClassName('easychat-drag-drop-after-select').length - 1].style.padding = "1em"
                    document.getElementsByClassName("easychat-drag-drop-after-select")[document.getElementsByClassName('easychat-drag-drop-after-select').length - 1].style.boxShadow = "1px 1px 6px rgba(0, 0, 0, 0.2)"
                    document.getElementsByClassName("easychat-drag-drop-after-select")[document.getElementsByClassName('easychat-drag-drop-after-select').length - 1].style.borderRadius = "1em"
                    document.getElementById("easychat-drag-drop-alert-msg").style.display = "inline-block"
                    document.getElementById("easychat-drag-drop-alert-msg").style.color = "black"
                    file_name = el.files[0].name.split(".")
                    file_length = file_name.length
                    file_ext = parseInt(parseInt(file_length) - 1)
                    if (el.files[0].name.length >= 15) {
                        file_name_mod = file_name[0].slice(0, 15) + "... ." + file_name[file_name.length - 1]
                    } else {
                        file_name_mod = el.files[0].name
                    }
                    if(EASYCHAT_BOT_THEME == 'theme_2'){
                        document.getElementById("easychat-drag-drop-alert-msg").innerHTML = file_name_mod + ' <div onclick="remove_file_from_attachment_livechat()" id="easychat-livechat-remove-attachment" class="easychat-dragdropAlertMsgClose__XPS" style="color: ' + BOT_THEME_COLOR + ';width:20px;height:20px;position:relative;margin-left:5px;">' + get_cross_button_svg() + '</div>'
                    }
                    else{
                        document.getElementById("easychat-drag-drop-alert-msg").innerHTML = file_name_mod + ' <span onclick="remove_file_from_attachment_livechat()" id="easychat-livechat-remove-attachment" class="easychat-dragdropAlertMsgClose__XPS" style="color: ' + BOT_THEME_COLOR + ';">' + get_cross_button_svg() + '</span>'
                    }
                    document.getElementById("easychat-drag-drop-upload-btn").style.display = "inline-block"
                    scroll_to_bottom();
                    document.getElementById("easychat-img-div").style.display = "none"
                    document.getElementById("easychat-img-div-previous").style.display = "flex"
                    user_has_uploaded_previous_file = false


                } else {
                    // document.getElementById("easychat-drag-drop-alert-msg").style.display = "inline-block"
                    // document.getElementById("easychat-drag-drop-alert-msg").style.fontSize = "unset"
                    // document.getElementById("easychat-drag-drop-alert-msg").style.color = "red"
                    // document.getElementById("easychat-drag-drop-alert-msg").textContent = "Please Select a file < 5MB*"
                    // try{
                    //  document.getElementsByClassName('easychat-drag-drop-after-select')[document.getElementsByClassName('easychat-drag-drop-after-select').length - 1].style.width = '55%';
                    //  document.getElementsByClassName('easychat-drag-drop-after-select')[document.getElementsByClassName('easychat-drag-drop-after-select').length - 1].style.textAlign = 'center';
                    //  }catch(err){}
                    // document.getElementById("easychat-drag-drop-upload-btn").style.display = "none"
                    // document.getElementById("easychat-chat-container").classList.remove("easychat-drag-drop-after-select");
                    // console.log(document.getElementById("easychat-chat-container").classList)
                    append_user_input("Please Select a file < 5MB*")
                    scroll_to_bottom()

                }
            } else {
                playSound(STATIC_MP3_PATH + '/juntos1.mov');
                append_user_input("Please upload a valid file with a valid name (ex: jpeg,docs,pdf etc)")
                scroll_to_bottom()
            }
        }
    }


}


function save_attachment_to_data_models_livechat() {


    if(EASYCHAT_BOT_THEME != "theme_2"){
        var uploaded_attachment_container = document.getElementById("livechat-user-upload-attachment-div");
        document.getElementById("easychat-drag-drop-upload-btn").remove();
        document.getElementById("easychat-livechat-remove-attachment").remove();

        html = '<div class="upload-file-loader" style="display:block;">\
                <div class="progressbar" data-animate="false">\
                    <button class="delete-choose-file" onclick="stop_uploading_file_livechat()">'
                    + FILE_LOADER_SVG +    
                    '</button>\
                    <div class="circle" data-percent="100">\
                        <div class="circle-progress-value"></div>\
                    </div>\
                    </div>';
            uploaded_attachment_container.innerHTML += html;
    }

    disable_user_input();
    var upload_attachment_data = document.querySelector('#easychat-livechat-uploadfile').files[0]

    var reader = new FileReader();
    reader.readAsDataURL(upload_attachment_data);
    reader.onload = function() {

        base64_str = reader.result.split(",")[1];

        uploaded_file = [];
        uploaded_file.push({
            "filename": upload_attachment_data.name,
            "base64_file": base64_str,
            "user_id": user_id
        });

        upload_livechat_attachment();
    };

    reader.onerror = function(error) {
        console.log('Error: ', error);
    };
}

function upload_livechat_attachment () {
    var attached_file_src = "";

    var json_string = JSON.stringify(uploaded_file)
    json_string = encrypt_variable(json_string)

    encrypted_data = {
        "Request": json_string
    }

    var params = JSON.stringify(encrypted_data);

    xhttp_livechat_attachment = new XMLHttpRequest();
    xhttp_livechat_attachment.open("POST", "/chat/upload-attachment/", true);
    xhttp_livechat_attachment.setRequestHeader('Content-Type', 'application/json');

    if(EASYCHAT_BOT_THEME != "theme_2"){
        var progress_circle = $('.circle');
    
        progress_circle.circleProgress({
            startAngle: -Math.PI / 2,
            value: 0.0,
            size: 40,
            thickness: 4,
            emptyFill: "#eeeaef",
            fill: {color: BOT_THEME_COLOR}
        });
    
        xhttp_livechat_attachment.upload.onprogress = function (e){    
            let upload_value = (e.loaded/e.total).toFixed(2);
            progress_circle.circleProgress('value', upload_value).on('circle-animation-progress', function(event, progress, stepValue) {
                        $('.circle-progress-value').text((stepValue * 100).toFixed(0) + "%");
                    });
        };
    }

    xhttp_livechat_attachment.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            response = this.response
            response = JSON.parse(response)
            response = custom_decrypt(response)
            response = JSON.parse(response);
            if (response.status == 200) {
                attached_file_src = response.src;
                attached_preview_file_src = window.location.origin + response['preview_file_path']
                attached_file_name = response.name;
                try {
                    thumbnail_url = response.thumbnail_url;
                    preview_thumbnail_url = window.location.origin + response.preview_thumbnail_url;
                } catch (err) {
                    thumbnail_url = "";
                    preview_thumbnail_url  = "";
                }
                var html = get_file_path_html(attached_file_src)
                document.getElementsByClassName("easychat-drag-drop-after-select")[0].parentNode.remove()
                playSound(STATIC_MP3_PATH + '/juntos1.mov');
                // append_user_input("Your attachment has been uploaded")
                append_user_attachment_preview(attached_file_name, response['preview_file_path'],preview_thumbnail_url )
                scroll_to_bottom()
                if (thumbnail_url == "" || thumbnail_url == undefined) {
                    send_message_to_server("", user_id, bot_id, bot_name, "", attached_file_src,"",attached_preview_file_src);
                } else {
                    send_message_to_server("", user_id, bot_id, bot_name, "", attached_file_src, thumbnail_url,attached_preview_file_src);
                }
                document.getElementById("easychat-livechat-uploadfile").value = ""
                enable_user_input();
                user_has_uploaded_previous_file = true
                document.getElementById("easychat-img-div").style.display = "flex"
                document.getElementById("easychat-img-div-previous").style.display = "none"
            } else {
                playSound(STATIC_MP3_PATH + '/juntos1.mov');
                append_user_input("Malicious File not accepted")
            }
        }
    }
    xhttp_livechat_attachment.send(params);
}
 
function remove_file_from_attachment_livechat() {
    document.getElementById("easychat-drag-drop-alert-msg").innerHTML = ""
    document.getElementById("easychat-livechat-uploadfile").value = ""
    if(document.getElementById("easychat-drag-drop-upload-btn")){
        document.getElementById("easychat-drag-drop-upload-btn").style.display = "none"
    }
    document.getElementsByClassName("easychat-drag-drop-after-select")[0].parentNode.style.display = "none";
    document.getElementsByClassName("easychat-drag-drop-after-select")[0].style.backgroundColor = "unset"
    document.getElementsByClassName("easychat-drag-drop-after-select")[0].style.padding = "0"
    document.getElementsByClassName("easychat-drag-drop-after-select")[0].style.boxShadow = "unset"
    document.getElementsByClassName("easychat-drag-drop-after-select")[0].style.borderRadius = "unset"
    document.getElementById("easychat-dragdropbottyping-loader").style.display = "none"
    document.getElementsByClassName("easychat-drag-drop-after-select")[0].remove()
    document.getElementById("easychat-img-div-previous").style.display = "none";
    document.getElementById("easychat-img-div").style.display = "flex";
    user_has_uploaded_previous_file = true;
}

function stop_uploading_file_livechat(){
    xhttp_livechat_attachment.abort();
    document.getElementsByClassName("upload-file-loader")[0].style.display = "none";
    remove_file_from_attachment_livechat();
}

function append_user_response(user_input, time) {
    html = '<div class="easychat-user-message-div"><div class="easychat-message-animation easychat-user-message easychat-user-message-line" style="background-color:' + BOT_THEME_COLOR + ';color: ' + USER_MESSAGE_COLOR + '">' + user_input + '<span class="message-time-user">' + time + '&nbsp;&nbsp;<div style="display:inline-block;" ><img class="doubletick_easychat" src="' + EASYCHAT_IMG_PATH + 'doubletick_blue.svg" style="height:1.5em;"></div></span></div></div>';
    document.getElementById("easychat-chat-container").innerHTML += html;

}
function append_bot_response_livechat(agent_response, time) {
    var html = '<div class="easychat-bot-message-div" ><div class="easychat-bot-message easychat-bot-message-line" style="color: ' + BOT_MESSAGE_COLOR + '; word-break: break-word;box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2) !important;" ><div class="easychat-show-less-text">' + agent_response + '</div>'
    html += '<span class="message-time-bot">' + time + '</span></div></div>'
    // html += '<div style="margin-left: 45px;color: #757575;font-size: 10px">'+time+'</div> '
    document.getElementById("easychat-chat-container").innerHTML += html;
}

function sleep(milliseconds) {

    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

window.onclick = function (event) {
    var drop_btn_matches = event.target.matches ? event.target.matches('.dropbtn') : event.target.msMatchesSelector('.dropbtn');
    var drop_search_matches = event.target.matches ? event.target.matches('.dropdown-search') : event.target.msMatchesSelector('.dropdown-search');

    if (!drop_btn_matches && !drop_search_matches) {
        $(".easychat-widget-dropdown-content").removeClass("easychat-display-dropdown");
    }
}

////////////////////////// OPEN LOCAL DB FOR SUGGESTIONS START/////////////////////////////
function open_local_db() {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: "readwrite" };
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.");
        is_indexed_db_supported = false;
        return;
    }

    var openRequest = window.indexedDB.open(db_name, 1);

    openRequest.onerror = function () {
        is_indexed_db_supported = false
        console.error("Error", openRequest.error);
    };

    openRequest.onsuccess = function (event) {
        db = event.target.result;
        get_messages_from_local()
    };
}

function get_object_store(store_name, mode) {
    try {
        var tx = db.transaction(store_name, mode);
        return tx.objectStore(store_name);
    } catch (err) {
        console.log(err);
        return -1
    }
}
function get_messages_from_local() {
    try {
        var suggestion_list_store = get_object_store(table_name, 'readwrite');
        var index = suggestion_list_store.index('table_index');
        var key = IDBKeyRange.only(table_index);
        var data = []
        index.openCursor(key, "next").onsuccess = function (event) {
            var cursor = event.target.result;
            if (cursor) {
                is_data_present = true;
                data.push(cursor.value)
                cursor.continue();
                suggestion_list = data[0]['suggestion_list']
                fuzzyhound.setOptions({
                    source: suggestion_list,
                    keys: ["key"],
                    score_test_fused: true,
                    score_per_token: true,
                    score_acronym: true,
                })
            }
        };
    } catch (err) {
        console.log(err);
    }
}
////////////////////////// OPEN LOCAL DB FOR SUGGESTIONS END /////////////////////////////


///////////////////////// EASYCHAT FEEDBACK START ////////////////////////
function submit_button_text() {
    if (csat_feedback_form_enabled == true) {
        document.getElementById("submit-btn").innerHTML = "Next"
    } else {
        document.getElementById("submit-btn").innerHTML = "Submit"
    }
}

$('#feedback-value').on('input', function () {
    feedbackValueFunc();
});
var range = document.getElementById('feedback-value');
var rangeV = document.getElementById('rangeV');

function feedbackValueFunc(el) {

    if (el.id == 'angry-emoji-div') {
        document.getElementById('angry-emoji-div').src = EASYCHAT_IMG_PATH + 'angry-emoji-animate.gif';
        document.getElementById('sad-emoji-div').src = EASYCHAT_IMG_PATH + 'sad-emoji.svg';
        document.getElementById('happy-emoji-div').src = EASYCHAT_IMG_PATH + 'happy-emoji.svg';
        document.getElementById('inlove-emoji-div').src = EASYCHAT_IMG_PATH + 'in-love-emoji.svg';
        document.getElementById('angry-emoji-div').style.width = '60px';
        document.getElementById('angry-emoji-div').style.height = '60px';
        contentvalue = 1

    } else {
        document.getElementById('angry-emoji-div').style.width = '52px';
        document.getElementById('angry-emoji-div').style.height = '52px';
    }

    if(el.id == 'sad-emoji-div') {
        document.getElementById('sad-emoji-div').src = EASYCHAT_IMG_PATH + 'sad-emoji-animate.gif';
        document.getElementById('angry-emoji-div').src = EASYCHAT_IMG_PATH + 'angry-emoji.svg';

        document.getElementById('happy-emoji-div').src = EASYCHAT_IMG_PATH + 'happy-emoji.svg';
        document.getElementById('inlove-emoji-div').src = EASYCHAT_IMG_PATH + 'in-love-emoji.svg';
        document.getElementById('sad-emoji-div').style.width = '60px';
        document.getElementById('sad-emoji-div').style.height = '60px';
        contentvalue = 2
    } else {
        document.getElementById('sad-emoji-div').style.width = '52px';
        document.getElementById('sad-emoji-div').style.height = '52px';
    }

    if (el.id == 'happy-emoji-div') {
        document.getElementById('happy-emoji-div').src = EASYCHAT_IMG_PATH + 'happy-emoji-animate.gif';

        document.getElementById('angry-emoji-div').src = EASYCHAT_IMG_PATH + 'angry-emoji.svg';

        document.getElementById('sad-emoji-div').src = EASYCHAT_IMG_PATH + 'sad-emoji.svg';

        document.getElementById('inlove-emoji-div').src = EASYCHAT_IMG_PATH + 'in-love-emoji.svg';
        document.getElementById('happy-emoji-div').style.width = '60px';
        document.getElementById('happy-emoji-div').style.height = '60px';
        contentvalue = 3

    } else {
        document.getElementById('happy-emoji-div').style.width = '52px';
        document.getElementById('happy-emoji-div').style.height = '52px';
    }

    if (el.id == 'inlove-emoji-div') {
        document.getElementById('inlove-emoji-div').src = EASYCHAT_IMG_PATH + 'in-love-emoji-animate.gif';
        document.getElementById('angry-emoji-div').src = EASYCHAT_IMG_PATH + 'angry-emoji.svg';
        document.getElementById('sad-emoji-div').src = EASYCHAT_IMG_PATH + 'sad-emoji.svg';
        document.getElementById('happy-emoji-div').src = EASYCHAT_IMG_PATH + 'happy-emoji.svg';
        document.getElementById('inlove-emoji-div').style.width = '60px';
        document.getElementById('inlove-emoji-div').style.height = '60px';
        contentvalue = 4
    } else {
        document.getElementById('inlove-emoji-div').style.width = '52px';
        document.getElementById('inlove-emoji-div').style.height = '52px';
    }
}

function clicked_on_emoji(element) {
    element_classname = element.className
    rating_value = 1

    if (element_classname == "quarter-rating") {
        rating_value = 1
    }
    else if (element_classname == "half-rating") {
        rating_value = 2
    }
    else if (element_classname == "three-quarter-rating") {
        rating_value = 3
    }
    else {
        rating_value = 4
    }
    contentvalue = rating_value

    submit_feedback();
}


///////////////////////// EASYCHAT FEEDBACK END ////////////////////////

///////////////////////// GET CLIENT LOCATION DETAILS START ////////////////////////

//Get the latitude and the longitude;
function location_success(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    get_location_with_coordinates(lat, lng);
}

function location_error(){
    console.log("Geocoder failed");
    client_location_city = null;
    client_location_state = null;
    client_location_pincode = null;
}

function initialize_client_location() {
    try{
        geocoder = new google.maps.Geocoder();

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(location_success, location_error);
        }
    } catch(err) {

        console.log("Geo-location not provided " + err) // debugging purpose
    }
}

function get_location_with_coordinates(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
            city = results[0].address_components[results[0].address_components.length - 5]['long_name'];
            state = results[0].address_components[results[0].address_components.length - 3]['long_name'];
            pincode = results[0].address_components[results[0].address_components.length - 1]['long_name'];
            client_location_city = city;
            client_location_state = state;
            client_location_pincode = pincode;
            }
        else {
            console.log("address not found");
            }
    } else {
        console.log("Geocoder failed due to: " + status);
        }
    });
}

function mute_unmute_speech() {
    var unmute_icon = document.getElementById('easychat-unmute-icon');
    var mute_icon = document.getElementById('easychat-mute-icon');

    if(!is_mute()) {
        unmute_icon.style.display = 'none';
        mute_icon.style.display = 'block';

        if (speech_synthesis_instance) speech_synthesis_instance.cancel();

        document.getElementById('tooltiptext-speaker').innerHTML = UNMUTE_TEXT;
    } else {

        unmute_icon.style.display = 'block';
        mute_icon.style.display = 'none';

        document.getElementById('tooltiptext-speaker').innerHTML = MUTE_TEXT;
    }
}

function is_mute() {
    return document.getElementById('easychat-mute-icon').style.display == 'block';
}
///////////////////////// GET CLIENT LOCATION DETAILS END ////////////////////////

//////// Polyfil for repeat method of string type object ////////////
if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null)
      throw new TypeError('can\'t convert ' + this + ' to object');

    var str = '' + this;
    // To convert string to integer.
    count = +count;
    // Check NaN
    if (count != count)
      count = 0;

    if (count < 0)
      throw new RangeError('repeat count must be non-negative');

    if (count == Infinity)
      throw new RangeError('repeat count must be less than infinity');

    count = Math.floor(count);
    if (str.length == 0 || count == 0)
      return '';

    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28)
      throw new RangeError('repeat count must not overflow maximum string size');

    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while (count) {
       str += str;
       count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
}
/////// End polyfil for repeat method of string type object /////////////////////

////// Includes Polyfill ////
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }
    if (start === undefined) { start = 0; }
    return this.indexOf(search, start) !== -1;
  };
}
////// End Includes polyfill ///////

// ScrollBy polyfill //
if(!window.scrollBy){
  window.scrollBy = function(x, y){
    if(x) $('html, body').scrollLeft($(window).scrollLeft() + x);
    if(y) $('html, body').scrollTop($(window).scrollTop() + y);
  };
}

if(!Element.prototype.scrollBy){
  Element.prototype.scrollBy = function(x, y){
    if(x) $(this).scrollLeft($(this).scrollLeft() + x);
    if(y) $(this).scrollTop($(this).scrollTop() + y);
  };
}

// ScrollBy Polyfill //

// ####################################### ####################################### #######################################