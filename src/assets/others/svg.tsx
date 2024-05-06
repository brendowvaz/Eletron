import * as React from 'react';
import Svg, {Defs, G, Path, Polygon, Rect} from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

export const CapacitorIcon: React.FC<IconProps> = ({width, height, color}) => (
  <Svg
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet">
    <Path
      d="M15,34.06a1,1,0,0,1-1-1V3.15a1,1,0,1,1,2,0V33.06A1,1,0,0,1,15,34.06Z"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <Path
      d="M21,34.06a1,1,0,0,1-1-1V3.15a1,1,0,1,1,2,0V33.06A1,1,0,0,1,21,34.06Z"
      className="clr-i-outline clr-i-outline-path-2"
    />
    <Path
      d="M14.46,19H3a1,1,0,0,1,0-2H14.46a1,1,0,0,1,0,2Z"
      className="clr-i-outline clr-i-outline-path-3"
    />
    <Path
      d="M33,19H21.54a1,1,0,0,1,0-2H33a1,1,0,0,1,0,2Z"
      className="clr-i-outline clr-i-outline-path-4"
    />
    <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </Svg>
);

export const ResistorIcon: React.FC<IconProps> = ({width, height, color}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width}
    height={height}
    fill={color}
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'optimizeQuality',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }}
    viewBox="0 0 216.03 147.07"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <Defs></Defs>
    <G id="Camada_x0020_1">
      <Path
        className="fil0"
        d="M133.24 146.03c5.73,-12.29 21.89,-82.62 25.77,-85.78l15.82 34.8c11.44,-0.01 35.97,3.26 39.91,-6.04 7.02,-16.59 -16.53,-13.42 -27.28,-13.57l-33.74 -70.77 -21.79 74.33 -25.81 -78.99 -22.53 79.66c-7.92,-10.46 -16.55,-61.02 -24.77,-72.62 -5.35,10.41 -10.7,24.68 -15.75,36.15 -3.63,8.23 -12.13,30.61 -16.4,35.53 -4.64,0.17 -17.16,-0.14 -20.72,1.11 -5.56,1.94 -7.75,9.28 -4.31,14.52 3.88,5.92 28.81,4.35 37.42,3.17l17.06 -35.64c3.47,4.94 17.35,52.6 21.25,64.77 1.8,5.61 4.68,16.63 7.51,20.43 1.4,-8.38 20.15,-75.53 22.94,-80.05l25.41 79.01z"
      />
    </G>
  </Svg>
);

export const ParallelResistorIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width}
    height={height}
    fill={color}
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'optimizeQuality',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }}
    viewBox="0 0 105.02 275.65"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <Defs></Defs>
    <G id="Camada_x0020_1">
      <G id="_1985913819664">
        <Path
          className="fil0"
          d="M0.73 93.47c8.62,4.02 57.96,15.35 60.17,18.08l-24.41 11.1c0,8.02 -2.29,25.23 4.24,28 11.64,4.93 9.42,-11.6 9.52,-19.14l49.65 -23.67 -52.14 -15.28 55.41 -18.1 -55.88 -15.81c7.34,-5.55 42.8,-11.61 50.94,-17.38 -7.3,-3.76 -17.32,-7.5 -25.36,-11.05 -5.78,-2.55 -21.47,-8.51 -24.93,-11.51 -0.12,-3.25 0.1,-12.04 -0.78,-14.53 -1.36,-3.9 -6.51,-5.44 -10.19,-3.03 -4.15,2.72 -3.05,20.21 -2.22,26.25l25 11.97c-3.46,2.43 -36.9,12.17 -45.43,14.91 -3.94,1.26 -11.67,3.28 -14.33,5.27 5.88,0.98 52.99,14.14 56.16,16.09l-55.43 17.82z"
        />
        <Path
          className="fil0"
          d="M2.57 217.58c8.62,4.02 57.96,15.35 60.17,18.08l-24.41 11.1c0,8.02 -2.29,25.23 4.24,28 11.64,4.93 9.42,-11.6 9.52,-19.14l49.65 -23.67 -52.14 -15.28 55.41 -18.1 -55.88 -15.81c7.34,-5.55 42.8,-11.61 50.94,-17.38 -7.3,-3.76 -17.32,-7.5 -25.36,-11.05 -5.78,-2.55 -21.47,-8.51 -24.93,-11.51 -0.12,-3.25 0.1,-12.04 -0.78,-14.53 -1.36,-3.9 -6.51,-5.44 -10.19,-3.03 -4.15,2.72 -3.05,20.21 -2.22,26.25l25 11.97c-3.46,2.43 -36.9,12.17 -45.43,14.91 -3.94,1.26 -11.67,3.28 -14.33,5.27 5.88,0.98 52.99,14.14 56.16,16.09l-55.43 17.82z"
        />
      </G>
    </G>
  </Svg>
);

export const SeriesResistorIcon: React.FC<IconProps> = ({
  width,
  height,
  color,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={width}
    height={height}
    fill={color}
    style={{
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'optimizeQuality',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }}
    viewBox="0 0 216.03 296.64"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <Defs></Defs>
    <G id="Camada_x0020_1">
      <Path
        className="fil0"
        d="M133.24 146.03c5.73,-12.29 21.89,-82.61 25.77,-85.78l15.82 34.8c11.44,-0.01 35.97,3.26 39.91,-6.04 7.02,-16.59 -16.53,-13.42 -27.28,-13.57l-33.74 -70.77 -21.79 74.32 -25.81 -78.99 -22.53 79.66c-7.92,-10.46 -16.55,-61.02 -24.77,-72.62 -5.35,10.41 -10.7,24.68 -15.75,36.15 -3.63,8.23 -12.13,30.61 -16.4,35.53 -4.64,0.17 -17.16,-0.14 -20.72,1.11 -5.56,1.94 -7.75,9.28 -4.31,14.52 3.88,5.92 28.81,4.35 37.42,3.17l17.06 -35.64c3.47,4.94 17.35,52.59 21.25,64.77 1.8,5.61 4.68,16.63 7.51,20.43 1.4,-8.38 20.15,-75.53 22.94,-80.05l25.41 79.01z"
      />
      <Path
        className="fil0"
        d="M133.24 295.6c5.73,-12.29 21.89,-82.61 25.77,-85.78l15.82 34.8c11.44,-0.01 35.97,3.26 39.91,-6.04 7.02,-16.59 -16.53,-13.42 -27.28,-13.57l-33.74 -70.77 -21.79 74.32 -25.81 -78.99 -22.53 79.66c-7.92,-10.46 -16.55,-61.02 -24.77,-72.62 -5.35,10.41 -10.7,24.68 -15.75,36.15 -3.63,8.23 -12.13,30.61 -16.4,35.53 -4.64,0.17 -17.16,-0.14 -20.72,1.11 -5.56,1.94 -7.75,9.28 -4.31,14.52 3.88,5.92 28.81,4.35 37.42,3.17l17.06 -35.64c3.47,4.94 17.35,52.59 21.25,64.77 1.8,5.61 4.68,16.63 7.51,20.43 1.4,-8.38 20.15,-75.53 22.94,-80.05l25.41 79.01z"
      />
    </G>
  </Svg>
);
