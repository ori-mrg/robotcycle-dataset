

## Format

The dataset is organised into **time-stamped sequences**, each representing a single recorded run on one of the loops.

![](images/sensors3.png)

### Image Data
- Format: `.mp4` (compressed)  
- Resolution: 1920×1080 for cameras, 1408×1408 for Aria glasses  
- Intrinsics/extrinsics in `/calibration/`  
- Raw, uncompressed frames available on request  

### LiDAR Data
- Format: `.npz` with 3D coordinates (x, y, z), intensity, ring  
- Two synchronized sensors (left/right)  
- Raw, uncorrected point clouds (no motion compensation)  

### IMU / GPS
- Format: `.csv`  
- Contains orientation, acceleration, angular velocity, GNSS position, and uncertainty estimates  

### Eye-Tracking (Project Aria)
- Format: `.mp4` + CSV gaze logs  
- Includes gaze vectors, head IMU, barometer, and GPS  

### Timestamps
- Nanosecond-precision synchronization using PTP  
- Provided per sensor in `timestamp.csv`



## Raw ROSBAG Data

Raw `.bag` files (ROS1) are available on request for:

- Replaying synchronized sensor streams in ROS  
- Running custom odometry or SLAM pipelines  
- Custom calibration or post-processing  

Contact the maintainers for download instructions.





## Directory Structure
```
RobotCyle/
|-- ...
|-- 2025-02-05-09-38-47
|-- 2025-02-05-10-20-33
|-- 2025-02-06-10-17-28
|   |-- metadata.json
|   |-- baslers/
|   |   |-- left.mp4
|   |   `-- right.mp4
|   |-- hesai/
|   |   |-- left/
|   |   |   |-- 1730457723789282000.npz
|   |   |   |-- 1730457723889569000.npz
|   |   |   `-- ...
|   |   `-- right/
|   |       |-- 1730457723787372000.npz
|   |       |-- 1730457723887433000.npz
|   |       `-- ...
|   |-- motion/
|   |   |-- front_zed.csv
|   |   |-- gps.csv
|   |   |-- imu.csv
|   |   `-- rear_zed.csv
|   |-- timestamps/
|   |   |-- baslers/
|   |   |   |-- left.txt
|   |   |   `-- right.txt
|   |   |-- hesai/
|   |   |   |-- left.txt
|   |   |   `-- right.txt
|   |   `-- zed/
|   |       |-- front/
|   |       |   |-- left.txt
|   |       |   `-- right.txt
|   |       `-- rear/
|   |           |-- left.txt
|   |           `-- right.txt
|   |-- zed/
|   |   |-- front/
|   |   |   |-- left.mp4
|   |   |   `-- right.mp4
|   |   `-- rear/
|   |       |-- left.mp4
|   |       `-- right.mp4
|   `-- aria/
|       |-- front.mp4
|       |-- left.mp4
|       `-- right.mp4
|-- 2025-02-06-11-07-51
|-- 2025-02-07-09-51-51
`-- ...
```


