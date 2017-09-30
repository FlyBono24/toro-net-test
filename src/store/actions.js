import * as types from './mutation-types'
import axios from 'axios'

export const getUser = ({commit}) => {
  axios.get('/isauth')
  .then(function (response) {
    console.log('got user data: ', response.data);
    commit(types.GET_USER, response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}

export const getCount = ({commit}) => {
  fetch(`/api/count`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => commit(types.GET_COUNT, json))
}

export const incCount = ({commit}, count_payload) => {
  fetch(`/api/count`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ count: ++count_payload })
  })
  .then(response => response.json())
  .then(json => commit(types.INC_COUNT, json))
}

export const logout = ({commit}) => {
  commit(types.SIGN_OUT)
}

export const addPost = ({commit}, posts_payload) => {
  fetch(`/api/posts`), {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      body: body 
    })
    .then(response => response.json())
    .then(json => commit(types.ADD_POST, json))
  }
}

export const getPosts = ({commit}) => {
  axios.get('/api/posts')
  .then(function (response) {
    console.log('Retrieved posts: ', response.data);
    commit(types.GET_POSTS, response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}