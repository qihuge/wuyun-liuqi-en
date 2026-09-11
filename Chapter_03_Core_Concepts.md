# Chapter 3: Re-understanding Core Concepts — From Symbols to Computation

## 1. Why Re-understand Core Concepts

In Chapter 2, we梳理 the academic origins of Five Motions and Six Qi theory. Through this梳理, we can see that in over two thousand years of development, Five Motions and Six Qi theory has accumulated a large number of concepts and terms — Heavenly Stems (Tian Gan), Earthly Branches (Di Zhi), Five Elements (Wu Xing), Six Qi (Liu Qi), Three Yin Three Yang (San Yin San Yang), Annual Motion (Sui Yun), Sovereign Heaven (Si Tian), Earthly Deputy (Zai Quan), Principal Qi (Zhu Qi), Guest Qi (Ke Qi), Guest-Principal Superimposition (Ke Zhu Jia Lin), Heavenly Concord (Tian Fu), Annual Concord (Sui Hui), Excess (Tai Guo), Deficiency (Bu Ji), Prevailing Qi (Sheng Qi), Counteracting Qi (Fu Qi), Stagnant Qi (Yu Qi), Stagnation Release (Yu Fa)... These concepts constitute the vast system of Five Motions and Six Qi theory.

However, in traditional interpretations, these concepts are often understood as "philosophical concepts" or "descriptive terms," rather than "computable symbols." For example, "Five Elements" is usually interpreted as "five basic substances or attributes," "Six Qi" is usually interpreted as "six climatic types," and "Sovereign Heaven and Earthly Deputy" is usually interpreted as "the climatic governors of the first and second half of the year." Although these interpretations help understand the meaning of the concepts, they obscure a key fact: **these concepts are essentially computational symbols, and their value lies not in "what they describe," but in "how they participate in computation."**

To use an analogy, in mathematics, the value of the symbol "π" lies not in "what it describes about a circle," but in that it can participate in computation — π × r² = area of a circle, 2 × π × r = circumference of a circle. Similarly, in Five Motions and Six Qi, the value of the symbol "Annual Motion" lies not in "what climate it describes about a year," but in that it can participate in computation — Annual Motion Five Elements × Excess/Deficiency → Prevailing Qi → Counteracting Qi → Stagnation → Stagnation Release → Trigger Point → Stagnation Point → Core Zang-Fu → High-Incidence Period.

Therefore, the core task of this chapter is: **Re-understand the core concepts of Five Motions and Six Qi from "philosophical concepts" to "computable symbols," clarifying the input, computational rules, and output of each symbol, laying the foundation for subsequent algorithmic modeling.**

In the process of re-understanding, we follow the following three principles:

**First, symbols are computational units.** Each core concept is a computational unit with clear input, computational rules, and output. Concepts that cannot participate in computation are not core concepts but auxiliary explanations.

**Second, symbols have hierarchy.** Core concepts are divided into different levels — atomic symbols (indivisible), derived symbols (calculated from atomic symbols), composite symbols (combined from derived symbols). Symbols at different levels have different computational rules.

**Third, symbols are falsifiable.** The computational result of each symbol should be testable — it can be verified through actual observation or experiment whether it is correct. Symbols that cannot be tested are not scientific symbols but philosophical speculation.

Below, we re-understand the core concepts of Five Motions and Six Qi one by one, according to hierarchy.

## 2. Atomic Symbols: Indivisible Computational Units

Atomic symbols are the most basic units in Five Motions and Six Qi computation, and cannot be further divided into smaller symbols. Atomic symbols include: Heavenly Stems, Earthly Branches, Five Elements, Six Qi, Three Yin Three Yang, and Twenty-Four Solar Terms.

### 3.1 Heavenly Stems (Tian Gan): From Timekeeping Symbols to Computational Codes

**Traditional understanding:** Heavenly Stems are ten symbols — Jia, Yi, Bing, Ding, Wu, Ji, Geng, Xin, Ren, Gui — used for counting years, months, days, and hours.

**Re-understanding:** Heavenly Stems are a **base-10 computational code**, and each Heavenly Stem code contains three information bits: Five Elements attribute, Yin-Yang attribute (Excess/Deficiency), and dynamic value.

Specifically:

| Heavenly Stem | Five Elements Attribute | Yin-Yang Attribute | Dynamic Value | Computational Meaning |
|---------------|------------------------|-------------------|---------------|----------------------|
| Jia | Earth | Yang (Excess) | +10 | Earth Motion Excess, actively attacks Water |
| Ji | Earth | Yin (Deficiency) | -10 | Earth Motion Deficiency, passively attacked by Wood |
| Yi | Metal | Yin (Deficiency) | -8 | Metal Motion Deficiency, passively attacked by Fire |
| Geng | Metal | Yang (Excess) | +8 | Metal Motion Excess, actively attacks Wood |
| Bing | Water | Yang (Excess) | +8 | Water Motion Excess, actively attacks Fire |
| Xin | Water | Yin (Deficiency) | -8 | Water Motion Deficiency, passively attacked by Earth |
| Ding | Wood | Yin (Deficiency) | -6 | Wood Motion Deficiency, passively attacked by Metal |
| Ren | Wood | Yang (Excess) | +6 | Wood Motion Excess, actively attacks Earth |
| Wu | Fire | Yang (Excess) | +6 | Fire Motion Excess, actively attacks Metal |
| Gui | Fire | Yin (Deficiency) | -6 | Fire Motion Deficiency, passively attacked by Water |

