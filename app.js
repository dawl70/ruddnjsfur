/**
 * 庚元曆 (경원력) Calendar Application - Almanac Grid Layout
 */

const HEXAGRAMS = [
    { num: 1, symbol: '䷀', hanja: '乾', name: '건', fullName: '중천건' },
    { num: 2, symbol: '䷁', hanja: '坤', name: '곤', fullName: '중지곤' },
    { num: 3, symbol: '䷂', hanja: '屯', name: '둔', fullName: '수뢰둔' },
    { num: 4, symbol: '䷃', hanja: '蒙', name: '몽', fullName: '산수몽' },
    { num: 5, symbol: '䷄', hanja: '需', name: '수', fullName: '수천수' },
    { num: 6, symbol: '䷅', hanja: '訟', name: '송', fullName: '천수송' },
    { num: 7, symbol: '䷆', hanja: '師', name: '사', fullName: '지수사' },
    { num: 8, symbol: '䷇', hanja: '比', name: '비', fullName: '수지비' },
    { num: 9, symbol: '䷈', hanja: '小畜', name: '소축', fullName: '풍천소축' },
    { num: 10, symbol: '䷉', hanja: '履', name: '리', fullName: '천택리' },
    { num: 11, symbol: '䷊', hanja: '泰', name: '태', fullName: '지천태' },
    { num: 12, symbol: '䷋', hanja: '否', name: '비', fullName: '천지비' },
    { num: 13, symbol: '䷌', hanja: '同人', name: '동인', fullName: '천화동인' },
    { num: 14, symbol: '䷍', hanja: '大有', name: '대유', fullName: '화천대유' },
    { num: 15, symbol: '䷎', hanja: '謙', name: '겸', fullName: '지산겸' },
    { num: 16, symbol: '䷏', hanja: '豫', name: '예', fullName: '뇌지예' },
    { num: 17, symbol: '䷐', hanja: '隨', name: '수', fullName: '택뢰수' },
    { num: 18, symbol: '䷑', hanja: '蠱', name: '고', fullName: '산풍고' },
    { num: 19, symbol: '䷒', hanja: '臨', name: '임', fullName: '지택임' },
    { num: 20, symbol: '䷓', hanja: '觀', name: '관', fullName: '풍지관' },
    { num: 21, symbol: '䷔', hanja: '噬嗑', name: '서합', fullName: '화뢰서합' },
    { num: 22, symbol: '䷕', hanja: '賁', name: '비', fullName: '산화비' },
    { num: 23, symbol: '䷖', hanja: '剝', name: '박', fullName: '산지박' },
    { num: 24, symbol: '䷗', hanja: '復', name: '복', fullName: '지뢰복' },
    { num: 25, symbol: '䷘', hanja: '無妄', name: '무망', fullName: '천뢰무망' },
    { num: 26, symbol: '䷙', hanja: '大畜', name: '대축', fullName: '산천대축' },
    { num: 27, symbol: '䷚', hanja: '頤', name: '이', fullName: '산뢰이' },
    { num: 28, symbol: '䷛', hanja: '大過', name: '대과', fullName: '택풍대과' },
    { num: 29, symbol: '䷜', hanja: '坎', name: '감', fullName: '중수감' },
    { num: 30, symbol: '䷝', hanja: '離', name: '리', fullName: '중화리' },
    { num: 31, symbol: '䷞', hanja: '咸', name: '함', fullName: '택산함' },
    { num: 32, symbol: '䷟', hanja: '恒', name: '항', fullName: '뇌풍항' },
    { num: 33, symbol: '䷠', hanja: '遯', name: '돈', fullName: '천산돈' },
    { num: 34, symbol: '䷡', hanja: '大壯', name: '대장', fullName: '뇌천대장' },
    { num: 35, symbol: '䷢', hanja: '晉', name: '진', fullName: '화지진' },
    { num: 36, symbol: '䷣', hanja: '明夷', name: '명이', fullName: '지화명이' },
    { num: 37, symbol: '䷤', hanja: '家人', name: '가인', fullName: '풍화가인' },
    { num: 38, symbol: '䷥', hanja: '睽', name: '규', fullName: '화택규' },
    { num: 39, symbol: '䷦', hanja: '蹇', name: '건', fullName: '수산건' },
    { num: 40, symbol: '䷧', hanja: '解', name: '해', fullName: '뇌수해' },
    { num: 41, symbol: '䷨', hanja: '損', name: '손', fullName: '산택손' },
    { num: 42, symbol: '䷩', hanja: '益', name: '익', fullName: '풍뢰익' },
    { num: 43, symbol: '䷪', hanja: '夬', name: '쾌', fullName: '택천쾌' },
    { num: 44, symbol: '䷫', hanja: '姤', name: '구', fullName: '천풍구' },
    { num: 45, symbol: '䷬', hanja: '萃', name: '취', fullName: '택지취' },
    { num: 46, symbol: '䷭', hanja: '升', name: '승', fullName: '지풍승' },
    { num: 47, symbol: '䷮', hanja: '困', name: '곤', fullName: '택수곤' },
    { num: 48, symbol: '䷯', hanja: '井', name: '정', fullName: '수풍정' },
    { num: 49, symbol: '䷰', hanja: '革', name: '혁', fullName: '택화혁' },
    { num: 50, symbol: '䷱', hanja: '鼎', name: '정', fullName: '화풍정' },
    { num: 51, symbol: '䷲', hanja: '震', name: '진', fullName: '중뢰진' },
    { num: 52, symbol: '䷳', hanja: '艮', name: '간', fullName: '중산간' },
    { num: 53, symbol: '䷴', hanja: '漸', name: '점', fullName: '풍산점' },
    { num: 54, symbol: '䷵', hanja: '歸妹', name: '귀매', fullName: '뇌택귀매' },
    { num: 55, symbol: '䷶', hanja: '豐', name: '풍', fullName: '뇌화풍' },
    { num: 56, symbol: '䷷', hanja: '旅', name: '려', fullName: '화산려' },
    { num: 57, symbol: '䷸', hanja: '巽', name: '손', fullName: '중풍손' },
    { num: 58, symbol: '䷹', hanja: '兌', name: '태', fullName: '중택태' },
    { num: 59, symbol: '䷺', hanja: '渙', name: '환', fullName: '풍수환' },
    { num: 60, symbol: '䷻', hanja: '節', name: '절', fullName: '수택절' },
    { num: 61, symbol: '䷼', hanja: '中孚', name: '중부', fullName: '풍택중부' },
    { num: 62, symbol: '䷽', hanja: '小過', name: '소과', fullName: '뇌산소과' },
    { num: 63, symbol: '䷾', hanja: '旣濟', name: '기제', fullName: '수화기제' },
    { num: 64, symbol: '䷿', hanja: '未濟', name: '미제', fullName: '화수미제' }
];

