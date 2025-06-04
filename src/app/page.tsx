import Header from '@/components/Header';
import SolarSystemLoader from '@/components/SolarSystemLoader';

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      <Header />
      <main className="flex-grow pt-16"> {/* pt-16 to offset fixed header of h-16 */}
        <SolarSystemLoader />
      </main>
    </div>
  );
}
