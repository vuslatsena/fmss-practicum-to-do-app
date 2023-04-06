import React from 'react';

function Filter({ 
  todos, 
  setTodos, 
  setFilteredTodos, 
  filterType, 
  setFilterType 
}) {
  // Handle filter changes.
  function handleFilterChange(filter) {
    setFilterType(filter);

    if (filter === 'all') {
      setFilteredTodos(todos);
    } else {
      const filtered = todos.filter(todo => 
        (filter === 'active' && !todo.completed) ||
        (filter === 'completed' && todo.completed)
      );
      setFilteredTodos(filtered);
    }
  }

  // Handle clearing completed todos.
  function handleClearCompleted() {
    setTodos(todos.filter(todo => !todo.completed));
  }

  // Define filter items.
  const filterItems = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.filter((item) => !item.completed).length}</strong> items left
      </span>
      <ul className="filters">
        {filterItems.map(item => (
          <li key={item.value}>
            <a
              href="#/"
              className={filterType === item.value ? 'selected' : ''}
              onClick={() => handleFilterChange(item.value)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button className="clear-completed" onClick={handleClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Filter;
