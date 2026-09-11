# Chapter 11: Verification Methodology — How to Scientifically Verify Five Motions and Six Qi Calculation

## 1. Why Verification is Crucial

### 11.1 The "Trust Crisis" Facing Five Motions and Six Qi

As the core theory in the "Huangdi Neijing" (Yellow Emperor's Inner Canon), Five Motions and Six Qi has been passed down for over two thousand years. However, in the context of modern science, Five Motions and Six Qi faces a serious "trust crisis":

First, **labeled as "metaphysics."** Because the theoretical foundation of Five Motions and Six Qi (Heavenly Stems and Earthly Branches, Five Elements generation-restriction, Sovereign Heaven-Earthly Deputy, etc.) differs greatly from the conceptual system of modern science, many people (including some in the medical community) regard it as "metaphysics," "superstition," or "pseudoscience" and are unwilling to take it seriously.

Second, **lack of modern scientific verification.** Traditional Five Motions and Six Qi research mostly stays at the level of theoretical interpretation and case reports, lacking large-sample, rigorously designed modern scientific verification. Without scientific verification, it is difficult to gain recognition from the mainstream scientific and medical communities.

Third, **calculation results are difficult to reproduce.** Because traditional Five Motions and Six Qi calculation relies on the personal experience and understanding of the calculator, different people calculating the same case may obtain different results. This irreproducibility makes it difficult for Five Motions and Six Qi to be accepted by the scientific community.

Fourth, **parameters and standards are not unified.** There are many parameters in Five Motions and Six Qi calculation (such as Zheng Hua-Dui Hua coefficients, Tai-Shao generation rules, Guest-Principal Superimposition judgment, etc.), and different schools and scholars have different understandings and standards. This non-unification further exacerbates the "trust crisis" of Five Motions and Six Qi.

To solve these problems, the only way out is **to conduct systematic, scientific verification** — use modern scientific methods to test the accuracy and effectiveness of Five Motions and Six Qi calculation, let the data speak, rather than arguing with theory.

### 11.2 Core Goals of Verification

The core goals of Five Motions and Six Qi verification can be summarized as follows:

**First, test the accuracy of calculation.**
- Core question: Are the Core Organs, Congenital Gap, High-Risk Period, Exacerbation Period, etc., calculated based on birth time consistent with the individual's actual constitutional weaknesses, disease susceptibility, and onset time?
- Verification method: Large-sample clinical study, comparing the consistency between calculation results and actual manifestations.

**Second, test the effectiveness of treatment.**
- Core question: Are personalized treatment plans formulated based on Five Motions and Six Qi treatment principles more effective than conventional treatment plans?
- Verification method: Randomized controlled trial (RCT), comparing the treatment effects of the Five Motions and Six Qi personalized treatment group and the conventional treatment group.

**Third, test the prospectiveness of prediction.**
- Core question: Can Five Motions and Six Qi calculation accurately predict the onset time and severity of disease before disease onset?
- Verification method: Prospective cohort study, perform calculation before disease onset, then follow up and observe the actual onset situation, compare the consistency between prediction and actual.

**Fourth, optimize algorithm parameters.**
- Core question: Are the various parameters used in the program (power values, coefficients, thresholds, weights, etc.) accurate? How to adjust to improve calculation accuracy?
- Verification method: Through large-sample data, perform regression analysis and optimization on parameters to find the optimal parameter combination.

**Fifth, establish scientific standards.**
- Core question: How to establish unified, standardized, reproducible Five Motions and Six Qi calculation standards?
- Verification method: Through systematic research, formulate operation specifications, terminology standards, verification guidelines, etc., for Five Motions and Six Qi calculation, promoting the standardization and normalization of Five Motions and Six Qi.

### 11.3 Basic Principles of Verification

The verification of Five Motions and Six Qi follows the following basic principles:

**First, falsifiability principle.**
- All calculations and predictions must be falsifiable — able to design experiments or observations to test whether the calculation is correct.
- Unfalsifiable propositions (such as "sincerity works," "believe it or not") do not belong to the scope of scientific verification.
- In the previous chapters of this book, falsifiable predictions have been clarified for each core concept and algorithm, laying the foundation for verification.

**Second, reproducibility principle.**
- Verification results must be reproducible — different researchers, in different locations, with different samples, can obtain similar results.
- To ensure reproducibility, standardized operation specifications need to be formulated, all algorithms and parameters made public, allowing anyone to repeat the verification.
- The open-source program accompanying this book is to ensure the reproducibility of calculation.

**Third, quantifiability principle.**
- Verification results must be quantifiable — use specific numbers (accuracy rate, sensitivity, specificity, P-value, effect size, etc.) to describe the accuracy of calculation and effectiveness of treatment, rather than using vague descriptions such as "effective," "markedly effective," "cured."
- To ensure quantifiability, clear observation indicators and evaluation standards need to be designed.

**Fourth, control principle.**
- Verification must have a control group — compare the differences between Five Motions and Six Qi calculation/treatment and no calculation/conventional treatment, to determine whether calculation/treatment is truly effective.
- Verification without control (such as "after using Five Motions and Six Qi treatment, the patient got better") cannot explain the problem, because the disease may self-heal, or it may be the effect of other factors.

**Fifth, blinding principle.**
- Where possible, adopt a blinded design — researchers and/or patients do not know the grouping situation (which are the Five Motions and Six Qi group, which are the control group), to avoid subjective bias affecting the results.
- Blinding is an important means to ensure objective and reliable verification results.

**Sixth, ethical principle.**
- All verification studies must follow medical ethics principles — protect patients' privacy and rights, ensure patient safety, obtain patients' informed consent.
- Verification studies must be reviewed and approved by the ethics committee.

## 2. Overall Framework of Verification

### 11.4 Four Levels of Verification

The verification of Five Motions and Six Qi can be divided into four levels, from basic to applied, progressing layer by layer:

```
Level 4: Application Validation
    ↓ Verify the effect of Five Motions and Six Qi in practical applications
Level 3: Clinical Validation
    ↓ Verify the effect of Five Motions and Six Qi in clinical diagnosis and treatment
Level 2: Algorithm Validation
    ↓ Verify the accuracy and reliability of the Five Motions and Six Qi algorithm
Level 1: Theoretical Validation
    ↓ Verify the internal consistency and logical self-consistency of Five Motions and Six Qi theory
```

### 11.5 Level 1: Theoretical Validation

**Goal**: Test the internal consistency and logical self-consistency of Five Motions and Six Qi theory.

**Core questions**:
- Is the theoretical system of Five Motions and Six Qi internally consistent? Are there any self-contradictory places?
- Is the calculation logic of Five Motions and Six Qi self-consistent? According to the rules, can unique and definite results be obtained?
- Can different calculators, calculating the same case according to the same rules, obtain the same results?

**Verification methods**:
- **Literature research**: Systematically sort out the discussions on Five Motions and Six Qi in the "Huangdi Neijing" and later physicians, analyze the internal consistency of the theoretical system.
- **Logical analysis**: Perform formal analysis on the calculation logic of Five Motions and Six Qi, test its logical self-consistency.
- **Expert consultation**: Organize experts in the field of Five Motions and Six Qi to discuss and review the theoretical system and calculation logic.
- **Example testing**: Design a series of standard examples, let different calculators (or programs) perform calculations, compare the consistency of results.

**Verification indicators**:
- Theoretical internal consistency score (expert review)
- Calculation result consistency (consistency rate between different calculators/programs)
- Example testing pass rate

**Current status**: The work of this book (core concept re-understanding, methodology bridge, algorithm standardization, program implementation) has largely completed theoretical validation — transforming vague theory into clear, consistent, reproducible algorithms. But more expert reviews and example testing are still needed for further verification.

### 11.6 Level 2: Algorithm Validation

**Goal**: Test the accuracy and reliability of the Five Motions and Six Qi algorithm (program implementation).

**Core questions**:
- Are the program's calculation results consistent with theoretical calculations?
- Can the program stably and reliably output results under different inputs?
- Are the program's boundary cases (such as special years, special dates, extreme inputs) handled correctly?
- Does the program's performance (calculation speed, memory usage) meet requirements?

**Verification methods**:
- **Unit testing**: Perform unit testing on each function and module of the program, test whether input-output meets expectations.
- **Integration testing**: Perform integration testing on the entire program, test whether collaboration between modules is correct.
- **Example comparison**: Use the program to calculate a series of standard examples, compare with the results of manual calculation (or expert calculation).
- **Boundary testing**: Test the program's performance under boundary cases (such as leap years, solar term alternation, special years).
- **Stress testing**: Test the program's performance under a large number of inputs.

**Verification indicators**:
- Unit test coverage
- Example comparison consistency rate
- Boundary testing pass rate
- Calculation speed (average calculation time per case)
- Memory usage

**Current status**: The program has implemented the core algorithm, but systematic unit testing, integration testing, and example comparison are still needed. This is the work to be completed next.

### 11.7 Level 3: Clinical Validation

**Goal**: Test the effect of Five Motions and Six Qi in clinical diagnosis and treatment.

**Core questions**:
- Are the Core Organs, Congenital Gap, etc., calculated based on birth time consistent with the patient's actual constitution and disease?
- Are the calculated High-Risk Periods and Exacerbation Periods consistent with the patient's actual onset/exacerbation time?
- Are treatment plans formulated based on Five Motions and Six Qi treatment principles more effective than conventional treatment plans?
- Can Five Motions and Six Qi calculation assist TCM physicians in improving diagnostic accuracy?

**Verification methods**:
- **Cross-sectional study**: At a certain time point, collect birth time, Four Diagnostic Methods results, medical history, etc., of a large number of patients, compare the correlation between calculation results and actual manifestations.
- **Case-control study**: Compare whether there are significant differences in Five Motions and Six Qi calculation results between patients with a certain disease and healthy controls (or patients with other diseases).
- **Retrospective cohort study**: Collect existing patients' medical history data, retrospectively analyze the consistency between calculated High-Risk Periods/Exacerbation Periods and actual onset/exacerbation time.
- **Prospective cohort study**: Perform calculation before disease onset, then prospectively follow up and observe the actual onset situation, test the accuracy of prediction.
- **Randomized controlled trial (RCT)**: Randomly divide patients into the Five Motions and Six Qi personalized treatment group and the conventional treatment group, compare the treatment effects of the two groups.

**Verification indicators**:
- Consistency rate between calculation results and actual manifestations
- Calculation sensitivity, specificity, positive predictive value, negative predictive value
- Accuracy rate of High-Risk Period/Exacerbation Period prediction
- Efficacy difference between treatment group and control group (cure rate, effective rate, symptom score change, recurrence rate, etc.)
- Statistical significance (P-value) and effect size

**Current status**: Clinical validation is the core of Five Motions and Six Qi verification, and also the part that requires the most investment. Currently, there is still a lack of large-sample, rigorously designed clinical validation studies. Need to cooperate with medical institutions and research teams to carry out systematic clinical validation.

### 11.8 Level 4: Application Validation

**Goal**: Test the effect and value of Five Motions and Six Qi in practical application scenarios.

**Core questions**:
- Does Five Motions and Six Qi have practical value in scenarios such as health management, disease prevention, personalized health preservation?
- Can ordinary users using the Five Motions and Six Qi program improve their health status?
- Can the Five Motions and Six Qi algorithm integrated into AI assistants, intelligent robots, and wearable devices provide valuable health services?
- Is the application of Five Motions and Six Qi cost-effective?

**Verification methods**:
- **User research**: Collect program users' usage feedback and health improvement situations, evaluate the practical value of the program.
- **Intervention study**: Randomly divide users into the Five Motions and Six Qi health preservation guidance group and the control group, compare the differences in health status between the two groups after a period of time.
- **Cost-effectiveness analysis**: Analyze the costs and benefits of Five Motions and Six Qi applications, evaluate its economy.
- **Scenario testing**: Test in specific application scenarios (such as enterprise health management, community elderly care, AI health assistants), evaluate actual effects.

**Verification indicators**:
- User satisfaction
- Health status improvement rate (such as reduced incidence rate, alleviated symptoms, improved quality of life)
- Cost-effectiveness ratio
- Scenario adaptability

**Current status**: Application validation is a higher-level validation based on clinical validation. Currently, the program has been launched and is being used by users, but systematic application validation studies are still lacking.

## 3. Research Design

### 11.9 Cross-Sectional Study

**Design idea**: At a certain time point, collect data such as birth time, Four Diagnostic Methods results, constitution type, medical history, etc., of a large number of research subjects, then use the Five Motions and Six Qi program to perform calculations, compare the correlation between calculation results and actual manifestations.

**Applicable questions**:
- Is the calculated Core Organs related to actual constitutional weaknesses?
- Is the calculated Congenital Gap related to actual disease susceptibility?
- Is there a correlation between Five Motions and Six Qi configuration and constitution type?

**Advantages**:
- Relatively simple, fast, low cost
- Can study the relationship between multiple variables simultaneously
- Suitable for preliminary exploration and hypothesis generation

**Disadvantages**:
- Can only prove correlation, cannot prove causality
- Easily affected by recall bias and selection bias
- Cannot verify the prospectiveness of prediction (because data is collected at the same time point)

**Key design elements**:
- **Sample size**: At least several hundred to several thousand cases, calculated according to the effect size and statistical power of the study.
- **Sampling method**: Try to use random sampling or consecutive sampling to avoid selection bias.
- **Inclusion criteria**: Clarify the inclusion conditions of research subjects (such as age range, gender ratio, regional distribution, etc.).
- **Exclusion criteria**: Clarify exclusion conditions (such as serious diseases, mental illnesses, inability to cooperate, etc.).
- **Data collection**: Standardized data collection forms to ensure data quality.
- **Statistical analysis**: Correlation analysis (such as chi-square test, t-test, correlation analysis, regression analysis).

### 11.10 Case-Control Study

**Design idea**: Select patients with a certain disease as the "case group," select healthy people (or patients with other diseases) as the "control group," compare whether there are significant differences in Five Motions and Six Qi calculation results between the two groups.

**Applicable questions**:
- Is the Five Motions and Six Qi configuration of patients with a certain disease significantly different from healthy people?
- Are patients with a certain disease more likely to have a specific Five Motions and Six Qi characteristic (such as a certain Annual Motion, a certain Sovereign Heaven, a certain Core Organs)?

**Advantages**:
- Relatively fast, low cost
- Suitable for studying rare diseases or diseases with long incubation periods
- Can study multiple possible risk factors simultaneously

**Disadvantages**:
- Easily affected by selection bias and recall bias
- Can only prove correlation, cannot prove causality
- The selection of the control group is very critical, improper selection will affect the reliability of results

**Key design elements**:
- **Case group**: Clarify the diagnostic criteria (gold standard) for cases, ensure accurate case diagnosis.
- **Control group**: Select controls matched with the case group in age, gender, region, etc., to avoid confounding factors.
- **Matching method**: Can use individual matching (1:1 or 1:n) or frequency matching.
- **Sample size**: Calculated according to the expected effect size, usually the case group and control group each need dozens to hundreds of cases.
- **Statistical analysis**: Chi-square test, logistic regression analysis (calculate OR value), conditional logistic regression (matched data).

### 11.11 Retrospective Cohort Study

**Design idea**: Collect existing patients' medical history data (including birth time, onset time, disease process, etc.), retrospectively analyze the consistency between Five Motions and Six Qi calculated High-Risk Periods/Exacerbation Periods and actual onset/exacerbation time.

**Applicable questions**:
- Is the calculated High-Risk Period consistent with the patient's actual onset time?
- Is the calculated Exacerbation Period consistent with the patient's actual disease exacerbation time?
- Can Five Motions and Six Qi calculation predict disease onset time?

**Advantages**:
- Can use existing medical record data, relatively fast, low cost
- Can study the natural history and temporal规律 of disease
- Can verify time-dimensional predictions

**Disadvantages**:
- Medical record data may be incomplete or inaccurate, affecting data quality
- Easily affected by information bias
- Is retrospective, cannot completely exclude confounding factors

**Key design elements**:
- **Medical record data**: Select medical records with complete data and accurate records.
- **Data extraction**: Standardized data extraction forms, data extracted by trained personnel.
- **Onset/exacerbation time definition**: Clearly define what is "onset" and what is "exacerbation," ensure consistent judgment standards.
- **Time window definition**: Clearly define the time window of calculated High-Risk Periods/Exacerbation Periods (such as one solar term before and after).
- **Statistical analysis**: Consistency test (such as Kappa value), hit rate analysis, survival analysis (such as Kaplan-Meier curve).

### 11.12 Prospective Cohort Study

**Design idea**: Before disease onset, perform Five Motions and Six Qi calculation on research subjects, predict their High-Risk Periods/Exacerbation Periods, then prospectively follow up and observe for a period of time, record actual onset/exacerbation situations, compare the consistency between prediction and actual.

**Applicable questions**:
- Can Five Motions and Six Qi calculation accurately predict onset time before disease onset?
- Do calculated high-risk groups truly have a higher incidence rate?
- Can intervention before the High-Risk Period reduce the incidence rate?

**Advantages**:
- Can verify the prospectiveness of prediction (prediction first, result later)
- Can calculate incidence rate, relative risk (RR), and other indicators
- Can evaluate the effect of intervention measures
- Clear temporal relationship, strong causal inference ability

**Disadvantages**:
- Time-consuming (need to follow up for months to years)
- High cost
- May have loss to follow-up (research subjects drop out midway)
- For rare diseases or diseases with long incubation periods, need a large sample size and long follow-up time

**Key design elements**:
- **Research subjects**: Select high-risk groups who have not developed the disease (such as people with a certain Congenital Gap) or the general population.
- **Baseline survey**: At the beginning of the study, collect baseline data of research subjects (birth time, Four Diagnostic Methods results, health status, etc.).
- **Calculation and prediction**: Use the Five Motions and Six Qi program to perform calculations, predict the High-Risk Period/Exacerbation Period of each research subject.
- **Follow-up**: Regular follow-up (such as once a month), record research subjects' health status and onset/exacerbation situations.
- **Follow-up time**: Determined according to disease characteristics, usually need at least one complete Five Motions and Six Qi cycle (such as 1 year or 60 years, but 1 year is more realistic).
- **Loss to follow-up handling**: Try to reduce loss to follow-up, perform sensitivity analysis on those lost to follow-up.
- **Statistical analysis**: Incidence rate calculation, relative risk (RR) calculation, ROC curve analysis, survival analysis (Cox proportional hazards model).

### 11.13 Randomized Controlled Trial (RCT)

**Design idea**: Randomly divide research subjects into the "Five Motions and Six Qi personalized treatment group" and the "conventional treatment group," the two groups receive different treatment plans, after a period of time, compare the treatment effects of the two groups.

**Applicable questions**:
- Are personalized treatment plans formulated based on Five Motions and Six Qi treatment principles more effective than conventional treatment plans?
- Can Five Motions and Six Qi preventive intervention before the High-Risk Period reduce the incidence rate?
- Can Five Motions and Six Qi auxiliary diagnosis improve treatment effects?

**Advantages**:
- Is the "gold standard" design for testing treatment effects
- Random grouping can balance known and unknown confounding factors
- Can prove causality (treatment leads to effect)
- Reliable results, high level of evidence

**Disadvantages**:
- High cost, time-consuming
- Complex design and implementation
- May have ethical issues (such as the control group cannot receive new therapy)
- External validity may be limited (strict inclusion-exclusion criteria may lead to results that cannot be generalized to the general population)

**Key design elements**:
- **Research subjects**: Clarify inclusion and exclusion criteria, select appropriate patients.
- **Random grouping**: Use true random methods (such as random number table, computer randomization), can use stratified randomization (stratified by age, gender, disease condition, etc.).
- **Allocation concealment**: Ensure that grouping results are not known to researchers before allocation, to avoid selection bias.
- **Blinding**: Try to use double-blind (both patients and evaluators do not know grouping), if double-blind is not possible, at least use single-blind (evaluator blind).
- **Intervention plan**: Clarify the specific plans of the Five Motions and Six Qi personalized treatment group and the conventional treatment group, ensure treatment standardization.
- **Control selection**: Can use placebo control, positive control (conventional effective treatment), waiting list control, etc.
- **Sample size**: Calculate sample size according to expected effect size, significance level, statistical power.
- **Follow-up time**: Determined according to disease characteristics and treatment plan.
- **Outcome indicators**: Clarify primary outcome indicators (such as cure rate, effective rate) and secondary outcome indicators (such as symptom score, quality of life, recurrence rate).
- **Statistical analysis**: Intention-to-treat analysis (ITT), per-protocol analysis (PP), inter-group comparison (t-test, chi-square test, non-parametric test), repeated measures analysis.

## 4. Data Collection

### 11.14 Sample Size Calculation

Sample size is the key to verification research — too small a sample size leads to unstable results and may fail to detect true effects; too large a sample size wastes resources.

**Basic elements of sample size calculation**:
- **Effect size**: The expected effect size of Five Motions and Six Qi calculation/treatment (such as differences between two groups, correlation coefficient, OR value, etc.). The smaller the effect size, the larger the sample size needed.
- **Significance level (α)**: Usually set to 0.05 (two-sided).
- **Statistical power (1-β)**: Usually set to 0.8 or 0.9.
- **One-sided/two-sided test**: Usually use two-sided test.
- **Loss to follow-up rate**: Prospective studies need to consider loss to follow-up, usually increase by 10%-20% on the basis of calculated sample size.

**Common sample size calculation methods**:
- **Two-sample rate comparison**: Used to compare incidence rates, effective rates, etc., between two groups.
- **Two-sample mean comparison**: Used to compare symptom scores, quality of life, etc., between two groups.
- **Correlation analysis**: Used to test the correlation between calculation results and actual manifestations.
- **Logistic regression**: Used in case-control studies, calculate OR value.
- **Survival analysis**: Used in prospective cohort studies, compare onset time between two groups.

**Example**:
Suppose a case-control study is to be conducted to test whether the proportion of "Core Organs = Heart" in patients with a certain disease is higher than in healthy controls. Expected proportion in case group is 40%, control group is 20%, α=0.05 (two-sided), power=0.8. According to the sample size calculation formula for two-sample rate comparison, each group needs about 75 cases, considering possible exclusions and loss to follow-up, include 100 cases per group, total 200 cases.

### 11.15 Inclusion and Exclusion Criteria

Clear inclusion and exclusion criteria are the key to ensuring the homogeneity of research subjects and reducing confounding factors.

**General inclusion criteria**:
- Age within a specific range (such as 18-80 years old)
- Gender not limited (or included according to a certain ratio)
- Accurate birth time information (Gregorian year-month-day-hour, or Lunar convertible)
- Voluntarily participate in the study, sign informed consent
- Able to cooperate with data collection and follow-up

**General exclusion criteria**:
- Severe mental illness or cognitive impairment, unable to cooperate
- Severe physical disease (such as advanced cancer, severe heart failure, etc.), may affect observation
- Inaccurate or missing birth time information
- Pregnant or lactating women (according to research needs)
- Currently participating in other clinical trials
- Other situations that the researcher considers unsuitable for participation

**Specific study inclusion-exclusion criteria**:
According to the specific questions of the study, specific inclusion-exclusion criteria also need to be formulated. For example:
- Case-control study: The case group needs to meet the diagnostic criteria (gold standard) for a specific disease; the control group needs to exclude that disease.
- Randomized controlled trial: Need to include patients with a specific disease, and the disease condition is within a specific range (such as mild to moderate), exclude severe complications.
- Prospective cohort study: Need to include research subjects who have not developed the disease, exclude those who already have the target disease.

### 11.16 Data Quality Control

Data quality is the lifeline of verification research — garbage in, garbage out. Strict quality control measures must be taken to ensure the accuracy and completeness of data.

**Quality control before data collection**:
- **Formulate standard operating procedures (SOP)**: Formulate detailed SOP for each link of data collection, ensure all researchers operate according to unified standards.
- **Train researchers**: Conduct unified training for all personnel involved in data collection, ensure they understand the research purpose, master data collection methods, and are familiar with SOP.
- **Pilot survey**: Before the formal survey, conduct a small-sample pilot survey, test the rationality of data collection forms and processes, find problems and modify in time.
- **Data collection form design**: Design clear, reasonable, standardized data collection forms, reduce omissions and errors.

**Quality control during data collection**:
- **Double entry**: Key data is independently entered by two people, then compared, inconsistencies checked against original data.
- **Logic check**: Set logic check rules in the data entry system (such as age cannot be negative, date cannot be later than current, etc.), real-time find entry errors.
- **On-site verification**: Researchers verify data collection forms on-site, find omissions and errors and supplement and correct in time.
- **Regular spot checks**: The research leader regularly spot checks a certain proportion of data collection forms, check data quality.
- **Question answering**: Establish a question answering mechanism, researchers encounter problems during data collection, consult the research leader in time.

**Quality control after data collection**:
- **Data cleaning**: Systematically clean the collected data, check missing values, outliers, logical contradictions, etc.
- **Missing value handling**: For missing values, use methods such as deletion, imputation (such as mean imputation, multiple imputation) according to the situation, and explain in the report.
- **Outlier handling**: For outliers, check original data, confirm whether it is an entry error or a true value; if it is a true value, consider its impact during analysis (such as sensitivity analysis).
- **Data locking**: After data cleaning is completed, lock the database, no longer modify, ensure the stability of analysis data.
- **Data backup**: Regularly back up data to prevent data loss.

## 5. Statistical Analysis Methods

### 11.17 Descriptive Statistics

Descriptive statistics is the first step of data analysis, used to summarize and display the basic characteristics of data.

**Common descriptive statistics methods**:
- **Measurement data**: Mean ± standard deviation (normal distribution), median (interquartile range) (skewed distribution), minimum, maximum.
- **Count data**: Frequency, percentage, constituent ratio.
- **Ordinal data**: Frequency, percentage, cumulative percentage.

**Chart display**:
- **Histogram**: Display the distribution of measurement data.
- **Box plot**: Display the distribution and outliers of measurement data.
- **Bar chart/bar graph**: Display the frequency or percentage of count data.
- **Pie chart**: Display constituent ratio.
- **Scatter plot**: Display the relationship between two measurement data.
- **Line chart**: Display trends over time.

### 11.18 Inferential Statistics

Inferential statistics is used to infer population characteristics from sample data and test hypotheses.

**Common inferential statistics methods**:

**1. Inter-group comparison**:
- **Two independent samples t-test**: Compare the mean difference of normally distributed measurement data between two groups.
- **Paired t-test**: Compare the measurement data difference of paired design (such as before and after treatment).
- **One-way analysis of variance (ANOVA)**: Compare the mean difference of normally distributed measurement data among multiple groups.
- **Mann-Whitney U test**: Compare the difference of skewed distribution measurement data between two groups (non-parametric test).
- **Kruskal-Wallis H test**: Compare the difference of skewed distribution measurement data among multiple groups (non-parametric test).
- **Chi-square test**: Compare the rate or constituent ratio difference of count data between two or more groups.
- **Fisher's exact test**: Used for count data with small sample size or expected frequency less than 5.
- **Rank sum test**: Compare inter-group differences of ordinal data.

**2. Correlation analysis**:
- **Pearson correlation analysis**: Analyze the linear correlation between two normally distributed measurement data.
- **Spearman rank correlation analysis**: Analyze the correlation between two skewed distribution or ordinal data.
- **Contingency coefficient**: Analyze the correlation between two count data.

**3. Regression analysis**:
- **Linear regression**: Analyze the influence of one or more independent variables on a dependent variable (measurement data).
- **Logistic regression**: Analyze the influence of one or more independent variables on a dependent variable (binary data), calculate OR value.
- **Ordinal logistic regression**: Used when the dependent variable is ordinal data.
- **Cox proportional hazards model**: Used for survival analysis, analyze the influence of independent variables on onset/death time, calculate HR value.

**4. Consistency test**:
- **Kappa test**: Test the consistency of classification results of two methods (such as calculation and actual).
- **Intraclass correlation coefficient (ICC)**: Test the consistency of measurement results of two methods.
- **Bland-Altman plot**: Display the consistency of measurement results of two methods.

**5. Prediction model evaluation**:
- **ROC curve**: Display the relationship between sensitivity and specificity of the prediction model.
- **AUC (area under the curve)**: Quantify the overall accuracy of the prediction model, the closer AUC is to 1, the better.
- **Calibration curve**: Test the consistency between predicted probability and actual incidence rate.
- **Decision curve analysis (DCA)**: Evaluate the clinical utility of the prediction model.

### 11.19 Verification Indicators

For the verification of Five Motions and Six Qi calculation, the following indicators are commonly used:

**1. Classification prediction indicators** (used when calculation results are categorical variables, such as Core Organs, constitution type):
- **Accuracy**: The proportion of correctly calculated cases among total cases.
  - Formula: Accuracy = (true positive + true negative) / total cases
- **Sensitivity**: The proportion of correctly calculated among people who actually have the disease/have a certain characteristic.
  - Formula: Sensitivity = true positive / (true positive + false negative)
- **Specificity**: The proportion of correctly calculated among people who actually do not have the disease/do not have a certain characteristic.
  - Formula: Specificity = true negative / (true negative + false positive)
- **Positive predictive value (PPV)**: The proportion of people who are actually positive among those calculated as positive.
  - Formula: PPV = true positive / (true positive + false positive)
- **Negative predictive value (NPV)**: The proportion of people who are actually negative among those calculated as negative.
  - Formula: NPV = true negative / (true negative + false negative)
- **Youden's Index**: Sensitivity + Specificity - 1, comprehensively reflects the accuracy of calculation.
- **Kappa value**: Test the consistency between calculation and actual, considering the influence of chance agreement. The closer the Kappa value is to 1, the better.

**2. Time prediction indicators** (used when calculation results are time variables, such as High-Risk Period, Exacerbation Period):
- **Hit rate**: The proportion of actual onset/exacerbation time falling within the calculated High-Risk Period/Exacerbation Period.
- **Lead time**: How much earlier the calculated High-Risk Period/Exacerbation Period is than the actual onset/exacerbation time (used to evaluate the possibility of early intervention).
- **Time error**: The difference between calculated onset time and actual onset time (average error, median error).
- **Survival analysis indicators**: Such as hazard ratio (HR), median onset time, survival rate, etc.

**3. Treatment effect indicators** (used for randomized controlled trials):
- **Cure rate**: The proportion of patients cured after treatment.
- **Effective rate**: The proportion of patients effective after treatment (including cured and markedly effective).
- **Symptom score change**: The difference in symptom scores before and after treatment (such as TCM syndrome score, VAS score, etc.).
- **Quality of life score**: The change in quality of life scores before and after treatment (such as SF-36, EQ-5D, etc.).
- **Recurrence rate**: The proportion of recurrence within a period after treatment.
- **Adverse event rate**: The proportion of adverse events during treatment.
- **Relative risk reduction (RRR)**: The proportion of risk reduction in the treatment group relative to the control group.
- **Number needed to treat (NNT)**: How many patients need to be treated to prevent 1 adverse outcome.

**4. Statistical significance and effect size**:
- **P-value**: The statistical significance of the test result, usually P<0.05 is considered statistically significant.
- **Effect size**: Quantify the magnitude of the effect, such as Cohen's d (measurement data), OR value (count data), correlation coefficient r, etc. Effect size is more important than P-value, because P-value is greatly affected by sample size.
- **Confidence interval (CI)**: Estimate the possible range of parameters, usually report 95% CI.

## 6. Bias and Confounding Factors

### 11.20 Common Biases

Bias refers to the systematic deviation of research results from the true value, and is an important factor affecting the reliability of research. In Five Motions and Six Qi verification research, the following common biases need to be noted:

**1. Selection bias**:
- **Definition**: Due to improper selection of research subjects, the research sample cannot represent the target population.
- **Common types**:
  - **Admission rate bias (Berkson bias)**: In case-control studies, both cases and controls come from hospitals, due to different admission rates of different diseases, the sample cannot represent the population.
  - **Prevalence-incidence bias (Neyman bias)**: In case-control studies, only prevalent cases (surviving, milder condition) are included, excluding new cases that died or had severe condition, leading to biased results.
  - **Non-response bias**: Non-respondents (those who refuse to participate or are lost to follow-up) among research subjects differ from respondents in key characteristics, leading to biased results.
- **Control methods**: Use random sampling, clarify inclusion-exclusion criteria, improve response rate, multi-center research, sensitivity analysis.

**2. Information bias**:
- **Definition**: Due to inaccurate measurement or observation during data collection, information systematically deviates from the true value.
- **Common types**:
  - **Recall bias**: When research subjects recall past events, due to inaccurate or incomplete memory, leading to information bias. Common in case-control studies and retrospective cohort studies.
  - **Reporting bias**: Research subjects intentionally report inaccurate information for some reason (such as social desirability, privacy concerns).
  - **Measurement bias**: Measurement tools or methods are inaccurate, leading to measurement results systematically deviating from the true value.
  - **Investigator bias**: Due to subjective bias, investigators use different inquiry or recording methods for research subjects in different groups.
- **Control methods**: Use objective measurement indicators, standardized data collection methods, blinded design, double entry, data quality control.

**3. Confounding bias**:
- **Definition**: Due to the influence of a third-party factor (confounding factor) that is both related to the research factor and the research outcome, the relationship between the research factor and the outcome is distorted.
- **Common confounding factors**:
  - **Demographic factors**: Age, gender, race, education level, income, etc.
  - **Lifestyle factors**: Smoking, drinking, diet, exercise, sleep, etc.
  - **Environmental factors**: Region, climate, occupational exposure, environmental pollution, etc.
  - **Genetic factors**: Family history, gene polymorphism, etc.
  - **Medical factors**: Vaccination, drug use, surgical history, etc.
- **Control methods**:
  - **Research design stage**: Restriction (only include research subjects with specific characteristics), matching (cases and controls matched on confounding factors), randomization (in RCT).
  - **Data analysis stage**: Stratified analysis, multivariate regression analysis (such as logistic regression, Cox regression), propensity score (PS), instrumental variable (IV).

### 11.21 Special Confounding Factors in Five Motions and Six Qi Verification

In Five Motions and Six Qi verification, in addition to the above common confounding factors, some special confounding factors also need to be noted:

**1. Accuracy of birth time**:
- Five Motions and Six Qi calculation is based on birth time, if birth time is inaccurate (such as only knowing the date but not the hour, or Lunar/Gregorian conversion error), it will directly affect the calculation results.
- Control method: Require accurate birth time in the inclusion criteria, try to use official records such as birth certificates, verify birth time.

**2. Influence of solar terms and calendar**:
- The year boundary and month boundary of Five Motions and Six Qi are based on solar terms (such as Start of Spring, Awakening of Insects, etc.), rather than Gregorian or Lunar months. If solar term calculation is inaccurate, it will affect the determination of year pillar and month pillar.
- Control method: Use accurate solar term calculation algorithms (such as astronomical algorithms), manually verify key cases.

**3. Influence of region and climate**:
- Five Motions and Six Qi describes "universal" climate laws, but the actual climate in different regions may differ (such as south and north, coastal and inland). This regional difference may affect the accuracy of Five Motions and Six Qi calculation.
- Control method: Consider regional factors in research design, can perform stratified analysis by region, or adjust regional factors in multivariate analysis.

**4. Era differences in lifestyle and medical conditions**:
- Five Motions and Six Qi theory was formed in ancient times, the lifestyle and medical conditions of ancient people are very different from modern people. This era difference may affect the applicability of Five Motions and Six Qi in modern populations.
- Control method: When discussing research results, consider the influence of era differences; can conduct comparative studies of different eras (such as using historical medical record data).

**5. Subjectivity of TCM diagnosis**:
- The Four Diagnostic Methods (inspection, auscultation-olfaction, inquiry, palpation) have a certain degree of subjectivity, different TCM physicians may have different diagnoses for the same patient. This subjectivity will affect the reliability of the "gold standard," thereby affecting verification results.
- Control method: Use multiple TCM physicians to independently diagnose and take consensus opinions; formulate standardized Four Diagnostic Methods operation specifications; combine objective indicators (such as laboratory tests, imaging tests).

## 7. Ethical Considerations

### 11.22 Basic Principles of Medical Ethics

All verification studies involving human subjects must follow the basic principles of medical ethics:

**1. Respect for Autonomy**:
- Respect the autonomy and privacy of research subjects.
- Research subjects have the right to decide whether to participate in the study, and have the right to withdraw from the study at any time without penalty.
- Must obtain informed consent from research subjects.

**2. Beneficence**:
- Research should benefit research subjects and society, maximize benefits and minimize harm.
- Research design should be scientific and reasonable, avoid unnecessary risks.
- For potentially beneficial research (such as therapeutic research), ensure that research subjects have the opportunity to receive effective treatment.

**3. Justice**:
- The burdens and benefits of research should be fairly distributed, should not let specific groups (such as the poor, vulnerable groups) bear excessive research risks, while other groups enjoy research benefits.
- The selection of research subjects should be fair, should not discriminate based on race, gender, age, social status, etc.

**4. Non-maleficence**:
- Research should not cause unnecessary harm to research subjects.
- For potentially risky research, conduct risk-benefit assessment, ensure benefits outweigh risks.
- Take measures to prevent and handle possible adverse events during research.

### 11.23 Informed Consent

Informed consent is the core of medical ethics and the concrete embodiment of respecting the autonomy of research subjects.

**Elements of informed consent**:
- **Information disclosure**: Researchers should fully inform research subjects of the research purpose, methods, expected benefits, possible risks, alternative options, confidentiality measures, rights to voluntary participation and withdrawal, etc.
- **Information comprehension**: Research subjects should be able to understand the disclosed information. For special groups such as those with cognitive impairment and children, need their legal representatives to consent on their behalf, and obtain the person's consent as much as possible (such as children's assent).
- **Voluntary consent**: The consent of research subjects should be voluntary, should not be subject to coercion, threat, inducement, or undue influence.
- **Form of consent**: Usually use written informed consent forms, signed by research subjects or their legal representatives. For some low-risk research, oral consent can be used, but needs a witness.