**Computational rules:**
- Input: Year Stem (Jia/Yi/Bing/Ding/Wu/Ji/Geng/Xin/Ren/Gui)
- Operation: Look up table to obtain Five Elements attribute, Yin-Yang attribute, dynamic value
- Output: Annual Motion Five Elements + Excess/Deficiency + Dynamic value

**Falsifiability:** If the disease spectrum in a Jia year (Earth Motion Excess) has no statistically significant difference from the disease spectrum calculated for Earth Motion Excess (spleen-stomach diseases, damp diseases), then the computational meaning of the Heavenly Stem code is falsified.

### 3.2 Earthly Branches (Di Zhi): From Timekeeping Symbols to Computational Codes

**Traditional understanding:** Earthly Branches are twelve symbols — Zi, Chou, Yin, Mao, Chen, Si, Wu, Wei, Shen, You, Xu, Hai — used for counting years, months, days, and hours.

**Re-understanding:** Earthly Branches are a **base-12 computational code**, and each Earthly Branch code contains four information bits: Five Elements attribute, Six Qi attribute, Zheng-Hua/Dui-Hua (direct/indirect transformation), and Zang-Fu correspondence.

Specifically:

| Earthly Branch | Five Elements Attribute | Six Qi Attribute | Zheng/Dui Hua | Coefficient | Zang-Fu Correspondence |
|----------------|------------------------|-----------------|---------------|-------------|----------------------|
| Zi | Water | Shaoyin Sovereign Fire | Dui Hua | 0.7 | Heart/Small Intestine |
| Wu | Fire | Shaoyin Sovereign Fire | Zheng Hua | 1.0 | Heart/Small Intestine |
| Chou | Earth | Taiyin Damp Earth | Dui Hua | 0.7 | Spleen/Stomach |
| Wei | Earth | Taiyin Damp Earth | Zheng Hua | 1.0 | Spleen/Stomach |
| Yin | Wood | Shaoyang Ministerial Fire | Dui Hua | 0.7 | Gallbladder/Liver (Triple Burner/Pericardium) |
| Shen | Metal | Shaoyang Ministerial Fire | Zheng Hua | 1.0 | Gallbladder/Liver (Triple Burner/Pericardium) |
| Mao | Wood | Yangming Dry Metal | Dui Hua | 0.7 | Lung/Large Intestine |
| You | Metal | Yangming Dry Metal | Zheng Hua | 1.0 | Lung/Large Intestine |
| Chen | Earth | Taiyang Cold Water | Dui Hua | 0.7 | Kidney/Bladder |
| Xu | Earth | Taiyang Cold Water | Zheng Hua | 1.0 | Kidney/Bladder |
| Si | Fire | Jueyin Wind Wood | Dui Hua | 0.7 | Liver/Gallbladder |
| Hai | Water | Jueyin Wind Wood | Zheng Hua | 1.0 | Liver/Gallbladder |

**Computational rules:**
- Input: Earthly Branch (Zi/Chou/Yin/Mao/Chen/Si/Wu/Wei/Shen/You/Xu/Hai)
- Operation: Look up table to obtain Five Elements attribute, Six Qi attribute, Zheng/Dui Hua, coefficient, Zang-Fu correspondence
- Output: Five Elements + Six Qi + Coefficient + Zang-Fu

**Key finding:** The Five Elements attribute and Six Qi attribute of Earthly Branches are **separated**. For example, the Five Elements attribute of Zi is Water, but its Six Qi attribute is Shaoyin Sovereign Fire; the Five Elements attribute of Wu is Fire, but its Six Qi attribute is also Shaoyin Sovereign Fire. This separation is key to Five Motions and Six Qi computation — the same Earthly Branch uses its Five Elements attribute in Five Motions computation and its Six Qi attribute in Six Qi computation.

**Falsifiability:** If the Six Qi attribute of Earthly Branches has no statistically significant correlation with actual climate, then the Six Qi attribute of the Earthly Branch code is falsified.

### 3.3 Five Elements (Wu Xing): From Philosophical Concept to Computational Relationship

**Traditional understanding:** Five Elements are five basic substances or attributes — Wood, Fire, Earth, Metal, Water — with generation and restriction relationships among them.

**Re-understanding:** Five Elements are a **5-node directed graph computational structure**, and each node (Five Elements) has two outgoing edges (what generates me, what I generate) and two incoming edges (what restricts me, what I restrict), totaling four computational edges.

Specifically:

```
        What generates me (Mother)
           ↑
           |
What restricts me → [Five Elements] → What I restrict
           |
           ↓
        What I generate (Child)
```

Taking "Wood" as an example:
- What generates me (Mother): Water (Water generates Wood)
- What I generate (Child): Fire (Wood generates Fire)
- What restricts me: Metal (Metal restricts Wood)
- What I restrict: Earth (Wood restricts Earth)

**Computational rules:**
- Input: A Five Elements attribute
- Operation: Look up Five Elements generation-restriction table
- Output: What generates me, what I generate, what restricts me, what I restrict

**Key finding:** The computational relationship of Five Elements is **closed** — between any two Five Elements, a relationship can be established through generation-restriction. This closure allows Five Elements computation to form complete logical chains, which is the foundation for Five Motions and Six Qi to perform complex calculations.

