## Black in Ai

This project was created using Reactjs and UI material as a styling component. 

- To construct the design, I created a component for each item.
- Each item was imported in a main page, that brings all the components together.
- Each component has its own style. 
- It's possible combine this frontend for consuming data from a API, to change text and images without having to change directly in the code.
- All text and images are being hard code loaded.
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
