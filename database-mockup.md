# Database Mockup for the Tech Institute Website

## Database Structure

The application uses Supabase (PostgreSQL) with the following tables:

### 1. bookings

Stores user booking requests for course sessions.

| Column Name   | Data Type | Description                       |
|---------------|-----------|-----------------------------------|
| id            | uuid      | Primary key                       |
| name          | text      | User's full name                  |
| email         | text      | User's email address              |
| phoneNumber   | text      | User's phone number               |
| course        | text      | Course name/type (optional)       |
| preferredDate | date      | Preferred start date              |
| preferredTime | text      | Preferred time slot (optional)    |
| message       | text      | Special requirements (optional)   |
| created_at    | timestamp | Timestamp of booking submission   |

### 2. contacts

Stores contact form submissions.

| Column Name | Data Type | Description                       |
|-------------|-----------|-----------------------------------|
| id          | uuid      | Primary key                       |
| name        | text      | User's full name                  |
| email       | text      | User's email address              |
| subject     | text      | Subject of inquiry                |
| message     | text      | Message content                   |
| created_at  | timestamp | Timestamp of message submission   |

## Sample Data

### Example Booking Records

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "John Smith",
    "email": "john.smith@example.com",
    "phoneNumber": "+918178199664",
    "course": "Playwright Automation",
    "preferredDate": "2023-12-15",
    "preferredTime": "Evening",
    "message": "I'd like to arrange for my team of 5 to join as well",
    "created_at": "2023-11-25T14:23:45Z"
  },
  {
    "id": "223e4567-e89b-12d3-a456-426614174001",
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "phoneNumber": "+1 (555) 987-6543",
    "course": "AI Integration",
    "preferredDate": "2024-01-10",
    "preferredTime": "Morning",
    "message": "I'm a beginner with some Python experience",
    "created_at": "2023-11-26T09:17:22Z"
  }
]
```

### Example Contact Form Submissions

```json
[
  {
    "id": "323e4567-e89b-12d3-a456-426614174002",
    "name": "Robert Johnson",
    "email": "robert.johnson@example.com",
    "subject": "Question about course prerequisites",
    "message": "Do I need prior programming experience for the Playwright Automation course?",
    "created_at": "2023-11-24T10:45:12Z"
  },
  {
    "id": "423e4567-e89b-12d3-a456-426614174003",
    "name": "Emily Davis",
    "email": "emily.davis@example.com",
    "subject": "Corporate training inquiry",
    "message": "I'm interested in arranging corporate training for our QA team of 12 people. Can you provide more details on corporate packages?",
    "created_at": "2023-11-27T16:33:05Z"
  }
]
```

## Issues Identified During Testing

1. The BookingForm component has a mismatch between form field names and the API endpoint's expected field names:
   - BookingForm uses `fullName` but the API expects `name`
   - This would cause the data to be saved incorrectly or not at all

2. There's no environment variables set up for Supabase credentials in the development environment:
   - Default placeholder values are being used: 'https://your-supabase-url.supabase.co'
   - The application can't connect to the actual database 