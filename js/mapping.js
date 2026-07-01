// ===== 新增 OCR 功能開始 =====

// ===== 新增 OCR 功能開始 =====

const OCR_MAPPING = {

    // ===============================
    // 壽險
    // ===============================

    "終身壽險": {
    id:"life-amount"
},

    "定期壽險": {
    id:"life-amount"
},

    "壽險": {
    id:"life-amount"
},

    // ===============================
    // 重大傷病
    // ===============================

    "重大傷病": {
        id: "critical-amount",
        mode: "replace"
    },

    "重大疾病": {
        id: "disease-amount",
        mode: "replace"
    },

    "重大疾病險": {
        id: "disease-amount",
        mode: "replace"
    },

    "特定傷病": {
        id: "disease-amount",
        mode: "replace"
    },

    // ===============================
    // 日額
    // ===============================

    "住院日額": {
        id: "daily-hosp",
        mode: "replace"
    },

    "住院看護": {
        id: "daily-nurse",
        mode: "replace"
    },

    "看護": {
        id: "daily-nurse",
        mode: "replace"
    },

    "出院療養": {
        id: "daily-post",
        mode: "replace"
    },

    // ===============================
    // 定額手術
    // ===============================

    "定額手術(最低)": {
        id: "daily-op-min",
        mode: "replace"
    },

    "定額手術(最高)": {
        id: "daily-op-max",
        mode: "replace"
    },

    // ===== 後面先保留，下一 Part 繼續 =====

};

// ===== 新增 OCR 功能結束 =====ㄒ

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
