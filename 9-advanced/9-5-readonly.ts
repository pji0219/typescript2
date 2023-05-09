{
  type ToDo = {
    title: string;
    description: string;
  };

  // Readonly는 타입스크립트에서 기본적으로 만들어 놓은 유틸리티 타입
  function display(todo: Readonly<ToDo>) {
    // todo.title = 'sdf'
  }
}
