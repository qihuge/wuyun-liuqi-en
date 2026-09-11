# Chapter 10: Program Implementation — Computer Implementation of the Five Motions and Six Qi Algorithm

## 1. Overall Approach of Program Implementation

### 10.1 Why Program Implementation is Needed

In the previous chapters, we elaborated on the theory, methodology, calculation methods, treatment principles, and Four Diagnostic Methods Synthesis of Five Motions and Six Qi. These contents constitute a complete theoretical system and algorithm framework. However, if theory and algorithms only remain on paper, their value is limited — only by transforming them into runnable computer programs can their role be truly发挥:

First, **improve calculation efficiency**. The calculation of Five Motions and Six Qi involves a large number of calculations — stem-branch conversion, Five Motions and Six Qi calculation, Dynamic Stagnation Point calculation, onset risk index calculation, etc. If calculated manually, a complete calculation may take tens of minutes or even hours, and is prone to errors. Through computer programs, all calculations can be completed in seconds, greatly improving efficiency.

Second, **ensure calculation accuracy**. Manual calculation is prone to human errors (such as table lookup errors, calculation errors, priority judgment errors, etc.). Computer programs strictly execute according to preset algorithms, can avoid human errors, and ensure calculation accuracy and consistency.

Third, **achieve large-scale application**. With computer programs, Five Motions and Six Qi calculations can be performed on a large number of people, providing tool support for large-sample clinical research and verification. Without programs, large-scale calculations are unimaginable.

Fourth, **promote dissemination and popularization**. Through web applications or mobile applications, more people (including professionals and the general public) can understand and use Five Motions and Six Qi, promoting the dissemination and popularization of this ancient knowledge.

Fifth, **provide algorithm foundation for AI and intelligent robots**. As stated in the preface of this book, Five Motions and Six Qi, as ancient temporal medicine, can provide algorithm services for future intelligent robots and AI, for health monitoring, disease prediction, personalized health preservation, etc. Program implementation is the foundation of this goal.

### 10.2 Principles of Program Implementation

The implementation of the Five Motions and Six Qi program follows the following principles:

**First, open source and transparent.**
- The source code of the program is completely open source, and anyone can view, use, modify, and distribute it.
- The implementation of all algorithms strictly corresponds to the theory and methodology of this book, achieving "code is documentation" — by reading the code, one can understand the implementation logic of the algorithm.
- No "black box" operations are hidden, and all calculation processes are traceable and verifiable.

**Second, modular design.**
- The program adopts modular design, splitting different functions into independent modules (such as stem-branch calculation module, Five Motions and Six Qi calculation module, Dynamic Stagnation Point calculation module, treatment recommendation module, etc.).
- Each module has clear inputs and outputs, and modules communicate through standardized interfaces.
- Modular design makes the program easy to understand, easy to maintain, and easy to extend — a module can be conveniently replaced or upgraded without affecting other modules.

**Third, Chinese-English bilingual support.**
- The program simultaneously supports Chinese and English languages, and users can switch according to their needs.
- For core concepts in ancient classics (such as Si Tian, Zai Quan, Sui Yun, etc.), the format of "Chinese + Pinyin + English functional description" is adopted to avoid translation ambiguity.
- The algorithm logic of the Chinese and English versions is completely consistent, only the interface display language is different.

**Fourth, cross-platform compatibility.**
- The program is implemented using Web technology (HTML/CSS/JavaScript), can run on any device that supports modern browsers (computers, mobile phones, tablets, etc.), without installation.
- At the same time, it can also be packaged as a desktop application or mobile application (through frameworks such as Electron, Cordova, etc.) to meet the needs of different scenarios.

**Fifth, user-friendly.**
- The interface design of the program is concise and clear, the operation process is intuitive and easy to understand, even ordinary users without professional background can easily use it.
- For professional users, detailed calculation processes and intermediate results are provided, convenient for verification and research.
- Usage instructions and help documentation are provided to guide users to use the program correctly.

### 10.3 Technology Selection of the Program

This program adopts the following technology stack:

- **Frontend framework**: Native HTML/CSS/JavaScript (does not rely on heavy frameworks, ensuring lightness and compatibility)
- **Style framework**: Custom CSS (responsive design, adapting to computers and mobile phones)
- **Core algorithm**: Pure JavaScript implementation (strictly corresponding to the methodology of this book)
- **Data storage**: Browser local storage (localStorage), used to save users' calculation history and preference settings
- **Deployment method**: GitHub Pages (free static website hosting service)
- **Version control**: Git (source code hosted on GitHub)

The reasons for choosing these technologies are:
1. **Light and efficient**: The native technology stack does not need to load a large amount of framework code, the program loads fast and runs smoothly.
2. **Cross-platform compatibility**: Web technology can run on any device, no need to develop different versions for different platforms.
3. **Open source friendly**: All technologies are open source, conforming to the "open source and transparent" principle of this book.
4. **Easy to deploy**: GitHub Pages provides free static website hosting, one-click deployment, no need to maintain a server yourself.
5. **Community support**: Web technology has a huge developer community, and it is easy to find solutions when encountering problems.

## 2. Overall Architecture of the Program

### 10.4 Module Division of the Program

The program adopts modular design and is divided into the following core modules:

