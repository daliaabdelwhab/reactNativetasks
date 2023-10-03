import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { addTodo } from '../redux/actions';

const AddTodoScreen = ({ addTodo, navigation }) => {
    const [todoText, setTodoText] = useState('');

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            addTodo(todoText);
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter a Title"
                value={todoTitle}
                onChangeText={setTodoText}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter a todo"
                value={todoText}
                onChangeText={setTodoText}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
                <Text style={styles.buttonText}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    );
};

const mapDispatchToProps = {
    addTodo,
};

export default connect(null, mapDispatchToProps)(AddTodoScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'blue',
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    addButton: {
        backgroundColor: 'blue',
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});