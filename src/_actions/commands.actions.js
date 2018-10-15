import { commandsConstants } from '../_constants';
import { commandsService } from '../_services';

export const commandsActions = {
    sendCommand
};

function sendCommand(trackers, command) {
    return dispatch => {
        dispatch(request());

        commandsService.sendCommand(trackers, command)
            .then(
                commands => { 
                    dispatch(success(commands));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request() { return { type: commandsConstants.SEND_COMMAND_REQUEST } }
    function success() { return { type: commandsConstants.SEND_COMMAND_SUCCESS } }
    function failure(error) { return { type: commandsConstants.SEND_COMMAND_FAILURE, error } }
}