import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoDetailsScreen = ({ navigation }) => {
    const todo = navigation.getParam('todo');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo Details</Text>
            <Text style={styles.todoText}>{todo.text}</Text>
        </View>
    );
};

export default TodoDetailsScreen;

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
    todoText: {
        fontSize: 16,
    },
});