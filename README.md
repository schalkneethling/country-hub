# country-hub

A simple REST based service for country data

## Live Demo

The API is deployed and available at: https://rad-kashata-f52c8e.netlify.app/country-hub

## Usage

The API provides two endpoints:

1. Get all countries:

```bash
GET /country-hub
```

**Response:**

```json
[
  {
    "countryName": "Afghanistan",
    "countryCode": "AF"
  },
  {
    "countryName": "Åland Islands",
    "countryCode": "AX"
  },
  {
    "countryName": "South Africa",
    "countryCode": "ZA"
  }
  // ... more countries
]
```

2. Get a specific country by country code:

```bash
GET /country-hub/{countryCode}
```

**Example:**

```bash
GET /country-hub/ZA
```

**Response:**

```json
{
  "countryName": "South Africa",
  "countryCode": "ZA"
}
```

**Error Response (404):**

```json
{
  "error": "Country not found"
}
```

## Local Development

### Prerequisites

- Node.js (v18 or higher)
- Netlify CLI

### Setup

1. Clone the repository:

```bash
git clone https://github.com/schalkneethling/country-hub.git
cd country-hub
```

2. Install dependencies:

```bash
npm install
```

3. Start the local development server:

```bash
netlify functions:serve
```

The API will be available at `http://localhost:9999/country-hub`

### Development Notes

- **Path Parameters**: Due to a limitation in the local Netlify development environment, path parameters (`/country-hub/{countryCode}`) may not work correctly locally. For testing path parameters, use the production environment or deploy to a preview branch.
- **Basic Endpoint**: The `/country-hub` endpoint (without parameters) works correctly in local development.

## Data Format

Each country object contains:

- `countryName`: Full name of the country
- `countryCode`: ISO 3166-1 alpha-2 country code

## Deployment

This project is deployed on Netlify Functions. The function automatically handles routing for both endpoints:

- `/country-hub` - Returns all countries
- `/country-hub/:code` - Returns a specific country by code

## License

MIT
