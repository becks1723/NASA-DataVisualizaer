import { FC, useEffect, useState } from "react";
import { BarTransition } from "./energyGraphComponents/BarTransition";
import styled from "styled-components";
import COLORS from "../../assets/Theme";
import HeatmapTransition from "./heatGraphComponents/HeatmapTransition";

//import * as d3 from 'd3';
type ViewProps = {
  data: {
    dataType: string;
    startYear: string;
    endYear: string;
  };
};

const View = ({ data }) => {
  const dataType = data.dataType;
  const startYear = data.startYear;
  const endYear = data.endYear;
  const [Data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);
  const [error, setError] = useState([""]);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(
      document.getElementById("cont")!.offsetWidth > 0
        ? document.getElementById("cont")!.offsetWidth - 100
        : 600
    );
    if (dataType === "SolarEnergy") {
      fetch(
        `http://localhost:3000/energy/SolarEnergy/${startYear}/${endYear}`
      ).then((res) => {
        res.json().then((data) => {
          setData(data);
          setLoading(true);
        });
      });
    } else if (dataType === "WindEnergy") {
      fetch(
        `http://localhost:3000/energy/WindEnergy/${startYear}/${endYear}`
      ).then((res) => {
        res.json().then((data) => {
          setData(data);
          setLoading(true);
        });
      });
    } else if (dataType === "Wildfire") {
      if (
        startYear === "" ||
        endYear === "" ||
        startYear < 2012 ||
        endYear > 2021
      ) {
        setError([
          "Currently Wildfires is only available from 2012 to 2021",
          "Please adjust your input",
        ]);
        setErrorLoading(true);
      } else {
        fetch(
          `http://localhost:3000/heatmaps/wildfires/${startYear}/${endYear}`
        ).then((res) => {
          res.json().then((data) => {
            setData(data);
            setLoading(true);
          });
        });
      }
    } else if (dataType === "WindSpeed") {
      if (
        startYear === "" ||
        endYear === "" ||
        startYear < 2012 ||
        endYear > 2021
      ) {
        setError([
          "Currently Wildfires is only available from 2012 to 2021",
          "Please adjust your input",
        ]);
        setErrorLoading(true);
      } else {
        fetch(
          `http://localhost:3000/heatmaps/WindSpeed/${startYear}/${endYear}`
        ).then((res) => {
          res.json().then((data) => {
            setData(data);
            setLoading(true);
          });
        });
      }
    } else if (dataType === "Aerosols") {
      if (
        startYear === "" ||
        endYear === "" ||
        startYear < 2012 ||
        endYear > 2021
      ) {
        setError([
          "Currently Wildfires is only available from 2012 to 2021",
          "Please adjust your input",
        ]);
        setErrorLoading(true);
      } else {
        fetch(
          `http://localhost:3000/heatmaps/Aerosols/${startYear}/${endYear}`
        ).then((res) => {
          res.json().then((data) => {
            setData(data);
            setLoading(true);
          });
        });
      }
    }
  }, []);

  return (
    // make sure energyData is not empty
    <div>
      {errorLoading && (
        <div>
          <h1>{error[0]}</h1>
          <h2>{error[1]}</h2>
        </div>
      )}
      {loading == true && (
        <div>
          {dataType === "SolarEnergy" && (
            <div>
              <GraphTitle>Solar Energy Production</GraphTitle>
              <GraphSubTitle>In Thousand Megawatt Hours</GraphSubTitle>
              <BarTransition width={width} height={400} data={Data} />
            </div>
          )}

          {dataType === "WindEnergy" && (
            <div>
              <GraphTitle>Wind Energy Production</GraphTitle>
              <GraphSubTitle>In Thousand Megawatt Hours</GraphSubTitle>
              <BarTransition width={width} height={500} data={Data} />
            </div>
          )}
          {dataType === "Wildfire" && (
            <div className="ml-10 mr-10">
              <GraphTitle>Wildfires</GraphTitle>
              <GraphSubTitle>Each dot represents a fire</GraphSubTitle>
              <HeatmapTransition
                width={width}
                height={500}
                data={Data}
                type="Wildfire"
              />
            </div>
          )}
          {dataType === "WindSpeed" && (
            <div className="ml-10 mr-10">
              <GraphTitle>Wind Speed</GraphTitle>
              <GraphSubTitle>Each dot represents a wind speed</GraphSubTitle>
              <HeatmapTransition
                width={width}
                height={500}
                data={Data}
                type="wind"
              />
            </div>
          )}
          {dataType === "Aerosols" && (
            <div className="ml-10 mr-10">
              <GraphTitle>Aerosols</GraphTitle>
              <GraphSubTitle>Each dot represents a aerosol</GraphSubTitle>
              <HeatmapTransition
                width={width}
                height={500}
                data={Data}
                type="aerosol"
              />
            </div>
          )}
        </div>
      )}
      {loading == false && errorLoading == false && (
        <LoadingText>Loading ...</LoadingText>
      )}
    </div>
  );
};

export default View;

const GraphDataType = styled.h1`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 600;
  white-space: nowrap;
  color: ${COLORS.background};
`;

const GraphTitle = styled.h2`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  white-space: nowrap;
  color: ${COLORS.background};
`;

const GraphSubTitle = styled.h3`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 0.5rem;
  white-space: nowrap;
  color: ${COLORS.background};
`;

const LoadingText = styled.h1`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 600;
  white-space: nowrap;
  color: ${COLORS.background};
`;
