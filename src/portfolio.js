
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Nikhil Lohiya",
  title: "Hi all, I'm Nikhil",
    subTitle: emoji("A passionate Business Intelligence Engineer 🚀 with 4+ years of professional experience in analyzing and developing solutions spanning database development & architecture, management and predictive analytics, forecasting, and developing interactive dashboards to steer data driven problem solving in enterprises. Expertise in handling large data sets, insights generation, output interpretation, BI automation, and advanced visualizations."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

//  github: "https://github.com/saadpasta",
    linkedin: "https://www.linkedin.com/in/nikilohiya/",
    gmail: "nikilohiya@gmail.com",
//  gitlab: "https://gitlab.com/saadpasta",
//  facebook: "https://www.facebook.com/saad.pasta7",
//  medium: "https://medium.com/@saadpasta",
//  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do!",
  subTitle: "Obssesive 'Problem Solver' who is consistently learning new tools to solve them!",
  skills: [
    emoji("⚡ Help Business' succeed with their Data! "),
    emoji("⚡ Develop BI/AI based solutions to Drive better Business Outcomes."),
    emoji("⚡  ----------------Customer Enablement------------")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
      {
          skillName: "Tableau",
          fontAwesomeClassname: "fab fa-aws"
      },
      {
          skillName: "Power BI",
          fontAwesomeClassname: "fab fa-aws"
      },
      {
          skillName: "Sisense",
          fontAwesomeClassname: "fab fa-aws"
      },
      {
          skillName: "Qlik Sense",
          fontAwesomeClassname: "fab fa-aws"
      },
      {
          skillName: "python",
          fontAwesomeClassname: "fab fa-python"
      },
      {
          skillName: "R",
          fontAwesomeClassname: "fab fa-r-project"
      },
      {
          skillName: "Alteryx",
          fontAwesomeClassname: "fab fa-python"
      },
      {
          skillName: "Oracle-database",
          fontAwesomeClassname: "fas fa-database"
      },
      {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
      },
      {
          skillName: "Bigquery",
          fontAwesomeClassname: "fab fa-aws"
      },
      {
          skillName: "Redshift",
          fontAwesomeClassname: "fab fa-aws"
      },
      {
          skillName: "snowflake",
          fontAwesomeClassname: "fas fa-snowflake"
      },
      {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
      },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Stevens Institute of Technology",
          logo: require("./assets/images/stevensLogo.png"),
      subHeader: "Master of Science in Business Intelligence & Analytics",
      duration: "September 2017 - December 2018",
      desc: "Highlights",
          descBullets: [
              "GPA: 3.89/4",
              "Treasurer of Business Intelligence Club",
              "Received scholarship for $10k for standing top 10% in my batch",
              "Courses taken: Web Mining, Multivariate Analysis, Data Warehousing & BI ...."
      ]
    },
    {
      schoolName: "MNIT Jaipur",
      logo: require("./assets/images/mnitLogo.png"),
      subHeader: "Bachelor of Technology in Electrical Engineering",
      duration: "July 2012 - April 2016",
      desc: "Highlights",
        descBullets: [
            "GPA: 3.62/4",
            "Mentored over 700 Students as 'Chief Mentor' in Student Mentorship Program(2015-16)",
            "Founder & 1st Chairman of Electrical Engineering Society, MNIT Jaipur(2015-16)"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "BI Design / KPI Visualizations",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Databases",
      progressPercentage: "80%"
    },
    {
      Stack: "Scripting",
      progressPercentage: "70%"
      },
      {
          Stack: "ETL & Data pipelining ",
          progressPercentage: "80%"
      }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
      {
          role: "Analytics Associate",
      company: "USEReady",
          companylogo: require("./assets/images/UsereadyLogo.png"),
      date: "February 2019 – Present",
      desc: "Highlights:",
      descBullets: [
        "Gathered detailed requirements, defined KPIs, developed and implemented solutions for over 12 projects in an Agile setup for 3 clients.",
          "Created and automated over 30 ETL Process’ & 20 Dashboards using Bigquery/Redshift/Oracle/Tableau, Python/Alteryx and reported in Tableau / Power BI supporting 4 multimillion-dollar product launches.",
          "Created 2 Tableau Dashboards ingesting more than 50 million rows, and optimized performance from 90 seconds to under 5 seconds for 4000 concurrent users.(Tabjolt / Tabmon)",
          "Created a “Portfolio Analyzer Dashboard” using Tableau-Python API, with dynamic optimization in Python based on user selected parameters on a Tableau UI.",
          "Created a Python data stream to interact with databases and automating using python schedular to support 2 POCs."
      ]
      },
      {
          role: "Graduate Intern",
          company: "Dept of Finance",
          companylogo: require("./assets/images/dofLogo.png"),
          date: "June 2018 – December 2018",
          desc: "Highlights:",
          descBullets: [
              "Extracted data from the MySQL database and transformed the corrupted data for cataloging & reporting.",
              "Using Agile developed a full stack Case Management System using the TimeMatters for a staff of 10 users.",
              "Designed a Database (STAR) for the OTA and developed rules for maintaining data quality in the CMS, reducing data errors by 50%.",
              "Automated the existing internal reporting on Excel VBA creating Pivot Tables & Charts, reducing effort by 130 working hours on an annual basis. Developed an automated reporting system using IBM Cognos.",
          ]
      },
    {
      role: "Associate Applications Developer",
      company: "Oracle Corp",
      companylogo: require("./assets/images/oracleLogo.png"),
      date: "October 2016 – July 2017",
        desc: "Highlights:",
        descBullets: [
            "Improved performance in Batch Data Processing Utility by reducing I/O time with Database by 4%.",
            "Resolved database performance and deadlock issues for 3 clients in the Oracle Revenue Management and Billing batch data processing cycles with 5 million rows (appx)."
        ]
    },
    {
      role: "Data Analyst",
      company: "A S Services",
      companylogo: require("./assets/images/asservicesLogo.png"),
      date: "April 2016 – September 2016",
        desc: "Highlights:",
        descBullets: [
            "Create a database and digitize the existing client salary data from ledgers.",
            "Create monthly reports for the clients to manage the expenditures and create projections for the next month.",
            "Perform monetary impact analysis for Labor Laws’ compliance and identify sources of cost reduction for the clients.",
            "While onboarding new clients, check for past compliance violations and chart the frequency against a benchmark model in the same industry.",
            "Generate reports and create dashboards based on the findings.",
          ]
      },
      {
          role: "CEO & Cofounder",
          company: "ArtStreak",
          companylogo: require("./assets/images/artstreakLogo.png"),
          date: "February 2014 – January 2015",
          desc: "Highlights:",
          descBullets: [
              "Formerly known as i-deal: Artstreak",
          ]
      }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "nikilohiya", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true  or false to show Contact profile using Github, defaults to false
};


// Fin-Finicky Stuff here ----

const bigProjects = {
    title: emoji("Fin-Finicky: A Financial Analysts' Tookit 🛠️"),
    subtitle: "Check it out!!:  A one stop shop for Financial Analysts! (Academic Project Built in R / R Shiny)",
  projects: [
    {
          image: require("./assets/images/Finfincky.PNG"),
          link: "https://nlohiya.shinyapps.io/Fin-Finicky/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements, Certifications and some other cool stuff that I have done !",

  achievementsCards: [
      
      {
          title: "Alteryx Core",
          subtitle: "Alteryx Designer: Core design certification, March 2020.",
          image: require("./assets/images/AlteeryxcertificateLogo.png"),
          footerLink: [{ name: "View Certificate", url: "https://community.alteryx.com/t5/user/viewprofilepage/user-id/88164" }]
      },
      {
      title: "CFA Level 2 Candidate",
      subtitle: "Cleared CFA Level 1 Exam, June 2017.",
      image: require("./assets/images/CFALogo.png"),
      footerLink: [
          { name: "Certification", url: "https://basno.com/es1q5bik" }
      ]
    },

    {
      title: "USEReady: February Spot Award Winner",
      subtitle: "Won spot award - February 2020 for performance commendation from the clients.",
        image: require("./assets/images/UsereadyLogo.png"),
      footerLink: [
        { name: "Certification", url: "" }
      ]
    }
  ]
};

// Blogs Section
// Decommisioned as of 2020-11-29

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section
// Decommisioned as of 2020-11-29
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link

  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};


//Contact Information
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-973-960-0336",
  email_address: "nikilohiya@gmail.com"
};

//Twitter Section
// Decommisioned as of 2020-11-29
const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};


export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
