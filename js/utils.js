// ===== 新增 OCR 功能開始 =====

function cleanNumber(text)// ===== 新增 OCR 功能開始 =====

function setInputValue(id, value) {

    const input = document.getElementById(id);

    if (!input) {

        console.warn("找不到欄位：", id);

        return;

    }

    input.value = value;

    input.dispatchEvent(
        new Event("input", {
            bubbles: true
        })
    );

    input.dispatchEvent(
        new Event("change", {
            bubbles: true
        })
    );

}

// ===== 新增 OCR 功能結束 ====={

    return Number(

        String(text)

        .replace(/,/g,'')

        .replace(/[^\d.]/g,'')

    ) || 0;

}

// ===== 新增 OCR 功能結束 =====
