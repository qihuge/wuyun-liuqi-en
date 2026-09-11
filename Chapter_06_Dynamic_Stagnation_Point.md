# Chapter 6: Core Stagnation Point Analysis — Six Qi Brake and Dynamic Stagnation Point Calculation

## 1. Core Idea of Dynamic Stagnation Point Calculation

### 6.1 Why Dynamic Stagnation Point Calculation is Needed

In Chapter 5, we calculated the Five Motions and Six Qi configuration at an individual's birth (congenital endowment) and identified the Congenital Gap — the Five Elements/zang-fu organs most severely suppressed at birth. However, the Congenital Gap is only a "static" constitutional weakness. It tells us "which zang-fu organs are congenitally weak," but it does not tell us:

- When will this weakness "manifest"?
- Where exactly is the "lesion" when it manifests?
- What factors will trigger the manifestation?
- How severe will the manifestation be?
- How does the system restore balance through self-regulation?
- How to prevent and treat?

To answer these questions, we need to perform **Dynamic Stagnation Point Calculation** — based on congenital endowment, combined with the Five Motions and Six Qi configuration at the current time (or disease onset time), dynamically calculate key parameters such as the Trigger Point (trigger), Stagnation Point (lesion point), Tong Shi Substitute (backup point), Core Organ (lesion core), Affected Meridians (diffusion path), etc., while analyzing how the system's self-regulatory mechanisms (victory-reversal, stagnation-eruption, generation-restraint regulation) affect the occurrence, development, and outcome of disease.

Dynamic Stagnation Point Calculation is the core innovation of this book and the key step for Five Motions and Six Qi to move from "macroclimate calculation" to "individual disease prediction."

### 6.2 Core Premise: Heavenly Stems are Motions, Earthly Branches are Qi; Heavenly Stems are Transient, Earthly Branches are Fundamental

Before entering the specific algorithm, we must first clarify a core premise — **the essential difference between Heavenly Stems and Earthly Branches**:

**Heavenly Stems are Motions, Earthly Branches are Qi**:
- Heavenly Stems (Jia, Yi, Bing, Ding, Wu, Ji, Geng, Xin, Ren, Gui) govern "Five Motions" — Wood Motion, Fire Motion, Earth Motion, Metal Motion, Water Motion. Motions are "celestial" — periodic changes brought by celestial movements, ever-changing.
- Earthly Branches (Zi, Chou, Yin, Mao, Chen, Si, Wu, Wei, Shen, You, Xu, Hai) govern "Six Qi" — Jueyin Wind Wood, Shaoyin Sovereign Fire, Shaoyang Ministerial Fire, Taiyin Damp Earth, Yangming Dry Metal, Taiyang Cold Water. Qi is "terrestrial" — fixed directions and seasons on the ground, stable and enduring.

**Heavenly Stems are Transient, Earthly Branches are Fundamental**:
- Heavenly Stems (Motions) are "transient" — changing every year, with a 60-year cycle, with relatively short action time, like "passers-by."
- Earthly Branches (Qi) are "fundamental" — the direction, season, and Six Qi attribute of each Earthly Branch are fixed and unchanging, with enduring action time, like the "foundation."

**Therefore, when Motion is Excess or Deficient, it first affects the Earthly Branches** — because Earthly Branches are fundamental, the "foundation" of the system. The changing Motion (Heavenly Stem) acts on the fixed Qi (Earthly Branch), causing imbalance in the Qi mechanism of the Earthly Branch, thereby triggering disease. This is the essence of relationships such as "Motion restricts Qi" and "Motion generates Qi" — celestial changes affect the terrestrial foundation.

This premise is the logical starting point of Dynamic Stagnation Point Calculation — **all calculations must start from the Earthly Branches (fundamental), not from the Heavenly Stems (transient)**.

### 6.3 Two Schools of Five Elements for Earthly Branches: Six Qi as Principal, Four Directions as Auxiliary

As the "foundation," the Five Elements attribute of Earthly Branches is not singular but has **two schools** — this is a key issue ignored by previous algorithms and one of the most important corrections in this chapter.

**First School: Six Qi Five Elements (Principal)** — based on Three Yin Three Yang Six Qi attributes:
- Each Earthly Branch corresponds to one Six Qi, and Six Qi has Five Elements attributes. This is the most core Earthly Branch Five Elements attribute in Five Motions and Six Qi theory, the "work content" of the Earthly Branch.
- Analogy: Six Qi Five Elements is like a person's "profession" — the work they actually do.

**Second School: Four Directions Five Elements (Auxiliary)** — based on direction/season attributes:
- Each Earthly Branch corresponds to a direction and season, and direction/season has Five Elements attributes. This is a more basic Earthly Branch Five Elements attribute, because Earthly Branches were originally used to mark directions and seasons.
- Analogy: Four Directions Five Elements is like a person's "hometown" — where they come from, but this does not determine their work content.

**Core Principle: Six Qi as Principal, Four Directions as Auxiliary**
- Six Qi Five Elements is primary and core — it determines the "work nature" of the Earthly Branch and is the main basis for calculation.
- Four Directions Five Elements is auxiliary and referential — it provides "background information" about the Earthly Branch, serving as a supplement when no match is found with Six Qi Five Elements.
- Algorithmically: **prioritize searching with Six Qi Five Elements, then supplement with Four Directions Five Elements when not found**, rather than a simple union of both schools.

**Complete Comparison Table of Two Schools of Five Elements for Twelve Earthly Branches**:

| Earthly Branch | Six Qi (Principal) | Six Qi Five Elements | Direction/Season (Auxiliary) | Four Directions Five Elements | Two Schools Consistent? | Zheng/Dui Hua |
|----------------|-------------------|---------------------|------------------------------|------------------------------|------------------------|--------------|
| Zi | Shaoyin Sovereign Fire | Fire | North/Winter | Water | ❌ Inconsistent | Dui Hua |
| Chou | Taiyin Damp Earth | Earth | Northeast/Late Winter | Earth | ✅ Consistent | Dui Hua |
| Yin | Shaoyang Ministerial Fire | Fire | East/Spring | Wood | ❌ Inconsistent | Dui Hua |
| Mao | Yangming Dry Metal | Metal | East/Spring | Wood | ❌ Inconsistent | Dui Hua |
| Chen | Taiyang Cold Water | Water | Southeast/Late Spring | Earth | ❌ Inconsistent | Dui Hua |
| Si | Jueyin Wind Wood | Wood | South/Summer | Fire | ❌ Inconsistent | Dui Hua |
| Wu | Shaoyin Sovereign Fire | Fire | South/Summer | Fire | ✅ Consistent | Zheng Hua |
| Wei | Taiyin Damp Earth | Earth | Southwest/Late Summer | Earth | ✅ Consistent | Zheng Hua |
| Shen | Shaoyang Ministerial Fire | Fire | West/Autumn | Metal | ❌ Inconsistent | Zheng Hua |
| You | Yangming Dry Metal | Metal | West/Autumn | Metal | ✅ Consistent | Zheng Hua |
| Xu | Taiyang Cold Water | Water | Northwest/Late Autumn | Earth | ❌ Inconsistent | Zheng Hua |
| Hai | Jueyin Wind Wood | Wood | North/Winter | Water | ❌ Inconsistent | Zheng Hua |

**Key Findings**:
1. Among the twelve Earthly Branches, only **Chou, Wu, Wei, You** four branches have consistent two schools, while the remaining **eight branches are inconsistent**!
2. This means that if only Six Qi Five Elements is used, auxiliary information from Four Directions Five Elements will be ignored on 8/12=67% of Earthly Branches; if only Four Directions Five Elements is used, the core information of Six Qi will be completely lost.
3. Among the four branches with consistent two schools (Chou, Wu, Wei, You), three are Zheng Hua branches (Wu, Wei, You) — this is not a coincidence.

**Deeper Understanding of Zheng Hua and Dui Hua: Different Division of Labor but Coordinated Work**

Zheng Hua and Dui Hua are not simply "intensity differences" (1.0 vs 0.7), but **different division of labor but coordinated work** — like two members of a team, each responsible for different aspects, but collaboratively completing the same task.

Taking **Zi-Wu Shaoyin Sovereign Fire** as an example:
- **Wu (Zheng Hua)**: The location of the "original qi" of Shaoyin Sovereign Fire, where Six Qi and direction are unified (both Fire), with concentrated power, responsible for the main work of "Sovereign Fire" — heart function, domination of spirit.
- **Zi (Dui Hua)**: The location of the "Dui Hua" of Shaoyin Sovereign Fire, where Six Qi and direction are separated (Six Qi is Fire, direction is Water), with dispersed power, responsible for the auxiliary work of "Sovereign Fire" — kidney function, coordination of Water and Fire.
- **Coordinated Work**: Wu (Heart) and Zi (Kidney) have different division of labor, but collaboratively complete the overall function of "Shaoyin Sovereign Fire" — Heart-Kidney interaction, Water-Fire coordination. Wu is responsible for the "Fire" aspect (Heart Yang), Zi is responsible for the "Water" aspect (Kidney Yin), and the two coordinate to maintain normal physiological functions.

This is the deeper meaning of Zheng Hua and Dui Hua — **not simply who is stronger or weaker, but different division of labor, each with its own focus, and coordinated work**. Zheng Hua branches are responsible for the main aspects of the "original qi," Dui Hua branches are responsible for the auxiliary aspects of the "original qi," and the two collaborate to complete the overall function of Six Qi.

[To be verified: The "different division of labor but coordinated work" model of Zheng Hua and Dui Hua is an original understanding proposed in this book. Its specific division of labor content and coordination mechanism require further research and clinical verification.]

**Algorithm Correction: Six Qi as Principal, Four Directions as Auxiliary**

In Dynamic Stagnation Point Calculation, the Five Elements attribute of Earthly Branches adopts the **"Six Qi as Principal, Four Directions as Auxiliary"** strategy:

1. **Prioritize Six Qi Five Elements**: When searching for Trigger Points and Stagnation Points, first match with Six Qi Five Elements — because Six Qi is the "work content" of the Earthly Branch and is core.
2. **Four Directions Five Elements Supplement**: If no matching Earthly Branch is found with Six Qi Five Elements, then supplement the search with Four Directions Five Elements — because Four Directions is the "hometown" of the Earthly Branch and is auxiliary information.
3. **Core Organ Principal+Auxiliary**: Core Organs use the zang-fu organs corresponding to Six Qi Five Elements as "principal," and the zang-fu organs corresponding to Four Directions Five Elements as "auxiliary."
4. **Affected Meridians from Six Qi**: The calculation of Affected Meridians mainly starts from Six Qi attributes (see Section 6.19 for details), with Four Directions Five Elements as reference.

For example, Earthly Branch "Hai":
- Six Qi Five Elements = Wood (Jueyin Wind Wood) — this is Hai's "work content," primary
- Four Directions Five Elements = Water — this is Hai's "hometown," auxiliary
- In calculation, prioritize matching with "Wood"; if not found with "Wood," then supplement with "Water"
- Core Organs: Liver/Gallbladder (principal, Six Qi Five Elements = Wood) + Kidney/Bladder (auxiliary, Four Directions Five Elements = Water)

### 6.4 Dynamic Balance Model: The System is Not Simply Attack-Attacked, but a Living Self-Regulating System

In previous algorithms, we overemphasized the "attack-attacked" model — Annual Motion Excess goes to "bully" others, Annual Motion Deficiency is "bullied" by others. Although this model is intuitive, it has a fundamental flaw: **it treats the human-environment system as a passive system that only gets attacked, ignoring the system's self-regulatory ability**.

In fact, the human-environment system is a **living, self-regulating dynamic balance system**. It does not only passively accept attacks, but actively restores balance through various regulatory mechanisms (generation-restraint regulation, victory-reversal, stagnation-eruption, Tong Shi substitution, etc.). The occurrence of disease is not simply "being attacked," but **the system's self-regulatory ability is insufficient to offset the attack force, leading to balance being broken**.

Therefore, the core model of Dynamic Stagnation Point Calculation should be the **Dynamic Balance Model**, not a simple attack-attacked model:

**Core Logic of Dynamic Balance Model**:

```
Annual Motion Excess/Deficiency → Break system balance → System activates self-regulatory mechanisms
  ├─ Generation-restraint regulation: Automatic regulation through generation-restriction relationships among Five Elements
  ├─ Victory-reversal mechanism: Where there is victory, there must be reversal; the attacked party will "retaliate"
  ├─ Stagnation-eruption mechanism: Suppressed qi accumulates to a certain extent and will "erupt"
  ├─ Tong Shi substitution: When one Earthly Branch is absent, another Earthly Branch of the same Six Qi substitutes
  └─ Six Qi brake: The braking effect of Six Qi on Five Motion attacks
    ↓
If regulatory ability ≥ attack force → System maintains balance → No disease (or mild discomfort)
If regulatory ability < attack force → Balance broken → Disease (Stagnation Point forms)
    ↓
After disease onset, system continues to regulate → May restore balance (disease remission/recovery)
  Or regulation fails → Balance further broken (disease exacerbation/transmission)
```

**Key Transformations of This Model**:
1. **From "Attack" to "Imbalance"**: The essence of disease is not "being attacked," but "balance being broken." Attack is only one of the causes of imbalance, and the system's self-regulatory ability is the key to determining whether disease occurs.
2. **From "Passive" to "Active"**: The system does not passively accept attacks, but actively regulates balance through various mechanisms. The algorithm needs to calculate the system's regulatory ability, not just the attack force.
3. **From "Static" to "Dynamic"**: Balance is dynamic and changing — attack force is changing, regulatory ability is also changing, and the system's balance state is constantly changing. The algorithm needs to dynamically calculate the system's balance state, rather than giving a static conclusion.
4. **From "Confrontation" to "Balance"**: The goal of treatment is not to "eliminate the attacker," but to "restore balance" — by correcting biases and remedying deficiencies, helping the system restore dynamic balance. This is also the core idea of Traditional Chinese Medicine "aiming at balance."

