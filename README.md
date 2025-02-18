# belly-button-challenge

This project involves creating an interactive data visualization dashboard using the D3 JavaScript library to analyze microbiome samples. The dashboard presents the top 10 OTUs (Operational Taxonomic Units) for an individual sample and allows users to explore different datasets through an interactive interface.

Features

Bar Chart

Displays the top 10 OTUs for a selected individual.

Uses sample_values for bar heights.

Uses otu_ids as labels.

Uses otu_labels as hover text.

Bubble Chart

Displays each sample with:

otu_ids on the x-axis.

sample_values on the y-axis.

sample_values determining marker sizes.

otu_ids determining marker colors.

otu_labels as hover text.

Metadata Panel

Displays demographic information for the selected sample.

Extracts key-value pairs from the metadata JSON object.

Appends formatted information dynamically to the #sample-metadata panel.

Interactive Functionality

Updates all plots when a new sample is selected.

Allows users to explore different samples through a dropdown menu.

Ensures real-time updates to visualizations based on user input.

Deployment

Hosted on a free static page service such as GitHub Pages.

Regular commits made to the GitHub repository.

README includes project details and deployment links.

Technologies Used

D3.js (Data Visualization)

JavaScript (Interactivity)

HTML/CSS (Web Interface)

GitHub Pages (Deployment)

This interactive microbiome analysis tool enables users to explore microbial data through engaging visualizations.

