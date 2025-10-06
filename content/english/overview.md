## Overview

The **Oxford RobotCycle Project** is a large-scale multimodal dataset designed to study how **road infrastructure**, **traffic dynamics**, and **human behavior** influence **cyclist safety** in real-world environments. Developed by the **Oxford Robotics Institute** at the University of Oxford, the project uses state-of-the-art sensing technology, commonly found in autonomous vehicles, to capture dynamic urban cycling data across Oxford, U.K.

Beyond safety analysis, the dataset also serves as a **challenging benchmark for odometry estimation and localisation**, due to the highly dynamic and non-rigid motion of cyclists, rapid maneuvers, and complex urban environments. Our project goals were to:

- Capture real-world interactions between cyclists and other road users.  
- Record high-fidelity multimodal data for traffic behaviour, risk, and attention analysis.  
- Support data-driven infrastructure design for safer, cyclist-friendly cities.  
- Provide open tools for multimodal synchronisation, annotation, visualisation, and analysis.  

![](/images/sensing2.png)

## Sensors Configuration

![](/images/sensorssuite2.png)

Data collection was performed using a **custom sensorised backpack** and **Project Aria smart glasses**, providing full 360° sensing around the cyclist.

<table style="font-size:0.9em; width:100%; margin: 1.2em 0; border-collapse: collapse;">
	<thead>
		<tr>
			<th style="text-align:left; border-bottom:1px solid #ccc;">Sensors</th>
			<th style="text-align:left; border-bottom:1px solid #ccc;">Type</th>
			<th style="text-align:left; border-bottom:1px solid #ccc;">Rate</th>
			<th style="text-align:left; border-bottom:1px solid #ccc;">Description</th>
		</tr>
	</thead>
	<tbody>
		<tr><td><b>Hesai XT-32 (×2)</b></td><td>LiDAR</td><td>10 Hz</td><td>360° coverage, 150 m range</td></tr>
		<tr><td><b>Cameras (×4)</b></td><td>RGB (2 stereo + 2 fisheye)</td><td>15 Hz</td><td>ZED2i w/ IMU (front/rear) + Basler fisheye (sides)</td></tr>
		<tr><td><b>SBG Ellipse-N INS</b></td><td>IMU + RTK GNSS</td><td>200 Hz</td><td>Inertial + positional data</td></tr>
		<tr><td><b>Project Aria Glasses</b></td><td>Gaze tracking + RGB</td><td>10 Hz</td><td>Head orientation + gaze</td></tr>
		<tr><td><b>Embedded Computer</b></td><td>AMD Ryzen 9 7950X3D</td><td>—</td><td>Real-time data logging (~3 TB/h)</td></tr>
	</tbody>
</table>

Sensors are synchronised via Precision Time Protocol (PTP) with nanosecond precision. Faces and license plates are anonymised using Egoblur-based privacy tools.



## Routes and Locations

To ensure representative data, three main loops were recorded in Oxford, each with diverse infrastructure types, traffic volumes, and environments.  The route selection was guided by stakeholder input from **Transport for London (TfL)**, **Oxfordshire County Council (OCC)**, and local cycling communities, alongside analysis of accident data from the UK’s [CrashMap](https://crashmap.co.uk/) (2019–2022) and findings from a prestudy survey of Oxford cyclists that identified safety-critical intersections and perceived-safety concerns. Each route was traversed multiple times in both directions, totaling **12 runs**, recorded under various weather, lighting, and traffic conditions.


![](images/routes.png)

<table style="font-size:0.9em; width:100%; margin: 1.2em 0; border-collapse: collapse;">
	<thead>
		<tr>
			<th style="text-align:left; border-bottom:1px solid #ccc;">Loop</th>
			<th style="text-align:left; border-bottom:1px solid #ccc;">Distance</th>
			<th style="text-align:left; border-bottom:1px solid #ccc;">Key Characteristics</th>
			<th style="text-align:left; border-bottom:1px solid #ccc;">Typical Conditions</th>
		</tr>
	</thead>
	<tbody>
		<tr><td><b>North Loop</b></td><td>6.05 km</td><td>Fast-moving, mixed traffic</td><td>High vehicle density, frequent bus interactions</td></tr>
		<tr><td><b>Central Loop</b></td><td>5.38 km</td><td>Dense pedestrian and cyclist flow in city center</td><td>Shared lanes, narrow streets, intersections</td></tr>
		<tr><td><b>South Loop</b></td><td>5.99 km</td><td>Medium-speed roads with complex intersections and varied inclines</td><td>Varied lighting, weather, and road works</td></tr>
	</tbody>
</table>


To better understand how infrastructure influences cyclist safety, we categorized and prioritized the cycling routes according to **four main types of infrastructure**, reflecting increasing degrees of physical protection:

<table style="font-size:0.9em; width:100%; margin: 1.2em 0; border-collapse: collapse;">
	<thead>
		<tr>
			<th style="text-align:left; border-bottom:1px solid #ccc;">Category</th>
			<th style="text-align:left; border-bottom:1px solid #ccc;">Description</th>
			<th style="text-align:left; border-bottom:1px solid #ccc;">Characteristics</th>
		</tr>
	</thead>
	<tbody>
		<tr><td><b>Type A – Areas Without Cycle Lanes</b></td><td>Cyclists share the road with motor traffic.</td><td>Highest risk exposure; frequent vehicle overtakes and narrow lanes.</td></tr>
		<tr><td><b>Type B – On-Road Bicycle Tracks</b></td><td>Road markings provide a notional cycling space.</td><td>Moderate separation but still frequent vehicle intrusions.</td></tr>
		<tr><td><b>Type C – Segregated Cycle Tracks</b></td><td>Physically separated lanes, often curb-protected or bi-directional.</td><td>Reduced vehicle conflict, safer lateral spacing.</td></tr>
		<tr><td><b>Type D – Shared-Use Paths</b></td><td>Mixed pedestrian–cycle paths, typically off-road.</td><td>Safe from vehicles but increased pedestrian interaction.</td></tr>
	</tbody>
</table>



![](images/examples_up.png)
<div style="text-align:center; font-style:italic; font-size:0.8em; margin: 0.5em 0;">
	Type A<span style="display:inline-block; width:28em;"></span>Type B
</div>

![](images/examples_down.png)
<div style="text-align:center; font-style:italic; font-size:0.8em; margin: 0.5em 0;">
	Type C<span style="display:inline-block; width:28em;"></span>Type D
</div>


---

For more information about the data collection methodology, sensor calibration, open-source toolkit, and analysis results, please refer to our paper:

[The Oxford RobotCycle Project: A Multimodal Urban Cycling Dataset for Assessing the Safety of Vulnerable Road Users (PDF)](https://ieeexplore.ieee.org/abstract/document/10981746)

<div style="font-size:0.98em; color:#555; margin-top:0.5em; margin-bottom:1.2em;">
Efimia Panagiotaki, Divya Thuremella, Jumana Baghabrah, Samuel Sze, Lanke Frank Tarimo Fu, Benjamin Hardin, Tyler Reinmund, Tobit Flatscher, Daniel Marques, Chris Prahacs, Lars Kunze, Daniele De Martini </br>
<em>Transactions on Field Robotics</em>
</div>

---