const HEAVENLY_STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const HEAVENLY_STEMS_KR = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
const EARTHLY_BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const EARTHLY_BRANCHES_KR = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];
const RRYEOK_MAP_HANJA = { 0: '貞', 1: '元', 2: '亨', 3: '利', 4: '貞', 5: '元', 6: '亨', 7: '利', 8: '貞', 9: '元', 10: '亨', 11: '利' };
const KOR_DAY = ['일', '월', '화', '수', '목', '금', '토'];

const SEQ_60 = HEXAGRAMS.filter(h => ![29, 30, 63, 64].includes(h.num));

const JU_NAMES_HANJA = ['', '復周', '臨周', '泰周', '大壯周', '夬周', '乾周'];
const JU_START_HEX = [0, 24, 19, 11, 34, 43, 1];
const CG_HEX = [0, 44, 33, 12, 20, 23, 2];

// Helper Ganzhi functions
function getGanzhiByIndex(index) {
    if (index < 0) index = (index % 60 + 60) % 60;
    const s = index % 10;
    const b = index % 12;
    return {
        hanja: HEAVENLY_STEMS[s] + EARTHLY_BRANCHES[b],
        kr: HEAVENLY_STEMS_KR[s] + EARTHLY_BRANCHES_KR[b]
    };
}

