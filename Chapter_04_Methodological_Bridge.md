# Chapter 4: From Philosophical Concepts to Computable Parameters — A Methodological Bridge

## 1. Why a Methodological Bridge is Needed

In Chapter 3, we re-understood the core concepts of Five Motions and Six Qi from "philosophical concepts" to "computable symbols." However, "computable symbols" are not yet equivalent to "computable parameters" — symbols can participate in logical operations, but for precise numerical computation, symbols need to be transformed into specific numerical parameters.

This is the core task of this chapter: **Build a methodological bridge from philosophical concepts to computable parameters, transforming the symbolic computation of Five Motions and Six Qi into precise numerical computation.**

Why is this bridge needed? There are three reasons:

**First, only through numericalization can precise prediction be made.** Traditional Five Motions and Six Qi calculations mostly remain at the "qualitative" level — "this year fire qi is excessive," "dry qi is heavier in the second half of the year," "prone to heat diseases." Although these qualitative descriptions have reference value, they are not precise enough — to what degree is "excessive"? How heavy is "heavier"? What is the probability of "prone to"? To answer these questions, concepts must be numericalized for quantitative calculation.

**Second, only through numericalization can statistical verification be performed.** Any scientific theory needs to be verified through statistical methods. And the prerequisite for statistical verification is having quantifiable indicators — if the calculation results of Five Motions and Six Qi are only qualitative descriptions like "fire qi is excessive," they cannot be statistically compared with actual climate data and disease data. Only by numericalizing the calculation results (e.g., "fire qi excess index = 1.5") can statistical tests be performed to determine whether there is a significant correlation between calculations and reality.

**Third, only through numericalization can implementation on computers be achieved.** One of the goals of this book is to implement the Five Motions and Six Qi algorithm as a computer program, enabling automatic calculation, rapid querying, and large-scale application. And the foundation of computer programs is numerical computation — only by transforming the concepts of Five Motions and Six Qi into numerical parameters can computer programs be written to achieve automated computation.

Therefore, this chapter will systematically elaborate on how to transform the philosophical concepts of Five Motions and Six Qi into computable numerical parameters. We will follow the following three principles:

**First, each parameter has a clear definition, calculation method, and value range.** No vague descriptions, no concepts that cannot be calculated.

**Second, the selection of each parameter has theoretical or empirical basis.** No fabricated parameters, no arbitrarily set values. For parameters lacking clear basis, mark as "to be verified" and explain possible value ranges.

**Third, the calculation result of each parameter is falsifiable.** The prediction results calculated by parameters can be tested through actual observation or experiment. If the test results do not match the predictions, the parameters or calculation methods need to be corrected.

Below, we elaborate on the numericalization methods of each parameter one by one, in order from basic to complex.

## 2. Numericalization of Heavenly Stems and Earthly Branches: From Symbols to Numbers

Heavenly Stems and Earthly Branches are the most basic symbols in Five Motions and Six Qi computation. In traditional understanding, Heavenly Stems and Earthly Branches are only "timekeeping symbols" — used to mark years, months, days, and hours. But in Five Motions and Six Qi computation, Heavenly Stems and Earthly Branches are not only timekeeping symbols; they also carry rich computational information — Five Elements attribute, Yin-Yang attribute, Six Qi attribute, Zheng-Hua/Dui-Hua, etc.

To numericalize Heavenly Stems and Earthly Branches, we need to encode a "numerical vector" for each Heavenly Stem and Earthly Branch, with each dimension of the vector corresponding to a computational attribute.

### 4.1 Numerical Encoding of Heavenly Stems

Each Heavenly Stem encodes a 4-dimensional numerical vector: [Five Elements code, Yin-Yang code, dynamic value, serial number]

**Five Elements code**: Wood=1, Fire=2, Earth=3, Metal=4, Water=5

**Yin-Yang code**: Yang Stem (Excess)=+1, Yin Stem (Deficiency)=-1

**Dynamic value**: According to the Five Elements and Yin-Yang of Heavenly Stem transforming into Motion, different dynamic values are set. The absolute value of the dynamic value represents the "intensity" of that Annual Motion, and the sign represents Excess (positive) or Deficiency (negative).

Specific encoding is as follows:

| Heavenly Stem | Five Elements Code | Yin-Yang Code | Dynamic Value | Serial No. | Computational Meaning |
|---------------|-------------------|--------------|--------------|-----------|----------------------|
| Jia | 3 (Earth) | +1 (Excess) | +10 | 1 | Earth Motion Excess, actively attacks Water |
| Ji | 3 (Earth) | -1 (Deficiency) | -10 | 6 | Earth Motion Deficiency, passively attacked by Wood |
| Yi | 4 (Metal) | -1 (Deficiency) | -8 | 2 | Metal Motion Deficiency, passively attacked by Fire |
| Geng | 4 (Metal) | +1 (Excess) | +8 | 7 | Metal Motion Excess, actively attacks Wood |
| Bing | 5 (Water) | +1 (Excess) | +8 | 3 | Water Motion Excess, actively attacks Fire |
| Xin | 5 (Water) | -1 (Deficiency) | -8 | 8 | Water Motion Deficiency, passively attacked by Earth |
| Ding | 1 (Wood) | -1 (Deficiency) | -6 | 4 | Wood Motion Deficiency, passively attacked by Metal |
| Ren | 1 (Wood) | +1 (Excess) | +6 | 9 | Wood Motion Excess, actively attacks Earth |
| Wu | 2 (Fire) | +1 (Excess) | +6 | 5 | Fire Motion Excess, actively attacks Metal |
| Gui | 2 (Fire) | -1 (Deficiency) | -6 | 10 | Fire Motion Deficiency, passively attacked by Water |

**Basis for dynamic value setting**:
- Earth Motion (Jia-Ji) has the largest dynamic value (±10), because Earth is the "mother of all things," and changes in Earth Motion have the greatest impact on the other four elements.
- Metal Motion (Yi-Geng) and Water Motion (Bing-Xin) have medium dynamic values (±8), because changes in Metal and Water have medium impact on other elements.
- Wood Motion (Ding-Ren) and Fire Motion (Wu-Gui) have the smallest dynamic values (±6), because changes in Wood and Fire have relatively small impact on other elements.

[To be verified: The specific dynamic values (±10, ±8, ±6) are set based on experience and need to be adjusted through large-sample statistical verification. If statistical results show that the actual impact of a certain element is greater or smaller, adjust the dynamic value accordingly.]

### 4.2 Numerical Encoding of Earthly Branches

Each Earthly Branch encodes a 6-dimensional numerical vector: [Five Elements code, Six Qi code, Zheng-Hua/Dui-Hua code, coefficient, Zang-Fu code, serial number]

