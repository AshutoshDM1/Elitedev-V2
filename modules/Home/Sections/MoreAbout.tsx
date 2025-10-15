const MoreAbout = () => {
  return (
    <div className="px-4 " >
      <h2 className="text-2xl font-semibold " >About</h2>
    </div>
  );
};

export const AboutContent = () => {
  return (
    <div className="p-4 " >
      <div className="space-y-4">
        <p className="text-sm leading-relaxed">
          Hello, World! I am Chánh Đại - a Design Engineer passionate about creating high-performance, user-centric software solutions with intuitive and engaging designs.
        </p>
        <p className="text-sm leading-relaxed">
          With 5+ years of experience, I specialize in building high-quality web and mobile applications using Next.js, React, TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into reality through personal projects.
        </p>
        <p className="text-sm leading-relaxed">
          One of my key projects, <strong>Zabark</strong>, launched in 2022, enhances the Zalo experience on PC and Web, surpassing 88k+ downloads on <span className="underline">SourceForge</span> and reaching 20k+ active users on the Chrome Web Store with a 4.9★ out of 5★ rating.
        </p>
        <p className="text-sm leading-relaxed">
          I'm also the creator of <strong>React Wheel Picker</strong> – 105-like wheel picker for React with smooth inertia scrolling and infinite loop support. It has earned 4k+ weekly downloads on npm and was selected for <strong>▲Vercel OSS Program</strong> summer 2025 cohort.
        </p>
        <p className="text-sm leading-relaxed">
          Let's connect and collaborate!
        </p>
      </div>
    </div>
  );
};

export default MoreAbout;