export const commandsService = {
    sendCommand
};

function sendCommand(trackers, command) {
    const data = {
        "trackerID": "tracker001",
        "command": "STOP"
    }
    const requestOptions = {
        method: "POST",
        mode: 'cors',
        body: data
    };

    return fetch(`http://192.168.1.8:5000/sendCommand`, requestOptions)
        .then(handleResponse)
}

function handleResponse(response) {
    return response.json().then(json => {
        if (!response.ok) {
            if (response.status === 403) {
                console.log("403")
                localStorage.removeItem('user')
                window.location.reload(true);
            }

            const error = (json && json.message) || response.statusText;
            return Promise.reject(error);
        }
        return json;
    });
}