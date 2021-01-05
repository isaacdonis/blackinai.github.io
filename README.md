## Black in Ai

This project was created using Reactjs and UI material as a styling component. 

- To construct the design, I created a component for each item.
- Each item was imported in a main page, that brings all the components together.
- Each component has its own style. 
- All text and images are being hard code loaded.
- To make updates, just commit and push the changes in the `main` branch, then `npm run deploy` or `yarn run deploy` to make the publication.
- The project structure:

```
src
├── assets
│   └── img // with image files
├── components
│   └── // each folder corresponds to a component that makes up a page   
├── pages
│   ├── About
│   ├── AcademicPrograms
│   ├── BaiWorkshops
│   ├── Home
│   ├── Membership
│   ├── Organizers
│   ├── Partnership
│   ├── Programs
├── posts // markdown files with informations about cpf, grants, programs, organizers, sponsors - each markdown corresponds to a page
│   ├── bai2017
│   ├── bai2018
│   ├── bai2019
│   ├── bai2020
├── index.js // main file, render pages and create navigation routes
├── index.scss
└── theme.js // file with theme, colors, fonts used in the project.
```
