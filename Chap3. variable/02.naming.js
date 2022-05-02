// 한줄 주석

/**
 * 여러줄 주석
 */

/**
 * 변수 규칙
 * 라틴문자(0-9, a-z, A-Z, _, $)
 * 대소문자를 구분함
 * 추천: camelCase(like This) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 특수문자 ❌ (_, $ 두가지는 예외)
 * 이모지 ❌
 * 여러 개의 변수를 1, 2, 3 숫자로 구분 ❌ ➔ 최대한 의미있게, 구체적인 이름으로 작성!
 */

let apple;
let redApple;

// 나쁜 예제 💩
let num = 20;
let audio1;
let audio2;

// 좋은 예제 ✨ : 이름에 의미를 담아야 한다.
let myAge = 20;
let backgroundAudio;
let windAudio;

// 꿀팁! 🍯
// 대상을 먼저 표시하고, 구체적인 내용을 뒤로 빼면 검색할 때 더 좋다.
// audio만 쳐도 관련된 애들이 뒤로 나오기 때문이다.
let audioBackground;
let audioWind;