// 2026 Solar Terms Look-up Map format: 'MM-DD': 'Term'
const SPECIAL_DAYS_2026 = {
    '12-22': '동지',
    '1-1': '신정',
    '1-5': '소한',
    '1-20': '대한',
    '1-28': '설날',
    '2-4': '입춘',
    '2-19': '우수',
    '3-6': '경칩',
    '3-21': '춘분',
    '4-5': '청명',
    '4-6': '한식',
    '4-20': '곡우',
    '5-5': '입하',
    '5-21': '소만',
    '6-6': '망종',
    '6-21': '하지',
    '7-7': '소서',
    '7-23': '대서',
    '8-8': '입추',
    '8-23': '처서',
    '9-8': '백로',
    '9-23': '추분',
    '10-8': '한로',
    '10-23': '상강',
    '11-7': '입동',
    '11-22': '소설',
    '12-7': '대설',
    '12-22': '동지',
    '12-25': '성탄절'
};

const SOLAR_HOLIDAYS = {
    '1-1': '신정',
    '3-1': '3·1절',
    '5-1': '노동절',
    '5-5': '어린이날',
    '6-6': '현충일',
    '7-17': '제헌절',
    '8-15': '광복절',
    '10-3': '개천절',
    '10-9': '한글날'
};

const LUNAR_HOLIDAYS = {
    '1.1': '설',
    '4.8': '석탄절',
    '8.15': '추석'
};

let state = {
    currentJu: 1, // Current viewed Ju (0-6)
    refYear: 2026, // Based on 2026 calendar view
    selectedDate: new Date() // Selected day via UI
};

// Find which Ju block contains a given date
function findJuForDate(date) {
    const y = date.getFullYear();
    for (let testYear = y - 1; testYear <= y + 1; testYear++) {
        for (let j = 0; j <= 6; j++) {
            const dates = getDatesForJu(testYear, j);
            if (dates.length === 0) continue;
            for (let d of dates) {
                if (d.getFullYear() === date.getFullYear() && d.getMonth() === date.getMonth() && d.getDate() === date.getDate()) {
                    return { refYear: testYear, ju: j };
                }
            }
        }
    }
    return { refYear: y, ju: 1 };
}

function syncDate() {
    const res = findJuForDate(state.selectedDate);
    state.refYear = res.refYear;
    state.currentJu = res.ju;
    renderYearControls();
    renderJuTabs();
    renderExcelAlmanac();
}

// Return array of 60 consecutive Javascript Date objects for proper Ju
function getDatesForJu(year, ju) {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const bokStart = isLeap ? 26 : 25;

    let baseDate;
    let daysCount = 60;

    if (ju === 0) {
        // Cheongong happens at the END of the cycle, falling in Feb of next Gregorian year
        const nextYearLeap = ((year + 1) % 4 === 0 && (year + 1) % 100 !== 0) || ((year + 1) % 400 === 0);
        baseDate = new Date(year + 1, 1, 20); // Feb 20
        daysCount = nextYearLeap ? 6 : 5;
    } else if (ju === 1) { // Bok
        baseDate = new Date(year, 1, bokStart);
    } else if (ju === 2) { // Rim
        baseDate = new Date(year, 3, 26);
    } else if (ju === 3) { // Tae
        baseDate = new Date(year, 5, 25);
    } else if (ju === 4) { // Daejang
        baseDate = new Date(year, 7, 24);
    } else if (ju === 5) { // Gwae
        baseDate = new Date(year, 9, 23);
    } else if (ju === 6) { // Geon
        baseDate = new Date(year, 11, 22);
    }

    const dates = [];
    for (let i = 0; i < daysCount; i++) {
        dates.push(new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + i));
    }
    return dates;
}

