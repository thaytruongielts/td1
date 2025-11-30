import { Section } from './types';

export const quizData: Section[] = [
  {
    id: "attraction",
    title: "attraction",
    partOfSpeech: "noun",
    pronunciation: "/əˈtrækʃən/",
    definition: ["(countable) an interesting or lively place to go or thing to do"],
    examples: [
      "Buckingham Palace is a major tourist attraction.",
      "The main attraction of Giverny is Monet's garden.",
      "Attractions at the fair include a mini-circus, clowns, dancers and a jazz band.",
      "Feeding the animals proved a popular attraction for visitors to the farm."
    ],
    questions: [
      {
        id: "q51",
        originalNumber: "51",
        prefix: "The Grand Canyon is a natural",
        suffix: "that draws millions of visitors annually.",
        validAnswers: ["attraction"]
      },
      {
        id: "q52",
        originalNumber: "52",
        prefix: "The",
        suffix: "of the museum is the rare collection of ancient artifacts.",
        validAnswers: ["main attraction", "attraction"]
      }
    ]
  },
  {
    id: "violence",
    title: "violence",
    partOfSpeech: "noun",
    pronunciation: "/ˈvaɪələns/",
    definition: ["violent behaviour that is intended to hurt or kill somebody"],
    examples: [
      "Police do not think this killing was a random act of violence.",
      "He condemned the protesters' use of violence against the police.",
      "Domestic violence (= between family members)",
      "These people live under a constant threat of violence.",
      "Our organization works with victims of violence."
    ],
    questions: [
      {
        id: "q53",
        originalNumber: "53",
        prefix: "The charity focuses on helping",
        suffix: "rebuild their lives after traumatic experiences.",
        validAnswers: ["victims of violence", "victims"]
      },
      {
        id: "q54",
        originalNumber: "54",
        prefix: "She was forced to leave her home to escape",
        suffix: "and find a safer place to live.",
        validAnswers: ["violence", "domestic violence", "the violence"]
      }
    ]
  },
  {
    id: "function",
    title: "function",
    partOfSpeech: "noun",
    pronunciation: "/ˈfʌŋkʃən/",
    definition: ["(countable, uncountable) a special activity or purpose of a person or thing"],
    examples: [
      "The club serves a useful function as a meeting place.",
      "to fulfil/perform a function",
      "What is your function in the department?",
      "bodily functions (= for example eating, sex, using the toilet)",
      "The function of the heart is to pump blood through the body.",
      "This design aims for harmony of form and function."
    ],
    questions: [
      {
        id: "q55",
        originalNumber: "55",
        prefix: "Certain medications can affect your",
        suffix: ", leading to side effects like dizziness or nausea.",
        validAnswers: ["bodily functions", "functions"]
      },
      {
        id: "q56",
        originalNumber: "56",
        prefix: "The new software update is designed to",
        suffix: "that automatically saves your work every 10 minutes.",
        validAnswers: ["perform a function", "fulfil a function", "function"] 
      }
    ]
  },
  {
    id: "equal",
    title: "equal",
    partOfSpeech: "adjective",
    pronunciation: "/ˈiːkwəl/",
    definition: ["the same in size, quantity, value, etc. as something else"],
    examples: [
      "There is an equal number of boys and girls in the class.",
      "Each side will put in an equal amount of money.",
      "Cut it into four equal parts.",
      "equal to somebody/something: One ounce is equal to 28.3 grams.",
      "equal in something: The two countries are roughly equal in size."
    ],
    questions: [
      {
        id: "q57",
        originalNumber: "57",
        prefix: "No one in the team is",
        suffix: "John in terms of experience.",
        validAnswers: ["equal to"]
      },
      {
        id: "q58",
        originalNumber: "58",
        prefix: "The recipe calls for",
        suffix: "of flour, sugar, and butter to make the cake.",
        validAnswers: ["equal amounts", "an equal amount", "equal parts"]
      }
    ]
  },
  {
    id: "advantage",
    title: "advantage",
    partOfSpeech: "noun",
    pronunciation: "/ədˈvɑːntɪdʒ/",
    definition: ["a thing that helps you to be better or more successful than other people"],
    examples: [
      "a distinct/significant/huge advantage",
      "It gives you an unfair advantage.",
      "She had the advantage of a good education.",
      "You will be at an advantage in the interview if you have thought about the questions in advance."
    ],
    questions: [
      {
        id: "q59",
        originalNumber: "59",
        prefix: "He was accused of using insider information to gain a(n)",
        suffix: "in the stock market.",
        validAnswers: ["unfair advantage", "advantage"]
      },
      {
        id: "q60",
        originalNumber: "60",
        prefix: "The team",
        suffix: "of playing on their home turf, which motivated them to perform better.",
        validAnswers: ["had the advantage", "took advantage"]
      }
    ]
  },
  {
    id: "information",
    title: "information",
    partOfSpeech: "noun",
    pronunciation: "/ˌɪnfəˈmeɪʃn/",
    definition: ["facts or details about somebody/something"],
    examples: [
      "a piece of information",
      "What was your main source of information for your article?",
      "The documents contain confidential personal information.",
      "More detailed information is not yet available."
    ],
    questions: [
      {
        id: "q43",
        originalNumber: "43",
        prefix: "Please visit our website for",
        suffix: "about the program and how to apply.",
        validAnswers: ["information", "more detailed information", "more information", "detailed information"]
      },
      {
        id: "q44",
        originalNumber: "44",
        prefix: "Teachers encourage students to use books as a reliable",
        suffix: "for assignments.",
        validAnswers: ["source of information"]
      }
    ]
  },
  {
    id: "environmental",
    title: "environmental",
    partOfSpeech: "adjective",
    pronunciation: "/ɪnˌvaɪrənˈmentl/",
    definition: ["connected with the natural conditions in which people, animals and plants live"],
    examples: [
      "the environmental impact of pollution",
      "Their main objective is to promote environmental protection.",
      "environmental issues/problems/concerns",
      "an environmental group/movement"
    ],
    questions: [
      {
        id: "q45",
        originalNumber: "45",
        prefix: "Education about",
        suffix: "helps people understand how to care for the Earth.",
        validAnswers: ["environmental protection", "environmental issues", "environmental problems"]
      },
      {
        id: "q46",
        originalNumber: "46",
        prefix: "Scientists are studying the",
        suffix: "of plastic waste on marine ecosystems.",
        validAnswers: ["environmental impact", "impact"]
      }
    ]
  },
  {
    id: "environment_topic",
    title: "1. Environment (Môi trường) 🌳",
    definition: [],
    examples: [
      "Protect the environment: We must protect the environment from pollution and climate change.",
      "Environmental pollution: The government is trying to reduce environmental pollution caused by factories.",
      "Impact on the environment: Scientists are studying the long-term impact on the environment of plastic waste.",
      "Familiar environment: Moving to a new country meant leaving his safe and familiar environment."
    ],
    isTopicBased: true,
    questions: [
      {
        id: "t1_q1",
        originalNumber: "1",
        prefix: "Tourists should be aware of their",
        suffix: "when visiting natural sites.",
        validAnswers: ["impact on the environment", "environmental impact"]
      },
      {
        id: "t1_q2",
        originalNumber: "2",
        prefix: "The new laws aim to reduce",
        suffix: "caused by industrial waste.",
        validAnswers: ["environmental pollution", "pollution"]
      }
    ]
  },
  {
    id: "improve_topic",
    title: "2. Improve (Cải thiện) ✅",
    definition: [],
    examples: [
      "Improve your skills: You need to practice regularly to improve your skills in English speaking.",
      "Improve the quality: The company promised to improve the quality of its service after receiving customer complaints.",
      "Improve significantly: His ability to manage stress has improved significantly since he started exercising.",
      "Improve his mood: A walk in the park usually helps to improve his mood after a long workday."
    ],
    isTopicBased: true,
    questions: [
      {
        id: "t2_q1",
        originalNumber: "1",
        prefix: "This new software is designed to",
        suffix: "in the workplace.",
        validAnswers: ["improve your skills", "improve skills", "improve efficiency"] 
        // "improve efficiency" isn't in example, but contextually relevant. Sticking to examples: "improve your skills"
      },
      {
        id: "t2_q2",
        originalNumber: "2",
        prefix: "After receiving feedback, the chef promised to",
        suffix: "of the dishes.",
        validAnswers: ["improve the quality", "improve quality"]
      }
    ]
  },
  {
    id: "successful_topic",
    title: "3. Successful (Thành công) 🏆",
    definition: [],
    examples: [
      "Highly successful: She became a highly successful entrepreneur before the age of thirty.",
      "A successful career: Dedication and passion are key to building a successful career.",
      "Successful outcome: The negotiations had a successful outcome, pleasing both parties involved.",
      "Successful in doing something: They were successful in raising enough money for the charity project."
    ],
    isTopicBased: true,
    questions: [
      {
        id: "t3_q1",
        originalNumber: "1",
        prefix: "Finding a balance between work and life is essential for",
        suffix: ".",
        validAnswers: ["a successful career", "building a successful career"]
      },
      {
        id: "t3_q2",
        originalNumber: "2",
        prefix: "The meeting between the two leaders resulted in a",
        suffix: "for the country.",
        validAnswers: ["successful outcome"]
      }
    ]
  },
  {
    id: "opportunity_topic",
    title: "4. Opportunity (Cơ hội) 🌟",
    definition: [],
    examples: [
      "Seize an opportunity: When you are given a chance to learn, you should seize an opportunity.",
      "Miss an opportunity: If you don't send your application soon, you will miss a great opportunity.",
      "Offer an opportunity: The university program offers an opportunity for students to complete an internship abroad.",
      "Opportunity for everyone: Quality education should be an opportunity for everyone, regardless of their background."
    ],
    isTopicBased: true,
    questions: [
      {
        id: "t4_q1",
        originalNumber: "1",
        prefix: "Students should try to",
        suffix: "to study abroad when it comes up.",
        validAnswers: ["seize an opportunity", "seize the opportunity", "seize opportunities"]
      },
      {
        id: "t4_q2",
        originalNumber: "2",
        prefix: "He regretted that he had",
        suffix: "to invest in the growing market.",
        validAnswers: ["missed an opportunity", "missed the opportunity", "missed a great opportunity"]
      }
    ]
  },
  {
    id: "community_topic",
    title: "5. Community (Cộng đồng) 🤝",
    definition: [],
    examples: [
      "Local community: We work closely with the local community to organize neighborhood events.",
      "Support the community: All businesses should try to support the community that they operate in.",
      "Community work: She spends her weekends doing community work at the local orphanage.",
      "Serve the community: The police officer is committed to protecting and serving the community."
    ],
    isTopicBased: true,
    questions: [
      {
        id: "t5_q1",
        originalNumber: "1",
        prefix: "The new library was built for the benefit of the whole",
        suffix: ".",
        validAnswers: ["local community", "community"]
      },
      {
        id: "t5_q2",
        originalNumber: "2",
        prefix: "We encourage every student to participate in",
        suffix: "at least once a month.",
        validAnswers: ["community work"]
      }
    ]
  }
];