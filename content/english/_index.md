
<div align="center">

# The Oxford RobotCycle Project

<span style="font-size: 1.5em; font-weight: bold;">A multimodal urban dataset recorded from the first-person viewpoint of an ego-cyclist</span>

</div>


![RobotCycle Dataset Banner](/images/banner.png)


<div style="display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; align-items: center; margin: 2rem 0 2.5rem 0;">
  <div style="text-align: center;">
    <a href="https://ieeexplore.ieee.org/abstract/document/10981746" target="_blank" rel="noopener">
      <img src="images/paperpreview.png" alt="Paper Preview" style="max-width: 180px; width: 100%; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
    </a>
  </div>
  <div>
    <div style="font-size: 1em; font-weight: bold; margin-bottom: 0.5em;">
      The Oxford RobotCycle Project: A Multimodal Urban Cycling Dataset for Assessing the Safety of Vulnerable Road Users
    </div>
    <div style="font-size: 0.8em; color: #555; margin-bottom: 0.5em;">
  <a href="https://efimiap.github.io/" target="_blank" rel="noopener">Efimia Panagiotaki</a>, 
  <a href="https://ori.ox.ac.uk/people/divya-thuremella/" target="_blank" rel="noopener">Divya Thuremella</a>, 
  <a href="https://ori.ox.ac.uk/people/jumana-baghabrah/" target="_blank" rel="noopener">Jumana Baghabrah</a>, 
  <a href="https://ori.ox.ac.uk/people/samuel-sze/" target="_blank" rel="noopener">Samuel Sze</a>, 
  <a href="https://www.fulkast.com/" target="_blank" rel="noopener">Lanke Frank Tarimo Fu</a>, 
  <a href="https://www.cs.ox.ac.uk/people/benjamin.hardin/" target="_blank" rel="noopener">Benjamin Hardin</a>, 
  <a href="https://treinmund.github.io/" target="_blank" rel="noopener">Tyler Reinmund</a>, 
  <a href="https://ori.ox.ac.uk/people/tobit-flatscher/" target="_blank" rel="noopener">Tobit Flatscher</a>, 
  <a href="https://ori.ox.ac.uk/people/daniel-marques/" target="_blank" rel="noopener">Daniel Marques</a>, 
  <a href="https://ori.ox.ac.uk/people/chris-prahacs/" target="_blank" rel="noopener">Chris Prahacs</a>, 
  <a href="https://scholar.google.co.uk/citations?user=TLC0azYAAAAJ&hl=en" target="_blank" rel="noopener">Lars Kunze</a>, 
  <a href="https://scholar.google.com/citations?user=F7QcGh0AAAAJ&hl=en" target="_blank" rel="noopener">Daniele De Martini</a>
    </div>
    <div style="font-size: 0.98em; color: #888;">
      <i>IEEE Transactions on Field Robotics, 2025</i>
    </div>
  </div>
</div>



## Key Features

A comprehensive dataset for risk assessment, traffic modelling, scene understanding, and odometry estimation.

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 1rem;">
<div style="font-size: 0.2em;">

<span style="font-size:0.8em;vertical-align:middle;">✔️</span> **Large-scale multimodal dataset with eye-gaze tracking**

<span style="font-size:0.8em;vertical-align:middle;">✔️</span> **70+ km of cycling data across varied terrains and inclines**

<span style="font-size:0.8em;vertical-align:middle;">✔️</span> **Challenging real-world benchmark for pose and odometry estimation**

</div>
<div style="font-size: 0.2em;">

<span style="font-size:0.8em;vertical-align:middle;">✔️</span> **Diverse road layouts, traffic and weather conditions**

<span style="font-size:0.8em;vertical-align:middle;">✔️</span> **Complete visualisation and analysis open-source toolkit**

<span style="font-size:0.8em;vertical-align:middle;">✔️</span> **Risk analysis correlating attention, behaviour, infrastructure, and stress**

</div>
</div>

<div style="text-align: center; margin: 2rem 0; margin-bottom: 3rem">
<a href="https://ori-mrg.github.io/robotcycle-dataset/download/" style="display: inline-block; background-color: #002147; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em; transition: background-color 0.3s ease;" onmouseover="this.style.backgroundColor='#001a38'" onmouseout="this.style.backgroundColor='#002147'">
📥 Download Dataset
</a>
</div>

---

### Wearable Sensing Unit

We developed a lightweight, portable, wearable sensing unit integrating advanced range, visual, and inertial sensors. The cyclists also wore eye-gaze tracking glasses.

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; margin-top: -0.5rem;">
<div style="font-size: 0.95em;">

- Project Aria Gen 1 Glasses
- 2 x Hesai XT-32 LiDARs
- 2 x Stereolabs ZED2i Stereo Cameras
- 2 x Basler Ace Monocular Cameras
- 1 x SBG Ellipse-N INS

</div>
<div>

<img src="images/urdf.png" alt="Wearable Sensing Unit URDF" style="width: 80%; min-width: 220px; height: auto;">

</div>
</div>


### RobotCycle DevKit

An open-source software development kit providing essential tools for processing, analysing, and visualising the RobotCycle dataset. Our toolkit streamlines research workflows with automated processing pipelines.


<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start; margin-top: 1rem;">
<div>
<img src="images/rc_website.png" alt="RobotCycle Toolkit SDK" style="width: 75%; min-width: 250px; height: auto; margin-top: 0rem;">
</div>
<div style="font-size: 0.95em;">

