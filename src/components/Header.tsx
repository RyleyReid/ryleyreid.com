import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  color: white;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #ffffff;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const ContactItem = styled.a`
  color: #a0a0a0;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Name>Ryley Reid</Name>
      <ContactInfo>
        <ContactItem href="mailto:ryleycreid@gmail.com">ryleycreid@gmail.com</ContactItem>
        <ContactItem href="tel:289-355-8106">289-355-8106</ContactItem>
        <ContactItem href="https://www.linkedin.com/in/ryley-reid-277049138/" target="_blank" rel="noopener noreferrer">LinkedIn</ContactItem>
        <ContactItem href="https://github.com/RyleyReid" target="_blank" rel="noopener noreferrer">GitHub</ContactItem>
        <ContactItem href="https://www.instagram.com/ryley_c_reid/" target="_blank" rel="noopener noreferrer">GitHub</ContactItem>
        <ContactItem>Etobicoke, Toronto, ON</ContactItem>
      </ContactInfo>
    </HeaderContainer>
  );
};

export default Header; 