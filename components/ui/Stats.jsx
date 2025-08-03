import React, { useState, useEffect, useRef } from 'react';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    members: 0
  });
  
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 'years',
      title: 'Years in Service',
      target: 11,
      suffix: '+'
    },
    {
      id: 'projects',
      title: 'Projects Completed',
      target: 17,
      suffix: '+'
    },
    {
      id: 'members',
      title: 'Active Members',
      target: 36,
      suffix: '+'
    }
  ];

  // Simple CountUp animation function
  const animateValue = (target, key, duration = 2000) => {
    const startTime = performance.now();
    const startValue = 0;
    
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
      
      setCounters(prev => ({
        ...prev,
        [key]: currentValue
      }));
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  // Intersection Observer for triggering animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start animations with slight delays
          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateValue(stat.target, stat.id, 2500);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div 
      ref={sectionRef}
      className="py-12 md:py-16 px-4" 
      style={{ backgroundColor: '#BDB3A3' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Stats Grid - Single Row of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.6s ease-out',
                transitionDelay: `${index * 0.2}s`
              }}
            >
              {/* Counter */}
              <div className="mb-3">
                <span 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold block leading-none"
                  style={{ 
                    fontFamily: "var(--font-aldrich)",
                    color: '#0E141C'
                  }}
                >
                  {counters[stat.id] || 0}
                  <span style={{ color: '#314B6E' }}>{stat.suffix}</span>
                </span>
              </div>

              {/* Title */}
              <h3 
                className="text-sm md:text-base lg:text-lg font-light tracking-[0.2em] uppercase"
                style={{ 
                  fontFamily: "var(--font-cantata)",
                  color: '#314B6E'
                }}
              >
                {stat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;