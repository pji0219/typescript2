class NetworkClient {
  tryConnect(): void {
    throw new Error('no network!');
  }
}

class UserService {
  // private client: NetworkClient;

  // constructor(client: NetworkClient) {
  //   this.client = client;
  // }

  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
    // login...
  }
}

// 보편적으로 어플리케이션 레벨에서 처리하는 것이 좋다.
// 어디서 에러를 처리 하는 것이 의미가 있을까 생각해보고 처리할 곳을 선정
// 이 예제에서는 애플리케이션 레벨에서 하는 것이 에러가 생겼을 때 사용자에게 다이얼 로그 같은 것을 보여 줄 수 있기에 좋음
class App {
  constructor(private userService: UserService) {}

  run() {
    try {
      this.userService.login();
    } catch (error) {
      // show dialog to user
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
