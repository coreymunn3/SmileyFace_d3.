const svg = d3.select('svg');

const circle = svg.append('circle');

// extract width and height of window from the svg element
// + is shorthand to parse string to float
const height = +svg.attr('height');
const width = parseFloat(svg.attr('width'));
console.log(width, height);

// circle shape
circle.attr('r',height/2);
circle.attr('cx',width/2);
circle.attr('cy',height/2);
circle.attr('fill','yellow');
circle.attr('stroke','black');

const eyeSpacing = 100;
const eyeYOffset = 70;
const eyeRadius = 40;
const eyebrowWidth = 70;
const eyebrowHeight = 15;


const eyeGroup = svg.append('g');
  eyeGroup.attr('transform',`translate(${width/2},${height/2})`)

// left eye
const leftEye = eyeGroup.append('circle');
leftEye.attr('r',eyeRadius);
leftEye.attr('cx',-eyeSpacing);
leftEye.attr('cy', -eyeYOffset);

// left eye
const rightEye = eyeGroup.append('circle');
rightEye.attr('r',eyeRadius);
rightEye.attr('cx',+eyeSpacing);
rightEye.attr('cy', -eyeYOffset);

// eyebrows
const leftEyebrow = eyeGroup.append('rect')
  leftEyebrow.attr('x',-eyeSpacing - eyebrowWidth/2)
  leftEyebrow.attr('y',-eyeYOffset -70)
  leftEyebrow.attr('width',eyebrowWidth)
  leftEyebrow.attr('height',eyebrowHeight)

const rightEyebrow = eyeGroup.append('rect')
  rightEyebrow.attr('x',eyeSpacing - eyebrowWidth/2)
  rightEyebrow.attr('y',-eyeYOffset -70)
  rightEyebrow.attr('width',eyebrowWidth)
  rightEyebrow.attr('height',eyebrowHeight)
  // raise right eyebrow
  rightEyebrow.transition().duration(2000).attr('y',-eyeYOffset - 70 - 50)

// mouth
const g = svg.append('g');
  g.attr('transform',`translate(${width/2},${height/2})`);

const mouth = g.append('path');
mouth.attr('d',d3.arc()({
  innerRadius: 120,
  outerRadius: 140,
  startAngle: Math.PI/2,
  endAngle: Math.PI * 3/2
}));



