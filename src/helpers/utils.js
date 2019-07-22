// min (포함) 과 max (포함) 사이의 임의 정수를 반환
// Math.round() 를 사용하면 고르지 않은 분포를 얻게된다!
const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { getRandomIntInclusive };
