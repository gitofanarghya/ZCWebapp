export const commissioningService = {
    getCommissioningData,
    getCurrentTrackerInfo
};

function getCommissioningData() {
    const requestOptions = {
        method: "GET",
        mode: 'cors',
        body: null
    };

    return fetch(`http://192.168.1.8:5000/getCommissioningData`, requestOptions)
        .then(handleResponse)
}

function getCurrentTrackerInfo(trackerID) {
    const requestOptions = {
        method: "GET",
        mode: 'cors',
        body: null
    };

    return fetch(`http://192.168.1.8:5000/getCurrentTrackerInfo?id=${trackerID}`, requestOptions)
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