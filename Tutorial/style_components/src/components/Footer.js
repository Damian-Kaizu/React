import SocialIcon from "../components/SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" />
        <Flex>
          <ul>
            <li>Culpa minim elit id minim laboris in quis elit nulla qui.</li>
            <li>+1-543-123-4567</li>
            <li>example@huddler.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcon />
        </Flex>
        <p>&copy; 2022 Huddle.All Rights Reserved.</p>
      </Container>
    </StyledFooter>
  );
}
