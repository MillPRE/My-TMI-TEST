/*
    { name : 0, value : 0, key : 0},
    { name : "yes", value : 0, key : 1}
 */
const qnaList = [
    {
        q : "1. 먼지의 혈액형은?",
        a : [ 
         { answer : 'a. A', type : 0},
         { answer : 'b. B', type : 0},
         { answer : 'c. AB', type : 1},
         { answer : 'd. O', type : 0}
        ]
    },

    {
        q : "2. 먼지의 별명이 아닌것은?",
        a : [
            { answer : 'a. 메기', type : 0},
            { answer : 'b. 망둥어', type : 0 },
            { answer : 'c. 염지', type : 1},
            { answer : 'd. 똥지', type : 0},
            { answer : 'e. 울보', type : 0}
        ]
    },

    {
        q : "3. 먼지가 제일 좋아하는 야채는?",
        a : [
            { answer : 'a. 양파', type : 0},
            { answer : 'b. 마늘', type : 0},
            { answer : 'c. 오이', type :1},
            { answer : 'd. 콩나물', type :0}
        ]
    },

    {
        q : "4. 먼지가 키웠던 고양이의 이름은?",
        a : [
            { answer : 'a. 냥이', type : 0},
            { answer : 'b. 양이', type : 0},
            { answer : 'c. 츠유', type : 1},
            { answer : 'd. 츄츄', type : 0}
        ]
    },

    {
        q : "5. 먼지 동생 이름은?",
        a : [
            { answer : 'a. 장연호', type : 0},
            { answer : 'b. 장민호', type : 1},
            { answer : 'c. 장상호', type : 0},
            { answer : 'd. 장준혁', type :0}
        ]
    },

    {
        q : "6. 먼지가 제일 좋아하는 색은?",
        a : [
            { answer : 'a. 노란색', type :0},
            { answer : 'b. 하늘색', type : 1},
            { answer : 'c. 보라색',type : 0},
            { answer : 'd. 분홍색', type :0}
        ]
    },

    {
        q : "7. 먼지가 어릴적 키우고 싶던 동물 1순위는?",
        a : [
            { answer : 'a. 호랑이', type : 1},
            { answer : 'b. 고양이', type : 0},
            { answer : 'c. 사자', type : 0},
            { answer : 'd. 타조', type :0}
        ]
    },

    {
        q : "8. 먼지가 제일 좋아하는 계절은?",
        a : [
            { answer : 'a. 봄', type : 0},
            { answer : 'b. 여름', type: 0},
            { answer : 'c. 가을', type : 1},
            { answer : 'd. 겨울', type : 0}
        ]
    },

    {
        q: "9. 먼지가 고딩 때 학교 축제에서 부른 노래는?",
        a : [
            { answer : 'a. 사랑하기 싫어 - 영지', type : 0},
            { answer : 'b. 바람이 불었으면 좋겠어 - 길구봉구', type : 1},
            { answer : 'c. 행복하지말아요 - MC THE MAX', type : 0},
            { answer : 'd. 가을타나봐 - 바이브', type : 0}
        ]
    },

    {
        q: "10. 먼지가 안해본 머리 색은?",
        a : [
            { answer : 'a. 초록색', type: 0},
            { answer : 'b. 주황색', type : 0},
            { answer : 'c. 블루블랙', type : 1},
            { answer : 'd. 베이지', type : 0}
        ]
    }
]

const infoList = [
    {
        name : '십점만점 👍, <먼잘알> ',
        desc : '10개 다 맞춘 당신은 먼잘알. 칭찬해.'
    },

    {
        name : '아쉽네요, 조금만 더 노력하세요. 🤔, <아쉽구먼>',
        desc : '8 ~ 9 맞추신 당신, 조금 아쉽군요. 더 노력하세요.'
    },

    {
        name : '그래도 반타작 이상이군요. 🙄, <나쁘지않구먼>',
        desc : '6 ~ 7 개 맞추신 당신, 그래도 반 이상이시군요. 만점 받을 수 있게 노력하세요.'
    },

    {
        name : '에엥 노오력을 많이 하셔야 겠어요. 😥, <속상하구먼>',
        desc : '4 ~ 5개 맞추신 당신. 노오력이 필요해요. T^T'
    },

    {
        name : '혹시.. 먼지랑 어사인가요..? 🤨, <어사구먼>',
        desc : "2 ~ 3개 맞추신 당신... 혹시 먼지랑 어사가 아닌지.. =ㅅ="
    },

    {
        name : '이건 좀... 마음이 아프네요.. 😭, <상처받았구먼>',
        desc : '0 ~ 1개..는 좀 심했다.'
    }
]