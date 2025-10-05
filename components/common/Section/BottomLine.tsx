const BottomLine = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <div className={`border-b border-edge px-2 ${className}`}>{children}</div>;
};

export default BottomLine;
