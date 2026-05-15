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
} from "lucide-react";

const About = () => {
  const personalInfo = [
    { text: "Ashutosh Tiwari", icon: <User className="h-full w-full" /> },
    {
      text: "Full Stack Developer & Frontend/Design Engg. At EdgeNroot",
      icon: <Briefcase className="h-full w-full" />,
    },
    { text: "@Codegen", icon: <Building2 className="h-full w-full" /> },
    { text: "Founder @MangaHaven", icon: <Crown className="h-full w-full" /> },
    { text: "New Delhi, India", icon: <MapPin className="h-full w-full" /> },
    { text: "+91 8377056538", icon: <Phone className="h-full w-full" /> },
    { text: "ashutosh0tiwari.com", icon: <Mail className="h-full w-full" /> },
    { text: "elitedev.tech", icon: <Globe className="h-full w-full" /> },
    { text: "he/him", icon: <Github className="h-full w-full" /> },
  ];

  return (
    <BottomLine>
      <Section>
        <div className="flex flex-col p-4 gap-2">
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
