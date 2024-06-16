import { createContext, useContext } from "react";

// Create a context
const ContactInfoContext = createContext();

// Create a provider component
export const ContactInfoProvider = ({ children }) => {
  const phoneNumber = "123-456-7890";
  const emailAddress = "example@example.com";
  const address = "Mumbai, Maharashtra, India";
  const instaLink = "https://www.instagram.com/jas_officials/";

  return (
    <ContactInfoContext.Provider value={{ phoneNumber, emailAddress, address }}>
      {children}
    </ContactInfoContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useContactInfo = () => useContext(ContactInfoContext);
