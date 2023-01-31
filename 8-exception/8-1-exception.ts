// Java 등: Exception, 자바나 따른 프로그래밍 언어는 예외를 처리하기 위한 클래스로 이것이 있다.
// JavaScript: Error, 자바스크립트나 타입스크립트는 예외를 처리하기 위한 클래스로 Error 클래스가 있다.

/*
  exception(예외): 예상하지 못한 이슈(에러)가 나는 것, 
  에러를 어플리케이션 내에서 최대한 해결하려고 노력하다가 정 안되면 사용자에게 문제가 발생했다고 
  알려주는 역할을 해야한다.

  에러는 예상할 수 있는 것
  예외는 예상하지 못한 에러
*/

// Error(Exception) Handling:
// try(에러가 날수도 안날수도 있는 것을 실행) -> catch(에러가 나면 잡고) -> finally(에러가 나던 안나던 마무리 단계로 finally를 이용)

function readFile(fileName: string): string {
  if (fileName === 'not exist!💩') {
    throw new Error(`file not exist! ${fileName}`);
  }

  return 'file contents📄';
}

function closeFile(fileName: string) {
  //
}

const fileName = 'not exist!💩';

// try catch문으로 에러를 잡았기 때문에 앱이 죽지 않고 catch문 아래 부분도 실행 된다.
// finally는 에러가 나던 안나던 실행되어야 하는게 있다면 써주면 좋다.
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log('catched!!');
} finally {
  closeFile(fileName);
  console.log(`closed!!`);
}

console.log('!!!');

function run() {
  const fileName = 'not exist!💩';

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log('catched!!');
    return; // 리턴으로 값을 반환해도 아래에 finally가 있기 때문에 아래 부분이 실행된다.
  } finally {
    closeFile(fileName);
    console.log(`closed!!`);
  }
}

run();