// Helper for 72 Pentads (72후) - global sequential numbering 1~72
function getPentadStr(targetDate) {
    // 24 solar terms in traditional order starting from 동지 (term index 0 = 동지)
    const TERM_ORDER = [
        '동지', '소한', '대한', '입춘', '우수', '경칩', '춘분', '청명', '곡우',
        '입하', '소만', '망종', '하지', '소서', '대서', '입추', '처서', '백로',
        '추분', '한로', '상강', '입동', '소설', '대설'
    ];

    const y = targetDate.getFullYear();
    // Build a flat list of all term dates for y-1 through y+1 in chronological order
    const termDatesRaw = [
        { name: '동지', m: 12, d: 22 }, { name: '소한', m: 1, d: 5 },
        { name: '대한', m: 1, d: 20 }, { name: '입춘', m: 2, d: 4 },
        { name: '우수', m: 2, d: 18 }, { name: '경칩', m: 3, d: 5 },
        { name: '춘분', m: 3, d: 20 }, { name: '청명', m: 4, d: 5 },
        { name: '곡우', m: 4, d: 20 }, { name: '입하', m: 5, d: 5 },
        { name: '소만', m: 5, d: 21 }, { name: '망종', m: 6, d: 6 },
        { name: '하지', m: 6, d: 21 }, { name: '소서', m: 7, d: 7 },
        { name: '대서', m: 7, d: 23 }, { name: '입추', m: 8, d: 7 },
        { name: '처서', m: 8, d: 23 }, { name: '백로', m: 9, d: 7 },
        { name: '추분', m: 9, d: 23 }, { name: '한로', m: 10, d: 8 },
        { name: '상강', m: 10, d: 23 }, { name: '입동', m: 11, d: 7 },
        { name: '소설', m: 11, d: 22 }, { name: '대설', m: 12, d: 7 }
    ];

    // Build array spanning y-1 to y+1
    let arr = [];
    for (let yr = y - 1; yr <= y + 1; yr++) {
        for (let t of termDatesRaw) {
            const actualYear = (t.m === 12 && t.name === '동지') ? yr : (t.m <= 2 ? yr : yr);
            const d = new Date(yr, t.m - 1, t.d);
            arr.push({ name: t.name, date: d });
        }
    }
    arr.sort((a, b) => a.date - b.date);

    const targetTime = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate()).getTime();

    let currentTerm = arr[0];
    let currentTermIdx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].date.getTime() <= targetTime) {
            currentTerm = arr[i];
            currentTermIdx = i;
        } else {
            break;
        }
    }

    const diffDays = Math.round((targetTime - currentTerm.date.getTime()) / 86400000);
    let pentadOffset = 0; // 초후 (days 0-4)
    let dayInPentad = diffDays + 1; // 1-based within the 5-day window

    if (diffDays >= 5 && diffDays <= 9) {
        pentadOffset = 1; // 중후
        dayInPentad = diffDays - 5 + 1;
    } else if (diffDays >= 10) {
        pentadOffset = 2; // 말후
        dayInPentad = diffDays - 10 + 1;
    }
    if (dayInPentad > 5) dayInPentad = 5; // cap at 5

    const pentadLabels = ['초후', '중후', '말후'];
    return `${currentTerm.name} ${pentadLabels[pentadOffset]}${dayInPentad}`;
}

