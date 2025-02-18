// Build the metadata panel
function buildMetadata(sample) {

  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
   
      // get the metadata field
      let metaData = data.metadata;
      // console.log(metaData)

      // Filter the metadata for the object with the desired sample number
      let result = metaData.filter(sampleResult => sampleResult.id == sample);
      // console.log(result);
      let resultData = result[0];
      // console.log(resultData);

    // Use `.html("") to clear any existing metadata
      d3.select("#sample-metadata").html("");

    // Use d3 to select the panel with id of `#sample-metadata`
      Object.entries(resultData).forEach(([key, value]) => {
          d3.select("#sample-metadata")
              .append("h5").text(`${key}: ${value}`);
      });

  });
}

// function to build both charts
function buildCharts(sample) {

  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
   
    
    // get the sampledata field
    let sampleData = data.samples;
  
    // Filter the sampledata for the object with the desired sample number
    let result = sampleData.filter(sampleResult => sampleResult.id == sample);

    let resultData = result[0];

    // get the otu ids
    let otu_ids = resultData.otu_ids;
    let otu_labels = resultData.otu_labels;
    let sample_values = resultData.sample_values;

    // Get the otu_ids, otu_labels, and sample_values
    let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`);
    let xValues = sample_values.slice(0,10);
    let textLabels = otu_labels.slice(0,10);
    console.log(textLabels);

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let barChart = {
      y: yticks.reverse(),
      x: xValues.reverse(),
      text: textLabels.reverse(),
      type: "bar",
      orientation: "h"
    }

    let layout = {
      title: "Top 10 Belly Button Bacteria"
    };

    Plotly.newPlot("bar", [barChart], layout);

    // Build a Bubble Chart
    let bubbleChart = {
      y: sample_values,
      x: otu_ids,
      text: otu_labels,
      mode: "markers",
      marker: {
          size: sample_values,
          color: otu_ids,
          colorscale: "Earth"
      }
    }
    // Render the Bubble Chart
    let layout2 = {
      title: "Bacteria Cultures Per Sample",
      hovermode: "closest",
      xaxis: {title: "OTU ID"}
    };

    Plotly.newPlot("bubble", [bubbleChart], layout2);
  });

}

// Function to run on page load
function init() 
{   
    // Use d3 to select the dropdown with id of `#selDataset`
    var select = d3.select("#selDataset");

    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      // Get the names field
      let sampleNames = data.names;
    
    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
      sampleNames.forEach((sample) => {
        select.append("option")
         .text(sample)
         .property("value", sample);
      });

      // Get the first sample from the list
      let sample1 = sampleNames[0];

      // call the function to build the metadata
      buildMetadata(sample1);

      // Build charts and metadata panel with the first sample
      buildCharts(sample1);
    });

      
}


// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();
