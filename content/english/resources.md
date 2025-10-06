# Resources


The **RobotCycle DevKit** streamlines **data loading**, **synchronisation**, and **analysis** for multimodal robotic perception.
Built around **PyTorch**, it provides robust, sensor-specific dataset classes with integrated **timestamping**, **calibration**, and **preprocessing utilities**.


## RobotCycle DevKit

A <em>deep learning first</em> Python SDK.  
- Comprehensive **data loading and processing**  
- PyTorch `Dataset` classes for each sensor  
- Built-in **synchronisation** and **timestamping**  
- Optional **auto-rectification** and **calibration**  



## Semantic Annotations
The dataset provides rich multimodal semantic labeling:  
- **RGB images** labeled with SAM (240 images across 60 scenes)  
- **LiDAR pseudo-labels** via Cylinder3D and DBSCAN  
- **Semantic taxonomy** aligned with SemanticKITTI and nuScenes

![](images/annotations.png)

## Ontology and Knowledge Graphs
A structured **OWL2/RDFS ontology** captures the relationships between:
- Road agents, vehicles, and infrastructure  
- Spatial and temporal relations (`hasPath`, `hasLocation`, `hasTimestamp`)   
- Sensor metadata and observation links   

This enables multimodal reasoning, scene understanding, and traffic knowledge queries.

![](images/ontology_rc.png)

## Visualisation and Analysis Tools
- Risk & proximity analysis for agent interactions
- Eye-gaze heatmap generation extracting attention patterns
- Traffic flow estimation and trajectory tracking
- Map overlays and infrastructure annotation

![](images/attention.png)

---

For more information about the data collection methodology, sensor calibration, open-source toolkit, and analysis results, please refer to our paper:

[The Oxford RobotCycle Project: A Multimodal Urban Cycling Dataset for Assessing the Safety of Vulnerable Road Users (PDF)](https://ieeexplore.ieee.org/abstract/document/10981746)

<div style="font-size:0.98em; color:#555; margin-top:0.5em; margin-bottom:1.2em;">
Efimia Panagiotaki, Divya Thuremella, Jumana Baghabrah, Samuel Sze, Lanke Frank Tarimo Fu, Benjamin Hardin, Tyler Reinmund, Tobit Flatscher, Daniel Marques, Chris Prahacs, Lars Kunze, Daniele De Martini </br>
<em>Transactions on Field Robotics</em>
</div>

---