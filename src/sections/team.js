import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import TeamMember from "components/teamMember";

const Team = ({ contentModuleId }) => {
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
                fluid(quality: 100, maxWidth: 500, maxHeight: 500) {
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
    <section id="team" className="team container section mx-auto">
      <div className="mx-auto">
        <h2
          className="section__title text-center"
          data-sal="fade"
          data-sal-easing="ease-in-cubic"
        >
          {content.node.heading}
        </h2>
        <p
          className="text-center mb-6"
          data-sal="slide-up"
          data-sal-easing="ease-in-cubic"
          data-sal-delay="100"
        >
          {content.node.description.description}
        </p>

        {content.node.teamMembers.length > 0 && (
          <div className="team__items">
            {content.node.teamMembers.map(member => (
              <TeamMember member={member} key={member.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

Team.propTypes = {
  contentModuleId: PropTypes.string.isRequired,
};

export default Team;
