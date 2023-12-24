import { useState } from "react";
import Connect from "./assets/connect.svg";
import Logo from "./assets/logo.svg";

import "./App.css";
import { metamaskWallet, useAddress, useConnect } from "@thirdweb-dev/react";

const metamaskConfig = metamaskWallet();

function App() {
  const [count, setCount] = useState(0);
  const connect = useConnect();

  const address = useAddress();

  console.log(address);

  // max-w-full max-h-full
  return (
    <div className=" min-w-screen min-h-screen bg-gradient-to-r from-[#ECF8FF] via-[#F4F9F0] to-[#FFF4EE] border-2 border-red flex flex-col">
      <div className="flex justify-center">
        <img src={Logo} className="py-10 object-contain" />
      </div>

      <div className="xl:w-[35%] lg:w-[50%] md:w-[60%] bg-[#FFFFFF] m-auto rounded-3xl">
        <div className="w-[90%] m-auto">
          <div id="section#1" className="my-8">
            {address ? (
              <div className="text-center">
                <h1 className="my-9">
                  {address.substring(0, 4) +
                    "...." +
                    address.substring(address.length - 5)}
                </h1>
              </div>
            ) : (
              <div
                onClick={async () => {
                  const add = await connect(metamaskConfig);
                  console.log(add);
                }}
                className="p-[7px] rounded-full flex flex-row justify-between items-center bg-[#E82929] my-9 cursor-pointer"
              >
                <div></div>
                <p className="text-white">Connect Wallet</p>
                <div>
                  <img src={Connect} />
                </div>
              </div>
            )}
            <div className="mb-10">
              <p className="text-[#0A090DB2] font-semibold text-base font-sans text-center">
                Unlock boundless creativity and imagination with our
                state-of-the-art AI-powered tools. Immerse yourself in a
                platform that harnesses the limitless graphic potential of
                blockchain technology. Join us today and unleash your artistic
                vision like never before
              </p>
            </div>
            <div className="bg-[#EBEBEB] my-2 border-[1px] border-[#EBEBEB]"></div>
          </div>
          <div id="section2">
            <div id="whitelistproof" className="text-center">
              <h1
                className="font-sans text-[#0A090D] text-xl font-semibold"
                style={{ letterSpacing: "2%" }}
              >
                Whitelist Proof
              </h1>
              <p className="text-[#0A090DB2]  text-base	font-normal my-2">
                Come join us and let's together spearhead the NFT 3.0 revolution
              </p>
            </div>

            <div id="publicaddress">
              <h1 className="text-[#0A090D] font-semibold text-base	font-sans">
                Public Address
              </h1>

              <input className="border-[1px] my-3 w-full border-[#0A090D33] h-[50px] rounded-2xl"></input>
              <div className="text-center border-[1px] my-7 cursor-pointer border-[#0A090D] rounded-full h-[45px] flex justify-center items-center ">
                <p className="text-center font-normal text-xl">
                  Generate and copy to clipboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
