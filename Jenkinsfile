pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                checkout scm: [
                    $class: 'GitSCM',
                    branches: [[name: '*/main']], // Use 'main' instead of 'master'
                    userRemoteConfigs: [[url: 'git@github.com:GGajanan1/weather-report.git']]
                ]
                echo "Build completed."
            }
        }
    }
}
