let currentChoiceCard = 0; // Tracks the current choice card
const totalChoiceCards = 10; // Total number of choice card sets
const imagePath = 'https://digetecture-cards.web.app/baas/public/baasplan.png'; // Path for the image

const choiceCardData = [
    {
        costMultiplierA: 1.0,
        rangeMultiplierA: 1.1,
        chargingDistA: { dcSuperfast: 75, dcFast: 25 },
        emergencyFeatureA: "2 Times",
        batteryHealthA: "Only Health Monitoring",
        costMultiplierB: 1.1,
        rangeMultiplierB: 1.0,
        chargingDistB: { dcSuperfast: 75, dcFast: 25 },
        emergencyFeatureB: "2 Times",
        batteryHealthB: "Health Monitoring + Warranty (5 years)",
    },
    {
        costMultiplierA: 1.1,
        rangeMultiplierA: 1.1,
        chargingDistA: { dcSuperfast: 25, dcFast: 75 },
        emergencyFeatureA: "0 Times",
        batteryHealthA: "Health Monitoring + Warranty (5 years)",
        costMultiplierB: 0.9,
        rangeMultiplierB: 0.9,
        chargingDistB: { dcSuperfast: 25, dcFast: 75 },
        emergencyFeatureB: "4 Times",
        batteryHealthB: "Only Health Monitoring",
    },
    {
        costMultiplierA: 1.0,
        rangeMultiplierA: 0.8,
        chargingDistA: { dcSuperfast: 50, dcFast: 50 },
        emergencyFeatureA: "2 Times",
        batteryHealthA: "Only Health Monitoring",
        costMultiplierB: 0.9,
        rangeMultiplierB: 0.9,
        chargingDistB: { dcSuperfast: 75, dcFast: 25 },
        emergencyFeatureB: "4 Times",
        batteryHealthB: "Health Monitoring + Warranty (5 years)",
    },
    {
        costMultiplierA: 1.1,
        rangeMultiplierA: 0.9,
        chargingDistA: { dcSuperfast: 50, dcFast: 50 },
        emergencyFeatureA: "0 Times",
        batteryHealthA: "Only Health Monitoring",
        costMultiplierB: 1.1,
        rangeMultiplierB: 0.8,
        chargingDistB: { dcSuperfast: 75, dcFast: 25 },
        emergencyFeatureB: "2 Times",
        batteryHealthB: "Only Health Monitoring",
    },
    {
        costMultiplierA: 0.9,
        rangeMultiplierA: 1.1,
        chargingDistA: { dcSuperfast: 50, dcFast: 50 },
        emergencyFeatureA: "2 Times",
        batteryHealthA: "Only Health Monitoring",
        costMultiplierB: 1.2,
        rangeMultiplierB: 0.9,
        chargingDistB: { dcSuperfast: 75, dcFast: 25 },
        emergencyFeatureB: "2 Times",
        batteryHealthB: "Health Monitoring + Warranty (5 years)",
    },
    {
        costMultiplierA: 1.1,
        rangeMultiplierA: 0.9,
        chargingDistA: { dcSuperfast: 25, dcFast: 75 },
        emergencyFeatureA: "2 Times",
        batteryHealthA: "Only Health Monitoring",
        costMultiplierB: 1.0,
        rangeMultiplierB: 1.0,
        chargingDistB: { dcSuperfast: 50, dcFast: 50 },
        emergencyFeatureB: "2 Times",
        batteryHealthB: "Health Monitoring + Warranty (5 years)",
    },
    {
        costMultiplierA: 1.2,
        rangeMultiplierA: 1.1,
        chargingDistA: { dcSuperfast: 75, dcFast: 25 },
        emergencyFeatureA: "2 Times",
        batteryHealthA: "Only Health Monitoring",
        costMultiplierB: 1.1,
        rangeMultiplierB: 0.9,
        chargingDistB: { dcSuperfast: 75, dcFast: 25 },
        emergencyFeatureB: "4 Times",
        batteryHealthB: "Only Health Monitoring",
    },
    {
        costMultiplierA: 0.9,
        rangeMultiplierA: 0.8,
        chargingDistA: { dcSuperfast: 25, dcFast: 75 },
        emergencyFeatureA: "2 Times",
        batteryHealthA: "Health Monitoring + Warranty (5 years)",
        costMultiplierB: 0.9,
        rangeMultiplierB: 1.0,
        chargingDistB: { dcSuperfast: 50, dcFast: 50 },
        emergencyFeatureB: "0 Times",
        batteryHealthB: "Only Health Monitoring",
    },
    {
        costMultiplierA: 0.9,
        rangeMultiplierA: 1.0,
        chargingDistA: { dcSuperfast: 50, dcFast: 50 },
        emergencyFeatureA: "4 Times",
        batteryHealthA: "Health Monitoring + Warranty (5 years)",
        costMultiplierB: 0.9,
        rangeMultiplierB: 0.8,
        chargingDistB: { dcSuperfast: 25, dcFast: 75 },
        emergencyFeatureB: "4 Times",
        batteryHealthB: "Only Health Monitoring",
    },
    {
        costMultiplierA: 1.1,
        rangeMultiplierA: 0.8,
        chargingDistA: { dcSuperfast: 50, dcFast: 50 },
        emergencyFeatureA: "4 Times",
        batteryHealthA: "Health Monitoring + Warranty (5 years)",
        costMultiplierB: 1.1,
        rangeMultiplierB: 1.0,
        chargingDistB: { dcSuperfast: 75, dcFast: 25 },
        emergencyFeatureB: "0 Times",
        batteryHealthB: "Only Health Monitoring",
    },
];


