import Link from "next/link";
import ProgressBar from "@components/progressBar";
import CountDown from "@components/countDown";
import Button from "src/components/button";

import projectIcon from "@assets/images/project/ninga-image.png"
import coinIcon from "@assets/images/project/icon-2.png"
import socialData from "@assets/data/social/dataV1"

import ProjectInfoStyleWrapper from "./ProjectInfo.style";

const ProjectInfo = () => {
  const settings = {
    showTitle: true,
    size: 30,
    labelSize: 20,
    direction: "right",
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "D",
    hourTitle: "H",
    minuteTitle: "M",
    secondTitle: "S",
    id: "countdownwrap",
  };

  return (
    <ProjectInfoStyleWrapper className="live_project_wrapper">
      <div className="game-price-item">
        <div className="game-price-inner">
          <div className="total-price">
            <div className="price-inner d-flex">
              <div className="image-icon">
                <img src={projectIcon.src} alt="icon" />
              </div>
              <div className="price-details">
                <h3>
                  <a>The Wasted Lands</a>
                </h3>
                <div className="dsc">PRICE (DDO) = 0.13 BUSD</div>
              </div>
            </div>
            <div className="all-raise">
              Total Raise 75,999.70 BUSD ( 86% )
            </div>
          </div>
          <div className="allocation-max text-center">
            <img src={coinIcon.src} alt="icon" />
            <div className="allocation">
              Allocation: 500 BUSD Max
            </div>
          </div>
          <div className="targeted-raise">
            <div className="seles-end-text">Sale End In</div>
            <CountDown {...settings} count={1807569} />
            <div className="targeted-raise-amount">
              Targeted Raise 100,000 BUSD
            </div>
          </div>
        </div>
        <div className="progress-inner">
          <ProgressBar progress="83%" />
        </div>

        <div className="project_card_footer">
          <Button sm>
            Claim Token
          </Button>
          <div className="participants">Participants 4017/5000</div>
          <div className="social_links">
            {socialData?.map((profile, i) => (
              <Link key={i} href={profile.url}>
                <a><img src={profile.icon.src} alt="icon" /></a>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </ProjectInfoStyleWrapper>
  );
};

export default ProjectInfo;
