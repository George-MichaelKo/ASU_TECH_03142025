AdBud: AI-Driven Dynamic User Profile Generator

What Does AdBud Do?
AdBud is an AI model designed to generate dynamic user profiles based on a wide range of user metrics. By analyzing behavioral and demographic data, AdBud creates precise ad targeting recommendations that improve user engagement and increase marketing effectiveness.
Key Features
Intent Detection and Context Awareness Models: Predicts user intent and understands context using specific data about users to provide personalized ads that align with their interests and preferences.
Utilizes user behavior metrics like:
Intent Prediction Model: Determines positive or negative intent based on metrics such as:
Hover-over time
Time spent on a page
Click-through rates
Considers contextual data as mentioned below:
Age, gender, and location
Device type (mobile, tablet, etc.)
Environmental factors such as time of day, weather, and special events
Generates precise ad recommendations aligned with user interests to improve engagement, conversion rates and ROI.


Tech/Framework Used:
Python is the primary programming language for training model and predicting user need
Panda is used for data manipulation and preprocessing
Scikit-Learn is the machine learning framework we used for data preprocessing, feature transformation, model training, and evaluation.
The code trains a Random Forest Classifier to predict a user's preferred product category based on robust user attributes for more accuracy (e.g., age, gender, location, purchase history, etc.). It:
Preprocesses the dataset – handles missing values, scales numerical data, and encodes categorical data using StandardScaler, OneHotEncoder, ColumnTransformer, SimpleImputer
Splits the dataset into training and test sets using train_test_split
Trains the model using RandomForestClassifier.
Evaluates the model with accuracy and confusion matrix using accuracy_score, confusion_matrix
Makes a prediction for a sample user.
React was used to display advertisement results on a website
FakeStore API is our data source for categorical advert details (although data here is limited)


Navigating The Application

1. In Google Colab, manipulate sample user input to your choice and run the code to see predicted product interest, example of user input:
sample_user = pd.DataFrame({
   'Age': [20],
   'Gender': ['Male'],
   'Location': ['San Francisco'],
   'Previous_Purchases': [10],
   'Preferred_Payment_Method': ['Credit Card'],
   'Frequency_of_Purchases': [4],
   'Time_of_Day': [13],  # Time in hours (e.g., 3:00 PM)
   'Device_Type': ['Mobile'],
   'Browsing_History': [13],
   'Weather': ['Windy'],
   'Hobbies/Interests': ['Technology'],  # Include all columns expected
   'Sentiment_Analysis': [0.2],  # Positive sentiment
   'Brand_Affinities': ['Rolex'],
   'Survey_Responses': ['Cosmetic'],
   'Device_Engagement_Level': [4]  # Make sure this column exists and has a value
})
2. The result is a prediction of likely products users are interested in
3. This result is passed to dummyjson API to get relevant ads
4. The relevant ads are displayed on the website
Video walkthrough: https://www.loom.com/share/51f812a833f549e5b115dfdb802f619b?sid=d46cca77-9daa-4914-8b5c-3613a6f068ca

<img width="1512" alt="Screenshot 2025-03-14 at 3 43 18 AM" src="https://github.com/user-attachments/assets/e8f6c77e-9eea-4bb1-9b6e-8d5560f16a22" />
Dock File/Run.sh code

Setting Up and Running the Project

We attempted to automate the setup and execution of our project using a run.sh script. This script is designed to:

Clone the repository
Install necessary dependencies
Fix potential vulnerabilities
Start the development server

CODE BELOW:

#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Clone the repository
echo "Cloning the repository..."
git clone https://github.com/George-MichaelKo/ASU_TECH_03142025.git

# Navigate to the project directory
echo "Navigating to the project directory..."
cd BOTB_ASU_TEAM

# Install Node.js dependencies
echo "Installing Node.js dependencies..."
npm install || { echo "Node.js dependency installation failed"; exit 1; }

# For Mac users or if installation errors occur, run this command
echo "Running npm audit fix for error resolution..."
npm audit fix --force

# Start the development server
echo "Starting the development server..."
npm start || { echo "Website startup failed"; exit 1; }

echo "Website is now running successfully!"

However, when running the script, we encountered several dependency-related issues, including:

A large number of vulnerabilities (moderate, high, and critical)
Deprecated package warnings
Breaking changes when attempting to fix vulnerabilities using npm audit fix --force




How to Run the Prediction Model
Open Google Colab
Download the provided .CSV file (containing the user attribute dataset) from github.
Upload the .CSV file into the Colab workspace under the "Files" section.
Upload the .ipynb model code file into the Colab workspace or simply paste the code content into google colab.
Run the uploaded .ipynb model code file to use the dataset and generate predictions.

How to Run the Website
Clone the repository: https://github.com/George-MichaelKo/BOTB_ASU_TEAM.git
cd <project-directory>
Install dependencies:
npm install 
Note: For Mac users if errors occur during installation, run:
npm audit fix --force
Start the development server:
npm start
If the app starts successfully, you should see the homepage with a dynamic UI for ad recommendations.


How to Tell if AdBud is Running Successfully
The Colab notebook should output prediction results without errors.
The website should launch without installation issues, and the UI should display personalized ad suggestions.
If you encounter any issues, refer to the provided documentation. Enjoy exploring AdBud!



