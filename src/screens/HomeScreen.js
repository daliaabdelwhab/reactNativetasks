import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { deleteTodo } from '../redux/actions';

const HomeScreen = ({ todos, navigation, deleteTodo }) => {
    const handleDeleteTodo = (id) => {
        deleteTodo(id);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            {todos.map((todo) => (
                <TouchableOpacity
                    key={todo.id}
                    style={styles.todoItem}
                    onPress={() => navigation.navigate('TodoDetails', { todo })}
                >
                    <Text style={styles.todoText}>{todo.text}</Text>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => handleDeleteTodo(todo.id)}
                    >
                        <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            ))}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddTodo')}
            >
                <Text style={styles.buttonText}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

const mapDispatchToProps = {
    deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    todoItem: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
    },
    todoText: {
        fontSize: 16,
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    addButton: {
        backgroundColor: 'blue',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});