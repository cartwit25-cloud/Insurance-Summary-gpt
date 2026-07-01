// ===== 新增 OCR 功能開始 =====

const ocrFileInput = document.getElementById("ocrFile");

if (ocrFileInput) {

    ocrFileInput.addEventListener("change", startOCR);

}

async function startOCR(e) {

    const file = e.target.files[0];

    if (!file) return;

    alert("OCR 初始化完成，下一階段開始辨識圖片。");

}

// ===== 新增 OCR 功能結束 =====
