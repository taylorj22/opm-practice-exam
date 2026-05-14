import { useState, useEffect } from "react";

const questions = [
  { id: 1, unit: "Role of the PM", question: "Which of the following best describes the primary role of a Product Manager?", options: ["Managing project timelines and budgets", "Owning the strategy, roadmap, and feature definition of a product", "Writing code and technical specifications", "Running marketing campaigns for product launches"], answer: 1, explanation: "PMs own the strategy, roadmap, and feature definition. They act as a bridge across departments — not project managers, developers, or marketers." },
  { id: 2, unit: "Role of the PM", question: "What is the main risk when a Product Manager also takes on Project Manager duties?", options: ["Improved team collaboration", "Clearer role responsibilities", "Risk of becoming overwhelmed with tasks", "Better management of product releases"], answer: 2, explanation: "Taking on dual roles leads to task overload. PMs should focus on strategy and customer problems, not project scheduling." },
  { id: 3, unit: "Role of the PM", question: "Which of the following is NOT a core responsibility of a Product Manager?", options: ["Conducting competitive analysis", "Backlog refinement", "Developing business cases", "Managing pricing strategies"], answer: 1, explanation: "Backlog refinement is primarily led by engineering. PMs own backlog priority and direction, but refinement sessions are an engineering/Scrum activity." },
  { id: 4, unit: "Role of the PM", question: "What is the most essential skill for a successful Product Manager?", options: ["Expertise in financial accounting", "Technical programming skills", "Facilitating communication among stakeholders", "Managing project schedules"], answer: 2, explanation: "PMs are the communication bridge across the organization. Facilitation and alignment skills are what set great PMs apart." },
  { id: 5, unit: "Role of the PM", question: "Successful Product Managers put stakeholders aside to focus on other tasks.", options: ["True", "False"], answer: 1, explanation: "False. Stakeholder engagement is continuous and central to the PM role — not something to deprioritize." },
  { id: 6, unit: "Role of the PM", question: "A Product Manager acts as a bridge between which groups?", options: ["Only engineering and design", "Departments such as marketing, sales, design, support, finance, and legal", "Customers and investors only", "The CEO and the development team only"], answer: 1, explanation: "The PM bridges across the entire organization — every department that touches the product is part of the PM's stakeholder landscape." },
  { id: 7, unit: "Role of the PM", question: "Which best distinguishes a Product Manager from a Product Owner?", options: ["They are exactly the same role", "PMs focus on strategy and outcomes while Product Owners often focus on backlog and sprint execution", "Product Owners own the roadmap while PMs own delivery", "Product Managers only work in Agile organizations"], answer: 1, explanation: "PMs are strategic; Product Owners are more tactical, managing the backlog and working closely with the dev team. In some orgs these roles overlap." },
  { id: 8, unit: "Role of the PM", question: "What should a PM do if asked to perform dual roles by their organization?", options: ["Accept all responsibilities without question", "Communicate with their manager to clarify roles and track progress toward key responsibilities", "Immediately resign from one of the roles", "Delegate all strategic work to a designer"], answer: 1, explanation: "Advocating for clear role definition is a PM responsibility. If roles overlap, it needs to be addressed through open communication with leadership." },
  { id: 9, unit: "Role of the PM", question: "Which of the following is included in the core roadmap responsibilities of a Product Manager?", options: ["Running daily standups for the engineering team", "Conducting competitive analysis and forecasting", "Writing all of the product's UX copy", "Managing customer support tickets"], answer: 1, explanation: "Competitive analysis, forecasting, and end-of-life planning are PM roadmap responsibilities. Standups and support tickets are not." },
  { id: 10, unit: "Role of the PM", question: "Why is it critical for Product Managers to balance urgent versus important tasks?", options: ["Urgent tasks always create more business value", "PMs who only handle urgent tasks never get to the strategic work that actually moves things forward", "Important tasks should always be delegated to others", "Urgent and important tasks are always the same thing"], answer: 1, explanation: "Reactive PMs who only fight fires never do the discovery, strategy, and outcome work that creates real product impact. Balance is essential." },
  { id: 11, unit: "Working with Stakeholders", question: "Stakeholders are individuals who…", options: ["Only provide funding for the product", "Make all final decisions on product features", "Have vested interests and are affected by product decisions", "Are exclusively responsible for marketing"], answer: 2, explanation: "Stakeholders can benefit from the product, invest in it, or face negative consequences if it fails. Their vested interest defines them." },
  { id: 12, unit: "Working with Stakeholders", question: "Why is stakeholder engagement important for Product Managers?", options: ["It guarantees job security", "It eliminates the need for a marketing strategy", "It keeps stakeholders informed and builds trust", "It allows avoidance of legal challenges"], answer: 2, explanation: "Consistent, transparent communication with stakeholders builds the trust needed for alignment and product success." },
  { id: 13, unit: "Working with Stakeholders", question: "Saying 'No' to stakeholders and coworkers is an option for a Product Manager.", options: ["True", "False"], answer: 0, explanation: "True. PMs must be able to say no to requests that don't align with strategy or customer outcomes. It's a critical skill, not a failure." },
  { id: 14, unit: "Working with Stakeholders", question: "What does understanding the 'Dangerous Animals of Product Management' help with?", options: ["Identifying executive-only problems", "Understanding crucial dynamics for successful stakeholder interactions", "Finding ways to ignore difficult stakeholders", "Delegating problems to other departments"], answer: 1, explanation: "Understanding difficult stakeholder archetypes helps PMs navigate the political and interpersonal side of product management." },
  { id: 15, unit: "Working with Stakeholders", question: "Which of the following is an example of an internal stakeholder?", options: ["A regulatory body that oversees your industry", "The engineering team building the product", "A customer who uses the product daily", "A vendor supplying components"], answer: 1, explanation: "Internal stakeholders are inside the organization — engineering, marketing, sales, design, finance. External ones are customers, partners, regulators." },
  { id: 16, unit: "Working with Stakeholders", question: "What is the primary role of stakeholders in product management?", options: ["They make all final decisions on product features", "They have vested interests and are affected by product decisions", "They solely provide funding for the product", "They are responsible for marketing exclusively"], answer: 1, explanation: "Stakeholders have vested interests — they benefit, invest, or face consequences based on the product's outcomes." },
  { id: 17, unit: "Working with Stakeholders", question: "Actively engaging stakeholders throughout the product lifecycle is considered…", options: ["Optional if the PM is confident in the direction", "A distraction from core PM work", "A key best practice for alignment and product success", "Something only relevant during launch"], answer: 2, explanation: "Stakeholder involvement isn't a one-time event. Continuous engagement across the lifecycle maintains alignment and surfaces issues early." },
  { id: 18, unit: "Working with Stakeholders", question: "Which of the following best describes why aligning stakeholders enhances product success?", options: ["It reduces the total number of features needed", "Effective communication establishes the PM as a trusted partner and ensures shared understanding", "It allows the PM to avoid customer research", "It speeds up the engineering development cycle"], answer: 1, explanation: "When stakeholders are aligned and trust the PM, they support decisions, remove blockers, and work toward the same goals." },
  { id: 19, unit: "Productside Blueprint", question: "What is the correct order of phases in the Productside Blueprint?", options: ["Define, Create, Discover, Deliver", "Discover, Investigate, Define, Create, Deliver", "Build, Measure, Learn, Iterate", "Research, Design, Build, Ship"], answer: 1, explanation: "Discover → Investigate → Define → Create → Deliver is the Productside Blueprint sequence." },
  { id: 20, unit: "Productside Blueprint", question: "What is the primary purpose of the Productside Blueprint?", options: ["To replace the product lifecycle entirely", "To provide a structured approach guiding decision-making across the product lifecycle", "To define sprint ceremonies for engineering teams", "To create marketing plans for new products"], answer: 1, explanation: "The blueprint is a strategic framework for navigating product management decisions at any stage of the lifecycle." },
  { id: 21, unit: "Productside Blueprint", question: "The Productside Blueprint and the Product Lifecycle are the same thing.", options: ["True", "False"], answer: 1, explanation: "False. The Product Lifecycle describes stages a product moves through (Intro, Growth, Maturity, Decline). The Blueprint is a process framework applicable at ANY lifecycle stage." },
  { id: 22, unit: "Productside Blueprint", question: "What is required for a product to achieve Product-Market Fit?", options: ["The product only needs to be technically feasible", "The product must be valuable, feasible, and viable", "The product must have the largest market share", "The product must be the cheapest option available"], answer: 1, explanation: "All three are required: Valuable (customers want it), Viable (the business can sustain it), and Feasible (we can build it)." },
  { id: 23, unit: "Productside Blueprint", question: "What should be considered when determining if a product proposition is Feasible?", options: ["Market demand and competition", "The cost of production and materials", "The capabilities of the current organization", "Potential customer feedback"], answer: 2, explanation: "Feasibility is about organizational capability — technology, expertise, and capacity to actually build and deliver the solution." },
  { id: 24, unit: "Productside Blueprint", question: "The Productside Blueprint can only be applied at the beginning of a product's lifecycle.", options: ["True", "False"], answer: 1, explanation: "False. The blueprint is flexible and can be applied at any lifecycle stage. It's designed to be continuously cycled through." },
  { id: 25, unit: "Productside Blueprint", question: "What sits at the outer context of the Productside Blueprint model?", options: ["The product backlog and sprint plan", "Internal Values & Strategy and Market Environment, with Customers/Users at the base", "Investor expectations and financial targets", "Engineering and design responsibilities"], answer: 1, explanation: "The Blueprint places Internal Values & Strategy on one side, Market Environment on the other, and Customers/Users at the base — context for all phases within." },
  { id: 26, unit: "Productside Blueprint", question: "What does the 'Validate and Communicate' step in the Blueprint represent?", options: ["Finalizing the product launch marketing plan", "A checkpoint to decide whether to continue, go back, or exit the current initiative based on validation results", "Conducting performance reviews for the product team", "Approving the engineering sprint plan"], answer: 1, explanation: "Validate and Communicate is where you assess what you've learned and decide: move forward, return to an earlier phase, or stop." },
  { id: 27, unit: "Outcomes and Outputs", question: "Outputs answer which of the following questions?", options: ["Who benefits from our outputs?", "Why did we create those outputs?", "What did we create?", "What impact did our outputs have?"], answer: 2, explanation: "Outputs = what was created. Outcomes = the impact those outputs created." },
  { id: 28, unit: "Outcomes and Outputs", question: "Which of the following is an example of an output?", options: ["Improved market reach", "Increased customer satisfaction", "A completed marketing report", "Enhanced innovation strategies"], answer: 2, explanation: "A completed marketing report is a tangible deliverable — an output. Improved reach and satisfaction are outcomes." },
  { id: 29, unit: "Outcomes and Outputs", question: "Good examples of business outcomes are vague and open to interpretation.", options: ["True", "False"], answer: 1, explanation: "False. Good business outcomes are specific, measurable, and tied to strategic goals. Vague outcomes make it impossible to know if you've succeeded." },
  { id: 30, unit: "Outcomes and Outputs", question: "How do mission and vision statements benefit an organization?", options: ["They provide a roadmap for financial investments", "They serve as legal documents", "They align the organization's efforts and foster a cohesive culture", "They dictate employment terms for stakeholders"], answer: 2, explanation: "Mission and vision statements give everyone a shared direction and values, aligning efforts across the organization." },
  { id: 31, unit: "Outcomes and Outputs", question: "Which of these is NOT part of a mission statement?", options: ["A concise declaration of the company's primary objective", "Details the impact the company seeks to make in the future", "The principles that drive day-to-day operations", "Defines the company's core purpose and focus"], answer: 1, explanation: "Detailing future impact belongs in a vision statement. Mission = current purpose. Vision = future aspiration." },
  { id: 32, unit: "Outcomes and Outputs", question: "What is the most important reason to focus on outcomes rather than outputs?", options: ["Outputs are harder to measure", "Outcomes represent the real value and benefits delivered to customers and the business", "Outputs take longer to produce", "Outcomes are easier to communicate to engineers"], answer: 1, explanation: "A PM can ship 50 features (outputs) and still fail to move any meaningful business or customer metric (outcome). Outcomes are the real measure of value." },
  { id: 33, unit: "Outcomes and Outputs", question: "Which of the following best represents a strong business outcome statement?", options: ["Ship 5 new features by end of Q2", "Increase monthly recurring revenue by 15% over the next 12 months", "Redesign the dashboard to improve visual consistency", "Complete a competitive analysis report by month end"], answer: 1, explanation: "A strong business outcome is measurable, time-bound, and tied to a real business result. Shipping features and completing reports are outputs." },
  { id: 34, unit: "Market Environment", question: "What does PESTEL stand for?", options: ["Product, Environment, Strategy, Technology, Economic, Legal", "Political, Economic, Social, Technological, Environmental, Legal", "Political, Employment, Social, Technological, Environmental, Limitation", "Present, Enhance, Secure, Technological, Economic, Logistics"], answer: 1, explanation: "PESTEL = Political, Economic, Social, Technological, Environmental, Legal — a macro-environment scanning framework." },
  { id: 35, unit: "Market Environment", question: "Which TAM/SAM/SOM component represents the share of the market you can realistically capture?", options: ["TAM", "SAM", "SOM", "PESTEL"], answer: 2, explanation: "SOM (Serviceable Obtainable Market) = the realistic portion you can capture given competition, distribution channels, and current capabilities." },
  { id: 36, unit: "Market Environment", question: "The TAM, SAM, SOM framework empowers product managers to assess market potential.", options: ["True", "False"], answer: 0, explanation: "True. It gives PMs a structured way to filter from total market size down to what's realistically obtainable, justifying prioritization to leadership." },
  { id: 37, unit: "Market Environment", question: "A segment is…", options: ["A feature of the product", "A phase of the Productside Blueprint", "A unique group of potential customers to beta test the product", "A unique group of potential customers within a broader market"], answer: 3, explanation: "A segment is a defined subset of the total market sharing common characteristics, needs, or behaviors." },
  { id: 38, unit: "Market Environment", question: "Which characteristic of a market primarily influences product design decisions?", options: ["Geographical location of competitors", "Historical sales data of previous products", "Availability of raw materials", "Needs of the buyers within that market"], answer: 3, explanation: "Product design should be driven by the needs of buyers in the target market — not geography, history, or supply chain factors." },
  { id: 39, unit: "Market Environment", question: "In the Ansoff Matrix, which growth strategy carries the highest risk?", options: ["Market Penetration", "Product Development", "Market Development", "Diversification"], answer: 3, explanation: "Diversification (new product + new market) is highest risk — no established presence in either the product or the market." },
  { id: 40, unit: "Market Environment", question: "Which Ansoff Matrix quadrant describes selling existing products to existing markets?", options: ["Market Development", "Diversification", "Market Penetration", "Product Development"], answer: 2, explanation: "Market Penetration = existing product + existing market. The lowest-risk growth strategy." },
  { id: 41, unit: "Market Environment", question: "PESTEL analysis is primarily used to understand which type of forces?", options: ["Internal team dynamics and capability gaps", "Macro-environmental forces that impact the industry", "Customer satisfaction and retention rates", "Competitive pricing and feature comparisons"], answer: 1, explanation: "PESTEL is a macro-environment scan — external forces outside the company's control that can shape market conditions and strategy." },
  { id: 42, unit: "Market Environment", question: "What does SAM represent in the TAM/SAM/SOM framework?", options: ["The total global demand for a product category", "The share of the market relevant to your product given your business model", "The revenue you can realistically earn this quarter", "Your current active customer base"], answer: 1, explanation: "SAM (Serviceable Addressable Market) narrows TAM down to the portion your product can actually serve given your current model and capabilities." },
  { id: 43, unit: "Market Environment", question: "What does a market consist of, by definition?", options: ["Only the companies selling a product", "Buyers and sellers with clearly defined needs satisfied by a specific category of products or services", "The total population of a country", "The list of features in a competing product"], answer: 1, explanation: "A market = buyers + sellers sharing a specific category of need. Understanding this helps PMs scope their opportunity correctly." },
  { id: 44, unit: "Customer Problems", question: "Business Outcomes are all about the business, while Product Outcomes are all about…", options: ["The technology stack", "The customer", "The competitor landscape", "The go-to-market plan"], answer: 1, explanation: "Business outcomes focus on company metrics (revenue, growth). Product outcomes focus on measurable customer behavior change." },
  { id: 45, unit: "Customer Problems", question: "An Outcome Statement follows which formula?", options: ["Who + What + Why + When", "Direction + Metric + Outcome + Context", "Problem + Solution + Hypothesis + Test", "User + Goal + Barrier + Feeling"], answer: 1, explanation: "Direction + Metric + Outcome + Context makes product goals specific, measurable, and contextual." },
  { id: 46, unit: "Customer Problems", question: "In the Outcome Tree, what comes directly after identifying Business Outcomes?", options: ["Solution Hypothesis", "Product Health Metrics", "Product Outcomes", "Problem Statement"], answer: 2, explanation: "The hierarchy: Business Outcome → Product Outcome → Success Metrics → Health Metrics → Problem Statement → Solution Hypothesis." },
  { id: 47, unit: "Customer Problems", question: "A Solution Hypothesis should follow what statement type?", options: ["This... That...", "If... Then...", "Now... Then...", "We used to... We will..."], answer: 1, explanation: "If... Then... format. 'If we build X, then we believe Y will happen.' It's a testable hypothesis, not a certainty." },
  { id: 48, unit: "Customer Problems", question: "Companies often focus on outputs when they should be focusing on outcomes.", options: ["True", "False"], answer: 0, explanation: "True. This is one of the most common PM pitfalls — measuring success by features shipped rather than by the behavior change they drive." },
  { id: 49, unit: "Customer Problems", question: "What is the primary purpose of identifying customer problems before jumping to solutions?", options: ["To slow down the development process", "To ensure the team is solving real challenges rather than assumed ones", "To reduce the scope of work for engineers", "To satisfy regulatory requirements"], answer: 1, explanation: "Jumping to solutions without validating the problem leads to building things nobody needs." },
  { id: 50, unit: "Customer Problems", question: "What is a 'bad product request' most often caused by?", options: ["Too much customer feedback", "A lack of understanding of the product's vision, market needs, or business goals", "Overly detailed specifications", "Too many stakeholder reviews"], answer: 1, explanation: "Bad requests come from misalignment — asking for something without understanding why it matters strategically or whether customers actually need it." },
  { id: 51, unit: "Customer Problems", question: "Product Health Metrics tell you which of the following?", options: ["Whether you are achieving your product outcomes", "Whether you are breaking things or causing problems with the product", "How many features were shipped in a quarter", "How satisfied your investors are with the roadmap"], answer: 1, explanation: "Health Metrics = is the product stable and not regressing? Success Metrics = are we achieving our goals? They serve different purposes." },
  { id: 52, unit: "Customers and Users", question: "In B2B product management, which group are Buyers typically?", options: ["The people who directly use the product daily", "Approvers and C-Level executives who make financial decisions", "IT and legal teams who evaluate technical fit", "End users who interact with the product interface"], answer: 1, explanation: "Buyers are financial decision-makers — approvers, C-suite, budget holders. They may never use the product themselves." },
  { id: 53, unit: "Customers and Users", question: "A persona is a composite profile of a group of persons acting as a reference point and providing context.", options: ["True", "False"], answer: 0, explanation: "True. Personas synthesize research about a user segment into a reference character that keeps decisions grounded in real needs." },
  { id: 54, unit: "Customers and Users", question: "Personas are not relevant to Product Managers — only to marketing managers.", options: ["True", "False"], answer: 1, explanation: "False. Personas are essential PM tools. They guide problem definition, prioritization, and ensure building for a real, specific customer." },
  { id: 55, unit: "Customers and Users", question: "Jobs to be Done was invented by Tony Ulwick and popularized by…", options: ["Steve Jobs", "Jeff Bezos", "Clay Christensen", "Teresa Torres"], answer: 2, explanation: "Clay Christensen popularized JTBD. Tony Ulwick invented the original framework." },
  { id: 56, unit: "Customers and Users", question: "Which type of Job to be Done answers 'Help me seem…'?", options: ["Functional Job", "Social Job", "Emotional Job", "Operational Job"], answer: 1, explanation: "Social Jobs are about how others perceive the customer — 'help me seem professional, credible, successful.'" },
  { id: 57, unit: "Customers and Users", question: "Jobs to be Done are stable, don't change over time, and are solution agnostic.", options: ["True", "False"], answer: 0, explanation: "True. The underlying job stays constant even as solutions change. This is what makes JTBD powerful for long-term strategy." },
  { id: 58, unit: "Customers and Users", question: "In a B2B context, which group are Influencers typically?", options: ["The CEO and CFO", "Daily end users of the product", "IT, legal, purchasing, and technical decision-makers", "The sales team that sold the product"], answer: 2, explanation: "Influencers shape purchasing decisions without being the buyer or user — IT evaluating security, legal reviewing compliance, purchasing negotiating contracts." },
  { id: 59, unit: "Customers and Users", question: "Doing the customer's jobs will either create gains or relieve pains. This is how we create…", options: ["Market share", "Value for our customers", "Product features", "Technical debt reduction"], answer: 1, explanation: "JTBD theory: completing a customer's job creates gains (positive outcomes) or relieves pains (removes friction). Both create customer value." },
  { id: 60, unit: "Customers and Users", question: "Which of the following best describes a Functional Job in the JTBD framework?", options: ["Help me feel confident", "Help me appear successful to my peers", "Help me complete a specific task or achieve a practical goal", "Help me connect emotionally with the product"], answer: 2, explanation: "Functional Jobs are task-oriented — 'help me do X.' They're the practical, utilitarian layer of what customers are trying to accomplish." },
  { id: 61, unit: "Framing the Problem", question: "Which empathy interview approach should interviewers prioritize?", options: ["Asking yes/no questions for concise answers", "Active listening to foster open communication", "Presenting solutions to problems identified", "Speeding through questions for time efficiency"], answer: 1, explanation: "Active listening is the foundation of a good empathy interview. It encourages openness and surfaces insights you couldn't predict." },
  { id: 62, unit: "Framing the Problem", question: "What is an Empathy Interview?", options: ["A quantitative research method focused on customer experiences", "A research method for finding your target market", "A qualitative research method focused on deeply understanding customer experiences", "A research method for segmenting the market"], answer: 2, explanation: "Empathy interviews are qualitative — they go deep on the 'why' through open-ended conversation, not surveys or data." },
  { id: 63, unit: "Framing the Problem", question: "What is the correct structure for 'Frame the Problem'?", options: ["Who, What, When, Where, Why", "I am / Trying to / But / Because / Which makes me feel", "Problem / Root Cause / Solution / Outcome", "User / Goal / Barrier / Metric / Hypothesis"], answer: 1, explanation: "The structure captures: persona (I am), goal (trying to), barrier (but), root cause (because), emotional impact (which makes me feel)." },
  { id: 64, unit: "Framing the Problem", question: "What is the purpose of Affinity Mapping after empathy interviews?", options: ["To assign tasks to team members", "To cluster observations into themes and key insights", "To create a competitive positioning matrix", "To build the product roadmap"], answer: 1, explanation: "Affinity mapping organizes raw research observations into patterns and themes, surfacing the most significant customer insights." },
  { id: 65, unit: "Framing the Problem", question: "Only one Positioning Statement should be created to cover all personas and market segments.", options: ["True", "False"], answer: 1, explanation: "False. Different personas and segments have different needs. A positioning statement should be tailored to each meaningful segment." },
  { id: 66, unit: "Framing the Problem", question: "What should empathy interviewers NOT do?", options: ["Ask open-ended questions", "Practice active listening", "Follow a strict script", "Be curious and ask why"], answer: 2, explanation: "Following a strict script kills the natural flow and prevents you from following up on the most revealing things a customer says." },
  { id: 67, unit: "Framing the Problem", question: "What does a well-framed Problem Statement help a product team do?", options: ["Skip the research phase", "Align on objectives and guide solution efforts toward what matters most", "Immediately begin sprint planning", "Finalize the product launch date"], answer: 1, explanation: "A clear problem statement aligns the entire team on what's being solved and why — preventing solution-first thinking and misaligned work." },
  { id: 68, unit: "Framing the Problem", question: "After grouping observations in Affinity Mapping, what is the key next step?", options: ["Immediately building a prototype", "Labeling themes and extracting key insights", "Presenting raw data directly to engineering", "Writing code to solve the patterns found"], answer: 1, explanation: "After clustering, you label themes and extract key insights. The themes become the foundation for problem framing." },
  { id: 69, unit: "Lo-fi Experimentation", question: "What is the primary purpose of lo-fi experimentation in product development?", options: ["To enhance product features based on market trends", "To identify the best marketing strategy for the product", "To finalize the product design before launching", "To validate whether a solution should be built"], answer: 3, explanation: "Lo-fi experimentation answers 'are we building the right thing?' before significant investment. It's about cheap learning, not designing or marketing." },
  { id: 70, unit: "Lo-fi Experimentation", question: "Which lo-fi experiment type involves delivering a service manually while hiding the human behind the scenes?", options: ["Concierge Test", "Wizard of Oz", "Landing Page", "Storyboarding"], answer: 1, explanation: "Wizard of Oz: the user thinks the service is automated, but a human is performing tasks behind the scenes to simulate the product." },
  { id: 71, unit: "Lo-fi Experimentation", question: "What shared traits do all lo-fi experimentation types have?", options: ["They require full engineering effort", "They are low cost, tell a story to the user, and provide measurable outcomes", "They must involve at least 1,000 participants", "They must be approved by the CEO before running"], answer: 1, explanation: "All lo-fi experiments are low cost, tell a product story to the user, and generate measurable information about how people respond." },
  { id: 72, unit: "Lo-fi Experimentation", question: "What is the Concierge Test?", options: ["A test where users evaluate hotel onboarding", "A service manually offered to validate the value of solving a particular problem", "A form of automated user testing using AI", "A pre-launch survey sent to potential customers"], answer: 1, explanation: "A Concierge Test manually delivers the service to validate the value of solving the problem — without building the actual product yet." },
  { id: 73, unit: "Lo-fi Experimentation", question: "When should assumptions ideally be validated in the product development process?", options: ["After a significant financial investment has been made", "When market conditions change", "During the initial stages of product discovery and development", "Only after the product is fully completed"], answer: 2, explanation: "Validate early — before building. The whole point is to avoid spending resources on things that turn out to be wrong." },
  { id: 74, unit: "Lo-fi Experimentation", question: "What feedback around solutions should ideally lead to during the ideation process?", options: ["A definitive solution that needs no testing", "Diversion from the customer problems identified", "Consensus on an unchangeable solution", "Further development and refinement of the concepts"], answer: 3, explanation: "Ideation feedback should keep solutions evolving and improving — not lock them down. The goal is refinement through iteration." },
  { id: 75, unit: "Lo-fi Experimentation", question: "Storyboarding as a lo-fi experiment is best described as…", options: ["A financial model for product revenue projection", "Visual storytelling that positions the user as the hero to communicate a product use case", "A competitor analysis framework", "A sprint planning tool for engineering teams"], answer: 1, explanation: "Storyboarding uses images and text to tell the user's story with the product — communicating a use case without building anything." },
  { id: 76, unit: "Lo-fi Experimentation", question: "Which lo-fi experiment allows potential customers to invest up front based on a future value proposition?", options: ["Landing Page", "Wizard of Oz", "Crowdfunding", "Explainer Video"], answer: 2, explanation: "Crowdfunding asks people to commit money before the product exists — a direct market validation of whether people value the proposition enough to pay." },
  { id: 77, unit: "Ideating Solutions", question: "What type of questions are used to guide creative thinking during solution ideation?", options: ["Yes/No questions", "'How Might We?' questions", "Root cause analysis questions", "Quantitative survey questions"], answer: 1, explanation: "'How Might We?' questions reframe problems into creative challenges, opening the door to divergent thinking rather than jumping to a single solution." },
  { id: 78, unit: "Ideating Solutions", question: "What is the benefit of involving a diverse team during solution brainstorming?", options: ["It slows down decision making to allow for more research", "It leverages different perspectives and expertise to generate better solutions", "It ensures engineering has full ownership of the solution", "It reduces the number of customer interviews needed"], answer: 1, explanation: "Diverse perspectives surface solutions and considerations that a homogeneous team would miss." },
  { id: 79, unit: "Ideating Solutions", question: "A Solution Hypothesis is developed to do which of the following?", options: ["Replace the need for customer research", "Communicate customer benefits and test feasibility, viability, and value of a potential solution", "Lock in the final product design", "Create a detailed technical specification for engineers"], answer: 1, explanation: "A solution hypothesis frames what you believe will happen if you build something, so you can test that belief before committing resources." },
  { id: 80, unit: "Outcome-Based Roadmaps", question: "A roadmap is a high-level embodiment of your product strategy. It also serves as a detailed project plan.", options: ["True", "False"], answer: 1, explanation: "False. A roadmap is strategic and directional — NOT a detailed project plan. Confusing the two leads to over-commitment and loss of flexibility." },
  { id: 81, unit: "Outcome-Based Roadmaps", question: "A Product Manager creates different roadmaps for different audiences.", options: ["True", "False"], answer: 0, explanation: "True. Engineering needs detail and sequencing. Executives need strategy and outcomes. External audiences need value and direction." },
  { id: 82, unit: "Outcome-Based Roadmaps", question: "What is the primary purpose of external roadmaps?", options: ["To manage internal resources and allocate budgets accurately", "To detail specific project timelines for internal teams", "To track the progress of ongoing projects in real-time", "To communicate the strategic direction and value proposition to external stakeholders"], answer: 3, explanation: "External roadmaps communicate direction and value — not execution details. They build confidence and manage expectations." },
  { id: 83, unit: "Outcome-Based Roadmaps", question: "How often should a roadmap be revisited and evaluated?", options: ["After product launches to finalize future strategies", "At least on a quarterly basis to reassess market and customer changes", "Only when requested by external stakeholders", "Once a year during the annual review"], answer: 1, explanation: "Quarterly reviews ensure the roadmap reflects current reality rather than outdated assumptions." },
  { id: 84, unit: "Outcome-Based Roadmaps", question: "What is the primary objective of communicating product strategy to stakeholders?", options: ["To showcase product features and aesthetics", "To analyze competitive pricing structures", "To advocate for customer needs and business outcomes", "To outline a detailed marketing plan"], answer: 2, explanation: "Product strategy communication exists to align stakeholders around customer needs and business outcomes." },
  { id: 85, unit: "Outcome-Based Roadmaps", question: "What makes an outcome-based roadmap different from a feature-based roadmap?", options: ["It only contains items that are already built", "It focuses on the customer and business results to be achieved rather than specific features to be shipped", "It is only visible to engineering teams", "It does not include any timelines or priorities"], answer: 1, explanation: "Outcome-based roadmaps anchor each initiative to the result it's driving, not just what will be built." },
  { id: 86, unit: "Outcome-Based Roadmaps", question: "What is the role of the Product Outcome Canvas when advocating for a solution?", options: ["To replace the need for stakeholder presentations", "To summarize and communicate the essence of the product strategy to stakeholders", "To document all engineering tickets for a sprint", "To track competitive benchmarking data"], answer: 1, explanation: "The Product Outcome Canvas ties together problem, solution, outcomes, metrics, and the ask — making it easy to align stakeholders." },
  { id: 87, unit: "Outcome-Based Roadmaps", question: "When building a roadmap, what is most important for strategic alignment?", options: ["The number of features being shipped each quarter", "Connecting each roadmap item to the business and product outcomes it is intended to drive", "Matching the format used by competitors", "Ensuring every team member has equal representation on the roadmap"], answer: 1, explanation: "An outcome-driven roadmap keeps every item anchored to the 'why' — ensuring the team works on things that move the right metrics." },
  { id: 88, unit: "Prioritization", question: "What prioritization method combines data points to find the task delivering the most economic impact in the shortest time?", options: ["RICE", "ICE", "WSJF", "Kano"], answer: 2, explanation: "WSJF (Weighted Shortest Job First) is specifically designed to maximize economic value per unit of time." },
  { id: 89, unit: "Prioritization", question: "The Kano Model categorizes features into which three buckets?", options: ["Must-have, Should-have, Could-have", "Basic needs, Performance needs, Delighters", "Critical, Important, Nice-to-have", "Urgent, Important, Backlog"], answer: 1, explanation: "Kano: Basic needs (expected, absence = dissatisfaction), Performance needs (more = better), Delighters (unexpected, creates loyalty)." },
  { id: 90, unit: "Prioritization", question: "What is the primary goal of mastering prioritization for Product Managers?", options: ["To enhance communication with stakeholders", "To focus on high-value activities first", "To reduce the overall cost of product development", "To simplify decision-making processes"], answer: 1, explanation: "Prioritization ensures the PM and team are always working on the highest-value things, not just the most recent request." },
  { id: 91, unit: "Prioritization", question: "RICE scoring evaluates features based on which four factors?", options: ["Revenue, Impact, Cost, Effort", "Reach, Impact, Confidence, Effort", "Risk, Innovation, Complexity, Evidence", "Relevance, Importance, Clarity, Execution"], answer: 1, explanation: "RICE = Reach, Impact, Confidence, Effort. Score = (R x I x C) / E." },
  { id: 92, unit: "Prioritization", question: "Which prioritization framework is best suited for understanding which features drive customer delight versus basic expectations?", options: ["WSJF", "RICE", "Kano Model", "MoSCoW"], answer: 2, explanation: "The Kano Model specifically categorizes features by their emotional impact on customers — from basic expectations to delighters." },
  { id: 93, unit: "Prioritization", question: "The Build-Measure-Learn loop is used to…", options: ["Plan engineering sprints", "Iterate through assumptions to refine product concepts and validate hypotheses", "Track employee performance", "Manage stakeholder communication calendars"], answer: 1, explanation: "Build-Measure-Learn is the core validation cycle — build the smallest testable version, measure the response, learn whether your assumption was right." },
  { id: 94, unit: "Launch Readiness", question: "What is the primary goal of launch readiness strategies?", options: ["To finalize pricing strategies exclusively", "To ensure products are aesthetically pleasing", "To minimize post-launch risks and maximize success", "To enhance the development team's performance"], answer: 2, explanation: "Launch readiness is about reducing risk and setting the product up for the best possible chance of success." },
  { id: 95, unit: "Launch Readiness", question: "What should be considered when planning the duration of a launch readiness testing phase?", options: ["The company's financial budget for the test", "The number of customer participants and overall objectives", "The length of the last product launch trial", "Feedback from the marketing team only"], answer: 1, explanation: "Testing scope should match the objectives being validated and the number of participants needed for meaningful results." },
  { id: 96, unit: "Launch Readiness", question: "Which launch readiness method releases a feature to a small percentage of users to observe their response?", options: ["Field Testing", "Canary Release", "Dark Launch", "Pilot Program"], answer: 2, explanation: "Dark Launch releases to a small percentage of users to understand user response to new features before full rollout." },
  { id: 97, unit: "Launch Readiness", question: "A Pilot Program differs from a Dark Launch primarily because…", options: ["Pilot Programs involve automated testing only", "Pilot Programs use a hand-selected, opted-in group rather than a random percentage of users", "Dark Launches are only for mobile apps", "Pilot Programs are only used for pricing changes"], answer: 1, explanation: "Pilot Programs are intentional — you choose specific participants. Dark Launches are percentage-based and automatic." },
  { id: 98, unit: "Launch Readiness", question: "Which of the following is a key component of launch readiness preparation?", options: ["Stopping all development 6 months before launch", "Training sales, customer support, and other teams so they can handle customer inquiries", "Removing all existing product documentation", "Delegating all launch decisions to the marketing team"], answer: 1, explanation: "Launch readiness includes cross-functional preparation — support, sales, and other teams must be trained and ready before the product reaches customers." },
  { id: 99, unit: "Launch Readiness", question: "Field Testing as a Product Readiness method involves…", options: ["Testing the product in a controlled lab environment with internal employees", "Validating the product in real-world conditions with actual customers in their own environment", "Running automated regression tests before shipping", "Reviewing designs with the executive team"], answer: 1, explanation: "Field Testing = real-world, real-environment validation. It surfaces issues that lab conditions and internal reviews consistently miss." },
  { id: 100, unit: "Success Metrics", question: "Vanity metrics are good sources of success metrics.", options: ["True", "False"], answer: 1, explanation: "False. Vanity metrics look impressive but don't tell you if you're achieving product outcomes. Ask: does this metric help us make a better decision?" },
  { id: 101, unit: "Success Metrics", question: "Success Metrics answer which two questions?", options: ["Are we on budget? Are we on time?", "Am I achieving Product Outcomes? Am I on the way to success?", "Is the product built? Is it shipped?", "Are users happy? Are stakeholders aligned?"], answer: 1, explanation: "Success Metrics tell you if you're achieving your product outcomes and whether you're tracking toward success." },
  { id: 102, unit: "Success Metrics", question: "Which health metric describes the depth of feature utilization?", options: ["Breadth", "Frequency", "Depth", "Sentiment"], answer: 2, explanation: "Depth = how deeply features are used. Breadth = how many users use a feature. Frequency = how often. Sentiment = how users feel." },
  { id: 103, unit: "Success Metrics", question: "What role does a Product Manager have in selecting Health Metrics?", options: ["To focus solely on financial performance metrics", "To avoid metrics that don't align with marketing strategies", "To ensure metrics align with product needs", "To delegate metric analysis to the sales team"], answer: 2, explanation: "PMs select health metrics that genuinely reflect product performance and surface issues early." },
  { id: 104, unit: "Success Metrics", question: "Which type of metric measures how often users interact with a product feature?", options: ["Depth", "Breadth", "Frequency", "Sentiment"], answer: 2, explanation: "Frequency tracks how often users engage with a feature over time — a key signal of whether it's becoming habitual or being ignored." },
  { id: 105, unit: "Success Metrics", question: "What is the key difference between Success Metrics and Health Metrics?", options: ["Success Metrics are set by engineers; Health Metrics by PMs", "Success Metrics measure if you're achieving product outcomes; Health Metrics measure if you're not breaking things", "They are the same type of metric with different names", "Health Metrics are only used after launch"], answer: 1, explanation: "Success Metrics = are we winning? Health Metrics = are we staying stable? Both are needed but answer different questions." },
  { id: 106, unit: "Success Metrics", question: "Which of the following is the best example of a Vanity Metric?", options: ["Customer retention rate after 90 days", "Number of app downloads", "Revenue per customer segment", "Task completion rate in user testing"], answer: 1, explanation: "Downloads look impressive but don't tell you if users are getting value, staying, or converting. It doesn't drive product decisions." },
  { id: 107, unit: "Positioning and Pricing", question: "What are the two main parts of a Positioning Statement?", options: ["Market analysis and customer feedback", "Problem and solution", "Target audience and product category", "Customer value and differentiation"], answer: 3, explanation: "A positioning statement's core is customer value (what benefit they get) and differentiation (why it's better than alternatives)." },
  { id: 108, unit: "Positioning and Pricing", question: "Which pricing strategy asks respondents to compare your product to the value delivered by alternatives?", options: ["Willingness to Pay", "Pricing Governance", "Conjoint Analysis", "Pricing Tactic"], answer: 2, explanation: "Conjoint Analysis reveals relative value by asking respondents to make tradeoff comparisons — surfacing what they value most versus alternatives." },
  { id: 109, unit: "Positioning and Pricing", question: "What should Product Managers consider when evaluating their current pricing strategy?", options: ["Adhering strictly to historical pricing models", "Completely disregarding buyer perspectives", "Limiting pricing discussions to avoid confusion", "Potential adjustments based on market feedback"], answer: 3, explanation: "Pricing should be dynamic and informed by market feedback. Historical models shouldn't override what the market tells you." },
  { id: 110, unit: "Positioning and Pricing", question: "From a Seller perspective, which pricing equation is correct?", options: ["Revenue - Cost = Profit", "Price - Cost = Profit", "Value - Price = Profit", "Cost + Margin = Revenue"], answer: 1, explanation: "Price - Cost = Profit. Sellers set a price and subtract costs to determine profitability." },
  { id: 111, unit: "Positioning and Pricing", question: "A positioning statement should be relevant, credible, and…", options: ["Expensive to produce", "Differentiated — offering clear, distinctive benefits that serve as a filter for purchasing decisions", "Aligned with competitor messaging", "Written only by the marketing team"], answer: 1, explanation: "A positioning statement must be relevant to the customer, credible given the brand, and differentiated enough to influence the purchase decision." },
  { id: 112, unit: "Positioning and Pricing", question: "The Competitive Matrix in positioning is used to…", options: ["Track competitor employee headcount", "Map your product against competitors on two key axes to identify differentiation and whitespace", "Document all features competitors have that you don't", "Set pricing based on what competitors charge"], answer: 1, explanation: "The Competitive Matrix plots your product and competitors on the axes that matter most to customers, revealing your unique position." },
  { id: 113, unit: "Positioning and Pricing", question: "When is Value-Based Pricing most appropriate?", options: ["When the product is a commodity with many identical substitutes", "When the product delivers clearly differentiated value that customers perceive as significantly better than alternatives", "When the company wants to match competitor prices exactly", "When cost of production is the primary concern"], answer: 1, explanation: "Value-based pricing works when customers perceive unique, high value in your product — allowing you to price based on perceived benefit rather than cost." },
  { id: 114, unit: "Deliver", question: "What essential practice allows for the ongoing enhancement of a product post-delivery?", options: ["Market exit strategies", "Continuous discovery", "Product budgeting and forecasting", "Reactive customer service"], answer: 1, explanation: "Continuous discovery — ongoing customer engagement, research, and learning — keeps a product evolving with real customer needs after launch." },
  { id: 115, unit: "Deliver", question: "What is 'Product End-of-Life'?", options: ["When a product a customer purchases breaks", "A life cycle stage when the product is no longer being developed, supported, or sold", "When a competitor releases a product with better features", "When a consumer leaves for a competitor's product"], answer: 1, explanation: "End-of-Life is a deliberate lifecycle stage — when the PM and company decide to stop developing, supporting, and selling the product." },
  { id: 116, unit: "Deliver", question: "What model describes how to achieve Product-Market Fit?", options: ["Beta - Measure - Learn", "Build - Measure - Launch", "Build - Measure - Learn", "Build - Check - Test"], answer: 2, explanation: "Build - Measure - Learn (Lean Startup by Eric Ries). Build the smallest version, measure response, learn whether to continue, pivot, or stop." },
  { id: 117, unit: "Deliver", question: "Which of the following is an example of Product Readiness?", options: ["Optimizing pricing", "Field Testing", "Customer support staffing", "Building the product"], answer: 1, explanation: "Field Testing is a Product Readiness activity — validating the product in real-world conditions before a full launch." },
  { id: 118, unit: "Deliver", question: "What is a key PM responsibility when a product reaches End-of-Life?", options: ["Immediately deleting all product data", "Communicating transparently with stakeholders and providing transition support to customers", "Shifting all resources to a competing product immediately", "Handing all responsibilities to engineering"], answer: 1, explanation: "End-of-life requires careful stakeholder communication, transition planning, and customer support — all PM-owned responsibilities." },
  { id: 119, unit: "Deliver", question: "What is the key goal of Go-to-Market strategy?", options: ["Introducing the product to the market effectively while aligning marketing, sales, and product to drive adoption", "Writing technical documentation for the product", "Choosing the internal tools the engineering team will use", "Setting the quarterly budget for the product team"], answer: 0, explanation: "GTM strategy aligns marketing, sales, and product around a shared plan to bring the product to market and drive adoption." },
  { id: 120, unit: "Deliver", question: "Continuous Discovery of customer needs is best described as…", options: ["A one-time research effort at the start of a product initiative", "An ongoing practice of regular customer engagement to stay attuned to evolving needs and market trends", "The annual customer satisfaction survey sent by the support team", "A process only relevant during the discovery phase of the Blueprint"], answer: 1, explanation: "Continuous Discovery is a regular, ongoing habit — not a project. Markets and customers change; discovery must keep pace." },

  // ── PORTER'S FIVE FORCES ────────────────────────────────────────────────────
  { id: 121, unit: "Porter's Five Forces", question: "What are Porter's Five Forces?", options: ["Cost, Quality, Speed, Innovation, Reliability", "Intensity of Competitive Rivalry, Threat of New Entrants, Threat of Substitutes, Bargaining Power of Customers, Bargaining Power of Suppliers", "Political, Economic, Social, Technological, Environmental, Legal", "Market Penetration, Product Development, Market Development, Diversification, Withdrawal"], answer: 1, explanation: "Porter's Five Forces is a competitive analysis framework: Competitive Rivalry, Threat of New Entrants, Threat of Substitutes, Bargaining Power of Buyers, and Bargaining Power of Suppliers." },
  { id: 122, unit: "Porter's Five Forces", question: "Which of Porter's Five Forces is most directly affected when many similar products exist in the market at similar price points?", options: ["Threat of New Entrants", "Bargaining Power of Suppliers", "Threat of Substitutes", "Intensity of Competitive Rivalry"], answer: 3, explanation: "Threat of Substitutes is high when customers can easily switch to similar alternatives. This weakens your pricing power and forces differentiation." },
  { id: 123, unit: "Porter's Five Forces", question: "A new startup can easily build and launch a competing product in your market with minimal capital. Which of Porter's Five Forces does this describe?", options: ["Intensity of Competitive Rivalry", "Threat of New Entrants", "Bargaining Power of Customers", "Threat of Substitutes"], answer: 1, explanation: "Threat of New Entrants is high when barriers to entry are low — meaning new competitors can easily enter and erode your market position." },

  // ── BCG MATRIX ──────────────────────────────────────────────────────────────
  { id: 124, unit: "BCG Matrix", question: "What are the four quadrants of the BCG Growth-Share Matrix?", options: ["Grow, Hold, Harvest, Divest", "Stars, Cash Cows, Question Marks, Dogs", "Leaders, Challengers, Followers, Nichers", "Innovators, Early Adopters, Early Majority, Laggards"], answer: 1, explanation: "The BCG Matrix: Stars (high growth, high share), Cash Cows (low growth, high share), Question Marks (high growth, low share), Dogs (low growth, low share)." },
  { id: 125, unit: "BCG Matrix", question: "In the BCG Matrix, what is a 'Cash Cow'?", options: ["A product in a high-growth market with low market share", "A product in a low-growth market with high market share that generates strong profit", "A product with uncertain potential in a fast-growing market", "A declining product in a shrinking market"], answer: 1, explanation: "Cash Cows are established products in mature markets with high share. They generate reliable profit used to fund Stars and Question Marks." },
  { id: 126, unit: "BCG Matrix", question: "According to the BCG Matrix, profits from Cash Cows are ideally used to fund investments in which quadrant?", options: ["Dogs", "Other Cash Cows", "Stars and Question Marks", "Mature products only"], answer: 2, explanation: "Cash Cow profits fund investment in Stars (defend leadership in high-growth markets) and Question Marks (products with potential that need resources to grow)." },

  // ── 4 PS OF MARKETING ───────────────────────────────────────────────────────
  { id: 127, unit: "4 Ps of Marketing", question: "What are Kotler's 4 Ps of Marketing?", options: ["People, Process, Performance, Positioning", "Product, Price, Place, Promotion", "Plan, Produce, Package, Promote", "Problem, Proposition, Proof, Purchase"], answer: 1, explanation: "Kotler's 4 Ps: Product (what you sell), Price (what you charge), Place (how it reaches customers), Promotion (how you communicate it). A foundational marketing mix framework." },
  { id: 128, unit: "4 Ps of Marketing", question: "Which of the 4 Ps covers the channels and distribution methods used to get a product to customers?", options: ["Product", "Price", "Place", "Promotion"], answer: 2, explanation: "Place covers distribution — retail, online, direct sales, partnerships, logistics. It's how the product physically or digitally reaches the customer." },

  // ── SERVICE CHARACTERISTICS ─────────────────────────────────────────────────
  { id: 129, unit: "Service Characteristics", question: "What are the four key characteristics that distinguish a service from a physical product?", options: ["Scalability, Reliability, Availability, Affordability", "Intangibility, Inseparability, Variability, Perishability", "Speed, Quality, Cost, Flexibility", "Standardization, Automation, Customization, Integration"], answer: 1, explanation: "Services are: Intangible (can't be seen before purchase), Inseparable (produced and consumed simultaneously), Variable (quality can vary), and Perishable (can't be stored or inventoried)." },
  { id: 130, unit: "Service Characteristics", question: "A hotel room that goes unsold tonight cannot be stored and sold tomorrow. Which characteristic of services does this describe?", options: ["Intangibility", "Inseparability", "Variability", "Perishability"], answer: 3, explanation: "Perishability means services can't be stored for future use. Unused hotel rooms, empty airline seats, and idle consultant hours are lost revenue — they can't be inventoried." },

  // ── PRODBOK PRODUCT LIFECYCLE ───────────────────────────────────────────────
  { id: 131, unit: "ProdBOK Lifecycle", question: "According to the ProdBOK, what are the 7 phases of the Product Lifecycle?", options: ["Research, Design, Build, Test, Launch, Grow, Retire", "Conceive, Plan, Develop, Qualify, Launch, Deliver, Retire", "Discover, Define, Design, Build, Ship, Measure, Sunset", "Ideate, Prototype, Validate, Build, Launch, Scale, End-of-Life"], answer: 1, explanation: "The ProdBOK defines 7 phases: Conceive, Plan, Develop, Qualify, Launch, Deliver, Retire. Each phase is preceded by a cross-functional Go/No-Go gate." },
  { id: 132, unit: "ProdBOK Lifecycle", question: "What is the purpose of 'Gates' in the ProdBOK Product Lifecycle?", options: ["To slow down development so engineers have more time", "To serve as Go/No-Go decision points and quality control checkpoints between lifecycle phases", "To assign budget to each phase of development", "To document the handoff between product and engineering teams"], answer: 1, explanation: "Gates are decision checkpoints between PLC phases — Go, No-Go, Hold, or Recycle. They control investment, screen new product ideas, and ensure quality before advancing." },

  // ── INBOUND VS OUTBOUND ─────────────────────────────────────────────────────
  { id: 133, unit: "Inbound vs Outbound PM", question: "Which of the following best describes 'Inbound' product management functions?", options: ["Advertising, PR, sales enablement, and product launches", "Market research, customer requirements, roadmapping, and product strategy", "Social media management, content creation, and brand positioning", "Revenue forecasting, investor relations, and financial reporting"], answer: 1, explanation: "Inbound PM = understanding the market and defining the product (research, requirements, roadmap, strategy). Outbound PM = taking the product to market (positioning, launch, sales enablement)." },
];

