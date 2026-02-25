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
  LocationContainer,
} from './styles';

const ICON_BASE = '/assets/icons';

const getIconSrc = (iconName: string) => {
  const map: Record<string, string> = {
    GithubLogo: `${ICON_BASE}/GithubLogo.png`,
    linkedInLogo: `${ICON_BASE}/linkedInLogo.png`,
    InstagramLogo: `${ICON_BASE}/InstagramLogo.png`,
    download: `${ICON_BASE}/download.png`,
    MapleLeaf: `${ICON_BASE}/mapleleaf.png`,
  };
  return map[iconName] || '';
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
