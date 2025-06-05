import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  color: white;
  position: relative;
`;

export const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #ffffff;
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  align-items: center;
`;

export const ContactItem = styled.a`
  color: #a0a0a0;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;

  &:hover {
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

export const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  opacity: 0.8;
  transition: all 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const TextContact = styled.span`
  font-size: 0.9rem;
`;

export const DownloadButton = styled.a`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  background: #ffffff;
  color: #1a1a1a;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  &:hover {
    transform: translateY(-50%) translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: #f0f0f0;
  }

  @media (max-width: 768px) {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-top: 1rem;
    display: inline-flex;
  }
`;

export const DownloadIcon = styled(SocialIcon)`
  width: 24px;
  height: 24px;
  margin: 0;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
