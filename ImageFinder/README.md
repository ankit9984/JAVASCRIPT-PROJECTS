# Pixabay Image Gallery

Pixabay Image Gallery is a simple web application that allows users to search for images using the Pixabay API and display the results in a responsive grid layout.

## Features

- Search for images using keywords.
- Display images in a responsive grid layout.
- Show image details such as views, likes, downloads, and owner information.
- Responsive design for mobile devices.

## Pixabay API

This application utilizes the [Pixabay API](https://pixabay.com/service/about/api/) for fetching image data. To use the Pixabay API, you'll need an API key. Follow the steps below to obtain your API key:

1. Visit the [Pixabay API documentation](https://pixabay.com/service/about/api/) page.
2. Create a Pixabay account or log in if you already have one.
3. Once logged in, you can generate your API key from the [API key page](https://pixabay.com/accounts/register/).
4. Copy your API key and replace the placeholder in the JavaScript code with your actual API key.

```javascript
const apiKey = 'YOUR_PIXABAY_API_KEY';
const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&pretty=true`;


## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Web browser

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd pixabay-image-gallery