# Clustering for Customer Segmentation


Self-Organizing Map to create groups for our customer, the grouping would be based on a spending score(to be calculated using past purchase history of client) and also their age.
Such groups can be created to help make the experience more collaborative by helping them engage with people with similar interests and spending habits.

## Dataset
200 rows with columns as CustomerID,Gender,Age,Annual Income (k$) and Spending Score (1-100)

## Description
-KSOM, an unsupervised learning neural network paradigm,does not require any pre classified data and can be efficiently used for data clustering applications,
high-dimensional data can be projected to a lower dimension and that data can be clustered together whilst preserving essential information

-In a self-organizing map, the information is associated with each hub, and the hubs structure a multidimensional cross-section over a space (ordinarily a two-dimensional lattice). 
Nodes are competitive input and is taken care of each in turn, and the node that has the most grounded response to the info is proclaimed the “winning node” and gets the opportunity to assign its weight to the input and return that as yield. 
-This is known as a topographical map.

## Dataset

## Quick Start
Install the following Python Libraries using either conda or pip
 - numpy 
 - pandas 
 - datetime 
 - sklearn.preprocessing 
 - pylab
 - scipy.cluster.hierarchy 
 - scipy.spatial.distance
 - minisom 
 - re
Python Version used : 3.6.12 (64 bits)

## Tech
- Python