**Falsifiability:** If the Five Elements generation-restriction relationship has no statistically significant correlation with actual physiological and pathological relationships, then the Five Elements computational structure is falsified.

### 3.4 Six Qi (Liu Qi): From Climate Description to Computational Parameter

**Traditional understanding:** Six Qi are six climatic types — Wind, Cold, Summer-Heat, Dampness, Dryness, Fire — paired with Three Yin Three Yang.

**Re-understanding:** Six Qi are a **6-state computational parameter**, and each state (Six Qi) has three information bits: Five Elements attribute, Yin-Yang attribute (Three Yin Three Yang), and climatic effect.

Specifically:

| Six Qi | Five Elements Attribute | Three Yin Three Yang | Climatic Effect | Computational Meaning |
|--------|------------------------|---------------------|----------------|----------------------|
| Jueyin Wind Wood | Wood | Jueyin (One Yin) | Wind, Warmth, Generation | Dredging, ascending |
| Shaoyin Sovereign Fire | Fire | Shaoyin (Two Yin) | Heat, Growth | Warming, brightness |
| Shaoyang Ministerial Fire | Fire | Shaoyang (One Yang) | Summer-Heat, Growth | Intense heat, traveling |
| Taiyin Damp Earth | Earth | Taiyin (Three Yin) | Dampness, Transformation | Moistening, carrying |
| Yangming Dry Metal | Metal | Yangming (Two Yang) | Dryness, Collection | Convergence, clearing |
| Taiyang Cold Water | Water | Taiyang (Three Yang) | Cold, Storage | Coldness, sealing |

**Computational rules:**
- Input: A Six Qi state
- Operation: Look up Six Qi attribute table
- Output: Five Elements attribute + Three Yin Three Yang + Climatic effect

**Key finding:** There are two "Fires" in Six Qi — Shaoyin Sovereign Fire and Shaoyang Ministerial Fire. Both have the Five Elements attribute of Fire, but their Three Yin Three Yang attributes differ (Shaoyin vs. Shaoyang), and their climatic effects also differ (Sovereign Fire governs "brightness," Ministerial Fire governs "position"). This "one fire divided into two" is key to Six Qi computation — Sovereign Fire and Ministerial Fire cannot be confused in computation, as they correspond to different Zang-Fu and physiological functions.

**Falsifiability:** If Six Qi states have no statistically significant correlation with actual climatic types, then the Six Qi computational parameter is falsified.

### 3.5 Three Yin Three Yang (San Yin San Yang): From Classification Labels to Computational Sequence

**Traditional understanding:** Three Yin Three Yang are six classification labels — Jueyin, Shaoyin, Taiyin, Shaoyang, Yangming, Taiyang — used to mark the Yin-Yang attribute and quantity of Six Qi.

**Re-understanding:** Three Yin Three Yang are a **6-element cyclic computational sequence**, whose排列 order determines the calculation rules for the six steps of Guest Qi.

Specifically, the cyclic order of Three Yin Three Yang is:

```
Jueyin → Shaoyin → Taiyin → Shaoyang → Yangming → Taiyang → (back to Jueyin)
```

The key to this order is: it is not arranged by "yin from less to more" or "yang from less to more," but by the **operational order of the six steps of Guest Qi**. Specifically:
- Jueyin (One Yin) → Shaoyin (Two Yin) → Taiyin (Three Yin): Yin qi from less to more
- Taiyin (Three Yin) → Shaoyang (One Yang): Extreme yin generates yang
- Shaoyang (One Yang) → Yangming (Two Yang) → Taiyang (Three Yang): Yang qi from less to more
- Taiyang (Three Yang) → Jueyin (One Yin): Extreme yang generates yin

**Computational rules:**
- Input: Sovereign Heaven Six Qi (Third Qi)
- Operation: According to the Three Yin Three Yang cyclic order, push forward 2 steps to get First Qi, push backward 3 steps to get Final Qi (Earthly Deputy)
- Output: Six steps of Guest Qi (First Qi to Final Qi)

**Key finding:** The cyclic order of Three Yin Three Yang is **closed** — starting from any point and pushing 6 steps in order, one returns to the origin. This closure allows the calculation of the six steps of Guest Qi to form a complete cycle, which is the foundation for Six Qi computation to proceed.

**Falsifiability:** If the six steps of Guest Qi calculated according to the Three Yin Three Yang order have no statistically significant correlation with the seasonal changes of actual climate, then the Three Yin Three Yang computational sequence is falsified.

### 3.6 Twenty-Four Solar Terms (Er Shi Si Jie Qi): From Seasonal Division to Computational Scale

**Traditional understanding:** Twenty-Four Solar Terms are twenty-four solar terms — Beginning of Spring, Rain Water, Awakening of Insects, Spring Equinox, etc. — used to divide the four seasons of the year.

**Re-understanding:** Twenty-Four Solar Terms are a **24-scale computational ruler**, with every 4 scales forming one qi-step, totaling 6 qi-steps, each approximately 60 days.

Specifically:

| Qi Step | Solar Term Range | Approx. Days | Principal Qi |
|---------|-----------------|-------------|-------------|
| First Qi | Great Cold → Beginning of Spring → Rain Water → Awakening of Insects | ~60 days | Jueyin Wind Wood |
| Second Qi | Spring Equinox → Pure Brightness → Grain Rain → Beginning of Summer | ~60 days | Shaoyin Sovereign Fire |
| Third Qi | Grain Buds → Grain in Ear → Summer Solstice → Minor Heat | ~60 days | Shaoyang Ministerial Fire |
| Fourth Qi | Major Heat → Beginning of Autumn → End of Heat → White Dew | ~60 days | Taiyin Damp Earth |
| Fifth Qi | Autumn Equinox → Cold Dew → Frost's Descent → Beginning of Winter | ~60 days | Yangming Dry Metal |
| Final Qi | Minor Snow → Major Snow → Winter Solstice → Minor Cold | ~60 days | Taiyang Cold Water |

**Computational rules:**
- Input: Date
- Operation: Look up solar term table, determine current solar term, then determine which qi-step it belongs to
- Output: Qi-step number (1-6) + Principal Qi + Guest Qi

**Key finding:** The starting point of the Twenty-Four Solar Terms is **Great Cold**, not Beginning of Spring. This is an important difference between Five Motions and Six Qi computation and the traditional lunar calendar — the "year" in Five Motions and Six Qi begins with Great Cold, not Beginning of Spring. This choice of starting point is related to the degree of the sun's ecliptic longitude (at Great Cold, the sun's ecliptic longitude is 300°).

**Falsifiability:** If the qi-steps divided according to the Twenty-Four Solar Terms have no statistically significant correlation with the seasonal changes of actual climate, then the Twenty-Four Solar Terms computational scale is falsified.

## 3. Derived Symbols: Calculated from Atomic Symbols

Derived symbols are symbols calculated from atomic symbols through fixed rules, including: Annual Motion, Principal Motion, Guest Motion, Principal Qi, Guest Qi, Sovereign Heaven, Earthly Deputy, Intermediary Qi, and Balanced Qi.

### 3.7 Annual Motion (Sui Yun): From Annual Motion Outline to Computable Parameter

**Traditional understanding:** Annual Motion (also called Central Motion or Great Motion) is the Five Motions qi that governs the entire year, determined by the Year Stem.

**Re-understanding:** Annual Motion is a **computational parameter directly calculated from the Heavenly Stem code**, containing three information bits: Five Elements attribute, Excess/Deficiency, and dynamic value.

**Computational rules:**
- Input: Year Stem (atomic symbol)
- Operation: Look up Heavenly Stem code table (see Section 3.1)
- Output: Annual Motion Five Elements + Excess/Deficiency + Dynamic value

**Key finding:** Annual Motion is the **starting point** of Five Motions and Six Qi computation — all subsequent computations (Prevailing Qi, Counteracting Qi, Stagnant Qi, Stagnation Release, Trigger Point, Stagnation Point, etc.) begin with Annual Motion. The Five Elements attribute of Annual Motion determines the direction of attack, the Excess/Deficiency of Annual Motion determines the nature of attack (active attack vs. passive attack), and the dynamic value of Annual Motion determines the intensity of attack.

**Falsifiability:** If Annual Motion Five Elements has no statistically significant correlation with the disease spectrum of that year, then the Annual Motion computational parameter is falsified.

### 3.8 Sovereign Heaven (Si Tian): From First-Half Governor to Computational Coordinate

**Traditional understanding:** Sovereign Heaven is the Third Qi of Guest Qi, governing the climatic changes of the first half of the year, determined by the Year Branch.

**Re-understanding:** Sovereign Heaven is a **computational coordinate directly calculated from the Earthly Branch code**, which determines the "origin" (Third Qi) of the six steps of Guest Qi.

**Computational rules:**
- Input: Year Branch (atomic symbol)
- Operation: Look up Earthly Branch Six Qi attribute table (see Section 3.2), the Six Qi attribute of the Year Branch is Sovereign Heaven
- Output: Sovereign Heaven Six Qi

**Key finding:** Sovereign Heaven is the **coordinate origin** of Guest Qi computation — knowing Sovereign Heaven (Third Qi), one can calculate the entire content of the six steps of Guest Qi according to the Three Yin Three Yang cyclic order. The Six Qi attribute of Sovereign Heaven determines the climatic基调 of the first half of the year and also determines the排列 of the six steps of Guest Qi.

**Falsifiability:** If Sovereign Heaven Six Qi has no statistically significant correlation with the actual climate of the first half of the year, then the Sovereign Heaven computational coordinate is falsified.

### 3.9 Earthly Deputy (Zai Quan): From Second-Half Governor to Computational Coordinate

**Traditional understanding:** Earthly Deputy is the Final Qi of Guest Qi, governing the climatic changes of the second half of the year, and is Yin-Yang opposite to Sovereign Heaven.

**Re-understanding:** Earthly Deputy is a **computational coordinate calculated from Sovereign Heaven**, which has a "Yin-Yang opposite" relationship with Sovereign Heaven, determining the "endpoint" (Final Qi) of the six steps of Guest Qi.

**Computational rules:**
- Input: Sovereign Heaven Six Qi
- Operation: Look up table according to Yin-Yang opposite relationship (Shaoyin ↔ Yangming, Taiyin ↔ Taiyang, Shaoyang ↔ Jueyin)
- Output: Earthly Deputy Six Qi