function getDayMeta(date) {
    // Math reference for Ganzhi: 2026-04-06 is 庚戌(46)
    const refDate = new Date(2026, 3, 6);
    const diffDays = Math.round((date - refDate) / 86400000);
    const dayGanzhi = getGanzhiByIndex(46 + diffDays);

    // Check lunar
    let lunarFmt = '';
    try {
        const fmt = new Intl.DateTimeFormat('ko-KR-u-ca-chinese', { month: 'numeric', day: 'numeric' });
        lunarFmt = fmt.format(date).replace('월 ', '. ').replace('일', '').trim();
        // Fallback cleanup "2. 19." -> "2. 19"
        if (lunarFmt.endsWith('.')) lunarFmt = lunarFmt.substring(0, lunarFmt.length - 1);
    } catch (e) { }

    const pureLunar = lunarFmt; // "2. 19"
    const lunarStr = "음" + lunarFmt; // "음2. 19"
    
    let lunarHol = '';
    if (!pureLunar.includes('윤')) {
        // "8. 15" -> "8.15"로 정규화하여 매칭
        const matchKey = pureLunar.replace(/\s/g, '');
        lunarHol = LUNAR_HOLIDAYS[matchKey] ? `${lunarStr} ${LUNAR_HOLIDAYS[matchKey]}` : '';
    }

    // Check terms and holidays
    const solarKey = `${date.getMonth() + 1}-${date.getDate()}`;
    const solarTerm = SPECIAL_DAYS_2026[solarKey] || '';
    const solarHol = SOLAR_HOLIDAYS[solarKey] || '';
    
    // 음력 기념일(lunarHol)이 있는 경우, 별도의 combinedTerms를 사용하지 않고 lunarWithTerm에서 직접 처리하거나
    // 중복 방지를 위해 필터링을 강화합니다.
    const otherTerms = [solarTerm, solarHol].filter(t => t !== '').join(' ');
    
    const pentadStr = getPentadStr(date);

    return {
        rawDate: date,
        solar: `${date.getMonth() + 1}월${date.getDate()}일`,
        lunarOnlyNum: pureLunar,
        lunarWithTerm: lunarHol ? lunarHol : `${lunarStr}${otherTerms ? ' ' + otherTerms : ''}`,
        weekDay: KOR_DAY[date.getDay()],
        ganzhiWithTerm: `${dayGanzhi.kr}<br><span style="font-size:0.72em; font-weight:normal; color:#d4af37; letter-spacing:-0.5px;">${pentadStr}</span>`,
        ganzhiHanja: dayGanzhi.hanja,
        term: lunarHol || otherTerms,
        pentadStr: pentadStr
    };
}

