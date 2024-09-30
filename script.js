// Function to calculate BMI
function calculateBMI(weight, height) {
    height = height / 100; // convert height from cm to meters
    let bmi = weight / (height * height);
    return bmi.toFixed(1);
}

// User data variables
let age = 0, gender = "", weight = 0, height = 0;
let stepsToday = 0, caloriesBurned = 0, waterIntake = 0, bmi = 0;

// Function to update stats based on user input
function updateStats() {
    // Get values from inputs
    age = document.getElementById("age").value;
    gender = document.getElementById("gender").value;
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    stepsToday = document.getElementById("steps-today").value;
    caloriesBurned = document.getElementById("calories-burned").value;
    waterIntake = document.getElementById("water-intake").value;

    // Calculate BMI
    bmi = calculateBMI(weight, height);

    // Update statistics display
    document.getElementById("display-age").innerText = age;
    document.getElementById("display-gender").innerText = gender;
    document.getElementById("display-weight").innerText = weight;
    document.getElementById("display-height").innerText = height;
    document.getElementById("display-bmi").innerText = bmi;
    document.getElementById("display-steps").innerText = stepsToday;
    document.getElementById("display-calories").innerText = caloriesBurned;
    document.getElementById("display-water").innerText = waterIntake;

    // Generate workout recommendation
    generateWorkoutPlan();
}

// Function to generate personalized workout plan
function generateWorkoutPlan() {
    let workoutPlan = "";
    const dailyStepGoal = 10000;
    const dailyCalorieGoal = 500;

    // Personalized recommendation based on BMI
    if (bmi < 18.5) {
        workoutPlan += "You're underweight. Focus on gaining strength through resistance training and increase your calorie intake.\n";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        workoutPlan += "Your BMI is normal. Maintain your fitness with a balanced routine of cardio and strength training.\n";
    } else if (bmi >= 25 && bmi < 29.9) {
        workoutPlan += "You're overweight. Focus on cardio exercises to burn fat and a balanced diet.\n";
    } else {
        workoutPlan += "You're in the obese category. Start with low-impact exercises like walking and swimming to gradually increase your activity level.\n";
    }

    // Recommendations based on age and activity levels
    if (age < 30) {
        workoutPlan += "For your age group, try high-intensity interval training (HIIT) and strength training.\n";
    } else if (age >= 30 && age <= 50) {
        workoutPlan += "Focus on a mix of cardio, flexibility, and strength training.\n";
    } else {
        workoutPlan += "Incorporate low-impact exercises like yoga, pilates, and brisk walking.\n";
    }

    // Additional recommendations based on activity
    if (stepsToday < dailyStepGoal) {
        workoutPlan += `You are below the recommended daily step goal of ${dailyStepGoal}. Try to walk more!\n`;
    }
    
    if (caloriesBurned < dailyCalorieGoal) {
        workoutPlan += `You need to burn more calories today. Add some cardio exercises to your routine.\n`;
    }

    document.getElementById("workout-plan").innerText = workoutPlan;
}
