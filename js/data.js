/*
 * AI Mindmap content (generated from content source).
 * Node fields: id, label, description, icon (icon-set name), how (3 steps, optional),
 * seenIn (examples), fact ("Did you know?"), daily (bool), tier (1), related (ids), links (ids), children.
 * All fields except id, label, description, daily, tier, children are optional.
 * Edit freely: add nodes, add or remove optional fields.
 */
window.MINDMAP_DATA = {
  "id": "ai",
  "label": "Artificial Intelligence",
  "description": "Computers that can do things we usually need human thinking for, like seeing, listening, talking and choosing.",
  "icon": "bot",
  "fact": "The term 'artificial intelligence' was coined for a 1956 summer workshop at Dartmouth College.",
  "daily": false,
  "tier": 1,
  "related": [],
  "links": [],
  "children": [
    {
      "id": "tech",
      "label": "Technology",
      "description": "The different kinds of AI. Each kind works in its own way, like different tools in a toolbox.",
      "icon": "cpu",
      "fact": "Most AI in daily life comes from machine learning and neural networks, which are only two of the six families here.",
      "daily": false,
      "tier": 1,
      "related": [],
      "links": [],
      "children": [
        {
          "id": "tech-rule-based-ai",
          "label": "Rule-Based AI",
          "description": "A computer that follows instructions written by people, like a cook following a recipe step by step.",
          "icon": "list-checks",
          "fact": "Many of the first AI programs, in the 1970s and 80s, were built entirely from hand-written rules.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "tech-rule-based-ai-expert-systems",
              "label": "Expert Systems",
              "description": "A computer that follows an expert's advice, like a doctor's checklist: if fever and cough, then check for flu.",
              "icon": "book-marked",
              "how": [
                "Experts write down their rules, such as \"if fever and cough, then check for flu\"",
                "You answer questions on the screen",
                "The computer follows the rules and gives advice"
              ],
              "seenIn": [
                "Online symptom checkers",
                "Step-by-step troubleshooting guides"
              ],
              "fact": "A 1970s program called MYCIN used several hundred rules to suggest antibiotics for blood infections.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-rule-based-ai-search-and-planning",
              "label": "Search and Planning",
              "description": "The computer tries many ways to reach a goal and picks the best one, like choosing the quickest road to a faraway town.",
              "icon": "route",
              "how": [
                "List all the possible routes or moves",
                "Check which one reaches the goal best",
                "Pick that one"
              ],
              "seenIn": [
                "Map apps finding the quickest route",
                "Chess programs"
              ],
              "fact": "Deep Blue, the computer that beat chess champion Garry Kasparov in 1997, checked hundreds of millions of positions every second.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-rule-based-ai-knowledge-graphs",
              "label": "Knowledge Graphs",
              "description": "A big web of facts joined together, like a family tree. Kathmandu links to Nepal, and Nepal links to Everest.",
              "icon": "network",
              "how": [
                "Write down facts, such as \"Kathmandu is the capital of Nepal\"",
                "Link related facts together into a big web",
                "Answer questions by following the links"
              ],
              "seenIn": [
                "The fact box beside Google search results",
                "Voice assistants answering questions"
              ],
              "fact": "Search engines started using knowledge graphs widely in the early 2010s.",
              "daily": true,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-rule-based-ai-fuzzy-logic",
              "label": "Fuzzy Logic",
              "description": "Gives answers like \"a little hot\" or \"very hot\", not just yes or no. Like a cook who lowers the flame slowly instead of switching it off.",
              "icon": "sliders-horizontal",
              "how": [
                "Measure something, like how hot the rice is",
                "Decide how much: a little hot, quite hot or very hot",
                "Turn the heat up or down slowly to match"
              ],
              "seenIn": [
                "Rice cookers",
                "Air conditioners"
              ],
              "fact": "Fuzzy logic was proposed by Lotfi Zadeh in 1965.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "tech-machine-learning",
          "label": "Machine Learning",
          "description": "A computer that learns from many examples, the way a child learns to know a cow after seeing many cows.",
          "icon": "brain",
          "fact": "The term 'machine learning' was used in 1959 by Arthur Samuel, whose checkers program improved by playing.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "tech-machine-learning-learning-with-answers",
              "label": "Learning with Answers (Supervised)",
              "description": "The computer learns from examples that come with the right answer, like a teacher marking every practice question.",
              "icon": "tag",
              "how": [
                "Show the computer thousands of examples with the right answer",
                "It learns what all the \"cat\" photos have in common",
                "Show a new photo and it guesses the answer"
              ],
              "seenIn": [
                "Photo apps that group your pictures",
                "Spam filters"
              ],
              "fact": "Spam filters learn from emails that people have marked as junk.",
              "daily": true,
              "tier": 1,
              "related": [
                "cap-see-recognise-objects",
                "app-factories-spotting-defects"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "tech-machine-learning-learning-without-answers",
              "label": "Learning without Answers (Unsupervised)",
              "description": "The computer sorts things into groups by itself, like a shopkeeper who puts similar items on the same shelf.",
              "icon": "shapes",
              "how": [
                "Give it lots of items with no labels",
                "It checks which ones look alike",
                "It puts similar ones in the same group"
              ],
              "seenIn": [
                "Online shops grouping similar customers",
                "News apps grouping stories about the same event"
              ],
              "fact": "Nobody tells the system what the groups mean. People work that out afterwards.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-machine-learning-learning-by-trial-and-error",
              "label": "Learning by Trial and Error (Reinforcement)",
              "description": "The computer learns by trying and getting a reward or a penalty, like a child learning to ride a bicycle by falling and trying again.",
              "icon": "trophy",
              "how": [
                "The computer tries something",
                "It gets a reward if it was good and a penalty if it was bad",
                "It repeats this many times and keeps what worked"
              ],
              "seenIn": [
                "Game-playing AI",
                "Robots learning to walk"
              ],
              "fact": "In 2016, DeepMind's AlphaGo beat Go champion Lee Sedol four games to one.",
              "daily": false,
              "tier": 1,
              "related": [
                "cap-act-control-machines"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "tech-machine-learning-learning-by-filling-gaps",
              "label": "Learning by Filling Gaps (Self-Supervised)",
              "description": "The computer hides a word in a sentence and guesses it, like a fill-in-the-blanks exercise at school. Chatbots learn this way.",
              "icon": "puzzle",
              "how": [
                "Hide one word in a sentence",
                "The computer guesses the hidden word",
                "It checks the answer and learns, again and again"
              ],
              "seenIn": [
                "Chatbots",
                "Writing assistants"
              ],
              "fact": "It needs no human-made labels, so it can learn from enormous amounts of raw text.",
              "daily": false,
              "tier": 1,
              "related": [
                "tech-generative-ai-large-language-models"
              ],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "tech-neural-networks",
          "label": "Neural Networks",
          "description": "A computer design copied loosely from the brain, with many small parts passing messages to each other.",
          "icon": "brain-circuit",
          "fact": "The first mathematical model of an artificial neuron dates back to 1943.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "tech-neural-networks-image-networks",
              "label": "Image Networks (CNN)",
              "description": "Looks at a picture in small pieces, first lines, then shapes, then the whole thing, like spotting a house by its outline, then its door and windows.",
              "icon": "scan-eye",
              "how": [
                "Look at the picture in small pieces",
                "First notice lines and edges, then shapes",
                "Put the shapes together to name the object"
              ],
              "seenIn": [
                "Photo search on your phone",
                "Medical scan analysis"
              ],
              "fact": "In the 1990s, networks like this were already reading handwritten digits on bank cheques.",
              "daily": false,
              "tier": 1,
              "related": [
                "cap-see-recognise-objects",
                "app-health-spotting-disease-in-scans"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "tech-neural-networks-sequence-networks",
              "label": "Sequence Networks (RNN)",
              "description": "Reads things one after another and remembers what came before, like following a story or a song line by line.",
              "icon": "repeat",
              "how": [
                "Read one item at a time, such as one word",
                "Remember what came before",
                "Use that memory to guess what comes next"
              ],
              "seenIn": [
                "Early voice typing",
                "Early translation tools"
              ],
              "fact": "Transformers have replaced them for most language tasks, but they are still used for some time-based data.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-neural-networks-transformers",
              "label": "Transformers",
              "description": "Understands which words in a sentence are connected, like knowing \"he\" means Ram in \"Ram said he was tired\". Modern chatbots are built on it.",
              "icon": "layers",
              "how": [
                "Break the sentence into small pieces",
                "Work out which pieces are connected to each other",
                "Use this to understand the sentence or write the next word"
              ],
              "seenIn": [
                "Chatbots",
                "Translation apps"
              ],
              "fact": "They were introduced in a 2017 research paper titled 'Attention Is All You Need'.",
              "daily": true,
              "tier": 1,
              "related": [
                "tech-generative-ai-large-language-models"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "tech-neural-networks-graph-networks",
              "label": "Graph Networks (GNN)",
              "description": "Learns from how things are connected, like friends, relatives and neighbours in a village.",
              "icon": "waypoints",
              "how": [
                "Draw people or things as dots, and their connections as lines",
                "Let each dot learn from its neighbours",
                "Use that to make a guess about each dot"
              ],
              "seenIn": [
                "Estimating journey times in map apps",
                "Searching for new medicines"
              ],
              "fact": "DeepMind worked with Google Maps to improve arrival-time predictions using graph networks.",
              "daily": false,
              "tier": 1,
              "related": [
                "app-transport-and-delivery-navigation"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "tech-neural-networks-spiking-networks",
              "label": "Spiking Networks (SNN)",
              "description": "Works in short bursts, like brain cells, and stays quiet when nothing happens, like a light that turns on only when someone walks in.",
              "icon": "zap",
              "how": [
                "Each small part stays quiet most of the time",
                "It sends a quick signal only when needed",
                "This uses very little energy"
              ],
              "seenIn": [
                "Mostly research labs",
                "Experimental low-power chips"
              ],
              "fact": "The human brain runs on about 20 watts, roughly the power of a dim light bulb.",
              "daily": false,
              "tier": 1,
              "related": [
                "tech-next-generation-ai-brain-like-chips"
              ],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "tech-generative-ai",
          "label": "Generative AI",
          "description": "AI that makes new things, like a writer, painter or singer, instead of only checking things that already exist.",
          "icon": "wand-sparkles",
          "fact": "Chat and image tools that create new content reached mass audiences in 2022 and 2023.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "tech-generative-ai-large-language-models",
              "label": "Large Language Models",
              "description": "A computer that has read a huge amount of text, so it can write and answer in sentences, like a very well-read friend who chats with you.",
              "icon": "message-square-text",
              "how": [
                "Read huge amounts of text",
                "Learn which words usually come after which",
                "Write an answer one word at a time"
              ],
              "seenIn": [
                "Chatbots",
                "Writing and email assistants"
              ],
              "fact": "They only predict the next piece of text, yet that one skill lets them answer questions, translate and write code.",
              "daily": true,
              "tier": 1,
              "related": [
                "tech-machine-learning-learning-by-filling-gaps",
                "tech-neural-networks-transformers",
                "cap-create-write",
                "cap-understand-language-answer-questions"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "tech-generative-ai-diffusion-models",
              "label": "Diffusion Models",
              "description": "Draws a picture by starting with a blur of dots and clearing it little by little, like wiping steam off a mirror.",
              "icon": "image",
              "how": [
                "Take many pictures and slowly turn them into noise, like TV static",
                "Teach the computer to clean the noise step by step",
                "Start with noise and your words, and clean it into a new picture"
              ],
              "seenIn": [
                "AI image tools",
                "Photo editors that fill in missing areas"
              ],
              "fact": "The name comes from physics: how a drop of ink spreads out through water.",
              "daily": false,
              "tier": 1,
              "related": [
                "cap-create-draw"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "tech-generative-ai-rival-networks",
              "label": "Rival Networks (GANs)",
              "description": "Two computers compete: one makes fake notes and the other tries to catch them, like a counterfeiter and a police officer. Both get better.",
              "icon": "swords",
              "how": [
                "One computer makes fake pictures",
                "The other tries to tell fake from real",
                "Both keep improving until the fakes look real"
              ],
              "seenIn": [
                "Realistic computer-made faces",
                "'Deepfake' videos"
              ],
              "fact": "GANs were introduced by Ian Goodfellow and colleagues in 2014.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-generative-ai-compressing-networks",
              "label": "Compressing Networks (VAEs)",
              "description": "Shrinks a picture into a tiny summary and then rebuilds it, like describing a scene to a friend so they can draw it. Change the summary and you get a new picture.",
              "icon": "minimize-2",
              "how": [
                "Shrink a picture into a short summary",
                "Rebuild the picture from the summary",
                "Change the summary a little to get a new picture"
              ],
              "seenIn": [
                "Image and design tools",
                "Designing new molecules"
              ],
              "fact": "In the compact code, similar things end up close together, like places on a map.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "tech-robotics",
          "label": "Robotics",
          "description": "AI inside a machine that can move and work in the real world.",
          "icon": "bot",
          "fact": "The word 'robot' comes from a 1920 Czech play by Karel Čapek.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "tech-robotics-factory-robots",
              "label": "Factory Robots",
              "description": "Strong robot arms that do the same job again and again, like lifting and joining parts in a car factory.",
              "icon": "factory",
              "how": [
                "Sensors find where the part is",
                "The robot plans how to move its arm",
                "It does the same job again and again, very exactly"
              ],
              "seenIn": [
                "Car assembly lines",
                "Warehouse packing"
              ],
              "fact": "The first industrial robot, Unimate, started work at a General Motors factory in 1961.",
              "daily": false,
              "tier": 1,
              "related": [
                "app-factories-spotting-defects"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "tech-robotics-home-and-service-robots",
              "label": "Home and Service Robots",
              "description": "Machines that help with chores, like a robot that sweeps the floor on its own.",
              "icon": "house",
              "how": [
                "Sensors find walls and furniture",
                "The robot plans a path that covers the whole floor",
                "It turns around when something blocks the way"
              ],
              "seenIn": [
                "Robot vacuum cleaners",
                "Robot waiters in some restaurants"
              ],
              "fact": "Many robot vacuums build a map of your home and remember it.",
              "daily": true,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-robotics-self-driving-vehicles",
              "label": "Self-Driving Vehicles",
              "description": "Cars that drive themselves using cameras and sensors, like a driver who never gets tired.",
              "icon": "car",
              "how": [
                "Cameras and sensors watch the road",
                "The computer spots people, vehicles and signs, and guesses how they will move",
                "It steers, speeds up and brakes"
              ],
              "seenIn": [
                "Driverless taxis in a few cities abroad",
                "Lane and parking help in newer cars"
              ],
              "fact": "Driving automation is rated from level 0 to level 5, and most cars on sale today sit at level 2 or below.",
              "daily": false,
              "tier": 1,
              "related": [
                "app-transport-and-delivery-self-driving-cars"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "tech-robotics-drones",
              "label": "Drones",
              "description": "Small flying machines that can fly and look around on their own, useful in places that are hard to reach, like mountains and bridges.",
              "icon": "plane",
              "how": [
                "Cameras and sensors look around",
                "The computer plans a safe path",
                "The drone avoids obstacles and does its job"
              ],
              "seenIn": [
                "Checking bridges and power lines",
                "Photographing farmland and mountains"
              ],
              "fact": "Drones can inspect places that are dangerous or costly for people to climb.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-robotics-humanoid-robots",
              "label": "Humanoid Robots",
              "description": "Robots built in the shape of a person, with a head, arms and legs, so they can work in places made for people.",
              "icon": "person-standing",
              "how": [
                "Cameras and sensors see the surroundings",
                "The computer keeps the body balanced on two legs",
                "The hands pick up and carry things"
              ],
              "seenIn": [
                "Trials in factories and warehouses",
                "Research labs"
              ],
              "fact": "Walking on two legs is hard for a robot, because it must stay balanced at every step.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-robotics-robot-swarms",
              "label": "Robot Swarms",
              "description": "Many small robots working together without a leader, like ants carrying food or a flock of birds flying.",
              "icon": "bird",
              "how": [
                "Each robot follows a few simple rules",
                "Neighbouring robots share signals",
                "Together they act like a team, without a leader"
              ],
              "seenIn": [
                "Research demonstrations",
                "Drone light shows"
              ],
              "fact": "Swarm designs are inspired by ants, bees and flocks of birds.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "tech-next-generation-ai",
          "label": "Next-Generation AI",
          "description": "New ideas that people are still trying out.",
          "icon": "rocket",
          "fact": "Some of these ideas are already in your pocket, and others are still lab experiments.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "tech-next-generation-ai-ai-on-your-device",
              "label": "AI on Your Device (Edge AI)",
              "description": "AI that works inside your phone itself, without needing the internet, like face unlock.",
              "icon": "smartphone",
              "how": [
                "Make the AI small enough to fit inside a phone",
                "Run it on the phone itself",
                "Get the answer without sending your information away"
              ],
              "seenIn": [
                "Face unlock",
                "Voice typing that works offline"
              ],
              "fact": "Running on the device keeps your photos and voice on it, and works without a signal.",
              "daily": true,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-next-generation-ai-learning-without-sharing-data",
              "label": "Learning without Sharing Data (Federated)",
              "description": "Many phones help teach one AI, but each person's private information stays on their own phone.",
              "icon": "share-2",
              "how": [
                "Each phone learns a little from its own owner",
                "Only the small lesson is sent, not the private information",
                "A central computer combines lessons from many phones"
              ],
              "seenIn": [
                "Keyboard suggestions on some phones"
              ],
              "fact": "Google researchers introduced the term around 2016.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-next-generation-ai-brain-like-chips",
              "label": "Brain-Like Chips (Neuromorphic)",
              "description": "A computer chip built like a brain, so it can work with very little electricity.",
              "icon": "microchip",
              "how": [
                "The chip has many tiny parts that act like brain cells",
                "They work only when a signal arrives",
                "This saves a lot of electricity"
              ],
              "seenIn": [
                "Research labs",
                "Experimental chips"
              ],
              "fact": "Intel's Loihi and IBM's TrueNorth are examples of brain-inspired chips.",
              "daily": false,
              "tier": 1,
              "related": [
                "tech-neural-networks-spiking-networks"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "tech-next-generation-ai-quantum-ai",
              "label": "Quantum AI",
              "description": "A very new kind of computer that works in a very different way and may solve some hard puzzles much faster. Still being tested in labs.",
              "icon": "atom",
              "how": [
                "A quantum computer uses tiny parts that can be in many states at once",
                "It explores many possible answers together",
                "The best answer is read out at the end"
              ],
              "seenIn": [
                "Research labs, so far"
              ],
              "fact": "Quantum computers today are still small and error-prone, so many of the claims are about the future.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "tech-next-generation-ai-explainable-ai",
              "label": "Explainable AI",
              "description": "AI that can tell you why it made a decision, like a student who shows the working and not just the answer.",
              "icon": "lightbulb",
              "how": [
                "The AI makes a decision",
                "A tool shows which facts mattered most",
                "A person checks whether the reasons make sense"
              ],
              "seenIn": [
                "Loan decisions that list the main reasons",
                "Highlighted areas on medical scans"
              ],
              "fact": "In some places, people have a right to challenge decisions made only by automated systems.",
              "daily": false,
              "tier": 1,
              "related": [
                "app-money-and-banking-deciding-loans"
              ],
              "links": [],
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": "app",
      "label": "Applications",
      "description": "The places where AI is already being used in the world.",
      "icon": "globe",
      "fact": "AI is at work well beyond screens, on farms, in factories, in hospitals and across power grids.",
      "daily": false,
      "tier": 1,
      "related": [],
      "links": [],
      "children": [
        {
          "id": "app-health",
          "label": "Health",
          "description": "Helping doctors and patients stay well.",
          "icon": "heart-pulse",
          "fact": "Tools that read medical images make up a large share of the AI medical devices cleared in the United States.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "app-health-spotting-disease-in-scans",
              "label": "Spotting Disease in Scans",
              "description": "Look at X-rays and scans to find signs of illness early, like a second pair of eyes for the doctor.",
              "icon": "scan-line",
              "seenIn": [
                "Breast cancer screening support",
                "Chest X-ray triage"
              ],
              "fact": "Most AI medical devices cleared by the US regulator are for radiology.",
              "daily": false,
              "tier": 1,
              "related": [
                "tech-neural-networks-image-networks"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-health-finding-new-medicines",
              "label": "Finding New Medicines",
              "description": "Test many possible medicines on a computer first, so scientists only try the best ones in the lab.",
              "icon": "pill",
              "seenIn": [
                "Pharmaceutical research labs"
              ],
              "fact": "Developing a new medicine typically takes ten years or more.",
              "daily": false,
              "tier": 1,
              "related": [
                "app-science-and-research-protein-shapes"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-health-watching-vital-signs",
              "label": "Watching Vital Signs",
              "description": "Keep an eye on heartbeat and other body signs, and warn if something looks wrong, like a smartwatch.",
              "icon": "activity",
              "seenIn": [
                "Smartwatch irregular heartbeat alerts",
                "Hospital monitors"
              ],
              "fact": "Some smartwatches can notify you of an irregular heart rhythm.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-health-helping-doctors-decide",
              "label": "Helping Doctors Decide",
              "description": "Give doctors suggestions about what an illness may be, like a helper who has read thousands of cases.",
              "icon": "stethoscope",
              "seenIn": [
                "Tools that warn about drug interactions"
              ],
              "fact": "Doctors stay responsible for the final decision.",
              "daily": false,
              "tier": 1,
              "related": [
                "cap-decide-and-plan-support-decisions"
              ],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "app-money-and-banking",
          "label": "Money and Banking",
          "description": "Keeping money safe and fair.",
          "icon": "banknote",
          "fact": "Card networks check each payment against your usual patterns in a fraction of a second.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "app-money-and-banking-catching-card-fraud",
              "label": "Catching Card Fraud",
              "description": "Notice odd payments and stop them, like a bank clerk who knows your habits and says \"this is not like you\".",
              "icon": "credit-card",
              "seenIn": [
                "Bank and wallet apps asking 'Was this you?'"
              ],
              "fact": "Checks often finish in well under a second, while you are still at the till.",
              "daily": true,
              "tier": 1,
              "related": [
                "cap-predict-spot-the-unusual"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-money-and-banking-deciding-loans",
              "label": "Deciding Loans",
              "description": "Help a bank judge whether a person is likely to repay a loan.",
              "icon": "hand-coins",
              "seenIn": [
                "Instant credit decisions online"
              ],
              "fact": "In many places, lenders must be able to explain why a loan was declined.",
              "daily": false,
              "tier": 1,
              "related": [
                "tech-next-generation-ai-explainable-ai"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-money-and-banking-automated-trading",
              "label": "Automated Trading",
              "description": "Computers that buy and sell shares in a blink, much faster than any person can.",
              "icon": "chart-candlestick",
              "seenIn": [
                "Stock exchanges"
              ],
              "fact": "A large share of trades on major stock markets is automated.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "app-education",
          "label": "Education",
          "description": "Helping students learn and teachers teach.",
          "icon": "graduation-cap",
          "fact": "Studies since the 1980s found that one-to-one tutoring beats group teaching, which is what AI tutors try to offer at scale.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "app-education-ai-tutors",
              "label": "AI Tutors",
              "description": "A patient helper that explains step by step, like a tutor who is available at any hour.",
              "icon": "user-round",
              "seenIn": [
                "Language apps",
                "Maths practice tools"
              ],
              "fact": "The aim is to give every student patient, personal help at any hour.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-education-lessons-that-adapt",
              "label": "Lessons That Adapt",
              "description": "Lessons that get easier or harder to suit each student, like a teacher who slows down when you are stuck.",
              "icon": "signal",
              "seenIn": [
                "Practice apps that get harder as you improve"
              ],
              "fact": "Software adjusts difficulty to keep tasks challenging without being frustrating.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-education-automatic-marking",
              "label": "Automatic Marking",
              "description": "Check answers and give marks quickly, like a teacher who marks a multiple-choice test in seconds.",
              "icon": "check-check",
              "seenIn": [
                "Quiz platforms",
                "Spelling and grammar checks"
              ],
              "fact": "Marking essays is much harder than marking multiple choice, so a person usually stays in the loop.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "app-accessibility",
          "label": "Accessibility",
          "description": "Helping everyone use technology, including people who cannot easily see, hear or move.",
          "icon": "accessibility",
          "fact": "Features built for accessibility often end up helping everyone, such as captions in a noisy room.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "app-accessibility-live-captions",
              "label": "Live Captions",
              "description": "Show spoken words as text on the screen while people speak, like subtitles for people who cannot hear.",
              "icon": "captions",
              "seenIn": [
                "Video calls",
                "Videos on your phone"
              ],
              "fact": "They help people who are deaf or hard of hearing, and anyone in a noisy place.",
              "daily": true,
              "tier": 1,
              "related": [
                "cap-hear-and-speak-recognise-speech"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-accessibility-describing-images",
              "label": "Describing Images",
              "description": "Tell a blind person what is in a picture by speaking it aloud.",
              "icon": "image",
              "seenIn": [
                "Screen readers describing photos online"
              ],
              "fact": "Automatic descriptions help blind and low-vision people follow images on the web.",
              "daily": false,
              "tier": 1,
              "related": [
                "cap-see-understand-scenes"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-accessibility-voice-control",
              "label": "Voice Control",
              "description": "Control your phone by speaking, without touching it.",
              "icon": "audio-lines",
              "seenIn": [
                "Smart speakers",
                "Hands-free phone use"
              ],
              "fact": "It gives people with limited use of their hands another way to control devices.",
              "daily": true,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "app-factories",
          "label": "Factories",
          "description": "Helping make things better and faster.",
          "icon": "warehouse",
          "fact": "Modern factories collect data from thousands of sensors, which AI then analyses.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "app-factories-spotting-defects",
              "label": "Spotting Defects",
              "description": "Cameras that notice broken or faulty items on a production line, like a careful inspector who never gets tired.",
              "icon": "scan-search",
              "seenIn": [
                "Inspecting circuit boards and bottles on a production line"
              ],
              "fact": "Cameras can check items faster than a person can and never get tired.",
              "daily": false,
              "tier": 1,
              "related": [
                "tech-machine-learning-learning-with-answers",
                "tech-robotics-factory-robots"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-factories-fixing-machines-early",
              "label": "Fixing Machines Early",
              "description": "Notice that a machine is getting weak and fix it before it breaks, like taking your motorbike for service when you hear a strange sound.",
              "icon": "wrench",
              "seenIn": [
                "Lifts, trains and aircraft engines"
              ],
              "fact": "Sensors can pick up small changes in vibration that appear before a breakdown.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-factories-tuning-production",
              "label": "Tuning Production",
              "description": "Keep adjusting the machines so less is wasted, like a cook adjusting salt and fire while cooking.",
              "icon": "settings-2",
              "seenIn": [
                "Chemical plants",
                "Car factories"
              ],
              "fact": "Small, continuous adjustments can reduce waste and energy use.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "app-transport-and-delivery",
          "label": "Transport and Delivery",
          "description": "Moving people and goods.",
          "icon": "truck",
          "fact": "Moving things efficiently is one of the oldest uses of computer optimisation.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "app-transport-and-delivery-self-driving-cars",
              "label": "Self-Driving Cars",
              "description": "Cars that drive themselves, using cameras and sensors instead of a driver.",
              "icon": "car",
              "seenIn": [
                "Driverless taxis in a few cities"
              ],
              "fact": "Fully driverless taxi services run in a few cities, usually within mapped areas.",
              "daily": false,
              "tier": 1,
              "related": [
                "tech-robotics-self-driving-vehicles"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-transport-and-delivery-smarter-traffic-lights",
              "label": "Smarter Traffic Lights",
              "description": "Traffic lights that change their timing based on how many vehicles are waiting, which could help busy cities like Kathmandu.",
              "icon": "traffic-cone",
              "seenIn": [
                "Adaptive signals at busy junctions"
              ],
              "fact": "Some cities have reduced waiting times by changing signals based on live traffic.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-transport-and-delivery-navigation",
              "label": "Navigation",
              "description": "Show the quickest way to a place and warn you about traffic.",
              "icon": "navigation",
              "seenIn": [
                "Google Maps and similar apps"
              ],
              "fact": "Apps combine live data from millions of phones to estimate traffic.",
              "daily": true,
              "tier": 1,
              "related": [
                "tech-neural-networks-graph-networks"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-transport-and-delivery-delivery-planning",
              "label": "Delivery Planning",
              "description": "Decide the best order to visit many places, so a delivery rider saves time and fuel.",
              "icon": "package",
              "seenIn": [
                "Courier and food delivery riders"
              ],
              "fact": "A route with just 20 stops can be ordered in more ways than there are seconds since the Big Bang.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "app-farming",
          "label": "Farming",
          "description": "Helping farmers grow more food.",
          "icon": "tractor",
          "fact": "Farmers now use satellites, drones and sensors to look after each part of a field.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "app-farming-precise-watering-and-feeding",
              "label": "Precise Watering and Feeding",
              "description": "Give each part of the field only the water and fertiliser it needs, like watering each plant instead of flooding the whole field.",
              "icon": "droplets",
              "seenIn": [
                "Smart irrigation",
                "Tractors with sensors"
              ],
              "fact": "Treating each patch of a field separately can cut water and fertiliser use.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-farming-crop-health-from-the-sky",
              "label": "Crop Health from the Sky",
              "description": "Look at fields from a drone or satellite to spot sick plants early.",
              "icon": "satellite",
              "seenIn": [
                "Drone surveys",
                "Satellite images of fields"
              ],
              "fact": "Infrared images can show plant stress before it is visible to the eye.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-farming-harvest-forecasts",
              "label": "Harvest Forecasts",
              "description": "Guess how much crop will be ready, so farmers and markets can plan.",
              "icon": "wheat",
              "seenIn": [
                "Government crop reports",
                "Food supply planning"
              ],
              "fact": "Harvest forecasts help governments and traders anticipate food prices.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "app-science-and-research",
          "label": "Science and Research",
          "description": "Helping scientists discover things faster.",
          "icon": "flask-conical",
          "fact": "AI is increasingly used as a research tool, to suggest ideas that scientists then test.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "app-science-and-research-protein-shapes",
              "label": "Protein Shapes",
              "description": "Work out the shape of proteins, the tiny building blocks of our body, which helps scientists make new medicines.",
              "icon": "dna",
              "seenIn": [
                "Biology and drug research"
              ],
              "fact": "DeepMind's AlphaFold has predicted structures for over 200 million proteins.",
              "daily": false,
              "tier": 1,
              "related": [
                "app-health-finding-new-medicines"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-science-and-research-new-materials",
              "label": "New Materials",
              "description": "Search for new materials, such as better batteries, without trying each one by hand.",
              "icon": "gem",
              "seenIn": [
                "Battery research"
              ],
              "fact": "AI has proposed millions of candidate materials, but each one still has to be tested in a lab.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-science-and-research-telescope-data",
              "label": "Telescope Data",
              "description": "Sift through huge numbers of star pictures to find planets and galaxies that people might miss.",
              "icon": "telescope",
              "seenIn": [
                "Planet searches",
                "Galaxy surveys"
              ],
              "fact": "AI helped find a planet in NASA Kepler data that earlier searches had missed.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-science-and-research-climate-simulation",
              "label": "Climate Simulation",
              "description": "Use computers to imitate the Earth's weather over many years, to understand how it may change.",
              "icon": "cloud-sun",
              "seenIn": [
                "Climate research centres"
              ],
              "fact": "Climate models divide the Earth into millions of grid cells, and AI can speed up parts of the calculation.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "app-energy-and-environment",
          "label": "Energy and Environment",
          "description": "Looking after power and nature.",
          "icon": "leaf",
          "fact": "Cleaner energy often means more variable energy, which makes good prediction more valuable.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "app-energy-and-environment-balancing-power-grids",
              "label": "Balancing Power Grids",
              "description": "Match the electricity being made with the electricity people are using, every moment.",
              "icon": "plug-zap",
              "seenIn": [
                "National electricity grids"
              ],
              "fact": "Supply and demand must match every second, or the grid becomes unstable.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-energy-and-environment-forecasting-sun-and-wind",
              "label": "Forecasting Sun and Wind",
              "description": "Guess how much sunshine and wind there will be, so solar and wind power can be planned.",
              "icon": "wind",
              "seenIn": [
                "Wind and solar farms"
              ],
              "fact": "Wind and solar output changes with the weather, so forecasts help grids plan ahead.",
              "daily": false,
              "tier": 1,
              "related": [
                "cap-predict-forecast"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-energy-and-environment-watching-nature",
              "label": "Watching Nature",
              "description": "Use satellite pictures to keep an eye on forests, rivers and air pollution.",
              "icon": "trees",
              "seenIn": [
                "Deforestation alerts from satellite images"
              ],
              "fact": "AI can scan satellite images to spot forest loss in near real time.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "app-shopping-and-media",
          "label": "Shopping and Media",
          "description": "What you buy, watch and see.",
          "icon": "shopping-bag",
          "fact": "Much of what you see online has been ranked or chosen for you by an algorithm.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "app-shopping-and-media-suggesting-what-to-buy-or-watch",
              "label": "Suggesting What to Buy or Watch",
              "description": "Show you videos, songs or products you may like, such as the next video that plays on YouTube.",
              "icon": "popcorn",
              "seenIn": [
                "YouTube, TikTok and Facebook",
                "Online shops"
              ],
              "fact": "The same skill, suggesting, powers shopping, video, music and news.",
              "daily": true,
              "tier": 1,
              "related": [
                "cap-predict-suggest"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "app-shopping-and-media-changing-prices",
              "label": "Changing Prices",
              "description": "Change prices up or down depending on demand, like air tickets costing more at festival time.",
              "icon": "badge-percent",
              "seenIn": [
                "Airline tickets",
                "Ride-hailing fares"
              ],
              "fact": "Airline fares can change many times in a single day.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-shopping-and-media-personalised-ads",
              "label": "Personalised Ads",
              "description": "Show you adverts for things you may want, based on what you search for and watch.",
              "icon": "megaphone",
              "seenIn": [
                "Ads while browsing the web",
                "Social media feeds"
              ],
              "fact": "Ads are matched using signals such as what you search for and browse.",
              "daily": true,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-shopping-and-media-moderating-posts",
              "label": "Moderating Posts",
              "description": "Find and hide harmful posts on social media, with help from people.",
              "icon": "shield-check",
              "seenIn": [
                "Social media platforms"
              ],
              "fact": "Large platforms use AI to flag posts for human reviewers, because the volume is too big for people alone.",
              "daily": true,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "app-public-services-and-safety",
          "label": "Public Services and Safety",
          "description": "Helping governments and keeping people safe.",
          "icon": "landmark",
          "fact": "Public services use AI to spot problems earlier and respond faster.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "app-public-services-and-safety-smart-cities",
              "label": "Smart Cities",
              "description": "Use sensors and computers to run city services better, like street lights, rubbish collection and traffic.",
              "icon": "building-2",
              "seenIn": [
                "Street lighting that adjusts to need",
                "Smarter waste collection"
              ],
              "fact": "Sensors across a city feed data to systems that adjust services as conditions change.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-public-services-and-safety-disaster-warnings",
              "label": "Disaster Warnings",
              "description": "Help predict floods, storms and similar events early so people can prepare, which matters in the monsoon season.",
              "icon": "siren",
              "seenIn": [
                "Flood forecasting",
                "Storm tracking"
              ],
              "fact": "Better forecasts give communities more time to prepare.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "app-public-services-and-safety-cyber-threats",
              "label": "Cyber Threats",
              "description": "Spot hackers and computer viruses, like a guard who notices a stranger at the gate.",
              "icon": "shield-alert",
              "seenIn": [
                "Antivirus software",
                "Network security"
              ],
              "fact": "Security software often spots attacks by recognising unusual behaviour.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        }
      ]
    },
    {
      "id": "cap",
      "label": "Capabilities",
      "description": "All the things AI can do for us.",
      "icon": "sparkles",
      "fact": "The same skill can power many different applications, so a few capabilities go a very long way.",
      "daily": false,
      "tier": 1,
      "related": [],
      "links": [],
      "children": [
        {
          "id": "cap-see",
          "label": "See",
          "description": "AI looking at pictures and videos and understanding them, like eyes and a brain working together.",
          "icon": "eye",
          "fact": "To a computer, a picture is a grid of numbers.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "cap-see-recognise-objects",
              "label": "Recognise Objects",
              "description": "Tell what is in a picture, like knowing that a photo shows a dog, a bus or a mountain.",
              "icon": "box",
              "seenIn": [
                "Photo search (\"show me dogs\")",
                "Plant-identifier apps"
              ],
              "fact": "In 2012 a neural network called AlexNet won an image contest by a wide margin, which helped spark the deep learning boom.",
              "daily": true,
              "tier": 1,
              "related": [
                "tech-machine-learning-learning-with-answers",
                "tech-neural-networks-image-networks"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "cap-see-recognise-faces",
              "label": "Recognise Faces",
              "description": "Know a person from their face, like your phone opening only for you.",
              "icon": "scan-face",
              "seenIn": [
                "Phone unlock",
                "Photo albums that group people"
              ],
              "fact": "Face recognition measures features of a face and turns them into numbers, and many places now regulate how it can be used.",
              "daily": true,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "cap-see-read-text-in-images",
              "label": "Read Text in Images",
              "description": "Read the words in a photo and turn them into typed text, so you do not have to type a signboard yourself.",
              "icon": "scan-text",
              "seenIn": [
                "Scanning a form or bill with your phone",
                "Translating signboards with your camera"
              ],
              "fact": "Postal services use it to read addresses and sort mail automatically.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "cap-see-understand-scenes",
              "label": "Understand Scenes",
              "description": "Understand what is happening in a photo, like \"two children are playing near a river\".",
              "icon": "image",
              "seenIn": [
                "Automatic photo captions",
                "Driver-assist cameras"
              ],
              "fact": "AI can caption many photos well, but can still miss unusual context.",
              "daily": false,
              "tier": 1,
              "related": [
                "app-accessibility-describing-images"
              ],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "cap-hear-and-speak",
          "label": "Hear and Speak",
          "description": "AI listening to what we say and speaking back.",
          "icon": "ear",
          "fact": "Speech recognition improved sharply in the 2010s thanks to deep learning.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "cap-hear-and-speak-recognise-speech",
              "label": "Recognise Speech",
              "description": "Turn your spoken words into written words, like typing by talking.",
              "icon": "mic",
              "seenIn": [
                "Voice typing on your phone, including in Nepali",
                "Smart speakers"
              ],
              "fact": "It can now handle many accents and noisy rooms, although it still makes mistakes.",
              "daily": true,
              "tier": 1,
              "related": [
                "app-accessibility-live-captions"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "cap-hear-and-speak-recognise-voices",
              "label": "Recognise Voices",
              "description": "Know who is speaking from the sound of the voice, like recognising your mother's voice on the phone.",
              "icon": "audio-waveform",
              "seenIn": [
                "Voice ID on some bank phone lines",
                "Smart speakers that know family members"
              ],
              "fact": "A voice has a pattern of its own, but synthetic voices can now copy it, so it is not foolproof.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "cap-hear-and-speak-speak-aloud",
              "label": "Speak Aloud",
              "description": "Read written words out loud in a human-like voice, like a news reader.",
              "icon": "volume-2",
              "seenIn": [
                "Map apps speaking directions",
                "Screen readers for blind users"
              ],
              "fact": "Early synthetic voices sounded robotic, while newer ones can sound very natural.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "cap-understand-language",
          "label": "Understand Language",
          "description": "AI understanding what people write and say.",
          "icon": "book-open",
          "fact": "Language is full of ambiguity, which is why it is hard for computers.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "cap-understand-language-translate",
              "label": "Translate",
              "description": "Change words from one language into another, like English into Nepali.",
              "icon": "languages",
              "seenIn": [
                "Google Translate, including Nepali",
                "Automatic subtitles on videos"
              ],
              "fact": "Popular translation tools now cover more than 100 languages.",
              "daily": true,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "cap-understand-language-summarise",
              "label": "Summarise",
              "description": "Make a long text short and keep the main points, like the headlines of a long newspaper article.",
              "icon": "file-text",
              "seenIn": [
                "Email thread summaries",
                "Meeting notes"
              ],
              "fact": "Summaries can leave out or distort details, so it is wise to check important ones.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "cap-understand-language-answer-questions",
              "label": "Answer Questions",
              "description": "Find the answer when you ask, like asking a very well-informed friend.",
              "icon": "circle-help",
              "seenIn": [
                "Search answer boxes",
                "Chatbots"
              ],
              "fact": "IBM's Watson won the quiz show Jeopardy! in 2011.",
              "daily": false,
              "tier": 1,
              "related": [
                "tech-generative-ai-large-language-models"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "cap-understand-language-sense-mood",
              "label": "Sense Mood",
              "description": "Tell if a comment or review sounds happy or angry, like understanding someone's mood from their words.",
              "icon": "smile",
              "seenIn": [
                "Companies reading product reviews",
                "Monitoring public opinion on social media"
              ],
              "fact": "Sarcasm is still hard for these systems to spot.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "cap-create",
          "label": "Create",
          "description": "AI making brand-new things.",
          "icon": "palette",
          "fact": "Creating is different from analysing: the AI produces something that did not exist before.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "cap-create-write",
              "label": "Write",
              "description": "Write sentences, letters and stories from a short instruction, like a helper who drafts your application letter.",
              "icon": "pen-line",
              "seenIn": [
                "Drafting emails and letters",
                "First drafts of reports"
              ],
              "fact": "AI-written text can sound confident while being wrong, so facts need checking.",
              "daily": true,
              "tier": 1,
              "related": [
                "tech-generative-ai-large-language-models"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "cap-create-draw",
              "label": "Draw",
              "description": "Make a picture from your words, like describing a scene to an artist who then paints it.",
              "icon": "brush",
              "seenIn": [
                "AI image tools",
                "Photo editors"
              ],
              "fact": "Designers use image tools to sketch ideas quickly before making the final version by hand.",
              "daily": false,
              "tier": 1,
              "related": [
                "tech-generative-ai-diffusion-models"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "cap-create-compose",
              "label": "Compose",
              "description": "Make new songs, voices and sounds, like a musician who plays what you ask for.",
              "icon": "music",
              "seenIn": [
                "Background music for videos",
                "Synthetic voices"
              ],
              "fact": "AI music raises open questions about copyright and credit for artists.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "cap-create-animate",
              "label": "Animate",
              "description": "Make a short video from a description, like a tiny film made from a few words.",
              "icon": "clapperboard",
              "seenIn": [
                "Short clips for social media and adverts",
                "Planning scenes for films"
              ],
              "fact": "Video is much harder than images, because every frame has to stay consistent with the one before.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "cap-create-code",
              "label": "Code",
              "description": "Write computer programs from simple instructions, like telling a helper what you need and they write the steps.",
              "icon": "code",
              "seenIn": [
                "Autocomplete in code editors",
                "Assistants that draft programs"
              ],
              "fact": "Programmers often use AI to draft code, then review it themselves.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "cap-predict",
          "label": "Predict",
          "description": "AI guessing what may happen next, based on what happened before.",
          "icon": "trending-up",
          "fact": "Predictions are estimates, not certainties, and good systems say how sure they are.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "cap-predict-forecast",
              "label": "Forecast",
              "description": "Guess what comes next, like using last year's monsoon to guess how this year's rain may be.",
              "icon": "chart-line",
              "seenIn": [
                "Weather apps",
                "Shops planning how much stock to hold"
              ],
              "fact": "Some AI weather models can now produce a global forecast in minutes.",
              "daily": false,
              "tier": 1,
              "related": [
                "app-energy-and-environment-forecasting-sun-and-wind"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "cap-predict-spot-the-unusual",
              "label": "Spot the Unusual",
              "description": "Notice when something is not normal, like a shopkeeper who spots a strange note in the cash box.",
              "icon": "triangle-alert",
              "seenIn": [
                "Bank alerts about odd spending",
                "Factory sensors"
              ],
              "fact": "It works by learning what normal looks like, then flagging what differs.",
              "daily": false,
              "tier": 1,
              "related": [
                "app-money-and-banking-catching-card-fraud"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "cap-predict-estimate-risk",
              "label": "Estimate Risk",
              "description": "Guess how likely a problem is, like judging whether dark clouds will bring a storm.",
              "icon": "gauge",
              "seenIn": [
                "Insurance pricing",
                "Hospital alerts for patients at risk"
              ],
              "fact": "Risk scores can inherit bias from the data they learned from, so they need checking.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "cap-predict-suggest",
              "label": "Suggest",
              "description": "Suggest things you may like, like a shopkeeper who remembers what you bought before and shows you similar things.",
              "icon": "thumbs-up",
              "seenIn": [
                "YouTube and TikTok \"next video\"",
                "Online shops suggesting items"
              ],
              "fact": "Recommendations drive a large share of what people watch on streaming services.",
              "daily": true,
              "tier": 1,
              "related": [
                "app-shopping-and-media-suggesting-what-to-buy-or-watch"
              ],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "cap-decide-and-plan",
          "label": "Decide and Plan",
          "description": "AI comparing choices and picking one.",
          "icon": "split",
          "fact": "Planning tools work out steps in advance, so a person does not have to check every option.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "cap-decide-and-plan-plan-ahead",
              "label": "Plan Ahead",
              "description": "Work out the steps to reach a goal, like planning a trek day by day.",
              "icon": "calendar-check",
              "seenIn": [
                "Delivery scheduling",
                "Game characters"
              ],
              "fact": "NASA tested AI planning software on a spacecraft in 1999.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "cap-decide-and-plan-find-the-best-option",
              "label": "Find the Best Option",
              "description": "Choose the best way to use time, money or things, like a bus owner deciding which bus goes on which route.",
              "icon": "target",
              "seenIn": [
                "Delivery and bus routes",
                "Airline schedules"
              ],
              "fact": "Airlines use this to assign crews and planes across thousands of flights.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "cap-decide-and-plan-support-decisions",
              "label": "Support Decisions",
              "description": "Give experts useful advice so they decide better, like a trusted helper who gathers all the facts for the boss.",
              "icon": "scale",
              "seenIn": [
                "Doctors reviewing an AI second opinion",
                "City planners comparing options"
              ],
              "fact": "These systems advise, and a person makes the final call.",
              "daily": false,
              "tier": 1,
              "related": [
                "app-health-helping-doctors-decide"
              ],
              "links": [],
              "children": []
            }
          ]
        },
        {
          "id": "cap-act",
          "label": "Act",
          "description": "AI actually doing tasks, not only giving answers.",
          "icon": "cog",
          "fact": "Acting is where AI moves from giving answers to doing things.",
          "daily": false,
          "tier": 1,
          "related": [],
          "links": [],
          "children": [
            {
              "id": "cap-act-automate-routine-tasks",
              "label": "Automate Routine Tasks",
              "description": "Do boring, repeated jobs automatically, like a machine that writes out the same bill again and again.",
              "icon": "list-todo",
              "seenIn": [
                "Processing invoices",
                "Sorting incoming emails"
              ],
              "fact": "It is often called 'robotic process automation', although no physical robot is involved.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            },
            {
              "id": "cap-act-control-machines",
              "label": "Control Machines",
              "description": "Run machines and vehicles, like a pump that keeps working until the water tank is full.",
              "icon": "joystick",
              "seenIn": [
                "Smart air conditioners",
                "Factory production lines"
              ],
              "fact": "Control systems adjust machines many times a second using feedback from sensors.",
              "daily": false,
              "tier": 1,
              "related": [
                "tech-machine-learning-learning-by-trial-and-error"
              ],
              "links": [],
              "children": []
            },
            {
              "id": "cap-act-carry-out-multi-step-goals",
              "label": "Carry Out Multi-Step Goals",
              "description": "Do a job with many steps on its own, like a helper who searches, compares and books a bus ticket for you.",
              "icon": "workflow",
              "seenIn": [
                "AI assistants that search, fill in forms and book things"
              ],
              "fact": "These are called 'AI agents', and they need human oversight for important actions.",
              "daily": false,
              "tier": 1,
              "related": [],
              "links": [],
              "children": []
            }
          ]
        }
      ]
    }
  ]
};


