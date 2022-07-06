const quotes = [
    {
        quote : "이 세상에 양자역학을 이해한 사람은 한 사람도 없다.",
        author : "리처드 파인만",
    },
    {
        quote : "신은 주사위를 던지지 않는다.",
        author : "알버트 아인슈타인",
    },
    {
        quote : "신에게 이래라 저래라 하지마라.",
        author : "닐스 보어",
    },
    {
        quote : "참을 인 세번이면 호구다.",
        author : "박명수",
    },
    {
        quote : "내 언어의 한계는 내 세계의 한계를 의미한다.",
        author : "비트겐슈타인",
    },
    {
        quote : "수학적으로 당신은 사물을 이해하는 것이 아니다. 단지 익숙해지는 것이다.",
        author : "존 폰 노이만",
    },
    {
        quote : "기초연구란 내가 하고있는것이 무엇인지 모르는 상태에서 하고있는 그 일이다.",
        author : "베르너 폰 브라운",
    },
    {
        quote : "지성은 변화에 적응하는 능력이다.",
        author : "스티븐 호킹",
    },
    {
        quote : "이겨도 병신, 져도 병신이라면 이긴 병신이 되라",
        author : "디씨인사이드",
    },
    {
        quote : "우린 안될 거야 아마",
        author : "타바코 쥬스의 보컬 권기욱",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;