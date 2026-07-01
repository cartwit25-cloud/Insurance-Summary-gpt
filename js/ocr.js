// ===== 新增 OCR 功能開始 =====

const ocrFileInput = document.getElementById("ocrFile");

if (ocrFileInput) {
    ocrFileInput.addEventListener("change", startOCR);
}

async function startOCR(e) {

    const file = e.target.files[0];

    if (!file) return;

    showOCRLoading("圖片讀取中...");

    try {

        const imageURL = URL.createObjectURL(file);

        const result = await Tesseract.recognize(
            imageURL,
            "chi_tra+eng",
            {
                logger: (m) => {

                    if (m.status) {

                        const percent = Math.round((m.progress || 0) * 100);

                        showOCRLoading(

                            m.status + " " + percent + "%"

                        );

                    }

                }
           
