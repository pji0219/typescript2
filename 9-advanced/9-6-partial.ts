{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  // Partial = optional
  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: '타입스크립트 배우기',
    description: '열심히 배우자',
    label: '공부',
    priority: 'high',
  };

  const fieldsToUpdate: Partial<ToDo> = { priority: 'low' };

  const updated = updateTodo(todo, fieldsToUpdate);

  console.log(updated);
}
