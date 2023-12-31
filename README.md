# EqualEd

EqualEd is an educational platform dedicated to promoting accessibility for students with disabilities. This project aims to provide a seamless learning experience for all users by ensuring that educational resources and features are inclusive and adhere to accessibility standards.

## Technologies Used

- Ruby on Rails: The backend framework for building the application.
- React.js: The frontend library for creating interactive user interfaces.
- PostgreSQL: The relational database management system for storing data.
- HTML, CSS, and JavaScript: Frontend technologies for creating the user interface.
- OpenAI-Ruby: A Ruby gem for integration with the OpenAI API
- Devise: A Ruby gem for user authentication.
- Other Ruby gems for database management, validations, and more (customize based on your project's needs).

## AI Integration Features

EqualEd leverages the power of artificial intelligence (AI) to enhance accessibility and provide a more inclusive learning experience. Here are some key AI integration features:

* Dynamic Language Translation

EqualEd harnesses the power of ChatGPT to swiftly translate course content for multilingual students.

* One-Click Summarization

With the click of a button, students that may struggle with long paragraphs or have difficulty grasping the material can request ChatGPT to summarize content for them.

### Coming Soon

* Auto-Transcription

EqualEd uses AI-driven auto-transcription to provide real-time transcriptions of audio content. This feature benefits students with hearing impairments by ensuring that they can access and understand spoken information.

* Text-to-Speech (TTS)

The Text-to-Speech (TTS) feature converts written text into spoken language. It allows students with visual impairments or reading difficulties to have text-based content read aloud to them, improving their comprehension and engagement.

* AI-Powered Recommendations

Our AI algorithms analyze user behavior and learning preferences to provide personalized content recommendations. This feature helps all students discover relevant resources and tailor their learning experience to their needs.

* Accessibility Audits

EqualEd's AI-driven accessibility audits automatically evaluate learning resources and features for compliance with accessibility standards. This ensures that all content and functionalities meet the highest accessibility criteria.

* Natural Language Processing (NLP)

We employ Natural Language Processing (NLP) techniques to assist students in understanding complex textual content. This feature provides definitions, explanations, and contextual information when students encounter challenging concepts.

* Adaptive Learning

The AI-driven adaptive learning feature customizes learning pathways for individual students. It adjusts the difficulty level and content based on each student's progress, ensuring that they receive an optimal learning experience.

## Getting Started

To get started with EqualEd, follow these steps:

1. Clone the repository: `git clone https://github.com/Limeload/equaled.git`
2. Head on over to [OpenAI](https://platform.openai.com/account/api-keys) and grab your very own API key.
3. While in the root directory of the project, type `touch .env` in the console to create an env file, then paste `OPENAI_ACCESS_TOKEN=<your own super secret api key here>` into it and save.
4. Install the necessary dependencies:
   - Backend:
     - `bundle install`
     - Make sure you have PostgreSQL running (here's some [help](https://www.freecodecamp.org/news/how-to-get-started-with-postgresql-9d3bc1dd1b11/))
     - Set up the database: `rails db:create db:migrate`. Optionally, you can also run `rails db:seed` for some free data!
     - Start the backend server: `rails s` (runs on http://localhost:3000)
   - Frontend (React.js):
     - Change directory to the client folder: `cd client`
     - Install frontend dependencies: `npm install`
     - Start the frontend development server: `npm start` (runs on http://localhost:4000)

## License

This project is licensed under the [MIT License](LICENSE).
