{
  /**
    * Union Types: OR
      발생할 수 있는 타입들 중 하나만 할당할 수 있을 때 쓰면 좋다.
      타입스크립트에서 활용도가 높은 타입
    */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {}

  // left, right, up, down중에서만 할당할 수 있다.
  move('up');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 32;

  // function: login -> success, fail
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
        body: 'logged in!',
      },
      reason: 'error!',
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉${state.response.body}`);
    } else {
      console.log(`🎉${state.reason}`);
    }
  }
}
