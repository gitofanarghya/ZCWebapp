import { wifiConstants } from '../_constants';
import { wifiService } from '../_services';

export const wifiActions = {
    setWifiInfo
};

function setWifiInfo(ssid, pass) {
    return dispatch => {
        dispatch(request());

        wifiService.setWifiInfo(ssid, pass)
            .then(
                ok => { 
                    dispatch(success(ok.toString()));
                    alert('successfully set wifi info!')
                },
                error => {
                    dispatch(failure(error.toString()));
                    alert('error in setting wifi info!')
                }
            );
    };

    function request() { return { type: wifiConstants.SET_WIFI_INFO_REQUEST } }
    function success(success) { return { type: wifiConstants.SET_WIFI_INFO_SUCCESS, success } }
    function failure(error) { return { type: wifiConstants.SET_WIFI_INFO_FAILURE, error } }
}