```
Five Motions and Six Qi Syndrome Differentiation Program
├── 1. Input Module
│   ├── Birth date and time input
│   ├── Disease onset date and time input
│   ├── Current date and time input
│   └── Language switch (Chinese/English)
│
├── 2. Ganzhi Module (Stem-Branch Calculation Module)
│   ├── Gregorian to Lunar calendar conversion
│   ├── Year-Month-Day-Hour Four Pillars stem-branch calculation
│   ├── Heavenly Stem-Earthly Branch attribute query (Five Elements, Yin-Yang, Six Qi, etc.)
│   └── Solar term calculation
│
├── 3. Yunqi Module (Five Motions and Six Qi Calculation Module)
│   ├── Annual Motion calculation (Five Elements, Excess/Deficiency, power value)
│   ├── Principal Motion five steps calculation
│   ├── Guest Motion five steps calculation
│   ├── Principal Qi six steps calculation
│   ├── Guest Qi six steps calculation
│   ├── Sovereign Heaven-Earthly Deputy calculation
│   ├── Guest-Principal Superimposition calculation
│   └── Special year judgment (Heavenly Concord, Annual Concord, etc.)
│
├── 4. Yudian Module (Dynamic Stagnation Point Calculation Module, dual-module structure)
│   ├── Core Stagnation Point Analysis (macro overall judgment from Annual Motion/Heavenly Stem angle)
│   │   ├── Main Stagnation Point calculation
│   │   ├── Stagnation Point type judgment (excess stagnation/deficiency stagnation)
│   │   ├── Stagnation qi intensity quantification (0-10 points)
│   │   └── Disease risk assessment (stable/medium/relatively high/high)
│   ├── Trigger Point calculation (Excess years/Deficiency years, Six Qi as principal, Four Directions as auxiliary)
│   ├── Stagnation Point calculation (priority algorithm, Six Qi as principal, Four Directions as auxiliary)
│   ├── Tong Shi substitution and backup warning calculation
│   │   ├── Tong Shi substitution calculation
│   │   ├── Tong Shi backup calculation
│   │   └── Concurrent wear warning calculation
│   ├── Core Organs determination (principal+auxiliary structure)
│   ├── Affected Meridians calculation (three-layer logic)
│   ├── Six Qi brake calculation
│   ├── High-Risk Period/Exacerbation Period calculation (same Five Elements Earthly Branch month range)
│   └── Onset risk index calculation
│
├── 5. Treatment Module (Treatment Recommendation Module)
│   ├── Stagnation Point treatment recommendation (Core Organs principal+auxiliary)
│   ├── Trigger Point treatment recommendation (brake)
│   ├── Tong Shi backup treatment recommendation (including concurrent wear warning)
│   ├── Affected Meridians treatment recommendation (three-layer logic: first layer/second layer/third layer)
│   ├── High-Risk Period/Exacerbation Period prevention suggestions (same Five Elements Earthly Branch month range)
│   └── Comprehensive treatment plan generation
│
├── 6. Diagnosis Module (Four Diagnostic Methods Auxiliary Module)
│   ├── Inspection reference (facial color, tongue manifestation corresponding to Five Motions and Six Qi)
│   ├── Auscultation-olfaction reference (sounds, odors corresponding to Five Motions and Six Qi)
│   ├── Inquiry reference (symptoms, medical history, lifestyle corresponding to Five Motions and Six Qi)
│   ├── Palpation reference (pulse condition, abdominal diagnosis corresponding to Five Motions and Six Qi)
│   └── Four Diagnostic Methods Synthesis auxiliary judgment
│
├── 7. Output Module
│   ├── Congenital endowment report
│   ├── Dynamic Stagnation Point report
│   ├── Disease onset time Motion-Qi report
│   ├── Treatment recommendation report
│   ├── Four Diagnostic Methods auxiliary report
│   └── Comprehensive report (exportable/printable)
│
└── 8. Utility Module (Auxiliary Module)
    ├── Data storage (localStorage)
    ├── Calculation history management
    ├── Terminology glossary
    ├── Usage help
    └── About/open source information
```

### 10.5 Data Flow Between Modules

The core data flow of the program is as follows:

```
User input (birth date, disease onset date, etc.)
    ↓
Input module (validation, formatting)
    ↓
Stem-branch calculation module (Four Pillars stem-branch, solar terms)
    ↓
Five Motions and Six Qi calculation module (Annual Motion, Sovereign Heaven-Earthly Deputy, Principal-Guest Motions, Principal-Guest Qi)
    ↓
Dynamic Stagnation Point calculation module (Trigger Point, Stagnation Point, Tong Shi, Core Organs, Affected Meridians, onset risk)
    ↓
Treatment recommendation module (treatment rules, prevention suggestions, comprehensive plan)
    ↓
Four Diagnostic Methods auxiliary module (inspection-auscultation-inquiry-palpation reference, synthesis judgment)
    ↓
Output module (generate report, display results)
    ↓
User views report
```

This data flow is unidirectional and linear, from input to output, and the output of each module is the input of the next module. This design makes the program logic clear and easy to understand and debug.

At the same time, each module can also be used independently — for example, users can only view the Five Motions and Six Qi calculation results without performing Dynamic Stagnation Point calculation; they can also only view treatment recommendations without viewing Four Diagnostic Methods auxiliary. This flexibility meets the needs of different users.

## 3. Implementation of Core Algorithm Modules

### 10.6 Stem-Branch Calculation Module

The stem-branch calculation module is the foundation of the entire program, responsible for converting Gregorian dates into Heavenly Stems and Earthly Branches, and querying various attributes of Heavenly Stems and Earthly Branches.

**Core functions**:

1. **Gregorian to Lunar calendar conversion**:
   - Input: Gregorian year, month, day
   - Output: Lunar year, month, day, solar term information
   - Implementation: Use lunar calendar conversion algorithm (based on lunar calendar data table from 1900-2100)

2. **Year Pillar stem-branch calculation**:
   - Input: Gregorian year
   - Output: Year Stem, Year Branch
   - Formula: Year Stem = (year - 4) % 10, Year Branch = (year - 4) % 12
   - Note: Use Start of Spring as the year boundary (before Start of Spring counts as the previous year, after Start of Spring counts as the current year)

3. **Month Pillar stem-branch calculation**:
   - Input: Year Stem, month (bounded by solar terms)
   - Output: Month Stem, Month Branch
   - Formula: Month Branch is fixed (Yin month = 1st month, Mao month = 2nd month, ...), Month Stem is calculated from Year Stem (Five Tigers Escaping)

4. **Day Pillar stem-branch calculation**:
   - Input: Gregorian year, month, day
   - Output: Day Stem, Day Branch
   - Formula: Based on a known reference day (such as January 1, 1900 = Jia Xu day), calculate the number of days difference, then modulo 60

5. **Hour Pillar stem-branch calculation**:
   - Input: Day Stem, hour (23-1 o'clock = Zi hour, 1-3 o'clock = Chou hour, ...)
   - Output: Hour Stem, Hour Branch
   - Formula: Hour Branch is fixed, Hour Stem is calculated from Day Stem (Five Rats Escaping)

6. **Heavenly Stem-Earthly Branch attribute query**:
   - Input: Heavenly Stem or Earthly Branch
   - Output: Five Elements attribute, Yin-Yang attribute, Six Qi attribute, corresponding organs, corresponding meridians, Zheng Hua/Dui Hua, intensity coefficient, etc.
   - Implementation: Use predefined attribute tables (lookup tables)

**Key code example** (JavaScript pseudocode):

```javascript
// Heavenly Stem list
const TIANGAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

// Earthly Branch list
const DIZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// Calculate Year Pillar
function getYearGanzhi(year, month, day) {
    // Judge whether before Start of Spring (simplified, actual needs precise solar term calculation)
    const isBeforeLichun = (month < 2) || (month === 2 && day < 4);
    const actualYear = isBeforeLichun ? year - 1 : year;
    
    const ganIndex = (actualYear - 4) % 10;
    const zhiIndex = (actualYear - 4) % 12;
    
    return {
        gan: TIANGAN[ganIndex],
        zhi: DIZHI[zhiIndex],
        ganzhi: TIANGAN[ganIndex] + DIZHI[zhiIndex]
    };
}

// Heavenly Stem attribute table
const TIANGAN_PROPERTIES = {
    '甲': { wuxing: '木', yinyang: '阳', taiwai: '太过', dongli: 6, zangfu: '胆' },
    '乙': { wuxing: '木', yinyang: '阴', taiwai: '不及', dongli: -6, zangfu: '肝' },
    '丙': { wuxing: '火', yinyang: '阳', taiwai: '太过', dongli: 6, zangfu: '小肠' },
    '丁': { wuxing: '火', yinyang: '阴', taiwai: '不及', dongli: -6, zangfu: '心' },
    // ... remaining Heavenly Stems
};
```

### 10.7 Five Motions and Six Qi Calculation Module

The Five Motions and Six Qi calculation module is the core of the program, responsible for calculating parameters such as Annual Motion, Principal Motion, Guest Motion, Principal Qi, Guest Qi, Sovereign Heaven, Earthly Deputy, etc.