**Reflection in the Algorithm**:
- The Trigger Point is no longer just the "attacker," but the "trigger factor that causes system imbalance."
- The Stagnation Point is no longer just the "attacked party," but the "location where system balance is broken and qi mechanism stagnates."
- While calculating attack force, the system's regulatory ability (victory-reversal, stagnation-eruption, Tong Shi, brake, etc.) must be calculated.
- Disease risk = attack force - regulatory ability, not simply attack force.

This Dynamic Balance Model is the "living soul" of Five Motions and Six Qi — it makes the system truly "come alive," rather than a passive "target" that only gets attacked.

### 6.5 Five Relationships Between Motion and Qi

Based on the Dynamic Balance Model, the relationship between Heavenly Stems (Motion) and Earthly Branches (Qi) is not only "Motion restricts Qi," but has **five** types:

| Relationship | Meaning | Impact on System Balance | Regulatory Direction |
|-------------|---------|--------------------------|---------------------|
| **Motion restricts Qi** | Annual Motion Five Elements restricts Earthly Branch Six Qi Five Elements | Earthly Branch suppressed, qi mechanism stagnates (most prone to disease) | Need to support Earthly Branch, restrain Annual Motion |
| **Motion generates Qi** | Annual Motion Five Elements generates Earthly Branch Six Qi Five Elements | Earthly Branch promoted, qi mechanism excessive (may be excess syndrome) | Need to drain Earthly Branch, prevent excess |
| **Qi restricts Motion** | Earthly Branch Six Qi Five Elements restricts Annual Motion Five Elements | Annual Motion constrained, attack braked (protective mechanism) | System self-regulates, generally no intervention needed |
| **Qi generates Motion** | Earthly Branch Six Qi Five Elements generates Annual Motion Five Elements | Earthly Branch consumed, qi mechanism deficient (may be deficiency syndrome) | Need to supplement Earthly Branch, prevent deficiency |
| **Same Qi** | Annual Motion Five Elements same as Earthly Branch Six Qi Five Elements | Like attracts like, qi mechanism excessive (may be excess) | Need to prevent excess, maintain balance |

**Dynamic Balance Significance of These Five Relationships**:
- **Motion restricts Qi** and **Motion generates Qi** are unidirectional actions of "Motion" on "Qi," easily leading to Qi imbalance (suppressed or promoted).
- **Qi restricts Motion** and **Qi generates Motion** are counteractions of "Qi" on "Motion," which are the system's self-regulatory mechanisms — Qi can constrain Motion's attack (Qi restricts Motion), or consume itself to promote Motion (Qi generates Motion).
- **Same Qi** is the superposition of Motion and Qi, with amplified force, easily leading to excess.

**Note**: These five relationships are mainly judged based on **Six Qi Five Elements** (the main Five Elements of Earthly Branches), with Four Directions Five Elements as auxiliary reference.

