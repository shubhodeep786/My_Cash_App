import React from "react";

import { Img } from "components";

type SecondComponentProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const SecondComponent: React.FC<SecondComponentProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bottom-[8%] md:h-[407px] h-[521px] sm:h-[640px] right-[0] w-[73%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[186px] h-full justify-start m-auto w-full">
            <Img
              className="h-[166px] md:h-auto object-cover w-[29%]"
              src="images/img_bankingtrack1.png"
              alt="bankingtrackOne"
            />
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[85px] items-start justify-end md:ml-[0] ml-[499px] w-[48%] md:w-full">
              <Img
                className="h-[139px] md:h-auto mb-[30px] object-cover w-[54%] sm:w-full"
                src="images/img_bankingcubes.png"
                alt="bankingcubes"
              />
              <Img
                className="h-[79px] md:h-auto sm:mt-0 mt-[90px] object-cover w-[27%] sm:w-full"
                src="images/img_bankingmonster.png"
                alt="bankingmonster"
              />
            </div>
          </div>
          <Img
            className="absolute h-[407px] left-[16%] object-cover top-[1%] w-[38%]"
            src="images/img_bankingphone.png"
            alt="bankingphone"
          />
        </div>
        <div className="absolute flex sm:flex-col flex-row sm:gap-10 h-max inset-y-[0] items-start justify-between my-auto right-[4%] w-[35%]">
          <Img
            className="h-[187px] md:h-auto object-cover"
            src="images/img_bankingramp1.png"
            alt="bankingrampOne"
          />
          <Img
            className="h-[247px] md:h-auto sm:mt-0 mt-[70px] object-cover"
            src="images/img_bankingstairs1.png"
            alt="bankingstairsOne"
          />
        </div>
        <Img
          className="absolute bottom-[6%] h-[194px] left-[12%] object-cover w-[24%]"
          src="images/img_bankingramp2.png"
          alt="bankingrampTwo"
        />
        <Img
          className="absolute bottom-[15%] h-[222px] left-[4%] object-cover w-[7%]"
          src="images/img_bankingstairs2.png"
          alt="bankingstairsTwo"
        />
        <Img
          className="absolute h-40 object-cover right-[8%] top-[2%] w-1/5"
          src="images/img_bankingtrack2.png"
          alt="bankingtrackTwo"
        />
        <Img
          className="absolute bottom-[0] h-[122px] left-[38%] object-cover w-[12%]"
          src="images/img_bankingtube.png"
          alt="bankingtube"
        />
        <Img
          className="absolute h-[159px] left-[0] object-cover top-[0] w-1/4"
          src="images/img_bankinghole.png"
          alt="bankinghole"
        />
      </div>
    </>
  );
};

SecondComponent.defaultProps = {};

export default SecondComponent;