const pages = [
    {
        type: 'intro',
        content: `
            <h1>Welcome to the Survey</h1>
            <h2>Investigating Preferences for Battery-as-a-Service Subscription Plans for Electric Vehicles in India</h2>
            <p>Dear Respondent,</p>
            <p>Thank you for taking the time to participate in this survey. This survey is being conducted as a part of the Master's Thesis Project by Madhusudan Hamirwasia, a M. Tech student at Indian Institute of Technology Kharagpur, supervised by Dr. Gajanand Sharma, Professor of Ranbir and Chitra Gupta School of Infrastructure Design and Management, IIT Kharagpur. This survey is solely for academic purposes, and the information collected will be used only for academic research.</p>
            <p>The main aim of the survey is to analyze the subscription plan choice behavior in EV users based on various parameters of the plan.</p>
            <p>The survey consists of five sections:</p>
            <ol>
                <li>General information about the respondent (Demographic Information)</li>
                <li>Behavioral Characteristics</li>
                <li>EV Ownership and Driving Statistics</li>
                <li>EV Usage Matrix and Preference Ranking</li>
                <li>Preference Selection of Subscription Cards (10 choice Sets)</li>
            </ol>
            <p>The whole survey may take 10-15 minutes to complete.</p>
            <p>For any queries, please feel free to email us at:</p>
            <ul>
                <li><a href="mailto:madhusudanhamirwasia@kgpian.iitkgp.ac.in">madhusudanhamirwasia@kgpian.iitkgp.ac.in</a></li>
                <li><a href="mailto:madhusudanhamirwasia@gmail.com">madhusudanhamirwasia@gmail.com</a></li>
            </ul>
            <button class="start-survey-btn" onclick="startSurvey()">Start Survey!</button>

        `
    },

    {
        type: 'form',
        content: `
            <h2>Demographic Information</h2>

            <p>1. What is your age? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="age" value="under_18" required> Under 18</label><br>
                <label><input type="radio" name="age" value="18_25" required> 18-25</label><br>
                <label><input type="radio" name="age" value="26_35" required> 26-35</label><br>
                <label><input type="radio" name="age" value="36_45" required> 36-45</label><br>
                <label><input type="radio" name="age" value="46_60" required> 46-60</label><br>
                <label><input type="radio" name="age" value="above_60" required> Above 60</label>
            </div>

            <p>2. What is your gender? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="gender" value="male" required> Male</label><br>
                <label><input type="radio" name="gender" value="female" required> Female</label><br>
                <label><input type="radio" name="gender" value="other" required> Other</label>
            </div>

            <p>3. What is your employment status? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="employment" value="employed" required> Employed</label><br>
                <label><input type="radio" name="employment" value="self_employed" required> Self-Employed</label><br>
                <label><input type="radio" name="employment" value="unemployed" required> Unemployed</label><br>
                <label><input type="radio" name="employment" value="student" required> Student</label><br>
                <label><input type="radio" name="employment" value="retired" required> Retired</label><br>
                <label><input type="radio" name="employment" value="disabled" required> Disabled</label>
            </div>

            <p>4. How many family members are in your household? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="family_members" value="1" required> 1</label><br>
                <label><input type="radio" name="family_members" value="2" required> 2</label><br>
                <label><input type="radio" name="family_members" value="3" required> 3</label><br>
                <label><input type="radio" name="family_members" value="4" required> 4</label><br>
                <label><input type="radio" name="family_members" value="5" required> 5</label><br>
                <label><input type="radio" name="family_members" value="6" required> 6</label><br>
                <label><input type="radio" name="family_members" value="more_than_6" required> 6+</label>
            </div>

            <p>5. What is your annual household income? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="household_income" value="less_than_3_lakhs" required> Less than ₹3 Lakhs</label><br>
                <label><input type="radio" name="household_income" value="3_6_lakhs" required> ₹3-6 Lakhs</label><br>
                <label><input type="radio" name="household_income" value="6_12_lakhs" required> ₹6-12 Lakhs</label><br>
                <label><input type="radio" name="household_income" value="12_18_lakhs" required> ₹12-18 Lakhs</label><br>
                <label><input type="radio" name="household_income" value="more_than_18_lakhs" required> More than ₹18 Lakhs</label>
            </div>

            <p>6. What is your highest education level? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="education" value="no_schooling" required> Did not attend school</label><br>
                <label><input type="radio" name="education" value="high_school" required> High-School</label><br>
                <label><input type="radio" name="education" value="intermediate" required> Intermediate</label><br>
                <label><input type="radio" name="education" value="undergraduate" required> Undergraduate</label><br>
                <label><input type="radio" name="education" value="postgraduate" required> Postgraduate</label>
            </div>

            <p>7. What is your state of residence? <span style="color: red;">*</span></p>
            <select name="state" required>
                <option value="">Select your state</option>
                <option value="andaman_nicobar">Andaman & Nicobar Islands</option>
                <option value="andhra_pradesh">Andhra Pradesh</option>
                <option value="arunachal_pradesh">Arunachal Pradesh</option>
                <option value="assam">Assam</option>
                <option value="bihar">Bihar</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="chhattisgarh">Chhattisgarh</option>
                <option value="dadra_nagar_haveli">Dadra and Nagar Haveli</option>
                <option value="daman_diu">Daman and Diu</option>
                <option value="delhi">Delhi</option>
                <option value="goa">Goa</option>
                <option value="gujarat">Gujarat</option>
                <option value="haryana">Haryana</option>
                <option value="himachal_pradesh">Himachal Pradesh</option>
                <option value="jammu_kashmir">Jammu and Kashmir</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
                <option value="ladakh">Ladakh</option>
                <option value="lakshadweep">Lakshadweep</option>
                <option value="madhya_pradesh">Madhya Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="manipur">Manipur</option>
                <option value="meghalaya">Meghalaya</option>
                <option value="mizoram">Mizoram</option>
                <option value="nagaland">Nagaland</option>
                <option value="odisha">Odisha</option>
                <option value="puducherry">Puducherry</option>
                <option value="punjab">Punjab</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="sikkim">Sikkim</option>
                <option value="tamil_nadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
                <option value="tripura">Tripura</option>
                <option value="uttar_pradesh">Uttar Pradesh</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="west_bengal">West Bengal</option>
            </select>
       
         `
    },

    {
        type: 'form',
        content: `
            <h2>Behavioral Characteristics</h2>
            <p>To better understand your preferences and lifestyle choices, please answer the following questions about your daily habits and priorities. Choose the option which is <b>most relevant to you</b>.</p>
            
            <!-- Question 1 -->
            <p>1. How do you typically choose a mode of transportation for daily commutes? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="transportation_choice" value="walk_cycle" required> I walk or cycle, avoiding transport costs entirely.</label><br>
                <label><input type="radio" name="transportation_choice" value="cheapest" required> The cheapest option available.</label><br>
                <label><input type="radio" name="transportation_choice" value="balance" required> A balance between cost and convenience.</label><br>
                <label><input type="radio" name="transportation_choice" value="comfortable" required> The most comfortable option, regardless of cost.</label>
            </div>
    
            <!-- Question 2 -->
            <p>2. When purchasing everyday groceries, what do you prioritize? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="grocery_priority" value="bulk_savings" required> Bulk purchases to save over time.</label><br>
                <label><input type="radio" name="grocery_priority" value="discounts" required> Discounts and deals.</label><br>
                <label><input type="radio" name="grocery_priority" value="brand_quality" required> Brand quality within a budget.</label><br>
                <label><input type="radio" name="grocery_priority" value="premium" required> Premium or organic products.</label>
            </div>
    
            <!-- Question 3 -->
            <p>3. How do you budget for leisure activities? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="leisure_budget" value="free_activities" required> I seek out free activities (e.g., parks, community events).</label><br>
                <label><input type="radio" name="leisure_budget" value="low_cost" required> I mostly avoid it or choose low-cost options.</label><br>
                <label><input type="radio" name="leisure_budget" value="value_for_money" required> I choose based on value for money.</label><br>
                <label><input type="radio" name="leisure_budget" value="experiences" required> I prioritize experiences over cost.</label>
            </div>
    
            <!-- Question 4 -->
            <p>4. What influences your decision to buy electronic devices? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="electronics_choice" value="refurbished" required> Refurbished or second-hand devices.</label><br>
                <label><input type="radio" name="electronics_choice" value="budget_friendly" required> Budget-friendly models with basic features.</label><br>
                <label><input type="radio" name="electronics_choice" value="balanced" required> Balanced cost and features.</label><br>
                <label><input type="radio" name="electronics_choice" value="high_end" required> High-end models with advanced features.</label>
            </div>
    
            <!-- Question 5 -->
            <p>5. How do you handle waste management at home? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="waste_management" value="community_programs" required> Participate in community-driven waste reduction programs.</label><br>
                <label><input type="radio" name="waste_management" value="recycle_compost" required> Actively recycle and compost.</label><br>
                <label><input type="radio" name="waste_management" value="occasional_recycling" required> Recycle occasionally.</label><br>
                <label><input type="radio" name="waste_management" value="no_segregation" required> Dispose of waste without segregation.</label>
            </div>
    
            <!-- Question 6 -->
            <p>6. What’s your stance on using reusable items (e.g., bags, water bottles)? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="reusables" value="advocate" required> Advocate for others to use them and actively spread awareness.</label><br>
                <label><input type="radio" name="reusables" value="always_prefer" required> Always prefer them.</label><br>
                <label><input type="radio" name="reusables" value="occasional_use" required> Use them occasionally if convenient.</label><br>
                <label><input type="radio" name="reusables" value="rarely_use" required> Rarely use them.</label>
            </div>
    
            <!-- Question 7 -->
            <p>7. How often do you use public transport instead of personal vehicles? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="public_transport" value="exclusively" required> Exclusively rely on public transport.</label><br>
                <label><input type="radio" name="public_transport" value="frequently" required> Frequently, to reduce my carbon footprint.</label><br>
                <label><input type="radio" name="public_transport" value="sometimes" required> Sometimes, when it’s convenient.</label><br>
                <label><input type="radio" name="public_transport" value="never" required> Never, I prefer private transport.</label>
            </div>
    
            <!-- Question 8 -->
            <p>8. What motivates your choice of energy-efficient appliances? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="energy_efficiency" value="prioritize_educate" required> I prioritize energy efficiency and educate others about its benefits.</label><br>
                <label><input type="radio" name="energy_efficiency" value="prioritize" required> I prioritize energy efficiency over cost.</label><br>
                <label><input type="radio" name="energy_efficiency" value="consider_if_cheap" required> I consider efficiency if it doesn’t cost much more.</label><br>
                <label><input type="radio" name="energy_efficiency" value="not_prioritize" required> I don’t prioritize energy efficiency.</label>
            </div>
        `
    },
    
    {
        type: 'form',
        content: `
            <h2>EV Ownership and Driving Statistics</h2>
    
            <!-- Question 1 -->
            <p>1. Which EVs do you own? <span style="color: red;">*</span></p>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="text-align: left;">EV Type</th>
                        <th>0</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>EV 2 Wheeler</td>
                        <td><input type="radio" name="ev_2wheeler" value="0" required></td>
                        <td><input type="radio" name="ev_2wheeler" value="1" required></td>
                        <td><input type="radio" name="ev_2wheeler" value="2" required></td>
                        <td><input type="radio" name="ev_2wheeler" value="3" required></td>
                        <td><input type="radio" name="ev_2wheeler" value="4" required></td>
                        <td><input type="radio" name="ev_2wheeler" value="5" required></td>
                    </tr>
                    <tr>
                        <td>EV 4 Wheeler</td>
                        <td><input type="radio" name="ev_4wheeler" value="0" required></td>
                        <td><input type="radio" name="ev_4wheeler" value="1" required></td>
                        <td><input type="radio" name="ev_4wheeler" value="2" required></td>
                        <td><input type="radio" name="ev_4wheeler" value="3" required></td>
                        <td><input type="radio" name="ev_4wheeler" value="4" required></td>
                        <td><input type="radio" name="ev_4wheeler" value="5" required></td>
                    </tr>
                </tbody>
            </table>
            <!-- Question 2 -->
            <p>2. What is your primary EV? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="primary_ev" value="4_wheeler" required> 4 Wheeler</label><br>
                <label><input type="radio" name="primary_ev" value="2_wheeler" required> 2 Wheeler</label>
            </div>
    
            <!-- Question 3 -->
            <p>3. What is your primary EV model? <span style="color: red;">*</span></p>
            <select name="primary_ev_model" id="primary-ev-model" required>
                <!-- Dropdown options will be populated dynamically -->
            </select>
    
            <!-- Question 4 -->
            <p>4. What is your daily average driving distance (in km)? <span style="color: red;">*</span></p>
<div>
    <input 
        type="number" 
        name="driving_distance" 
        placeholder="Enter distance in km" 
        min="0" 
        required 
        style="width: 100%; padding: 5px; font-size: 1rem;" 
    />
</div>

    
            <!-- Question 5 -->
            <p>5. Where do you mostly charge your EV? <span style="color: red;">*</span></p>
            <div>
                <label><input type="radio" name="charging_location" value="home" required> Home</label><br>
                <label><input type="radio" name="charging_location" value="society" required> Society Charging Area</label><br>
                <label><input type="radio" name="charging_location" value="office" required> Office/Workspace</label><br>
                <label><input type="radio" name="charging_location" value="public" required> Public Charging Station</label><br>
                <label><input type="radio" name="charging_location" value="other" required> Other</label>
            </div>
    
            <!-- Question 6 (Conditional) -->
            <div id="multiple-ev-question" style="display: none;">
    <p>
        6. If you own multiple EVs, what is the average daily driving distance of all EVs combined (in km)?
        <span id="asterisk-question-6" style="color: red; display: none;">*</span>
    </p>
    <input type="number" name="daily_avg_all_evs" placeholder="Enter average daily distance in km of all EVs">
    </div>
        `
    },   
    {
        type: 'form',
        content: `
            <h2>EV Usage Matrix and Preference Ranking</h2>
    
            <!-- EV Usage Matrix -->
            <h3>Usage Matrix</h3>
            <p>Please select the frequency of each type of usage for your primary EV: <span style="color: red;">*</span></p>
            <div class="table-container">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th style="text-align: left;">Purpose</th>
                            <th>Daily</th>
                            <th>2-3 times a week</th>
                            <th>Once a week</th>
                            <th>Fortnightly</th>
                            <th>Monthly</th>
                            <th>Rarely</th>
                            <th>Never</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Work</td>
                            <td><input type="radio" name="usage_work" value="daily" required></td>
                            <td><input type="radio" name="usage_work" value="2-3 times a week" required></td>
                            <td><input type="radio" name="usage_work" value="once a week" required></td>
                            <td><input type="radio" name="usage_work" value="fortnightly" required></td>
                            <td><input type="radio" name="usage_work" value="monthly" required></td>
                            <td><input type="radio" name="usage_work" value="rarely" required></td>
                            <td><input type="radio" name="usage_work" value="never" required></td>
                        </tr>
                    <tr>
                        <td>Market (Shopping)</td>
                        <td><input type="radio" name="usage_market" value="daily" required></td>
                        <td><input type="radio" name="usage_market" value="2-3 times a week" required></td>
                        <td><input type="radio" name="usage_market" value="once a week" required></td>
                        <td><input type="radio" name="usage_market" value="fortnightly" required></td>
                        <td><input type="radio" name="usage_market" value="monthly" required></td>
                        <td><input type="radio" name="usage_market" value="rarely" required></td>
                        <td><input type="radio" name="usage_market" value="never" required></td>
                    </tr>
                    <tr>
                        <td>Entertainment</td>
                        <td><input type="radio" name="usage_shopping" value="daily" required></td>
                        <td><input type="radio" name="usage_shopping" value="2-3 times a week" required></td>
                        <td><input type="radio" name="usage_shopping" value="once a week" required></td>
                        <td><input type="radio" name="usage_shopping" value="fortnightly" required></td>
                        <td><input type="radio" name="usage_shopping" value="monthly" required></td>
                        <td><input type="radio" name="usage_shopping" value="rarely" required></td>
                        <td><input type="radio" name="usage_shopping" value="never" required></td>
                    </tr>
                    <tr>
                        <td>Outstation Travel</td>
                        <td><input type="radio" name="usage_outstation" value="daily" required></td>
                        <td><input type="radio" name="usage_outstation" value="2-3 times a week" required></td>
                        <td><input type="radio" name="usage_outstation" value="once a week" required></td>
                        <td><input type="radio" name="usage_outstation" value="fortnightly" required></td>
                        <td><input type="radio" name="usage_outstation" value="monthly" required></td>
                        <td><input type="radio" name="usage_outstation" value="rarely" required></td>
                        <td><input type="radio" name="usage_outstation" value="never" required></td>
                    </tr>
                </tbody>
            </table>
    
             </div>

        <!-- Preference Ranking -->
<h3>Preference Ranking</h3>
<p>Please rank the following parameters based on their importance to you: <span style="color: red;">*</span></p>
<div class="table-container" style="overflow-x: auto; border: 1px solid #ccc; padding: 10px; margin-bottom: 20px;">
    <table style="width: 100%; border-collapse: collapse; min-width: 800px;">
        <thead>
            <tr>
                <th style="text-align: left;">Parameter</th>
                <th>Very Important</th>
                <th>Fairly Important</th>
                <th>Important</th>
                <th>Slightly Important</th>
                <th>Least Important</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>DC Fast Charging</td>
                <td><input type="radio" name="ranking_dc_fast_charging" value="very important" required></td>
                <td><input type="radio" name="ranking_dc_fast_charging" value="fairly important" required></td>
                <td><input type="radio" name="ranking_dc_fast_charging" value="important" required></td>
                <td><input type="radio" name="ranking_dc_fast_charging" value="slightly important" required></td>
                <td><input type="radio" name="ranking_dc_fast_charging" value="least important" required></td>
            </tr>
            <tr>
                <td>Unlimited AC Charging</td>
                <td><input type="radio" name="ranking_unlimited_ac_charging" value="very important" required></td>
                <td><input type="radio" name="ranking_unlimited_ac_charging" value="fairly important" required></td>
                <td><input type="radio" name="ranking_unlimited_ac_charging" value="important" required></td>
                <td><input type="radio" name="ranking_unlimited_ac_charging" value="slightly important" required></td>
                <td><input type="radio" name="ranking_unlimited_ac_charging" value="least important" required></td>
            </tr>
            <tr>
                <td>Access to Battery Swapping</td>
                <td><input type="radio" name="ranking_battery_swapping" value="very important" required></td>
                <td><input type="radio" name="ranking_battery_swapping" value="fairly important" required></td>
                <td><input type="radio" name="ranking_battery_swapping" value="important" required></td>
                <td><input type="radio" name="ranking_battery_swapping" value="slightly important" required></td>
                <td><input type="radio" name="ranking_battery_swapping" value="least important" required></td>
            </tr>
            <tr>
                <td>24/7 Emergency Charging</td>
                <td><input type="radio" name="ranking_emergency_charging" value="very important" required></td>
                <td><input type="radio" name="ranking_emergency_charging" value="fairly important" required></td>
                <td><input type="radio" name="ranking_emergency_charging" value="important" required></td>
                <td><input type="radio" name="ranking_emergency_charging" value="slightly important" required></td>
                <td><input type="radio" name="ranking_emergency_charging" value="least important" required></td>
            </tr>
            <tr>
                <td>Battery Rental Model</td>
                <td><input type="radio" name="ranking_battery_rental" value="very important" required></td>
                <td><input type="radio" name="ranking_battery_rental" value="fairly important" required></td>
                <td><input type="radio" name="ranking_battery_rental" value="important" required></td>
                <td><input type="radio" name="ranking_battery_rental" value="slightly important" required></td>
                <td><input type="radio" name="ranking_battery_rental" value="least important" required></td>
            </tr>
        </tbody>
    </table>
</div>

            
             <h3>Approximate EV Charging Costs</h3>
        <p>
            Below is the approximate price of EV charging at your home and at a public charging station based on your given answers:
        </p>
        <ul>
     <div>
    <p id="home-charging-cost">(Home) Domestic AC Charging: Rs. 0</p> 
    <p id="public-charging-cost">Public DC Charging Station: Rs. 0</p> 
</div>

<div>
    <p id="agreement-label">Do you agree?</p> <!-- Label with dynamic asterisk -->
    <label><input type="radio" name="charging_cost_agreement" value="yes" required> Yes</label>
    <label><input type="radio" name="charging_cost_agreement" value="no" required> No</label>
</div>

<div id="custom-expense-container" style="display: none; margin-top: 10px;">
    <label for="custom-expense">Please specify your monthly EV charging expense (Rs.): <span style="color: red;">*</span></label>
    <input type="number" id="custom-expense" name="custom_expense" placeholder="Enter amount in Rs." min="0">
</div>


    
        `
    },

    {
        type: "choice_cards",
        content: "" // This is dynamically generated in renderChoiceCardPage
    }


    {
    type: 'thank_you',
    content: `
        <h2>Thank You!</h2>
        <p>Thank you for participating. Your participation means a lot to us.</p>
        <p>For any query, please feel free to mail us at:</p>
        <ul>
            <li><a href="mailto:madhusudanhamirwasia@kgpian.iitkgp.ac.in">madhusudanhamirwasia@kgpian.iitkgp.ac.in</a></li>
            <li><a href="mailto:madhusudanhamirwasia@gmail.com">madhusudanhamirwasia@gmail.com</a></li>
        </ul>
        <button onclick="submitSurvey()">Submit Your Responses</button>
    `
}
    
];

