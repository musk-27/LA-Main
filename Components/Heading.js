import Image from "next/image";

const Heading = (props) => {
  return (
    <div>
      <div className="centersHead">
        <h1>{props.headTitle}</h1>
        <div className="centerHeadImg">
          <Image src={props.headBottomImg} alt="Toddler Activities" />
        </div>
      </div>
    </div>
  );
};

export default Heading;