**Core functions**:

1. **Annual Motion calculation**:
   - Input: Year Stem
   - Output: Annual Motion Five Elements, Excess/Deficiency, power value
   - Implementation: Look up Heavenly Stem transforming to Motion table

2. **Principal Motion five steps calculation**:
   - Input: Annual Motion Five Elements, Excess/Deficiency
   - Output: Five Elements and Tai-Shao of Principal Motion five steps (First Motion to Final Motion)
   - Implementation: Principal Motion order is fixed (Wood→Fire→Earth→Metal→Water), the Tai-Shao of the step corresponding to Annual Motion = Annual Motion Excess/Deficiency, the rest are calculated according to Tai-Shao mutual generation

3. **Guest Motion five steps calculation**:
   - Input: Annual Motion Five Elements, Excess/Deficiency
   - Output: Five Elements and Tai-Shao of Guest Motion five steps (First Motion to Final Motion)
   - Implementation: Guest Motion First Motion = Annual Motion, the rest are calculated according to Tai-Shao mutual generation

4. **Principal Qi six steps calculation**:
   - Input: Current date (or birth date)
   - Output: Current affiliated Principal Qi step
   - Implementation: Principal Qi order is fixed (Jueyin→Shaoyin→Shaoyang→Taiyin→Yangming→Taiyang), divided by solar terms

5. **Guest Qi six steps calculation**:
   - Input: Sovereign Heaven Six Qi
   - Output: Guest Qi six steps (First Qi to Final Qi)
   - Implementation: Guest Qi Third Qi = Sovereign Heaven, the rest are calculated according to Three Yin Three Yang cyclic order

6. **Sovereign Heaven-Earthly Deputy calculation**:
   - Input: Year Branch
   - Output: Sovereign Heaven Six Qi, Earthly Deputy Six Qi, Five Elements attribute, intensity coefficient
   - Implementation: Look up Year Branch Sovereign Heaven table, Earthly Deputy is Yin-Yang opposite to Sovereign Heaven

7. **Guest-Principal Superimposition calculation**:
   - Input: Principal Qi, Guest Qi
   - Output: Relationship type (same Qi/generation/restriction), compatible/incompatible, abnormality degree
   - Implementation: Compare the Five Elements relationship of Principal Qi and Guest Qi

8. **Special year judgment**:
   - Input: Annual Motion Five Elements, Sovereign Heaven Five Elements, Earthly Deputy Five Elements, Year Branch Five Elements
   - Output: Heavenly Concord, Annual Concord, Supreme Heavenly Concord, Same Heavenly Concord, Same Annual Concord
   - Implementation: Judge by definition (Heavenly Concord = Annual Motion Five Elements == Sovereign Heaven Five Elements, etc.)

**Key code example** (JavaScript pseudocode):

```javascript
// Heavenly Stem transforming to Motion table
const TIANGAN_YUN = {
    '甲': { wuxing: '土', taiwai: '太过', dongli: 10 },
    '己': { wuxing: '土', taiwai: '不及', dongli: -10 },
    '乙': { wuxing: '金', taiwai: '不及', dongli: -8 },
    '庚': { wuxing: '金', taiwai: '太过', dongli: 8 },
    '丙': { wuxing: '水', taiwai: '太过', dongli: 8 },
    '辛': { wuxing: '水', taiwai: '不及', dongli: -8 },
    '丁': { wuxing: '木', taiwai: '不及', dongli: -6 },
    '壬': { wuxing: '木', taiwai: '太过', dongli: 6 },
    '戊': { wuxing: '火', taiwai: '太过', dongli: 6 },
    '癸': { wuxing: '火', taiwai: '不及', dongli: -6 }
};

// Calculate Annual Motion
function getSuiyun(niangan) {
    return TIANGAN_YUN[niangan];
}

// Year Branch Sovereign Heaven table
const NIANZHI_SITIAN = {
    '子': { liuqi: '少阴君火', wuxing: '火', zhenghua: false, xishu: 0.7 },
    '午': { liuqi: '少阴君火', wuxing: '火', zhenghua: true, xishu: 1.0 },
    '丑': { liuqi: '太阴湿土', wuxing: '土', zhenghua: false, xishu: 0.7 },
    '未': { liuqi: '太阴湿土', wuxing: '土', zhenghua: true, xishu: 1.0 },
    // ... remaining Earthly Branches
};

// Calculate Sovereign Heaven
function getSitian(nianzhi) {
    return NIANZHI_SITIAN[nianzhi];
}
```

### 10.8 Dynamic Stagnation Point Calculation Module

The Dynamic Stagnation Point calculation module is the core innovation of this book, adopting a **dual-module structure** — Core Stagnation Point Analysis (macro overall judgment from Annual Motion/Heavenly Stem angle) + Six Qi Brake Dynamic Stagnation Point Calculation (micro specific positioning from Six Qi/Earthly Branch angle), responsible for calculating parameters such as Core Stagnation Point, Trigger Point, Stagnation Point, Tong Shi backup, Core Organs, Affected Meridians, onset risk index, etc.

**Core functions**:

0. **Core Stagnation Point Analysis** (macro overall judgment from Annual Motion/Heavenly Stem angle):
   - Input: Annual Motion Five Elements, Excess/Deficiency, Four Pillars Earthly Branch list
   - Output: Main Stagnation Point, Stagnation Point type (excess stagnation/deficiency stagnation), Stagnation Point location, Stagnation qi intensity (0-10 quantitative score), prone time (Trigger Point list), corresponding meridians (attacker), disease risk (stable/unstable)
   - Implementation: Overall judgment from Annual Motion (Heavenly Stem) angle —
     - Main Stagnation Point: Excess years = "what I restrict" is stagnated, Deficiency years = stagnation caused by "what restricts me"
     - Stagnation Point type: Excess years = excess stagnation (stagnation caused by being attacked), Deficiency years = deficiency stagnation (stagnation caused by self-deficiency)
     - Stagnation qi intensity: quantitative ratio of attack force vs regulatory ability (0-10 points)
     - Disease risk: judged according to stagnation qi intensity and regulatory ability (stable/medium/relatively high/high)

1. **Trigger Point calculation**:
   - Input: Annual Motion Five Elements, Excess/Deficiency, Four Pillars Earthly Branch list
   - Output: Trigger Point Earthly Branch, Six Qi Five Elements, Four Directions Five Elements, Six Qi, principal organs, auxiliary organs, source (Six Qi/Four Directions)
   - Implementation: Adopt "Six Qi as principal, Four Directions as auxiliary" strategy — Excess years find "what I restrict" (priority: what I restrict → mother of what I restrict → son of what I restrict → mother of Annual Motion → self-stagnation), Deficiency years find "what restricts me" (priority: what restricts me → mother of what restricts me → son of what restricts me → self-stagnation); each priority level first searches with Six Qi Five Elements, then supplements with Four Directions Five Elements when not found

