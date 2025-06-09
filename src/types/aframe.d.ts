// src/types/aframe.d.ts
import type React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'a-scene': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        embedded?: boolean | string; 
        vrModeUi?: string; 
        keyboardShortcuts?: string; 
        renderer?: string;
        antialias?: boolean | string;
        [key: string]: any 
      }, HTMLElement>;
      'a-sky': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        color?: string; 
        src?: string; 
        radius?: number | string; 
        [key: string]: any 
      }, HTMLElement>;
      'a-entity': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        [key: string]: any 
      }, HTMLElement>;
      'a-camera': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        universalCamera?: string; 
        lookControls?: string | object; 
        wasdControls?: string | object; 
        [key: string]: any 
      }, HTMLElement>;
      'a-light': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        type?: string; 
        color?: string; 
        intensity?: number | string; 
        position?: string; 
        castShadow?: boolean | string;
        [key: string]: any 
      }, HTMLElement>;
      'a-sphere': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        position?: string; 
        radius?: number | string; 
        color?: string; 
        material?: string | object;
        shadow?: string | object;
        [key: string]: any 
      }, HTMLElement>;
      'a-box': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        position?: string; 
        width?: number | string; 
        height?: number | string; 
        depth?: number | string; 
        color?: string; 
        material?: string | object;
        shadow?: string | object;
        [key: string]: any 
      }, HTMLElement>;
      'a-ring': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        color?: string; 
        radiusInner?: number | string; 
        radiusOuter?: number | string; 
        rotation?: string; 
        material?: string | object;
        shadow?: string | object;
        [key: string]: any 
      }, HTMLElement>;
      'a-plane': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        position?: string;
        width?: number | string;
        height?: number | string;
        color?: string;
        rotation?: string;
        material?: string | object;
        shadow?: string | object;
        [key: string]: any;
      }, HTMLElement>;
      'a-animation': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 
        attribute?: string; 
        dur?: string | number; 
        to?: string; 
        from?: string;
        repeat?: string; 
        easing?: string; 
        loop?: boolean | string | number;
        [key: string]: any 
      }, HTMLElement>;
      'a-text': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        value?: string;
        color?: string;
        align?: string;
        width?: number | string;
        position?: string;
        scale?: string;
        rotation?: string;
        'look-at'?: string;
        visible?: boolean | string;
        [key: string]: any;
      }, HTMLElement>;
      // Add other A-Frame elements as needed
    }
  }
}
export {}; // This ensures the file is treated as a module.
