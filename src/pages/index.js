import React from "react";
import Layout from "components/layout";
import SEO from "components/seo";
import Embed from "components/embed";
import { useStaticQuery, graphql } from "gatsby";

import Section from "sections/section";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulLayout(slug: { eq: "/" }) {
        id
        title
        description
        contentful_id
        menu {
          name
          type
          menuItems {
            id
            title
            url
          }
        }
        contentModule {
          ... on Node {
            id
          }
        }
      }
    }
  `);
  const menus = data.contentfulLayout.menu;

  const contentModule = data.contentfulLayout.contentModule;

  return (
    <Layout menus={menus}>
      <SEO title={data.contentfulLayout.title} />
      {contentModule.length > 0 &&
        contentModule.map(content => (
          <Section
            contentModuleId={content.id}
            type={content.__typename}
            key={content.id}
          />
        ))}
      <Embed />
    </Layout>
  );
};

export default Home;