let currentPage = 0;

const evMileage = {
  "Audi e-tron SUV and Sportback (91 kWh)": { "range": 484, "battery": 91 },
  "BMW iX (76.6 kWh)": { "range": 425, "battery": 76.6 },
  "BYD Atto 3 (60.48 kWh)": { "range": 521, "battery": 60.48 },
  "BYD eMax 7 (55.4 kWh)": { "range": 420, "battery": 55.4 },
  "BYD eMax 8 (71.8 kWh)": { "range": 530, "battery": 71.8 },
  "BYD E6 (71.7 kWh)": { "range": 520, "battery": 71.7 },
  "BYD Seal (61.44 kWh)": { "range": 510, "battery": 61.44 },
  "BYD Seal (82.56 kWh)": { "range": 650, "battery": 82.56 },
  "Citroen E-C3 (29.2 kWh)": { "range": 246, "battery": 29.2 },
  "Hyundai Ioniq 5 (72.6 kWh)": { "range": 631, "battery": 72.6 },
  "Hyundai Kona Electric (39.2 kWh)": { "range": 452, "battery": 39.2 },
  "Jaguar I-Pace (90 kWh)": { "range": 470, "battery": 90 },
  "Kia EV6 (77.4 kWh)": { "range": 708, "battery": 77.4 },
  "Mahindra BE 6e (68.2 kWh)": { "range": 682, "battery": 68.2 },
  "Mahindra eVerito (18.55 kWh)": { "range": 140, "battery": 18.55 },
  "Mahindra XEV 9e (54.2 kWh)": { "range": 542, "battery": 54.2 },
  "Mahindra XUV400 EV (34.5 kWh)": { "range": 375, "battery": 34.5 },
  "Mahindra XUV400 EV (39.5 kWh)": { "range": 456, "battery": 39.5 },
  "Mercedes-Benz EQC (80 kWh)": { "range": 414, "battery": 80 },
  "Mercedes-Benz EQE SUV (90.56 kWh)": { "range": 550, "battery": 90.56 },
  "MG Comet EV (17.3 kWh)": { "range": 230, "battery": 17.3 },
  "MG ZS EV (50.3 kWh)": { "range": 461, "battery": 50.3 },
  "Nissan Leaf (40 kWh)": { "range": 364, "battery": 40 },
  "Porsche Taycan (71 kWh)": { "range": 395, "battery": 71 },
  "Tata Curvv EV (45 kWh)": { "range": 430, "battery": 45 },
  "Tata Curvv EV (55 kWh)": { "range": 502, "battery": 55 },
  "Tata Nexon EV (30 kWh)": { "range": 275, "battery": 30 },
  "Tata Nexon EV (40.5 kWh)": { "range": 390, "battery": 40.5 },
  "Tata Nexon EV (45 kWh)": { "range": 489, "battery": 45 },
  "Tata Punch EV (25 kWh)": { "range": 265, "battery": 25 },
  "Tata Punch EV (35 kWh)": { "range": 365, "battery": 35 },
  "Tata Tigor EV (26 kWh)": { "range": 315, "battery": 26 },
  "Tata Tiago EV (19.2 kWh)": { "range": 221, "battery": 19.2 },
  "Tata Tiago EV (24 kWh)": { "range": 275, "battery": 24 },
  "Volvo C40 (78 kWh)": { "range": 530, "battery": 78 },
  "Volvo EC40 (69 kWh)": { "range": 482, "battery": 69 },
  "Volvo EC41 (78 kWh)": { "range": 556, "battery": 78 },
  "Volvo EC42 (82 kWh)": { "range": 547, "battery": 82 },
  "Volvo EC43 (82 kWh)": { "range": 542, "battery": 82 },
  "Volvo EX40 (69 kWh)": { "range": 476, "battery": 69 },
  "Volvo EX41 (78 kWh)": { "range": 552, "battery": 78 },
  "Volvo EX42 (82 kWh)": { "range": 534, "battery": 82 },
  "Volvo EX43 (82 kWh)": { "range": 525, "battery": 82 },
    "Any Other EV 4 Wheeler": { range: 450, battery: 56 },
    
        "Ampere Magnus EX (2.3 kWh)": { "range": 121, "battery": 2.3 },
        "Ampere Reo Li Plus (1.8 kWh)": { "range": 60, "battery": 1.8 },
        "Ather 450S (2.9 kWh)": { "range": 115, "battery": 2.9 },
        "Ather 450X (3.7 kWh)": { "range": 146, "battery": 3.7 },
        "Avon E Scoot 504 (0.96 kWh)": { "range": 65, "battery": 0.96 },
        "Bajaj Chetak (3 kWh)": { "range": 108, "battery": 3 },
        "BattRE Storie (3.1 kWh)": { "range": 132, "battery": 3.1 },
        "Benling Aura (2.5 kWh)": { "range": 120, "battery": 2.5 },
        "Bounce Infinity E1 (1.9 kWh)": { "range": 85, "battery": 1.9 },
        "Hero Electric Atria (1.54 kWh)": { "range": 85, "battery": 1.54 },
        "Hero Electric Dash (1.44 kWh)": { "range": 60, "battery": 1.44 },
        "Hero Electric Flash E2 Li (1 kWh)": { "range": 65, "battery": 1 },
        "Hero Electric NYX (1.53 kWh)": { "range": 82, "battery": 1.53 },
        "Hero Electric Optima CX (1.92 kWh)": { "range": 82, "battery": 1.92 },
        "Kinetic Green Zing (1.8 kWh)": { "range": 100, "battery": 1.8 },
        "Komaki Ranger (4 kWh)": { "range": 200, "battery": 4 },
        "Lectrix EV LXS G 2.0 (1.56 kWh)": { "range": 80, "battery": 1.56 },
        "Odysse Evoqis (4.32 kWh)": { "range": 140, "battery": 4.32 },
        "Okinawa Lite (1.25 kWh)": { "range": 60, "battery": 1.25 },
        "Okinawa PraisePro (2 kWh)": { "range": 88, "battery": 2 },
        "Okinawa Ridge Plus (1.75 kWh)": { "range": 84, "battery": 1.75 },
        "Okinawa i-Praise (3.3 kWh)": { "range": 139, "battery": 3.3 },
        "Ola S1 Air (2.5 kWh)": { "range": 151, "battery": 2.5 },
        "Ola S1 Pro (4 kWh)": { "range": 181, "battery": 4 },
        "PURE EV Epluto 7G (2.5 kWh)": { "range": 90, "battery": 2.5 },
        "Revolt RV400 (3.24 kWh)": { "range": 150, "battery": 3.24 },
        "River Indie (4 kWh)": { "range": 120, "battery": 4 },
        "Simple Dot One (4.8 kWh)": { "range": 151, "battery": 4.8 },
        "Simple One (4.8 kWh)": { "range": 236, "battery": 4.8 },
        "TVS iQube ST (4.56 kWh)": { "range": 145, "battery": 4.56 },
        "Ultraviolette F77 (10.3 kWh)": { "range": 307, "battery": 10.3 },
        "Vida V1 (3.94 kWh)": { "range": 110, "battery": 3.94 },
        "Yulu Wynn (0.9 kWh)": { "range": 68, "battery": 0.9 },
        "Zelio Eeva (1.92 kWh)": { "range": 120, "battery": 1.92 },
    "Any Other EV 2 Wheeler": { range: 100, battery: 3 }
};