**Application in the Algorithm**:
- Calculate the relationship between each Earthly Branch and Annual Motion (one of the five relationships).
- Earthly Branches with Motion restricting Qi are "high-risk Earthly Branches" (easily suppressed, forming Stagnation Points).
- Earthly Branches with Qi restricting Motion are "protective Earthly Branches" (can brake Annual Motion attacks, serving as the system's self-protection).
- Comprehensively consider the relationships between all Earthly Branches and Annual Motion to calculate the system's overall balance state.

### 6.6 Differences Between Dynamic Stagnation Point Calculation and Traditional Five Motions and Six Qi

Traditional Five Motions and Six Qi calculations mostly stay at the "macro level" — calculating that a certain year has a certain Qi excessive, prone to certain types of diseases. But specifically for an individual, "which zang-fu organ will develop disease," "when will it develop," "how severe will it be," "how does the system regulate," traditional theory does not give clear answers.

The innovations of Dynamic Stagnation Point Calculation are:

First, **from macro to micro**. Traditional calculation focuses on disease trends at the "population level," while Dynamic Stagnation Point Calculation focuses on specific lesions at the "individual level."

Second, **from qualitative to quantitative**. Traditional calculation gives qualitative descriptions such as "prone to liver disease," while Dynamic Stagnation Point Calculation gives quantitative results such as "Trigger Point = Yin, Stagnation Point = Si, Core Organ = Liver/Gallbladder, High-Risk Period = Yin month (1st month), Exacerbation Period = Si month (4th month)."

Third, **from static to dynamic**. Traditional calculation focuses on the "configuration at birth" (static), while Dynamic Stagnation Point Calculation focuses on the dynamic interaction of "birth configuration + current time configuration" (dynamic), while calculating the system's self-regulatory ability.

Fourth, **from vague to precise**. The "stagnation" in traditional calculation is a vague concept, while Dynamic Stagnation Point Calculation concretizes "stagnation" into the precise structure of "Trigger Point - Stagnation Point - Tong Shi - Core Organ - Affected Meridians."

Fifth, **from attack to balance**. Traditional models (including previous versions of this book) overemphasize "attack-attacked," while Dynamic Stagnation Point Calculation emphasizes "dynamic balance" — the system is living and self-regulating, disease is the result of balance being broken, and treatment is the process of restoring balance.

Sixth, **from single school to principal-auxiliary**. Traditional models use only one school of Five Elements (either only Six Qi, or only direction), while Dynamic Stagnation Point Calculation adopts the "Six Qi as Principal, Four Directions as Auxiliary" strategy, simultaneously considering the Earthly Branch's "work content" and "hometown background," making the calculation more comprehensive.

Seventh, **from single module to dual module**. Traditional models have only one calculation module, while Dynamic Stagnation Point Calculation adopts a **dual-module structure** — "Core Stagnation Point Analysis" and "Six Qi Brake Dynamic Stagnation Point Calculation," two modules analyzing from different angles, complementing each other:
- **Core Stagnation Point Analysis** (from Annual Motion/Heavenly Stem angle): Starting from Annual Motion Excess/Deficiency, analyze the attacked Five Elements (main Stagnation Point), Stagnation Point type (excess stagnation/deficiency stagnation), Stagnation Point location (Earthly Branch), stagnation qi intensity (quantitative score), prone time (Trigger Point list), corresponding meridians (attacker's meridians), disease risk (stable/unstable). This module answers "which element is stagnated overall, and how severe is the stagnation."
- **Six Qi Brake Dynamic Stagnation Point Calculation** (from Six Qi/Earthly Branch angle): Starting from the Four Pillars Earthly Branches, calculate Power Trigger Point, Core Stagnation Point, Core Damaged Organ, First Affected Meridian, Tong Shi Backup, High-Risk Period, Exacerbation Period. This module answers "specifically which Earthly Branch is the Trigger Point, which Earthly Branch is the Stagnation Point, which organ is damaged, and which meridians are affected."

The relationship between these two modules is: Core Stagnation Point Analysis is "macro overall judgment," Dynamic Stagnation Point Calculation is "micro specific positioning" — the former tells us "which element is stagnated," the latter tells us "specifically where and how it transmits." Only by combining both can a complete calculation result be given.

Of course, whether these innovations are effective still needs to be verified through large-sample clinical data. The work of this book only provides a computable and verifiable algorithm framework, and the ultimate effectiveness needs to be tested by practice.

## 2. Calculation of Trigger Point

### 6.7 Redefinition of Trigger Point: The Trigger Factor That Causes System Imbalance

In the Dynamic Balance Model, the **Trigger Point** is no longer just the "attacker," but **the trigger factor that causes system balance to be broken** — it is the "first driving force" that breaks balance.

The essence of the Trigger Point is: Annual Motion Excess/Deficiency has a "Motion restricts Qi" or "Motion generates Qi" relationship with the Six Qi Five Elements (principal) or Four Directions Five Elements (auxiliary) of a certain Earthly Branch, causing the qi mechanism of that Earthly Branch to begin to imbalance. This Earthly Branch is the Trigger Point — it is the starting point of imbalance and the "trigger" of disease.

### 6.8 Trigger Point Calculation for Excess Years (Six Qi as Principal, Four Directions as Auxiliary)

**Definition**: When Annual Motion is Excess, the force of Annual Motion Five Elements is excessive, and it will go to "restrict" or "generate" Earthly Branches. Among them, Earthly Branches with "Motion restricts Qi" are the most easily suppressed and most prone to form stagnation, so they are prioritized as Trigger Points.

**Calculation Formula** (corrected version — Six Qi as Principal, Four Directions as Auxiliary):
```
Input: Annual Motion Five Elements + Excess/Deficiency + Four Pillars Earthly Branch list (Year Branch, Month Branch, Day Branch, Hour Branch)

if Annual Motion Excess/Deficiency == Excess:
    Attacked Five Elements = the element restricted by Annual Motion Five Elements (what I restrict)
    
    # Round 1: Search with Six Qi Five Elements (principal)
    for zhi in Four Pillars Earthly Branch list:
        zhi_liugi_wuxing = Earthly Branch Six Qi Five Elements table[zhi]
        if zhi_liugi_wuxing == Attacked Five Elements:
            Trigger Point = zhi
            Trigger Point source = "Six Qi Five Elements (principal)"
            break
    
    # Round 2: If not found with Six Qi Five Elements, supplement search with Four Directions Five Elements (auxiliary)
    if Trigger Point not found:
        for zhi in Four Pillars Earthly Branch list:
            zhi_sifang_wuxing = Earthly Branch Four Directions Five Elements table[zhi]
            if zhi_sifang_wuxing == Attacked Five Elements:
                Trigger Point = zhi
                Trigger Point source = "Four Directions Five Elements (auxiliary)"
                break
    
    # Round 3: If still not found, lower priority, use Six Qi Five Elements to find "mother of what I restrict"
    if Trigger Point not found:
        beigongji_zhimu = the Five Elements that generates "Attacked Five Elements"
        for zhi in Four Pillars Earthly Branch list:
            if Earthly Branch Six Qi Five Elements table[zhi] == beigongji_zhimu:
                Trigger Point = zhi
                Trigger Point source = "Six Qi Five Elements (mother of what I restrict)"
                break
        if Trigger Point not found:
            for zhi in Four Pillars Earthly Branch list:
                if Earthly Branch Four Directions Five Elements table[zhi] == beigongji_zhimu:
                    Trigger Point = zhi
                    Trigger Point source = "Four Directions Five Elements (mother of what I restrict)"
                    break
    
    # Subsequent priorities follow this pattern (son of what I restrict, mother of Annual Motion, self-stagnation), all following the principle of "Six Qi first, Four Directions later"
    ...
```

**Priority Order** (Excess years, each level follows "Six Qi first, Four Directions later"):
1. Earthly Branch of what I restrict (highest priority, Motion restricts Qi, most prone to stagnation)
2. Earthly Branch of mother of what I restrict (generates what I restrict, indirectly promotes the attacked party)
3. Earthly Branch of son of what I restrict (generated by what I restrict, downstream of the attacked party)
4. Earthly Branch of mother of Annual Motion Five Elements (generates Annual Motion, promotes the attacker)
5. Earthly Branch of Annual Motion Five Elements itself (self-stagnation, lowest priority)

**Key Correction**: Each priority level follows the **"Six Qi first, Four Directions later"** principle — first search with Six Qi Five Elements, then supplement with Four Directions Five Elements when not found. This embodies the core principle of "Six Qi as Principal, Four Directions as Auxiliary."

### 6.9 Trigger Point Calculation for Deficiency Years (Six Qi as Principal, Four Directions as Auxiliary)

**Definition**: When Annual Motion is Deficient, the force of Annual Motion Five Elements is deficient, and the force of "what restricts me" is relatively excessive, coming to "restrict" Annual Motion Five Elements. The first Earthly Branch in the Four Pillars that belongs to "what restricts me" is the Trigger Point — it is the trigger factor that causes Annual Motion to be more deficient and the system to imbalance.

**Calculation Formula** (corrected version — Six Qi as Principal, Four Directions as Auxiliary):
```
Input: Annual Motion Five Elements + Excess/Deficiency + Four Pillars Earthly Branch list

if Annual Motion Excess/Deficiency == Deficiency:
    Attacking Five Elements = the Five Elements that restricts Annual Motion Five Elements (what restricts me)
    
    # Round 1: Search with Six Qi Five Elements (principal)
    for zhi in Four Pillars Earthly Branch list:
        if Earthly Branch Six Qi Five Elements table[zhi] == Attacking Five Elements:
            Trigger Point = zhi
            Trigger Point source = "Six Qi Five Elements (principal)"
            break
    
    # Round 2: If not found with Six Qi Five Elements, supplement search with Four Directions Five Elements (auxiliary)
    if Trigger Point not found:
        for zhi in Four Pillars Earthly Branch list:
            if Earthly Branch Four Directions Five Elements table[zhi] == Attacking Five Elements:
                Trigger Point = zhi
                Trigger Point source = "Four Directions Five Elements (auxiliary)"
                break
    
    # Subsequent priorities follow this pattern (mother of what restricts me, son of what restricts me, self-stagnation), all following "Six Qi first, Four Directions later"
    ...
```

**Priority Order** (Deficiency years, each level follows "Six Qi first, Four Directions later"):
1. Earthly Branch of what restricts me (highest priority, Qi restricts Motion, most direct attack)
2. Earthly Branch of mother of what restricts me (generates what restricts me, indirectly promotes the attacker)
3. Earthly Branch of son of what restricts me (generated by what restricts me, downstream of the attacker)
4. Earthly Branch of Annual Motion Five Elements itself (self-stagnation, lowest priority)

### 6.10 Calculation Example: 1990 (Geng Wu year, Metal Motion Excess)

**Input**:
- Annual Motion Five Elements = Metal
- Excess/Deficiency = Excess
- Assume Four Pillars Earthly Branches = [Wu, Yin, Zi, Mao] (Year Branch = Wu, Month Branch = Yin, Day Branch = Zi, Hour Branch = Mao)

**Calculation Process**:
1. Annual Motion = Metal Excess, Attacked Five Elements = what Metal restricts = Wood
2. Round 1 (Six Qi Five Elements, principal): Search for the first Earthly Branch in the Four Pillars whose Six Qi Five Elements belongs to "Wood":
   - Year Branch = Wu: Six Qi Five Elements = Fire (Shaoyin Sovereign Fire) → not Wood
   - Month Branch = Yin: Six Qi Five Elements = Fire (Shaoyang Ministerial Fire) → not Wood
   - Day Branch = Zi: Six Qi Five Elements = Fire (Shaoyin Sovereign Fire) → not Wood
   - Hour Branch = Mao: Six Qi Five Elements = Metal (Yangming Dry Metal) → not Wood
   - No Earthly Branch with Six Qi Five Elements of "Wood" in the Four Pillars!
3. Round 2 (Four Directions Five Elements, auxiliary): Search for the first Earthly Branch in the Four Pillars whose Four Directions Five Elements belongs to "Wood":
   - Year Branch = Wu: Four Directions Five Elements = Fire → not Wood
   - Month Branch = Yin: Four Directions Five Elements = Wood → **Found!**
   - Trigger Point = Yin, Trigger Point source = "Four Directions Five Elements (auxiliary)"
4. Yin's Six Qi = Shaoyang Ministerial Fire (Dui Hua, coefficient 0.7), Four Directions Five Elements = Wood

**Output**: Trigger Point = Yin (source: Four Directions Five Elements auxiliary)

**Interpretation**:
- People born in 1990 (Geng Wu year, Metal Motion Excess) have excessive Metal qi, actively attacking Wood (Liver/Gallbladder).
- Searching with Six Qi Five Elements (principal), there is no Earthly Branch belonging to Wood in the Four Pillars — this means from the perspective of "work content" (Six Qi), there is no Earthly Branch directly attacked by Metal.
- Supplementing the search with Four Directions Five Elements (auxiliary), Yin's Four Directions Five Elements = Wood — this means from the perspective of "hometown background" (Four Directions), Yin has the attribute of Wood and will be attacked by Metal.
- Therefore Yin is the Trigger Point — although Yin's "work" is Shaoyang Ministerial Fire (Pericardium/Triple Burner), its "hometown" is Wood (East/Spring), and Metal restricts Wood, so Yin will be attacked by Metal.
- This is precisely the value of "Six Qi as Principal, Four Directions as Auxiliary" — when no match is found with Six Qi Five Elements, Four Directions Five Elements provides supplementary information, so that the calculation does not miss key Trigger Points.
- Yin corresponds to the 1st month (Yin month), so the 1st month is the time period when the disease is prone to exacerbation (Exacerbation Period).

**Comparison with Old Algorithm**:
- Old algorithm (only Six Qi Five Elements): No Earthly Branch with Six Qi Five Elements of Wood in the Four Pillars, would continue to lower priority to search (e.g., find "mother of what I restrict" = Water), possibly finding other Earthly Branches as Trigger Points.
- New algorithm (Six Qi as Principal, Four Directions as Auxiliary): When not found with Six Qi, supplement with Four Directions, found Yin (Four Directions Five Elements = Wood) as Trigger Point.
- This is an important difference — the new algorithm, through the supplement of Four Directions Five Elements, found a more direct Trigger Point (Yin = Wood, restricted by Metal), while the old algorithm might find an indirect Trigger Point.

## 3. Calculation of Stagnation Point

### 6.11 Redefinition of Stagnation Point: The Location Where System Balance is Broken and Qi Mechanism Stagnates

In the Dynamic Balance Model, the **Stagnation Point** is no longer just the "attacked party," but **the location where system balance is broken and qi mechanism stagnates** — it is the "lesion point" of disease, the place where qi mechanism does not flow smoothly and qi-blood-fluid stagnates.

The formation mechanism of the Stagnation Point: The Trigger Point (trigger factor) causes system imbalance, and the imbalance transmits along the chain of Five Elements generation-restriction, eventually "stopping" at a certain Earthly Branch, forming qi mechanism stagnation — this Earthly Branch is the Stagnation Point.

### 6.12 Priority Algorithm for Stagnation Point (Six Qi as Principal, Four Directions as Auxiliary)

**Calculation Formula**:
```
Input: Trigger Point Earthly Branch + Four Pillars Earthly Branch list

Step 1: Determine the main Five Elements of the Trigger Point (Six Qi Five Elements, principal)
  TriggerPoint_liugi_wuxing = Earthly Branch Six Qi Five Elements table[Trigger Point]  # main Five Elements
  TriggerPoint_sifang_wuxing = Earthly Branch Four Directions Five Elements table[Trigger Point]  # auxiliary Five Elements (reference)

Step 2: Determine the restricted Five Elements (what the Trigger Point's Six Qi Five Elements restricts, principal)
  beike_wuxing = Five Elements restriction table[TriggerPoint_liugi_wuxing]  # what I restrict (main)
  # Note: Here mainly use Six Qi Five Elements to determine the restricted Five Elements, with Four Directions Five Elements as reference

Step 3: Search for Stagnation Point by priority (each level follows "Six Qi first, Four Directions later"):
  a. Earthly Branch of the restricted element (≠ Trigger Point):
     - First search with Six Qi Five Elements, then with Four Directions Five Elements if not found
  b. Earthly Branch of mother of the restricted element (generates the restricted Five Elements, ≠ Trigger Point):
     - First search with Six Qi Five Elements, then with Four Directions Five Elements if not found
  c. Earthly Branch of son of the restricted element (generated by the restricted Five Elements, ≠ Trigger Point):
     - First search with Six Qi Five Elements, then with Four Directions Five Elements if not found
  d. Earthly Branch of mother of the Trigger Point (generates Trigger Point's Six Qi Five Elements, ≠ Trigger Point):
     - First search with Six Qi Five Elements, then with Four Directions Five Elements if not found
  e. Self-stagnation (Stagnation Point = Trigger Point itself)

Step 4: Stagnation Point = the first Earthly Branch found

Output: Stagnation Point Earthly Branch + Six Qi + Four Directions Five Elements + source (Six Qi/Four Directions)
```

**Key Corrections**:
1. The main Five Elements of the Trigger Point uses **Six Qi Five Elements** (principal), with Four Directions Five Elements as auxiliary reference.
2. The restricted Five Elements is mainly determined by the **Trigger Point's Six Qi Five Elements** (what I restrict), with Four Directions Five Elements as reference.
3. Each level of search follows the **"Six Qi first, Four Directions later"** principle.

### 6.13 Calculation Example: 1990 (Geng Wu year, Metal Motion Excess, Trigger Point = Yin)

**Input**:
- Trigger Point = Yin
- Four Pillars Earthly Branches = [Wu, Yin, Zi, Mao]

**Calculation Process**:
1. Trigger Point Yin's main Five Elements (Six Qi Five Elements, principal) = Fire (Shaoyang Ministerial Fire)
   Trigger Point Yin's auxiliary Five Elements (Four Directions Five Elements, auxiliary) = Wood (reference)
2. Restricted Five Elements (what the Trigger Point's Six Qi Five Elements restricts, principal) = Fire restricts Metal → Restricted Five Elements = Metal
3. Search by priority (each level follows "Six Qi first, Four Directions later"):
   a. Earthly Branch of the restricted element (Metal) (≠ Trigger Point):
      - Round 1 (Six Qi Five Elements, principal):
        - Year Branch = Wu: Six Qi Five Elements = Fire → not Metal
        - Month Branch = Yin (Trigger Point, skip)
        - Day Branch = Zi: Six Qi Five Elements = Fire → not Metal
        - Hour Branch = Mao: Six Qi Five Elements = Metal (Yangming Dry Metal) → **Found!**
      - Stagnation Point = Mao, source = "Six Qi Five Elements (principal)"
4. Mao's Six Qi = Yangming Dry Metal (Dui Hua, coefficient 0.7), Four Directions Five Elements = Wood

**Output**: Stagnation Point = Mao (source: Six Qi Five Elements principal)

**Interpretation**:
- Trigger Point = Yin, main Five Elements is Fire (Shaoyang Ministerial Fire, Six Qi Five Elements), Fire restricts Metal, so the restricted Five Elements is Metal.
- Searching with Six Qi Five Elements (principal), Mao's Six Qi Five Elements = Metal (Yangming Dry Metal), so Stagnation Point = Mao.
- Mao's Six Qi = Yangming Dry Metal, corresponding to the Lung/Large Intestine system — this is the main location of the lesion.
- Mao's Four Directions Five Elements = Wood (auxiliary), indicating that the lesion may simultaneously affect the Liver/Gallbladder system.
- Mao corresponds to the 2nd month (Mao month), so the 2nd month is the time period when the disease is prone to onset (High-Risk Period).

**Comparison with Old Algorithm**:
- Old algorithm (union of both schools): Trigger Point Yin's Five Elements = {Fire, Wood}, restricted Five Elements = {Metal, Earth}, search for Earthly Branches belonging to Metal or Earth, found Mao (Six Qi Five Elements = Metal).
- New algorithm (Six Qi as Principal, Four Directions as Auxiliary): Trigger Point Yin's main Five Elements = Fire (Six Qi), restricted Five Elements = Metal, search with Six Qi Five Elements, found Mao (Six Qi Five Elements = Metal).
- In this example, the results of the old and new algorithms are the same (both Mao), but the logic of the new algorithm is clearer — with Six Qi Five Elements as principal and Four Directions Five Elements as auxiliary, rather than a simple union.

## 4. Calculation of Tong Shi Substitution

### 6.14 Definition of Tong Shi (Unchanged)

**Tong Shi Substitute** is another Earthly Branch that belongs to the same Six Qi as the Stagnation Point Earthly Branch. When the Stagnation Point Earthly Branch is not in the Four Pillars, the Tong Shi Earthly Branch substitutes to assume the responsibility of the Stagnation Point.

**Tong Shi Correspondence Table** (based on Six Qi attributes, unchanged):

| Six Qi | Earthly Branch 1 (Zheng Hua) | Earthly Branch 2 (Dui Hua) | Tong Shi Relationship | Division of Labor |
|-------|------------------------------|----------------------------|---------------------|------------------|
| Shaoyin Sovereign Fire | Wu (Zheng Hua) | Zi (Dui Hua) | Wu and Zi are mutual Tong Shi | Wu governs Heart (Fire), Zi governs Kidney (Water), Heart-Kidney interaction |
| Taiyin Damp Earth | Wei (Zheng Hua) | Chou (Dui Hua) | Wei and Chou are mutual Tong Shi | Wei governs Spleen (Damp), Chou governs Liver (Wind), Earth-Wood coordination |
| Shaoyang Ministerial Fire | Shen (Zheng Hua) | Yin (Dui Hua) | Shen and Yin are mutual Tong Shi | Shen governs Triple Burner (Fire), Yin governs Gallbladder (Wood), Wood-Fire generation |
| Yangming Dry Metal | You (Zheng Hua) | Mao (Dui Hua) | You and Mao are mutual Tong Shi | You governs Lung (Metal), Mao governs Liver (Wood), Metal-Wood restriction |
| Taiyang Cold Water | Xu (Zheng Hua) | Chen (Dui Hua) | Xu and Chen are mutual Tong Shi | Xu governs Kidney (Water), Chen governs Stomach (Earth), Water-Earth restriction |
| Jueyin Wind Wood | Hai (Zheng Hua) | Si (Dui Hua) | Hai and Si are mutual Tong Shi | Hai governs Liver (Wood), Si governs Heart (Fire), Wood-Fire generation |

**Note**: Zheng Hua and Dui Hua Earthly Branches have different division of labor but coordinated work (see Section 6.3 for details), and this division of labor relationship needs to be considered when Tong Shi substitutes.

### 6.15 Tong Shi Substitution Algorithm and Tong Shi Backup Warning

The Tong Shi substitution algorithm is based on Six Qi attributes to find the Tong Shi Earthly Branch, because the essence of Tong Shi is "belonging to the same Six Qi," which is directly related to Six Qi Five Elements and has little relationship with Four Directions Five Elements.

**Important Correction: Tong Shi Backup and Warning Mechanism**

Even if the Stagnation Point Earthly Branch is in the Four Pillars, the Tong Shi backup and warning should still be displayed — because the Tong Shi Earthly Branch and the Stagnation Point Earthly Branch belong to the same Six Qi, and the two **are mutual backup brakes**, jointly assuming the regulatory function of that Six Qi. When the Stagnation Point Earthly Branch is attacked, the Tong Shi Earthly Branch will automatically "fill in" to enhance regulatory ability; but if both are attacked simultaneously ("concurrent wear"), the regulatory ability will drop significantly, and disease risk will increase significantly.

Therefore, Tong Shi has two levels of function:
1. **Substitution function**: When the Stagnation Point Earthly Branch is not in the Four Pillars, the Tong Shi Earthly Branch substitutes to assume the responsibility of the Stagnation Point.
2. **Backup function**: When the Stagnation Point Earthly Branch is in the Four Pillars, the Tong Shi Earthly Branch serves as a "backup brake," jointly assuming regulatory function with the Stagnation Point Earthly Branch, and need to be alert to "concurrent wear" of the two.

**Calculation Formula**:
```
Input: Stagnation Point Earthly Branch + Four Pillars Earthly Branch list

Step 1: Find the Tong Shi Earthly Branch
  Tong Shi Earthly Branch = another Earthly Branch belonging to the same Six Qi as the Stagnation Point Earthly Branch

Step 2: Determine whether the Stagnation Point is in the Four Pillars
if Stagnation Point Earthly Branch in Four Pillars Earthly Branch list:
    Actual Stagnation Point = Stagnation Point Earthly Branch
    Substitution mark = "No substitution (Stagnation Point in Four Pillars)"
    Backup mark = "Has Tong Shi backup (Tong Shi Earthly Branch=" + Tong Shi Earthly Branch + ", mutual backup brakes)"
    Warning mark = "Need to be alert to concurrent wear (when Stagnation Point and Tong Shi are attacked simultaneously, regulatory ability drops significantly)"
else:
    if Tong Shi Earthly Branch in Four Pillars Earthly Branch list:
        Actual Stagnation Point = Tong Shi Earthly Branch
        Substitution mark = "Tong Shi substitution (Stagnation Point not in Four Pillars, Tong Shi takes over)"
        Backup mark = "Tong Shi has substituted (original Stagnation Point not in Four Pillars, Tong Shi assumes full responsibility)"
        Warning mark = "Substitution intensity decreased (Tong Shi taking over has slightly lower intensity than original Stagnation Point)"
    else:
        Actual Stagnation Point = Stagnation Point Earthly Branch (still use original Stagnation Point, but marked as "not in Four Pillars")
        Substitution mark = "No substitution (both Stagnation Point and Tong Shi not in Four Pillars, calculate according to original Stagnation Point)"
        Backup mark = "No backup (both Stagnation Point and Tong Shi not in Four Pillars)"
        Warning mark = "Insufficient regulatory ability (no Tong Shi backup, need special attention)"

Step 3: Check whether Tong Shi Earthly Branch is in the Four Pillars (for concurrent wear warning)
if Tong Shi Earthly Branch in Four Pillars Earthly Branch list:
    Concurrent wear risk = "High (both Stagnation Point and Tong Shi in Four Pillars, may be attacked simultaneously)"
else:
    Concurrent wear risk = "Low (Tong Shi not in Four Pillars, will not be attacked simultaneously)"

Output: Actual Stagnation Point + Substitution mark + Backup mark + Warning mark + Concurrent wear risk
```

**Example**: Stagnation Point = Wu (Shaoyin Sovereign Fire), Tong Shi = Zi (Shaoyin Sovereign Fire)
- If Wu is in the Four Pillars: Actual Stagnation Point = Wu, no substitution, has Tong Shi backup (Zi), need to be alert to concurrent wear (when Wu and Zi are attacked simultaneously, the regulatory ability of Shaoyin Sovereign Fire drops significantly)
- If Wu is not in the Four Pillars and Zi is in the Four Pillars: Actual Stagnation Point = Zi, Tong Shi substitution, substitution intensity decreased
- If both Wu and Zi are not in the Four Pillars: Actual Stagnation Point = Wu, no substitution, no backup, insufficient regulatory ability

### 6.16 Intensity Correction for Tong Shi Substitution

When the Tong Shi Earthly Branch substitutes, the intensity of the Stagnation Point needs to be multiplied by a correction coefficient (to be verified):

```
if Substitution mark == "Tong Shi substitution":
    if Tong Shi Earthly Branch is Zheng Hua:
        Correction coefficient = 1.0 (Zheng Hua taking over, intensity unchanged)
    else if Tong Shi Earthly Branch is Dui Hua:
        Correction coefficient = 0.8 (Dui Hua taking over, intensity slightly lower)
    Stagnation Point intensity = Original Stagnation Point intensity × Correction coefficient
else:
    Correction coefficient = 1.0 (no substitution, intensity unchanged)
```

**Intensity Correction for Concurrent Wear** (new):

When both the Stagnation Point and Tong Shi are in the Four Pillars, and both are attacked simultaneously (concurrent wear), the regulatory ability will drop significantly, requiring additional intensity correction:

```
if Concurrent wear risk == "High" and Stagnation Point and Tong Shi attacked simultaneously:
    Regulatory ability correction coefficient = 0.5 (regulatory ability decreased by 50%)
    Net attack intensity = Attack force - Regulatory ability × 0.5
else:
    Regulatory ability correction coefficient = 1.0 (normal regulatory ability)
    Net attack intensity = Attack force - Regulatory ability
```

[To be verified: The correction coefficient for Tong Shi substitution = 0.8, and the regulatory ability correction coefficient for concurrent wear = 0.5, are both set based on experience and need to be verified through large-sample clinical data. How to quantify the division of labor difference between Zheng Hua and Dui Hua also requires further research.]

## 5. Determination of Core Organs

### 6.17 Method for Determining Core Organs (Principal+Auxiliary, Six Qi as Principal, Four Directions as Auxiliary)

**Core Organ** is the zang-fu organ corresponding to the Stagnation Point Earthly Branch, and is the core of the pathogenesis. Since Earthly Branches have two schools of Five Elements (Six Qi as Principal, Four Directions as Auxiliary), Core Organs also adopt a **"principal+auxiliary"** structure:

- **Principal Organ**: Determined by the Stagnation Point's **Six Qi Five Elements** (principal) — this is the main aspect of the Core Organ, the "work content" of the Earthly Branch.
- **Auxiliary Organ**: Determined by the Stagnation Point's **Four Directions Five Elements** (auxiliary) — this is the auxiliary aspect of the Core Organ, the "hometown background" of the Earthly Branch.

If Six Qi Five Elements and Four Directions Five Elements are consistent, then Principal Organ = Auxiliary Organ (single Core Organ); if inconsistent, the Core Organ has both principal and auxiliary aspects.

**Calculation Formula**:
```
Input: Actual Stagnation Point Earthly Branch

Step 1: Look up Earthly Branch-Six Qi correspondence table to obtain the Stagnation Point's Six Qi attribute and Six Qi Five Elements
Step 2: Look up Six Qi Five Elements-Organ correspondence table to obtain the Principal Organ (organ corresponding to Six Qi Five Elements)
Step 3: Look up Earthly Branch-Four Directions Five Elements correspondence table to obtain the Stagnation Point's Four Directions Five Elements
Step 4: Look up Four Directions Five Elements-Organ correspondence table to obtain the Auxiliary Organ (organ corresponding to Four Directions Five Elements)
Step 5: If Six Qi Five Elements == Four Directions Five Elements, then Core Organ = single organ (principal=auxiliary)
       If Six Qi Five Elements != Four Directions Five Elements, then Core Organ = Principal Organ + Auxiliary Organ

Output: Core Organ (principal+auxiliary)
```

**Complete Correspondence Table of Earthly Branch-Six Qi-Organ-Four Directions Five Elements**:

| Earthly Branch | Six Qi (Principal) | Six Qi Five Elements | Principal Organ (Six Qi) | Four Directions Five Elements (Auxiliary) | Auxiliary Organ (Four Directions) | Two Schools Relationship |
|----------------|-------------------|---------------------|--------------------------|------------------------------------------|----------------------------------|------------------------|
| Zi | Shaoyin Sovereign Fire | Fire | Heart/Small Intestine | Water | Kidney/Bladder | Inconsistent |
| Chou | Taiyin Damp Earth | Earth | Spleen/Stomach | Earth | Spleen/Stomach | Consistent |
| Yin | Shaoyang Ministerial Fire | Fire | Pericardium/Triple Burner | Wood | Liver/Gallbladder | Inconsistent |
| Mao | Yangming Dry Metal | Metal | Lung/Large Intestine | Wood | Liver/Gallbladder | Inconsistent |
| Chen | Taiyang Cold Water | Water | Kidney/Bladder | Earth | Spleen/Stomach | Inconsistent |
| Si | Jueyin Wind Wood | Wood | Liver/Gallbladder | Fire | Heart/Small Intestine | Inconsistent |
| Wu | Shaoyin Sovereign Fire | Fire | Heart/Small Intestine | Fire | Heart/Small Intestine | Consistent |
| Wei | Taiyin Damp Earth | Earth | Spleen/Stomach | Earth | Spleen/Stomach | Consistent |
| Shen | Shaoyang Ministerial Fire | Fire | Pericardium/Triple Burner | Metal | Lung/Large Intestine | Inconsistent |
| You | Yangming Dry Metal | Metal | Lung/Large Intestine | Metal | Lung/Large Intestine | Consistent |
| Xu | Taiyang Cold Water | Water | Kidney/Bladder | Earth | Spleen/Stomach | Inconsistent |
| Hai | Jueyin Wind Wood | Wood | Liver/Gallbladder | Water | Kidney/Bladder | Inconsistent |

### 6.18 Calculation Example: Stagnation Point = Mao

**Input**: Stagnation Point = Mao

**Calculation Process**:
1. Mao's Six Qi = Yangming Dry Metal, Six Qi Five Elements = Metal → Principal Organ = Lung/Large Intestine
2. Mao's Four Directions Five Elements = Wood → Auxiliary Organ = Liver/Gallbladder
3. Six Qi Five Elements (Metal) ≠ Four Directions Five Elements (Wood) → Core Organ = Lung/Large Intestine (principal) + Liver/Gallbladder (auxiliary)

**Output**: Core Organ = Lung/Large Intestine (principal) + Liver/Gallbladder (auxiliary)

**Interpretation**:
- Stagnation Point = Mao, Six Qi Five Elements = Metal (Yangming Dry Metal), corresponding to Lung/Large Intestine — this is the main diseased organ, Mao's "work content."
- Mao's Four Directions Five Elements = Wood, corresponding to Liver/Gallbladder — this is the auxiliary diseased organ, Mao's "hometown background."
- This "principal+auxiliary" Core Organ judgment is more comprehensive than a single organ judgment — it reveals that the disease is mainly in the Lung/Large Intestine, but may simultaneously affect the Liver/Gallbladder system, and treatment should focus on Lung/Large Intestine while taking into account Liver/Gallbladder.

## 6. Calculation of Affected Meridians (Three-Layer Logic)

### 6.19 Method for Calculating Affected Meridians: Three-Layer Logic (Major Correction)

**Affected Meridians** are the meridian paths affected by disease. Previous algorithms used the "Five Elements generation-restriction diffusion" method, but this method is too general and lacks hierarchy.

According to your correction, the calculation of Affected Meridians adopts **three-layer logic** — from direct to indirect, from shallow to deep, progressing layer by layer:

**First Layer (first, most direct): Meridians directly corresponding to Earthly Branches**
- Based on the traditional correspondence of **twelve Earthly Branches/twelve time periods corresponding to twelve meridians**.
- Each Earthly Branch directly corresponds to one meridian (the meridian on duty for that Earthly Branch).
- This is the most direct and most superficial Affected Meridian — the disease first affects this meridian.

**Direct Correspondence Table of Twelve Earthly Branches-Twelve Meridians**:

| Earthly Branch | Time Period | Directly Corresponding Meridian | Corresponding Organ |
|----------------|------------|--------------------------------|-------------------|
| Zi | 23:00-1:00 | Foot Shaoyang Gallbladder Meridian | Gallbladder |
| Chou | 1:00-3:00 | Foot Jueyin Liver Meridian | Liver |
| Yin | 3:00-5:00 | Hand Taiyin Lung Meridian | Lung |
| Mao | 5:00-7:00 | Hand Yangming Large Intestine Meridian | Large Intestine |
| Chen | 7:00-9:00 | Foot Yangming Stomach Meridian | Stomach |
| Si | 9:00-11:00 | Foot Taiyin Spleen Meridian | Spleen |
| Wu | 11:00-13:00 | Hand Shaoyin Heart Meridian | Heart |
| Wei | 13:00-15:00 | Hand Taiyang Small Intestine Meridian | Small Intestine |
| Shen | 15:00-17:00 | Foot Taiyang Bladder Meridian | Bladder |
| You | 17:00-19:00 | Foot Shaoyin Kidney Meridian | Kidney |
| Xu | 19:00-21:00 | Hand Jueyin Pericardium Meridian | Pericardium |
| Hai | 21:00-23:00 | Hand Shaoyang Triple Burner Meridian | Triple Burner |

**Second Layer (triggered by Six Qi attribute): Two meridians corresponding to Six Qi**
- Based on the relationship of **Three Yin Three Yang Six Qi corresponding to meridians** — each Six Qi (Three Yin Three Yang) corresponds to two meridians: one hand meridian and one foot meridian.
- This is the Affected Meridian triggered by the Earthly Branch's Six Qi attribute — the disease starts from the Earthly Branch's "work content" (Six Qi) and affects the two meridians corresponding to that Six Qi.
- This is the middle-layer Affected Meridian — deeper than the first layer, triggered by the Six Qi attribute.

**Six Qi-Meridian Correspondence Table (each Three Yin Three Yang corresponds to hand meridian + foot meridian)**:

| Six Qi | Three Yin Three Yang | Hand Meridian | Foot Meridian | Two Meridians |
|-------|---------------------|--------------|--------------|--------------|
| Jueyin Wind Wood | Jueyin | Hand Jueyin Pericardium Meridian | Foot Jueyin Liver Meridian | Pericardium Meridian + Liver Meridian |
| Shaoyin Sovereign Fire | Shaoyin | Hand Shaoyin Heart Meridian | Foot Shaoyin Kidney Meridian | Heart Meridian + Kidney Meridian |
| Shaoyang Ministerial Fire | Shaoyang | Hand Shaoyang Triple Burner Meridian | Foot Shaoyang Gallbladder Meridian | Triple Burner Meridian + Gallbladder Meridian |
| Taiyin Damp Earth | Taiyin | Hand Taiyin Lung Meridian | Foot Taiyin Spleen Meridian | Lung Meridian + Spleen Meridian |
| Yangming Dry Metal | Yangming | Hand Yangming Large Intestine Meridian | Foot Yangming Stomach Meridian | Large Intestine Meridian + Stomach Meridian |
| Taiyang Cold Water | Taiyang | Hand Taiyang Small Intestine Meridian | Foot Taiyang Bladder Meridian | Small Intestine Meridian + Bladder Meridian |

**Third Layer (transmission, deeper): Zang-fu organ transmission**
- Based on **transmission relationships between zang-fu organs** — the disease further transmits from the zang-fu organs corresponding to Six Qi to related zang-fu organs.
- This is the deepest Affected Meridian — the disease has already penetrated from the meridian level to the zang-fu organ level and has undergone transmission.
- For example: The second layer of Shaoyin Sovereign Fire is Heart Meridian + Kidney Meridian, and the third layer (transmission) is Heart and Kidney — Heart-Kidney non-interaction, Water-Fire non-coordination.

**Relationship Diagram of Three-Layer Logic**:

```
First Layer (most direct): Meridian directly corresponding to Earthly Branch (e.g., Zi = Gallbladder Meridian)
    ↓ Disease penetrates from directly corresponding meridian
Second Layer (triggered by Six Qi): Two meridians corresponding to Six Qi (e.g., Shaoyin = Heart Meridian + Kidney Meridian)
    ↓ Disease penetrates from meridians to zang-fu organs and transmits
Third Layer (transmission): Deeper zang-fu organ transmission (e.g., Heart and Kidney)
```

**Calculation Formula**:
```
Input: Actual Stagnation Point Earthly Branch

Step 1: First Layer (Earthly Branch direct correspondence)
  Direct meridian = Twelve Earthly Branches-Twelve Meridians correspondence table[Stagnation Point Earthly Branch]
  Direct organ = organ corresponding to direct meridian

Step 2: Second Layer (triggered by Six Qi attribute)
  Stagnation Point Six Qi = Earthly Branch-Six Qi correspondence table[Stagnation Point Earthly Branch]
  Six Qi meridians = Six Qi-Meridian correspondence table[Stagnation Point Six Qi]  # hand meridian + foot meridian
  Six Qi organs = organs corresponding to Six Qi meridians

Step 3: Third Layer (transmission)
  Transmission organs = deeper organs determined based on Six Qi attribute and zang-fu organ relationships
  # For example: Shaoyin Sovereign Fire → Heart and Kidney (Heart-Kidney non-interaction)
  #       Taiyin Damp Earth → Spleen and Lung (Earth does not generate Metal)
  #       Shaoyang Ministerial Fire → Gallbladder and Triple Burner (Wood-Fire generation)
  #       Yangming Dry Metal → Lung and Large Intestine (Lung and Large Intestine are internally-externally related)
  #       Taiyang Cold Water → Bladder and Kidney (Kidney and Bladder are internally-externally related)
  #       Jueyin Wind Wood → Liver and Pericardium (Wood-Fire generation)

Step 4: Integrate all meridians, remove duplicates, sort by layer

Output:
  First Layer (direct): Direct meridian + Direct organ
  Second Layer (Six Qi): Six Qi meridians (hand meridian + foot meridian) + Six Qi organs
  Third Layer (transmission): Transmission organs
```

### 6.20 Calculation Example: Stagnation Point = Zi (Shaoyin Sovereign Fire)

**Input**: Stagnation Point = Zi

**Calculation Process**:

**First Layer (Earthly Branch direct correspondence, most direct)**:
- Zi corresponding time period = 23:00-1:00 (Zi hour)
- Direct meridian = Foot Shaoyang Gallbladder Meridian
- Direct organ = Gallbladder
- **The first is the Gallbladder** — the disease first affects the Gallbladder Meridian and Gallbladder organ.

**Second Layer (triggered by Six Qi attribute)**:
- Zi's Six Qi = Shaoyin Sovereign Fire
- Two meridians corresponding to Shaoyin Sovereign Fire = Hand Shaoyin Heart Meridian + Foot Shaoyin Kidney Meridian
- Six Qi organs = Heart + Kidney
- **Shaoyin belongs to Shaoyin Heart Meridian and Shaoyin Kidney Meridian, which are affected** — the disease penetrates from the Gallbladder Meridian, affecting the Heart Meridian and Kidney Meridian.

**Third Layer (transmission, deeper)**:
- Transmission of Shaoyin Sovereign Fire = Heart and Kidney (Heart-Kidney non-interaction, Water-Fire non-coordination)
- **Deeper is the Heart and Kidney, this is the logic of transmission** — the disease penetrates from the meridian level to the zang-fu organ level, manifesting as Heart-Kidney non-interaction.

**Output**:
- First Layer (direct): Foot Shaoyang Gallbladder Meridian, Gallbladder (first, most direct)
- Second Layer (Six Qi): Hand Shaoyin Heart Meridian, Foot Shaoyin Kidney Meridian, Heart, Kidney (triggered by Six Qi attribute)
- Third Layer (transmission): Heart and Kidney (Heart-Kidney non-interaction, deeper)

**Interpretation**:
- Stagnation Point = Zi, the disease's Affected Meridians have three layers:
  1. **First Layer (first)**: Gallbladder Meridian, Gallbladder — this is the most direct, Zi corresponds to Zi hour, Gallbladder Meridian is on duty, the disease first affects the Gallbladder.
  2. **Second Layer (triggered by Six Qi)**: Heart Meridian, Kidney Meridian, Heart, Kidney — Zi's Six Qi is Shaoyin Sovereign Fire, Shaoyin corresponds to Heart Meridian and Kidney Meridian, the disease penetrates from the Gallbladder, affecting the Heart and Kidney.
  3. **Third Layer (transmission)**: Heart and Kidney (Heart-Kidney non-interaction) — the disease further penetrates, manifesting as Heart-Kidney non-interaction, Water-Fire non-coordination.
- This three-layer logic clearly shows the disease's transmission path from shallow to deep, from direct to indirect — the first is the Gallbladder, then the Heart and Kidney, and finally Heart-Kidney non-interaction.
- Treatment should also follow this hierarchy: first treat the Gallbladder (first layer), then treat the Heart and Kidney (second layer), and finally regulate Heart-Kidney interaction (third layer).

**Comparison with Old Algorithm**:
- Old algorithm (Five Elements generation-restriction diffusion): Core Organ = Heart/Small Intestine (Six Qi Five Elements = Fire), then through Five Elements generation-restriction diffusion to Lung/Large Intestine (Fire restricts Metal), Kidney/Bladder (Water restricts Fire), Liver/Gallbladder (Wood generates Fire), Spleen/Stomach (Fire generates Earth) — the result is that all meridians are affected, lacking hierarchy.
- New algorithm (three-layer logic): First layer = Gallbladder Meridian/Gallbladder, Second layer = Heart Meridian + Kidney Meridian/Heart + Kidney, Third layer = Heart-Kidney non-interaction — the result has clear hierarchy, from shallow to deep, from direct to indirect.
- Advantages of the new algorithm: clear hierarchy, prominent focus, clear treatment direction — first treat the first layer (Gallbladder), then the second layer (Heart and Kidney), and finally regulate the third layer (Heart-Kidney interaction).

### 6.21 Calculation Example: Stagnation Point = Mao (Yangming Dry Metal)

**Input**: Stagnation Point = Mao

**Calculation Process**:

**First Layer (Earthly Branch direct correspondence, most direct)**:
- Mao corresponding time period = 5:00-7:00 (Mao hour)
- Direct meridian = Hand Yangming Large Intestine Meridian
- Direct organ = Large Intestine
- **The first is the Large Intestine** — the disease first affects the Large Intestine Meridian and Large Intestine organ.

**Second Layer (triggered by Six Qi attribute)**:
- Mao's Six Qi = Yangming Dry Metal
- Two meridians corresponding to Yangming Dry Metal = Hand Yangming Large Intestine Meridian + Foot Yangming Stomach Meridian
- Six Qi organs = Large Intestine + Stomach
- **Yangming belongs to Yangming Large Intestine Meridian and Yangming Stomach Meridian, which are affected** — the disease penetrates from the Large Intestine, affecting the Large Intestine Meridian and Stomach Meridian.

**Third Layer (transmission, deeper)**:
- Transmission of Yangming Dry Metal = Lung and Large Intestine (Lung and Large Intestine are internally-externally related), Stomach and Spleen (Spleen and Stomach are internally-externally related)
- **Deeper is the Lung and Spleen** — the disease penetrates from the meridian level to the zang-fu organ level, manifesting as Lung-Intestine disharmony, Spleen-Stomach imbalance.

**Output**:
- First Layer (direct): Hand Yangming Large Intestine Meridian, Large Intestine (first, most direct)
- Second Layer (Six Qi): Hand Yangming Large Intestine Meridian, Foot Yangming Stomach Meridian, Large Intestine, Stomach (triggered by Six Qi attribute)
- Third Layer (transmission): Lung and Spleen (Lung-Intestine disharmony, Spleen-Stomach imbalance, deeper)

**Interpretation**:
- Stagnation Point = Mao, the disease's Affected Meridians have three layers:
  1. **First Layer (first)**: Large Intestine Meridian, Large Intestine — Mao corresponds to Mao hour, Large Intestine Meridian is on duty, the disease first affects the Large Intestine.
  2. **Second Layer (triggered by Six Qi)**: Large Intestine Meridian, Stomach Meridian, Large Intestine, Stomach — Mao's Six Qi is Yangming Dry Metal, Yangming corresponds to Large Intestine Meridian and Stomach Meridian, the disease penetrates from the Large Intestine, affecting the Stomach.
  3. **Third Layer (transmission)**: Lung and Spleen — the disease further penetrates, manifesting as Lung-Intestine disharmony (Lung and Large Intestine are internally-externally related), Spleen-Stomach imbalance (Spleen and Stomach are internally-externally related).
- Treatment: first treat the Large Intestine (first layer), then treat the Stomach (second layer), and finally regulate the Lung and Spleen (third layer).

## 7. Six Qi Brake Mechanism

### 7.22 Concept of Six Qi Brake (Unchanged, but Integrated into Dynamic Balance Model)

In Chapter 4, we proposed the "power-brake balance" model — Five Motions provide the changing "power," and Six Qi provide the regulatory "brake." In the Dynamic Balance Model, the Six Qi brake is an important component of the system's self-regulatory mechanism — it can "brake" the attack force of Motion, helping the system restore balance.

**Position of Six Qi Brake in Dynamic Balance Model**:
```
Attack force (Annual Motion Excess/Deficiency)
    ↓
System regulatory ability
  ├─ Generation-restraint regulation (Five Elements automatic regulation)
  ├─ Victory-reversal mechanism (attacked party retaliates)
  ├─ Stagnation-eruption mechanism (suppressed qi erupts)
  ├─ Tong Shi substitution (Earthly Branch substitution)
  └─ Six Qi brake (Six Qi brakes Motion attacks) ← Content of this section
    ↓
Net attack force = Attack force - System regulatory ability
    ↓
Net attack force > 0 → Balance broken → Disease
Net attack force ≤ 0 → Balance maintained → No disease
```

### 7.23 Calculation Method of Six Qi Brake (Unchanged)

**Calculation Formula**:
```
Input: Trigger Point Six Qi + Stagnation Point Six Qi + Principal Qi/Guest Qi at current time

Step 1: Determine the Six Qi attribute of the attacker (Trigger Point)
Step 2: Determine the Six Qi attribute of the attacked party (Stagnation Point)
Step 3: Determine the Principal Qi and Guest Qi at the current time
Step 4: Calculate brake value:
  - If current Principal Qi/Guest Qi can "restrict" Trigger Point Six Qi, brake value increases
  - If current Principal Qi/Guest Qi can "generate and support" Trigger Point Six Qi, brake value decreases (negative brake, instead promotes attack)
Step 5: Net attack intensity = Original attack intensity - Brake value

Output: Brake value + Net attack intensity
```

### 7.24 Significance of Six Qi Brake (Integrated into Dynamic Balance Model)

The significance of the Six Qi brake mechanism is that it explains why the same congenital endowment has different disease onset situations in different years/seasons — because the Six Qi configurations in different years/seasons are different, the system's regulatory ability (brake value) is different, thereby the net attack force is different, and the system's balance state is also different.

This is precisely the core of the Dynamic Balance Model — **the system's balance state is dynamically changing, depending on the comparison between attack force and regulatory force**. The Six Qi brake is an important component of regulatory force.

[To be verified: The Six Qi brake mechanism is an original model proposed in this book, and its effectiveness needs to be verified through large-sample longitudinal data.]

## 8. Temporal Evolution of Dynamic Stagnation Points

### 8.25 Calculation of High-Risk Period and Exacerbation Period (Same Five Elements Earthly Branch Month Range)

**High-Risk Period**: The months/solar terms corresponding to the Stagnation Point Earthly Branch, as well as the months corresponding to other Earthly Branches with the same Five Elements as the Stagnation Point, are the time periods when the disease is prone to onset.

**Exacerbation Period**: The months/solar terms corresponding to the Trigger Point Earthly Branch, as well as the months corresponding to other Earthly Branches with the same Five Elements as the Trigger Point, are the time periods when existing diseases are prone to exacerbation.

**Important Correction: Same Five Elements Earthly Branch Month Range**

The High-Risk Period and Exacerbation Period should not only include the single month corresponding to the Stagnation Point/Trigger Point, but should include **the months corresponding to all Earthly Branches with the same Five Elements** — because in the months of Earthly Branches with the same Five Elements, the force of that Five Elements is relatively excessive, which will affect the system's balance.

Grouping of Earthly Branches with the same Five Elements (based on Four Directions Five Elements, because the Five Elements attribute of months/seasons is mainly determined by direction/four seasons):
- **Wood Excessive**: Yin month, Mao month (1st month, 2nd month, Spring, East Wood)
- **Fire Excessive**: Si month, Wu month (4th month, 5th month, Summer, South Fire)
- **Earth Excessive**: Chen month, Xu month, Chou month, Wei month (3rd month, 9th month, 12th month, 6th month, four-season months, Central Earth)
- **Metal Excessive**: Shen month, You month (7th month, 8th month, Autumn, West Metal)
- **Water Excessive**: Hai month, Zi month (10th month, 11th month, Winter, North Water)

**Calculation Formula**:
```
Input: Stagnation Point Earthly Branch + Trigger Point Earthly Branch

Step 1: Determine the Four Directions Five Elements of the Stagnation Point
  StagnationPoint_sifang_wuxing = Earthly Branch Four Directions Five Elements table[Stagnation Point Earthly Branch]

Step 2: Find all Earthly Branches with the same Four Directions Five Elements as the Stagnation Point
  High-Risk Period Earthly Branch list = all Earthly Branches with Four Directions Five Elements == StagnationPoint_sifang_wuxing
  # For example: Stagnation Point = Wu, Four Directions Five Elements = Fire → High-Risk Period Earthly Branches = [Si, Wu]

Step 3: High-Risk Period = months corresponding to High-Risk Period Earthly Branch list + one solar term before and after each (about 45 days)
  # For example: High-Risk Period Earthly Branches = [Si, Wu] → High-Risk Period = Si month + Wu month (4th month + 5th month, about 45-90 days)

Step 4: Determine the Four Directions Five Elements of the Trigger Point
  TriggerPoint_sifang_wuxing = Earthly Branch Four Directions Five Elements table[Trigger Point Earthly Branch]

Step 5: Find all Earthly Branches with the same Four Directions Five Elements as the Trigger Point
  Exacerbation Period Earthly Branch list = all Earthly Branches with Four Directions Five Elements == TriggerPoint_sifang_wuxing
  # For example: Trigger Point = Hai, Four Directions Five Elements = Water → Exacerbation Period Earthly Branches = [Hai, Zi]

Step 6: Exacerbation Period = months corresponding to Exacerbation Period Earthly Branch list + one solar term before and after each (about 45 days)
  # For example: Exacerbation Period Earthly Branches = [Hai, Zi] → Exacerbation Period = Hai month + Zi month (10th month + 11th month, about 45-90 days)

Output: High-Risk Period (Earthly Branch list + month range) + Exacerbation Period (Earthly Branch list + month range)
```

**Example**:
- Stagnation Point = Wu (Four Directions Five Elements = Fire) → High-Risk Period Earthly Branches = [Si, Wu] → High-Risk Period = Si month + Wu month (4th month + 5th month, around Grain Buds-Major Heat, about early May-late July)
- Trigger Point = Hai (Four Directions Five Elements = Water) → Exacerbation Period Earthly Branches = [Hai, Zi] → Exacerbation Period = Hai month + Zi month (10th month + 11th month, around Start of Winter-Major Snow, about November-late December)

**Note**: The Five Elements grouping of High-Risk Period and Exacerbation Period is based on **Four Directions Five Elements** (direction/season Five Elements), because the Five Elements attribute of months/seasons is mainly determined by direction/four seasons, not Six Qi Five Elements. This embodies the application of the "Six Qi as Principal, Four Directions as Auxiliary" strategy in the temporal dimension — when calculating time windows, Four Directions Five Elements (seasons) is instead more direct, because time itself is the cycle of seasons.

### 8.26 Time Window of Dynamic Balance

In the Dynamic Balance Model, the High-Risk Period and Exacerbation Period are not only "time periods when the disease is prone to onset/exacerbation," but more importantly **time windows when the system balance is most easily broken** — during these time periods, the attack force is the greatest, the regulatory ability is relatively insufficient, and the system is most prone to imbalance.

Therefore, before the arrival of the High-Risk Period and Exacerbation Period, the system's regulatory ability should be strengthened in advance (such as taking regulating Chinese medicine in advance, adjusting lifestyle, avoiding inducing factors, etc.), helping the system maintain balance and preventing disease onset.

This is precisely the core idea of "treating disease before it occurs" — **before the system balance is broken, intervene in advance, enhance regulatory ability, and prevent problems before they occur**.

## 9. Complete Calculation Example

### 9.27 Example: Born June 15, 1990 (Geng Wu year, Ren Wu month, Xin Hai day, Gui Si hour)

**Input**:
- Birth date: June 15, 1990
- Four Pillars: Year Pillar = Geng Wu, Month Pillar = Ren Wu, Day Pillar = Xin Hai, Hour Pillar = Gui Si
- Four Pillars Earthly Branches: [Wu, Wu, Hai, Si]

**Step 1: Calculate Annual Motion**
- Year Stem = Geng → Annual Motion = Metal Motion Excess, power value +8

**Step 1.5: Core Stagnation Point Analysis (overall judgment from Annual Motion/Heavenly Stem angle)**

Core Stagnation Point Analysis is an overall judgment from the Annual Motion (Heavenly Stem) angle, answering "which element is stagnated overall, and how severe is the stagnation."

- **Main Stagnation Point**: Wood Stagnation (Metal Excess attack) — Metal Motion Excess, Metal qi excessive, Metal restricts Wood, Wood is suppressed, forming "Wood Stagnation"
- **Stagnation Point Type**: Excess Stagnation — because it is Metal Excess attacking Wood, Wood is suppressed, belonging to "stagnation caused by being attacked" (excess stagnation), rather than "stagnation caused by self-deficiency" (deficiency stagnation)
- **Stagnation Point Location**: Hai, Si — Hai and Si's Six Qi Five Elements are both Wood (Jueyin Wind Wood), which are the specific locations of Wood Stagnation
  - Hai: Jueyin Wind Wood (Zheng Hua, coefficient 1.0)
  - Si: Jueyin Wind Wood (Dui Hua, coefficient 0.7)
- **Stagnation Qi Intensity**: 3/10 — quantitative score, 0 = no stagnation, 10 = severe stagnation. 3/10 belongs to mild to moderate stagnation
  - Calculation method: Stagnation qi intensity = Attack force (Metal Motion Excess +8) × suppression degree of attacked Five Elements / Regulatory ability (Fire restricts Metal + victory-reversal + brake)
  - In this example, although Metal Motion is Excess (+8), Fire (Wu) can constrain Metal (Fire restricts Metal), and at the same time Fire is the son of Wood (Wood generates Fire), which can retaliate against Metal (victory-reversal), so the regulatory ability is relatively strong, and the stagnation qi intensity is not high (3/10)
- **Prone Time (Trigger Points)**: Yin, Mao, Si, Hai, Jueyin Wind Wood — these Earthly Branches' Six Qi Five Elements or Four Directions Five Elements belong to Wood, which are the times when Wood Stagnation is prone to onset
  - Yin: Four Directions Five Elements = Wood (Spring)
  - Mao: Four Directions Five Elements = Wood (Spring), Six Qi Five Elements = Metal (Yangming Dry Metal)
  - Si: Six Qi Five Elements = Wood (Jueyin Wind Wood)
  - Hai: Six Qi Five Elements = Wood (Jueyin Wind Wood)
- **Corresponding Meridians**: Hand Taiyin Lung Meridian, Hand Yangming Large Intestine Meridian — these are the meridians corresponding to the attacker (Metal = Lung/Large Intestine), because Core Stagnation Point Analysis is viewed from the attacker's angle
  - Note: This is different from the "Affected Meridians" in Dynamic Stagnation Point Calculation — the corresponding meridians in Core Stagnation Point Analysis are the attacker (Metal = Lung/Large Intestine), while the Affected Meridians in Dynamic Stagnation Point Calculation are the attacked party (Wood = Liver/Gallbladder) and the transmitted meridians
- **Disease Risk**: Stable — because the stagnation qi intensity is not high (3/10), the regulatory ability is relatively strong, the system is overall in a stable state, and the disease risk is low

**Relationship between Core Stagnation Point Analysis and Dynamic Stagnation Point Calculation**:
- Core Stagnation Point Analysis is "macro overall judgment" — tells us "which element is stagnated (Wood Stagnation), how severe is the stagnation (3/10), how is the overall disease risk (stable)"
- Dynamic Stagnation Point Calculation is "micro specific positioning" — tells us "specifically which Earthly Branch is the Trigger Point (Hai), which Earthly Branch is the Stagnation Point (Wu), which organ is damaged (Heart), which meridians are affected (Heart Meridian + Kidney Meridian)"
- Only by combining both can a complete calculation result be given — knowing both the overall stagnation situation and the specific lesion location and transmission path

**Step 2: Calculate Trigger Point (Metal Motion Excess, for Excess years find "what I restrict" = Wood)**
- Attacked Five Elements = what Metal restricts = Wood
- Round 1 (Six Qi Five Elements, principal): Search for the first Earthly Branch in the Four Pillars whose Six Qi Five Elements belongs to "Wood":
  - Year Branch = Wu: Six Qi Five Elements = Fire (Shaoyin Sovereign Fire) → not Wood
  - Month Branch = Wu: Six Qi Five Elements = Fire (Shaoyin Sovereign Fire) → not Wood
  - Day Branch = Hai: Six Qi Five Elements = Wood (Jueyin Wind Wood) → **Found!**
- Trigger Point = Hai, source = "Six Qi Five Elements (principal)"
- Hai's Six Qi = Jueyin Wind Wood (Zheng Hua, coefficient 1.0), Four Directions Five Elements = Water

**Step 3: Calculate Stagnation Point (Trigger Point = Hai, Six Qi Five Elements = Wood)**
- Trigger Point Hai's main Five Elements (Six Qi Five Elements, principal) = Wood (Jueyin Wind Wood)
- Restricted Five Elements (what the Trigger Point's Six Qi Five Elements restricts, principal) = Wood restricts Earth → Restricted Five Elements = Earth
- Search by priority (Six Qi first, Four Directions later):
  a. Earthly Branch of the restricted element (Earth) (≠ Trigger Point):
     - Round 1 (Six Qi Five Elements, principal):
       - Year Branch = Wu: Six Qi Five Elements = Fire → not Earth
       - Month Branch = Wu: Six Qi Five Elements = Fire → not Earth
       - Day Branch = Hai (Trigger Point, skip)
       - Hour Branch = Si: Six Qi Five Elements = Wood (Jueyin Wind Wood) → not Earth
       - No Earthly Branch with Six Qi Five Elements of "Earth" in the Four Pillars!
     - Round 2 (Four Directions Five Elements, auxiliary):
       - Year Branch = Wu: Four Directions Five Elements = Fire → not Earth
       - Month Branch = Wu: Four Directions Five Elements = Fire → not Earth
       - Day Branch = Hai (Trigger Point, skip)
       - Hour Branch = Si: Four Directions Five Elements = Fire → not Earth
       - No Earthly Branch with Four Directions Five Elements of "Earth" in the Four Pillars either!
  b. Earthly Branch of mother of the restricted element (Fire, generates Earth) (≠ Trigger Point):
     - Round 1 (Six Qi Five Elements, principal):
       - Year Branch = Wu: Six Qi Five Elements = Fire (Shaoyin Sovereign Fire) → **Found!**
- Stagnation Point = Wu, source = "Six Qi Five Elements (mother of the restricted element)"
- Wu's Six Qi = Shaoyin Sovereign Fire (Zheng Hua, coefficient 1.0), Four Directions Five Elements = Fire

**Step 4: Tong Shi Substitution Check and Tong Shi Backup Warning**
- Stagnation Point = Wu, Tong Shi = Zi (Shaoyin Sovereign Fire, Wu and Zi are mutual Tong Shi)
- Check whether the Stagnation Point is in the Four Pillars: Year Branch = Wu, Month Branch = Wu → Wu is in the Four Pillars!
- Actual Stagnation Point = Wu, no substitution
- Tong Shi backup: Has Tong Shi backup (Tong Shi Earthly Branch = Zi, mutual backup brakes)
- Tong Shi warning: Need to be alert to concurrent wear (when Wu and Zi are attacked simultaneously, the regulatory ability of Shaoyin Sovereign Fire drops significantly)
- Concurrent wear risk: Check whether Zi is in the Four Pillars — Four Pillars Earthly Branches = [Wu, Wu, Hai, Si], Zi is not in the Four Pillars → Concurrent wear risk = Low (Tong Shi not in Four Pillars, will not be attacked simultaneously)

**Step 5: Determine Core Organs (principal+auxiliary)**
- Stagnation Point = Wu, Six Qi Five Elements = Fire (Shaoyin Sovereign Fire) → Principal Organ = Heart/Small Intestine
- Wu's Four Directions Five Elements = Fire → Auxiliary Organ = Heart/Small Intestine
- Six Qi Five Elements (Fire) = Four Directions Five Elements (Fire) → Core Organ = Heart/Small Intestine (single, principal=auxiliary)

**Step 6: Calculate Affected Meridians (three-layer logic)**
- **First Layer (Earthly Branch direct correspondence, most direct)**:
  - Wu corresponding time period = 11:00-13:00 (Wu hour)
  - Direct meridian = Hand Shaoyin Heart Meridian
  - Direct organ = Heart
  - **The first is the Heart** — the disease first affects the Heart Meridian and Heart organ.
- **Second Layer (triggered by Six Qi attribute)**:
  - Wu's Six Qi = Shaoyin Sovereign Fire
  - Two meridians corresponding to Shaoyin Sovereign Fire = Hand Shaoyin Heart Meridian + Foot Shaoyin Kidney Meridian
  - Six Qi organs = Heart + Kidney
  - **Shaoyin belongs to Shaoyin Heart Meridian and Shaoyin Kidney Meridian, which are affected** — the disease penetrates from the Heart, affecting the Heart Meridian and Kidney Meridian.
- **Third Layer (transmission, deeper)**:
  - Transmission of Shaoyin Sovereign Fire = Heart and Kidney (Heart-Kidney non-interaction, Water-Fire non-coordination)
  - **Deeper is the Heart and Kidney** — the disease penetrates from the meridian level to the zang-fu organ level, manifesting as Heart-Kidney non-interaction.

**Step 7: Calculate High-Risk Period and Exacerbation Period (same Five Elements Earthly Branch month range)**
- Stagnation Point = Wu, Four Directions Five Elements = Fire → Same Five Elements Earthly Branches = [Si, Wu] (both Si and Wu's Four Directions Five Elements are Fire)
- High-Risk Period = Si month + Wu month (4th month + 5th month, around Grain Buds-Major Heat, about early May-late July)
- Trigger Point = Hai, Four Directions Five Elements = Water → Same Five Elements Earthly Branches = [Hai, Zi] (both Hai and Zi's Four Directions Five Elements are Water)
- Exacerbation Period = Hai month + Zi month (10th month + 11th month, around Start of Winter-Major Snow, about November-late December)

**Step 8: Dynamic Balance Analysis**
- Attack force: Metal Motion Excess (+8), Metal restricts Wood, Trigger Point = Hai (Jueyin Wind Wood, Wood)
- Regulatory ability:
  - Generation-restraint regulation: Fire restricts Metal (Wu's Fire can constrain Metal's attack)
  - Victory-reversal mechanism: Metal restricts Wood, Wood's son = Fire, Fire can retaliate against Metal (Wu's Fire is the reversal qi)
  - Six Qi brake: If the current Guest Qi is Water or Fire, it can brake Metal's attack
- Net attack force = Attack force (+8) - Regulatory ability (Fire restricts Metal + victory-reversal + brake)
- If regulatory ability is sufficient, system maintains balance, no disease; if regulatory ability is insufficient, balance is broken, disease occurs (Stagnation Point = Wu, Heart/Small Intestine)

**Final Result**:

**[Module 1: Core Stagnation Point Analysis (from Annual Motion/Heavenly Stem angle)]**
- Main Stagnation Point: Wood Stagnation (Metal Excess attack)
- Stagnation Point Type: Excess Stagnation
- Stagnation Point Location: Hai (Jueyin Wind Wood, Zheng Hua), Si (Jueyin Wind Wood, Dui Hua)
- Stagnation Qi Intensity: 3/10 (mild to moderate stagnation)
- Prone Time (Trigger Points): Yin, Mao, Si, Hai, Jueyin Wind Wood
- Corresponding Meridians (attacker): Hand Taiyin Lung Meridian, Hand Yangming Large Intestine Meridian (Metal = Lung/Large Intestine)
- Disease Risk: Stable (regulatory ability relatively strong, overall risk low)

**[Module 2: Six Qi Brake Dynamic Stagnation Point Calculation (from Six Qi/Earthly Branch angle)]**
- Annual Motion: Metal Motion Excess (+8)
- Power Trigger Point: Hai (Wood, Jueyin Wind Wood, Zheng Hua, Liver/Gallbladder principal + Kidney/Bladder auxiliary, source = Six Qi Five Elements)
- Core Stagnation Point: Wu (Fire, Shaoyin Sovereign Fire, Zheng Hua, Heart/Small Intestine, source = Six Qi Five Elements)
- Core Damaged Organ: Heart
- Tong Shi Backup: Zi (Shaoyin Sovereign Fire, mutual backup brakes with Wu)
- Tong Shi Warning: Need to be alert to concurrent wear (when Wu and Zi are attacked simultaneously, Shaoyin Sovereign Fire regulatory ability drops significantly)
- Concurrent Wear Risk: Low (Zi not in Four Pillars, will not be attacked simultaneously)
- Core Organ: Heart/Small Intestine (single, principal=auxiliary, both Six Qi Five Elements and Four Directions Five Elements are Fire)
- First Affected Meridians (three-layer logic):
  - First Layer (direct): Hand Shaoyin Heart Meridian, Heart (first, most direct, Heart Meridian on duty at Wu hour)
  - Second Layer (Six Qi): Hand Shaoyin Heart Meridian, Foot Shaoyin Kidney Meridian, Heart, Kidney (Shaoyin Sovereign Fire corresponds to Heart Meridian + Kidney Meridian)
  - Third Layer (transmission): Heart and Kidney (Heart-Kidney non-interaction, Water-Fire non-coordination, deeper)
- High-Risk Period: Si month + Wu month (4th month + 5th month, around Grain Buds-Major Heat, about early May-late July, Fire excessive)
- Exacerbation Period: Hai month + Zi month (10th month + 11th month, around Start of Winter-Major Snow, about November-late December, Water excessive)
- Dynamic Balance: Metal Motion Excess attacks Wood (Hai), but Fire (Wu) can constrain Metal (Fire restricts Metal), and at the same time Fire is the son of Wood (Wood generates Fire), which can retaliate against Metal (victory-reversal). The system's regulatory ability depends on the force of Fire and the Six Qi brake. If regulatory ability is insufficient, balance is broken, disease in Heart/Small Intestine, manifesting as Heart-Kidney non-interaction.

**Interpretation**:
- This patient was born in a year of Metal Motion Excess, with excessive Metal qi, attacking Wood (Liver/Gallbladder), forming "Wood Stagnation" (Core Stagnation Point Analysis).
- Among the Four Pillars, Hai belongs to Wood (Six Qi Five Elements, Jueyin Wind Wood), so the Power Trigger Point = Hai — the entry point of the attack is in the Liver/Gallbladder system.
- Hai simultaneously has the attribute of Water (Four Directions Five Elements, auxiliary), indicating that the attack may simultaneously affect the Kidney/Bladder system.
- Trigger Point Hai (Wood) attacks Earth, but there is no Earthly Branch belonging to Earth in the Four Pillars (neither Six Qi nor Four Directions), so lower the priority, find "mother of the restricted element" = Fire, Wu in the Four Pillars belongs to Fire, so the Core Stagnation Point = Wu — the lesion is in the Heart/Small Intestine system.
- Core Organ = Heart/Small Intestine (both Six Qi Five Elements and Four Directions Five Elements are Fire, consistent).
- Tong Shi Backup = Zi (Shaoyin Sovereign Fire), mutual backup brakes with Wu, need to be alert to concurrent wear (but Zi is not in the Four Pillars, concurrent wear risk is low).
- Affected Meridians three layers: First layer = Heart Meridian/Heart (most direct, Heart Meridian on duty at Wu hour), Second layer = Heart Meridian + Kidney Meridian/Heart + Kidney (triggered by Six Qi, Shaoyin Sovereign Fire corresponds to Heart Meridian + Kidney Meridian), Third layer = Heart-Kidney non-interaction (transmission).
- System's regulatory mechanism: Fire (Wu) can constrain Metal (Fire restricts Metal), and at the same time Fire is the son of Wood, which can retaliate against Metal (victory-reversal). This indicates that the system has self-regulatory ability, which can offset Metal's attack to a certain extent, so the stagnation qi intensity is not high (3/10), and the disease risk is stable.
- But if regulatory ability is insufficient (such as insufficient force of Fire, or insufficient Six Qi brake), balance is broken, and disease will occur — disease in the Heart/Small Intestine system, manifesting as Heart-Kidney non-interaction.
- High-Risk Period is in Summer (Si month + Wu month, April-May, Fire excessive), because Summer has the most excessive Fire qi, and Heart Fire is prone to hyperactivity; Exacerbation Period is in Winter (Hai month + Zi month, October-November, Water excessive), because Winter has the most excessive Water qi, Water restricts Fire, and Heart Fire is prone to being suppressed.

## 10. Falsifiability of Dynamic Stagnation Point Calculation

### 10.28 Falsifiable Predictions

Dynamic Stagnation Point Calculation is falsifiable because it can make clear, testable predictions:

**Prediction 1: Core Organ Prediction**
- Prediction content: The Core Organs (principal+auxiliary) calculated based on birth time should be consistent with the individual's actual constitutional weaknesses and prone diseases.
- Test method: Large-sample clinical survey, comparing the consistency between calculated Core Organs and actual constitutional weaknesses, disease history.
- Falsification condition: If the calculated Core Organs have no statistically significant correlation with actual constitutional weaknesses, disease history, then Prediction 1 is falsified.

**Prediction 2: High-Risk Period Prediction**
- Prediction content: The High-Risk Period calculated based on the Stagnation Point should be consistent with the individual's actual disease onset time.
- Test method: Longitudinal cohort study, tracking and observing patients' disease onset times, comparing with calculated High-Risk Periods.
- Falsification condition: If the proportion of disease onset times within the calculated High-Risk Period is not significantly higher than random level, then Prediction 2 is falsified.

**Prediction 3: Exacerbation Period Prediction**
- Prediction content: The Exacerbation Period calculated based on the Trigger Point should be consistent with the individual's actual disease exacerbation time.
- Test method: Longitudinal cohort study, tracking and observing chronic disease patients' condition exacerbation times, comparing with calculated Exacerbation Periods.
- Falsification condition: If the proportion of condition exacerbation times within the calculated Exacerbation Period is not significantly higher than random level, then Prediction 3 is falsified.

**Prediction 4: Tong Shi Substitution Prediction**
- Prediction content: When the Stagnation Point is not in the Four Pillars, the prediction accuracy of Tong Shi Earthly Branch substitution should be significantly higher than random level.
- Test method: Large-sample clinical data, comparing the prediction accuracy of those with Tong Shi substitution and those without Tong Shi substitution.
- Falsification condition: If the prediction accuracy of those with Tong Shi substitution is not significantly different from those without Tong Shi substitution, then Prediction 4 is falsified.

**Prediction 5: Dynamic Balance Prediction**
- Prediction content: The "system regulatory ability" calculated based on the Dynamic Balance Model should be negatively correlated with the individual's actual disease severity — the stronger the regulatory ability, the milder the disease (or no disease); the weaker the regulatory ability, the more severe the disease.
- Test method: Large-sample clinical data, comparing the correlation between calculated regulatory ability (victory-reversal, stagnation-eruption, brake, etc.) and actual disease severity (symptom score, hospitalization rate, mortality rate, etc.).
- Falsification condition: If the calculated regulatory ability has no significant correlation with actual disease severity, then Prediction 5 is falsified.

**Prediction 6 (new): Six Qi as Principal, Four Directions as Auxiliary Prediction**
- Prediction content: The calculation results using the "Six Qi as Principal, Four Directions as Auxiliary" strategy should be more accurate than those using only Six Qi Five Elements or only Four Directions Five Elements.
- Test method: Large-sample clinical data, comparing the prediction accuracy (Core Organs, High-Risk Period, Exacerbation Period, etc.) of the "Six Qi as Principal, Four Directions as Auxiliary" algorithm with the "only Six Qi" algorithm, "only Four Directions" algorithm, and "union of both schools" algorithm.
- Falsification condition: If the prediction accuracy of the "Six Qi as Principal, Four Directions as Auxiliary" algorithm is not significantly higher than other algorithms, then Prediction 6 is falsified.

**Prediction 7 (new): Affected Meridians Three-Layer Logic Prediction**
- Prediction content: The three-layer logic of Affected Meridians (Earthly Branch direct correspondence → Six Qi attribute correspondence → transmission) should be consistent with the actual disease transmission path — the disease first affects the first layer (directly corresponding meridian), then the second layer (Six Qi corresponding meridian), and finally the third layer (transmitted organs).
- Test method: Longitudinal clinical study, tracking and observing the disease transmission process, comparing with the calculated three-layer Affected Meridians.
- Falsification condition: If the actual disease transmission path has no significant correlation with the calculated three-layer logic, then Prediction 7 is falsified.

**Prediction 8 (new): Core Stagnation Point Analysis Prediction**
- Prediction content: The results of Core Stagnation Point Analysis (main Stagnation Point, Stagnation Point type, stagnation qi intensity, disease risk) should be consistent with the individual's actual constitutional weaknesses, disease severity, and overall health status.
- Test method: Large-sample clinical survey, comparing the correlation between Core Stagnation Point Analysis results and actual constitution scores, disease severity scores, health status scores.
- Falsification condition: If Core Stagnation Point Analysis results have no significant correlation with actual constitution, disease severity, health status, then Prediction 8 is falsified.

**Prediction 9 (new): Tong Shi Backup and Concurrent Wear Prediction**
- Prediction content: The Tong Shi backup mechanism (Stagnation Point and Tong Shi are mutual backup brakes) should be related to disease regulatory ability — those with Tong Shi backup have stronger regulatory ability and milder disease; concurrent wear (Stagnation Point and Tong Shi attacked simultaneously) should be positively correlated with disease severity — disease is more severe during concurrent wear.
- Test method: Large-sample clinical data, comparing the disease severity of populations with Tong Shi backup and without Tong Shi backup, as well as the disease severity when concurrent wear occurs and when it does not.
- Falsification condition: If Tong Shi backup has no significant correlation with disease severity, or concurrent wear has no significant correlation with disease severity, then Prediction 9 is falsified.

**Prediction 10 (new): High-Risk Period and Exacerbation Period Range Prediction**
- Prediction content: The High-Risk Period and Exacerbation Period should include all Earthly Branch months with the same Five Elements (e.g., Fire excessive = Si month + Wu month, Water excessive = Hai month + Zi month), rather than just the single month corresponding to the Stagnation Point/Trigger Point. The consistency between the same Five Elements Earthly Branch month range and actual onset/exacerbation time should be significantly higher than that of a single month.
- Test method: Longitudinal cohort study, tracking and observing patients' disease onset/exacerbation times, comparing with calculated High-Risk Periods/Exacerbation Periods (same Five Elements Earthly Branch month range), and comparing with the prediction of a single month.
- Falsification condition: If the consistency between the same Five Elements Earthly Branch month range and actual onset/exacerbation time is not significantly higher than that of a single month, then Prediction 10 is falsified.

### 10.29 Possible Counterevidence and Corrections

If the predictions of Dynamic Stagnation Point Calculation are falsified, possible causes and correction directions include:

1. **The "Six Qi as Principal, Four Directions as Auxiliary" strategy is incorrect**: Other strategies may be needed (such as weighting Six Qi and Four Directions, or selecting according to specific situations).
2. **The priority algorithm is incorrect**: The priority order of Trigger Points and Stagnation Points may be incorrect, and priorities need to be adjusted.
3. **The Tong Shi substitution concept is invalid**: Tong Shi substitution may not improve prediction accuracy, and this concept needs to be abandoned.
4. **The Dynamic Balance Model is incorrect**: The calculation method of the system's self-regulatory mechanisms (victory-reversal, stagnation-eruption, brake, etc.) may be incorrect and needs to be remodeled.
5. **The "principal+auxiliary" judgment of Core Organs is incorrect**: The judgment of Six Qi as Principal, Four Directions as Auxiliary may need to be adjusted (such as Four Directions as Principal, Six Qi as Auxiliary, or selecting according to specific situations).
6. **The three-layer logic of Affected Meridians is incorrect**: The three-layer logic of Earthly Branch direct correspondence, Six Qi attribute correspondence, and transmission may be incorrect and needs to be re-studied.
7. **The time window of High-Risk Period/Exacerbation Period is incorrect**: The time window of High-Risk Period and Exacerbation Period (one solar term before and after) may need to be adjusted.
8. **Important variables are ignored**: The dynamic changes of the Month Pillar, Day Pillar, and Hour Pillar may be ignored, or the Five Motions and Six Qi configuration at the current time may be ignored, or acquired factors (genetics, environment, lifestyle, etc.) may be ignored.

Regardless of the result, this kind of falsifiable prediction and testing is precisely the core of the scientific method — through continuous falsification and correction, gradually approaching the truth.

## 11. Chapter Summary

This chapter elaborates on the complete method of Dynamic Stagnation Point Calculation, which is the core innovation of this book. Compared with previous versions, this chapter has made the following important corrections:

**First, clarified the core premise of "Heavenly Stems are Motions, Earthly Branches are Qi; Heavenly Stems are Transient, Earthly Branches are Fundamental."**
- Heavenly Stems (Motions) are celestial, changing, transient; Earthly Branches (Qi) are terrestrial, fixed, fundamental.
- When Motion is Excess/Deficient, it first affects the Earthly Branches — because Earthly Branches are fundamental, the "foundation" of the system.
- All calculations must start from the Earthly Branches (fundamental), not from the Heavenly Stems (transient).

**Second, added "Two Schools of Five Elements for Earthly Branches" — Six Qi as Principal, Four Directions as Auxiliary.**
- The Five Elements attribute of Earthly Branches has two schools: Six Qi Five Elements (principal, work content) and Four Directions Five Elements (auxiliary, hometown background).
- Among the twelve Earthly Branches, only Chou, Wu, Wei, You four branches have consistent two schools, while the remaining eight branches are inconsistent.
- Algorithm correction: adopt the **"Six Qi as Principal, Four Directions as Auxiliary"** strategy — prioritize searching with Six Qi Five Elements, then supplement with Four Directions Five Elements when not found, rather than a simple union of both schools.
- Core Organs adopt a **"principal+auxiliary"** structure — organs corresponding to Six Qi Five Elements as principal, organs corresponding to Four Directions Five Elements as auxiliary.

**Third, re-understood Zheng Hua and Dui Hua — different division of labor but coordinated work.**
- Zheng Hua and Dui Hua are not simply intensity differences (1.0 vs 0.7), but different division of labor but coordinated work.
- Taking Zi-Wu Shaoyin Sovereign Fire as an example: Wu (Zheng Hua) governs Heart (Fire), Zi (Dui Hua) governs Kidney (Water), the two have different division of labor but collaboratively complete the function of "Heart-Kidney interaction, Water-Fire coordination."
- Zheng Hua branches are responsible for the main aspects of the "original qi," Dui Hua branches are responsible for the auxiliary aspects of the "original qi," and the two collaborate to complete the overall function of Six Qi.

**Fourth, added the "Dynamic Balance Model" — the system is living and self-regulating.**
- The essence of disease is not "being attacked," but "balance being broken" — the system's self-regulatory ability is insufficient to offset the attack force.
- The system's self-regulatory mechanisms include: generation-restraint regulation, victory-reversal mechanism, stagnation-eruption mechanism, Tong Shi substitution, Six Qi brake, etc.
- Disease risk = attack force - regulatory ability, not simply attack force.
- The goal of treatment is not to "eliminate the attacker," but to "restore balance" — helping the system restore dynamic balance.
- This model makes the system truly "come alive," rather than a passive "target" that only gets attacked.

**Fifth, added the "Five Relationships Between Motion and Qi."**
- The relationship between Heavenly Stems (Motion) and Earthly Branches (Qi) is not only "Motion restricts Qi," but has five types: Motion restricts Qi, Motion generates Qi, Qi restricts Motion, Qi generates Motion, Same Qi.
- Motion restricts Qi and Motion generates Qi are unidirectional actions of "Motion" on "Qi," easily leading to Qi imbalance.
- Qi restricts Motion and Qi generates Motion are counteractions of "Qi" on "Motion," which are the system's self-regulatory mechanisms.
- Same Qi is the superposition of Motion and Qi, with amplified force, easily leading to excess.

**Sixth, major correction to the calculation of Affected Meridians — three-layer logic.**
- Previous algorithms used "Five Elements generation-restriction diffusion," which was too general and lacked hierarchy.
- The new algorithm adopts **three-layer logic**:
  - **First Layer (first, most direct)**: Meridians directly corresponding to Earthly Branches (twelve time period correspondence, e.g., Zi = Gallbladder Meridian).
  - **Second Layer (triggered by Six Qi attribute)**: Two meridians corresponding to Six Qi (each Three Yin Three Yang corresponds to hand meridian + foot meridian, e.g., Shaoyin = Heart Meridian + Kidney Meridian).
  - **Third Layer (transmission, deeper)**: Zang-fu organ transmission (e.g., Shaoyin Sovereign Fire → Heart and Kidney, Heart-Kidney non-interaction).
- This three-layer logic clearly shows the disease's transmission path from shallow to deep, from direct to indirect, with clear treatment direction — first treat the first layer, then the second layer, and finally regulate the third layer.

**Seventh, clarified the dual-module structure — Core Stagnation Point Analysis and Dynamic Stagnation Point Calculation.**
- Previous algorithms had only one calculation module, the new algorithm adopts a **dual-module structure**:
  - **Core Stagnation Point Analysis** (from Annual Motion/Heavenly Stem angle): main Stagnation Point, Stagnation Point type (excess stagnation/deficiency stagnation), Stagnation Point location, stagnation qi intensity (quantitative score), prone time, corresponding meridians (attacker), disease risk (stable/unstable).
  - **Six Qi Brake Dynamic Stagnation Point Calculation** (from Six Qi/Earthly Branch angle): Power Trigger Point, Core Stagnation Point, Core Damaged Organ, First Affected Meridians (three-layer logic), Tong Shi Backup, High-Risk Period, Exacerbation Period.
- Core Stagnation Point Analysis is "macro overall judgment," Dynamic Stagnation Point Calculation is "micro specific positioning," and only by combining both can a complete calculation result be given.

**Eighth, added the Tong Shi Backup and Warning Mechanism.**
- Previous algorithms only had "Tong Shi substitution" (when the Stagnation Point is not in the Four Pillars, Tong Shi takes over), the new algorithm added the **Tong Shi Backup and Warning Mechanism**:
  - Even if the Stagnation Point is in the Four Pillars, the Tong Shi Earthly Branch serves as a "backup brake," jointly assuming regulatory function with the Stagnation Point.
  - Need to be alert to "concurrent wear" — when the Stagnation Point and Tong Shi are attacked simultaneously, regulatory ability drops significantly.
  - The regulatory ability correction coefficient for concurrent wear = 0.5 (regulatory ability decreased by 50%).

**Ninth, corrected the range of High-Risk Period and Exacerbation Period — same Five Elements Earthly Branch months.**
- Previous algorithms only included the single month corresponding to the Stagnation Point/Trigger Point, the new algorithm includes **the months corresponding to all Earthly Branches with the same Five Elements**:
  - Wood excessive = Yin month + Mao month (1st month + 2nd month)
  - Fire excessive = Si month + Wu month (4th month + 5th month)
  - Earth excessive = Chen month + Xu month + Chou month + Wei month (four-season months)
  - Metal excessive = Shen month + You month (7th month + 8th month)
  - Water excessive = Hai month + Zi month (10th month + 11th month)
- The Five Elements grouping of High-Risk Period and Exacerbation Period is based on **Four Directions Five Elements** (direction/season Five Elements), because the Five Elements attribute of months/seasons is mainly determined by direction/four seasons.

**Tenth, added new falsifiable predictions (total 10).**
- Added "Core Stagnation Point Analysis Prediction" — the correlation between main Stagnation Point, stagnation qi intensity and actual disease severity.
- Added "Tong Shi Backup and Concurrent Wear Prediction" — the correlation between Tong Shi backup and regulatory ability, the correlation between concurrent wear and disease severity.
- Added "High-Risk Period and Exacerbation Period Range Prediction" — the consistency between same Five Elements Earthly Branch month range and actual onset time.

These corrections make the logic of Dynamic Stagnation Point Calculation more rigorous, comprehensive, and in-depth — from a simple "attack-attacked" model, upgraded to a "dynamic balance" model; from a single "Six Qi Five Elements," upgraded to "Six Qi as Principal, Four Directions as Auxiliary"; from a general "Five Elements generation-restriction diffusion," upgraded to a clear "three-layer logic"; from a static "intensity difference," upgraded to an understanding of Zheng Hua and Dui Hua as "different division of labor but coordinated work"; from a single-module calculation, upgraded to a dual-module structure of "Core Stagnation Point Analysis + Dynamic Stagnation Point Calculation"; from simple Tong Shi substitution, upgraded to Tong Shi backup and warning mechanism; from a single-month High-Risk Period, upgraded to a range of same Five Elements Earthly Branch months.

Of course, whether these corrections are effective still needs to be verified through large-sample clinical data. The work of this book only provides a computable and verifiable algorithm framework, and the ultimate effectiveness needs to be tested by practice. As you said: "It should all be about achieving balance to make the system come alive, at least the model should have this logic." — the Dynamic Balance Model is the logic that makes the system "come alive."

In the next chapter, based on Dynamic Stagnation Point Calculation, we will further elaborate on the Principal-Guest Motion and Qi calculation at disease onset time — combined with the Five Motions and Six Qi configuration at the current time and disease onset time, to more accurately predict disease onset and exacerbation.

---

**Items to be verified in this chapter**:
1. Whether the "Six Qi as Principal, Four Directions as Auxiliary" strategy is optimal needs to be verified through large-sample clinical data (compared with other strategies).
2. The "different division of labor but coordinated work" model of Zheng Hua and Dui Hua, its specific division of labor content and coordination mechanism require further research and clinical verification.
3. The quantification method of attack force and regulatory ability in the Dynamic Balance Model needs further refinement and verification.
4. The "principal+auxiliary" judgment of Core Organs (Six Qi as Principal, Four Directions as Auxiliary) needs further demonstration.
5. The three-layer logic of Affected Meridians (Earthly Branch direct correspondence → Six Qi attribute correspondence → transmission) needs further research and clinical verification.
6. The results of all calculation examples need to be verified with a program.
7. The correction coefficient for Tong Shi substitution = 0.8 needs further verification.
8. The specific calculation method of the Six Qi brake mechanism needs further refinement and verification.
9. The quantification method of stagnation qi intensity in Core Stagnation Point Analysis (scoring standard of 3/10) needs further research and verification.
10. The regulatory ability correction coefficient for Tong Shi backup and concurrent wear = 0.5 needs further verification.
11. The same Five Elements Earthly Branch month range for High-Risk Period and Exacerbation Period needs to be verified through large-sample clinical data.
12. The dual-module structure of Core Stagnation Point Analysis and Dynamic Stagnation Point Calculation needs further demonstration and verification.

**Figures and tables needed for this chapter**:
1. Overall flowchart of Dynamic Stagnation Point Calculation (including Dynamic Balance Model and dual-module structure).
2. Complete comparison table of two schools of Five Elements for twelve Earthly Branches (Six Qi as Principal, Four Directions as Auxiliary).
3. Schematic diagram of Zheng Hua and Dui Hua division of labor (taking Zi-Wu Shaoyin Sovereign Fire as an example).
4. Table of five relationships between Motion and Qi.
5. Schematic diagram of Dynamic Balance Model (attack force vs regulatory ability).
6. Trigger Point calculation priority diagram (Excess years and Deficiency years, Six Qi as Principal, Four Directions as Auxiliary).
7. Stagnation Point calculation priority diagram (Six Qi as Principal, Four Directions as Auxiliary).
8. Tong Shi correspondence table (including division of labor explanation and backup warning mechanism).
9. Complete correspondence table of Earthly Branch-Six Qi-Organ-Four Directions Five Elements (principal+auxiliary).
10. Direct correspondence table of twelve Earthly Branches-twelve meridians (first layer).
11. Six Qi-meridian correspondence table (second layer, hand meridian + foot meridian).
12. Schematic diagram of three-layer logic for Affected Meridians (taking Zi = Shaoyin Sovereign Fire as an example).
13. Schematic diagram of Six Qi brake mechanism.
14. Timeline diagram of High-Risk Period and Exacerbation Period (including same Five Elements Earthly Branch month range).
15. Schematic diagram of dual-module structure of Core Stagnation Point Analysis and Dynamic Stagnation Point Calculation.
16. Schematic diagram of Tong Shi backup and concurrent wear mechanism.
17. Complete calculation example diagram (from Four Pillars to Core Stagnation Point Analysis + Dynamic Stagnation Point Calculation, including three-layer Affected Meridians).
18. Falsifiability test design table (including 10 predictions).
