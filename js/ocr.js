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

                    if (m.progress !== undefined) {

                        const percent = Math.round(m.progress * 100);

                        showOCRLoading(
                            `${m.status} ${percent}%`
                        );

                    }

                }
            }
        );

        hideOCRLoading();

        console.clear();

        console.log("========== OCR RESULT ==========");

        console.log(result.data.text);

        console.log("===============================");

        alert("OCR完成，請打開F12 Console查看辨識文字");

    }

    catch (err) {

        console.error(err);

        hideOCRLoading();

        alert("OCR辨識失敗");

    }

}

function showOCRLoading(text){

    let box=document.getElementById("ocrLoading");

    if(!box){

        box=document.createElement("div");

        box.id="ocrLoading";

        box.style.position="fixed";
        box.style.left="50%";
        box.style.top="50%";
        box.style.transform="translate(-50%,-50%)";

        box.style.background="#ffffff";

        box.style.padding="18px 24px";

        box.style.borderRadius="12px";

        box.style.boxShadow="0 10px 30px rgba(0,0,0,.18)";

        box.style.zIndex="999999";

        box.style.fontSize="14px";

        box.style.fontWeight="600";

        document.body.appendChild(box);

    }

    box.innerHTML=text;

}

function hideOCRLoading(){

    const box=document.getElementById("ocrLoading");

    if(box){

        box.remove();

    }

}

// ===== 新增 OCR 功能結束 =====
