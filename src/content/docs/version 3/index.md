---
title: v3.0 - High-Payload AC Controller
---

<h1>v3.0 - High-Payload AC (Air Conditioner) RAW Controller</h1>



<h2>Overview</h2>



<p>The third version represents the culmination of this hardware journey, transforming the system into a universal controller capable of replicating any infrared device thanks to the power and flexibility of raw data.</p>



<p>The evolutionary leap toward this universal configuration stemmed directly from tackling the initial hurdle of air conditioning units, whose control units do not transmit single commands but rather entire state packets formed by hundreds of temporal transitions. Managing such complex and lengthy data flows required pushing the microcontroller's internal memory architecture to its limits, overcoming an initial bottleneck resolved by correctly formatting the ESP32's flash storage space to accommodate large arrays without saturating system resources.</p>



<p align="center">

&#x20; <img src="/ESP32-Universal-IR-Engine--From-Standard-Decoding-to-High-Payload-RAW-State-Replication/img/3.jpeg" alt="Architecture and Component" width="80%">

</p>



<hr>



<h2>Key Engineering Achievements</h2>



<p>Freed from any proprietary protocol decoding constraints and backed by optimized memory management, the system has become entirely agnostic regarding brand or appliance type. It can accurately store and replay the RAW signatures of televisions, air conditioners, or any other infrared peripheral simply by capturing their energetic footprint.</p>



<hr>

