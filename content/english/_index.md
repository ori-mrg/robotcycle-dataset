---
# Banner
banner:
  title: "The Oxford RobotCycle Project"
  content: "A multimodal urban dataset recorded from the first-person viewpoint of an ego-cyclist."
  image: "/images/banner.png"

# Key Features
key_features:
  title: "Key Features"
  content: "A comprehensive dataset for risk assessment, traffic modelling, scene understanding, and odometry estimation. "
  # Linking infrastructure to rider trajectories and attention under the challenging, high-motion conditions of real urban cycling."
  bulletpoints:
    - "Large-scale multimodal dataset with eye-gaze tracking"
    - "70+ km of cycling data across varied terrains and inclines"
    - "Challenging real-world benchmark for pose and odometry estimation"
    - "Diverse road, traffic, and weather conditions"
    - "Integrated visualisation and analysis toolkit"
    - "Risk analysis correlating attention, behaviour, infrastructure, and stress"

  button:
    enable: true
    label: "Download RobotCycle"
    link: "https://ori-mrg.github.io/robotcycle-dataset/download"

# Features
features:
  - title: "Wearable Sensing Unit"
    image: "/images/urdf.png"
    content: "We developed a lightweight, portable, wearable sensing unit integrating advanced range, visual, and inertial sensors, while cyclists also wore eye-gaze tracking glasses."
    bulletpoints:
      - "Project Aria Gen 1 Glasses"
      - "2 x Hesai XT-32 LiDARs"
      - "2 x Stereolabs ZED2i Stereo Cameras"
      - "2 x Basler Ace Monocular Cameras"
      - "1 x SBG Ellipse-N INS"

    button:
      enable: false
      label: "Get Started Now"
      link: "#"

  - title: "RobotCycle Toolkit SDK"
    image: "/images/rc_website.png"
    content: "An open-source software development kit providing essential tools for processing, analysing, and visualising the RobotCycle dataset. Our toolkit streamlines research workflows with automated processing pipelines."
    bulletpoints:
      - "Automatic Sensor Calibration"
      - "Data Synchronisation"
      - "Point Cloud Segmentation"
      - "Image Segmentation"
      - "Visualisation Tools"
      - "Customisable Ontology"

  - title: "Analysis"
    image: "/images/icp_lidars.png"
    content: "The dataset supports diverse research applications related to perception, traffic analysis, behaviour modelling, and safety assessment. We provide tools and initial analysis for a set of key research tasks."
    bulletpoints:
      - "Pose Estimation"
      - "Risk Assessment"
      - "Trajectory Tracking"
      - "Traffic Flow Estimation"
      - "Attention Pattern Extraction"
      - "Stress Level Evaluation"

# Authors
authors:
  title: "Authors"
  content: "The RobotCycle Project was a collaborative effort between the Cognitive Robotics Group, the [Mobile Robotics Group](https://ori-mrg.github.io/), and the Engineering Team of the [Oxford Robotics Institute](https://ori.ox.ac.uk/). This work was jointly led by Professors [Lars Kunze](https://scholar.google.co.uk/citations?user=TLC0azYAAAAJ&hl=en) and [Daniele De Martini](https://scholar.google.com/citations?user=F7QcGh0AAAAJ&hl=en), with [Efimia Panagiotaki](https://efimiap.github.io/) serving as Research Lead and [Chris Prahacs](https://ori.ox.ac.uk/people/chris-prahacs/) as Engineering Lead. Contributors from the ORI also include Divya Thuremella, Jumana Baghabrah, Samuel Sze, Lanke Frank Tarimo Fu, Benjamin Hardin, Tyler Reinmund, Tobit Flatscher, and Daniel Marques. We are grateful to everyone who participated in the design and development of the backpack and the successful completion of the cycling trials. A special thank you goes to our dedicated engineers and the incredible cyclists whose efforts and patience made this dataset possible."

# Updates
updates:
  title: "Updates"
  content: "Latest news and milestones from the RobotCycle Project"
  bulletpoints: 
    - "October'25: Paper presentation (poster & oral) at IEEE IROS 2025"
    - "October'25: Full Dataset Release"
    - "October'25: Website and SDK release"
    - "July'25: Project presentation to the Chancellor of the University of Oxford"
    - "May'25: *The Oxford RobotCycle Project* paper gets accepted in IEEE Transactions on Field Robotics!"
    - "October'24: Data collection trials begin in Oxford"
    - "September'24: Backpack finalised"
    - "June'24: Paper invited for submission to T-FR"
    - "May'24: Poster presentation at the Field Robotics Workshop, IEEE ICRA'24"
    - "March'24: First paper with initial results from Culham accepted in IEEE IV'24"
    - "December'23: Trials in Culham begin"



# Privacy
privacy:
  title: "Privacy"
  content: "Please find more information about data privacy and ethical considerations in our research on the [RobotCycle Data Ethics page](https://ori.ox.ac.uk/publications/datasets/robotcycle-ethics/#:~:text=In%20RobotCycle%2C%20we%20consider%20datasets,biometrics%20such%20as%20face%20recognition.)."



# Citation
citation:
  title: "Citation"
  subtitle: "If you use this work, we would appreciate it if you cite us!"
  left_column:
    title: "For the dataset, project, analysis, please cite:"
    citation: |
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
        doi={10.1109/TFR.2025.3566304}}
      ```
  right_column:
    title: "For the project introduction, please cite:"
    citation: |
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
        doi={10.1109/IV55156.2024.10588375}}
      ```



---