const electricityRates = {
    "Andaman & Nicobar Islands": 5.85,
    "Andhra Pradesh": 5.825,
    "Arunachal Pradesh": 3.325,
    "Assam": 6.45,
    "Bihar": 7.075,
    "Chandigarh": 3.7,
    "Chhattisgarh": 5.8,
    "Dadra and Nagar Haveli": 2.5,
    "Daman and Diu": 2.5,
    "Delhi": 5.5,
    "Goa": 3.05,
    "Gujarat": 4.125,
    "Haryana": 4.55,
    "Himachal Pradesh": 4.9,
    "Jammu and Kashmir": 2.9,
    "Jharkhand": 6,
    "Karnataka": 6.75,
    "Kerala": 5.825,
    "Ladakh": 2.9,
    "Lakshadweep": 4.3,
    "Madhya Pradesh": 5.895,
    "Maharashtra": 8.96,
    "Manipur": 5.925,
    "Meghalaya": 5.1,
    "Mizoram": 6.55,
    "Nagaland": 6.05,
    "Odisha": 4.6,
    "Puducherry": 4.175,
    "Punjab": 5.395,
    "Rajasthan": 5.9,
    "Sikkim": 3,
    "Tamil Nadu": 6.625,
    "Telangana": 6.55,
    "Tripura": 5.685,
    "Uttar Pradesh": 5.175,
    "Uttarakhand": 4.725,
    "West Bengal": 7.335
};