2. **Stagnation Point calculation**:
   - Input: Trigger Point Earthly Branch, Four Pillars Earthly Branch list
   - Output: Stagnation Point Earthly Branch, Six Qi Five Elements, Four Directions Five Elements, Six Qi, principal organs, auxiliary organs, source (Six Qi/Four Directions)
   - Implementation: Adopt "Six Qi as principal, Four Directions as auxiliary" strategy — the main Five Elements of the Trigger Point uses Six Qi Five Elements, the restricted Five Elements is determined by Six Qi Five Elements, priority algorithm (restricted party → mother of restricted party → son of restricted party → mother of Trigger Point → self-stagnation), each level first searches with Six Qi Five Elements, then supplements with Four Directions Five Elements when not found

3. **Tong Shi substitution and backup warning calculation**:
   - Input: Stagnation Point Earthly Branch, Four Pillars Earthly Branch list
   - Output: Actual Stagnation Point, substitution mark, intensity correction coefficient, Tong Shi backup, concurrent wear risk, regulatory ability correction coefficient
   - Implementation:
     - Tong Shi substitution: If the Stagnation Point is not in the Four Pillars, find another Earthly Branch belonging to the same Six Qi for substitution; pay attention to the division of labor difference between Zheng Hua and Dui Hua (Zheng Hua is responsible for the main aspect, Dui Hua is responsible for the auxiliary aspect, the two coordinate)
     - Tong Shi backup: Even if the Stagnation Point is in the Four Pillars, the Tong Shi Earthly Branch also serves as a "backup brake," jointly assuming regulatory function with the Stagnation Point
     - Concurrent wear warning: Check whether Tong Shi is in the Four Pillars — if Tong Shi is also in the Four Pillars, when the Stagnation Point and Tong Shi are attacked simultaneously, regulatory ability drops significantly (correction coefficient = 0.5); if Tong Shi is not in the Four Pillars, concurrent wear risk = low

4. **Core Organs determination**:
   - Input: Actual Stagnation Point Earthly Branch
   - Output: Core Organs (principal organs + auxiliary organs)
   - Implementation: Adopt "principal+auxiliary" structure — principal organs are determined by Six Qi Five Elements (the "work content" of the Earthly Branch), auxiliary organs are determined by Four Directions Five Elements (the "hometown background" of the Earthly Branch); if Six Qi Five Elements and Four Directions Five Elements are consistent, then principal organs = auxiliary organs (single Core Organs)

5. **Affected Meridians calculation (three-layer logic)**:
   - Input: Actual Stagnation Point Earthly Branch
   - Output: First layer (directly corresponding meridian), Second layer (two meridians corresponding to Six Qi), Third layer (transmitted organs)
   - Implementation: Adopt three-layer logic —
     - First layer (most direct): meridian directly corresponding to the Earthly Branch (twelve time period correspondence, such as Zi = Gallbladder Meridian, Chou = Liver Meridian, Yin = Lung Meridian...)
     - Second layer (triggered by Six Qi attribute): two meridians corresponding to Six Qi (each Three Yin Three Yang corresponds to hand meridian + foot meridian, such as Shaoyin = Heart Meridian + Kidney Meridian)
     - Third layer (transmission, deeper): zang-fu organ transmission (such as Shaoyin Sovereign Fire → Heart and Kidney, Heart-Kidney non-interaction)

6. **Six Qi brake calculation**:
   - Input: Trigger Point Six Qi, current Principal Qi/Guest Qi
   - Output: Brake value, net attack intensity
   - Implementation: Calculate the braking effect of current Principal Qi/Guest Qi on the Trigger Point

7. **High-Risk Period/Exacerbation Period calculation (same Five Elements Earthly Branch month range)**:
   - Input: Stagnation Point Earthly Branch, Trigger Point Earthly Branch
   - Output: High-Risk Period (same Five Elements Earthly Branch month list), Exacerbation Period (same Five Elements Earthly Branch month list)
   - Implementation: Based on Four Directions Five Elements (season), find all Earthly Branches with the same Five Elements as the Stagnation Point/Trigger Point, the corresponding months are the High-Risk Period/Exacerbation Period —
     - Wood exuberance = Yin month + Mao month (1st month + 2nd month)
     - Fire exuberance = Si month + Wu month (4th month + 5th month)
     - Earth exuberance = Chen month + Xu month + Chou month + Wei month (four-season months)
     - Metal exuberance = Shen month + You month (7th month + 8th month)
     - Water exuberance = Hai month + Zi month (10th month + 11th month)
   - Note: The Five Elements grouping of High-Risk Periods and Exacerbation Periods is based on Four Directions Five Elements (direction/season Five Elements), because the Five Elements attribute of months/seasons is mainly determined by direction/four seasons

8. **Onset risk index calculation**:
   - Input: Annual Motion interaction, Sovereign Heaven-Earthly Deputy interaction, Principal-Guest Qi interaction, Trigger Point-Stagnation Point matching, Six Qi brake
   - Output: Onset risk index (-2 to +2), risk level
   - Implementation: Weighted sum (weights: Annual Motion 0.2, Sovereign Heaven-Earthly Deputy 0.2, Principal-Guest Qi 0.2, Trigger Point-Stagnation Point 0.3, Six Qi brake 0.1)

**Key code example** (JavaScript pseudocode):

```javascript
// Five Elements generation-restriction relationship
const WUXING_SHENG = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
const WUXING_KE = { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' };

// Calculate Trigger Point (Excess years)
function getYoudian_TaiGuo(suiyunWuxing, sizhuZhizhi) {
    // Attacked Five Elements = what Annual Motion restricts
    const beigongjiWuxing = WUXING_KE[suiyunWuxing];
    
    // Priority 1: Earthly Branch of what I restrict
    for (const zhi of sizhuZhizhi) {
        if (DIZHI_PROPERTIES[zhi].wuxing === beigongjiWuxing) {
            return { zhi, ...DIZHI_PROPERTIES[zhi], priority: 1 };
        }
    }
    
    // Priority 2: Earthly Branch of mother of what I restrict
    const beigongjiZhiMu = Object.keys(WUXING_SHENG).find(k => WUXING_SHENG[k] === beigongjiWuxing);
    for (const zhi of sizhuZhizhi) {
        if (DIZHI_PROPERTIES[zhi].wuxing === beigongjiZhiMu) {
            return { zhi, ...DIZHI_PROPERTIES[zhi], priority: 2 };
        }
    }
    
    // ... remaining priorities
    
    // Priority 5: self-stagnation
    for (const zhi of sizhuZhizhi) {
        if (DIZHI_PROPERTIES[zhi].wuxing === suiyunWuxing) {
            return { zhi, ...DIZHI_PROPERTIES[zhi], priority: 5, ziyou: true };
        }
    }
}

// Tong Shi correspondence table
const TONGSHI = {
    '子': '午', '午': '子',  // Shaoyin Sovereign Fire
    '丑': '未', '未': '丑',  // Taiyin Damp Earth
    '寅': '申', '申': '寅',  // Shaoyang Ministerial Fire
    '卯': '酉', '酉': '卯',  // Yangming Dry Metal
    '辰': '戌', '戌': '辰',  // Taiyang Cold Water
    '巳': '亥', '亥': '巳'   // Jueyin Wind Wood
};

// Tong Shi substitution calculation
function getTongshiTibu(yudianZhi, sizhuZhizhi) {
    if (sizhuZhizhi.includes(yudianZhi)) {
        return { shijiYudian: yudianZhi, tibu: false, xishu: 1.0 };
    }
    
    const tongshiZhi = TONGSHI[yudianZhi];
    if (sizhuZhizhi.includes(tongshiZhi)) {
        const xishu = DIZHI_PROPERTIES[tongshiZhi].zhenghua ? 1.0 : 0.8;
        return { shijiYudian: tongshiZhi, tibu: true, xishu, yuanyudian: yudianZhi };
    }
    
    return { shijiYudian: yudianZhi, tibu: false, xishu: 1.0, note: 'Both Stagnation Point and Tong Shi are not in the Four Pillars' };
}
```

