import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import "primeicons/primeicons.css";
import portfolioImage from "../portfolioimage.png";
export default function PortflioPage() {
  const [sideBarVisible, setSidebarVisible] = useState(false);
  const buttonPassthroughSideBar = {
    label: { className: "flex justify-start text-neutral-400" },
  };
  const [themeColor, setThemeColor] = useState("bg-gray-950");

  return (
    <div>
      <div className="card flex justify-content-center">
        <Sidebar
          pt={{
            content: { className: themeColor },
            header: { className: themeColor },
          }}
          visible={sideBarVisible}
          onHide={() => setSidebarVisible(false)}
          header={
            <div className="grid grid-cols-4">
              <Button
                className="col-span-1"
                icon="pi pi-user"
                onClick={() => setSidebarVisible(true)}
              />
              <h1 className="col-span-3 px-3 font-bold text-neutral-400 rounded-md shadow-lg  shadow-gray-700/80">
                Raghava Praveen
              </h1>
            </div>
          }
        >
          <div className="grid py-2 gap-10">
            <Button pt={buttonPassthroughSideBar} label="About"></Button>
            <Button pt={buttonPassthroughSideBar} label="Projects"></Button>
            <Button
              pt={buttonPassthroughSideBar}
              label="Achievements and Recognition"
            ></Button>
            <Button pt={buttonPassthroughSideBar} label="Technologies"></Button>
            <Button pt={buttonPassthroughSideBar} label="Courses"></Button>
            <Button pt={buttonPassthroughSideBar} label="Education"></Button>
          </div>
        </Sidebar>
        <div className="grid">
          <div className="w-full h-full grid grid-cols-2">
            <div className="bg-gray-950 col-span-1">
              <div className="w-full py-6">
                <Button
                  className="fixed"
                  style={{ color: "white" }}
                  icon="pi pi-bars"
                  onClick={() => setSidebarVisible(true)}
                />
              </div>
              <div className=" flex justify-end text-white text-4xl pl-4 pr-1 pt-10">
                I'
              </div>
              <div className=" flex justify-end text-white text-4xl pl-4 pb-4 pr-1">
                RAGHAVA
              </div>
              <div className="flex justify-end text-orange-500 text-4xl pl-4 pr-1 pt-10">
                DATA
              </div>
              <div className="flex justify-end text-white brightness-50 text-2xl pl-4 pr-1">
                SCIENTIST
              </div>
              <div className="text-white text-lg px-4 py-10">
                Welcome! With a year in data science and web development, I
                excel at turning raw data into insights and crafting
                user-friendly web solutions. Explore my portfolio for impactful,
                data-driven web applications.
              </div>
            </div>
            <div className="bg-white pt-9 col-span-1">
              <div className="grid grid-cols-5">
                <div className="col-span-2">
                  <div className="w-full py-3">
                    <div className=" flex justify-start text-gray-950 text-4xl pl-1 pt-10">
                      M
                    </div>
                    <div className=" flex justify-start text-gray-950 text-4xl pb-5 pl-1">
                      PRAVEEN
                    </div>
                    <div className="flex justify-start text-gray-950 brightness-50 text-2xl pl-1 pt-1">
                      WEB
                    </div>
                    <div className="flex justify-start text-orange-500 text-4xl pl-1">
                      DEVELOPER
                    </div>
                    <div className=" grid grid-rows-6 gap-10 pt-20 items-center pl-3 col-span-1">
                      <div className="flex items-top justify-start gap-3">
                        <i
                          className="pi pi-envelope"
                          style={{
                            fontSize: "1rem",
                            display: "flex",
                            alignItems: "center",
                          }}
                        ></i>
                        <a href="mailto:raghav18122000@gmail.com">
                          raghav18122000@gmail.com
                        </a>
                      </div>
                      <i
                        className="pi pi-linkedin flex items-end "
                        style={{ fontSize: "1rem" }}
                      ></i>
                      <i
                        className="pi pi-github"
                        style={{ fontSize: "1rem" }}
                      ></i>
                      <i
                        className="pi pi-instagram"
                        style={{ fontSize: "1rem" }}
                      ></i>
                      <i
                        className="pi pi-download"
                        style={{ fontSize: "1rem" }}
                      ></i>
                      <div className="flex items-top justify-start gap-3">
                        <i
                          style={{
                            fontSize: "1rem",
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="pi pi-phone"
                        ></i>
                        <a href="tel:+918555984068">8555984068</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="w-full h-full grid grid-cols-4">
                    <div className="flex justify-end col-span-4">
                      <img
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          aspectRatio: "auto",
                        }}
                        src={portfolioImage}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid h-max w-full grid-cols-2">
            <div className="col-span-1 bg-white">
              <div className="flex items-top pt-4 justify-start gap-3">
                <i
                  style={{
                    fontSize: "800%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="pi pi-calculator"
                ></i>
                <div>
                  <div className="text-orange-500 font-bold text-xl">
                    Virtual Metering using Physics induced ML
                  </div>
                  <div className="pt-2">
                    Successfully designed and implemented a novel machine
                    learning model that leverages the underlying physics
                    governing pressure dynamics. By integrating domain knowledge
                    and employing advanced ML algorithms, we created a system
                    capable of accurately predicting pressure readings even in
                    the absence of functioning gauges.
                  </div>
                  <div className="pt-2 text-orange-500 font-bold">
                    Technologies and Tools used:
                  </div>
                  <div className="pb-2">
                    Azure Machine Learning, Azure SQL, Python, Machine Learning,
                    Physics, Scikit learn
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-gray-950">
              <div className="flex items-top pt-4 justify-start gap-3">
                <i
                  style={{
                    fontSize: "800%",
                    display: "flex",
                    alignItems: "center",
                    color: "rgb(220 252 231)",
                  }}
                  className="pi pi-sitemap px-4"
                ></i>
                <div>
                  <div className="text-orange-500 font-bold text-xl">
                    Automate Office workflows using Power Automate
                  </div>
                  <div className="py-2 text-white">
                    Automated routine office tasks, including room bookings,
                    automated email triggers, reminder messages, and seamless
                    integration with Azure Boards for efficient task management.
                    Implemented a comprehensive Power Automate flow, reducing
                    manual effort, enhancing workflow efficiency, and
                    demonstrating proficiency in process optimization and
                    automation.
                  </div>
                  <div className="pt-2 text-orange-500 font-bold">
                    Technologies and Tools used:
                  </div>
                  <div className="text-white">
                    Power Automate, Azure Boards, Python, Outlook, Teams
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid h-max w-full grid-cols-2">
            <div className="col-span-1 bg-gray-950">
              <div className="flex items-top pt-4 justify-start gap-3">
                <i
                  style={{
                    fontSize: "800%",
                    display: "flex",
                    alignItems: "center",
                    color: "rgb(220 252 231)",
                  }}
                  className="pi pi-sitemap px-4"
                ></i>
                <div>
                  <div className="text-orange-500 font-bold text-xl">
                    Automate Office workflows using Power Automate
                  </div>
                  <div className="py-2 text-white">
                    Automated routine office tasks, including room bookings,
                    automated email triggers, reminder messages, and seamless
                    integration with Azure Boards for efficient task management.
                    Implemented a comprehensive Power Automate flow, reducing
                    manual effort, enhancing workflow efficiency, and
                    demonstrating proficiency in process optimization and
                    automation.
                  </div>
                  <div className="pt-2 text-orange-500 font-bold">
                    Technologies and Tools used:
                  </div>
                  <div className="text-white">
                    Power Automate, Azure Boards, Python, Outlook, Teams
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-white">
              <div className="flex items-top pt-4 justify-start gap-3">
                <i
                  style={{
                    fontSize: "800%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="pi pi-calculator"
                ></i>
                <div>
                  <div className="text-orange-500 font-bold text-xl">
                    Virtual Metering using Physics induced ML
                  </div>
                  <div className="pt-2">
                    Successfully designed and implemented a novel machine
                    learning model that leverages the underlying physics
                    governing pressure dynamics. By integrating domain knowledge
                    and employing advanced ML algorithms, we created a system
                    capable of accurately predicting pressure readings even in
                    the absence of functioning gauges.
                  </div>
                  <div className="pt-2 text-orange-500 font-bold">
                    Technologies and Tools used:
                  </div>
                  <div className="pb-2">
                    Azure Machine Learning, Azure SQL, Python, Machine Learning,
                    Physics, Scikit learn
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
