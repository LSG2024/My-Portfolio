/* eslint-disable @next/next/no-img-element */
import './ProjectCard.css';
import PropTypes from 'prop-types';

const ProjectCard = ({ logo, name, description, link }) => {
  return (

    <div className="project-card">
      <div>
      <img src={logo} alt={`${name} Logo`} className="project-card-logo" />
      <h2 className="project-name">{name}</h2>
      </div>
      <div>
      <p className="project-description">{description}</p>
      <a href={link} className="project-link">Visit Website</a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