## 4. Data Structure Design

### 10.9 Core Data Structures

The program uses the following core data structures:

**1. Four Pillars stem-branch structure**:
```javascript
{
    year:  { gan: '庚', zhi: '午', ganzhi: '庚午' },
    month: { gan: '壬', zhi: '午', ganzhi: '壬午' },
    day:   { gan: '辛', zhi: '亥', ganzhi: '辛亥' },
    hour:  { gan: '癸', zhi: '巳', ganzhi: '癸巳' }
}
```

**2. Five Motions and Six Qi structure**:
```javascript
{
    suiyun: {
        wuxing: '金',
        taiwai: '太过',
        dongli: 8
    },
    zhuyun: [
        { bu: '初运', wuxing: '木', taishao: '少角' },
        { bu: '二运', wuxing: '火', taishao: '太徵' },
        // ...
    ],
    keyun: [
        { bu: '初运', wuxing: '金', taishao: '太商' },
        // ...
    ],
    sitian: {
        liuqi: '少阴君火',
        wuxing: '火',
        zhenghua: true,
        xishu: 1.0
    },
    zaiquan: {
        liuqi: '阳明燥金',
        wuxing: '金',
        zhenghua: true,
        xishu: 1.0
    },
    // ... Principal Qi, Guest Qi, Guest-Principal Superimposition, etc.
}
```

**3. Dynamic Stagnation Point structure (dual-module structure)**:
```javascript
{
    // Module 1: Core Stagnation Point Analysis (macro overall judgment from Annual Motion/Heavenly Stem angle)
    hexinYudianFenxi: {
        zhuyaoYudian: '木郁',           // Main Stagnation Point
        yudianLeixing: '实郁',           // Stagnation Point type (excess stagnation/deficiency stagnation)
        yudianWeizhi: ['亥', '巳'],      // Stagnation Point location (Earthly Branch list)
        yuqiQiangdu: 3,                  // Stagnation qi intensity (0-10 quantitative score)
        yifaShijian: ['寅', '卯', '巳', '亥', '厥阴风木'],  // Prone time (Trigger Point list)
        duiyingJingluo: ['手太阴肺经', '手阳明大肠经'],       // Corresponding meridians (attacker)
        fabingFengxian: '稳定'            // Disease risk (stable/medium/relatively high/high)
    },

    // Module 2: Six Qi Brake Dynamic Stagnation Point Calculation (micro specific positioning from Six Qi/Earthly Branch angle)
    youdian: {
        zhi: '亥',
        liuqiWuxing: '木',                // Six Qi Five Elements (principal)
        sifangWuxing: '水',                // Four Directions Five Elements (auxiliary)
        liuqi: '厥阴风木',
        zhenghua: true,                    // Zheng Hua/Dui Hua
        xishu: 1.0,                        // Intensity coefficient
        zhuZangfu: '肝/胆',                // Principal organs (determined by Six Qi Five Elements)
        fuZangfu: '肾/膀胱',               // Auxiliary organs (determined by Four Directions Five Elements)
        laiyuan: '六气五行',               // Source (Six Qi Five Elements/Four Directions Five Elements)
        priority: 1                        // Priority
    },
    yudian: {
        zhi: '午',
        liuqiWuxing: '火',
        sifangWuxing: '火',
        liuqi: '少阴君火',
        zhenghua: true,
        xishu: 1.0,
        zhuZangfu: '心/小肠',
        fuZangfu: '心/小肠',
        laiyuan: '六气五行',
        priority: 2                        // Priority (mother of restricted party)
    },
    tongshi: {
        tibu: false,                       // Whether substituted
        tibuZhi: null,                     // Substitution Earthly Branch
        xishu: 1.0,                        // Intensity correction coefficient
        beifen: true,                      // Tong Shi backup (even if Stagnation Point is in Four Pillars, there is backup)
        beifenZhi: '子',                   // Tong Shi backup Earthly Branch
        tongqiMosunFengxian: '低',         // Concurrent wear risk (low/medium/high)
        tiaojieNengliXishu: 1.0           // Regulatory ability correction coefficient (0.5 during concurrent wear)
    },
    hexinZangfu: {
        zhu: '心/小肠',                    // Principal organs (determined by Six Qi Five Elements)
        fu: '心/小肠',                     // Auxiliary organs (determined by Four Directions Five Elements)
        danYi: true                        // Whether single Core Organs (true when two schools are consistent)
    },
    shouleiJingluo: {
        // Three-layer logic
        diyiceng: {                        // First layer (direct correspondence, most direct)
            jingluo: '手少阴心经',
            zangfu: '心',
            shuoming: 'Heart Meridian on duty at Wu hour, first, most direct'
        },
        dierceng: {                        // Second layer (triggered by Six Qi attribute)
            jingluo: ['手少阴心经', '足少阴肾经'],
            zangfu: ['心', '肾'],
            shuoming: 'Shaoyin Sovereign Fire corresponds to Heart Meridian + Kidney Meridian'
        },
        disanceng: {                        // Third layer (transmission, deeper)
            zangfu: ['心', '肾'],
            guanxi: 'Heart-Kidney non-interaction, Water-Fire non-coordination',
            shuoming: 'Deeper zang-fu organ transmission'
        }
    },
    gaofaqi: {
        dizhi: ['巳', '午'],               // Same Five Elements Earthly Branch list
        yuefen: 'Si month + Wu month',               // Month description
        shijian: 'Summer, Fire exuberance, about May-late July', // Time description
        wuxing: '火'                       // Five Elements attribute (based on Four Directions Five Elements)
    },
    jiazhongqi: {
        dizhi: ['亥', '子'],
        yuefen: 'Hai month + Zi month',
        shijian: 'Winter, Water exuberance, about November-late December',
        wuxing: '水'
    },
    fazhongFengxian: {
        zhishu: 1.2,
        dengji: 'Extremely high risk'
    }
}
```

**4. Treatment recommendation structure**:
```javascript
{
    yudianDuizhi: {
        yuanze: 'Clear Heart and drain fire, cool blood and calm spirit',
        zhongyao: ['黄连', '栀子', '连翘', '竹叶', '丹参', '赤芍', '酸枣仁'],
        fangji: ['朱砂安神丸', '天王补心丹（加减）'],
        zhenjiu: ['神门', '内关', '心俞', '厥阴俞', '膻中']
    },
    youdianDuizhi: {
        yuanze: 'Soothe Liver and regulate qi, clear Liver and drain fire (brake)',
        zhongyao: ['柴胡', '郁金', '香附', '龙胆草', '黄芩', '栀子'],
        fangji: ['龙胆泻肝汤', '丹栀逍遥散（加减）']
    },
    // ... Tong Shi substitution treatment, Affected Meridians treatment, prevention suggestions, etc.
    zongheFangan: {
        jixingqi: 'Mainly etiological treatment + symptomatic treatment, follow-up every week',
        huanjieqi: 'Mainly Stagnation Point treatment (supplement deficiency) + preventive care, follow-up every 2 weeks',
        richang: 'Light diet, adequate sleep, moderate exercise, peaceful mind'
    }
}
```

