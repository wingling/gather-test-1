import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// import validation from "utils/validation";

import { useHubspotForm } from "@aaronhayes/react-use-hubspot-form";

const Contact = ({ contentModuleId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLayoutContact {
        edges {
          node {
            id
            heading
            description {
              description
            }
            image {
              fluid(quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `);

  const content = data.allContentfulLayoutContact.edges.find(
    edge => edge.node.id === contentModuleId
  );

  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "8731754",
    formId: "ccfe3d1f-7956-4221-a5c0-56fbbdcf44ab",
    target: "#hs-contact-form",
  });

  useEffect(() => {
    // validation.init();
  }, []);

  return (
    <section id="contact" className="contact bg-gray">
      <div className="container contact__content mx-auto">
        <div>
          <h2
            className="section__title"
            data-sal="fade"
            data-sal-easing="ease-in-cubic"
          >
            {content.node.heading}
          </h2>
          <p
            className="mb-4 w-full md:w-3/4"
            data-sal="slide-up"
            data-sal-easing="ease-in-cubic"
          >
            {content.node.description.description}
          </p>
        </div>
        <div id="hs-contact-form" className="contact-form"></div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default Contact;
