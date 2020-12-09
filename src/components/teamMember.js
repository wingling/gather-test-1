import React from "react";
import PropTypes from "prop-types";

const TeamMember = ({ member }) => (
  <div
    className={`team__member`}
    data-sal="fade"
    data-sal-easing="ease-in-cubic"
    data-sal-duration="400"
  >
    <div className="team__member-content">
      <div className="team__member-photo-box">
        <Img
          fluid={member.image.fluid}
          alt={member.alt.alt}
          className="team__member-photo"
        />
      </div>
      <h3 className="team__member-name">{member.name}</h3>
      <p>{member.title.title}</p>
    </div>
  </div>
);

TeamMember.propTypes = {
  member: PropTypes.object.isRequired,
};

export default TeamMember;
