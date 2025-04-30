# Scalong AI Chat Application

A modern Next.js application that integrates OpenAI's GPT models to provide an AI chat experience. Users can sign in with their GitHub accounts and engage in conversations with an AI assistant.

## Features

- **GitHub Authentication**: Secure user authentication using NextAuth.js with GitHub provider
- **AI Chat Interface**: Interactive chat UI powered by OpenAI's GPT-3.5 Turbo model
- **Streaming Responses**: Real-time streaming of AI responses for a natural conversation flow
- **Responsive Design**: Built with Tailwind CSS for a responsive and modern UI

## Tech Stack

- **Framework**: Next.js 15.3.1
- **Language**: TypeScript
- **Authentication**: NextAuth.js
- **AI Integration**: OpenAI API via AI SDK
- **Styling**: Tailwind CSS
- **Frontend**: React 19

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- GitHub OAuth credentials

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```
# Next Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# GitHub OAuth
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

# OpenAI
OPENAI_API_KEY=your-openai-api-key
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/youngwolf0412/scalong-assignment-app.git
   cd nextjs-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
  app/                  # App Router
    api/                # API Routes
      ask/              # AI Chat API
      auth/             # Authentication API
    auth/               # Auth Pages
    page.tsx            # Home Page
    layout.tsx          # Root Layout
  components/           # React Components
    AuthNavigation.tsx  # Auth UI Component
    ChatComponent.tsx   # Chat UI Component
    providers/          # Context Providers
```

## Usage

1. Visit the home page
2. Sign in with your GitHub account
3. Start chatting with the AI assistant
4. The AI will respond in real-time using OpenAI's language model

## Deployment

This Next.js app is ready for deployment on platforms like Vercel:

```bash
npm run build
# or
yarn build
```

## License

[MIT](LICENSE)

## Acknowledgements

- OpenAI for providing the AI models
- Next.js team for the amazing framework
- Tailwind CSS for the styling utilities