**Key finding:** The relationship between Earthly Deputy and Sovereign Heaven is **Yin-Yang opposite**, not Five Elements restriction or generation. Specifically:
- Shaoyin (Two Yin) ↔ Yangming (Two Yang): Equal quantity of Yin and Yang
- Taiyin (Three Yin) ↔ Taiyang (Three Yang): Equal quantity of Yin and Yang
- Shaoyang (One Yang) ↔ Jueyin (One Yin): Equal quantity of Yin and Yang

This pairing relationship of "equal Yin-Yang quantity" is key to Earthly Deputy computation — it ensures the Yin-Yang balance of Sovereign Heaven and Earthly Deputy.

**Falsifiability:** If Earthly Deputy Six Qi has no statistically significant correlation with the actual climate of the second half of the year, then the Earthly Deputy computational coordinate is falsified.

### 3.10 Principal Qi (Zhu Qi): From Fixed Six Qi to Computational Baseline

**Traditional understanding:** Principal Qi is the fixed six steps of qi each year, arranged in the order of Jueyin Wind Wood → Shaoyin Sovereign Fire → Shaoyang Ministerial Fire → Taiyin Damp Earth → Yangming Dry Metal → Taiyang Cold Water.

**Re-understanding:** Principal Qi is a **fixed 6-step computational baseline**, unchanged each year, used for superimposition with Guest Qi (Guest-Principal Superimposition) to determine the degree of climatic abnormality.

**Computational rules:**
- Input: Qi-step number (1-6)
- Operation: Look up Principal Qi fixed table (First Qi = Jueyin Wind Wood, Second Qi = Shaoyin Sovereign Fire, ... Final Qi = Taiyang Cold Water)
- Output: Principal Qi Six Qi

**Key finding:** Principal Qi is **fixed**, the same every year. This means Principal Qi reflects "normal" seasonal climatic changes — spring warmth, summer heat, long-summer dampness, autumn dryness, winter cold. The role of Principal Qi is to serve as a "baseline," superimposed with Guest Qi (changing) to determine whether the climate of that year deviates from normal.

**Falsifiability:** If the six steps of Principal Qi have no statistically significant correlation with the multi-year average seasonal climate, then the Principal Qi computational baseline is falsified.

### 3.11 Guest Qi (Ke Qi): From Changing Six Qi to Computational Variable

**Traditional understanding:** Guest Qi is the changing six steps of qi each year, with Sovereign Heaven determining the Third Qi, arranged according to the Three Yin Three Yang order.

**Re-understanding:** Guest Qi is a **changing 6-step computational variable**, different each year, calculated from Sovereign Heaven (coordinate origin), used for superimposition with Principal Qi (Guest-Principal Superimposition) to determine the degree of climatic abnormality of that year.

**Computational rules:**
- Input: Sovereign Heaven Six Qi (coordinate origin, Third Qi)
- Operation: According to the Three Yin Three Yang cyclic order (see Section 3.5), push forward 2 steps to get First and Second Qi, push backward 3 steps to get Fourth, Fifth, and Final Qi
- Output: Six steps of Guest Qi (First Qi to Final Qi)

**Key finding:** Guest Qi is **changing**, different every year. This means Guest Qi reflects "abnormal" climatic deviations — in which time periods the climate of that year deviates from normal. The role of Guest Qi is to serve as a "variable," superimposed with Principal Qi (baseline) to determine the degree and type of climatic abnormality of that year.

**Falsifiability:** If the six steps of Guest Qi have no statistically significant correlation with the degree to which the actual climate of that year deviates from the multi-year average, then the Guest Qi computational variable is falsified.

### 3.12 Guest-Principal Superimposition (Ke Zhu Jia Lin): From Superimposition Relationship to Computational Rule

**Traditional understanding:** Guest-Principal Superimposition is the superimposition relationship of Guest Qi and Principal Qi in the same time period, divided into "compatible" and "incompatible."

**Re-understanding:** Guest-Principal Superimposition is a **binary computational rule**, with input being two Six Qi states (Guest Qi and Principal Qi), and output being "compatible/incompatible" and the specific relationship type (generation/restriction/same qi).

**Computational rules:**
- Input: Guest Qi + Principal Qi of a certain qi-step
- Operation: Convert both Guest Qi and Principal Qi to Five Elements attributes, then look up Five Elements generation-restriction table
- Output:
  - Guest Qi generates Principal Qi → Compatible (favorable)
  - Guest and Principal same qi → Compatible (favorable, but may be excessive)
  - Guest Qi restricts Principal Qi → Incompatible (adverse, Guest Qi excessive)
  - Principal Qi restricts Guest Qi → Incompatible (adverse, Principal Qi excessive)

**Key finding:** The judgment criterion for Guest-Principal Superimposition is **Five Elements generation-restriction**, not the Three Yin Three Yang attribute of Six Qi. This means that in Guest-Principal Superimposition computation, Six Qi is first "dimensionally reduced" to Five Elements, and then generation-restriction judgment is performed. This "dimensionality reduction computation" is an important feature of Five Motions and Six Qi computation.

**Falsifiability:** If the "compatible/incompatible" of Guest-Principal Superimposition has no statistically significant correlation with the degree of climatic abnormality and disease incidence rate in that time period, then the Guest-Principal Superimposition computational rule is falsified.

### 3.13 Heavenly Concord (Tian Fu): From Special Year to Computational Resonance

