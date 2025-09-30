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
    { text: "Senior Frontend Developer & UI Design Lead", icon: <Briefcase className="h-full w-full" /> },
    { text: "@Simplamo", icon: <Building2 className="h-full w-full" /> },
    { text: "Founder @Quaric", icon: <Crown className="h-full w-full" /> },
    { text: "New Delhi, India", icon: <MapPin className="h-full w-full" /> },
    { text: "+84 777 888 148", icon: <Phone className="h-full w-full" /> },
    { text: "dai@chanhdai.com", icon: <Mail className="h-full w-full" /> },
    { text: "chanhdai.com", icon: <Globe className="h-full w-full" /> },
    { text: "he/him", icon: <Github className="h-full w-full" /> },
  ];

  return (
    <div>
      <div className="flex flex-col p-4 gap-2">
        {personalInfo.map((item) => (
          <div key={item.text} className="text-sm flex items-center gap-2">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-foreground/20 bg-foreground/10 p-1 text-foreground/70 ring-1 ring-foreground/5 ring-offset-1 ring-offset-background" >{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
