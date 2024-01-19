import React from "react";

export default function Research() {
  return <div className="Research">
    <div className="title">
      Causal data fusion and its applications
    </div>
    <div className="contentText">
      The integration of data and knowledge from several data sources is often known as data fusion. Across different research fields, data fusion is increasingly needed
      to combine information from multiple databases, so as to improve our ability to perform statistical inferences. Within this realm, 
      my works primarily concern the development of new methods to address the challenge of heterogeneity and of restricted access to individual-level data, 
      when borrowing information across different populations in evidence synthesis or health technology assessment. 
      In this direction, I closely collaborate with Pr. <a href="https://www.ugent.be/dass/en/research/vansteelandt"> Stijn Vansteelandt</a>, 
        Pr. <a href="https://cress-umr1153.fr/fr/teams/methods/member-raphael-porcher-254/"> Raphael Porcher</a>, 
          Dr. <a href="https://www.idiaz.xyz/"> Ivan Diaz</a> and 
            Dr. <a href="https://kararudolph.github.io/"> Kara Rudolph</a>.
    </div>
    <div className="title">
      Recanting twins in mediation analysis
    </div>
    <div className="contentText">
      Mediation analyses are statistical techniques commonly used to study the mechanisms via which exposures exert causal effects on outcomes. 
      The presence of intermediate confounders, also called recanting witnesses, is a long-standing challenge that prevents 
      a fine-grained assessment of diffrent causal mediating pathways. 
      In a recent study, we develop a novel method for mediation to address this challenge, 
      with guarantees that the proposed causal parameters will measure the target individual-level mechanisms. 
      Such a method is based on recently proposed ideas that view causality as the transfer of information, and thus replace recanting witnesses by drawing 
      from their conditional distribution, which we call "recanting twins". This work is a fruiful collaboration with Dr. <a href="https://www.idiaz.xyz/">Ivan Diaz</a> and 
        Dr. <a href="https://kararudolph.github.io/">Kara Rudolph</a>.
    </div>
    <div className="title">
      Risk of Bias in Mediation Analysis (ROBIMA)
    </div>
    <div className="contentText">
      ROBIMA is a new initiative that involves international experts in psychology, epidemiology and biostatistics, with aim to construct a consensus-based, 
      high-quality tool for evaluating methodological biases in mediation analyses. This project involves many world-leading mediation experts such as 
      Pr. <a href="https://www.ugent.be/dass/en/research/vansteelandt">Stijn Vansteelandt</a>, Pr. 
          <a href="https://www.hsph.harvard.edu/tyler-vanderweele/">Tyler Vanderweele</a>, Pr. 
          <a href="https://search.asu.edu/profile/28257">David MacKinnon</a>, Dr. 
          <a href="https://www.ndorms.ox.ac.uk/team/hopin-lee">Hopin Lee</a>, Dr. 
          <a href="https://neura.edu.au/researchers/aidan-cashin">Aidan Cashin</a>, among many others.
    </div>
    <div className="title">
      Methods to address (un)measured confounding
    </div>
    <div className="contentText">
      Finally, I am particularly interested in developing new methods, as well as improving current methods to address measured and unmeasured confounders.
      For instance, we are currently working on projects to combine matching and countermatching in nested case-control design, 
      to extend the difference-in-differences (DID) design to a survival outcome setting,
      or to develop alternatives when the parallel trends assumption in DID is violated. Throughout these projects, 
        I closely collaborated with Pr. <a href="https://statistics.wharton.upenn.edu/profile/dsmall/">Dylan Small</a>, Pr. 
          <a href="https://www.med.upenn.edu/apps/faculty/index.php/g275/p8396">Sean Hennessy</a>, Pr. 
          <a href="https://www.ugent.be/dass/en/research/vansteelandt">Stijn Vansteelandt</a>, Dr. 
          <a href="https://sites.google.com/view/ruoqi-yu/">Ruoqi Yu</a>, Dr. 
          <a href="https://sites.google.com/view/tingye/home">Ting Ye</a>, Dr. 
          <a href="https://www.urmc.rochester.edu/biostat/people/faculty/ertefaie.aspx">Ashkan Ertefaie</a> and Dr. 
          <a href="https://www.linkedin.com/in/samratroy67/">Samrat Roy</a>.
  </div>
  </div>;
}