function renderExcelAlmanac() {
    const main = document.getElementById('almanac-root');
    main.innerHTML = '';

    const ju = state.currentJu;
    const dates = getDatesForJu(state.refYear, ju);

    // Meta Top Section
    const gyYearGreg = state.refYear;
    const isCrossYear = (ju === 6); // Geon Ju crosses to next year
    const yearStr = isCrossYear ? `${state.refYear}/${state.refYear + 1}年` : (ju === 0 ? `${state.refYear + 1}년` : `${state.refYear}년`);

    // The Gyeongwon cycle year never changes within the 365/366-day cycle block
    const gyYearNo = state.refYear - 1943;
    const gyBranchIdx = (state.refYear - 4) % 12;
    const gyStemIdx = (state.refYear - 4) % 10;
    const shiftedStemIdx = (gyStemIdx + 6) % 10;
    const gyNameHanja = HEAVENLY_STEMS[shiftedStemIdx] + EARTHLY_BRANCHES[gyBranchIdx] + RRYEOK_MAP_HANJA[gyBranchIdx] + '曆';

    // Dangi and Gyeongse dynamically track the exact Gregorian year of the active selected date
    const currentGregorianYear = state.selectedDate.getFullYear();
    const dangi = `단기${currentGregorianYear + 2333}`;
    const gyeongse = `經世寅半${currentGregorianYear + 40017}`;

    // Determine lunar months covered in this Ju
    const lunarMonths = new Set();
    dates.forEach(d => {
        try {
            const fmt = new Intl.DateTimeFormat('ko-KR-u-ca-chinese', { month: 'numeric' });
            let mStr = fmt.format(d).replace('월', '').trim();
            if (mStr.includes('윤')) mStr = mStr.replace('윤', '').trim();
            if (mStr) lunarMonths.add(parseInt(mStr));
        } catch (e) { }
    });

    const monthList = Array.from(lunarMonths).sort((a, b) => {
        let a_val = (a > 10) ? a - 12 : a;
        let b_val = (b > 10) ? b - 12 : b;
        return a_val - b_val;
    });

    const monthGanzhis = monthList.map(M => {
        let y = state.refYear;
        // In Geon Ju, early lunar months (1, 2) belong to the next Gregorian year
        if (ju === 6 && M < 10) {
            y = state.refYear + 1;
        } else if (ju === 0) {
            y = state.refYear + 1;
        }

        const yStemIdx = (y - 4) % 10;
        const monthStemIdx = (((yStemIdx % 5) * 2 + 2) + (M - 1)) % 10;
        const monthBranchIdx = (M + 1) % 12;
        return HEAVENLY_STEMS[monthStemIdx] + EARTHLY_BRANCHES[monthBranchIdx];
    });

    const lunarMonthStr = monthGanzhis.length > 0 ? `<span>${monthGanzhis.join('/')}月</span>` : '';

    // Calculate Gregorian months to display in the header
    const gregorianMonths = new Set();
    dates.forEach(d => gregorianMonths.add(d.getMonth() + 1));
    const gMonthArr = Array.from(gregorianMonths);
    const startMonth = gMonthArr[0]; // Represents the starting solar month of this Ju
    
    // UI controller text for Year/Month/Day is fully managed in renderYearControls now.

    // Determine the exact hexagram for the currently selected date
    let selHex = null;
    let selIdx = -1;
    if (dates.length > 0) {
        selIdx = dates.findIndex(d => d.getFullYear() === state.selectedDate.getFullYear() && d.getMonth() === state.selectedDate.getMonth() && d.getDate() === state.selectedDate.getDate());
    }
    
    if (selIdx !== -1) {
        if (ju === 0) {
            selHex = HEXAGRAMS.find(h => h.num === CG_HEX[selIdx + 1]);
        } else {
            const startNum = JU_START_HEX[ju];
            const startIndex = SEQ_60.findIndex(h => h.num === startNum);
            const currentIndex = (startIndex + selIdx) % 60;
            selHex = SEQ_60[currentIndex];
        }
    }

    let juKorName = '천공';
    if (ju === 1) juKorName = '복주';
    if (ju === 2) juKorName = '임주';
    if (ju === 3) juKorName = '태주';
    if (ju === 4) juKorName = '대장주';
    if (ju === 5) juKorName = '쾌주';
    if (ju === 6) juKorName = '건주';

    let extendedDateStr = '';
    if (selIdx !== -1 && selHex) {
        const dMeta = getDayMeta(dates[selIdx]);
        
        // Target exact lunar month number, securely stripping out leap month '윤' string issues
        let targetMonthNum = 1;
        try { 
            const monthStr = dMeta.lunarOnlyNum.split('.')[0].replace('윤', '');
            targetMonthNum = parseInt(monthStr); 
        } catch(e) {}
        
        let y = state.refYear;
        // Solar year crossing check
        if (ju === 6 && targetMonthNum < 10) y = state.refYear + 1;
        else if (ju === 0) y = state.refYear + 1;
        
        const yStemIdx = (y - 4) % 10;
        const yBranchIdx = (y - 4) % 12;
        
        // Year string must be the STANDARD Ganzhi year (e.g. 丙午年), not the Gyeongwon Cycle name
        const yGanzhi = HEAVENLY_STEMS[yStemIdx] + EARTHLY_BRANCHES[yBranchIdx] + '年';

        const tgtMonthStemIdx = ( ((yStemIdx % 5) * 2 + 2) + (targetMonthNum - 1) ) % 10;
        const tgtMonthBranchIdx = (targetMonthNum + 1) % 12;
        const mGanzhi = HEAVENLY_STEMS[tgtMonthStemIdx] + EARTHLY_BRANCHES[tgtMonthBranchIdx] + '月';
        
        const dGanzhi = dMeta.ganzhiHanja;
        
        const TERMS_HANJA = { '동지':'冬至', '소한':'小寒', '대한':'大寒', '입춘':'立春', '우수':'雨水', '경칩':'驚蟄', '춘분':'春分', '청명':'淸明', '곡우':'穀雨', '입하':'立夏', '소만':'小滿', '망종':'芒種', '하지':'夏至', '소서':'小暑', '대서':'大暑', '입추':'立秋', '처서':'處暑', '백로':'白露', '추분':'秋分', '한로':'寒露', '상강':'霜降', '입동':'立冬', '소설':'小雪', '대설':'大雪', '한식':'寒食', '설':'舊正', '추석':'秋夕', '신정':'新正', '3·1절':'三一節', '노동절':'勞動節', '현충일':'顯忠日', '제헌절':'制憲節', '광복절':'光復節', '개천절':'開天節', '어린이날':'어린이날', '한글날':'한글날', '크리스마스':'크리스마스', '부처님 오신날':'부처님 오신날' };
        let dTerm = '';
        if (dMeta.term) {
            // Check for complex strings like "부처님 오신날" which has a space natively.
            if (TERMS_HANJA[dMeta.term]) {
                dTerm = ` ${TERMS_HANJA[dMeta.term]}`;
            } else {
                const translatedTerms = dMeta.term.split(' ').map(t => TERMS_HANJA[t] || t);
                dTerm = ` ${translatedTerms.join(' ')}`;
            }
        }
        
        const strLunar = ` 陰${dMeta.lunarOnlyNum}`;
        const dPentad = dMeta.pentadStr ? ` ${dMeta.pentadStr}` : '';
        extendedDateStr = ` ${yGanzhi} ${mGanzhi} ${dGanzhi}${dPentad}${dTerm}${strLunar}`;
    }

    const juYeokStr = (ju !== 0 && selHex) ? `<span>${selHex.hanja}易</span>` : '';

    const headerHtml = `
        <div class="almanac-header">
            <div>
                <h2>${ju === 0 ? '天空' : JU_NAMES_HANJA[ju]} ${selHex ? `<span style="font-size: 0.82em; margin-left:15px; font-weight:normal; color:#ddd; letter-spacing:-0.5px;">${selHex.hanja}易(${juKorName}${selIdx + 1}역 <span class="sym">${selHex.symbol}</span>${selHex.name}${extendedDateStr})</span>` : ''}</h2>
            </div>
            <div class="almanac-meta">
                <span>庚元${gyYearNo}紀</span>
                <span>${gyNameHanja}</span>
                <span>${dangi}</span>
                <span>${gyeongse}</span>
            </div>
        </div>
    `;
    main.innerHTML += headerHtml;

    // Create 6 horizontal blocks (10 days each) for the 60-day Ju
    const blockCount = ju === 0 ? 1 : 6;

    for (let b = 0; b < blockCount; b++) {
        let blockHtml = `<div class="almanac-block">`;
        const startDay = b * 10;
        const endDay = Math.min((b + 1) * 10, dates.length);

        // Data Preparation
        const blockDates = dates.slice(startDay, endDay).map(d => getDayMeta(d));
        // Find which indexes are selected
        const isSel = blockDates.map(d => d.rawDate.getFullYear() === state.selectedDate.getFullYear() && d.rawDate.getMonth() === state.selectedDate.getMonth() && d.rawDate.getDate() === state.selectedDate.getDate());

        // Row 1: Hexagrams
        blockHtml += `<div class="almanac-row hex-row">`;
        for (let i = startDay; i < endDay; i++) {
            let hex;
            if (ju === 0) {
                hex = HEXAGRAMS.find(h => h.num === CG_HEX[i + 1]);
            } else {
                const startNum = JU_START_HEX[ju];
                const startIndex = SEQ_60.findIndex(h => h.num === startNum);
                const currentIndex = (startIndex + i) % 60;
                hex = SEQ_60[currentIndex];
            }
            const cls = isSel[i - startDay] ? 'cell selected' : 'cell';
            blockHtml += `<div class="${cls}">${hex.hanja} <span class="sym">${hex.symbol}</span> ${hex.name}</div>`;
        }
        blockHtml += `</div>`;

        // Row 2: Solar Date
        blockHtml += `<div class="almanac-row">`;
        blockDates.forEach((d, idx) => blockHtml += `<div class="cell solar ${isSel[idx] ? 'selected' : ''}">${d.solar}</div>`);
        blockHtml += `</div>`;

        // Row 3: Lunar Date
        blockHtml += `<div class="almanac-row">`;
        blockDates.forEach((d, idx) => blockHtml += `<div class="cell lunar ${isSel[idx] ? 'selected' : ''}">${d.lunarWithTerm}</div>`);
        blockHtml += `</div>`;

        // Row 4: Day of Week
        blockHtml += `<div class="almanac-row">`;
        blockDates.forEach((d, idx) => blockHtml += `<div class="cell dow ${isSel[idx] ? 'selected' : ''}">${d.weekDay}</div>`);
        blockHtml += `</div>`;

        // Row 5: Ganzhi
        blockHtml += `<div class="almanac-row">`;
        blockDates.forEach((d, idx) => blockHtml += `<div class="cell ganzhi ${isSel[idx] ? 'selected' : ''}">${d.ganzhiWithTerm}</div>`);
        blockHtml += `</div>`;

        blockHtml += `</div>`; // End block
        main.innerHTML += blockHtml;
    }
}

