import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const TeamMember = ({ member }) => (
  <div
    className="team-member"
    data-sal="fade"
    data-sal-easing="ease-in-cubic"
    data-sal-duration="400"
  >
    <div className="team-member__content">
      <div className="team-member__image-wrap">
        <Img
          fluid={member.image.fluid}
          alt={member.image.description}
          title={member.image.title}
          className="team-member__image"
        />
      </div>
      <h3 className="team-member__name">{member.name}</h3>
      <p className="team-member__title">{member.title.title}</p>
    </div>
  </div>
);

TeamMember.propTypes = {
  member: PropTypes.object.isRequired,
};

export default TeamMember;