**Traditional understanding:** Heavenly Concord is a special year where the Annual Motion Five Elements is the same as the Sovereign Heaven Five Elements.

**Re-understanding:** Heavenly Concord is a **computational resonance state** — Annual Motion (Five Motions level) and Sovereign Heaven (Six Qi level) "resonate" in their Five Elements attributes, causing the degree of climatic abnormality in that year to be amplified.

**Computational rules:**
- Input: Annual Motion Five Elements + Sovereign Heaven Five Elements
- Operation: Compare whether the two are the same
- Output: Yes/No Heavenly Concord

**Key finding:** Heavenly Concord is **cross-level resonance** — the Five Motions level (Annual Motion) and the Six Qi level (Sovereign Heaven) are originally two independent computational systems, but when their Five Elements attributes are the same, "resonance" occurs, causing the intensity of climatic abnormality to be amplified. This concept of cross-level resonance has structural similarity to the "resonance" phenomenon in physics — when the frequencies of two vibrating systems are the same, the amplitude is significantly amplified.

**Falsifiability:** If the degree of climatic abnormality and disease incidence rate in Heavenly Concord years have no statistically significant difference from non-Heavenly Concord years, then the Heavenly Concord computational resonance is falsified.

### 3.14 Annual Concord (Sui Hui): From Special Year to Computational Resonance

**Traditional understanding:** Annual Concord is a special year where the Annual Motion Five Elements is the same as the Year Branch Five Elements.

**Re-understanding:** Annual Concord is a **computational resonance state** — Annual Motion (Five Motions level) and Year Branch (Earthly Branch level) "resonate" in their Five Elements attributes, causing the degree of climatic abnormality in that year to be amplified, but the amplification method differs from Heavenly Concord.

**Computational rules:**
- Input: Annual Motion Five Elements + Year Branch Five Elements
- Operation: Compare whether the two are the same
- Output: Yes/No Annual Concord

**Key finding:** Both Annual Concord and Heavenly Concord are "computational resonance," but the levels of resonance differ:
- Heavenly Concord: Annual Motion (Five Motions) × Sovereign Heaven (Six Qi) → Amplification of climatic abnormality in the first half of the year
- Annual Concord: Annual Motion (Five Motions) × Year Branch (Earthly Branch) → Amplification of climatic abnormality throughout the year

*Suwen·Liu Weizhi Da Lun* states: "Heavenly Concord is like the law enforcer, Annual Concord is like the executive order... Those affected by the law enforcer have swift and dangerous disease; those affected by the executive order have slow and persistent disease." [To be verified: The original text needs to be checked] This indicates that the disease characteristics of Heavenly Concord and Annual Concord differ — Heavenly Concord disease is "swift and dangerous" (comes quickly, severe condition), Annual Concord disease is "slow and persistent" (comes slowly, lasts long). This difference may be related to the different levels of resonance.

**Falsifiability:** If the degree of climatic abnormality and disease incidence rate in Annual Concord years have no statistically significant difference from non-Annual Concord years, then the Annual Concord computational resonance is falsified.

### 3.15 Supreme Heavenly Concord (Tai Yi Tian Fu): From Special Year to Double Resonance

**Traditional understanding:** Supreme Heavenly Concord is a special year that is both Heavenly Concord and Annual Concord.

**Re-understanding:** Supreme Heavenly Concord is a **double computational resonance state** — Annual Motion simultaneously resonates with Sovereign Heaven (Heavenly Concord) and Year Branch (Annual Concord), causing the greatest degree of climatic abnormality in that year.

**Computational rules:**
- Input: Annual Motion Five Elements + Sovereign Heaven Five Elements + Year Branch Five Elements
- Operation: Determine whether it is simultaneously Heavenly Concord (Annual Motion = Sovereign Heaven) and Annual Concord (Annual Motion = Year Branch)
- Output: Yes/No Supreme Heavenly Concord

**Key finding:** Supreme Heavenly Concord is **double resonance**, therefore the intensity of climatic abnormality is the greatest. *Suwen·Liu Weizhi Da Lun* states: "Supreme Heavenly Concord is like the noble person... Those affected by the noble person have sudden and fatal disease." [To be verified: The original text needs to be checked] This indicates that disease in Supreme Heavenly Concord years is the most severe — "sudden and fatal" (sudden onset, potentially lethal). This extreme situation is consistent with the maximum system deviation caused by double resonance.

**Falsifiability:** If the degree of climatic abnormality and disease incidence rate in Supreme Heavenly Concord years have no statistically significant difference from other years, then the Supreme Heavenly Concord double resonance is falsified.

### 3.16 Excess (Tai Guo) and Deficiency (Bu Ji): From Rise-Fall Description to Computational Symbols

**Traditional understanding:** Excess is when Annual Motion is excessive (Yang Stem), and Deficiency is when Annual Motion is deficient (Yin Stem).

**Re-understanding:** Excess and Deficiency are **computational symbols** that determine the "direction" of Five Motions computation — Excess is "active attack," and Deficiency is "passive attack."

**Computational rules:**
- Input: Yin-Yang attribute of Year Stem
- Operation: Yang Stem → Excess, Yin Stem → Deficiency
- Output: Excess/Deficiency + Computational direction