function renderYearControls() {
    const displayYearEl = document.getElementById('display-year');
    if (displayYearEl) displayYearEl.textContent = `${state.selectedDate.getFullYear()}년`;

    const displayMonthEl = document.getElementById('display-month');
    if (displayMonthEl) displayMonthEl.textContent = `${state.selectedDate.getMonth() + 1}월`;

    const displayDayEl = document.getElementById('display-day');
    if (displayDayEl) displayDayEl.textContent = `${state.selectedDate.getDate()}일`;

    document.getElementById('btn-prev-year').onclick = () => {
        state.selectedDate.setFullYear(state.selectedDate.getFullYear() - 1);
        syncDate();
    };
    document.getElementById('btn-next-year').onclick = () => {
        state.selectedDate.setFullYear(state.selectedDate.getFullYear() + 1);
        syncDate();
    };

    document.getElementById('btn-prev-month').onclick = () => {
        state.selectedDate.setMonth(state.selectedDate.getMonth() - 1);
        syncDate();
    };
    document.getElementById('btn-next-month').onclick = () => {
        state.selectedDate.setMonth(state.selectedDate.getMonth() + 1);
        syncDate();
    };
    
    document.getElementById('btn-prev-day').onclick = () => {
        state.selectedDate.setDate(state.selectedDate.getDate() - 1);
        syncDate();
    };
    document.getElementById('btn-next-day').onclick = () => {
        state.selectedDate.setDate(state.selectedDate.getDate() + 1);
        syncDate();
    };
}

function renderJuTabs() {
    const tabs = document.getElementById('ju-tabs');
    const tabData = [
        { label: '1주(복)', ju: 1 },
        { label: '2주(임)', ju: 2 },
        { label: '3주(태)', ju: 3 },
        { label: '4주(대장)', ju: 4 },
        { label: '5주(쾌)', ju: 5 },
        { label: '6주(건)', ju: 6 },
        { label: '천공', ju: 0 }
    ];

    tabs.innerHTML = '';
    tabData.forEach((item) => {
        const btn = document.createElement('button');
        btn.className = `ju-tab ${state.currentJu === item.ju ? 'active' : ''}`;
        btn.textContent = item.label;
        btn.onclick = () => {
            state.currentJu = item.ju;
            // Align selectedDate to the start of the newly clicked Ju
            const blockDates = getDatesForJu(state.refYear, state.currentJu);
            if (blockDates.length > 0) {
                state.selectedDate = blockDates[0];
            }
            syncDate();
        };
        tabs.appendChild(btn);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Replaces standard DOM tree handling with the pure excel-style almanac
    state.selectedDate = new Date();
    syncDate();
});
