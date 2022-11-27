{
  // Discriminated Union: Union타입에 차별화되는 동일한 이름의 타입을 둠으로써 간편하게 구분할 수 있는 것을 말한다.
  // function: login -> 성공, 실패
  type SuccessState = {
    // Discriminated Union으로 지정
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
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
    // discriminated union인 result로 구분
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }

  const success: SuccessState = {
    result: 'success',
    response: {
      body: '로그인 성공!',
    },
  };
  const fail: FailState = {
    result: 'fail',
    reason: '로그인 실패!',
  };
  printLoginState(success);
}
