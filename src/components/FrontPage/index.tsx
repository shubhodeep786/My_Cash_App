import React from "react";

import { Img, Text } from "components";

type FrontPageProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "cashtext" | "apptext"
> &
  Partial<{ cashtext: string; apptext: string }>;

const FrontPage: React.FC<FrontPageProps> = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/defaultNoData.png')" }}
      >
        <div className="absolute bottom-[10%] md:h-[453px] h-[483px] left-[15%] w-3/5 md:w-full">
          <div className="absolute h-[453px] right-[0] top-[0] w-[85%] md:w-full">
            <Text
              className="absolute inset-x-[0] mx-auto md:text-5xl text-[193px] text-center text-white-A700 top-[2%] tracking-[0.50px] uppercase w-max"
              size="txtAgrandirWideHeavy193"
            >
              {props?.cashtext}
            </Text>
            <Img
              className="absolute h-[453px] inset-[0] justify-center m-auto object-cover w-[55%]"
              src="images/img_introphone1.png"
              alt="introphoneOne"
            />
          </div>
          <Text
            className="absolute bottom-[14%] right-[10%] md:text-5xl text-[193px] text-center text-white-A700 tracking-[0.50px] uppercase"
            size="txtAgrandirWideHeavy193"
          >
            {props?.apptext}
          </Text>
          <Img
            className="absolute bottom-[0] h-44 left-[0] object-cover w-[24%]"
            src="images/img_introcubes1.png"
            alt="introcubesOne"
          />
        </div>
        <Img
          className="absolute h-[73px] left-[17%] object-cover top-[7%] w-[74px]"
          src="images/img_introcube1.png"
          alt="introcubeOne"
        />
        <Img
          className="absolute h-[260px] object-cover right-[10%] top-[7%] w-[15%]"
          src="images/img_introstairs1.png"
          alt="introstairsOne"
        />
      </div>
    </>
  );
};

FrontPage.defaultProps = { cashtext: "CASh", apptext: "APP" };

export default FrontPage;
