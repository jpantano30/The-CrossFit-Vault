const workoutSeed = [
  {
    name: 'Amanda',
    description: 'For Time 9-7-5 Muscle-Ups and Squat Snatches 135/95lbs',
    category: 'The Girls',
    duration: '14 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Angie',
    description: 'For Time: 100 Pull-Ups, 100 Push-Ups, 100 Sit-Ups, and 100 Squats',
    category: 'The Girls',
    duration: '30 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Annie',
    description: 'For Time: 50-40-30-20-10 Double-Unders and Sit-Ups',
    category: 'The Girls',
    duration: '11 Minutes',
    score: '6:28',
    // user: Jena
  },
  {
    name: 'Barbara',
    description: 'For Time: 5 Rounds: 20 Pull-Ups, 30 Push-Ups, 40 Sit-Ups, and 50 Squats, 3 minutes of rest',
    category: 'The Girls',
    duration: '50 Minutes',
    score: '42:58',
    // user: Jena
  },
  {
    name: 'Candy',
    description: 'For Time: 5 Rounds: 20 Pull-Ups, 40 Push-Ups, and 60 Squats',
    category: 'The Girls',
    duration: '40 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Chelsea',
    description: 'EMOM 30: 5 Pull-Ups, 10 Push-Ups, and 15 Air Squats',
    category: 'The Girls',
    duration: '30 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Cindy',
    description: 'AMRAP 20: 5 Pull-Ups, 10 Push-Ups, and 15 Air Squats',
    category: 'The Girls',
    duration: '20 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Diane',
    description: 'For Time: 21-15-9 Deadlifts (225/155lbs), Handstand Push-Ups',
    category: 'The Girls',
    duration: '9 Minutes',
    score: '7:26',
    // user: Jena
  },
  {
    name: 'Elizabeth',
    description: '3 Rounds of: 21-15-9 Squat Cleans (135/95lbs), 21-15-9 Ring Dips',
    category: 'The Girls',
    duration: '15 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Eva',
    description: '5 rounds of: Run 800m, 30 Kettlebell Swings (50/70lbs), 30 Pull-ups',
    category: 'The Girls',
    duration: '60 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Fran',
    description: 'For Time: 21-15-9 Thrusters (95/65lbs), Pull-Ups',
    category: 'The Girls',
    duration: '9 Minutes',
    score: '5:54',
    // user: Jena
  },
  {
    name: 'Grace',
    description: 'For Time: 30 Power Clean and Jerks (135/95lbs)',
    category: 'The Girls',
    duration: '10 Minutes',
    score: '3:18',
    // user: Jena
  },
  {
    name: 'Hope',
    description: '3 rounds of: 1 Min of Burpees, 1 Min of Power Snatches (75/55lbs), 1 Min of Box Jumps (24″/20″), 1 Min of Thrusters (75/55lbs), 1 Min of Chest-to-bar Pull-ups, 1 Min of Rest',
    category: 'The Girls',
    duration: '18 Minutes'
    // score: '',
    // user: Jena
  },
  {
    name: 'Helen',
    description: '3 rounds for time of: 400m Run, 21 Kettlebell Swings 50/35lbs, 12 Pull-ups',
    category: 'The Girls',
    duration: '18 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Isabel',
    description: 'For Time: 30 Snatches (135/95lbs)',
    category: 'The Girls',
    duration: '7 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Jackie',
    description: 'For Time: 1000m Row, 50 Thrusters (45/35lbs), 30 Pull Ups',
    category: 'The Girls',
    duration: '15 Minutes',
    score: '10:44',
    // user: Jena
  },
  {
    name: 'Kelly',
    description: '5 Rounds of: 400m Run, 30 Box Jumps (24″/20″), 30 Wall Balls (20/14lbs)',
    category: 'The Girls',
    duration: '40 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Karen',
    description: 'For Time: 150 Wall Balls (20/14lbs)',
    category: 'The Girls',
    duration: '15 Minutes',
    score: '7:50',
    // user: Jena
  },
  {
    name: 'Lynne',
    description: '5 rounds of: Max reps bench press (bodyweight), Max reps pull-ups',
    category: 'The Girls',
    duration: 'Unlimited',
    // score: '',
    // user: Jena
  },
  {
    name: 'Linda',
    description: 'For time 10-9-8-…-2-1 of: Deadlift (1.5x bodyweight), Bench Press (1x bodyweight), Squat Clean (0.75x bodyweight)',
    category: 'The Girls',
    duration: '35 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Maggie',
    description: '5 Rounds of: 20 Handstand Push Ups, 40 Pull Ups, 60 Pistol Squats',
    category: 'The Girls',
    duration: '60 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Margurita',
    description: '50 Rounds of: 1 Burpee, 1 Push Up, 1 Jumping Jack, 1 Sit Up, 1 Handstand',
    category: 'The Girls',
    duration: '30 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Mary',
    description: '20 min AMRAP of: 5 Handstand Push Ups, 10 Pistol Squats, 15 Pull Ups',
    category: 'The Girls',
    duration: '20 Minutes',
    // score: '',
    // user: Jena
  },
  {
    name: 'Nancy',
    description: '5 Rounds of: 400 m Run, 15 Overhead Squats (95/65lbs)',
    category: 'The Girls',
    duration: '22 Minutes',
    score: '16:05',
    // user: Jena
  },
  {
    name: 'Gwen',
    description: '15-12-9 Reps for Load: Clean & Jerks (unbroken)',
    category: 'The Girls',
    duration: '30 Minutes',
    score: '95lbs',
    // user: Jena
  },
  {
    name: 'Murph',
    description: 'For Time: 1 mile Run, 100 Pull-ups, 200 Push-ups, 300 Squats, 1 mile Run. In a 20 lb vest or body armor.',
    category: 'Hero WODs',
    duration: '75 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'DT',
    description: '5 Rounds for Time: 12 Deadlifts, 9 Hang Power Cleans, 6 Push Jerks (155/105 lbs)',
    category: 'Hero WODs',
    duration: '15 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'Josh',
    description: 'For Time: 21 Overhead Squats, 42 Pull-Ups, 15 Overhead Squats, 30 Pull-Ups, 9 Overhead Squats, 18 Pull-Ups (95/65 lbs)',
    category: 'Hero WODs',
    duration: '20 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'Badger',
    description: '3 Rounds for Time: 30 Squat Cleans (95/65 lbs), 30 Pull-Ups, 800 meter Run',
    category: 'Hero WODs',
    duration: '40 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'JT',
    description: '21-15-9 reps for time of: Handstand push-ups, Ring dips, Push-ups',
    category: 'Hero WODs',
    duration: '12 Minutes', 
    score: '',
    // user: ''
  },
  {
    name: 'MICHAEL',
    description: '3 rounds for time of: Run 800 m, 50 back extensions, 50 sit-ups',
    category: 'Hero WODs',
    duration: '', 
    score: '',
    // user: ''
  },
  {
    name: 'DANIEL',
    description: 'For time: 50 Pull-ups, 400 meter run, 95 pound Thruster, 21 reps, 800 meter run, 95 pound Thruster, 21 reps, 400 meter run, 50 Pull-ups',
    category: 'Hero WODs',
    duration: '', 
    score: '',
    // user: ''
  },
  {
    name: 'JASON',
    description: 'For time: 100 Squats, 5 Muscle-ups, 75 Squats, 10 Muscle-ups, 50 Squats, 15 Muscle-ups, 25 Squats, 20 Muscle-ups',
    category: 'Hero WODs',
    duration: '', 
    score: '',
    // user: ''
  },
  {
    name: 'JOSHIE',
    description: 'Complete three rounds for time of: 40 pound Dumbbell snatch, 21 reps, right arm, 21 L Pull-ups, 40 pound Dumbbell snatch, 21 reps, left arm, 21 L Pull-ups',
    category: 'Hero WODs',
    duration: '', 
    score: '',
    // user: ''
  },
  {
    name: 'NATE',
    description: 'Complete as many rounds in twenty minutes as you can of: 2 Muscle-ups, 4 Handstand Push-ups, 8 2-Pood Kettlebell swings',
    category: 'Hero WODs',
    duration: '20 Minutes', 
    score: '',
    // user: ''
  }, 
  {
    name: 'TOMMY V',
    description: 'For time: 115 pound Thruster, 21 reps; 15 ft Rope Climb, 12 ascents; 115 pound Thruster, 15 reps; 15 ft Rope Climb, 9 ascents; 115 pound Thruster, 9 reps; 15 ft Rope Climb, 6 ascents',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'RYAN',
    description: 'Five rounds for time of: 7 Muscle-ups; 21 Burpees',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'ERIN',
    description: 'Five rounds for time of: 40 pound Dumbbells split clean, 15 reps; 21 Pull-ups',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'MR. JOSHUA',
    description: 'Five rounds for time of: Run 400 meters; 30 Glute-ham sit-ups; 250 pound Deadlift, 15 reps',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'DANNY',
    description: 'Complete as many rounds in 20 minutes as you can of: 24 inch Box Jump, 30 reps; 115 pound Push Press, 20 reps; 30 Pull-ups',
    category: 'Hero WODs',
    duration: '20 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'HANSEN',
    description: 'Five rounds for time of: 2 pood Kettlebell swing, 30 reps; 30 Burpees; 30 Glute-ham sit-ups',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'TYLER',
    description: 'Five rounds for time of: 7 Muscle-ups; 95 pound Sumo-deadlift high-pull, 21 reps',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'LUMBERJACK 20',
    description: 'For time: 20 Deadlifts (275lbs); Run 400m; 20 KB swings (2pood); Run 400m; 20 Overhead Squats (115lbs); Run 400m; 20 Burpees; Run 400m; 20 Pullups (Chest to Bar); Run 400m; 20 Box jumps (24″); Run 400m; 20 DB Squat Cleans (45lbs each); Run 400m',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'STEPHEN',
    description: '30-25-20-15-10-5 rep rounds of: GHD sit-up; Back extension; Knees to elbow; 95 pound Stiff legged deadlift',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'RJ',
    description: 'Five rounds for time of: Run 800 meters, 15 ft Rope Climb, 5 ascents, 50 Push-ups',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'LUCE',
    description: 'Wearing a 20 pound vest, three rounds for time of: 1K Run, 10 Muscle-ups, 100 Squats',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'JOHNSON',
    description: 'Complete as many rounds in 20 minutes as you can of: 245 pound Deadlift, 9 reps, 8 Muscle-ups, 155 pound Squat clean, 9 reps',
    category: 'Hero WODs',
    duration: '20 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'MCCLUSKEY',
    description: 'Three rounds of: 9 Muscle-ups, 15 Burpee pull-ups, 21 Pull-ups, Run 800 meters',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'WEAVER',
    description: 'Four rounds for time of: 10 L-pull-ups, 15 Push-ups, 15 Chest to bar Pull-ups, 15 Push-ups, 20 Pull-ups, 15 Push-ups',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'CHAD',
    description: 'For time: 1,000 weighted box step-ups. ♀ 35-lb ruck, 20-in box. ♂ 45-lb ruck, 20-in box',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'THE SEVEN',
    description: 'Seven rounds for time of: 7 Handstand push-ups; 135 pound Thruster, 7 reps; 7 Knees to elbows; 245 pound Deadlift, 7 reps; 7 Burpees; 7 Kettlebell swings, 2 pood; 7 Pull-ups',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'GARRETT',
    description: 'Three rounds for time of: 75 Squats, 25 Ring handstand push-ups, 25 L-pull-ups',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'WAR FRANK',
    description: 'Three rounds for time of: 25 Muscle-ups, 100 Squats, 35 GHD situps',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'MCGHEE',
    description: 'Complete as many rounds in 30 minutes as you can of: 275 pound Deadlift, 5 reps, 13 Push-ups, 9 Box jumps, 24 inch box',
    category: 'Hero WODs',
    duration: '30 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'PAUL',
    description: 'Five rounds for time of: 50 Double unders, 35 Knees to elbows, 185 pound Overhead walk, 20 yards',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'JERRY',
    description: 'For time: Run 1 mile, Row 2K, Run 1 mile',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'NUTTS',
    description: 'For time: 10 Handstand push-ups, 250 pound Deadlift, 15 reps, 25 Box jumps, 30 inch box, 50 Pull-ups, 100 Wallball shots, 20 pounds, 10′, 200 Double-unders, Run 400 meters with a 45lb plate',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'ARNIE',
    description: 'With a single 2 pood kettlebell: 21 Turkish get-ups, Right arm, 50 Swings, 21 Overhead squats, Left arm, 50 Swings, 21 Overhead squats, Right arm, 50 Swings, 21 Turkish get-ups, Left arm',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'Randy',
    description: 'For time: 75 power snatches (75/55lbs)',
    category: 'Hero WODs',
    duration: '12 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'CrossFit Total',
    description: '3 attempts to find a max in each lift: back squat, shoulder press, and deadlift. Score is the sum of each lift.',
    category: 'Lifting',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: '2k Row',
    description: 'For Time: 2k Row',
    category: 'Benchmarks',
    duration: '10 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'Michael',
    description: '3 Rounds for time of: 800m run, 50 back extensions, 50 situps',
    category: 'Hero WODs',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'Bergeron Beep Test',
    description: 'EMOM for as long as possible: 7 thrusters (75/55lbs), 7 pull ups, 7 burpees',
    category: 'Benchmarks',
    duration: 'Unlimited',
    score: '',
    // user: ''
  },
  {
    name: 'CrossFit Total II',
    description: 'Total weight lifted of(best of 3 attempts for each lift): Clean, Bench Press, Overhead Squat',
    category: 'Lifting',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'Back Squat',
    description: '1 Rep Max Back Squat',
    category: 'Lifts',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'Clean and Jerk',
    description: '1 Rep Max Clean and Jerk',
    category: 'Lifts',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'Snatch',
    description: '1 Rep Max Snatch',
    category: 'Lifts',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'Deadlift',
    description: '1 Rep Max Deadlift',
    category: 'Lifts',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'Clean',
    description: '1 Rep Max Clean',
    category: 'Lifts',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'Fight Gone Bad',
    description: '3 Rounds For Total Reps of: 1 minute Wall Ball Shots (20/14lb), 1 minute Sumo Deadlift High-Pulls (75/55lb), 1 minute Box Jumps (20in), 1 minute Push Press (75/55lb), 1 minute Row (calories), 1 minute Rest',
    category: 'Benchmarks',
    duration: '17 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'Max Pull Ups',
    description: 'Max Unbroken Reps of: Pull-Ups',
    category: 'Benchmarks',
    duration: '',
    score: '',
    // user: ''
  },
  {
    name: 'Filthy Fifty',
    description: 'For Time: 50 Box Jumps (24/20 in), 50 Jumping Pull-Ups, 50 Kettlebell Swings (1/.75 pood), 50 Walking Lunge Steps, 50 Knees-to-Elbows, 50 Push Presses (45/35 lb), 50 Back Extensions, 50 Wall Ball Shots (20/14 lb), 50 Burpees, 50 Double-Unders',
    category: 'Benchmarks',
    duration: '30 Minutes',
    score: '',
    // user: ''
  },
  {
    name: '400m Run',
    description: 'For Time: 400m run',
    category: 'Benchmarks',
    duration: '4 Minutes',
    score: '',
    // user: ''
  },
  {
    name: '5k Run',
    description: 'For time: 5k run',
    category: 'Benchmarks',
    duration: '40 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'CrossFit Open 24.3',
    description: 'For Time 5 Rounds of: 10 Thrusters (95/65 lb), 10 Chest-to-Bar Pull-Ups, 1 minute Rest, then: 5 Rounds of: 7 Thrusters (135/95 lb), 7 Bar Muscle-Ups',
    category: 'Benchmarks',
    duration: '15 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'CrossFit Open 24.2',
    description: 'AMRAP in 20 minutes of: 300 meter Row, 10 Deadlifts (185/125 lb), 50 Double-Unders',
    category: 'Benchmarks',
    duration: '20 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'CrossFit Open 24.1',
    description: 'For Time: 21 Dumbbell Snatches (arm 1) (50/35 lb), 21 Lateral Burpees Over Dumbbell, 21 Dumbbell Snatches (arm 2) (50/35 lb), 21 Lateral Burpees Over Dumbbell, 15 Dumbbell Snatches (arm 1) (50/35 lb), 15 Lateral Burpees Over Dumbbell, 15 Dumbbell Snatches(arm 2) (50/35 lb), 15 Lateral Burpees Over Dumbbell, 9 Dumbbell Snatches (arm 1) (50/35 lb), 9 Lateral Burpees Over Dumbbell, 9 Dumbbell Snatches (arm 2) (50/35 lb), 9 Lateral Burpees Over Dumbbell',
    category: 'Benchmarks',
    duration: '15 Minutes',
    score: '',
    // user: ''
  },
  {
    name: 'The Chief',
    description: '5 Rounds of a 3-minute AMRAP: 3 Power Cleans (135/95 lbs), 6 Push-Ups, 9 Air Squats, Rest 1 minute',
    category: 'Benchmarks',
    duration: '19 Minutes',
    score: '',
    // user: ''
  },
  // {
  //   name: '',
  //   description: '',
  //   category: 'Hero',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'Hero',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'Hero',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'Hero',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
  // {
  //   name: '',
  //   description: '',
  //   category: 'The Girls',
  //   duration: '',
  //   score: '',
  //   user: Jena
  // },
]
module.exports = workoutSeed