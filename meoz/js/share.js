const url = 'https://meonzs-tmi.netlify.app/';

function setShare(){
    var resultImg = document.querySelector("#resultImg");
    var resultAlt = typeof resultImg.firstElementChild.alt === "number" ? resultImg.firstElementChild.alt : Number(resultImg.firstElementChild.alt);

    const shareTitle = "연지의 TMI 결과";
    

    let infoIdx = null;

    switch(resultAlt){
        case 10 :
            uIdx = "10";
            infoIdx = 0;
            break;
        case 9 :
        case 8 :
            uIdx = "98";
            infoIdx = 1;
            break;
        case 7 :
        case 6 :
            uIdx = "76";
            infoIdx = 2;
            break;
        case 3 :
        case 4  :
            uIdx = "54";
            infoIdx = 3;
            break;
        case 3 :
        case 2 :
            uIdx = "32";
            infoIdx = 4;
            break;
        case 0 :
        case 1 :
            uIdx = "01";
            infoIdx = 5;
            break;
        default :
            console.log("error");
            break;
    }

    const shareDes = infoList[infoIdx].name;
    const shareImg = url+ 'img/' + uIdx +'.png';
    const shareURL = url + 'page/result-'+ uIdx +'.html';

   Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl:shareImg,
        link: {
            mobileWebUrl: shareURL,
            androidExecutionParams: shareURL,
        },
        },
       
        buttons: [
        {
            title: '결과확인하기',
            link: {
            mobileWebUrl: shareURL,
            webUrl : shareURL
            },
        },
        ]
    });
}