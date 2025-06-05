import githubLogo from '../../assets/GithubLogo.png';
import linkedInLogo from '../../assets/linkedInLogo.png';
import instagramLogo from '../../assets/InstagramLogo.png';
import download from '../../assets/download.png';
import mapleLeaf from '../../assets/mapleleaf.png';
import { contactLinks, location, name, cvDownload } from './content';
import {
  HeaderContainer,
  Name,
  ContactInfo,
  ContactItem,
  SocialIcon,
  TextContact,
  DownloadButton,
  DownloadIcon,
  LocationContainer
} from './styles';

const getIconSrc = (iconName: string) => {
  switch (iconName) {
    case 'GithubLogo':
      return githubLogo;
    case 'linkedInLogo':
      return linkedInLogo;
    case 'InstagramLogo':
      return instagramLogo;
    case 'download':
      return download;
    case 'MapleLeaf':
      return mapleLeaf;
    default:
      return '';
  }
};

const Header = () => {
  return (
    <HeaderContainer>
      <Name>{name}</Name>
      <ContactInfo>
        {contactLinks.map((link, index) => (
          <ContactItem
            key={index}
            href={link.href}
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noopener noreferrer' : undefined}
          >
            {link.icon ? (
              <SocialIcon src={getIconSrc(link.icon)} alt={link.alt} />
            ) : (
              <TextContact>{link.text}</TextContact>
            )}
          </ContactItem>
        ))}
        <LocationContainer>
          <TextContact>{location.text}</TextContact>
          <ContactItem
            href={location.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={getIconSrc(location.icon)} alt={location.alt} />
          </ContactItem>
        </LocationContainer>
      </ContactInfo>
      <DownloadButton
        href={cvDownload.href}
        download={cvDownload.downloadName}
        target="_blank"
        rel="noopener noreferrer"
      >
        <DownloadIcon src={getIconSrc(cvDownload.icon)} alt={cvDownload.alt} />
      </DownloadButton>
    </HeaderContainer>
  );
};

export default Header;
