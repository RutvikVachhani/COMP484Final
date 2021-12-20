import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getInfo } from "../api";
import "../styles/global.css";
import scale from "../assets/scale.jpg";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
const fitnessCalculatorFunctions = require("fitness-calculator");

//functions returns html
const DisplayBMI = () => {
  const [info, setInfo] = useState([]);
  //useEffect to fetching data from the backend

  useEffect(() => {
    const fetchInfo = async () => {
      const i = await getInfo();
      setInfo(i);
    };
    fetchInfo();
  }, []);

  var height = Number(info.height / 0.393);
  var weight = Number(info.weight / 2.2);
  var BMI = fitnessCalculatorFunctions.BMI(height, weight);

  const history = useHistory();

  return (
    <div>
      <Nav />
      <div id="mySidenav" className="sidenav">
        <br />
        <Link to="/homepage">Home</Link>
        <u>
          <h1>BMI: {BMI} </h1>
        </u>
        <h2>Age: {info.age}</h2>
        <h2>Height: {info.height}</h2>
        <h2>Weight: {info.weight}</h2>
      </div>
      {/*<img src={scale} alt="food" width="656" height="748"></img>*/}
      {(() => {
                if (BMI < 18.5 ) {           
                    return (
                        <div>
                            <br/>
                            <h2>-----You fall under the category of Underweight----- </h2>
                            <br/>
                            <h3>Tips to gain healthy weight and muscle</h3>
                            <br/>
                            <ol class="list">
                                <li class="item">
                                    <h4 class="headline">Eat more frequently.</h4>
                                    <p> When you're underweight, you may feel full faster. Eat five to six smaller meals during the day rather than two or three large meals.</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">Choose nutrient-rich foods. </h4>
                                    <p>As part of an overall healthy diet, choose whole-grain breads, pastas and cereals; fruits and vegetables; dairy products; lean protein sources; and nuts and seeds.</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">Try smoothies and shakes. </h4>
                                    <p>Don't fill up on diet soda, coffee and other drinks with few calories and little nutritional value. Instead, drink smoothies or healthy shakes made with milk and fresh or frozen fruit, and sprinkle in some ground flaxseed. In some cases, a liquid meal replacement may be recommended.</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">Watch when you drink. </h4>
                                    <p> Some people find that drinking fluids before meals blunts their appetite. In that case, it may be better to sip higher calorie beverages along with a meal or snack. For others, drinking 30 minutes after a meal, not with it, may work.</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">Make every bite count. </h4>
                                    <p> Snack on nuts, peanut butter, cheese, dried fruits and avocados. Have a bedtime snack, such as a peanut butter and jelly sandwich, or a wrap sandwich with avocado, sliced vegetables, and lean meat or cheese..</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">Top it off. </h4>
                                    <p>Add extras to your dishes for more calories — such as cheese in casseroles and scrambled eggs, and fat-free dried milk in soups and stews.</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">Exercise.  </h4>
                                    <p>Exercise, especially strength training, can help you gain weight by building up your muscles. Exercise may also stimulate your appetite.</p>
                                </li>
                                </ol>
                                <br/>
                            <iframe width="650" height="650" scrolling="no" src="https://momsmag.rahetbally.com/wp-content/uploads/2021/02/28BA01D1-EA8E-4130-AE80-9DF54C79024F.jpeg"></iframe>
                        </div>
                    )
                }
                if (BMI >=18.5 && BMI < 24.9) {           
                    return (
                        <div>
                            <br/>
                            <h2>-----You fall under the category of Normal weight----- </h2>
                            <br/>
                            <h3>Tips to stay fit and maintain good health</h3>
                            <br/>
                            <ol class="list">
                                <li class="item">
                                    <h4 class="headline">Eat moderate portions. </h4>
                                    <p> If you keep portion sizes moderate and reasonable, it is easier to eat what you want, and maintain a healthy and balanced diet. What’s a moderate portion? A medium-sized piece of fruit is one serving. A cup of pasta equates 2 servings and a pint of ice cream contains 4 servings.</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">DO NOT SKIP MEALS.  </h4>
                                    <p>Skipping meals can lead to out-of-control hunger and frequently results in over-indulging. Snacking between regular meals can help if you are pressed for time. Just make sure you have at least two balanced meals.</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">DO NOT eliminate certain foods. </h4>
                                    <p>Because our bodies require diverse nutrition, it’s a bad idea to eliminate all salt, fat, and sugar from our diets, unless told to do so by a medical professional.  Choosing healthier options such as skim or low-fat dairy will help you maintain a balanced diet.</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">Be active </h4>
                                    <p>Get at least 30 minutes of activity every day. If the idea of sweating at the gym for hours on end doesn’t sound appealing to you, then head outside for a game of ultimate Frisbee. Or, try going for a walk or a run. The important thing is that you get moving!</p>
                                </li>
                                </ol>
                                <br/>
                            <iframe width="565" height="300" scrolling="no" src="https://www.magruderhospital.com/hubfs/2021/Blog%20Posts%20and%20Images/healthy%20lifestyle.png"></iframe>
                        </div>
                    )
                }
                if (BMI >= 24.9) {           
                    return (
                        <div>
                            <br/>
                            <h2>-----You fall under the category of Overweight----- </h2>
                            <br/>
                            <h3>Tips to get fit and lose weight</h3>
                            <br/>
                            <ol class="list">
                                <li class="item">
                                    <h4 class="headline">Manage your hunger </h4>
                                    <p> “Hunger is a normal response to reducing calories. When you eat less, your fat cells release more hunger hormones, which increases your appetite,” says Hopsecger. “Higher-protein, high-fiber meal plans are best for controlling your hunger and appetite.”</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">Don’t eat a carbohydrate unless it has fiber attached to it.</h4>
                                    <p>Fiber helps improve blood sugar control, helps lower cholesterol and reduces your risk of chronic diseases like diabetes, colorectal cancer and heart disease. When you have diabetes, a diet with fewer carbs (like bread, pasta, rice, desserts, sugary beverages, juice) is also important because you’ll need less insulin. And that can help prevent hunger, fat storage and weight gain.</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">Focus on healthy behaviors, not the number on the scale. </h4>
                                    <p>Replace a goal like “lose two pounds a week” with specific mini-goals, like “eat 1 cup of veggies at dinner,” “walk 20 minutes a day” or “keep a daily food log.” If you’re disappointed with your weight progress at week’s end, reflect on how well you stuck to each goal.</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">Make plants the foundation of your diet </h4>
                                    <p>“Research strongly supports the benefits of plant-based nutrition approaches for weight loss, disease prevention and overall health,” says Hopsecger. “Whether you’re eating vegetarian, paleo, high-fat, vegan or pegan (a combination of paleo and vegan), your diet should include a variety of foods from the earth.” Just remember that a plant-based diet still requires portion control!</p>
                                </li>
                                <li class="item">
                                    <h4 class="headline">Get more active </h4>
                                    <p>Being active is key to losing weight and keeping it off. As well as providing lots of health benefits, exercise can help burn off the excess calories you cannot lose through diet alone. Find an activity you enjoy and are able to fit into your routine.</p>
                                </li>
                                </ol>
                                <br/>
                            <iframe width="300" height="200" scrolling="no" src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2018/06/weight-loss-battle-300x200.jpg"></iframe>
                        </div>
                    )
                }
            })()}
      <Footer />
    </div>
  );
};

export default DisplayBMI;