// Rounds value to the nearest multiple of 0
function roundToNearest10(value) {
    return Math.round(value / 10) * 10;
}



// Calculate total kWh usage based on monthly range
function calculateMonthlyKWh(monthlyRange, certifiedMileage, batteryPack) {
    return ((((monthlyRange / 70) * 100) / certifiedMileage) * batteryPack);
}

// Calculate public or home charging cost
function calculateChargingCost(totalKWh, rate) {
    return roundToNearest10(totalKWh * rate);
}



// Start the survey
function startSurvey() {
    try {
        console.log("Starting the survey...");
        localStorage.clear(); // Clear previous survey data
        currentPage = 1; // Move to the first form page
        renderPage(); // Render the first page
    } catch (error) {
        console.error("Error in startSurvey:", error);
        alert("An error occurred while starting the survey. Please refresh the page.");
    }
}


function renderPage() {
    const formContent = document.getElementById('form-content');
    formContent.innerHTML = pages[currentPage].content;

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Handle navigation buttons
    if (currentPage === 0) {
        prevBtn.style.display = 'none'; // Hide Previous button on the intro page
        nextBtn.style.display = 'none'; // Hide Next button on the intro page
    } else {
        prevBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
        nextBtn.innerText = currentPage === pages.length - 1 ? 'Submit' : 'Next';
    }

    // Populate EV Models Dropdown (Page 4, Question 3)
    if (currentPage === 3) {
        const modelDropdown = document.getElementById('primary-ev-model');
        const primaryEVRadios = document.querySelectorAll('input[name="primary_ev"]');

        const models = {
            "4_wheeler": [

                    "Audi e-tron SUV and Sportback (91 kWh)",
                    "BMW iX (76.6 kWh)",
                    "BYD Atto 3 (60.48 kWh)",
                    "BYD eMax 7 (55.4 kWh)",
                    "BYD eMax 8 (71.8 kWh)",
                    "BYD E6 (71.7 kWh)",
                    "BYD Seal (61.44 kWh)",
                    "BYD Seal (82.56 kWh)",
                    "Citroen E-C3 (29.2 kWh)",
                    "Hyundai Ioniq 5 (72.6 kWh)",
                    "Hyundai Kona Electric (39.2 kWh)",
                    "Jaguar I-Pace (90 kWh)",
                    "Kia EV6 (77.4 kWh)",
                    "Mahindra BE 6e (68.2 kWh)",
                    "Mahindra eVerito (18.55 kWh)",
                    "Mahindra XEV 9e (54.2 kWh)",
                    "Mahindra XUV400 EV (34.5 kWh)",
                    "Mahindra XUV400 EV (39.5 kWh)",
                    "Mercedes-Benz EQC (80 kWh)",
                    "Mercedes-Benz EQE SUV (90.56 kWh)",
                    "MG Comet EV (17.3 kWh)",
                    "MG ZS EV (50.3 kWh)",
                    "Nissan Leaf (40 kWh)",
                    "Porsche Taycan (71 kWh)",
                    "Tata Curvv EV (45 kWh)",
                    "Tata Curvv EV (55 kWh)",
                    "Tata Nexon EV (30 kWh)",
                    "Tata Nexon EV (40.5 kWh)",
                    "Tata Nexon EV (45 kWh)",
                    "Tata Punch EV (25 kWh)",
                    "Tata Punch EV (35 kWh)",
                    "Tata Tigor EV (26 kWh)",
                    "Tata Tiago EV (19.2 kWh)",
                    "Tata Tiago EV (24 kWh)",
                    "Volvo C40 (78 kWh)",
                    "Volvo EC40 (69 kWh)",
                    "Volvo EC41 (78 kWh)",
                    "Volvo EC42 (82 kWh)",
                    "Volvo EC43 (82 kWh)",
                    "Volvo EX40 (69 kWh)",
                    "Volvo EX41 (78 kWh)",
                    "Volvo EX42 (82 kWh)",
                    "Volvo EX43 (82 kWh)",

                "Any Other EV 4 Wheeler"
            ],
            
            "2_wheeler": [

                
                    "Ampere Magnus EX (2.3 kWh)",
                    "Ampere Reo Li Plus (1.8 kWh)",
                    "Ather 450S (2.9 kWh)",
                    "Ather 450X (3.7 kWh)",
                    "Avon E Scoot 504 (0.96 kWh)",
                    "Bajaj Chetak (3 kWh)",
                    "BattRE Storie (3.1 kWh)",
                    "Benling Aura (2.5 kWh)",
                    "Bounce Infinity E1 (1.9 kWh)",
                    "Hero Electric Atria (1.54 kWh)",
                    "Hero Electric Dash (1.44 kWh)",
                    "Hero Electric Flash E2 Li (1 kWh)",
                    "Hero Electric NYX (1.53 kWh)",
                    "Hero Electric Optima CX (1.92 kWh)",
                    "Kinetic Green Zing (1.8 kWh)",
                    "Komaki Ranger (4 kWh)",
                    "Lectrix EV LXS G 2.0 (1.56 kWh)",
                    "Odysse Evoqis (4.32 kWh)",
                    "Okinawa Lite (1.25 kWh)",
                    "Okinawa PraisePro (2 kWh)",
                    "Okinawa Ridge Plus (1.75 kWh)",
                    "Okinawa i-Praise (3.3 kWh)",
                    "Ola S1 Air (2.5 kWh)",
                    "Ola S1 Pro (4 kWh)",
                    "PURE EV Epluto 7G (2.5 kWh)",
                    "Revolt RV400 (3.24 kWh)",
                    "River Indie (4 kWh)",
                    "Simple Dot One (4.8 kWh)",
                    "Simple One (4.8 kWh)",
                    "TVS iQube ST (4.56 kWh)",
                    "Ultraviolette F77 (10.3 kWh)",
                    "Vida V1 (3.94 kWh)",
                    "Yulu Wynn (0.9 kWh)",
                    "Zelio Eeva (1.92 kWh)",
                  
                 "Any Other EV 2 Wheeler"
                
                ]
        };

        primaryEVRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                const selectedType = radio.value;
                modelDropdown.innerHTML = models[selectedType]
                    .map(model => `<option value="${model}">${model}</option>`)
                    .join('');
            });
        });
    }

    // Conditional display for Question 6 (Page 4)
    if (currentPage === 3) {
        const ev2Radios = document.querySelectorAll('input[name="ev_2wheeler"]');
        const ev4Radios = document.querySelectorAll('input[name="ev_4wheeler"]');
        const multiEVQuestion = document.getElementById('multiple-ev-question');
        const multiEVInput = document.querySelector('input[name="daily_avg_all_evs"]');
        const asterisk = document.getElementById('asterisk-question-6');

        function updateQuestion6Visibility() {
            const ev2Count = parseInt(document.querySelector('input[name="ev_2wheeler"]:checked')?.value || 0);
            const ev4Count = parseInt(document.querySelector('input[name="ev_4wheeler"]:checked')?.value || 0);

            if (ev2Count + ev4Count > 1) {
                multiEVQuestion.style.display = 'block';
                multiEVInput.setAttribute('required', 'required');
                asterisk.style.display = 'inline';
            } else {
                multiEVQuestion.style.display = 'none';
                multiEVInput.removeAttribute('required');
                asterisk.style.display = 'none';
            }
        }

        ev2Radios.forEach(radio => radio.addEventListener('change', updateQuestion6Visibility));
        ev4Radios.forEach(radio => radio.addEventListener('change', updateQuestion6Visibility));
    }


    if (currentPage === 4) { // Preference Matrix and expense page
        const surveyData = JSON.parse(localStorage.getItem('surveyData')) || {};
        const dailyAvgDistance = parseInt(surveyData.driving_distance, 10) || 30; // Default to 30 km if not set
        const monthlyRange = dailyAvgDistance * 36; // Monthly average range
    
        const selectedModel = surveyData.primary_ev_model || "Any Other EV 4 Wheeler";
        const evDetails = evMileage[selectedModel] || { range: 450, battery: 50 };
    
        const totalKWh = calculateMonthlyKWh(monthlyRange, evDetails.range, evDetails.battery);
    
        const publicChargingCost = calculateChargingCost(totalKWh, 15); // Public rate: 15 Rs/kWh
        const stateRate = electricityRates[surveyData.state] || 5.5; // Default state rate
        const homeChargingCost = calculateChargingCost(totalKWh, stateRate); // State rate
    
        document.getElementById('home-charging-cost').innerText = `(Home) Domestic AC Charging: ₹${homeChargingCost}`;
        document.getElementById('public-charging-cost').innerText = `Public DC Charging Station: ₹${publicChargingCost}`;
    
    
        // Ensure "Do you agree?" text has an asterisk
        const agreementLabel = document.getElementById('agreement-label');
        agreementLabel.innerHTML = 'Do you agree? <span style="color: red;">*</span>';
    
        // Show custom expense field if user selects "No"
        const agreementRadios = document.querySelectorAll('input[name="charging_cost_agreement"]');
        const customExpenseContainer = document.getElementById('custom-expense-container');
        const customExpenseInput = document.getElementById('custom-expense');
    
        agreementRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.value === 'no') {
                    customExpenseContainer.style.display = 'block';
                    customExpenseInput.setAttribute('required', 'required'); // Make it mandatory
                } else {
                    customExpenseContainer.style.display = 'none';
                    customExpenseInput.removeAttribute('required'); // Remove requirement
                    customExpenseInput.value = ''; // Clear the input to avoid validation issues
                }
            });
        });
    }
    if (currentPage === 5) {
        renderChoiceCardPage(0); // Start the choice cards
        return; // Stop further rendering for this page
    }
    
}



