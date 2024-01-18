import React from "react";

export default function Research() {
  return <div className="Research">
    <div className="title">
      Causally interpretable meta-analysis
    </div>
    <div className="contentText">
      The differential distribution of baseline covariates across eligible studies, also called case-mix heterogeneity is an important challenge in meta-analysis.
      In this project, we develop a new approach for meta‐analysis which use individual-level data (IPD) 
      from all trials to infer the treatment effect for the patient population in a given trial, based on direct standardization. The new approach enables disentangling 
      heterogeneity due to case mix from that due to beyond case‐mix reasons. Moreover, when data on mediators are available across 
      eligibles trials, one can further disentangle the beyond case-mix heterogeneity into mediator-related heterogeneity and residual heterogeneity.
      This is a joint work with Pr. Stijn Vansteelandt, Dr. Raphael Porcher, Dr. Ivan Diaz and Dr. Kara Rudolph.
    </div>
    <div className="title">
      Novel methods for mediation analysis based on recanting twins
    </div>
    <div className="contentText">
      The presence of intermediate confounders, also called recanting witnesses, prevents the identification of natural path-specific effects.
      In this project, we develop a novel method for mediation 
      analysis in settings with intermediate confounding, with guarantees that the causal parameters measure the target individual-level mechanisms. 
      The method is based on recently proposed ideas that view causality as the transfer of information, and thus replace recanting witnesses by draws 
      from their conditional distribution. This is a joint work with Dr. Ivan Diaz and Dr. Kara Rudolph.
    </div>
    <div className="title">
      Risk of Bias in Mediation Analysis (ROBIMA)
    </div>
    <div className="contentText">
      ROBIMA is a new initiative that involves international experts in psychology, epidemiology and biostatistics, with aim to construct a consensus-based, 
      high-quality tool for evaluating methodological biases in mediation analyses. This project involves Pr. Stijn Vansteelandt, Pr. Tyler Vanderweele, Pr. 
          David MacKinnon, Dr. Hopin Lee, Dr. Aidan Cashin, among many others.
    </div>
    <div className="title">
      Instrumented difference-in-differences
    </div>
    <div className="contentText">
      In the standard difference-in-differences research design, the parallel trends assumption may be violated when the relationship between the exposure trend 
      and the outcome trend is confounded by unmeasured confounders. Progress can be made if there is an exogenous variable that (i) does not directly influence 
      the change in outcome means (i.e. the outcome trend) except through influencing the change in exposure means (i.e. the exposure trend), and (ii) is not 
      related to the unmeasured exposure - outcome confounders on the trend scale. Such exogenous variable is called an instrument for difference-in-differences. 
      In this project, we suggests novel multiplicative structural mean models for instrumented difference-in-differences. This is a joint work with Pr. Dylan Small, 
      Pr. Sean Hennessy, Pr. Stijn Vansteelandt, Dr. Ting Ye, Dr. Ashkan Ertefaie and Dr. Samrat Roy.
  </div>
  </div>;
}
