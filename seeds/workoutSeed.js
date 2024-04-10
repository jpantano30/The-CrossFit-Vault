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