import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Sales of Cigarettes in Europe",
    subcaption: "(per adult per day)",
    legendposition: "BOTTOM",
    entitytooltext: "$lname: <b>$datavalue </b>cigarettes",
    legendcaption: "Number of cigarettes smoked per adult per day",
    entityfillhovercolor: "#FFCDD2",
    theme: "fusion"
  },
  colorrange: {
    gradient: "0",
    color: [
      {
        maxvalue: "4",
        displayvalue: "2-4",
        code: "#EF9A9A"
      },
      {
        maxvalue: "6",
        displayvalue: "4-6",
        code: "#EF5350"
      },
      {
        maxvalue: "8",
        displayvalue: "6-8",
        code: "#E53935"
      },
      {
        maxvalue: "10",
        displayvalue: "8-10",
        code: "#C62828"
      },
      {
        maxvalue: "11",
        displayvalue: "No data available",
        code: "#FFEBEE"
      }
    ]
  },
  data: [
    {
      data: [
        {
          id: "021",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "002",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "025",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "034",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "027",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "043",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "028",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "044",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "026",
          value: "11"
        },
        {
          id: "023",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "010",
          value: "6.4"
        },
        {
          id: "017",
          value: "4.5"
        },
        {
          id: "042",
          value: "5.7"
        },
        {
          id: "018",
          value: "6.4"
        },
        {
          id: "030",
          value: "4.9"
        },
        {
          id: "039",
          value: "2.9"
        },
        {
          id: "029",
          value: "6.4"
        },
        {
          id: "005",
          value: "7"
        },
        {
          id: "013",
          value: "5.1"
        },
        {
          id: "038",
          value: "7.1"
        },
        {
          id: "032",
          value: "5.4"
        },
        {
          id: "040",
          value: "6.7"
        },
        {
          id: "003",
          value: "6.5"
        },
        {
          id: "037",
          value: "6.1"
        },
        {
          id: "008",
          value: "6.4"
        },
        {
          id: "006",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "001",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "015",
          value: "9.9"
        },
        {
          id: "045",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "007",
          value: "7.6"
        },
        {
          id: "024",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "033",
          value: "6"
        },
        {
          id: "016",
          value: "7"
        },
        {
          id: "036",
          value: "7.8"
        },
        {
          id: "009",
          value: "6.2"
        },
        {
          id: "014",
          value: "6.1"
        },
        {
          id: "031",
          value: "6.5"
        },
        {
          id: "041",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "004",
          value: "5.4"
        },
        {
          id: "022",
          value: "5.3"
        },
        {
          id: "020",
          value: "3.5"
        },
        {
          id: "011",
          value: "4.8"
        },
        {
          id: "012",
          value: "4"
        },
        {
          id: "046",
          value: "8.3"
        },
        {
          id: "019",
          value: "5.6"
        },
        {
          id: "035",
          value: "11",
          tooltext: "No data available"
        },
        {
          id: "047",
          value: "11",
          tooltext: "No data available"
        }
      ]
    }
  ]
};

class ChartOne extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="europe"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default ChartOne;