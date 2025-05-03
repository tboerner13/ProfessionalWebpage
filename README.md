04/15/25: Created initial repository with folder structure as instructed. Created vite@latest for vanilla js. Installed express, mongoose, ejs, dotenv, tailwindcss, @tailwindcss/vite, nodemon, and cors. Configured Tailwindcss  in src/tailwind.config.js and server setup in server.js. Followed a basic outline template to fill out most of the files.

04/26/25: Tailwind was not working, so I had to try to reconfigure everything. Ultimately needed to uninstall @tailwindcss/vite, vite, and then install tailwind, @tailwindcss/cli, postcss, and autoprefixer and rework the configuration files to fit properly. I also installed concurrently to be able to run the server and update the css at the same time.

05/01/25: Set up Database data in MongoDB, added styles for each bit of information being added through the database connection. I tried to style it by myself at first, but I used chatgpt to clean it up a little better than I could, and I think it looks really nice.

05/02/25: Set up the contact form. I had to add bodyParser to the server.js because it needs to be parsed into json format to be able to be sent to mongoDB. Then I styled it. I had to rework the get and post methods within the controller to make sure that it was rendering the form properly, so it could be sent to the database.

Overview/Features: This app works as a resume for me. It has my picture, a brief bio, my contact information, my education, my projects, and my skills. It also provides a contact page.

Instructions for setting it up: install express, mongoose, ejs, dotenv, tailwindcss, @tailwindcss/cli, postcss, autoprefixer, nodemon, concurrently, and cors. Then make sure the DB configuration is to your mongoDB. Also fill create the database tables based on the schemas provided in each of the model files. Then change the information to fit for your profile.