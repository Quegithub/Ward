/**
 * Used for sending ajax requests
 */
let xhr;

/**
 * Initializes uptime counter and usage values
 */
function tickInitialization()
{
    xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function()
    {
        if (this.readyState == 4)
        {
            let response = JSON.parse(this.response);
            usageTick(response);
            sendAjaxRequest();
        }
    }
    sendAjaxRequest();

    setInterval(function()
    {
        uptimeTick();
    }, 1000);
}

/**
 * Sending ajax request to receive usage info
 */
function sendAjaxRequest()
{
    xhr.open("GET", "/api/usage");
    xhr.send();
}