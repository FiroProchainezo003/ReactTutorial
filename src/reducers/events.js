import _ from 'lodash'
import {
    READ_EVENTS,
    READ_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT
} from "../actions";
// import * as events from "events";

// const initialState = { value: 0};

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}
