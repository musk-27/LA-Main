import { useState } from "react";
import Heading from "@/Components/Heading";
import Image from "next/image";
// Images
import HeadUnderline from "../public/Images/head-bottom.png";
import YellowHeader from "../public/Images/SVG/yellowHeader.svg";
import TeamcircleA from "../public/Images/Team-circle-A.png";
import MemberLineImg from "../public/Images/team-line.png";
import CloseIcon from "../public/Images/CloseIcon.png";
// Icons
import useFetch from "@/useFetch";

const OurTeam = () => {
  // ===== Strapi Data =========
  const { data } = useFetch("/teams?populate=*");
  const ImageApi = "https://strapi.littlearyans.in";
  console.log(data);

  // ===== Open Modal =========
  const [showTeamDetailBox, setShowTeamDetailBox] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const handleTeamMemberClick = (teamData) => {
    setSelectedTeamMember(teamData);
    setShowTeamDetailBox(true);
  };

  const handleClose = () => {
    setShowTeamDetailBox(false);
  };

  return (
    <div className="ourTeamPage">
      {/* Heading */}
      <Heading headTitle="Our Team" headBottomImg={YellowHeader} />

      {/* Team Description */}
      <div className="ourTeamDesc">
        <div className="row">
          <div className="col-md-6">
            <div className="ourTeamDescImg">
              <Image src={TeamcircleA} alt="" />
            </div>
          </div>
          <div className="col-md-6 d-flex justifu-content-center align-items-center">
            <div className="ourTeamDescText">
              <h3>
                Our leadership is a collective. We truly believe that none of us
                is better than all of us. We inspire each other to be the change
                we wish to see in the world. To go beyond what’s expected.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* End Team Description */}

      {/* Team Members */}
      <div className="teamMembersSection">
        <div className="row">
          {data.map((teamData, index) => {
            return (
              <div key={index} className="col-md-4">
                <div
                  className="teamMemberBox"
                  onClick={() => handleTeamMemberClick(teamData)}
                >
                  <div className="teamMemberImg">
                    <Image
                      src={`${ImageApi}${teamData.attributes.Image.data[0].attributes.formats.thumbnail.url}`}
                      alt="Little Aryans Team"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="memberName">
                    <p>{teamData.attributes.Name}</p>
                  </div>
                  <div className="memberLine">
                    <Image src={MemberLineImg} alt="" />
                  </div>
                  <div className="memberDegree">
                    <h6>{teamData.attributes.Designation} </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {showTeamDetailBox && (
          <div className="TeamDetailBox">
            <div
              className="teamDetailHead d-flex justify-content-end"
              onClick={handleClose}
            >
              <Image src={CloseIcon} alt="close Icon" />
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <div className="teamMemberDetalImg">
                  <Image
                    src={`${ImageApi}${selectedTeamMember.attributes.Image.data[0].attributes.formats.thumbnail.url}`}
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="teamDetailBoxText">
                  <h2>{selectedTeamMember.attributes.Name}</h2>
                  <div className="memberLine">
                    <Image src={MemberLineImg} alt="" />
                  </div>
                  <div className="detailBoxPosition">
                    <h4>{selectedTeamMember.attributes.Designation}</h4>
                  </div>
                  <div className="detailBoxDesc">
                    <h4>{selectedTeamMember.attributes.Description1}</h4>
                    <h4>{selectedTeamMember.attributes.Description2}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* End Team members */}
    </div>
  );
};

export default OurTeam;
