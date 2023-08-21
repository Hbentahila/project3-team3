# Airbnb in New York City

## Research Question


## Data Source
Inside Airbnb (http://insideairbnb.com/get-the-data/)

## Data Limitation
The last updated date for our data source is June 05, 2025.<br>
We have limited reouces to verify the data source.<br> 

## Data ETL Process
### Extrct
* Downloaded the listings csv file from the source.
### Trandform
* This project used Python Jupyter Notebook to clean the data create our SQLite database.
### Load
* Python Flask powered API to deploy the database, and used to fetch the necessary data from the database and render template.
<img src="/image/dropdown_menu.png" />

## Library 
* Leafet
* Plotly
* Highcharts

## Visualization and Analysis
### Objectives
* Mapping the Airbnb with review scores
* Find the most popular porperty listing type in New York Ciity.
* Availbility Anlysis with different neighourhood groups:<br>
Assuing the hot spot is the listing's availibies that are shorter than 20 days.<br>
And the cold spot is the listing's avalibilies that are longer than 300 days.<br>
* Analyzed the average price for the listing by neighourhood group.

### New York City Mapping
<img src="/image/.png" />

### Listing Room Type 
<img src="/image/plotly_pie_chart.png" />

### Listing Availbility 
<img src="/image/plotly_bar_chart.png" />

### Listing Average Cost
<img src="/image/highcharts.png"  />

## Team Members
* Hicham Benrahila
* Suhani Arjin
* Wei Zhang
