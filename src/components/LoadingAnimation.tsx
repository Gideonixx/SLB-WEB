import { useEffect, useState } from 'react';

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-neutral-900 flex flex-col items-center justify-center z-50">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-wider animate-fade-in">
          SANDALU
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-12 tracking-widest animate-fade-in-delay">
          BUNGALOWS
        </p>

        <div className="w-64 md:w-80 h-1 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-neutral-500 mt-6 text-sm tracking-wider">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;