**Computational direction of Excess:**
- Annual Motion Five Elements actively attacks "what I restrict"
- The attacked generates "Prevailing Qi" (resistance)
- After Prevailing Qi, "Counteracting Qi" (retaliation) is generated
- The suppressed generates "Stagnant Qi" (accumulation)
- When Stagnant Qi accumulates to the limit, "Stagnation Release" (eruption) occurs

**Computational direction of Deficiency:**
- "What restricts me" actively attacks Annual Motion Five Elements
- Annual Motion Five Elements is suppressed and generates "Stagnant Qi"
- When Stagnant Qi accumulates to the limit, "Stagnation Release" occurs
- May generate "Prevailing Qi" and "Counteracting Qi" (but the mechanism differs from Excess)

**Key finding:** Excess and Deficiency are not only "rise-fall descriptions" but also **switches for computational direction** — the computational paths of Excess and Deficiency are completely different. Excess is "I go attack others," Deficiency is "others come attack me." This directional difference leads to differences in all subsequent computations (Prevailing Qi, Counteracting Qi, Stagnant Qi, Stagnation Release, Trigger Point, Stagnation Point).

**Falsifiability:** If the disease spectra in Excess years and Deficiency years have no statistically significant difference, then the Excess/Deficiency computational symbols are falsified.

## 4. Composite Symbols: Combined from Derived Symbols

Composite symbols are symbols combined from two or more derived symbols through fixed rules, including: Prevailing Qi, Counteracting Qi, Stagnant Qi, Stagnation Release, Five Stagnations, Prevailing-Counteracting, Excessive Qi, Evil Transformation, and Branch-Root-Medial Qi. Due to space limitations, this section focuses on the four core composite symbols: Prevailing Qi, Counteracting Qi, Stagnant Qi, and Stagnation Release; other composite symbols are elaborated in subsequent chapters.

### 3.17 Prevailing Qi (Sheng Qi): From Resistance Phenomenon to Computational Response

**Traditional understanding:** Prevailing Qi is the resistance qi generated when the restricted element is suppressed during Annual Motion Excess.

**Re-understanding:** Prevailing Qi is a **computational response** — when Annual Motion is Excess (active attack), the "first-order response" generated by the attacked Five Elements, similar to "action and reaction" in physics.

**Computational rules:**
- Input: Annual Motion Five Elements + Excess
- Operation: Determine "what I restrict" (the attacked Five Elements), Prevailing Qi = what I restrict
- Output: Prevailing Qi Five Elements + Intensity (related to Annual Motion dynamic value)

**Key finding:** Prevailing Qi is **passively generated** — it does not appear actively but is "forced out" by Annual Motion Excess. This means the intensity of Prevailing Qi is positively correlated with the intensity of Annual Motion Excess — the more excessive the Annual Motion, the stronger the resistance (Prevailing Qi) of the suppressed. This "action and reaction" relationship is an important feature of Five Motions and Six Qi computation.

**Falsifiability:** If the disease incidence rate corresponding to Prevailing Qi Five Elements in Excess years has no statistically significant difference from other years, then the Prevailing Qi computational response is falsified.

### 3.18 Counteracting Qi (Fu Qi): From Retaliation Phenomenon to Computational Feedback

**Traditional understanding:** Counteracting Qi is the qi of retaliation from the child element of the restricted element, appearing after Prevailing Qi.

**Re-understanding:** Counteracting Qi is a **computational feedback** — after Prevailing Qi (first-order response) is generated, the "second-order response" generated by the "child element" of the suppressed, similar to "negative feedback regulation" in cybernetics.

**Computational rules:**
- Input: Prevailing Qi Five Elements
- Operation: Counteracting Qi = child element of Prevailing Qi (Five Elements generation: Prevailing Qi generates Counteracting Qi)
- Output: Counteracting Qi Five Elements + Intensity (comparable to Prevailing Qi intensity)

**Key finding:** Counteracting Qi is **delayed** — it does not appear simultaneously with Prevailing Qi but appears some time after Prevailing Qi. *Suwen·Zhizhenyao Da Lun* states: "The rise and fall of prevailing and counteracting cannot exceed each other; the coming and going of small and large cannot surpass each other." [To be verified: The original text needs to be checked] This indicates that the intensity of Counteracting Qi is comparable to Prevailing Qi and does not exceed Prevailing Qi — this is a typical characteristic of negative feedback regulation, aimed at restoring the system to balance.

**Falsifiability:** If the climatic and disease changes corresponding to Counteracting Qi Five Elements after Prevailing Qi have no statistically significant correlation with the calculations, then the Counteracting Qi computational feedback is falsified.

### 3.19 Stagnant Qi (Yu Qi): From Stagnation Phenomenon to Computational Accumulation

**Traditional understanding:** Stagnant Qi is a pathological state formed when Five Elements qi is suppressed and cannot disperse, accumulating to a certain degree.

**Re-understanding:** Stagnant Qi is a **computational accumulation variable** — when Five Elements is suppressed (Excess attack or Deficiency attacked), the qi of the suppressed cannot disperse and accumulates over time, with accumulation value = suppression intensity × time.

**Computational rules:**
- Input: Suppressed Five Elements + Suppression intensity + Time
- Operation: Stagnant Qi accumulation value = suppression intensity × time
- Output: Stagnant Qi Five Elements + Accumulation value