**Five Elements code**: Wood=1, Fire=2, Earth=3, Metal=4, Water=5

**Six Qi code**: Jueyin Wind Wood=1, Shaoyin Sovereign Fire=2, Taiyin Damp Earth=3, Shaoyang Ministerial Fire=4, Yangming Dry Metal=5, Taiyang Cold Water=6

**Zheng-Hua/Dui-Hua code**: Zheng-Hua=+1, Dui-Hua=-1

**Coefficient**: Zheng-Hua=1.0, Dui-Hua=0.7

**Zang-Fu code**: Liver/Gallbladder=1, Heart/Small Intestine=2, Spleen/Stomach=3, Lung/Large Intestine=4, Kidney/Bladder=5, Pericardium/Triple Burner=6

Specific encoding is as follows:

| Earthly Branch | Five Elements Code | Six Qi Code | Zheng/Dui Hua | Coefficient | Zang-Fu Code | Serial No. |
|----------------|-------------------|------------|--------------|------------|-------------|-----------|
| Zi | 5 (Water) | 2 (Shaoyin Sovereign Fire) | -1 (Dui Hua) | 0.7 | 2 (Heart/Small Intestine) | 1 |
| Wu | 2 (Fire) | 2 (Shaoyin Sovereign Fire) | +1 (Zheng Hua) | 1.0 | 2 (Heart/Small Intestine) | 7 |
| Chou | 3 (Earth) | 3 (Taiyin Damp Earth) | -1 (Dui Hua) | 0.7 | 3 (Spleen/Stomach) | 2 |
| Wei | 3 (Earth) | 3 (Taiyin Damp Earth) | +1 (Zheng Hua) | 1.0 | 3 (Spleen/Stomach) | 8 |
| Yin | 1 (Wood) | 4 (Shaoyang Ministerial Fire) | -1 (Dui Hua) | 0.7 | 6 (Pericardium/Triple Burner) | 3 |
| Shen | 4 (Metal) | 4 (Shaoyang Ministerial Fire) | +1 (Zheng Hua) | 1.0 | 6 (Pericardium/Triple Burner) | 9 |
| Mao | 1 (Wood) | 5 (Yangming Dry Metal) | -1 (Dui Hua) | 0.7 | 4 (Lung/Large Intestine) | 4 |
| You | 4 (Metal) | 5 (Yangming Dry Metal) | +1 (Zheng Hua) | 1.0 | 4 (Lung/Large Intestine) | 10 |
| Chen | 3 (Earth) | 6 (Taiyang Cold Water) | -1 (Dui Hua) | 0.7 | 5 (Kidney/Bladder) | 5 |
| Xu | 3 (Earth) | 6 (Taiyang Cold Water) | +1 (Zheng Hua) | 1.0 | 5 (Kidney/Bladder) | 11 |
| Si | 2 (Fire) | 1 (Jueyin Wind Wood) | -1 (Dui Hua) | 0.7 | 1 (Liver/Gallbladder) | 6 |
| Hai | 5 (Water) | 1 (Jueyin Wind Wood) | +1 (Zheng Hua) | 1.0 | 1 (Liver/Gallbladder) | 12 |

**Basis for coefficient setting**:
- Zheng-Hua coefficient=1.0, Dui-Hua coefficient=0.7. This means that the Six Qi intensity of Zheng-Hua Earthly Branches is approximately 1.43 times that of Dui-Hua Earthly Branches (1.0/0.7≈1.43).
- The setting of this ratio is based on the discussion in *Suwen* that "Zheng-Hua follows the root, Dui-Hua follows the branch" — Zheng-Hua qi "follows the root" (the essence of qi is fully manifested), Dui-Hua qi "follows the branch" (the appearance of qi is manifested, the essence is weaker). Therefore, the intensity of Zheng-Hua is greater than Dui-Hua.

[To be verified: Dui-Hua coefficient=0.7 is set based on experience and needs to be adjusted through large-sample statistical verification. If statistical results show that the actual intensity ratio of Zheng-Hua and Dui-Hua is not 1.43:1, adjust the coefficient accordingly.]

### 4.3 Significance of Numericalization of Heavenly Stems and Earthly Branches

After numericalizing Heavenly Stems and Earthly Branches, the computation of Five Motions and Six Qi can be transformed into vector operations and matrix operations. For example:

- Annual Motion calculation = "Five Elements code" and "dynamic value" dimensions of the Heavenly Stem vector
- Sovereign Heaven calculation = "Six Qi code" and "coefficient" dimensions of the Year Branch vector
- Guest-Principal Superimposition calculation = comparison of "Five Elements code" dimensions of Guest Qi vector and Principal Qi vector
- Heavenly Concord judgment = Annual Motion Five Elements code == Sovereign Heaven Five Elements code
- Annual Concord judgment = Annual Motion Five Elements code == Year Branch Five Elements code

This vectorized and matrixized computation method not only makes calculation more precise and efficient but also lays the foundation for subsequent statistical verification and computer implementation.

## 3. Parameterization of Five Motions and Six Qi: From Description to Parameters

Based on the numericalization of Heavenly Stems and Earthly Branches, we can further parameterize the core concepts of Five Motions and Six Qi — transforming descriptive concepts such as "Annual Motion Excess," "Sovereign Heaven Shaoyin Sovereign Fire," "Guest Qi Jueyin Wind Wood" into parameters with clear numerical values.

### 4.4 Annual Motion Parameters

Annual Motion parameters include three dimensions: Five Elements attribute, Excess/Deficiency, dynamic value.

**Calculation formula**:
```
Annual Motion Five Elements = Heavenly Stem vector.Five Elements code
Annual Motion Excess/Deficiency = Heavenly Stem vector.Yin-Yang code (+1=Excess, -1=Deficiency)
Annual Motion dynamic value = Heavenly Stem vector.dynamic value
```

**Value range**:
- Annual Motion Five Elements: 1-5 (Wood=1, Fire=2, Earth=3, Metal=4, Water=5)
- Annual Motion Excess/Deficiency: +1 (Excess) or -1 (Deficiency)
- Annual Motion dynamic value: -10 to +10 (excluding 0)

**Example**:
- Jia year: Annual Motion Five Elements=3 (Earth), Excess/Deficiency=+1 (Excess), dynamic value=+10
- Ji year: Annual Motion Five Elements=3 (Earth), Excess/Deficiency=-1 (Deficiency), dynamic value=-10

### 4.5 Sovereign Heaven Parameters

Sovereign Heaven parameters include three dimensions: Six Qi attribute, Five Elements attribute, intensity coefficient.

