import React from "react";

export default function Research() {
  return <div className="Research">
    <div className="title">
      Causally interpretable meta-analysis and heterogeneity assessment
    </div>
    <div className="contentText">
      Case‐mix heterogeneity across studies complicates meta‐analyses. As a result of this, treatments that are equally effective on patient subgroups may appear to have different effectiveness on patient populations with different case mix. It is therefore important that meta‐analyses be explicit for what patient population they describe the treatment effect. To achieve this, we develop a new approach for meta‐analysis which use individual-level data (IPD) from all trials to infer the treatment effect for the patient population in a given trial, based on direct standardization. The new approach enables disentangling heterogeneity due to case mix from that due to beyond case‐mix reasons. Moreover, when data on post-randomization variables (i.e. mediators) are available across eligibles trials, one can further disentangle the beyond case-mix heterogeneity into mediator-related heterogeneity and residual heterogeneity. The new framework is currently being extended to network meta-analysis and meta-analysis of aggregated data combined with individual-level data. This is a joint work with Pr. Stijn Vansteelandt, Dr. Raphael Porcher, Dr. Ivan Diaz and Dr. Kara Rudolph.
    </div>
    <div className="title">
      Novel methods for mediation analysis based on recanting twins
    </div>
    <div className="contentText">
      The presence of intermediate confounders, also called recanting witnesses, is a fundamen- tal challenge to the investigation of causal mechanisms in mediation analysis, preventing the identification of natural path-specific effects. In this project, we develop a novel method for mediation analysis in settings with intermediate confounding, with guarantees that the causal parameters measure the target individual-level mechanisms. The method is based on recently proposed ideas that view causality as the transfer of information, and thus replace recanting witnesses by draws from their conditional distribution. We present the assumptions required for identification of recanting twins effects under a standard structural causal model, and under recently proposed separable effects models. To estimate recanting-twin effects, we develop efficient semi-parametric strategies that allow the use of data driven methods in the estimation of the nuisance parameters. This is a joint work with Dr. Ivan Diaz and Dr. Kara Rudolph.
    </div>
    <div className="title">
      Risk of Bias in Mediation Analysis (ROBIMA)
    </div>
    <div className="contentText">
      During the last few years, the volume of mediation analyses conducted in heath care research has been tremendously expanded. Many critical appraisal checklists for mediation have thus been proposed, which greatly support applied researchers in evaluating the conduct and reporting of published mediation analyses in the literature. These checklists, however, are often not rigorously developed, nor adequately addressing important mediation-specific biases that potentially impact the validity of mediation findings. This raises important concerns in systematic reviews and meta-analyses of mediation analyses. ROBIMA - Risk of Bias in Mediation Analysis, is a new initiative that involves international experts in psychology, epidemiology and biostatistics, with aim to construct a consensus-based, high-quality tool for evaluating methodological biases in mediation analyses. This project involves Pr. Stijn Vansteelandt, Pr. Tyler Vanderweele, Pr. David MacKinnon, Dr. Hopin Lee, Dr. Aidan Cashin, among many others.
    </div>
    <div className="title">
      Instrumented difference-in-differences
    </div>
    <div className="contentText">
      In the standard difference-in-differences research design, the parallel trends assumption may be violated when the relationship between the exposure trend and the outcome trend is confounded by unmeasured confounders. Progress can be made if there is an exogenous variable that (i) does not directly influence the change in outcome means (i.e. the outcome trend) except through influencing the change in exposure means (i.e. the exposure trend), and (ii) is not related to the unmeasured exposure - outcome confounders on the trend scale. Such exogenous variable is called an instrument for difference-in-differences. In this project, we suggests novel multiplicative structural mean models for instrumented difference-in-differences, which allow one to identify and estimate the average treatment effect on continuous, count and rare binary outcomes, in the whole population or among the treated, when a valid instrument for difference-in-differences is available. This is a joint work with Pr. Dylan Small, Pr. Sean Hennessy, Pr. Stijn Vansteelandt, Dr. Ting Ye, Dr. Ashkan Ertefaie and Dr. Samrat Roy.
    </div>
    <div className="title">
      Causal inference for rare events
    </div>
  </div>;
}
