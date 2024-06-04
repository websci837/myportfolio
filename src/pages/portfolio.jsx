import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaTrash, FaCheckCircle, FaPlus } from "react-icons/fa";

const theme = {
  colors: {
    primary: "#6200ea",
    secondary: "#03dac6",
    background: "#f5f5f5",
    text: "#000",
    completed: "#28a745",
  },
  fontSizes: {
    small: "0.8em",
    medium: "1.2em",
    large: "1.5em",
  },
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const Header = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  width: 60%;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TodoText = styled.span`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) =>
    props.completed ? props.theme.colors.completed : props.theme.colors.text};
`;

const FilterContainer = styled.div`
  margin-top: 20px;
`;

const FilterButton = styled.button`
  background-color: ${(props) =>
    props.active ? props.theme.colors.secondary : props.theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  cursor: pointer;
  border-radius: 5px;
  margin: 0 5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("All");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>Todo App</Header>
        <InputContainer>
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task"
          />
          <Button onClick={handleAddTodo}>
            <FaPlus />
          </Button>
        </InputContainer>
        <TodoList>
          {filteredTodos.map((todo, index) => (
            <TodoItem key={index}>
              <TodoText completed={todo.completed}>{todo.text}</TodoText>
              <div>
                <FaCheckCircle
                  onClick={() => handleToggleTodo(index)}
                  style={{
                    color: todo.completed
                      ? theme.colors.completed
                      : theme.colors.primary,
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                />
                <FaTrash
                  onClick={() => handleDeleteTodo(index)}
                  style={{ color: theme.colors.primary, cursor: "pointer" }}
                />
              </div>
            </TodoItem>
          ))}
        </TodoList>
        <FilterContainer>
          <FilterButton
            active={filter === "All"}
            onClick={() => setFilter("All")}
          >
            All
          </FilterButton>
          <FilterButton
            active={filter === "Active"}
            onClick={() => setFilter("Active")}
          >
            Active
          </FilterButton>
          <FilterButton
            active={filter === "Completed"}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </FilterButton>
        </FilterContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