**Key finding:** Stagnant Qi is a **function of time** — it is not generated instantaneously but gradually accumulates over time. This means the eruption of Stagnant Qi (Stagnation Release) requires time — the longer the suppression time, the more Stagnant Qi accumulates, and the more severe the eruption. This "accumulation-eruption" pattern has structural similarity to the "phase transition" phenomenon in complex systems — when a variable of the system accumulates to a critical value, the system undergoes sudden, discontinuous changes.

**Falsifiability:** If the disease incidence rate of the suppressed Five Elements increases with the increase of suppression time (accumulation effect), then the Stagnant Qi computational accumulation variable is confirmed; conversely, it is falsified.

### 3.20 Stagnation Release (Yu Fa): From Eruption Phenomenon to Computational Criticality

**Traditional understanding:** Stagnation Release (also called Stagnation Extreme Then Release) is the phenomenon of sudden eruption after Stagnant Qi accumulates to the limit.

**Re-understanding:** Stagnation Release is a **computational critical event** — when the Stagnant Qi accumulation value exceeds the threshold, the suppressed qi suddenly erupts, causing drastic changes in climate and disease.

**Computational rules:**
- Input: Stagnant Qi Five Elements + Accumulation value + Time (whether it is the governing period of the suppressed Five Elements)
- Operation: Determine whether the accumulation value exceeds the threshold and whether it is the governing period of the suppressed Five Elements
- Output: Yes/No Stagnation Release + Stagnation Release time + Stagnation Release intensity

**Key finding:** The occurrence of Stagnation Release requires **two conditions to be met simultaneously**: ① The Stagnant Qi accumulation value exceeds the threshold; ② It is the governing period of the suppressed Five Elements. This means that even if Stagnant Qi accumulates a lot, if it is not the governing period of the suppressed Five Elements, it will not erupt; conversely, if it is the governing period but Stagnant Qi accumulation is insufficient, it will not erupt. This "dual-condition trigger" mechanism makes the time of Stagnation Release predictable — it usually occurs during the governing period of the suppressed Five Elements.

*Suwen·Liu Yuanzheng Ji Da Lun* states: "Stagnation extreme then release, waiting for the time to act." [To be verified: The original text needs to be checked] The "waiting for time" here means waiting for the governing period of the suppressed Five Elements.

**Falsifiability:** If the time of Stagnation Release (governing period of the suppressed Five Elements) has no statistically significant correlation with the actual time of drastic climatic and disease changes, then the Stagnation Release computational critical event is falsified.

## 5. Chapter Summary

This chapter re-understands the core concepts of Five Motions and Six Qi from "philosophical concepts" to "computable symbols," clarifying the input, computational rules, and output of each symbol one by one, according to three levels: atomic symbols, derived symbols, and composite symbols.

Through re-understanding, we can draw the following understandings:

**First, the core concepts of Five Motions and Six Qi are essentially computational symbols.** Their value lies not in "what they describe," but in "how they participate in computation." Heavenly Stems and Earthly Branches are computational codes, Five Elements are computational relationships, Six Qi are computational parameters, Three Yin Three Yang is computational sequence, Annual Motion and Sovereign Heaven are computational coordinates, and Prevailing-Counteracting and Stagnation-Release are computational mechanisms.

**Second, the computation of Five Motions and Six Qi has a clear hierarchical structure.** Atomic symbols (Heavenly Stems, Earthly Branches, Five Elements, Six Qi, etc.) are the foundation, derived symbols (Annual Motion, Sovereign Heaven, Earthly Deputy, Principal Qi, Guest Qi, etc.) are calculated from atomic symbols, and composite symbols (Prevailing Qi, Counteracting Qi, Stagnant Qi, Stagnation Release, etc.) are combined from derived symbols. Symbols at different levels have different computational rules.

**Third, the computational results of Five Motions and Six Qi are falsifiable.** The computational result of each symbol can be tested through actual observation or experiment. This means that Five Motions and Six Qi is not "metaphysics" but a testable scientific conjecture — although it may be wrong, it can be proven wrong.

In the next chapter, based on this chapter, we will further elaborate on how to transform these philosophical concepts into computable parameters — this is the methodological bridge connecting Five Motions and Six Qi theory with algorithm implementation.

---

**Items to be verified in this chapter:**
1. The original text about Heavenly Concord, Annual Concord, and Supreme Heavenly Concord in *Suwen·Liu Weizhi Da Lun* needs to be checked.
2. The original text about Prevailing-Counteracting in *Suwen·Zhizhenyao Da Lun* needs to be checked.
3. The original text about Stagnation Release in *Suwen·Liu Yuanzheng Ji Da Lun* needs to be checked.
4. The basis for Heavenly Stem dynamic values (+10, -10, +8, -8, etc.) needs further论证.

**Figures and tables needed for this chapter:**
1. Heavenly Stem code information diagram (Five Elements, Yin-Yang, dynamic value).
2. Earthly Branch code information diagram (Five Elements, Six Qi, Zheng/Dui Hua, coefficient, Zang-Fu).
3. Five Elements generation-restriction computational relationship diagram.
4. Three Yin Three Yang cyclic computational sequence diagram.
5. Twenty-Four Solar Terms and Six Qi correspondence table.
6. Guest-Principal Superimposition computational rule flowchart.
7. Prevailing-Counteracting-Stagnation-Release computational mechanism flowchart.