**Content of informed consent form**:
- Research title and researcher information
- Research purpose and background
- Research methods and procedures (including research time, number of follow-ups, examinations needed, etc.)
- Expected benefits (benefits to research subjects and society)
- Possible risks and discomforts (including physical, psychological, social aspects)
- Alternative options (other treatments or examinations that can be chosen if not participating in the study)
- Confidentiality measures (how to protect research subjects' privacy and data security)
- Compensation and indemnification (whether there are transportation subsidies, lost work compensation, and compensation for research-related injuries)
- Rights to voluntary participation and withdrawal
- Contact information (contact information of researchers and ethics committee, for consultation and complaints)
- Research subject signature and date

### 11.24 Privacy Protection and Data Security

In Five Motions and Six Qi verification research, personal information of research subjects (birth time, health status, medical history, etc.) will be collected, these are sensitive information and must be strictly protected.

**Privacy protection measures**:
- **Anonymization/de-identification**: During data collection and analysis, use research numbers instead of direct identifiers such as names and ID numbers, store research subjects' identity information separately from research data.
- **Minimum necessary principle**: Only collect information necessary for research, do not collect personal information unrelated to research.
- **Access control**: Research data only allows authorized researchers to access, set passwords and permission management.
- **Data encryption**: Encrypt stored and transmitted research data to prevent data leakage.
- **Secure storage**: Research data is stored on secure servers or hard drives, regularly backed up to prevent data loss.
- **Data retention and destruction**: After research is completed, retain data for a certain period according to relevant regulations and ethical requirements, and securely destroy after expiration.

**Ethical review**:
- All verification studies involving human subjects must be submitted to the ethics committee for review and approval before the study begins.
- The ethics committee is responsible for reviewing the scientific nature, ethical rationality, risk-benefit ratio, informed consent form, privacy protection measures, etc., of the research.
- During the research process, if there are major modifications to the research plan, need to resubmit to the ethics committee for review.
- After research is completed, need to submit a research summary report to the ethics committee.

## 8. Verification Time Planning and Milestones

### 11.25 Phased Verification Planning

The verification of Five Motions and Six Qi is a long-term, systematic project that cannot be accomplished overnight. It is recommended to proceed in stages, gradually deepening:

**Stage 1: Theoretical and Algorithm Validation (0-1 year)**
- Goal: Complete the sorting out of the theoretical system and standardization of algorithms, ensure the internal consistency and reproducibility of calculation.
- Main work:
  - Complete the writing and publication of this book
  - Improve the open-source program, conduct unit testing and integration testing
  - Organize expert reviews, discuss and revise the theoretical system and algorithms
  - Design standard example sets, conduct example testing
- Milestones:
  - First draft of this book completed
  - Program v1.0 released
  - Expert review meeting held
  - Standard example set testing passed

**Stage 2: Small-Scale Clinical Exploration (1-2 years)**
- Goal: Conduct small-scale clinical exploratory research, initially test the accuracy of calculation, find problems, prepare for large-scale verification.
- Main work:
  - Cooperate with 1-2 medical institutions, conduct cross-sectional studies and case-control studies (sample size dozens to hundreds of cases)
  - Collect patients' birth time, Four Diagnostic Methods results, medical history, etc.
  - Conduct preliminary statistical analysis, test the correlation between calculation results and actual manifestations
  - Optimize algorithm parameters based on preliminary results
  - Publish 1-2 exploratory research papers
- Milestones:
  - First case of clinical data collection completed
  - First cross-sectional study completed
  - First case-control study completed
  - Algorithm parameters initially optimized
  - First paper published

**Stage 3: Large-Scale Clinical Validation (2-5 years)**
- Goal: Conduct large-sample, multi-center, rigorously designed clinical validation, systematically test the accuracy of Five Motions and Six Qi calculation and effectiveness of treatment.
- Main work:
  - Cooperate with multiple medical institutions, conduct multi-center research
  - Conduct large-sample cross-sectional studies (sample size thousands to tens of thousands of cases)
  - Conduct retrospective cohort studies, verify High-Risk Period/Exacerbation Period prediction
  - Conduct prospective cohort studies, verify the prospectiveness of prediction
  - Conduct randomized controlled trials (RCT), verify treatment effects
  - Conduct systematic statistical analysis, publish high-quality research papers
  - Formulate operation specifications and verification guidelines for Five Motions and Six Qi calculation
- Milestones:
  - Multi-center research network established
  - Large-sample cross-sectional study completed
  - First prospective cohort study completed
  - First RCT completed
  - Operation specifications and verification guidelines released
  - Multiple high-quality papers published

**Stage 4: Application Validation and Promotion (5-10 years)**
- Goal: On the basis of clinical validation, conduct application validation, promote the application and promotion of Five Motions and Six Qi in practical scenarios.
- Main work:
  - Conduct application validation in scenarios such as health management, disease prevention, personalized health preservation
  - Conduct user research and intervention research, evaluate application effects
  - Integrate Five Motions and Six Qi algorithms into AI assistants, intelligent robots, wearable devices
  - Conduct cost-effectiveness analysis, evaluate economy
  - Promote Five Motions and Six Qi to enter medical education and clinical guidelines
  - Conduct international cooperation, promote the international dissemination and verification of Five Motions and Six Qi
- Milestones:
  - First application scenario validation completed
  - First AI integration product launched
  - Cost-effectiveness analysis completed
  - Entered medical education textbooks
  - International cooperation project launched

### 11.26 Resource Requirements

The verification of Five Motions and Six Qi requires resource support from multiple aspects:

**Human resources**:
- Research team: Including TCM Five Motions and Six Qi experts, clinicians, epidemiologists, statisticians, data scientists, programmers, etc.
- Cooperative institutions: Need to cooperate with medical institutions, research institutes, universities, etc., to obtain clinical data and research support.
- Advisory team: Invite experts in related fields as advisors to provide professional guidance.

**Financial resources**:
- Research funding: Used for data collection, personnel salaries, equipment procurement, conference travel, paper publication, etc.
- Funding sources: Can apply for National Natural Science Foundation, provincial and ministerial scientific research funds, Traditional Chinese Medicine Administration projects, enterprise cooperation projects, social donations, etc.

**Data resources**:
- Clinical data: Need a large amount of clinical data (patients' birth time, Four Diagnostic Methods results, medical history, treatment effects, etc.).
- Data sharing: Promote data sharing, establish a Five Motions and Six Qi research database, avoid repeated data collection.

**Technical resources**:
- Computing resources: Computing resources (servers, cloud computing, etc.) for big data analysis and machine learning.
- Software tools: Software tools for data management, statistical analysis, visualization.

## 9. Chapter Summary

This chapter elaborates on the verification methodology of Five Motions and Six Qi, including the importance of verification, overall framework, research design, data collection, statistical analysis, bias control, ethical considerations, as well as time planning and resource requirements.

Main contents include:

First, **why verification is crucial**. Elaborated on the "trust crisis" facing Five Motions and Six Qi (labeled as metaphysics, lack of modern scientific verification, calculation results difficult to reproduce, parameters and standards not unified), core goals of verification (test calculation accuracy, treatment effectiveness, prediction prospectiveness, optimize algorithm parameters, establish scientific standards), and basic principles of verification (falsifiability, reproducibility, quantifiability, control, blinding, ethics).

Second, **overall framework of verification**. Divided verification into four levels — theoretical validation (internal consistency and logical self-consistency), algorithm validation (accuracy and reliability of the program), clinical validation (effects in clinical diagnosis and treatment), application validation (effects and value in practical application scenarios), progressing layer by layer.

Third, **research design**. Elaborated on five commonly used research designs — cross-sectional study, case-control study, retrospective cohort study, prospective cohort study, randomized controlled trial (RCT), including applicable questions, advantages, disadvantages, and key design elements of each design.

Fourth, **data collection**. Elaborated on sample size calculation (effect size, significance level, statistical power), inclusion and exclusion criteria, data quality control (quality control measures before, during, and after collection).

Fifth, **statistical analysis methods**. Elaborated on descriptive statistics, inferential statistics (inter-group comparison, correlation analysis, regression analysis, consistency test, prediction model evaluation), and commonly used indicators for Five Motions and Six Qi verification (classification prediction indicators, time prediction indicators, treatment effect indicators, statistical significance and effect size).

Sixth, **bias and confounding factors**. Elaborated on common biases (selection bias, information bias, confounding bias) and their control methods, as well as special confounding factors in Five Motions and Six Qi verification (birth time accuracy, solar terms and calendar, region and climate, era differences, subjectivity of TCM diagnosis).

Seventh, **ethical considerations**. Elaborated on the basic principles of medical ethics (respect, beneficence, justice, non-maleficence), elements and content of informed consent, privacy protection and data security measures, requirements for ethical review.

Eighth, **verification time planning and milestones**. Proposed a four-stage verification plan — theoretical and algorithm validation (0-1 year), small-scale clinical exploration (1-2 years), large-scale clinical validation (2-5 years), application validation and promotion (5-10 years), each stage has clear goals, work content, and milestones. Also elaborated on required resources (human, financial, data, technical).

Verification methodology is the key for Five Motions and Six Qi to move from "theory" to "science." Only through systematic, scientific verification, letting the data speak, can it gain recognition from the mainstream scientific and medical communities, and can it truly发挥 the value of Five Motions and Six Qi. The work of this book (theory sorting, algorithm standardization, program implementation, verification methodology) has laid the foundation for subsequent verification research, but true verification still requires a large amount of clinical data and multidisciplinary cooperation.

In the next chapter, we will demonstrate the practical application of Five Motions and Six Qi calculation through specific cases, as a preliminary attempt at verification.

---

**Items to be verified in this chapter**:
1. The specific formulas and parameters for sample size calculation need to be determined according to the actual research design.
2. The selection of statistical analysis methods needs to be determined according to data types and research questions.
3. The specific requirements for ethical review need to be determined according to the regulations of the country and region where it is located.
4. The verification time planning and resource requirements are estimates based on the current situation, and may actually differ.

**Figures and tables needed for this chapter**:
1. Four-level framework diagram of verification.
2. Comparison table of five research designs.
3. Data collection flowchart.
4. Statistical analysis method selection decision tree.
5. Bias types and control methods table.
6. Informed consent form content checklist.
7. Verification time planning Gantt chart.
8. Resource requirements checklist.
