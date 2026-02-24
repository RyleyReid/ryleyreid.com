import displayPicture from '../../assets/display picture.JPG';
import { trueSyntaxSummary } from './content';
import {
  TrueSyntaxSection,
  TrueSyntaxMeta,
  TrueSyntaxBadge,
  TrueSyntaxTitle,
  TrueSyntaxSubTitle,
  TrueSyntaxHighlights,
  TrueSyntaxHighlight,
  HeroCard,
  AvatarWrapper,
  Avatar,
  HeroText,
  HeroTitle,
  HeroTagline,
} from './styles';

const TrueSyntax = () => {
  return (
    <TrueSyntaxSection>
      <TrueSyntaxMeta>
        <TrueSyntaxBadge>
          True Syntax · Consulting Studio
        </TrueSyntaxBadge>
        <TrueSyntaxTitle>{trueSyntaxSummary.title}</TrueSyntaxTitle>
        <TrueSyntaxSubTitle>
          {trueSyntaxSummary.role} · {trueSyntaxSummary.location} · {trueSyntaxSummary.dateRange}
        </TrueSyntaxSubTitle>
        <TrueSyntaxHighlights>
          {trueSyntaxSummary.highlights.map((item, index) => (
            <TrueSyntaxHighlight key={index}>{item}</TrueSyntaxHighlight>
          ))}
        </TrueSyntaxHighlights>
      </TrueSyntaxMeta>
      <HeroCard>
        <AvatarWrapper>
          <Avatar src={displayPicture} alt="Ryley Reid" />
        </AvatarWrapper>
        <HeroText>
          <HeroTitle>Building modern, scalable software</HeroTitle>
          <HeroTagline>
            Full-stack developer & founder helping teams ship clear, high-quality web experiences.
          </HeroTagline>
        </HeroText>
      </HeroCard>
    </TrueSyntaxSection>
  );
};

export default TrueSyntax;

