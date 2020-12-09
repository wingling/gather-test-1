import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import TeamMember from "components/teamMember";

const OurTeam = ({ contentModuleId }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLayoutTeam {
        edges {
          node {
            id
            heading
            description {
              description
            }
            teamMembers {
              id
              alt {
                alt
              }
              name
              title {
                title
              }
              image {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const content = data.allContentfulLayoutTeam.edges.find(
    edge => edge.node.id === contentModuleId
  );

  return (
    <section id="ourTeam" className="our-team section bg-gray">
      <div className="container mx-auto">
        <h2
          className="section__title text-center mb-16"
          data-sal="fade"
          data-sal-easing="ease-in-cubic"
        >
          {content.node.heading}
        </h2>
        {content.node.teamMembers.length > 0 && (
          <div className="ourTeam__items">
            {content.node.teamMembers.map(member => (
              <TeamMember member={member} key={member.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

OurTeam.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default OurTeam;
