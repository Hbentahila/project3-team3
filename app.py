# Import the dependencies.
import numpy as np
from flask import Flask, jsonify, render_template
import sqlite3


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

# Use the fucntion render_template to return the html page "index.html" when running the app
@app.route("/")
def index():
    return render_template('airbnb_nyc.html')

# Route "/data" returning all data
@app.route('/data')
def get_data():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM listings")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

# Route "/data/metadata_map" returning the data that will be used for mapping
@app.route('/data/metadata_map')
def get_metadata_map():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute("SELECT rating, room_type, number_of_reviews, neighbourhood_group, neighbourhood, latitude, longitude \
                   FROM listings")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

# Route "/data/room_type" returning the data thagt will be used for the room type analysis 
@app.route('/data/room_type')
def get_room_type():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute("SELECT room_type, COUNT(*) AS room_type_count \
                   FROM listings \
                   GROUP BY room_type")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

# Route "/data/count_hood_availability" retunring count of listings by neighbourhood 
# where the availability in the next 12 months is less than 20 days 
@app.route('/data/count_hood_availability_20')
def get_count_hood_availability_20():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute("SELECT neighbourhood_group, COUNT(*) AS listing_count \
                   FROM listings \
                   WHERE availability < 20 \
                   GROUP BY neighbourhood_group")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

# Route "/data/count_hood_availability" retunring count of listings by neighbourhood 
# where the availability in the next 12 months is more than 300 days
@app.route('/data/count_hood_availability_300')
def get_count_hood_availability_300():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute("SELECT neighbourhood_group, COUNT(*) AS listing_count \
                   FROM listings \
                   WHERE availability > 300\
                   GROUP BY neighbourhood_group")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

# Route "/data/count_hood_availability" retunring count of listings by neighbourhood 
# where the availability in the next 12 months is less than 20 days and more than 300 days
@app.route('/data/count_hood_availability_20_300')
def get_count_hood_availability_20_300():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()

    cursor.execute("SELECT neighbourhood_group, \
                   COUNT(CASE WHEN availability < 20 THEN availability END) AS availability_below_20, \
                   COUNT(CASE WHEN availability > 300 THEN availability END) AS availability_above_300 \
                   FROM listings \
                   GROUP BY neighbourhood_group")
    
    data = cursor.fetchall()

    print(data)

    conn.close()

    return jsonify(data)

# Route "/data/avg_price" retunring the average price by room_type and neighbourhood_group
# 
@app.route('/data/avg_price')
def get_avg_price():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()
    cursor.execute("SELECT room_type, neighbourhood_group, AVG(price_per_night) AS average_price \
                   FROM listings \
                   GROUP BY room_type, neighbourhood_group")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)

# import os
# current_directory = os.getcwd()
# print("Current Directory:", current_directory)
