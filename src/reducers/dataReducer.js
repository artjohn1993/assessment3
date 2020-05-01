import {FETCH_MEMBER, FETCH_POST, SELECTED_MEMBER, SELECTED_POST, FETCH_COMMENT, DELETE_POST, CREATE_POST } from '../actions/type';

const INITIAL_STATE  = {
    member: null,
    post: null,
    selectedMember: null,
    selectedPost: null,
    comments: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_MEMBER:
            return {...state, member: action.payload};
        case FETCH_POST:
            return {...state, post: action.payload};
        case SELECTED_MEMBER:
            return {...state, selectedMember: action.payload};
        case SELECTED_POST:
                return {...state, selectedPost: action.payload};
        case FETCH_COMMENT:
            return {...state, comments: action.payload};
        case CREATE_POST:
            const newPost = [action.payload,...state.post]
            return {...state, post: newPost};
        case DELETE_POST:
            const newState = state.post.filter((item) => {
                return item !== action.payload
            })
            return {...state, post: newState};
        default:
            return state
    }; 
};