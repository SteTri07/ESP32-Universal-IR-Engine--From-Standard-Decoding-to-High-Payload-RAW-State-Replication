---
title: v1.0 - Protocol Standard TV Controller
---

# v1.0 - Protocol Standard TV Controller

## Overview

The first milestone based on the native decoding of commercial protocols, focused on using standard logic addresses and commands (such as the Sony protocol) to drive devices using the microcontroller's standard libraries.

---

## Technical Scope

* Implementation of standard IR libraries.
* Verification of basic signal reception and transmission via the ESP32.
* Establishment of a functional baseline for command mapping.

---

## Architecture and Component Description

This initial phase of the project established the logical and circuit foundations of the entire control system, focusing on the interface between the ESP32 microcontroller and the demodulated infrared receiver. Unlike traditional wired systems, the infrastructure relies on the acquisition of 38kHz light signals converted into intelligent electrical pulses.

The core of the circuit is the ESP32, chosen for its dual processing capabilities and flexibility in assigning input/output pins (GPIO). The IR receiver module was connected to the microcontroller, properly powered and interfaced with a dedicated digital pin for data sampling. The primary task of this hardware stage is signal demodulation: the sensor filters out ambient noise frequencies, allowing only the useful carrier wave emitted by the commercial remote control to pass through.

<p align="center">
  <img src="/img/1a.jpeg" alt="IR receiver" width="80%">
</p>

From a software perspective, this version leverages standard decoding libraries to analyze the binary packets associated with widespread commercial protocols, such as the Sony protocol. Each button pressed on the remote generates a specific bit sequence consisting of a header, a logical device address, and an associated command. The ESP32 receives these streams through the input pin, interprets them by comparing them with library dictionaries, and outputs a logical feedback on the serial monitor. This approach validated the reliability of the circuit connections while highlighting the inherent limitations of relying on closed libraries bound to fixed commercial standards.

<p align="center">
  <img src="/img/1b.jpeg" alt="Architecture and Component" width="80%">
</p>

---