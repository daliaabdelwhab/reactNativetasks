export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: Math.random().toString(),
            text,
        },
    };
};

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id,
    };
};