These data structures are clearly designed with explicit fields, facilitating data transfer between modules and result display.

## 5. User Interface Design

### 10.10 Interface Design Principles

The user interface design of the program follows the following principles:

**First, concise and clear.**
- The interface layout is concise, does not pile up too many elements, allowing users to see core information at a glance.
- Use clear visual hierarchy (titles, body text, auxiliary information) to guide users' attention.
- Avoid using overly complex color schemes and decorations, maintain a professional and refreshing style.

**Second, intuitive and easy to use.**
- The operation process is intuitive, users can complete basic operations without reading complex instructions.
- The input form design is reasonable, with clear labels and prompts, reducing user input errors.
- The positions and styles of buttons and links conform to users' usage habits, easy to click.

**Third, responsive design.**
- The interface adapts to different screen sizes (computers, tablets, mobile phones), with good display effects on various devices.
- On mobile phones, adopt a single-column layout, convenient for one-handed operation; on computers, adopt a multi-column layout, making full use of screen space.

**Fourth, information layering.**
- For ordinary users, display core conclusions (such as Core Organs, High-Risk Period, treatment suggestions), hide complex calculation processes.
- For professional users, provide the function of "expand detailed information," can view the complete calculation process and intermediate results.
- This information layering design meets the needs of both ordinary users and professional users.

### 10.11 Main Interfaces

The program includes the following main interfaces:

**1. Home/Input Interface**:
- Program name and introduction
- Birth date and time input (year, month, day, hour)
- Disease onset date and time input (optional)
- Current date and time (automatically obtained, modifiable)
- Language switch button (Chinese/English)
- "Start calculation" button

**2. Congenital Endowment Report Interface**:
- Four Pillars stem-branch display
- Annual Motion information (Five Elements, Excess/Deficiency, power value)
- Sovereign Heaven-Earthly Deputy information
- Principal Motion-Guest Motion five steps table
- Principal Qi-Guest Qi six steps table
- Special year judgment (Heavenly Concord, Annual Concord, etc.)
- Congenital Gap identification
- Constitution type judgment

**3. Dynamic Stagnation Point Report Interface (dual-module structure)**:
- **Module 1: Core Stagnation Point Analysis** (macro overall judgment from Annual Motion/Heavenly Stem angle)
  - Main Stagnation Point (such as "Wood Stagnation")
  - Stagnation Point type (excess stagnation/deficiency stagnation)
  - Stagnation Point location (Earthly Branch list)
  - Stagnation qi intensity (0-10 quantitative score, visual progress bar)
  - Prone time (Trigger Point list)
  - Corresponding meridians (attacker)
  - Disease risk (stable/medium/relatively high/high, color标识)
- **Module 2: Six Qi Brake Dynamic Stagnation Point Calculation** (micro specific positioning from Six Qi/Earthly Branch angle)
  - Power Trigger Point information (Earthly Branch, Six Qi Five Elements, Four Directions Five Elements, Six Qi, Zheng Hua/Dui Hua, principal organs, auxiliary organs, source (Six Qi/Four Directions), priority)
  - Core Stagnation Point information (Earthly Branch, Six Qi Five Elements, Four Directions Five Elements, Six Qi, Zheng Hua/Dui Hua, principal organs, auxiliary organs, source (Six Qi/Four Directions), priority)
  - Core damaged organs
  - First Affected Meridians (three-layer logic: first layer directly corresponding meridian, second layer Six Qi corresponding two meridians, third layer transmitted organs, expandable/collapsible)
  - Tong Shi backup and warning (Tong Shi backup Earthly Branch, concurrent wear risk (low/medium/high, color标识), regulatory ability correction coefficient)
  - Six Qi brake information
  - High-Risk Period (same Five Elements Earthly Branch month list, timeline visualization)
  - Exacerbation Period (same Five Elements Earthly Branch month list, timeline visualization)
  - Onset risk index and risk level

**4. Treatment Recommendation Interface**:
- Stagnation Point treatment (treatment method, Chinese herbs, formulas, acupuncture)
- Trigger Point treatment (brake)
- Tong Shi substitution treatment
- Affected Meridians treatment
- High-Risk Period/Exacerbation Period prevention suggestions
- Comprehensive treatment plan (acute phase, remission phase, daily care)

**5. Four Diagnostic Methods Auxiliary Interface**:
- Inspection reference (facial color, tongue manifestation corresponding to Five Motions and Six Qi)
- Auscultation-olfaction reference (sounds, odors corresponding to Five Motions and Six Qi)
- Inquiry reference (symptoms, medical history, lifestyle corresponding to Five Motions and Six Qi)
- Palpation reference (pulse condition, abdominal diagnosis corresponding to Five Motions and Six Qi)
- Four Diagnostic Methods Synthesis auxiliary judgment (comparison of calculation results and Four Diagnostic Methods results)

**6. Comprehensive Report Interface**:
- Core conclusion summary
- Integrated display of each module report
- Export/print function
- Save to local function

**7. Auxiliary Interfaces**:
- Terminology glossary (detailed explanation of 84 core concepts)
- Usage help
- About the program (open source information, author, version, GitHub link)

## 6. Implementation of Chinese and English Versions

### 10.12 Implementation of Chinese-English Bilingual Support

The program simultaneously supports Chinese and English languages, implemented through the following methods:

**1. Language switch mechanism**:
- There is a language switch button (中文/English) at the top of the program, users can switch at any time.
- After switching languages, all text on the interface (titles, labels, buttons, descriptions, etc.) will switch to the corresponding language.
- The user's language preference is saved in localStorage, and the language selected last time is automatically used when opening the program next time.

**2. Multilingual resource files**:
- The program uses independent multilingual resource files (zh.js and en.js), storing Chinese and English interface text respectively.
- All interface text is read from resource files, rather than hard-coded in HTML.
- This design makes it very easy to add new languages (such as Japanese, Korean, etc.) — only need to add a new resource file.

**3. Terminology strategy for core concepts**:
- For core concepts in ancient classics (such as Si Tian, Zai Quan, Sui Yun, etc.), adopt the format of "Chinese + Pinyin + English functional description" to avoid translation ambiguity.
  - Chinese interface: 司天 (Si Tian)
  - English interface: 司天 (Si Tian, the 3rd guest qi-step governing the first half of the year)
- For original concepts of this book (such as Trigger Point, Stagnation Point, Tong Shi, etc.), adopt the format of "Chinese + English functional description" without Pinyin.
  - Chinese interface: 诱点 (Trigger Point)
  - English interface: 诱点 (Trigger Point)
- Use the complete format when first appearing, and can simplify in subsequent appearances (only display Chinese or English).

