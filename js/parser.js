// ===== 新增 OCR 功能開始 =====

function normalizeTitle(text) {

    return String(text)
        .replace(/[：:]/g, "")
        .replace(/[()（）]/g, "")
        .replace(/\s+/g, " ")
        .trim();

}

function parseOCR(text) {

    const result = {};

    const lines = text
        .split(/\r?\n/)
        .map(v => v.trim())
        .filter(v => v.length);

    for (let i = 0; i < lines.length; i++) {

        const line = lines[i];

        // Case 1：同一行
        let match = line.match(/^(.+?)\s+([\d,.]+(?:\.\d+)?\s*[億萬千元]*)/);

        if (match) {

            const title = normalizeTitle(match[1]);
            const value = parseNumber(match[2]);

            if (value !== null) {
                result[title] = value;
                continue;
            }

        }

        // Case 2：冒號
        match = line.match(/^(.+?)[:：]\s*([\d,.]+(?:\.\d+)?\s*[億萬千元]*)/);

        if (match) {

            const title = normalizeTitle(match[1]);
            const value = parseNumber(match[2]);

            if (value !== null) {
                result[title] = value;
                continue;
            }

        }

        // Case 3：點線
        match = line.match(/^(.+?)[.．·•…。]+([\d,.]+(?:\.\d+)?\s*[億萬千元]*)/);

        if (match) {

            const title = normalizeTitle(match[1]);
            const value = parseNumber(match[2]);

            if (value !== null) {
                result[title] = value;
                continue;
            }

        }

        // Case 4：上下兩行
        const next = lines[i + 1] || "";

        const value = parseNumber(next);

        if (value !== null) {

            result[normalizeTitle(line)] = value;
            i++;

        }

    }

    return result;

}

function parseNumber(str) {

    if (!str) return null;

    const s = String(str)
        .replace(/,/g, "")
        .replace(/\s/g, "");

    const num = parseFloat(s);

    if (isNaN(num)) return null;

    if (s.includes("億")) return num * 10000;

    if (s.includes("萬")) return num;

    if (s.includes("千")) return num * 1000;

    return num;

}

// ===== 新增 OCR 功能結束 =====
