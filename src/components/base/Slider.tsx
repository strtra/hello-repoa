import React, { useEffect, useState, useRef } from 'react';
import {
  createTheme,
  ThemeProvider,
  Box,
  Slider as MuiSlider,
  SliderProps,
} from '@mui/material';

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        root: {
          width: '100%',
          maxWidth: '725px',
          color: '#1B1B1B',

          '& .MuiSlider-thumb': {
            border: '6px solid #FFD05D',
            width: '25px',
            height: '25px',
          },
        },
        mark: {
          display: 'none',
        },
        marked: {
          height: '8px',
        },
        markLabel: {
          color: '#FFFFFF',
          opacity: '50%',
          fontFamily: 'Ubuntu',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '24px',
          letterSpacing: '0.15px',
          textAlign: 'left',
        },
        thumb: {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: 'none',
          },
          '&.Mui-active': {
            boxShadow: 'none',
          },
        },
        track: {
          background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
          border: 'none',
        },
        rail: {
          background: '#FFFFFF',
          opacity: '30%',
        },
      },
    },
  },
});

const defaultMarks = [
  { label: '3', value: 1 },
  { label: '6', value: 2 },
  { label: '9', value: 3 },
  { label: '12', value: 4 },
  { label: '15', value: 5 },
  { label: '50', value: 6.3 },
];

const marksValueMapping: { [index: number]: number } = {
  1: 6,
  2: 12,
  3: 18,
  4: 24,
  5: 30,
  6.3: 100,
};

type Props = {
  onChange: (val: number) => void;
} & Omit<SliderProps, 'onChange'>;

export default function Slider(props: Props) {
  const { marks = defaultMarks, onChange, ...restProps } = props;
  const [thumbIndex, setThumbIndex] = useState(0);
  const sliderRef = useRef<any>();

  const onSliderChange = (e: Event, val: number | number[]) => {
    if (typeof val === 'number') {
      setThumbIndex(val);
      onChange(marksValueMapping[val]);
    }
  };

  // customize markLabelActive style
  useEffect(() => {
    const getCurIndex = defaultMarks.findIndex(
      (item) => item.value === thumbIndex
    );
    const elements = sliderRef.current
      .children as HTMLCollectionOf<HTMLElement>;
    const nodes = Array.from(elements).filter((el) => el.classList.contains('MuiSlider-markLabel'));

    for (let i = 0; i < nodes.length; i += 1) {
      const el = nodes[i] as HTMLElement;
      el.style.opacity = i === getCurIndex ? '100%' : '50%';

      if (getCurIndex === -1) {
        const initEl = nodes[0] as HTMLElement;
        initEl.style.opacity = '100%';
      }
    }
  }, [thumbIndex]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: '0 13px' }}>
        <MuiSlider
          {...restProps}
          marks={marks}
          step={null}
          min={1}
          max={6.3}
          onChange={onSliderChange}
          ref={sliderRef}
          defaultValue={5}
        />
      </Box>
    </ThemeProvider>
  );
}
