import Link from "next/link";
import CardHover from "@components/cardHover";
import ProjectCardStyleWrapper from "./ProjectCard.style";

const ProjectCard = ({
  thumb,
  title,
  price,
  saleEnd,
  coinIcon,
  projectDetails,
  socialLinks,
}) => {
  return (
    <ProjectCardStyleWrapper className="project_item_wrapper">
      <div className="project-info d-flex">
        <Link href="/projects-details-1" >
          <a>
            <img src={thumb.src} alt="project thumb" />
          </a>
        </Link>
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
        <div className="project-header d-flex justify-content-between align-items-center">
          <div className="heading-title">
            <h4>{saleEnd} Days Left</h4>
          </div>
          <div className="project-icon">
            <img src={coinIcon.src} alt="coin icon" />
          </div>
        </div>
        <ul className="project-listing">
          {projectDetails?.map((item, i) => (
            <li key={i}>
              {item.title} <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="social-links">
          {socialLinks?.map((profile, i) => (
            <Link key={i} href={profile.url}>
              <a><img src={profile.icon.src} alt="social icon" /></a>
            </Link>
          ))}
        </div>
      </div>

      <CardHover />
    </ProjectCardStyleWrapper>
  );
};

export default ProjectCard;
