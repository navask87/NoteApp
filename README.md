# NoteApp

NoteApp is a full-stack note-taking application that consists of a React frontend written in TypeScript and an ASP.NET Core Web API backend with Entity Framework Core for data management. The backend uses SQL Server for data persistence, typically running inside a Docker container for ease of setup. This app allows users to create, update, and manage notes with different priorities and user association.

## Features

- Create, read, update, and delete notes
- Notes include title, content, priority (Low, Medium, High), and user association
- React frontend allows smooth user interactions
- ASP.NET Core backend exposes RESTful API endpoints
- Entity Framework Core used for database ORM
- SQL Server containerized with Docker for consistent development environment
- Swagger UI integration for API testing and documentation
- Cross-origin resource sharing (CORS) configured to enable frontend-backend communication

## Technology Stack

- Frontend: React, TypeScript, Fetch API
- Backend: ASP.NET Core 8.0, Entity Framework Core 8.0
- Database: Microsoft SQL Server (Docker container)
- API Documentation: Swagger / Swashbuckle
- Development Environment: Docker, Visual Studio Code / Visual Studio

## Getting Started

### Prerequisites

- Docker installed and running
- .NET 8.0 SDK installed
- Node.js and npm (for frontend)

### Running the SQL Server Database

Start the SQL Server container:

docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=YourStrong!Passw0rd" -p 1433:1433 --name sqlserver -d mcr.microsoft.com/mssql/server:2022-latest


### Backend Setup

1. Navigate to the `backend` folder.
2. Restore dependencies:

dotnet restore


3. Apply database migrations:

dotnet ef database update


4. Run the ASP.NET Core Web API:

dotnet run


Swagger UI will be available at `http://localhost:5000/swagger` (or corresponding port).

### Frontend Setup

1. Navigate to the `frontend` folder.
2. Install dependencies:

npm install


3. Run the React development server:

npm start


The frontend app will open at `http://localhost:3000`.

## Project Structure

- `frontend/` - React app source code
- `backend/` - ASP.NET Core Web API and EF Core models/migrations
- Docker used for running SQL Server database for consistency and isolation.

## Notes

- Configure your database connection string in `backend/appsettings.json` or environment variables. Example:

"ConnectionStrings": {
"DefaultConnection": "Server=localhost,1433;Database=NoteAppDb;User Id=sa;Password=YourStrong!Passw0rd;TrustServerCertificate=True;"
}

