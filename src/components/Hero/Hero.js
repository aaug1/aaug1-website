import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! Welcome to <br />
        Aidan Aug's Personal Website
      </SectionTitle>
      <SectionText>
      I am a senior at Johns Hopkins University, majoring in Computer Science and Biomedical Engineering
      </SectionText>
      <Button onClick={() => window.location = "https://drive.google.com/file/d/1Lrir-Y9JCRFLL522e_XOg_6jal0Ke-Cl/view?usp=sharing"}> CV </Button>
    </LeftSection>

  </Section>
);

export default Hero;