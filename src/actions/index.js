import {FETCH_MEMBER, SELECTED_MEMBER, FETCH_POST, CREATE_POST, SELECTED_POST, FETCH_COMMENT, DELETE_POST} from './type'
import api from '../apis/typicode'

//GET
export const fetchMember = () => async dispatch => {
    const response = await api.get('/users');
    dispatch({type: FETCH_MEMBER, payload:response.data})
}

export const fetchComment = (postId) => async dispatch => {
    const response = await api.get('/comments?postId=' + postId);
    dispatch({type: FETCH_COMMENT, payload:response.data})
}

export const fetchPost = (id) => async dispatch => {
    const response = await api.get('/posts?userId=' + id);
    dispatch({type: FETCH_POST, payload:response.data})
}

//POST
export const createPost = (title,body, id) => dispatch => {
    console.log(title)
    console.log(body)
    console.log(id)
    api.post('/posts',{
        title: title,
        body: body,
        userId: id
      }).then(function (response) {
        console.log(response);
        dispatch({type: CREATE_POST, payload:response.data})
      });
}

//DELETE
export const deletePost = (post) => dispatch => {
    api.delete('/posts/' + post.id).then(function (response) {
        console.log(response);
      });;

    dispatch({type: DELETE_POST, payload:post})
}

//NORMAL FUNCTION
export const selectedMember = (selectedMember) => dispatch => {
    dispatch({type: SELECTED_MEMBER, payload:selectedMember})
}

export const selectedPost = (selectedPost) => dispatch => {
    dispatch({type: SELECTED_POST, payload:selectedPost})
}