- Automatic Sensor Calibration
- Data Synchronisation
- Point Cloud Segmentation
- Image Segmentation
- Visualisation Tools
- Customisable Ontology

</div>
</div>

### Analysis

The dataset supports diverse research applications related to perception, traffic analysis, behaviour modelling, and safety assessment. We provide tools and initial analysis for a set of key research tasks.


<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start; margin-top: 1rem;">
<div>
<img src="images/rc_website_3.png" alt="RobotCycle Analysis" style="width: 80%; min-width: 250px; height: auto; margin-top: 0.5rem;">
</div>
<div style="font-size: 0.95em;">

- Pose Estimation
- Risk Assessment
- Trajectory Tracking
- Traffic Flow Estimation
- Attention Pattern Extraction
- Stress Level Evaluation

</div>
</div>


## Project Team

The RobotCycle Project was a collaborative effort between the Cognitive Robotics Group, the [Mobile Robotics Group](https://ori-mrg.github.io/), and the Engineering Team of the [Oxford Robotics Institute](https://ori.ox.ac.uk/). This work was jointly led by Professors [Lars Kunze](https://scholar.google.co.uk/citations?user=TLC0azYAAAAJ&hl=en) and [Daniele De Martini](https://scholar.google.com/citations?user=F7QcGh0AAAAJ&hl=en), with [Efimia Panagiotaki](https://efimiap.github.io/) serving as Research Lead and [Chris Prahacs](https://ori.ox.ac.uk/people/chris-prahacs/) as Engineering Lead. 

We are grateful to everyone who participated in the design and development of the backpack, and the successful completion of the cycling trials. A special thank you goes to our dedicated engineers and the incredible cyclists whose efforts and patience made this dataset possible.


## Updates

Latest news and milestones from the *Oxford RobotCycle Project*

<div class="updates-box" style="max-height: 290px; overflow-y: auto; border: 1px solid #e5e7eb; border-radius: 8px; padding: 0.5rem 1rem; background: #f9f9fa;">
  <ul style="margin: 0; padding-left: 1.2em;">
    <li><b>October'25</b>: Paper presentation (poster &amp; oral) at IEEE IROS 2025</li>
    <li><b>October'25</b>: Website and SDK release</li>
    <li><b>July'25</b>: Project presentation to the Chancellor of the University of Oxford</li>
    <li><b>May'25</b>: <i>The Oxford RobotCycle Project</i> paper gets accepted in IEEE Transactions on Field Robotics!</li>
    <li><b>October'24</b>: Data collection trials begin in Oxford</li>
    <li><b>September'24</b>: Backpack finalised</li>
    <li><b>June'24</b>: Paper invited for submission to T-FR</li>
    <li><b>May'24</b>: Poster presentation at the Field Robotics Workshop, IEEE ICRA'24</li>
    <li><b>March'24</b>: First paper with initial results from Culham accepted in IEEE IV'24</li>
    <li><b>December'23</b>: Trials in Culham begin</li>
  </ul>
</div>

## Privacy

Please find more information about data privacy and ethical considerations in our research on the [RobotCycle Data Ethics page](https://ori.ox.ac.uk/publications/datasets/robotcycle-ethics/).

## Citation


If you use this work, we would appreciate it if you cite us!

For the dataset, toolkit, project, or analysis, please cite:


```
@ARTICLE{10981746,
  author={Panagiotaki, Efimia and Thuremella, Divya and Baghabrah, Jumana and Sze, Samuel and Frank Tarimo Fu, Lanke and Hardin, Benjamin and Reinmund, Tyler and Flatscher, Tobit and Marques, Daniel and Prahacs, Chris and Kunze, Lars and de Martini, Daniele},
  journal={IEEE Transactions on Field Robotics}, 
  title={The Oxford RobotCycle Project: A Multimodal Urban Cycling Dataset for Assessing the Safety of Vulnerable Road Users}, 
  year={2025},
  volume={2},
  number={},
  pages={308-335},
  keywords={Roads;Safety;Robot sensing systems;Vehicle dynamics;Backpacks;Three-dimensional displays;Meteorology;Visualization;Laser radar;Data mining;Autonomous vehicles (AVs);data collection;human factors;motion analysis;odometry;road safety;road traffic;road transportation;road vehicles;robot localization;robot sensing systems},
  doi={10.1109/TFR.2025.3566304}
}
```

For the project introduction, please cite:

```
@INPROCEEDINGS{10588375,
  author={Panagiotaki, Efimia and Reinmund, Tyler and Mouton, Stephan and Pitt, Luke and Shanthini, Arundathi Shaji and Tubby, Wayne and Towlson, Matthew and Sze, Samuel and Liu, Brian and Prahacs, Chris and De Martini, Daniele and Kunze, Lars},
  booktitle={2024 IEEE Intelligent Vehicles Symposium (IV)}, 
  title={RobotCycle: Assessing Cycling Safety in Urban Environments}, 
  year={2024},
  volume={},
  number={},
  pages={357-363},
  keywords={Solid modeling;Three-dimensional displays;Urban areas;Data collection;Traffic control;Robot sensing systems;Trajectory;Safety;Bicycle;Dataset;Benchmark;Urban Infrastructure},
  doi={10.1109/IV55156.2024.10588375}
}
```
