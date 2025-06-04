"use client";

import dynamic from 'next/dynamic';
import { LoaderCircle } from 'lucide-react';

const SolarSystem = dynamic(() => import('@/components/SolarSystem'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center h-full">
      <LoaderCircle className="w-12 h-12 animate-spin text-accent mb-4" />
      <p className="text-lg text-foreground">Loading 3D Solar System...</p>
    </div>
  ),
});

export default function SolarSystemLoader() {
  return <SolarSystem />;
}
