// ===== 新增 OCR 功能開始 =====

const OCR_MAPPING = {

    // ===============================
    // 壽險
    // ===============================

    "終身壽險": { target: "life", mode: "replace" },
    "定期壽險": { target: "life", mode: "replace" },
    "壽險": { target: "life", mode: "replace" },

    // ===============================
    // 重大疾病 / 重大傷病
    // ===============================

    "重大傷病": { target: "critical", mode: "replace" },
    "重大疾病": { target: "critical", mode: "replace" },
    "重大疾病險": { target: "critical", mode: "replace" },
    "特定傷病": { target: "critical", mode: "replace" },

    // ===============================
    // 癌症
    // ===============================

    "癌症一次金": { target: "cancer", mode: "sum" },
    "初次罹