// Render the choice card page
function renderChoiceCardPage(choiceIndex) {
    try {
        if (choiceIndex >= totalChoiceCards || choiceIndex < 0) {
            throw new Error(`Invalid choiceIndex: ${choiceIndex}`);
        }

        const choiceData = choiceCardData[choiceIndex];
        if (!choiceData) {
            throw new Error(`Choice data not found for index: ${choiceIndex}`);
        }

        const surveyData = JSON.parse(localStorage.getItem("surveyData")) || {};
        const dailyAvgDistance = parseInt(surveyData.driving_distance, 10) || 30;
        const monthlyRange = dailyAvgDistance * 36;
        const selectedModel = surveyData.primary_ev_model || "Any Other EV 4 Wheeler";
        const evDetails = evMileage[selectedModel] || { range: 450, battery: 50 };
        const totalKWh = calculateMonthlyKWh(monthlyRange, evDetails.range, evDetails.battery);

        const costC = calculateChargingCost(totalKWh, 15);

        function getEmoji(percentage, isCost) {
            if (percentage === 0) return `➖ same`;
            const color = isCost ? "blue" : percentage > 0 ? "green" : "red";
            const direction = percentage > 0 ? "🔼" : "🔽";
            const repeat = Math.abs(percentage) === 20 ? 2 : 1;
            return `<span style="color: ${color};">${direction.repeat(repeat)}</span> ${percentage}%`;
        }

        function getParamEmoji(param, value) {
            if (param === "chargeDistribution") {
                return value.dcSuperfast === 75
                    ? "⚡⚡⚡"
                    : value.dcSuperfast === 50
                    ? "⚡⚡"
                    : "⚡";
            }
            if (param === "emergencyFeature") {
                return value === "0 Times" ? "❌" : value === "2 Times" ? "2️⃣" : "4️⃣";
            }
            if (param === "batteryHealth") {
                return value.includes("Warranty") ? "🩺🛡️" : "🩺";
            }
            return "";
        }

        const costA = calculateChargingCost(totalKWh * choiceData.costMultiplierA, 15);
        const rangeA = roundToNearest10(choiceData.rangeMultiplierA * monthlyRange);
        const costChangeA = Math.round(((costA - costC) / costC) * 100);
        const rangeChangeA = Math.round(((rangeA - monthlyRange) / monthlyRange) * 100);
        const distA = `
            ${getParamEmoji("chargeDistribution", choiceData.chargingDistA)}<br>
            DC Superfast: ${roundToNearest10(rangeA * (choiceData.chargingDistA.dcSuperfast / 100))} km<br>
            DC Fast: ${roundToNearest10(rangeA * (choiceData.chargingDistA.dcFast / 100))} km<br>
            AC Charging: Unlimited
        `;

        const costB = calculateChargingCost(totalKWh * choiceData.costMultiplierB, 15);
        const rangeB = roundToNearest10(choiceData.rangeMultiplierB * monthlyRange);
        const costChangeB = Math.round(((costB - costC) / costC) * 100);
        const rangeChangeB = Math.round(((rangeB - monthlyRange) / monthlyRange) * 100);
        const distB = `
            ${getParamEmoji("chargeDistribution", choiceData.chargingDistB)}<br>
            DC Superfast: ${roundToNearest10(rangeB * (choiceData.chargingDistB.dcSuperfast / 100))} km<br>
            DC Fast: ${roundToNearest10(rangeB * (choiceData.chargingDistB.dcFast / 100))} km<br>
            AC Charging: Unlimited
        `;

        const distC = `
            DC Superfast: N/A<br>
            DC Fast: N/A<br>
            AC Charging: Unlimited
        `;

        document.getElementById("form-content").innerHTML = `
            <div style="text-align: center;">
                <h2>Preference Selection of Subscription Cards</h2>
                <p>
                    Below are 3 subscription plans: Plan A, Plan B, and Plan C. Plan C represents your current scenario,
                    while Plans A and B have some variations. Choose the plan that suits you best.
                </p>
                <h3 style="margin-bottom: 20px;">Choice Set ${choiceIndex + 1}/10</h3>
            </div>
            <div class="cards-container" style="display: flex; justify-content: space-around; gap: 20px; margin-top: 20px;">
                <div class="card" style="width: 30%; border: 1px solid #ccc; padding: 15px; border-radius: 8px; text-align: center;">
                    <img src="${imagePath}" alt="Plan A Image" style="width: 80%; margin: 0 auto; display: block;" />
                    <h3>Plan A</h3>
                    <p><b>Cost:</b> ₹${costA}/month (${getEmoji(costChangeA, true)})</p>
                    <p><b>Projected Driving Range:</b> ${rangeA} km/month (${getEmoji(rangeChangeA, false)})</p>
                    <p><b>Charging Distribution:</b><br> ${distA}</p>
                    <p><b>Battery Swap / Emergency Service:</b> ${getParamEmoji("emergencyFeature", choiceData.emergencyFeatureA)} ${choiceData.emergencyFeatureA}</p>
                    <p><b>Battery Health:</b> ${getParamEmoji("batteryHealth", choiceData.batteryHealthA)} ${choiceData.batteryHealthA}</p>
                </div>
                <div class="card" style="width: 30%; border: 1px solid #ccc; padding: 15px; border-radius: 8px; text-align: center;">
                    <img src="${imagePath}" alt="Plan B Image" style="width: 80%; margin: 0 auto; display: block;" />
                    <h3>Plan B</h3>
                    <p><b>Cost:</b> ₹${costB}/month (${getEmoji(costChangeB, true)})</p>
                    <p><b>Projected Driving Range:</b> ${rangeB} km/month (${getEmoji(rangeChangeB, false)})</p>
                    <p><b>Charging Distribution:</b><br> ${distB}</p>
                    <p><b>Battery Swap / Emergency Service:</b> ${getParamEmoji("emergencyFeature", choiceData.emergencyFeatureB)} ${choiceData.emergencyFeatureB}</p>
                    <p><b>Battery Health:</b> ${getParamEmoji("batteryHealth", choiceData.batteryHealthB)} ${choiceData.batteryHealthB}</p>
                </div>
                <div class="card" style="width: 30%; border: 1px solid #ccc; padding: 15px; border-radius: 8px; text-align: center;">
                    <img src="${imagePath}" alt="Plan C Image" style="width: 80%; margin: 0 auto; display: block;" />
                    <h3>Plan C (Your Current Scenario)</h3>
                    <p><b>Cost:</b> ₹${costC}/month</p>
                    <p><b>Projected Driving Range:</b> ${roundToNearest10(monthlyRange)} km/month</p>
                    <p><b>Charging Distribution:</b><br> ${distC}</p>
                    <p><b>Battery Swap / Emergency Service:</b> N/A</p>
                    <p><b>Battery Health:</b> N/A</p>
                </div>
            </div>
            <div class="dropdown-container" style="text-align: center; margin-top: 20px;">
                <label for="choice-${choiceIndex}"><b>Which plan do you prefer the most? <span style="color: red;">*</span></b></label>
                <select id="choice-${choiceIndex}" name="choice-${choiceIndex}" required>
                    <option value="">Select a Plan</option>
                    <option value="A">Plan A</option>
                    <option value="B">Plan B</option>
                    <option value="C">Plan C</option>
                </select>
            </div>
        `;

        document.getElementById("form-navigation").innerHTML = `
    <div style="display: flex; justify-content: space-between; margin-top: 20px;">
        <button id="prev-btn" onclick="prevChoiceCard()" style="align-self: flex-start;">Previous</button>
        ${choiceIndex < totalChoiceCards - 1
            ? `<button id="next-btn" onclick="nextChoiceCard()" style="align-self: flex-end;">Next</button>`
            : `<button id="submit-btn" onclick="submitSurvey()" style="align-self: center; margin: 0 auto;">Submit</button>`}
    </div>
`;

    } catch (error) {
        console.error("Error rendering choice card:", error);
        document.getElementById("form-content").innerHTML = `<p>Error: ${error.message}</p>`;
    }
}




