# 🧘‍♂️ Impartial Judge for Yoga Competitions

## Overview
The **Impartial Judge for Yoga Competitions** project aims to reduce favoritism and subjectivity in the evaluation of Yoga performances by leveraging computer vision and machine learning. The solution focuses on enabling **fair, consistent, and unbiased scoring**, particularly in **rural competitive events**, where access to expert judges is limited.

With multiple traditional sports being promoted under initiatives such as **Khelo India**, this system helps improve the quality, transparency, and competitiveness of Yoga as a competitive sport.

## Problem Statement
Manual judging of Yoga postures often suffers from:
- Human bias and favoritism  
- Inconsistent scoring standards  
- Limited availability of trained judges in rural areas  

These challenges can result in **missed talent and unfair outcomes**.

## Solution
This project introduces an **AI-based posture evaluation system** that:
- Analyzes Yoga poses using image-based classification techniques  
- Compares postures against predefined standards  
- Provides objective and repeatable assessments  

The system is designed to be **portable, low-cost, and deployable on edge devices**, making it suitable for on-site competitions.

## Raspberry Pi Code
Sensitive code for building the **YogaNet** model used for pose classification and evaluation functions for those poses are **intentionally not published to the repository**. The frontend receives the judgement (captured image, detected pose and score) from firebase which is published there by the raspberry pi after grading is done.

## Key Features
- Automated Yoga posture evaluation using image classification  
- Objective and consistent scoring mechanism  
- Edge deployment for real-time analysis

## Technology Stack
- **Computer Vision**: Mediapipe libary, TensorFlow, Keras  
- **Edge Computing**: Raspberry Pi  
- **Data & Integration**: Firebase  
- **Frontend (UI to display results)**: React.js

## Impact
- Promotes fairness and transparency in competitive Yoga  
- Reduces dependency on manual judgment  
- Encourages talent identification at grassroots levels  
- Supports scalable adoption in national sports initiatives  

## Future Enhancements
- Support for additional Yoga poses and sports  
- Real-time feedback and scoring visualization
- Accuracy benchmarking with expert-annotated datasets  
- Multi-camera support for improved posture detection
- Hardware Cost optimization.
