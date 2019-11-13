import { ADD_VACATION } from '../constants/actionTypes';
const vacations = (state=[], {userId, startDate, endDate, description, type}) => {
    switch(type) {
        case ADD_VACATION:
            return [
                ...state, {
                    userId,
                    startDate,
                    endDate,
                    description
                }
            ];
        default:
            return state;
    }
}

export default vacations;