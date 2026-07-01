// ===== 新增 OCR 功能開始 =====

function parseOCR(text){

    const result = {};

    const lines = text
        .split(/\r?\n/)
        .map(v => v.trim())
        .filter(v => v.length);

    for(let i = 0; i < lines.length; i++){

        const line = lines[i];

        // ---------- Case 1 ----------
        // 同一行：終身壽險 100萬

        let match = line.match(/^(.+?)\s+([\d,.]+(?:\.\d+)?\s*[萬億元千]*)/);

        if(match){

            const title = normalizeTitle(match[1]);

            const value = parseNumber(match[2]);

            if(value !== null){

                result[title] = value;

                continue;

            }

        }

        // ---------- Case 2 ----------
        // 冒號：終身壽險：100萬

        match = line.match(/^(.+?)[:：]\s*([\d,.]+(?:\.\d+)?\s*[萬億元千]*)/);

        if(match){

            const title = normalizeTitle(match[1]);

            const value = parseNumber(match[2]);

            if(value !== null){

                result[title] = value;

                continue;

            }

        }

        // ---------- Case 3 ----------
        // 點線：終身壽險........100萬

        match = line.match(/^(.+?)[.．·•…。]+([\d,.]+(?:\.\d+)?\s*[萬億元千]*)/);

        if(match){

            const title = normalizeTitle(match[1]);

            const value = parseNumber(match[2]);

            if(value !== null){

                result[title] = value;

                continue;

            }

        }

        // ---------- Case 4 ----------
        // 標題 / 下一行數字

        const next = lines[i + 1] || "";

        const value = parseNumber(next);

        if(value !== null){

            result[normalizeTitle(line)] = value;

            i++;

        }

    }

    return result;

}

// ===== 新增 OCR 功能結束 =====
