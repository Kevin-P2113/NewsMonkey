# NewsMonkey
A news website made using [React](https://react.dev), [Vite](https://vitejs.dev) and [BootStrap](https://getbootstrap.com).

## Introduction

NewsMonkey is a news website made using [React](https://react.dev), [Vite](https://vitejs.dev), [BootStrap](https://getbootstrap.com) and it uses the API provided by [NewsAPI](https://newsapi.org) , it displays the top headlines from various news categories such as business, general, entertainment, health, sports, technology and science. It only allows for news from two countries currently which are India and USA but more countries are supported in the API. It also allows the user to toggel between light and dark mode presets using bootstrap. It displays only 15 articles per page and has "next" and "prev" buttons to cycle between articles, the number of articles displayed can be changed but is kept fixed at 15 for this project for now.

## Installation

To get started with the news website project, follow the instructions below to set up your development environment:

### Prerequisites

Make sure you have the follwoing tools installed in your system:


- Node.js (v12 or later)
- npm (v6 or later)


### Clone the Repository

1. Open a terminal or command prompt.
2. Change the current working directory to the location where you want to clone the repository.
3. Run the following command to clone the repository.

```bash
git clone https://github.com/Kevin-P2113/NewsMonkey.git
```

### Install Dependencies

1. Navigate into the project directory:

```bash
cd NewsMonkey
```

2. Run the following command to install the project dependencies:

```bash
npm install
```

## Configure API key

To fetch news data the project uses NewsAPI service. Follow these steps to setup your API key:

1. Visit the [NewsAPI](https://newsapi.org) website and create an account.
2. Obtain your API key from the account dashboard. (Free for development purposes)
3. In the project directory create a file named `.env.local`.
4. Open the `.env.local` file and add the following line, replacing the `<YOUR_API_KEY>` with your actual API key:

```
VITE_REACT_APP_NEWS_API=<YOUR_API_KEY>
```

## Start the Development Server

To run NewsMonkey locally type the following command in your terminal while in the project directory:

```bash
npm run dev
```

The development server will start and you can view the website by going navigating to [http://localhost:3000](http://localhost:3000)


## Build for Production

To create a production ready build, use the following command in the terminal while in the project directory:

```bash
npm run build
```

This will generate optimized and minified assets in the `dist` directory.

