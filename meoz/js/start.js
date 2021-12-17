/* const : 상수
* qeurtSelector : 문서에서 css 선택자에 대응하는 것을 선택하는 기능
*/
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 10;
const select = [0,0];
/*
 * select 배열의 0 번째는 사용자의 답변 type "no"의 갯수
 * select 배열의 1 번째는 사용자의 답변 type "yes"의 갯수
 */

function calResult(){
    var result = [0,0];
    /* 
     * result[0] : type
     * result[1] : value
     * indexOf() : index 값을 반환
     * Math.max() : 소괄호 안에 주어진 것의 최대값이 반환됨. 
     * ... : 전개구문, 절과 선택한 배열을 펼쳐주는 것.
     */

    result[0] = select.indexOf(Math.max(...select));
    result[1] = Math.max(...select);

    return result;

}

function setResult(){
    let point = calResult();

    /*
    * [0] : 10 
    * [1] : 8 ~ 9
    * [2] : 6 ~ 7
    * [3] : 4 ~ 5
    * [4] : 2 ~3
    * [5] : 0 ~ 1
    */    
    let value = null;
    // value : type == yes 의 value
    let nIdx = null;
    // nIdx : name Index
    let uIdx = null;

    /* type "no"가 많은지 "yes"가 많은지 확인하기 */
    if(point[0] == 0 ){
        // type == no
        value = endPoint - point[1];
    }
    else{
        // type == yes
        value = point[1];
    }

    console.log("vlaue type :",typeof(value));

    switch(value){
        case 10 :
            uIdx = "10";
            nIdx = 0;
            break;
        case 9 :
        case 8 :
            uIdx = "98";
            nIdx = 1;
            break;
        case 7 :
        case 6 :
            uIdx = "76";
            nIdx = 2;
            break;
        case 5 :
        case 4 :
            uIdx = "54";
            nIdx = 3;
            console.log("case 5 || 4");
            break;
        case 3 :
        case 2 :
            uIdx = "32";
            nIdx = 4;
            console.log("case 3 || 2");
            break;
        case 0 :
        case 1 :
            uIdx = "01";
            nIdx = 5;
            break;
        default :
            console.log("error");
            break;
    }
    console.log("nIdx",nIdx);
    console.log("value",value);
    console.log("uIdx",uIdx);


    const resultName = document.querySelector(".resultname");

    resultName.innerHTML = infoList[nIdx].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector("#resultImg");

    var imgURL = "img/"+uIdx+".png";

    resultImg.src = imgURL;
    resultImg.alt = value;
    resultImg.classList.add("img-fluid")


    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector(".resultdesc");
    resultDesc.innerHTML = infoList[nIdx].desc;

    /* nickname */
    console.log("rank");
    const rankContainer = document.getElementById('rankContainer');
    var rInput = document.createElement('input');
    rInput.id = "NicknameBox";
    rInput.required = true;
    rInput.placeholder ="nickname";
    rankContainer.appendChild(rInput);

}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";

    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            qna.style.display = "none";
            result.style.display = "block";
        },450)
    },450);

    setResult();

}

function addAnswer(answerText, qIdx, idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add("answerList");
    answer.classList.add("my-3");
    answer.classList.add("py-3");
    answer.classList.add("mx-auto");
    answer.classList.add("fadeIn");

    a.appendChild(answer);
    answer.innerHTML = answerText;
    /* answer content들을 보여줌 end */

    /* answer button click  */
    answer.addEventListener("click", function(){
        var children = document.querySelectorAll('.answerList');
        for( let i = 0; i < children.length ; i ++)
        {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(()=>{
            /* 사용자가 몇 번째 배열에서 몇 번째 버튼을 클릭하였는지를 select 배열에 저장한다.  */
            // qIdx : 현재 질문의 번호, 1~10
            
            if( qnaList[qIdx].a[idx].type == 0){
                // type == "no"
                select[0]++;
            }
            else{
                // type == "yes"
                select[1]++;
            }
            

            for( let i = 0; i < children.length ; i ++)
            {
                children[i].style.display ='none';
            }
            goNext(++qIdx);
        }, 450)
    }, false);
}

function goNext(qIdx){
    if( qIdx === endPoint){
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    for(let i in qnaList[qIdx].a){
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }

    /* 현재 진행상황을 상태바로 보여줌. */
    var statusBar = document.querySelector(".statusBar");
    statusBar.style.width = (100/endPoint) * (qIdx+1) +"%";

    var statusInfo = document.querySelector(".statusInfo");
    statusInfo.innerHTML = (qIdx+1)+"/"+endPoint

}

function begin(){

    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";

    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            main.style.display = "none";
            qna.style.display = "block";
        },450)
        let qIdx = 0;
        goNext(qIdx);
    },450);

}