**Calculation formula**:
```
Sovereign Heaven Six Qi = Year Branch vector.Six Qi code
Sovereign Heaven Five Elements = Five Elements corresponding to Six Qi (Jueyin Wind Wood→Wood, Shaoyin Sovereign Fire→Fire, Taiyin Damp Earth→Earth, Shaoyang Ministerial Fire→Fire, Yangming Dry Metal→Metal, Taiyang Cold Water→Water)
Sovereign Heaven intensity = Year Branch vector.coefficient (Zheng-Hua=1.0, Dui-Hua=0.7)
```

**Value range**:
- Sovereign Heaven Six Qi: 1-6 (Jueyin Wind Wood=1, Shaoyin Sovereign Fire=2, Taiyin Damp Earth=3, Shaoyang Ministerial Fire=4, Yangming Dry Metal=5, Taiyang Cold Water=6)
- Sovereign Heaven Five Elements: 1-5 (Wood=1, Fire=2, Earth=3, Metal=4, Water=5)
- Sovereign Heaven intensity: 0.7 or 1.0

**Example**:
- Zi year: Sovereign Heaven Six Qi=2 (Shaoyin Sovereign Fire), Sovereign Heaven Five Elements=2 (Fire), Sovereign Heaven intensity=0.7 (Dui-Hua)
- Wu year: Sovereign Heaven Six Qi=2 (Shaoyin Sovereign Fire), Sovereign Heaven Five Elements=2 (Fire), Sovereign Heaven intensity=1.0 (Zheng-Hua)

### 4.6 Earthly Deputy Parameters

Earthly Deputy parameters include three dimensions: Six Qi attribute, Five Elements attribute, intensity coefficient.

**Calculation formula**:
```
Earthly Deputy Six Qi = Six Qi that is Yin-Yang opposite to Sovereign Heaven Six Qi (Shaoyin↔Yangming, Taiyin↔Taiyang, Shaoyang↔Jueyin)
Earthly Deputy Five Elements = Five Elements corresponding to Earthly Deputy Six Qi
Earthly Deputy intensity = Earthly Branch coefficient corresponding to Earthly Deputy (Zheng-Hua=1.0, Dui-Hua=0.7)
```

**Yin-Yang opposite relationship table**:

| Sovereign Heaven Six Qi | Earthly Deputy Six Qi | Yin-Yang Relationship |
|------------------------|---------------------|---------------------|
| Shaoyin Sovereign Fire (Two Yin) | Yangming Dry Metal (Two Yang) | Two Yin ↔ Two Yang |
| Taiyin Damp Earth (Three Yin) | Taiyang Cold Water (Three Yang) | Three Yin ↔ Three Yang |
| Shaoyang Ministerial Fire (One Yang) | Jueyin Wind Wood (One Yin) | One Yang ↔ One Yin |
| Yangming Dry Metal (Two Yang) | Shaoyin Sovereign Fire (Two Yin) | Two Yang ↔ Two Yin |
| Taiyang Cold Water (Three Yang) | Taiyin Damp Earth (Three Yin) | Three Yang ↔ Three Yin |
| Jueyin Wind Wood (One Yin) | Shaoyang Ministerial Fire (One Yang) | One Yin ↔ One Yang |

**Example**:
- Zi year (Sovereign Heaven=Shaoyin Sovereign Fire): Earthly Deputy=Yangming Dry Metal, Earthly Deputy Five Elements=4 (Metal), Earthly Deputy intensity=1.0 (You is Zheng-Hua)

### 4.7 Principal Qi Parameters

Principal Qi parameters are fixed 6 steps, each step including: Six Qi attribute, Five Elements attribute, starting solar term, ending solar term, duration in days.

**Principal Qi six steps fixed table**:

| Qi Step | Principal Qi Six Qi | Five Elements | Starting Solar Term | Ending Solar Term | Duration |
|---------|-------------------|-------------|-------------------|-----------------|---------|
| First Qi | Jueyin Wind Wood | Wood | Great Cold | Awakening of Insects | ~60 days |
| Second Qi | Shaoyin Sovereign Fire | Fire | Spring Equinox | Beginning of Summer | ~60 days |
| Third Qi | Shaoyang Ministerial Fire | Fire | Grain Buds | Minor Heat | ~60 days |
| Fourth Qi | Taiyin Damp Earth | Earth | Major Heat | White Dew | ~60 days |
| Fifth Qi | Yangming Dry Metal | Metal | Autumn Equinox | Beginning of Winter | ~60 days |
| Final Qi | Taiyang Cold Water | Water | Minor Snow | Minor Cold | ~60 days |

**Calculation formula**:
```
Principal Qi = Look up Principal Qi fixed table according to current date
```

### 4.8 Guest Qi Parameters

Guest Qi parameters are changing 6 steps, calculated from Sovereign Heaven (Third Qi). Each step includes: Six Qi attribute, Five Elements attribute, intensity coefficient.

**Calculation formula**:
```
Guest Qi Third Qi = Sovereign Heaven Six Qi
Guest Qi = According to Three Yin Three Yang cyclic order (Jueyin→Shaoyin→Taiyin→Shaoyang→Yangming→Taiyang), from Third Qi push forward 2 steps to get First Qi, Second Qi, push backward 3 steps to get Fourth Qi, Fifth Qi, Final Qi
Guest Qi intensity = Earthly Branch coefficient corresponding to that Guest Qi (Zheng-Hua=1.0, Dui-Hua=0.7)
```

**Example** (Zi year, Sovereign Heaven=Shaoyin Sovereign Fire):
- Third Qi = Shaoyin Sovereign Fire (Sovereign Heaven)
- Second Qi = Jueyin Wind Wood (push forward 1 step)
- First Qi = Taiyang Cold Water (push forward 2 steps)
- Fourth Qi = Taiyin Damp Earth (push backward 1 step)
- Fifth Qi = Shaoyang Ministerial Fire (push backward 2 steps)
- Final Qi = Yangming Dry Metal (push backward 3 steps, i.e., Earthly Deputy)

### 4.9 Guest-Principal Superimposition Parameters

Guest-Principal Superimposition parameters are the superimposition relationship of Guest Qi and Principal Qi in the same qi-step, including: relationship type, compatible/incompatible, abnormality degree.

