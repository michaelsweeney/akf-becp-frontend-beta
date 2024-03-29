const start_x = 1300;
const start_y = 900;
const size = 2000;
const width = 150;
const slope = 1.5;
const scale = 0.95;

const global_x = 40;
const global_y = 491;
export const createMixedIcon = (fill: string) => {
  return `<g
      transform="translate(${global_x},${global_y}) scale(${0.1 * scale},${
    -0.1 * scale
  })"
      fill="${fill}"
      stroke="none"
    >
    <line x1="${start_x}" x2="${start_x + size}" y1="${start_y}" y2="${
    start_y + size * slope
  }" stroke="${fill}" stroke-width="${width}"/>

      <path
        d="M1812 4103 c-21 -31 -817 -1401 -840 -1446 -13 -25 -13 -31 0 -44 13
-12 56 -8 357 35 276 39 344 46 348 35 3 -7 -36 -196 -85 -421 -80 -358 -89
-409 -76 -422 11 -11 19 -12 32 -4 15 10 859 1241 919 1342 47 79 49 78 -367
23 -201 -27 -368 -47 -372 -45 -13 9 -10 28 78 492 47 249 83 459 80 467 -9
25 -53 18 -74 -12z"
      />
    
      <path
        d="M2926 2992 c-40 -158 -115 -336 -238 -564 -245 -457 -285 -558 -295
-753 -9 -182 37 -330 140 -456 73 -90 222 -192 311 -213 28 -7 27 -5 -23 55
-103 123 -137 214 -128 339 6 81 21 130 117 374 l63 160 23 -30 c38 -46 90
-154 109 -221 10 -35 21 -63 25 -63 9 0 76 144 102 220 35 103 60 251 61 374
l2 118 73 -77 c188 -199 292 -443 292 -688 0 -176 -64 -346 -184 -491 -62 -75
-76 -96 -59 -96 4 0 39 12 78 27 199 75 340 240 396 464 19 74 21 102 16 229
-14 360 -156 658 -492 1035 -105 118 -325 344 -346 355 -13 8 -20 -7 -43 -98z"
      />
    </g>`;
};