// Submit the survey
async function submitSurvey() {
    try {
        // Retrieve all survey data from localStorage
        const surveyData = JSON.parse(localStorage.getItem("surveyData")) || {};

        // Debug: Log the survey data before submission
        console.log("Survey Data to Submit:", surveyData);

        // Send the data to the backend
        const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:wnqZ7cvb/surveyresponses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ responseData: surveyData }),
        });

        if (response.ok) {
            alert('Survey submitted successfully!');
            localStorage.clear(); // Clear the stored data after successful submission
            window.location.href = '/thank-you.html'; // Redirect to thank-you page
        } else {
            const errorData = await response.json();
            console.error('Error submitting survey:', errorData);
            alert('Failed to submit the survey. Please try again later.');
        }
    } catch (error) {
        console.error('Error submitting survey:', error);
        alert('An error occurred during submission. Please try again.');
    }
}




// Navigation functions
function nextChoiceCard() {
    try {
        const surveyData = JSON.parse(localStorage.getItem("surveyData")) || {};

        // Retrieve the current selection
        const selectedPlan = document.querySelector(`select[name="choice-${currentChoiceCard}"]`)?.value;

        if (!selectedPlan) {
            alert("Please select a plan before proceeding.");
            return;
        }

        // Save the selected choice to localStorage
        surveyData[`choice-${currentChoiceCard}`] = selectedPlan;
        localStorage.setItem("surveyData", JSON.stringify(surveyData));

        // Navigate to thank-you page after the last choice card
        if (currentChoiceCard < totalChoiceCards - 1) {
            currentChoiceCard++;
            renderChoiceCardPage(currentChoiceCard);
        } else {
            currentPage = pages.findIndex(page => page.type === 'thank_you');
            renderPage(); // Navigate to thank-you page
        }
    } catch (error) {
        console.error("Error in nextChoiceCard:", error);
        alert("An unexpected error occurred. Please refresh the page and try again.");
    }
}






