// 문자열 타입
// '', "", `` 등으로 문자열을 만들 수 있다.
let string = '안녕하세요';
console.log(string);

string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 방법 (escape sequence)
string = '"안녕!"';
console.log(string);

string = '안녕!\n우석아!\t\t 내 이름은\\ \u09AC'; // \n 개행, \t 탭, \\ 역슬래쉬, \유니코드
console.log(string);

// 템플릿 리터럴 (Template Literal)
let name = '우석';
let greetings = "'안녕!, " + name + "\n즐거운 하루 보내요!'";
console.log(greetings);

// 변수(= 표현식)를 내포해서 사용할 수 있다.
greetings = `안녕!, ${name}
즐거운 하루 보내요~!`;
console.log(greetings);
