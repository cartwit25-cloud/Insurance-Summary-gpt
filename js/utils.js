// ===== 新增 OCR 功能開始 =====

function cleanNumber(text){

    return Number(

        String(text)

        .replace(/,/g,'')

        .replace(/[^\d.]/g,'')

    ) || 0;

}

// ===== 新增 OCR 功能結束 =====
