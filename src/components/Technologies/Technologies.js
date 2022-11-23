import React from 'react';
import { DiFirebase, DiReact, DiPython } from 'react-icons/di';
import { VscCircuitBoard } from 'react-icons/vsc';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with various technologies in web development, and also am very interested
      in Machine Learning!
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
          <h3 style={{fontStyle: "italic"}}>Experience with...</h3>
            React.js <br />
            Bootstrap <br />
            MaterialUI <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="5rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <h3 style={{fontStyle: "italic"}}>Learning...</h3>
            AWS Cloud Computing  <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="5rem"/>
        <ListContainer>
          <ListTitle>Machine Learning</ListTitle>
          <ListParagraph>
          <h3 style={{fontStyle: "italic"}}>Experience with...</h3>
            PyTorch <br />
            Speech Recognition <br />
            HuggingFace <br />
            Data Science
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <VscCircuitBoard size="5rem"/>
        <ListContainer>
          <ListTitle>Engineering</ListTitle>
          <ListParagraph>
          <h3 style={{fontStyle: "italic"}}>Experience with...</h3>
            Soldering <br />
            KiCAD Design <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <VscCircuitBoard size="5rem"/>
        <ListContainer>
          <ListTitle>Coding Languages</ListTitle>
          <ListParagraph>
            Python, JavaScript
            Java <br />
            C++, C, MATLAB <br />
            Assembly x86-64 <br />
            HTML/CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
