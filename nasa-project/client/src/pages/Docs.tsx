import styled from "styled-components";
import { SectionTitle } from "../components/componentStyles";
import COLORS from "../assets/Theme";


function Docs() {
  return (
    <DocContainer>
      <SectionTitle className="mt-64">API Documentation</SectionTitle>
          <SubSection>
            <SectionSubTitle>How to call our API</SectionSubTitle>
            <p>Our API retrieves data based off of <b>Latitude and Longitude</b> and <b>some more other stuff</b></p>
          <SubSubSection>
            <p>Basic API Call</p>
            <label htmlFor="example1">Example:</label>
            <Input name="example1" type='text' placeholder="https://ITWS4500-S23-CosmicComets/node/whatever"/>
            <Button className='copy'>Copy</Button>
          </SubSubSection>
          <p>Parameters: <b>Latitude, Longitude (required)</b>, other stuff (not required)</p>
          <ul>

          </ul>
          <SubSubSection>
            <p>Example API Call</p>
            <label htmlFor="example2">Example:</label>
            <Input name="example2" type='text' placeholder="https://ITWS4500-S23-CosmicComets/node/whatever/lat=12.34&lon=12.34&otherstuff=none"/>
            <Button className='copy'>Copy</Button>
          </SubSubSection>
          <p>Our API Returns data organized in <b>JSON format</b></p>
          <SubSubSection>
            <p>Example API Response</p>
            <b>
              &#123; <br/>
              &nbsp; &nbsp;"lat":"12.34", <br/>
              &nbsp; &nbsp;"lon":"12.34" <br/>
              &#125;
            </b>
          </SubSubSection>
          </SubSection>          
    </DocContainer>
  )
}

export default Docs;

const DocContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  background-color: #4E5055;
`

const SectionSubTitle = styled.h2`
  width: calc(100% - 2rem);
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  padding: 0;
  text-align: center;
  color: black;
`;

const SubSection = styled.div`
  width: 90%;
  border-radius: 1.5rem;
  background-color: #FFFDED;
  transition: all 0.25s ease-in-out;
  padding: 4rem;
`;

const SubSubSection = styled.div`
  width: 90%;
  border-radius: 1.5rem;
  background-color: white;
  transition: all 0.25s ease-in-out;
  padding: 2rem;
  margin: 1rem;
`

const Button = styled.button`
  width: fit-content;
  height: fit-content;

  margin: 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: white;
  background-color: #121212;
  //border: 2px solid #d747b3;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #d747b3;
  }
`;

const Input = styled.input`
  height: 100%;
  width: 70%;
  border-radius: 0.5rem;
  background-color: white;
  padding-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
  color: black;
  text-align: left;
  transition: all 0.2s ease-in-out;
  border: black solid 1px;
  margin: 10px;

  &:hover {
    background-color: #fbeef8;
  }

  &:focus {
    background-color: #fbeef8;
  }
`;
