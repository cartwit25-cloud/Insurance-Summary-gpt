// ===== 新增 OCR 功能開始 =====

function parseOCR(text){

    const result={};

    const lines=text
        .split(/\r?\n/)
        .map(v=>v.trim())
        .filter(v=>v.length>0);

    for(let i=0;i<lines.length;i++){

        const title=lines[i];

        const next=lines[i+1]||"";

        const value=parseNumber(next);

        if(value!==null){

            result[title]=value;

            i++;

        }

    }

    return result;

}

function parseNumber(str){

    if(!str)return null;

    let s=str.replace(/,/g,"");

    const num=parseFloat(s);

    if(isNaN(num))return null;

    if(s.includes("億")){

        return num*10000;

    }

    if(s.includes("萬")){

        return num;

    }

    if(s.includes("千")){

        return num*1000;

    }

    if(s.includes("元")){

        return num;

    }

    return num;

}

// ===== 新增 OCR 功能結束 =====
