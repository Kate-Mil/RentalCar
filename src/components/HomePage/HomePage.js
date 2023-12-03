import {
  MainContainer,
  Title,
  Section,
  Heading2,
  StyledNavLink,
  PartnerList,
} from "./HomePage.styled";

export const HomePage = () => {
  return (
    <MainContainer>
      <Title>Welcome to the car rental website</Title>

      <Section>
        <Heading2>Our Services</Heading2>
        <p>
          We offer a wide range of rental cars, including economy class, comfort
          class, SUVs, and many more.
        </p>
        <p>
          Our cars are always serviced and checked to ensure your comfort and
          safety during your travels.
        </p>
      </Section>

      <Section>
        <Heading2>How to Order</Heading2>
        <p>
          To order a car, contact our manager by phone or{" "}
          <StyledNavLink to="/catalog">go to the catalog</StyledNavLink>.
        </p>
        <p>
          We guarantee a simple and convenient booking process, as well as
          affordable rates for different car classes.
        </p>
      </Section>

      <Section>
        <Heading2>Our Partners</Heading2>
        <PartnerList>
          <li>
            <img src="" alt="1partner" />
            <p>1</p>
          </li>
          <li>
            <img src="" alt="2partner" />
            <p>2</p>
          </li>
          <li>
            <img src="" alt="3partner" />
            <p>3</p>
          </li>
          <li>
            <img src="" alt="4partner" />
            <p>4</p>
          </li>
        </PartnerList>
      </Section>
    </MainContainer>
  );
};