function prevChoiceCard() {
    if (currentChoiceCard > 0) {
        currentChoiceCard--;
        renderChoiceCardPage(currentChoiceCard);
    }
}

// Move to the next page
function nextPage() {
    try {
        // Save current page data
        const dataSaved = savePageData();
        if (!dataSaved) {
            return; // Stop navigation if validation fails
        }

        // Validate required inputs
        if (!validateInputs()) {
            alert('Please fill all required fields.');
            return;
        }

        // Proceed to the next page if all validations pass
        if (currentPage < pages.length - 1) {
            if (currentPage === 4) { // On the Preference Matrix Page
                currentChoiceCard = 0; // Reset to the first choice card
                renderChoiceCardPage(currentChoiceCard); // Render the choice cards
                return; // Stop further navigation as we're moving to choice cards
            }

            currentPage++;
            renderPage(); // Render the next page
        } else {
            submitForm(); // Submit the form on the final page
        }
    } catch (error) {
        console.error('Error navigating to the next page:', error);
        alert('An unexpected error occurred. Please try again.');
    }
}


// Move to the previous page
function prevPage() {
    savePageData(); // Save data before navigating back
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
}

function savePageData() {
    try {
        // Select all inputs and selects within the form
        const inputs = document.querySelectorAll('#form-content input, #form-content select');
        const pageData = {};

        // Iterate through inputs to collect their values
        inputs.forEach(input => {
            if (input.type === 'radio' || input.type === 'checkbox') {
                if (input.checked) {
                    pageData[input.name] = input.value;
                }
            } else {
                pageData[input.name] = input.value;
            }
        });

        // Retrieve and merge existing data from localStorage
        const savedData = JSON.parse(localStorage.getItem('surveyData')) || {};
        const updatedData = { ...savedData, ...pageData };
        
        // Save the updated data back to localStorage
        localStorage.setItem('surveyData', JSON.stringify(updatedData));

        // Debugging: Log the current page data
        console.log("Page data saved:", pageData);

        // Specific validation for EV Ownership Matrix on Page 3
        if (currentPage === 3) {
            const ev2Count = parseInt(pageData.ev_2wheeler || 0, 10);
            const ev4Count = parseInt(pageData.ev_4wheeler || 0, 10);

            if (ev2Count === 0 && ev4Count === 0) {
                alert('You must proceed with at least one EV. Please update your response.');
                return false; // Prevent navigation
            }

            const drivingDistanceInput = parseInt(pageData.driving_distance, 10);
            if (isNaN(drivingDistanceInput) || drivingDistanceInput <= 0) {
                alert('Please enter a valid daily driving distance in kilometers.');
                return false; // Prevent navigation
            }
        }

        // Validation for Preference Matrix on Page 4
        if (currentPage === 4) {
            const agreement = document.querySelector('input[name="charging_cost_agreement"]:checked')?.value;
            const customExpense = document.getElementById('custom-expense')?.value;

            if (agreement === 'no' && (!customExpense || isNaN(parseInt(customExpense, 10)) || parseInt(customExpense, 10) <= 0)) {
                alert('Please specify a valid monthly EV charging expense.');
                return false; // Prevent navigation
            }

            pageData.charging_cost_agreement = agreement;
            if (agreement === 'no') {
                pageData.custom_expense = customExpense;
            }
        }

        // Debugging: Log the updated survey data
        console.log("Updated survey data:", updatedData);

        return true; // Allow navigation
    } catch (error) {
        console.error("Error in savePageData:", error);
        alert('An error occurred while saving the data. Please try again.');
        return false; // Prevent navigation in case of an error
    }
}


// Validate required fields
function validateInputs() {
    const inputs = document.querySelectorAll('#form-content input[required], #form-content select[required]');
    for (const input of inputs) {
        if ((input.type === 'radio' && !document.querySelector(`input[name="${input.name}"]:checked`)) || !input.value) {
            return false;
        }
    }
    return true;
}

// Submit the form data to the server
function submitForm() {
    const finalData = JSON.parse(localStorage.getItem('surveyData')) || {};
    console.log("Submitting survey data:", finalData);

    fetch('https://x8ki-letl-twmt.n7.xano.io/api:wnqZ7cvb/surveyresponses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ responseData: finalData })
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`HTTP Error: ${response.status}`);
            }
        })
        .then(data => {
            console.log('Server Response:', data);
            alert('Survey submitted successfully!');
            localStorage.clear();
            window.location.href = '/thank-you.html';
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            alert('Failed to submit the survey. Please try again later.');
        });
}


// Initialize the first page on load
window.onload = () => {
    currentPage = 0; // Start at the first page
    renderPage(); // Ensure this function exists and properly initializes the survey UI
};
