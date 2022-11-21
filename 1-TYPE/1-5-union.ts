{
  /**
    Union Type: OR로 이해하면 된다.
  */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('up');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> 성공, 실패
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: '로그인!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // 성공 -> 🎉 body
  // 실패 -> 😭 reason
  // 반환 값이 void면 생략해도 됨
  function printLoginState(state: LoginState) {
    // state안에 response라는 키가 있다면
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }

  const success: SuccessState = {
    response: {
      body: '로그인 성공!',
    },
  };
  const fail: FailState = {
    reason: '로그인 실패!',
  };
  printLoginState(success);
}
