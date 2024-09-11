interface EntryWrapperProps {
    children: React.ReactNode
  }
  
  export const EntryWrapper: React.FC<EntryWrapperProps> = ({ children }) => {
    return (
      <div className="md:col-span-8 md:col-start-4 md:col-end-9">
        {children}
      </div>
    );
  };

interface EntryHeaderProps {
    children: React.ReactNode;
  }
  
  export const EntryHeader: React.FC<EntryHeaderProps> = ({ children }) => {
    return (
      <div className="">
          {children}
      </div>
    );
  }
  
  export interface EntryTitleProps {
    company: string;
    dates: string;
    title: string;
    url?: string;
  }
  
  export const EntryTitle: React.FC<EntryTitleProps> = ({company, dates, title, url}) => {
    return (
      <div className="mb-2">
        <h3 className="text-2xl">
          <a href={url} target="_blank" className="text-blue font-medium">
            {company}
          </a>
        </h3>
        <h4 className="text-l text-soft">{title}</h4>
        <h4 className="text-soft">{dates}</h4>
      </div>
  
    )
  }
  
  export interface EntryBodyProps {
    children: React.ReactNode
  }
  
  export const EntryBody: React.FC<EntryBodyProps> = ({children}) => {
    return (
      <div className="text-base mb-5">
        {children}
      </div>
  
    )
  }