**Calculation formula**:
```
Guest Qi Five Elements = Guest Qi vector.Five Elements code
Principal Qi Five Elements = Principal Qi vector.Five Elements code

if Guest Qi Five Elements == Principal Qi Five Elements:
    relationship type = "same qi"
    compatible/incompatible = "compatible (excessive)"
    abnormality degree = 0.5 (same qi may be excessive, but not serious abnormality)
elif Guest Qi generates Principal Qi:
    relationship type = "Guest Qi generates Principal Qi"
    compatible/incompatible = "compatible (favorable)"
    abnormality degree = 0 (normal)
elif Guest Qi restricts Principal Qi:
    relationship type = "Guest Qi restricts Principal Qi"
    compatible/incompatible = "incompatible (adverse, Guest Qi excessive)"
    abnormality degree = 1.0 (abnormal)
elif Principal Qi restricts Guest Qi:
    relationship type = "Principal Qi restricts Guest Qi"
    compatible/incompatible = "incompatible (adverse, Principal Qi excessive)"
    abnormality degree = 0.8 (abnormal, but degree slightly less than Guest Qi restricts Principal Qi)
else:
    relationship type = "Principal Qi generates Guest Qi"
    compatible/incompatible = "compatible (favorable, but Guest Qi gets assistance)"
    abnormality degree = 0.3 (basically normal, but Guest Qi getting assistance may be excessive)
```

**Value range of abnormality degree**: 0 (normal) to 1.0 (serious abnormality).

[To be verified: The specific values of abnormality degree (0, 0.3, 0.5, 0.8, 1.0) are set based on experience and need to be adjusted through large-sample statistical verification.]

## 4. Computationalization of Prevailing-Counteracting-Stagnation-Release: From Phenomena to Formulas

Prevailing Qi, Counteracting Qi, Stagnant Qi, and Stagnation Release are the most core pathogenesis mechanisms in Five Motions and Six Qi computation. In traditional understanding, these concepts are descriptive — "Prevailing Qi is resistance qi," "Counteracting Qi is retaliation qi," "Stagnant Qi is stagnation qi," "Stagnation Release is eruption." But for precise calculation, these descriptive concepts must be transformed into computable formulas.

### 4.10 Prevailing Qi Calculation

**Definition**: Prevailing Qi is the resistance qi generated by the attacked Five Elements when Annual Motion is Excess.

**Calculation formula** (Prevailing Qi is generated only when Annual Motion is Excess):
```
if Annual Motion Excess/Deficiency == +1 (Excess):
    attacked Five Elements = the element restricted by Annual Motion Five Elements (what I restrict)
    Prevailing Qi Five Elements = attacked Five Elements
    Prevailing Qi intensity = |Annual Motion dynamic value| × 0.8 (Prevailing Qi intensity is 80% of Annual Motion dynamic value)
    Prevailing Qi occurrence time = first half of the year of Annual Motion Excess (First Qi to Third Qi)
else:
    Prevailing Qi = none (when Annual Motion is Deficiency, typical Prevailing Qi is not generated)
```

**Basis for Prevailing Qi intensity setting**:
- Prevailing Qi is the "resistance" of the attacked, and its intensity is usually less than the attacker's intensity.
- According to the discussion in *Suwen·Zhizhenyao Da Lun* that "the rise and fall of prevailing and counteracting cannot exceed each other," the intensities of Prevailing Qi and Counteracting Qi should be comparable, but both less than the original attack intensity.
- Therefore, set Prevailing Qi intensity as 80% of Annual Motion dynamic value.

[To be verified: Prevailing Qi intensity = Annual Motion dynamic value × 0.8 is set based on experience and needs to be adjusted through large-sample statistical verification.]

### 4.11 Counteracting Qi Calculation

**Definition**: Counteracting Qi is the retaliation qi generated by the "child element" of the attacked after Prevailing Qi.

**Calculation formula** (Counteracting Qi is generated only after Prevailing Qi is generated):
```
if Prevailing Qi exists:
    Counteracting Qi Five Elements = the element generated by Prevailing Qi Five Elements (what I generate, i.e., the child element of Prevailing Qi)
    Counteracting Qi intensity = Prevailing Qi intensity × 1.0 (Counteracting Qi intensity is comparable to Prevailing Qi)
    Counteracting Qi occurrence time = second half of the year of Annual Motion Excess (Fourth Qi to Final Qi)
else:
    Counteracting Qi = none
```

**Basis for Counteracting Qi intensity setting**:
- According to the discussion in *Suwen·Zhizhenyao Da Lun* that "the rise and fall of prevailing and counteracting cannot exceed each other," Counteracting Qi intensity is comparable to Prevailing Qi, therefore set Counteracting Qi intensity = Prevailing Qi intensity × 1.0.

### 4.12 Stagnant Qi Calculation

**Definition**: Stagnant Qi is a pathological state where Five Elements qi is suppressed and cannot disperse, accumulating over time.

**Calculation formula**:
```
suppressed Five Elements = "what I restrict" when Annual Motion is Excess, or the element restricted by "what restricts me" when Annual Motion is Deficiency (i.e., Annual Motion itself)
suppression intensity = |Annual Motion dynamic value| × Guest-Principal Superimposition abnormality degree × Sovereign Heaven intensity (or Earthly Deputy intensity)
Stagnant Qi accumulation value = suppression intensity × duration (in months)
```

**Value range of Stagnant Qi accumulation value**: 0 (no Stagnant Qi) to theoretical maximum (suppression intensity × 12 months).

**Stagnant Qi grade classification**:
- 0-2: no Stagnant Qi or mild Stagnant Qi
- 2-5: moderate Stagnant Qi
- 5-8: severe Stagnant Qi
- >8: extremely severe Stagnant Qi (approaching eruption threshold)

[To be verified: The Stagnant Qi grade classification thresholds (2, 5, 8) are set based on experience and need to be adjusted through large-sample statistical verification.]

### 4.13 Stagnation Release Calculation

**Definition**: Stagnation Release is the phenomenon of sudden eruption during the governing period of the suppressed Five Elements after Stagnant Qi accumulates to the limit.

**Calculation formula**:
```
Stagnation Release condition 1 = Stagnant Qi accumulation value > Stagnation Release threshold (default=8)
Stagnation Release condition 2 = current time == governing period of suppressed Five Elements (Wood→Spring, Fire→Summer, Earth→Long Summer, Metal→Autumn, Water→Winter)

if Stagnation Release condition 1 and Stagnation Release condition 2:
    Stagnation Release = yes
    Stagnation Release intensity = Stagnant Qi accumulation value × 1.5 (intensity amplified during eruption)
    Stagnation Release duration = governing period of suppressed Five Elements (approximately one season, 3 months)
else:
    Stagnation Release = no
```

**Basis for Stagnation Release threshold setting**:
- Stagnation Release threshold=8, meaning that Stagnant Qi accumulation value needs to reach the level of "extremely severe Stagnant Qi" before eruption.
- The setting of this threshold is based on the discussion in *Suwen·Liu Yuanzheng Ji Da Lun* that "stagnation extreme then release" — only when stagnation accumulates to the "extreme" degree will it erupt.

