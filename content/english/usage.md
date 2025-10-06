# Usage

The **RobotCycle dataset** supports research in autonomous mobility, safety analysis, multimodal perception, and urban planning.


## Initial Analysis

### 1. 3D Reconstruction and Odometry

- Challenging dataset due to sharp maneuvers and non-rigid motion. 
- Serves as a **benchmark for dynamic and real-world odometry estimation**.  
- Evaluated the robustness of **[KISS-ICP](https://arxiv.org/abs/2209.15397)** for LiDAR odometry on dynamic cycling data.  

![](/images/kissicp.png)

---

### 2. Risk and Interactions Analysis
- Classified segments into four infrastructure categories (Types A–D):
  _no cycle lane_, _on-road lane_, _segregated track_, and _shared-use path_.
- Correlated traffic intensity and lane geometry with vehicle proximity, TTC, and lane infingements.  
- Identified high-risk areas such as The Plain Roundabout and the road works in Woodstock Road.  

![Infrastructure Heatmap](/images/riskassessment.png)

---


### 3. Eye Gaze and Attention Mapping
- Generated heatmaps of visual focus using Project Aria gaze tracking.  
- Cyclists focus on junctions, approaching vehicles, and pedestrian crossings in high-traffic areas.  
- Enables research on human attention, stress, and risk anticipation.  

![Gaze Heatmap](/images/gazepatterns.png)

---


### 4. Safety Perception Analysis
- Combined self-reported safety ratings with sensor data.  
- Found strong correlation with road layout (L1) and other road users’ behavior (L4).  
- Supported by incident data from participant surveys and [CrashMap](https://crashmap.co.uk/).

---

## Potential Applications

The **RobotCycle dataset** supports a wide range of research applications, including but not limited to:  

- **Benchmarking SLAM and odometry** pipelines under highly dynamic conditions.  
- Developing and evaluating **multimodal perception**, combining LiDAR, vision, IMU, and GPS.
- Studying **how cyclists and vehicles interact** and share space in real-world traffic environments.  
- Quantifying how different types of cycling infrastructure influence safety, comfort, and risk.  
- Analysing **human attention and situational awareness** using gaze, head-motion, and environmental context data.  

---

For more information about the data collection methodology, sensor calibration, open-source toolkit, and analysis results, please refer to our paper:

[The Oxford RobotCycle Project: A Multimodal Urban Cycling Dataset for Assessing the Safety of Vulnerable Road Users (PDF)](https://ieeexplore.ieee.org/abstract/document/10981746)

<div style="font-size:0.98em; color:#555; margin-top:0.5em; margin-bottom:1.2em;">
Efimia Panagiotaki, Divya Thuremella, Jumana Baghabrah, Samuel Sze, Lanke Frank Tarimo Fu, Benjamin Hardin, Tyler Reinmund, Tobit Flatscher, Daniel Marques, Chris Prahacs, Lars Kunze, Daniele De Martini </br>
<em>Transactions on Field Robotics</em>
</div>

---