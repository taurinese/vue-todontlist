export const token = (state, token) => {
    state.user.token = token;
}

export const data = (state, data) => {
    state.user.data = data;
}

export const tasks = (state, tasks) => {
    state.tasks = tasks;
}

export const addTask = (state, task) => {
    state.tasks.unshift(task);
}

export const updateTask = (state, data) => {
    state.tasks.forEach( function(task, index) {
        if(task.id == data.id){
            this[index] = data;
        }
    }, state.tasks);
}

export const deleteTask = (state, id) => {
    state.tasks.forEach( function(task, index) {
        if(task.id == id){
            this.splice(index, 1)
        }
    }, state.tasks);
}

export const logout = (state) => {
    state.user.data = {};
    state.user.token = null;
    state.tasks = [];
}