[To be verified: Stagnation Release threshold=8 and Stagnation Release intensity amplification coefficient=1.5 are set based on experience and need to be adjusted through large-sample statistical verification.]

## 5. Computationalization of Concurrent Duty Substitution: From Concept to Algorithm

Concurrent Duty (Tong Shi) is an original concept proposed in this book, used to solve the problem of "the Stagnation Point Earthly Branch is not in the Four Pillars." In traditional Five Motions and Six Qi calculation, if the calculated Stagnation Point Earthly Branch is not in the patient's Four Pillars (Year Pillar, Month Pillar, Day Pillar, Hour Pillar), the specific lesion location cannot be determined. The concept of Concurrent Duty Substitution is to solve this problem.

### 4.14 Definition of Concurrent Duty

**Definition**: Concurrent Duty is another Earthly Branch that belongs to the same Six Qi as the Stagnation Point Earthly Branch. When the Stagnation Point Earthly Branch is not in the Four Pillars, the Concurrent Duty Earthly Branch substitutes to assume the responsibility of the Stagnation Point.

**Concurrent Duty correspondence table** (based on Six Qi attribute):

| Six Qi | Earthly Branch 1 (Zheng-Hua) | Earthly Branch 2 (Dui-Hua) | Concurrent Duty Relationship |
|--------|------------------------------|----------------------------|----------------------------|
| Shaoyin Sovereign Fire | Wu (Zheng-Hua) | Zi (Dui-Hua) | Wu and Zi are mutually Concurrent Duty |
| Taiyin Damp Earth | Wei (Zheng-Hua) | Chou (Dui-Hua) | Wei and Chou are mutually Concurrent Duty |
| Shaoyang Ministerial Fire | Shen (Zheng-Hua) | Yin (Dui-Hua) | Shen and Yin are mutually Concurrent Duty |
| Yangming Dry Metal | You (Zheng-Hua) | Mao (Dui-Hua) | You and Mao are mutually Concurrent Duty |
| Taiyang Cold Water | Xu (Zheng-Hua) | Chen (Dui-Hua) | Xu and Chen are mutually Concurrent Duty |
| Jueyin Wind Wood | Hai (Zheng-Hua) | Si (Dui-Hua) | Hai and Si are mutually Concurrent Duty |

### 4.15 Concurrent Duty Substitution Algorithm

**Calculation formula**:
```
Input: Stagnation Point Earthly Branch, Four Pillars Earthly Branch list (Year Branch, Month Branch, Day Branch, Hour Branch)

if Stagnation Point Earthly Branch in Four Pillars Earthly Branch list:
    actual Stagnation Point = Stagnation Point Earthly Branch
    substitution mark = "no substitution (Stagnation Point in Four Pillars)"
else:
    Concurrent Duty Earthly Branch = another Earthly Branch belonging to the same Six Qi as Stagnation Point Earthly Branch
    if Concurrent Duty Earthly Branch in Four Pillars Earthly Branch list:
        actual Stagnation Point = Concurrent Duty Earthly Branch
        substitution mark = "Concurrent Duty substitution (Stagnation Point not in Four Pillars, substituted by Concurrent Duty)"
    else:
        actual Stagnation Point = Stagnation Point Earthly Branch (still use original Stagnation Point, but marked as "not in Four Pillars")
        substitution mark = "no substitution (neither Stagnation Point nor Concurrent Duty in Four Pillars, calculated according to original Stagnation Point)"
```

**Intensity correction for Concurrent Duty substitution**:
- When Concurrent Duty Earthly Branch substitutes, the intensity of the Stagnation Point needs to be multiplied by a correction coefficient.
- If Concurrent Duty is Zheng-Hua Earthly Branch (coefficient=1.0), correction coefficient=1.0 (intensity unchanged).
- If Concurrent Duty is Dui-Hua Earthly Branch (coefficient=0.7), correction coefficient=0.8 (intensity of Concurrent Duty substitution is slightly lower than original Stagnation Point).

[To be verified: Concurrent Duty substitution correction coefficient=0.8 is set based on experience and needs to be adjusted through large-sample statistical verification.]

### 4.16 Theoretical Basis for Concurrent Duty Substitution

The concept of Concurrent Duty substitution is based on the following two theoretical bases:

**First, same qi responds to each other**. *Suwen·Qian Cheng Pian* states: "Same qi seeks each other, same kind responds to each other." [To be verified: The source needs to be checked] The Earthly Branch belonging to the same Six Qi as the Stagnation Point, although in a different position, has the same "qi." Therefore, when the Stagnation Point is not in the Four Pillars, the Earthly Branch of the same qi can "substitute" to assume the responsibility of the Stagnation Point.

**Second, complementarity of Zheng-Hua and Dui-Hua**. Each Six Qi corresponds to two Earthly Branches — one Zheng-Hua (strong qi) and one Dui-Hua (weak qi). These two Earthly Branches are mutually complementary, together constituting the complete expression of that Six Qi. Therefore, when one is not in the Four Pillars, the other can substitute.

[To be verified: The concept of Concurrent Duty substitution is an original concept proposed in this book, and its effectiveness needs to be verified through large-sample clinical data. If verification results show that Concurrent Duty substitution cannot improve prediction accuracy, this concept needs to be corrected or abandoned.]

## 6. Power-Brake Balance Model: From Metaphor to Mathematics

"Power-Brake Balance" is a core model proposed in this book, used to describe the balance relationship between Five Motions (power) and Six Qi (brake). The core idea of this model is: Five Motions provide the "power" for change, Six Qi provide the "brake" for regulation, and the balance state of power and brake determines whether qi movement is unobstructed and whether disease occurs.

### 4.17 Power Value Calculation

**Definition**: Power value is the driving intensity of Five Motions (Annual Motion, Principal Motion, Guest Motion) on qi movement.

**Calculation formula**:
```
Annual Motion power = Annual Motion dynamic value (Heavenly Stem vector.dynamic value, range -10 to +10)
Principal Motion power = sum of dynamic values of the five steps of Principal Motion (dynamic value of each step of Principal Motion = basic dynamic value of that step's Five Elements × Tai-Shao coefficient)
Guest Motion power = sum of dynamic values of the five steps of Guest Motion (dynamic value of each step of Guest Motion = basic dynamic value of that step's Five Elements × Tai-Shao coefficient)

Total power = Annual Motion power × 0.5 + Principal Motion power × 0.3 + Guest Motion power × 0.2
```

