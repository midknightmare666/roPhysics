/**
 ****************************************
 *                                      *
 *  Roblox Projectile Physics Functions *
 *      by                              *
 *      twitter: @midknightmare666      *
 *      discord: @midknightmare#6666    *
 *                                      *
 ****************************************
 */

/**
* Convert degrees to radians.
* 
* @function degToRad
* @param  {Number} degree The degree to covert.
* @return {Number} radian The converted degree as radian.
* @example
* degToRad(45) => 0.7853981633974483
*/
const degToRad = degree => {
  if (degree.constructor !== Number) return { ok: false, error: new TypeError('Degree Parameter Must Be A Number.') };
  const pi = Math.PI;
  const radian = degree * (pi/180);
  return radian;
};

/**
 * Convert radians to degrees.
 *
 * @function radToDeg
 * @param  {Number} radian The radian to covert.
 * @return {Number}        The converted radian as degrees.
 */
const radToDeg = radian => {
  if (radian.constructor !== Number) return { ok: false, error: new TypeError('Radian Parameter Must Be A Number.') };
  const pi = Math.PI;
  const degree = radian * (180/pi);
  return degree;
};

/**
 * Shortcut for Math.sin() cause we're lazy around here.
 * @type {(Function\|Number)} radian
 */
const sine = Math.sin;

/**
 * The earth's gravity.
 * 9.81 meters/secs^2
 * @type {Number}
 */
const earthGravity = 9.81

/**
 * Round a number to a given decimal point.
 *
 * @function preciseRound
 * 
 * @param  {Number}  value      The number to be rounded.
 * @param  {Number}  decimals=1 The decimal places to round to (defaults to 1).
 * @returns {Number} rounded    The final rounded number.
 * @example
 * preciseRound(196.20000000000002, 1) => 196.2
 */
const preciseRound = (value, decimals = 1) => {
  if (value.constructor !== Number || decimals.constructor !== Number) return { ok: false, error: new TypeError('Parameter Must Be A Number') };
  const rounded = Number(value.toFixed(decimals));
  return rounded;
};

/**
 * Converts meters to studs.
 * 1 meter = 20 studs per Roblox Archives
 * 
 * @function metersToStuds
 * @param  {Number} meters The amount of meters to convert.
 * @return {Number} studs  The converted meters in Roblox studs.
 * @example
 *  convert 20 meters:
 *  metersToStuds(20) => 196.2 studs
 */
const metersToStuds = meters => {
  if (meters.constructor !== Number) return { ok: false, error: new TypeError('Meters Parameter Must Be A Number') };
  const studs = preciseRound(meters*earthGravity, 2);
  return studs;
};

/**
 * Converts studs to meters (in case you need it)
 *
 * @function studsToMeters
 * @param  {Number} studs The number of studs to convert.
 * @return {Number}       The converted studs in meters.
 * @example
 * convert 196.2 studs:
 * studsToMeters(196.2) => 20 meters
 */
const studsToMeters = studs => {
    if (studs.constructor !== Number) return { ok: false, error: new TypeError('Studs Parameter Must Be A Number') };
  const meters = preciseRound((studs/earthGravity));
  return meters;
};

/**
 * Roblox gravity ( print(workspace.Gravity) )
 * @type {Number}
 */
const gravity = preciseRound(metersToStuds(20), 2);

/**
  * Calculate max distance of projectile.
  *
  * @function maxDistance
  * @param  {Number} velocity           Muzzle velocity.
  * @param  {Number} angle=degToRad(45) Angle at launch, defaults to 45 degrees.
  * @return {Number} distance           Maximum distance traveled in studs.
  * @example
  * maxDistance(300) => ~ 458.72 (studs)
  */
const maxDistance = (velocity, angle = degToRad(45)) => {
  if (velocity.constructor !== Number) return { ok: false, error: new TypeError('Velocity Parameter Must Be A Number.') };
  const vel = velocity**2;
  const sin = sine(2*angle)/gravity;
  const distance = preciseRound(vel * sin, 2);
  return distance;
};

/**
* Calculate time traveled of projectile.
* 
* @function timeTraveled
* @param  {Number} velocity           Muzzle velocity.
* @param  {Number} angle=degToRad(45) Angle at launch, defaults to 45 degrees.
* @return {Number} time     Projectile time traveled (when it hits the ground) in seconds.
* @example
* timeTraveled(300) => ~ 2.6 (seconds)
*/
const timeTraveled = (velocity, angle = degToRad(45)) => {
  if (velocity.constructor !== Number) return { ok: false, error: new TypeError('Velocity Parameter Must Be A Number.') };
  const vel = 2 * velocity;
  const sin = sine(angle)/gravity
  const time = preciseRound(vel * sin, 2);
  return time;
};

/**
 * Calculate max height of projectile.
 * 
 * @param  {Number} velocity Muzzle velocity
 * @param {Number}  angle    Angle at launch, defaults to 45 degrees.
 * @return {Number} height   Max height reached in studs.
 * @example
 * maxHeight(300) => ~ 166.06 (studs)
 */
const maxHeight = (velocity, angle = degToRad(45)) => {
  if (velocity.constructor !== Number) return { ok: false, error: new TypeError('Velocity Parameter Must Be A Number.') };
  const sq = velocity**2;
  const sin = sine(angle)**2;
  const g = 2*gravity
  const height = preciseRound((sq * sin/g), 2);
  return height;
};

/**
 * Calculates everything, in case you're feeling lazy
 *
 * @function trajectory
 * @param  {Number} velocity Muzzle Velocity
 * @param  {Number} angle    Angle at launch, defaults to 45 degrees.
 * @return {Object}
 * @example
 * trajectory(300) => { distance: 458.72, height: 114.68, time: 2.16 }
 */
const trajectory = (velocity, angle = degToRad(45)) => {
  const muzzleVelocity = velocity;
  const launchAngle = { rad: angle, deg: radToDeg(angle)};
  const distance = maxDistance(velocity, angle);
  const height = maxHeight(velocity, angle);
  const time = timeTraveled(velocity, angle);
  return {
    muzzleVelocity,
    launchAngle,
    distance,
    height,
    time,
  };
}

module.exports = {
  degToRad,
  radToDeg,
  preciseRound,
  metersToStuds,
  studsToMeters,
  maxDistance,
  maxHeight,
  timeTraveled,
  trajectory,
};