**4. Consistency of algorithm logic**:
- The algorithm logic of the Chinese and English versions is completely consistent, only the interface display language is different.
- All calculations (stem-branch conversion, Five Motions and Six Qi calculation, Dynamic Stagnation Point calculation, etc.) use the same code, no differences due to different languages.
- This ensures that the calculation results of the Chinese and English versions are completely consistent.

### 10.13 Special Considerations for the English Version

When implementing the English version, the following special issues need to be considered:

**First, cultural differences.**
- Five Motions and Six Qi is a product of traditional Chinese culture, and many concepts have no directly corresponding vocabulary in English.
- Therefore, for core concepts, retain the original Chinese text (with Pinyin), plus an English functional description, rather than forcibly translating.
- This not only retains the original flavor of the concept, but also allows English readers to understand the meaning of the concept.

**Second, terminology consistency.**
- When the same concept appears in different places, use the same English translation to maintain terminology consistency.
- Establish a terminology glossary to ensure all translations follow unified standards.

**Third, typography adaptation.**
- English text is usually longer than Chinese, need to adjust the interface layout to ensure English text can be fully displayed without being truncated.
- In responsive design, specially consider the display effect of the English interface on mobile phones.

## 7. Open Source and Deployment

### 10.14 Open Source Strategy

This program is completely open source, adopting the following open source strategy:

**1. Open source license**:
- Adopt the MIT license (a permissive open source license), allowing anyone to freely use, modify, and distribute this program, including commercial use.
- The reason for choosing the MIT license is: it is permissive, simple, and widely accepted, can maximize the promotion of program dissemination and use.