**Basis for weight setting**:
- Annual Motion has the largest weight (0.5), because Annual Motion governs the entire year and is the most important power source.
- Principal Motion has medium weight (0.3), because Principal Motion is fixed seasonal power with greater impact.
- Guest Motion has the smallest weight (0.2), because Guest Motion is changing additional power with relatively small impact.

[To be verified: Weights (0.5, 0.3, 0.2) are set based on experience and need to be adjusted through large-sample statistical verification.]

### 4.18 Brake Value Calculation

**Definition**: Brake value is the restricting intensity of Six Qi (Principal Qi, Guest Qi, Sovereign Heaven, Earthly Deputy) on qi movement.

**Calculation formula**:
```
Sovereign Heaven brake = Sovereign Heaven intensity × basic brake value of Sovereign Heaven Five Elements
Earthly Deputy brake = Earthly Deputy intensity × basic brake value of Earthly Deputy Five Elements
Principal Qi brake = sum of brake values of the six steps of Principal Qi (brake value of each step of Principal Qi = basic brake value of that step's Six Qi × 1.0)
Guest Qi brake = sum of brake values of the six steps of Guest Qi (brake value of each step of Guest Qi = basic brake value of that step's Six Qi × that step's intensity coefficient)

Total brake = Sovereign Heaven brake × 0.3 + Earthly Deputy brake × 0.2 + Principal Qi brake × 0.3 + Guest Qi brake × 0.2
```

**Five Elements basic brake values**:
- Wood: brake value=6 (Wood governs dredging, weaker braking force)
- Fire: brake value=8 (Fire governs flaming upward, medium braking force)
- Earth: brake value=10 (Earth governs carrying, strongest braking force)
- Metal: brake value=8 (Metal governs convergence, medium braking force)
- Water: brake value=6 (Water governs moistening downward, weaker braking force)

[To be verified: Five Elements basic brake values (6, 8, 10, 8, 6) and weights (0.3, 0.2, 0.3, 0.2) are set based on experience and need to be adjusted through large-sample statistical verification.]

### 4.19 Balance Value Calculation

**Definition**: Balance value is the difference between total power and total brake, used to determine whether qi movement is unobstructed.

**Calculation formula**:
```
Balance value = Total power - Total brake
```

**Interpretation of Balance value**:
- Balance value > +2: power too strong, brake insufficient, qi movement excessive, prone to "Excess" type diseases (heat syndrome, excess syndrome, acute diseases)
- Balance value between -2 and +2: power and brake basically balanced, qi movement unobstructed, healthy state
- Balance value < -2: brake too strong, power insufficient, qi movement stagnant, prone to "Deficiency" type diseases (cold syndrome, deficiency syndrome, chronic diseases)

[To be verified: Balance value threshold (±2) is set based on experience and needs to be adjusted through large-sample statistical verification.]

### 4.20 Significance of Power-Brake Balance Model

The significance of the Power-Brake Balance Model lies in that it simplifies the complex computation of Five Motions and Six Qi into a computable numerical value — the Balance value. Through the Balance value, we can:

**First, quickly determine an individual's qi movement state**. Only need to calculate total power and total brake to obtain the Balance value and determine whether qi movement is excessive, balanced, or stagnant.

**Second, compare qi movement states of different individuals**. The Balance value is a standardized numerical value that can be used to compare qi movement states of different individuals and different time points.

**Third, predict the type and tendency of disease**. Positive Balance value tends toward "Excess" type diseases; negative Balance value tends toward "Deficiency" type diseases.

**Fourth, guide the direction of treatment**. Positive Balance value needs "braking" (clearing heat, purging fire, descending counterflow); negative Balance value needs "power" (warming yang, supplementing qi, lifting).

[To be verified: The Power-Brake Balance Model is an original model proposed in this book, and its effectiveness needs to be verified through large-sample clinical data. If verification results show that the Balance value has no significant correlation with actual qi movement state and disease type, this model needs to be corrected or abandoned.]

## 7. Attack Intensity and Restraint Intensity: From Qualitative to Quantitative

In traditional Five Motions and Six Qi calculation, "attack" and "restriction" are qualitative concepts — "Wood Excess restricts Earth," "Metal Deficiency is attacked by Fire." But to precisely calculate the accumulation rate of Stagnant Qi and the severity of disease, "attack" and "restriction" need to be quantified into specific numerical values — Attack Intensity and Restraint Intensity.

### 4.21 Attack Intensity Calculation

**Definition**: Attack Intensity is the attack force of the Trigger Point on the Stagnation Point, jointly determined by Annual Motion Excess/Deficiency, Five Elements generation-restriction relationship, and Zheng-Hua/Dui-Hua coefficient.

**Calculation formula**:
```
Basic attack value = |Annual Motion dynamic value| (range 6-10)

Five Elements relationship coefficient:
- Direct restriction (e.g., Wood restricts Earth): coefficient=1.0
- Indirect restriction (e.g., Wood restricts Earth, Earth restricts Water, then Wood indirectly restricts Water): coefficient=0.5
- No restriction: coefficient=0

Zheng-Hua/Dui-Hua coefficient:
- Trigger Point is Zheng-Hua Earthly Branch: coefficient=1.0
- Trigger Point is Dui-Hua Earthly Branch: coefficient=0.7

Attack Intensity = Basic attack value × Five Elements relationship coefficient × Zheng-Hua/Dui-Hua coefficient
```

**Value range of Attack Intensity**: 0 (no attack) to 10 (strongest attack).

**Attack Intensity grade classification**:
- 0-2: mild attack
- 2-5: moderate attack
- 5-8: severe attack
- 8-10: extremely severe attack

### 4.22 Restraint Intensity Calculation

**Definition**: Restraint Intensity is the restricting force of Six Qi on Five Motions, determined by Six Qi type and Zheng-Hua/Dui-Hua coefficient.

**Calculation formula**:
```
Basic restraint value = Five Elements basic brake value corresponding to Six Qi (Wood=6, Fire=8, Earth=10, Metal=8, Water=6)

Zheng-Hua/Dui-Hua coefficient:
- Six Qi corresponds to Zheng-Hua Earthly Branch: coefficient=1.0
- Six Qi corresponds to Dui-Hua Earthly Branch: coefficient=0.7

Restraint Intensity = Basic restraint value × Zheng-Hua/Dui-Hua coefficient
```

**Value range of Restraint Intensity**: 4.2 (weakest restraint, Water × Dui-Hua=6×0.7) to 10 (strongest restraint, Earth × Zheng-Hua=10×1.0).

### 4.23 Net Attack Intensity Calculation

**Definition**: Net Attack Intensity is the net value after subtracting Restraint Intensity from Attack Intensity, used to determine the actual attack effect.

