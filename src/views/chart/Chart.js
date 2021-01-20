import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useQuery } from "react-query";
import {
  Card,
} from "@material-ui/core";

const Chart = () => {
  const { isLoading, data, status } = useQuery("covidDaily", () =>
    axios("https://covid19.mathdro.id/api/countries/GB")
  );

  const doughnutChart = (
    <Doughnut
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [
              isLoading ? status : data.data.confirmed.value,
              isLoading ? status : data.data.recovered.value,
              isLoading ? status : data.data.deaths.value
            ],
            backgroundColor: [
              "#ffad1f80",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)"
            ]
          }
        ]
      }}
      options={{
        title: {
          display: true,
          text: "Ratio in UK"
        }
      }}
    />
  );

  return (
    <div>
      <Card>
        <Grid container>
          {doughnutChart}
        </Grid>
      </Card>
    </div>
  );
};

export default Chart;
