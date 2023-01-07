# frontend-challenge

Welcome to the coding challenge for frontend candidates at Peach Finance! You will find your prompt below, followed by instructions to get you up and running.

## Table of contents

- [Prompt](#prompt)
- [Rules](#rules)
- [Getting started](#getting-started)

## Prompt

PeachyTasks has gained a lot of users and they've started requesting new features and reporting bugs. You are to fix the defects and implement any new features as specified, according to provided mockups.

All work should be done on the frontend only — **do not modify the API**.

### Bug: "done" tasks list not updating with changes

When a user marks a task as "done" it should be shown under "Done" tasks without refreshing the page.

### Feature: Trash

Users need a way to move tasks they don't need anymore to the trash.

- Add "trash" button to each Task; when clicked:
  - DELETE `/api/tasks/${id}` to move the Task to the trash
  - Update task lists to reflect new API state
- Add "trash" menu item to the top navigation
  - Shows count of tasks in the trash
  - On click, show a modal with information about the trash
    - List all tasks in the trash
      - GET `/api/trash` to list tasks in the trash
    - Include "empty trash" button; when clicked:
      - DELETE `/api/trash` to empty the trash
      - Update task lists + trash to reflect new API state
      - Dismiss the modal

![Screen Shot 2022-10-03 at 5 15 55 PM](https://user-images.githubusercontent.com/1674821/193702505-90935c21-30bb-4323-9a5b-08d7e4dd27f1.png)
![Screen Shot 2022-10-03 at 5 16 07 PM](https://user-images.githubusercontent.com/1674821/193702514-556f255a-ab44-4328-b09a-f416c58b9c76.png)
![Screen Shot 2022-10-03 at 5 16 12 PM](https://user-images.githubusercontent.com/1674821/193702516-ca98a139-999e-4a07-a25a-104ec40e5509.png)
![Screen Shot 2022-10-03 at 5 18 01 PM](https://user-images.githubusercontent.com/1674821/193702600-c483b507-480d-4df1-9adf-a6ef86a443e3.png)

## Rules

- Change frontend code only
- Use styled-components or plain CSS for styling
- Add any (non-styling-related) external libraries you need

## Getting started

### Requirements

- Node.js v14.17.0 or later
- [yarn](https://yarnpkg.com/) - recommended

### Running the app

#### yarn

1. `yarn setup`
2. `yarn dev`

#### npm

1. `npm i && npx prisma generate && npx prisma migrate dev`
2. `npm run dev`

---

## Maintainer information

> If you're completing the Frontend Challenge, you don't need to read any further.

### Database

#### Overview

- SQLite is used for simplicity + portability
- [Prisma](https://www.prisma.io/) is used for ORM

#### Updating the schema

- Schema updates can be made in `prisma/schema.prisma`. See the [Prisma schema reference](https://www.prisma.io/docs/concepts/components/prisma-schema) for more information.
- Generate artifacts and run migrations after making changes:
  - `yarn prisma generate`
  - `yarn prisma migrate dev`
- For more information, see the [Prisma CLI reference](https://www.prisma.io/docs/reference/api-reference/command-reference)