**2. Source code hosting**:
- Source code is hosted on GitHub (repository address: https://github.com/qihuge/wuyun-liuqi-en).
- Anyone can view, download, Fork, and submit Pull Requests.
- At the same time, the Chinese version program is also open source in another repository (https://github.com/qihuge/wuyun-liuqi-bianzheng).

**3. Documentation and comments**:
- There are detailed comments in the source code, explaining the function, input, output, and implementation logic of each function.
- Provide complete usage documentation and development documentation to help users understand and use the program.
- This book ("Five Motions and Six Qi Temporal Medicine") is the theoretical documentation of the program, elaborating on the theory and algorithm behind the program.

**4. Community participation**:
- Welcome anyone to participate in the development and improvement of the program — submit Bug reports, feature suggestions, code contributions, etc.
- Interact with the community through GitHub's Issues and Pull Request mechanisms.
- Regularly update the program, fix Bugs, and add new features.

### 10.15 Deployment Methods

The program adopts the following deployment methods:

**1. GitHub Pages deployment**:
- The program is a pure static website (HTML/CSS/JavaScript), can be directly deployed on GitHub Pages.
- Deployment address: https://qihuge.github.io/wuyun-liuqi-en/
- GitHub Pages is a free static website hosting service, no need to maintain a server yourself, simple deployment, stable access.

**2. Local operation**:
- Users can also download the program to the local, directly open the index.html file with a browser to run.
- No need to install any dependencies, no need for a server, out of the box.

**3. Other deployment methods**:
- The program can also be deployed on other static website hosting services (such as Netlify, Vercel, Cloudflare Pages, etc.).
- Can also be packaged as a desktop application (through Electron) or mobile application (through Cordova, Capacitor, etc.), to meet the needs of different scenarios.

### 10.16 Version Management

The program adopts semantic versioning (Semantic Versioning):

- Version number format: Major version number.Minor version number.Revision number (such as 1.0.0)
- Major version number: incompatible API modifications
- Minor version number: downward-compatible functional additions
- Revision number: downward-compatible problem corrections

Through Git's Tag function, mark the release of each version. At the same time, on the GitHub Releases page, provide update notes and download links for each version.

## 8. Program Limitations and Future Improvement Directions

### 10.17 Current Program Limitations

Although the program has implemented the core functions of Five Motions and Six Qi calculation, there are still some limitations:

**First, algorithm parameters need to be verified.**
- Many parameters used in the program (such as Heavenly Stem power values, Earthly Branch intensity coefficients, stagnation-eruption thresholds, onset risk index weights, etc.) are based on theoretical derivation and empirical settings, marked as [to be verified].
- Whether these parameters are accurate needs to be verified and adjusted through large-sample clinical data.
- Before parameter verification is completed, the program's calculation results can only be used as a reference and cannot be used as the sole basis for diagnosis.

**Second, the Four Diagnostic Methods Synthesis function is relatively preliminary.**
- Currently, the program's Four Diagnostic Methods auxiliary function mainly provides "reference information" (such as the correspondence between facial color, tongue manifestation, pulse condition and Five Motions and Six Qi), rather than true "Four Diagnostic Methods Synthesis."
- True Four Diagnostic Methods Synthesis requires users to input Four Diagnostic Methods results, then the program compares and comprehensively judges the Four Diagnostic Methods results and calculation results. This function has not been fully implemented.

**Third, lack of personalized treatment plans.**
- Currently, the program's treatment recommendation function is mainly based on "general suggestions" from calculation results, rather than true "personalized treatment plans."
- True personalized treatment plans need to combine the patient's specific symptoms, signs, tongue and pulse, medical history, etc., and be treated based on syndrome differentiation by a professional TCM physician. The program currently cannot do this.

**Fourth, limited data samples.**
- Currently, the program's verification is mainly based on a few cases and theoretical derivation, lacking large-sample clinical data support.
- Need to collect a large amount of clinical data to systematically verify and optimize the program's calculation results.

**Fifth, user experience needs to be improved.**
- The program's interface design and interactive experience still have room for improvement, can be more beautiful, smooth, and easy to use.
- Can add more visualization charts (such as Five Motions and Six Qi radar charts, onset risk timeline charts, etc.), making the results more intuitive.

### 10.18 Future Improvement Directions

In response to the above limitations, future improvement directions include:

**First, large-sample clinical verification and parameter optimization.**
- Cooperate with medical institutions and research teams to collect large-sample clinical data (patients' birth time, Four Diagnostic Methods results, medical history, treatment effects, etc.).
- Systematically verify the program's calculation results, count indicators such as calculation accuracy, sensitivity, and specificity.
- Based on verification results, optimize algorithm parameters (such as power values, coefficients, thresholds, weights, etc.), improve calculation accuracy.

**Second, improve the Four Diagnostic Methods Synthesis function.**
- Add Four Diagnostic Methods result input function, allowing users to input specific results of inspection, auscultation-olfaction, inquiry, and palpation.
- Implement automatic comparison and comprehensive judgment of Four Diagnostic Methods results and calculation results, giving an assessment of "calculation and Four Diagnostic Methods consistent/inconsistent/partially consistent."
- When calculation and Four Diagnostic Methods are inconsistent, give possible cause analysis and suggestions for further examination.

**Third, add personalized treatment plan recommendations.**
- Combine the Four Diagnostic Methods results and symptoms input by users, recommend more personalized treatment plans (specific Chinese medicine formulas, acupuncture points, dietary therapy recipes, etc.).
- Add "formula modification" function, according to the user's specific symptoms, recommend formula modifications and adjustments.
- Add "treatment cycle planning" function, according to the disease stage (acute phase, remission phase, stable phase), recommend different treatment priorities and follow-up frequencies.

**Fourth, add data visualization and report export functions.**
- Add more visualization charts, such as Five Motions and Six Qi radar charts, onset risk timeline charts, constitution type charts, etc., making the results more intuitive.
- Add report export function, support exporting calculation results to PDF, image and other formats, convenient for saving and sharing.
- Add "history" function, save users' previous calculation results, can compare changes in calculation results at different times.

**Fifth, mobile terminal optimization and applicationization.**
- Further optimize the mobile terminal interface and interactive experience, giving mobile users a better user experience.
- Consider packaging the program as a mobile application (iOS and Android), providing push reminder function (such as reminding users to pay attention to prevention before the High-Risk Period arrives).
- Add "health diary" function, allowing users to record their physical condition and symptom changes, compare with calculation results.

**Sixth, AI and big data integration.**
- Explore applying AI technology (such as machine learning, natural language processing) to Five Motions and Six Qi calculation, through big data training, improve calculation accuracy.
- Explore combining Five Motions and Six Qi algorithms with wearable devices (such as smart watches, health monitoring devices), achieving real-time health monitoring and disease early warning.
- Explore integrating Five Motions and Six Qi algorithms into intelligent robots and AI assistants, providing users with personalized health consultation and health preservation suggestions.

## 9. Chapter Summary

This chapter elaborates on the computer implementation of the Five Motions and Six Qi algorithm, including the overall approach of program implementation, architecture design, core algorithm modules, data structures, user interface, Chinese-English version implementation, open source deployment, as well as limitations and future improvement directions.

Main contents include:

First, **overall approach of program implementation**. Elaborated on why program implementation is needed (improve efficiency, ensure accuracy, large-scale application, promote dissemination, provide algorithm foundation for AI), as well as program implementation principles (open source and transparent, modular design, Chinese-English bilingual, cross-platform compatibility, user-friendly) and technology selection (native HTML/CSS/JavaScript, GitHub Pages deployment).

Second, **overall architecture of the program**. Divided the program into 8 core modules (input, stem-branch calculation, Five Motions and Six Qi calculation, Dynamic Stagnation Point calculation, treatment recommendation, Four Diagnostic Methods auxiliary, output, auxiliary), and elaborated on the data flow between modules.

Third, **implementation of core algorithm modules**. Elaborated on the core functions and implementation methods of the stem-branch calculation module, Five Motions and Six Qi calculation module, and Dynamic Stagnation Point calculation module, and gave key code examples (JavaScript pseudocode). Among them, the Dynamic Stagnation Point calculation module adopts a **dual-module structure** — Core Stagnation Point Analysis (macro overall judgment from Annual Motion/Heavenly Stem angle, including main Stagnation Point, Stagnation Point type, stagnation qi intensity, disease risk, etc.) + Six Qi Brake Dynamic Stagnation Point Calculation (micro specific positioning from Six Qi/Earthly Branch angle, including Power Trigger Point, Core Stagnation Point, Core damaged organs, First Affected Meridians (three-layer logic), Tong Shi backup and warning (including concurrent wear risk), High-Risk Period/Exacerbation Period (same Five Elements Earthly Branch month range), etc.).

Fourth, **data structure design**. Defined core data structures such as Four Pillars stem-branch, Five Motions and Six Qi, Dynamic Stagnation Point (dual-module structure), treatment recommendation, ensuring clear and consistent data transfer between modules. The Dynamic Stagnation Point data structure includes two sub-structures of Core Stagnation Point Analysis and Six Qi Brake Dynamic Stagnation Point Calculation, as well as extended fields such as Tong Shi backup and warning, three-layer Affected Meridians, same Five Elements Earthly Branch month High-Risk Period/Exacerbation Period, etc.

Fifth, **user interface design**. Elaborated on interface design principles (concise and clear, intuitive and easy to use, responsive design, information layering), as well as 7 main interfaces (home/input, congenital endowment report, Dynamic Stagnation Point report, treatment recommendation, Four Diagnostic Methods auxiliary, comprehensive report, auxiliary interface).

Sixth, **implementation of Chinese and English versions**. Elaborated on the implementation methods of Chinese-English bilingual support (language switch mechanism, multilingual resource files, core concept terminology strategy, algorithm logic consistency), as well as special considerations for the English version (cultural differences, terminology consistency, typography adaptation).

Seventh, **open source and deployment**. Elaborated on open source strategy (MIT license, GitHub hosting, detailed documentation and comments, community participation), deployment methods (GitHub Pages, local operation, other deployment methods), and version management (semantic versioning).

Eighth, **program limitations and future improvement directions**. Frankly pointed out 5 limitations of the current program (algorithm parameters need to be verified, Four Diagnostic Methods Synthesis function is preliminary, lack of personalized treatment plans, limited data samples, user experience needs to be improved), and proposed 6 future improvement directions (large-sample clinical verification and parameter optimization, improve Four Diagnostic Methods Synthesis, add personalized treatment plans, add data visualization and report export, mobile terminal optimization and applicationization, AI and big data integration).

Program implementation is a key step in transforming Five Motions and Six Qi from theory to practice. Through open source computer programs, the calculation of Five Motions and Six Qi becomes efficient, accurate, and repeatable, providing tool support for large-scale clinical verification and application. At the same time, the open source and transparency of the program also ensures the traceability and verifiability of the algorithm, conforming to the norms of scientific research.

In the next chapter, we will elaborate on verification methodology — how to verify the accuracy and effectiveness of Five Motions and Six Qi calculation through scientific methods.

---

**Items to be verified in this chapter**:
1. All algorithm parameters in the program (power values, coefficients, thresholds, weights, etc.) are marked as [to be verified], need to be verified through large-sample clinical data.
2. The stagnation qi intensity quantification method of Core Stagnation Point Analysis (0-10 point scoring standard) needs further research and verification.
3. The regulatory ability correction coefficient of Tong Shi backup and concurrent wear (0.5 during concurrent wear) needs further verification.
4. The same Five Elements Earthly Branch month ranges for High-Risk Periods and Exacerbation Periods need to be verified through large-sample clinical data.
5. The program's interface design and user experience need to be continuously optimized through user testing.
6. The accuracy and consistency of Chinese-English translation need to be reviewed by professionals.
7. The program's performance and compatibility need to be tested on different browsers and devices.

**Figures and tables needed for this chapter**:
1. Program overall architecture diagram (8 modules and data flow, including Dynamic Stagnation Point dual-module structure).
2. Core algorithm flowchart (stem-branch calculation → Five Motions and Six Qi → Core Stagnation Point Analysis → Dynamic Stagnation Point calculation → treatment → Four Diagnostic Methods).
3. Dynamic Stagnation Point dual-module structure schematic diagram (Core Stagnation Point Analysis + Six Qi Brake Dynamic Stagnation Point Calculation).
4. Tong Shi backup and concurrent wear mechanism schematic diagram.
5. High-Risk Period/Exacerbation Period same Five Elements Earthly Branch month timeline diagram.
6. Data structure relationship diagram.
7. User interface wireframe diagram (7 main interfaces, including Dynamic Stagnation Point report dual-module interface).
8. Chinese-English terminology format example diagram.
9. Open source deployment flowchart.
10. Program limitations and improvement directions comparison table.
