import React from "react";

export default function Research() {
  return <div className="Research">
    <div className="title">
      Causal data fusion and its applications
    </div>
    <div className="contentText">
      The integration of data and knowledge from several data sources is often known as data fusion. Across different research fields, data fusion is increasingly needed
      to satisfy the requirement of combining information from multiple databases, so as to improve our ability to perform statistical inferences. Within this realm, 
      my works primarily concern the development of new methods to address the challenge of heterogeneity and of restricted access to individual-level data, 
      when borrowing information across different populations in evidence synthesis or health technology assessment. 
      In this direction, I strongly collaborate with Pr. Stijn Vansteelandt, Dr. Raphael Porcher, Dr. Ivan Diaz and Dr. Kara Rudolph.
    </div>
    <div className="title">
      Recanting twins in mediation analysis
    </div>
    <div className="contentText">
      Mediation analyses are statistical techniques commonly used to study the mechanisms via which exposures exert causal effects on outcomes. 
      The presence of intermediate confounders, also called recanting witnesses, is a long standing challenge that prevents 
      a fine-grained assessment of diffrent mediating pathways. 
      In a recent work, we develop a novel method to address intermediate confounding, 
      with guarantees that the proposed causal parameters measure the target individual-level mechanisms. 
      This method is based on recently proposed ideas that view causality as the transfer of information, and thus replace recanting witnesses by draws 
      from their conditional distribution, which we call "recanting twins". This work is a fruiful collaboration with Dr. Ivan Diaz and Dr. Kara Rudolph.
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