**Calculation formula**:
```
Net Attack Intensity = Attack Intensity - Restraint Intensity
```

**Interpretation of Net Attack Intensity**:
- Net Attack Intensity > 0: attack greater than restraint, Stagnant Qi will accumulate, accumulation rate is proportional to Net Attack Intensity
- Net Attack Intensity = 0: attack equals restraint, Stagnant Qi neither accumulates nor dissipates
- Net Attack Intensity < 0: restraint greater than attack, Stagnant Qi will dissipate, dissipation rate is proportional to |Net Attack Intensity|

### 4.24 Significance of Attack Intensity and Restraint Intensity

The quantification of Attack Intensity and Restraint Intensity enables precise calculation of the accumulation and dissipation of Stagnant Qi:

```
Stagnant Qi change rate = Net Attack Intensity (unit: Stagnant Qi value/month)
Stagnant Qi accumulation value = initial Stagnant Qi value + Net Attack Intensity × duration in months
```

This formula enables us to:
- Predict when Stagnant Qi will reach the eruption threshold (Stagnation Release)
- Calculate Stagnant Qi accumulation values at different time periods
- Compare Stagnant Qi accumulation rates of different individuals
- Evaluate the impact of intervention measures (treatment, health preservation) on Stagnant Qi

[To be verified: The calculation formulas for Attack Intensity and Restraint Intensity are set based on experience and need to be adjusted through large-sample statistical verification.]

## 8. Stagnant Qi Accumulation Threshold: From Experience to Parameter

The Stagnant Qi accumulation threshold is a key parameter for determining whether Stagnation Release occurs. In traditional Five Motions and Six Qi theory, "stagnation extreme then release" is a qualitative description — when stagnation accumulates to the "extreme" degree, it will erupt. But what degree is "extreme"? How long does it need to accumulate? Traditional theory does not give clear answers to these questions.

### 4.25 Setting of Stagnant Qi Accumulation Threshold

This book sets the Stagnant Qi accumulation threshold as 8 (in the 0-10 Stagnant Qi grade, 8 belongs to "extremely severe Stagnant Qi").

**Basis for setting**:
- Stagnant Qi grades are classified as: 0-2 (none/mild), 2-5 (moderate), 5-8 (severe), >8 (extremely severe).
- "Stagnation extreme then release" means needing to reach the "extreme" degree, i.e., extremely severe Stagnant Qi, therefore the threshold is set at 8.
- This threshold means that Stagnant Qi needs to accumulate to 80% of the full score (10) before erupting, which is consistent with the logic of "accumulating to the limit before erupting."

### 4.26 Individual Differences in Threshold

The Stagnant Qi accumulation threshold may have individual differences — different people may have different thresholds for Stagnation Release.

**Factors affecting threshold**:
- Congenital endowment: Five Motions and Six Qi configuration at birth may affect an individual's threshold
- Age: young people may have higher thresholds (not prone to eruption), elderly people may have lower thresholds (prone to eruption)
- Constitution: people with strong constitution may have higher thresholds, people with weak constitution may have lower thresholds
- Lifestyle: healthy lifestyle may raise the threshold, unhealthy lifestyle may lower the threshold

**Correction formula for individual differences**:
```
Individual threshold = Basic threshold (8) × Individual correction coefficient
Individual correction coefficient = Congenital endowment coefficient × Age coefficient × Constitution coefficient × Lifestyle coefficient
```

[To be verified: The concept of individual threshold and correction formula are set based on experience and need to be verified and adjusted through large-sample longitudinal studies.]

### 4.27 Falsifiability of Threshold

The Stagnant Qi accumulation threshold is a falsifiable parameter — we can test whether this threshold is accurate through large-sample data.

**Verification method**:
1. Collect large-sample individual data (birth time, disease onset time, disease type)
2. Use the algorithm of this book to calculate the Stagnant Qi accumulation value of each individual before disease onset
3. Statistics the distribution of Stagnant Qi accumulation values at disease onset
4. If most Stagnant Qi accumulation values at disease onset are concentrated around 8, then threshold=8 is verified
5. If most Stagnant Qi accumulation values at disease onset are concentrated at other values (such as 6 or 10), then the threshold needs to be adjusted

This verification method makes the Stagnant Qi accumulation threshold no longer a subjective empirical parameter, but a scientifically testable parameter.

## 9. Computability and Falsifiability: Self-Examination of Methodology

At the end of this chapter, we must conduct a methodological self-examination of all parameters and formulas proposed in this chapter — are these parameters and formulas really computable? Are they really falsifiable?

### 4.28 Computability Test

**Standard for computability**: A parameter or formula is computable if and only if:
1. Its input is clear and obtainable
2. Its calculation rules are clear and unambiguous
3. Its output is clear and comparable

According to this standard, all parameters and formulas proposed in this chapter are computable:
- Heavenly Stem and Earthly Branch encoding: input is Heavenly Stem and Earthly Branch (obtainable), rule is table lookup (unambiguous), output is numerical vector (comparable)
- Annual Motion/Sovereign Heaven/Earthly Deputy/Principal Qi/Guest Qi parameters: input is year and date (obtainable), rules are table lookup and calculation (unambiguous), output is numerical parameter (comparable)
- Prevailing Qi/Counteracting Qi/Stagnant Qi/Stagnation Release: input is Annual Motion parameters and time (obtainable), rule is formula calculation (unambiguous), output is numerical value (comparable)
- Concurrent Duty substitution: input is Stagnation Point and Four Pillars (obtainable), rule is conditional judgment (unambiguous), output is actual Stagnation Point (comparable)
- Power-Brake Balance: input is Five Motions and Six Qi parameters (obtainable), rule is weighted summation (unambiguous), output is Balance value (comparable)
- Attack Intensity/Restraint Intensity: input is Annual Motion and Six Qi parameters (obtainable), rule is formula calculation (unambiguous), output is numerical value (comparable)
- Stagnant Qi accumulation threshold: input is Stagnant Qi accumulation value (obtainable), rule is comparison judgment (unambiguous), output is whether Stagnation Release (comparable)

Therefore, all parameters and formulas proposed in this chapter pass the computability test.

### 4.29 Falsifiability Test

**Standard for falsifiability**: A parameter or formula is falsifiable if and only if:
1. Its prediction results are clear and can be tested through observation or experiment
2. There exist possible observation or experimental results that can prove this parameter or formula wrong

