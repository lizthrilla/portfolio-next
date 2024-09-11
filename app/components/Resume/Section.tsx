
interface SectionWrapperProps {
    children: React.ReactNode
  }
  
export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
    return (
      <div className="grid md:grid-cols-10 md:gap-5 text-default mb-5">
        {children}
      </div>
    );
};

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="text-2xl text-center md:text-left md:col-span-1 md:col-start-2 mb-5">
      <h1 className="underline decoration-blue decoration-solid uppercase underline-offset-8">
        {title}
      </h1>
    </div>
  );
}