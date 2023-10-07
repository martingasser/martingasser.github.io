---
title: Brick by Brick
description: Sound/Performance
type: art project
tags:
- sound installation
- performance
- composition
year: 2023
img: media/brick-by-brick.png
---

What are the limits of our endurance? This existential question arises within a social and a political context. The installation 'Brick by Brick' delves into the intricate web of seemingly insurmountable constraints and societal expectations to which we find ourselves subjected in our everyday existence.

<div class="video-container">
<iframe class="video" src="https://www.youtube.com/embed/cd3l2zjyF8g?si=7rrtAw4W5pej3LqZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Symbolically, a stack of bricks serves as a metaphor for these burdens, inviting the audience to intermittently engage with a sledgehammer, fostering a moment of profound release that coincides with an encompassing infusion of illuminative visual stimuli and resonant auditory experiences. Thereby, each hit of the hammer triggers a section of a six-part soundscape composition.

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1634021337&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/martin-alley" title="Martin Alley" target="_blank" style="color: #cccccc; text-decoration: none;">Martin Alley</a> · <a href="https://soundcloud.com/martin-alley/brick-by-brick" title="Brick By Brick" target="_blank" style="color: #cccccc; text-decoration: none;">Brick By Brick</a></div>

For the technical realization, a piezo pickup glued to a massive wooden plate, with the bricks stacked on top of it is used to detect the hammer hits. The piezo is connected to a ESP32 microcontroller with a Bluetooth LE connection to a laptop running Max/MSP and Ableton Live. Max/MSP takes care of receiving the trigger signals via BLE. The parts of the composition are laid out in Ableton Live as scenes that can be triggered via MIDI by the Max/MSP patch. The Max/MSP patch also controls DMX lighting. A 2x 500W audio system plus subwoofer is used to render the soundscape.

It was exhibited from 28.-30. September 2023 at [Other Island](https://www.dark-city.at/other-island/).