According to this standard, all parameters and formulas proposed in this chapter are falsifiable:
- Heavenly Stem and Earthly Branch encoding: if the encoded Five Elements attribute has no significant correlation with actual climate/disease, the encoding is falsified
- Annual Motion/Sovereign Heaven/Earthly Deputy parameters: if the climate/disease trends predicted by the parameters have no significant correlation with reality, the parameters are falsified
- Prevailing Qi/Counteracting Qi/Stagnant Qi/Stagnation Release: if the predicted time and intensity of Prevailing-Counteracting-Stagnation-Release have no significant correlation with reality, the formulas are falsified
- Concurrent Duty substitution: if Concurrent Duty substitution cannot improve prediction accuracy, the concept is falsified
- Power-Brake Balance: if the Balance value has no significant correlation with actual qi movement state/disease type, the model is falsified
- Attack Intensity/Restraint Intensity: if the calculated Attack/Restraint intensity has no significant correlation with actual disease severity, the formulas are falsified
- Stagnant Qi accumulation threshold: if Stagnant Qi accumulation values at disease onset are not concentrated around the threshold, the threshold is falsified

Therefore, all parameters and formulas proposed in this chapter pass the falsifiability test.

### 4.30 Limitations of Methodology

Although the parameters and formulas proposed in this chapter pass the computability and falsifiability tests, we must clearly recognize the limitations of this methodology:

**First, many parameters are set based on experience and have not been verified through large samples.** This chapter explicitly marks parameters as "[to be verified]," including: Heavenly Stem dynamic values, Earthly Branch Dui-Hua coefficient, Guest-Principal Superimposition abnormality degree, Prevailing Qi intensity ratio, Stagnant Qi grade thresholds, Stagnation Release threshold, Concurrent Duty substitution correction coefficient, Power-Brake weights, Five Elements basic brake values, Balance value threshold, Attack Intensity formula, Restraint Intensity formula, Individual threshold correction coefficient, etc. These parameters all need to be adjusted through large-sample statistical verification.

**Second, the model assumes linear relationships, but reality may be nonlinear.** Many formulas in this chapter (such as weighted summation, multiplication) assume linear relationships between variables. But actual physiological and pathological processes may be nonlinear — there are threshold effects, saturation effects, feedback loops, etc. If the actual relationship is nonlinear, the prediction accuracy of the linear model will be limited.

**Third, the model ignores many important confounding factors.** The model in this chapter mainly considers the impact of Five Motions and Six Qi (temporal factors) on health, but disease occurrence is also affected by many other factors — genetics, environment, lifestyle, psychological state, medical intervention, etc. If these confounding factors are not controlled, the effect of Five Motions and Six Qi may be masked or exaggerated.

**Fourth, the model is deterministic, but reality has randomness.** The model in this chapter produces deterministic output given input, but actual disease occurrence has randomness — with the same Five Motions and Six Qi configuration, some people get sick and some do not. This randomness may come from individual differences, random exposure, probabilistic events, etc. Deterministic models cannot fully capture this randomness.

Recognizing these limitations is not to deny this methodology, but to clarify subsequent research directions — adjusting parameters through large-sample verification, improving fitting through nonlinear models, controlling confounding through multifactorial models, expressing randomness through probabilistic models. This methodology is not the endpoint, but the starting point.

## 10. Chapter Summary

This chapter built a methodological bridge from philosophical concepts to computable parameters, transforming the core concepts of Five Motions and Six Qi into precise numerical computation.

Main work includes:

**First, numericalization of Heavenly Stems and Earthly Branches.** Encode each Heavenly Stem as a 4-dimensional numerical vector (Five Elements, Yin-Yang, dynamic value, serial number), and each Earthly Branch as a 6-dimensional numerical vector (Five Elements, Six Qi, Zheng-Hua/Dui-Hua, coefficient, Zang-Fu, serial number). This enables the computation of Five Motions and Six Qi to be transformed into vector operations and matrix operations.

**Second, parameterization of Five Motions and Six Qi.** Transform concepts such as Annual Motion, Sovereign Heaven, Earthly Deputy, Principal Qi, Guest Qi, Guest-Principal Superimposition into parameters with clear numerical values, each with clear calculation formulas and value ranges.

**Third, computationalization of Prevailing-Counteracting-Stagnation-Release.** Transform pathogenesis mechanisms such as Prevailing Qi, Counteracting Qi, Stagnant Qi, Stagnation Release into computable formulas, including intensity calculation, time calculation, conditional judgment, etc.

**Fourth, computationalization of Concurrent Duty substitution.** Transform the original concept "Concurrent Duty substitution" proposed in this book into a clear algorithm, solving the problem of "the Stagnation Point Earthly Branch is not in the Four Pillars."

**Fifth, Power-Brake Balance Model.** Proposed the "Power-Brake Balance" model, simplifying the complex relationship between Five Motions (power) and Six Qi (brake) into a computable Balance value.

**Sixth, quantification of Attack Intensity and Restraint Intensity.** Quantify "attack" and "restriction" from qualitative concepts into specific numerical values, enabling precise calculation of the accumulation and dissipation of Stagnant Qi.

**Seventh, parameterization of Stagnant Qi accumulation threshold.** Transform the qualitative description of "stagnation extreme then release" into a clear numerical threshold, and discuss individual differences and falsifiability.

**Eighth, self-examination of methodology.** Conducted computability and falsifiability tests on all parameters and formulas proposed in this chapter, and discussed the limitations of the methodology.

Through these works, Five Motions and Six Qi has been transformed from a philosophical descriptive theory into a computable and verifiable algorithm model. This lays the foundation for subsequent chapters on Congenital Endowment Calculation, Dynamic Stagnation Point Calculation, Verification Methodology, etc.

In the next chapter, we will apply the methodology of this chapter to perform Congenital Endowment Calculation — calculating an individual's Five Motions and Six Qi configuration at birth, and the impact of this configuration on their lifelong constitution and health.

---

**Items to be verified in this chapter**:
1. The basis for setting Heavenly Stem dynamic values (±10, ±8, ±6) needs further论证.
2. The basis for setting Earthly Branch Dui-Hua coefficient=0.7 needs further论证.
3. The source of "same qi seeks each other, same kind responds to each other" in *Suwen·Qian Cheng Pian* needs to be checked.
4. All parameters marked "[to be verified]" need to be adjusted through large-sample statistical verification.

**Figures and tables needed for this chapter**:
1. Heavenly Stem numerical encoding table.
2. Earthly Branch numerical encoding table.
3. Five Motions and Six Qi parameter calculation flowchart.
4. Prevailing-Counteracting-Stagnation-Release calculation flowchart.
5. Concurrent Duty substitution algorithm flowchart.
6. Power-Brake Balance Model schematic diagram.
7. Attack Intensity and Restraint Intensity calculation schematic diagram.
8. Stagnant Qi accumulation and eruption curve graph.
9. Computability and falsifiability test table.
