import Link from "next/link";
import { FiX } from "react-icons/fi";
import CardHover from "@components/cardHover";
import ProjectCardStyleWrapper from "./ProjectCard.style";

const ProjectCard = ({
  thumb,
  title,
  price,
  saleEnd,
  projectDetails,
  socialLinks,
  modalHandle,
}) => {
  return (
    <ProjectCardStyleWrapper>
      <div className="close_btn" onClick={() => modalHandle()}>
        <FiX />
      </div>
      <div className="project-info d-flex">
        <img src={thumb.src} alt="project thumb" />
        <div className="project-auother">
          <h4 className="mb-10">
            <Link href="/projects-details-1">
              <a>{title}</a>
            </Link>
          </h4>
          <div className="dsc">PRICE (GAC) = {price}</div>
        </div>
      </div>
      <div className="project-content">
        <div className="project-header">
          <div className="heading-title">
            <h4>{saleEnd} Days Left</h4>
          </div>
        </div>
        <ul className="project-listing">
          {projectDetails?.map((item, i) => (
            <li key={i}>
              {item.title} <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="social-share">
          <span>Social</span>

          <div className="social-links">
            {socialLinks?.map((profile, i) => (
              <Link key={i} href={profile.url}>
                <a>{profile.icon}</a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CardHover />
    </ProjectCardStyleWrapper>
  );
};

export default ProjectCard;