const unitColors = {
  "Role of the PM": "#4F46E5", "Working with Stakeholders": "#0891B2", "Productside Blueprint": "#059669",
  "Outcomes and Outputs": "#D97706", "Market Environment": "#DC2626", "Customer Problems": "#7C3AED",
  "Customers and Users": "#BE185D", "Framing the Problem": "#B45309", "Lo-fi Experimentation": "#0369A1",
  "Ideating Solutions": "#0F766E", "Outcome-Based Roadmaps": "#065F46", "Prioritization": "#92400E",
  "Launch Readiness": "#1D4ED8", "Success Metrics": "#6D28D9", "Positioning and Pricing": "#9F1239", "Deliver": "#0F766E",
  "Porter's Five Forces": "#7E22CE", "BCG Matrix": "#0E7490", "4 Ps of Marketing": "#B45309",
  "Service Characteristics": "#065F46", "ProdBOK Lifecycle": "#2563EB", "Inbound vs Outbound PM": "#DC2626",
};

const PASS_SCORE = 89;
const getUnitColor = (u) => unitColors[u] || "#4F46E5";

// answersMap: { [questionIndex]: { selected: number | null, revealed: boolean } }

export default function OPMExam() {
  const [screen, setScreen] = useState("start");
  const [current, setCurrent] = useState(0);
  const [shuffled, setShuffled] = useState([]);
  const [answersMap, setAnswersMap] = useState({});
  const [filter, setFilter] = useState("All");

  const units = ["All", ...Array.from(new Set(questions.map(q => q.unit)))];

  // Current state derived from answersMap
  const currentAnswer = answersMap[current] || { selected: null, revealed: false };
  const selected = currentAnswer.selected;
  const revealed = currentAnswer.revealed;

  const setSelected = (val) => {
    if (revealed) return;
    setAnswersMap(prev => ({ ...prev, [current]: { ...currentAnswer, selected: val } }));
  };

  const handleReveal = () => {
    if (selected === null) return;
    setAnswersMap(prev => ({ ...prev, [current]: { ...currentAnswer, revealed: true } }));
  };

  const handleSkip = () => {
    // Save as skipped (selected: null, revealed: false) and advance
    if (!answersMap[current]) {
      setAnswersMap(prev => ({ ...prev, [current]: { selected: null, revealed: false } }));
    }
    if (current + 1 < shuffled.length) setCurrent(c => c + 1);
    else setScreen("results");
  };

  const handleBack = () => {
    if (current > 0) setCurrent(c => c - 1);
  };

  const handleNext = () => {
    if (current + 1 < shuffled.length) setCurrent(c => c + 1);
    else setScreen("results");
  };

  const handleFinish = () => setScreen("results");

  const startExam = () => {
    const pool = filter === "All" ? questions : questions.filter(q => q.unit === filter);
    setShuffled([...pool].sort(() => Math.random() - 0.5));
    setAnswersMap({});
    setCurrent(0);
    setScreen("quiz");
  };

  // Scoring
  const answered = Object.entries(answersMap).filter(([i]) => Number(i) < shuffled.length);
  const score = answered.filter(([i, a]) => a.selected === shuffled[Number(i)]?.answer).length;
  const total = shuffled.length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const skipped = answered.filter(([, a]) => a.selected === null).length;
  const answeredCount = answered.filter(([, a]) => a.selected !== null).length;

  // Progress dot states
  const getDotState = (idx) => {
    const a = answersMap[idx];
    if (!a) return "unanswered";
    if (a.selected === null) return "skipped";
    if (a.revealed) return a.selected === shuffled[idx]?.answer ? "correct" : "wrong";
    return "selected";
  };

  if (screen === "start") return (
    <div style={{ minHeight: "100vh", background: "#08090F", fontFamily: "'Georgia', serif", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ maxWidth: 640, width: "100%" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "#4B5563", textTransform: "uppercase", marginBottom: 14, fontFamily: "monospace" }}>AIPMM CPM Certification Prep</div>
          <h1 style={{ fontSize: 42, fontWeight: "normal", color: "#F3F4F6", lineHeight: 1.1, margin: "0 0 14px" }}>Optimal Product<br /><em style={{ color: "#818CF8" }}>Management</em><br />Practice Exam</h1>
          <p style={{ color: "#6B7280", fontSize: 15, lineHeight: 1.7, margin: 0 }}>133 questions. You need <strong style={{ color: "#F3F4F6" }}>89 correct</strong> to pass — the same threshold as the real certification exam.</p>
        </div>

        <div style={{ background: "#0F1020", border: "1px solid #312E81", borderRadius: 10, padding: "16px 20px", marginBottom: 20, display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ textAlign: "center", minWidth: 56 }}>
            <div style={{ fontSize: 26, fontWeight: "bold", color: "#818CF8", fontFamily: "monospace", lineHeight: 1 }}>89</div>
            <div style={{ fontSize: 10, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 2 }}>to pass</div>
          </div>
          <div style={{ width: 1, height: 36, background: "#1F2544" }} />
          <div style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.5 }}><strong style={{ color: "#C7D2FE" }}>74.2%</strong> correct out of 120 core questions. 13 bonus questions from broader AIPMM exam topics added. Skip and go back freely.</div>
        </div>

        <div style={{ background: "#0F1020", border: "1px solid #1F2544", borderRadius: 10, padding: 20, marginBottom: 20 }}>
          <div style={{ fontSize: 11, color: "#4B5563", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "monospace" }}>Filter by Unit or run the full 120</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {units.map(u => {
              const count = u === "All" ? questions.length : questions.filter(q => q.unit === u).length;
              const active = filter === u;
              return <button key={u} onClick={() => setFilter(u)} style={{ padding: "5px 12px", borderRadius: 16, border: `1px solid ${active ? "#818CF8" : "#1F2544"}`, background: active ? "#1E1B4B" : "transparent", color: active ? "#C7D2FE" : "#6B7280", fontSize: 12, cursor: "pointer", fontFamily: "monospace" }}>{u === "All" ? `All (${count})` : `${u} (${count})`}</button>;
            })}
          </div>
        </div>

        <button onClick={startExam} style={{ width: "100%", padding: "17px", background: "#4F46E5", color: "#fff", border: "none", borderRadius: 10, fontSize: 15, cursor: "pointer", fontFamily: "'Georgia', serif" }}
          onMouseEnter={e => e.target.style.background = "#4338CA"} onMouseLeave={e => e.target.style.background = "#4F46E5"}>
          {filter === "All" ? "Start Full 133-Question Exam →" : `Practice ${filter} →`}
        </button>
      </div>
    </div>
  );

  if (screen === "study") {
    const unitList = Array.from(new Set(questions.map(q => q.unit)));
    const filtered = questions.filter(q => {
      const unitMatch = studyUnit === "All" || q.unit === studyUnit;
      const search = searchTerm.toLowerCase();
      const textMatch = !searchTerm || q.question.toLowerCase().includes(search) || q.options[q.answer].toLowerCase().includes(search) || q.explanation.toLowerCase().includes(search);
      return unitMatch && textMatch;
    });
    const grouped = unitList.reduce((acc, unit) => {
      const qs = filtered.filter(q => q.unit === unit);
      if (qs.length) acc[unit] = qs;
      return acc;
    }, {});

    return (
      <div style={{ minHeight: "100vh", background: "#08090F", fontFamily: "'Georgia', serif" }}>
        {/* Sticky header */}
        <div style={{ position: "sticky", top: 0, zIndex: 10, background: "#08090F", borderBottom: "1px solid #0F1020", padding: "14px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => setScreen("start")} style={{ padding: "7px 14px", background: "transparent", color: "#6B7280", border: "1px solid #1F2544", borderRadius: 7, fontSize: 13, cursor: "pointer", fontFamily: "'Georgia', serif", flexShrink: 0 }}>← Back</button>
            <div style={{ flex: 1, minWidth: 180 }}>
              <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search questions, answers, explanations…" style={{ width: "100%", padding: "8px 14px", background: "#0F1020", border: "1px solid #1F2544", borderRadius: 7, color: "#D1D5DB", fontSize: 13, fontFamily: "monospace", outline: "none", boxSizing: "border-box" }} />
            </div>
            <div style={{ fontSize: 12, color: "#4B5563", fontFamily: "monospace", flexShrink: 0 }}>{filtered.length} / {questions.length}</div>
          </div>
          {/* Unit filter strip */}
          <div style={{ maxWidth: 760, margin: "10px auto 0", display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["All", ...unitList].map(u => {
              const active = studyUnit === u;
              return (
                <button key={u} onClick={() => setStudyUnit(u)} style={{ padding: "4px 11px", borderRadius: 14, border: `1px solid ${active ? getUnitColor(u) : "#1F2544"}`, background: active ? "#0F1020" : "transparent", color: active ? "#F3F4F6" : "#4B5563", fontSize: 11, cursor: "pointer", fontFamily: "monospace", borderLeftColor: active ? getUnitColor(u) : "#1F2544" }}>
                  {u === "All" ? `All (${questions.length})` : u}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "28px 24px 60px" }}>
          <div style={{ marginBottom: 28 }}>
            <h1 style={{ fontSize: 28, fontWeight: "normal", color: "#F3F4F6", margin: "0 0 6px" }}>Study Sheet</h1>
            <p style={{ color: "#4B5563", fontSize: 14, margin: 0, fontFamily: "monospace" }}>All 133 questions with correct answers and explanations. Use the filter or search to focus on weak areas.</p>
          </div>

          {Object.entries(grouped).map(([unit, qs]) => (
            <div key={unit} style={{ marginBottom: 36 }}>
              {/* Unit heading */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, paddingBottom: 10, borderBottom: `1px solid ${getUnitColor(unit)}22` }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: getUnitColor(unit), flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "#F3F4F6", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em" }}>{unit}</span>
                <span style={{ fontSize: 11, color: "#4B5563", fontFamily: "monospace" }}>({qs.length})</span>
              </div>

              {/* Questions */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {qs.map((q, i) => (
                  <div key={q.id} style={{ background: "#0F1020", border: "1px solid #1A1F35", borderRadius: 10, overflow: "hidden" }}>
                    {/* Question */}
                    <div style={{ padding: "14px 18px 12px", borderBottom: "1px solid #1A1F35" }}>
                      <div style={{ fontSize: 10, color: "#4B5563", fontFamily: "monospace", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>Q{q.id}</div>
                      <p style={{ color: "#D1D5DB", fontSize: 14, margin: 0, lineHeight: 1.6 }}>{q.question}</p>
                    </div>
                    {/* Options */}
                    <div style={{ padding: "10px 18px", borderBottom: "1px solid #1A1F35", display: "flex", flexDirection: "column", gap: 6 }}>
                      {q.options.map((opt, idx) => {
                        const isCorrect = idx === q.answer;
                        return (
                          <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: isCorrect ? "8px 12px" : "4px 0", background: isCorrect ? "#052E16" : "transparent", borderRadius: isCorrect ? 7 : 0, border: isCorrect ? "1px solid #166534" : "none" }}>
                            <span style={{ fontSize: 11, fontFamily: "monospace", color: isCorrect ? "#4ADE80" : "#374151", flexShrink: 0, marginTop: 1, minWidth: 16 }}>{isCorrect ? "✓" : String.fromCharCode(65 + idx)}</span>
                            <span style={{ fontSize: 14, color: isCorrect ? "#86EFAC" : "#374151", lineHeight: 1.5, fontWeight: isCorrect ? "normal" : "normal" }}>{opt}</span>
                          </div>
                        );
                      })}
                    </div>
                    {/* Explanation */}
                    <div style={{ padding: "12px 18px" }}>
                      <div style={{ fontSize: 10, color: "#4ADE80", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 5 }}>Why</div>
                      <p style={{ color: "#9CA3AF", fontSize: 13, margin: 0, lineHeight: 1.65 }}>{q.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#4B5563", fontFamily: "monospace" }}>No questions match your search.</div>
          )}
        </div>
      </div>
    );
  }


  if (screen === "quiz") {
    const q = shuffled[current];
    const progress = (answeredCount / total) * 100;
    const runningScore = score;
    const remaining = total - answeredCount;

    return (
      <div style={{ minHeight: "100vh", background: "#08090F", fontFamily: "'Georgia', serif", display: "flex", flexDirection: "column" }}>
        {/* Progress bar */}
        <div style={{ height: 3, background: "#1F2544" }}>
          <div style={{ height: "100%", background: "#818CF8", width: `${progress}%`, transition: "width 0.3s" }} />
        </div>

        {/* Header */}
        <div style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #0F1020" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: getUnitColor(q.unit) }} />
            <span style={{ fontSize: 11, color: "#6B7280", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>{q.unit}</span>
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {filter === "All" && <span style={{ fontSize: 12, fontFamily: "monospace", color: (PASS_SCORE - runningScore) <= remaining ? "#4ADE80" : "#FCA5A5" }}>{runningScore}/{PASS_SCORE}</span>}
            <span style={{ fontSize: 12, color: "#4B5563", fontFamily: "monospace" }}>{current + 1}/{total}</span>
          </div>
        </div>

        {/* Question dot strip — shows last 15 questions around current */}
        <div style={{ padding: "10px 20px 0", display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap" }}>
          {shuffled.map((_, idx) => {
            const state = getDotState(idx);
            const isCurrent = idx === current;
            const dotColor = isCurrent ? "#818CF8" : state === "correct" ? "#4ADE80" : state === "wrong" ? "#F87171" : state === "selected" ? "#93C5FD" : state === "skipped" ? "#6B7280" : "#1F2544";
            return (
              <button key={idx} onClick={() => setCurrent(idx)} title={`Q${idx + 1}`} style={{ width: isCurrent ? 10 : 7, height: isCurrent ? 10 : 7, borderRadius: "50%", background: dotColor, border: "none", cursor: "pointer", padding: 0, transition: "all 0.15s", flexShrink: 0 }} />
            );
          })}
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", padding: "28px 24px 24px" }}>
          <div style={{ maxWidth: 660, width: "100%" }}>
            <div style={{ fontSize: 10, color: "#4B5563", fontFamily: "monospace", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.15em" }}>Question {current + 1}</div>
            <h2 style={{ fontSize: 21, color: "#F3F4F6", fontWeight: "normal", lineHeight: 1.55, marginBottom: 26 }}>{q.question}</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 22 }}>
              {q.options.map((opt, i) => {
                let bg = "#0F1020", border = "#1F2544", color = "#9CA3AF";
                if (revealed) {
                  if (i === q.answer) { bg = "#052E16"; border = "#16A34A"; color = "#86EFAC"; }
                  else if (i === selected && selected !== q.answer) { bg = "#1F0707"; border = "#DC2626"; color = "#FCA5A5"; }
                  else { color = "#374151"; }
                } else if (selected === i) { bg = "#1E1B4B"; border = "#818CF8"; color = "#C7D2FE"; }
                return (
                  <button key={i} onClick={() => { if (!revealed) setSelected(i); }} style={{ padding: "13px 17px", background: bg, border: `1px solid ${border}`, borderRadius: 9, color, fontSize: 14, textAlign: "left", cursor: revealed ? "default" : "pointer", display: "flex", alignItems: "flex-start", gap: 12, transition: "all 0.12s", fontFamily: "'Georgia', serif", lineHeight: 1.5 }}>
                    <span style={{ minWidth: 20, height: 20, borderRadius: "50%", border: `1px solid ${border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontFamily: "monospace", flexShrink: 0, marginTop: 1, color }}>
                      {revealed && i === q.answer ? "✓" : revealed && i === selected && selected !== q.answer ? "✗" : String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {revealed && (
              <div style={{ background: "#091810", border: "1px solid #166534", borderRadius: 9, padding: "15px 18px", marginBottom: 18 }}>
                <div style={{ fontSize: 10, color: "#4ADE80", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 7 }}>Explanation</div>
                <p style={{ color: "#D1FAE5", fontSize: 14, lineHeight: 1.65, margin: 0 }}>{q.explanation}</p>
              </div>
            )}

            {/* Navigation buttons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
              {/* Back */}
              <button onClick={handleBack} disabled={current === 0} style={{ padding: "13px", background: "transparent", color: current === 0 ? "#1F2544" : "#6B7280", border: `1px solid ${current === 0 ? "#111827" : "#1F2544"}`, borderRadius: 9, fontSize: 13, cursor: current === 0 ? "not-allowed" : "pointer", fontFamily: "'Georgia', serif" }}>
                ← Back
              </button>

              {/* Middle: Check / Skip */}
              {!revealed
                ? selected !== null
                  ? <button onClick={handleReveal} style={{ padding: "13px", background: "#4F46E5", color: "#fff", border: "none", borderRadius: 9, fontSize: 13, cursor: "pointer", fontFamily: "'Georgia', serif" }}>Check Answer</button>
                  : <button onClick={handleSkip} style={{ padding: "13px", background: "transparent", color: "#6B7280", border: "1px solid #1F2544", borderRadius: 9, fontSize: 13, cursor: "pointer", fontFamily: "'Georgia', serif" }}>Skip →</button>
                : <button onClick={handleNext} style={{ padding: "13px", background: "#4F46E5", color: "#fff", border: "none", borderRadius: 9, fontSize: 13, cursor: "pointer", fontFamily: "'Georgia', serif" }}
                    onMouseEnter={e => e.target.style.background = "#4338CA"} onMouseLeave={e => e.target.style.background = "#4F46E5"}>
                    {current + 1 < total ? "Next →" : "Finish →"}
                  </button>
              }

              {/* Finish early */}
              <button onClick={handleFinish} style={{ padding: "13px", background: "transparent", color: "#6B7280", border: "1px solid #1F2544", borderRadius: 9, fontSize: 13, cursor: "pointer", fontFamily: "'Georgia', serif" }}>
                End Exam
              </button>
            </div>

            {/* Unanswered warning */}
            {total - answeredCount > 0 && (
              <div style={{ marginTop: 12, textAlign: "center", fontSize: 12, color: "#4B5563", fontFamily: "monospace" }}>
                {total - answeredCount} unanswered {total - answeredCount === 1 ? "question" : "questions"} — click any dot above to jump to it
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (screen === "results") {
    const isFullExam = filter === "All";
    const didPass = isFullExam && score >= PASS_SCORE;
    const passColor = didPass ? "#4ADE80" : score >= 75 ? "#FCD34D" : "#FCA5A5";
    const passBorder = didPass ? "#166534" : score >= 75 ? "#A16207" : "#991B1B";
    const passBg = didPass ? "#052E16" : score >= 75 ? "#1C1507" : "#1F0707";

    const wrongAnswers = shuffled.map((q, idx) => {
      const a = answersMap[idx];
      if (!a || a.selected === q.answer) return null;
      return { ...q, selected: a?.selected ?? null, idx };
    }).filter(Boolean);

    return (
      <div style={{ minHeight: "100vh", background: "#08090F", fontFamily: "'Georgia', serif", padding: "36px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ background: "#0F1020", border: `1px solid ${passBorder}`, borderRadius: 14, padding: 36, marginBottom: 20, textAlign: "center" }}>
            <div style={{ fontSize: 80, fontWeight: "bold", color: passColor, fontFamily: "monospace", lineHeight: 1 }}>{score}</div>
            <div style={{ fontSize: 16, color: "#4B5563", fontFamily: "monospace", margin: "6px 0 6px" }}>out of {total}</div>
            <div style={{ fontSize: 28, color: "#9CA3AF", margin: "0 0 16px" }}>{pct}%</div>
            {skipped > 0 && <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 14 }}>{skipped} skipped / unanswered (counted as wrong)</div>}
            {isFullExam && (
              <div style={{ display: "inline-block", padding: "8px 22px", background: passBg, border: `1px solid ${passBorder}`, borderRadius: 20, color: passColor, fontSize: 13, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                {didPass ? "✓ PASS" : `✗ FAIL — Need ${Math.max(0, PASS_SCORE - score)} more correct`}
              </div>
            )}
          </div>

          <div style={{ background: "#0F1020", border: "1px solid #1F2544", borderRadius: 12, padding: 22, marginBottom: 20 }}>
            <div style={{ fontSize: 11, color: "#4B5563", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>Score by Unit</div>
            {Array.from(new Set(shuffled.map(q => q.unit))).map(unit => {
              const unitQs = shuffled.filter(q => q.unit === unit);
              const unitCorrect = unitQs.filter((q, i) => answersMap[shuffled.indexOf(q)]?.selected === q.answer).length;
              const unitPct = Math.round((unitCorrect / unitQs.length) * 100);
              return (
                <div key={unit} style={{ marginBottom: 13 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: 13, color: "#D1D5DB" }}>{unit}</span>
                    <span style={{ fontSize: 12, color: unitPct >= 74 ? "#4ADE80" : "#FCA5A5", fontFamily: "monospace" }}>{unitCorrect}/{unitQs.length} ({unitPct}%)</span>
                  </div>
                  <div style={{ height: 5, background: "#1F2544", borderRadius: 3 }}><div style={{ height: "100%", width: `${unitPct}%`, background: getUnitColor(unit), borderRadius: 3 }} /></div>
                </div>
              );
            })}
          </div>

          {wrongAnswers.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: "#FCA5A5", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>Incorrect / Skipped ({wrongAnswers.length})</div>
              {wrongAnswers.map((a, idx) => (
                <div key={idx} style={{ background: "#0F1020", border: "1px solid #1F2544", borderRadius: 9, padding: 18, marginBottom: 10 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "center" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: getUnitColor(a.unit), flexShrink: 0 }} />
                    <span style={{ fontSize: 10, color: "#4B5563", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>{a.unit}</span>
                  </div>
                  <p style={{ color: "#D1D5DB", fontSize: 14, margin: "0 0 10px", lineHeight: 1.5 }}>{a.question}</p>
                  {a.selected !== null
                    ? <div style={{ fontSize: 13, color: "#FCA5A5", marginBottom: 5 }}>✗ Your answer: {a.options[a.selected]}</div>
                    : <div style={{ fontSize: 13, color: "#6B7280", marginBottom: 5 }}>— Skipped</div>
                  }
                  <div style={{ fontSize: 13, color: "#86EFAC", marginBottom: 10 }}>✓ Correct: {a.options[a.answer]}</div>
                  <div style={{ background: "#091810", border: "1px solid #166534", borderRadius: 7, padding: "11px 14px" }}>
                    <p style={{ color: "#D1FAE5", fontSize: 13, margin: 0, lineHeight: 1.6 }}>{a.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setScreen("start")} style={{ flex: 1, padding: "15px", background: "transparent", color: "#6B7280", border: "1px solid #1F2544", borderRadius: 9, fontSize: 14, cursor: "pointer", fontFamily: "'Georgia', serif" }}>← Menu</button>
            <button onClick={startExam} style={{ flex: 2, padding: "15px", background: "#4F46E5", color: "#fff", border: "none", borderRadius: 9, fontSize: 14, cursor: "pointer", fontFamily: "'Georgia', serif" }} onMouseEnter={e => e.target.style.background = "#4338CA"} onMouseLeave={e => e.target.style.background = "#4F46E5"}>Retake →</button>
          </div>
        </div>
      </div>
    );
  }
}
