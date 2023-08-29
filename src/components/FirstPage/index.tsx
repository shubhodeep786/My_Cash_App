import React from "react";

import { Img, Text } from "components";

type FirstPageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

export const FirstPage: React.FC<FirstPageProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bottom-[3%] md:h-[498px] h-[612px] sm:h-[626px] inset-x-[0] mx-auto w-full">
          <div className="md:h-[498px] h-[612px] sm:h-[626px] m-auto w-full">
            <div className="md:h-[498px] h-[612px] m-auto w-full">
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col gap-[58px] justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-start justify-start md:ml-[0] ml-[210px] w-[352px] h-[141px]">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-green-A700"
                      size="txtAgrandirGrandHeavy40GreenA700"
                    >
                      Payments
                    </Text>
                    <Text
                      className="leading-[22.00px] text-base text-black-900 tracking-[0.30px] h-352 w-88"
                      size="txtMulishRegular16"
                    >
                      <>
                        Send and receive money with anyone, donate to an
                        important cause, or tip professionals. Just enter a
                        $cashtag, phone number, or scan their QR code to pay.
                      </>
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[295px] items-start justify-end p-[37px] sm:px-5 w-full"
                    style={{ backgroundImage: "url('images/img_group51.svg')" }}
                  >
                    <Img
                      className="h-[131px] md:h-auto md:ml-[0] ml-[221px] mt-[89px] object-cover w-[11%]"
                      src="images/img_paymentspillarsmall.png"
                      alt="paymentspillars"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[431px] inset-x-[0] mx-auto object-cover top-[0] w-[55%]"
                src="images/img_paymentsphone1.png"
                alt="paymentsphoneOne"
              />
            </div>
            <div className="absolute bottom-[4%] h-[497px] sm:h-[626px] right-[0] w-[59%] md:w-full">
              <Img
                className="h-[497px] m-auto object-cover w-full"
                src="images/img_paymentscolumn.png"
                alt="paymentscolumn"
              />
              <div className="absolute bottom-[7%] flex sm:flex-col flex-row sm:gap-10 items-start justify-between left-[8%] w-[65%]">
                <Img
                  className="h-[333px] md:h-auto sm:mt-0 mt-[5px] object-cover"
                  src="images/img_paymentspillarlarge.png"
                  alt="paymentspillarl"
                />
                <Img
                  className="h-[253px] md:h-auto object-cover"
                  src="images/img_paymentspillarmedium.png"
                  alt="paymentspillarm"
                />
              </div>
            </div>
            <Img
              className="absolute bottom-[0] h-[253px] left-[11%] object-cover w-[13%]"
              src="images/img_paymentspillarmedium.png"
              alt="paymentspillarm_One"
            />
          </div>
          <Img
            className="absolute bottom-[2%] h-[253px] left-[37%] object-cover w-[13%]"
            src="images/img_paymentspillarmedium.png"
            alt="paymentspillarm_Two"
          />
        </div>
        <Img
          className="absolute bottom-[0] h-[184px] object-cover right-[39%] w-[13%]"
          src="images/img_paymentspillarmedium.png"
          alt="paymentspillarm_Three"
        />
        <Img
          className="absolute bottom-[0] h-[401px] left-[0] object-cover w-[14%]"
          src="images/img_paymentscolumn_401x187.png"
          alt="paymentscolumn_One"
        />
        <Img
          className="absolute bottom-[0] h-[423px] inset-x-[0] mx-auto object-cover w-3/5"
          src="images/img_paymentscolumn_423x810.png"
          alt="paymentscolumn_Two"
        />
      </div>
    </>
  );
};

FirstPage.defaultProps = {};

export default FirstPage;
