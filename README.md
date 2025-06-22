# node_js_Docker_based
A simple node app using node js , json and Docker 
# clone this repo to your host
inside directory docker-node-app

Build an image from Dockerfile
  ---> docker build -t nodejs-docker-app .**

if you are using ec2 server make sure that your instance security group have inbound port no 3000
- check image created or note
- --> docker images
- # Run the container using created image 
--> docker run -d -p 3000:3000 --name my-node-container nodejs-docker-app
--> docker ps   #check running containers.
verify the container is now accessible on web 
-->http://<your-EC2-public-IP>:3000
now your container is accessible.
