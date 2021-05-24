import axios from 'axios'
import router from '../router'

export const login = ({commit}, form) => {
    axios({
        method: 'post',
        url: 'https://laravel-todontlist.herokuapp.com/api/auth/login',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          email: form.email,
          password: form.password
        },
        mode: 'cors'
      })
      .then((response)=> {
        commit('token', response.data.token)
        const user = {
          name: response.data.name,
          email: response.data.email,
          created_at: response.data.created_at
        }
        commit('data', user)
        router.push({name: 'Home'})
      })
      .catch(error => {
        console.log(error)
    });
}

export const register = ({commit}, form) => {
    axios({
        method: 'post',
        url: 'https://laravel-todontlist.herokuapp.com/api/auth/register',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          email: form.email,
          password: form.password,
          name: form.name
        }
      })
      .then((response)=> {
        commit('token', response.data.token)
        const user = {
          name: response.data.name,
          email: response.data.email,
          created_at: response.data.created_at
        }
        commit('data', user)
        router.push({name: 'Home'})
      })
      .catch(error => {
        console.log(error)
    });
}

/* export const logout = ({}) => {

} */

export  const tasks = ({getters, commit}) => {
    axios({
        method: 'get',
        url: 'https://laravel-todontlist.herokuapp.com/api/tasks',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getters.token}`
        },
      })
      .then((response)=> {
       commit('tasks', response.data.tasks)
      })
      .catch(error => {
        console.log(error)
    });
}

/* export const task = ({getters, commit}, id) => {
    axios({
        method: 'get',
        url: `https://laravel-todontlist.herokuapp.com/api/tasks/${id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getters.token}`
        },
      })
      .then((response)=> {
       commit('task', response.data.task)
      })
      .catch(error => {
        console.log(error)
    });
} */

export const deleteTask = ({getters, commit}, id) => {
    axios({
        method: 'delete',
        url: `https://laravel-todontlist.herokuapp.com/api/tasks/${id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getters.token}`
        },
      })
      .then(()=> {
       commit('deleteTask', id)
      })
      .catch(error => {
        console.log(error)
    });
}

export const addTask = ({getters, commit}, form) => {
    axios({
        method: 'post',
        url: 'https://laravel-todontlist.herokuapp.com/api/tasks',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getters.token}`
        },
        data: {
            done: form.done,
            body: form.body
          }
      })
      .then((response)=> {
        commit('addTask', response.data)
      })
      .catch(error => {
        console.log(error)
    });
}

export const updateTask = ({getters, commit}, data) => {
    axios({
        method: 'put',
        url: `https://laravel-todontlist.herokuapp.com/api/tasks/${data.id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getters.token}`
        },
        data: {
            done: data.done,
            content: data.content
          }
      })
      .then((response)=> {
        commit('updateTask', response.data[0])
      })
      .catch(error => {
        console.log(error)
    });
}

export const logout = ({getters, commit}) => {
    axios({
        method: 'post',
        url: 'https://laravel-todontlist.herokuapp.com/api/auth/logout',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getters.token}`
        }
      })
      .then(()=> {
        commit('logout')
      })
      .catch(error => {
        console.log(error)
    });
    router.push({name: 'Home'})
}