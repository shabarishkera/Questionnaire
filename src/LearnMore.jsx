import React from 'react'

export default function LearnMore() {
  return (
    <div>
     
<body>
    <div class="container">
        <h1 class="mt-4">Quiz Application</h1>
        <img src="./Q.png" alt="Project Image" class="img-fluid mt-4"/>

        <h2 class="mt-4">Table of Contents</h2>
        <ul>
            <li><a href="#description">Description</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#demo">Demo</a></li>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#api-used">API Used</a></li>
            <li><a href="#contributing">Contributing</a></li>
            <li><a href="#license">License</a></li>
        </ul>

        <h2 id="description" class="mt-4">Description</h2>
        <p class="lead">A React-based quiz application that allows users to answer 30 questions from a variety of categories using the Trivia API. Users can choose from 10+ categories to customize their quiz experience.</p>

        <h2 id="features" class="mt-4">Features</h2>
        <ul class="list-group">
            <li class="list-group-item">Choose from 10+ categories.</li>
            <li class="list-group-item">Answer 30 questions from the selected category.</li>
            <li class="list-group-item">Interactive and user-friendly interface.</li>
            <li class="list-group-item">Real-time feedback on your quiz performance.</li>
        </ul>

        <h2 id="demo" class="mt-4">Demo</h2>
        <p>Include a link to a live demo of your application or a short video showcasing its features.</p>

        <h2 id="installation" class="mt-4">Project Installation </h2>
        <ol class="list-group">
            <li class="list-group-item">Clone the repository.</li>
            <li class="list-group-item">Change to the project directory.</li>
            <li class="list-group-item">Install dependencies: <code>npm install</code></li>
            <li class="list-group-item">Start the development server: <code>npm start</code></li>
            <li class="list-group-item">Open your web browser and go to <a href="http://localhost:3000">http://localhost:3000</a> to access the application.</li>
        </ol>

        <h2 id="usage" class="mt-4">Usage</h2>
        <p>
            <ol>
                <li>open the application</li>
                <li>select a topic</li>
                <li>try to answer questions from that topic</li>
                <li>click on submit</li>
            </ol>
        </p>

        <h2 id="api-used" class="mt-4">API Used</h2>
        <p class="lead">This project uses the <a href="link-to-api" class="btn btn-primary">Trivia API</a> to fetch quiz questions. Make sure to mention the source and provide a link to the API documentation if available.</p>

        <h2 id="contributing" class="mt-4">Contributing</h2>
        <ol class="list-group">
            <li class="list-group-item">Fork the project on GitHub.</li>
            <li class="list-group-item">Create a new branch with a descriptive name.</li>
            <li class="list-group-item">Commit your changes.</li>
            <li class="list-group-item">Push your branch to your fork.</li>
            <li class="list-group-item">Create a pull request with a clear title and description.</li>
        </ol>

        <h2 id="license" class="mt-4">License</h2>
        <p class="lead">This project is licensed under the MIT License.</p>
    </div>

  
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

    </div>
  )
}
