# Desk - symbl.ai

## Idea

The Desk is an office utility service built on the comprehensive suite of APIs provided by symbl.ai. It manages the task/action items discussed over meetings/conversations, maps them to appropriate assignees, and presents a summary table with interactive visualizations.

## How does it help?

The Desk will increase your productivity in the following ways.

Real-time conversation sentiments: Showing real-time conversational moods of the participants helping to maintain a creative and innovative environment to enhance productivity.

Minutes of the meeting: The recorded data is used to extract major ideas and discussions that help nonparticipants & participants alike.

Listing Task/Action Items of participants: It tracks recorded conversation data for Task/Action items assigned to participants and creates an interactive list helping managers and assignees alike.

## Who benefits from the service?

The Desk is an office utility took aiding the productivity of managers and employees

## Architecture & Design

How does it work? Desk connects to the meeting call using telephone API to gather the conversations. It then processes it to generate real-time sentiments. The data is also recorded and stored for further processing for other services offered. The stored data is retrieved after a certain period of time to extract summary and task items mapping for various participants and populates the dashboard. The dashboard UI shows Task items, minutes of the meetings, and meeting stats for further use.
![Untitled presentation](https://user-images.githubusercontent.com/88541725/131621170-2cabf951-84ae-4646-ab3b-ed4ed310e8c8.png)

## Technology Stack

- symbl.ai: For conversational intelligence.
- React.js: Front-end UI/UX.
- node.js: Server-side processing.
- Material UI: Bootstrap components for building UI.

### Future Plans

- Desk has the ambition to help increase productivity across the globe. It supports telephone API in the prototype. However, in the future Desk aims to join each professional meeting platform

### Getting Started

**Setting up the database**

```
$ git clone https://github.com/mehulnirala/desk-backend.git
$ cd desk-backend
$ npm start
```

**Setting up the UI**

In another terminal

```
$ git clone https://github.com/mehulnirala/desk-ui.git
$ cd desk-ui
$ npm start
```

## Snaps

![1](https://user-images.githubusercontent.com/88541725/131612946-d01e9dcd-24c1-45a9-817a-e42d7c424a2c.png)
![2](https://user-images.githubusercontent.com/88541725/131612951-b485f1ef-f7c3-4993-acd9-dfcf7516db1f.png)
![3](https://user-images.githubusercontent.com/88541725/131612952-d50a2500-5f5c-4209-9006-1a738c73833b.png)
![4](https://user-images.githubusercontent.com/88541725/131612953-f5907145-c922-4d35-b2a3-3b3f6fa2b9bf.png)
![5](https://user-images.githubusercontent.com/88541725/131612955-fea0b231-d1da-49d5-9e90-97b67cebd3f1.png)
![6](https://user-images.githubusercontent.com/88541725/131612957-3e25c626-66f1-4940-87ef-7821192409fc.png)
![7](https://user-images.githubusercontent.com/88541725/131612959-ab20a100-9eb4-48d4-b24f-a5343307bb79.png)
![8](https://user-images.githubusercontent.com/88541725/131612961-ac3699b3-4b75-457b-b14c-15a0bea554be.png)
![9](https://user-images.githubusercontent.com/88541725/131614440-f6101039-303f-4d02-947d-5cf77ebfc940.png)
