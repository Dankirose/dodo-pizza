
import { Router } from "react-router-dom";
import { Container } from "../../layouts/Container/Container";
import { Layout } from "../../layouts/Layout/Layout";
import { SectionBeverages } from "./SectionBeverages/SectionBeverages";
import { SectionCombo } from "./SectionCombo/SectionCombo";
import { SectionDeserts } from "./SectionDeserts/SectionDeserts";
import { SectionPizza } from "./SectionPizza/SectionPizza";
import { SectionPopular } from "./SectionPopular/SectionPopular";
import { SectionSnacks } from "./SectionSnacks/SectionSnacks";

export const Home = () => {
  return (
    <Layout>
      <Container>
      <SectionPopular />
      <SectionPizza/>
      <SectionCombo/>
      <SectionSnacks/>
      <SectionDeserts/>
      <SectionBeverages/>
      </Container>;
    </Layout>
    
  )
};
