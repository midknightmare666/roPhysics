# RoPhysics
## Projectile Physics Calculations For Roblox Projectiles

# About
RoPhysics is a JS library that calculates Roblox projectile physics.


# Installation / Requirements
* `npm install rophysics --save`
* requirements: [Node.js](https://nodejs.org/en/) & npm (latest versions).

# Usage
The functions file contains more detailed documentation, located in `src` folder
### Calculate Projectile Trajectory Via Velocity:
```javascript
const { trajectory } = require('rophysics');

/**
 * velocity =  initial muzzle velocity at which projectile was launched.
 * degree   =  angle at which projetile was launched (defaults to 45 degrees if left empty).
 * 
 * trajectory(velocity, degree)
 * 
 */
const data = trajectory(300)

console.log(data)

/* logs:
{
 muzzleVelocity: 300,
 launchAngle: {
  rad: 0.7853981633974483,
  deg: 45
 },
 distance: 458.72,
 height: 114.68,
 time: 2.16
}

 */

```
### Advanced Usage:
This module provides more functions:
```javascript
/*
  Convert meters to studs.
  meter = Number of meters to convert
  metersToStuds(meter)
 */
const { metersToStuds } = require('rophysics')

const meters = metersToStuds(20)
// => 196.2 studs


/*
  Convert studs to meters.
  studs = Number of studs to covert
  studsToMeters(studs)
 */
const { studsToMeters } = require('rophysics')

const studs = studsToMeters(196.2)
// => 20 meters


/*
  Calculate maximum projectile distance only
  velocity = projectile velocity (muzzle)
  degree = angle at which projectile was launched (default to 45 degrees if left empty)
  maxDistance(velocity, degree)
 */
const { maxDistance } = require('rophysics')

const distance = maxDistance(300, 45)
// => 458.72 (studs)


/*
  Calculate maximum projectile height only
  velocity = projectile velocity (muzzle)
  degree = angle at which projectile was launched (default to 45 degrees if left empty)
  maxHeight(300, 45)

 */
const { maxHeight } = require('rophysics')

const height = maxDistance(300, 45)
// => 114.68 (studs)


/*
  Calculate projectile travel time (when it hits the "earth") only
  velocity = projectile velocity (muzzle)
  degree = angle at which projectile was launched (default to 45 if left empty)
  timeTraveled(velocity, degree) 
 */
const { timeTraveled } = require('rophysics')

const time = timeTraveled(300, 45)


/*
  Convert degrees to radians
 */
const { degToRad } = require('rophysics')

const radian = degToRad(45)
// => 0.7853981633974483


/*
  Convert radians to degrees
 */
const { radToDeg } = require('rophysics')

const degree = radToDeg(0.7853981633974483)
// => 45

```
# Understanding Projectile Physics
* Roblox Blog(s):
0. [Potato Cannons](https://blog.roblox.com/2012/06/testing-the-accuracy-of-roblox-physics-with-potato-cannons/)
1. [Forum](https://devforum.roblox.com/t/how-many-studs-is-there-in-a-meter/103417/8)

* YouTube videos/playist on projectiles physics: 
0. [Motion: 2D Kinematics](https://www.youtube.com/watch?v=uBMLZV1B-Bw&list=PLMXAf0aPgIuVxKORoyofGV99l-YUsEK3j&index=1)
1. [Projectile Motion Equation](https://www.youtube.com/watch?v=DbuidBDG6ss)
2. [Projectile Motion Example](https://www.youtube.com/watch?v=6SHT-SLvcxk)
3. [Fire A Bullet](https://www.youtube.com/watch?v=_8t0iPz9VOc&list=PLMXAf0aPgIuVxKORoyofGV99l-YUsEK3j&index=7
)
4. [Bullet Drop](https://www.youtube.com/watch?v=_-soNrVIb8U&list=PLMXAf0aPgIuVxKORoyofGV99l-YUsEK3j&index=8)

# Contributing
Please make a PR or contact me via discord `@midknightmare#666` or twitter `@midknightmare`

# License
**MIT**