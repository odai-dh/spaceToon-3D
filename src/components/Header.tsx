import { Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-lg h-16 flex items-center fixed top-0 left-0 right-0 z-50">
      <Rocket className="h-8 w-8 mr-3 text-accent" />
      <h1 className="text-2xl font-headline">Solar System Explorer</h1>
    </header>
  );
};

export default Header;
