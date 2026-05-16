import BottomLine from "@/components/common/Section/BottomLine";
import Section from "@/components/common/Section/Section";

import {
  Briefcase,
  Building2,
  Crown,
  Globe,
  MapPin,
  Phone,
  Mail,
  User,
  Github,
  Twitter,
} from "lucide-react";

const About = () => {
  const personalInfo = [
    { text: "Ashutosh Tiwari", icon: <User className="h-full w-full" /> },
    {
      text: "Full Stack Developer",
      icon: <Briefcase className="h-full w-full" />,
    },
    { text: "New Delhi, India", icon: <MapPin className="h-full w-full" /> },
    { text: "+91 8377056538", icon: <Phone className="h-full w-full" /> },
    { text: "ashutosh0tiwari.gmail.com", icon: <Mail className="h-full w-full" /> },
    { text: "he/him", icon: <Github className="h-full w-full" /> },
  ];

  return (
    <BottomLine>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-2">
          {personalInfo.map((item) => (
            <div key={item.text} className="text-sm flex items-center gap-2">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-foreground/20 bg-foreground/10 p-1 text-foreground/70 ring-1 ring-foreground/5 ring-offset-1 ring-offset-background">
                {item.icon}
              </span>
              {item.text}
            </div>
          ))}
        </div>
      </Section>
    </BottomLine>
  );
};

export default About;
