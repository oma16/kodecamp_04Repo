# Setting up a CI/CD pipeline with GitHub Actions to deploy a code from GitHub to a Minikube cluster running on an EC2 instance deployed using Terraform.


## Prepared the Code Repository

### Created a Repository on GitHub

![repo](./src/assets/kodecamp-04Repo.png)

### Added Application Code

Created a dockerfile [dockerfile](Dockerfile)

build the image 

![dockerimage](./src/assets/buildimage.png)

pushed the image

![dockerpush](./src/assets/dockerpush0.png)

![dockerpush](./src/assets/hub-docker.png)

[dockerhubURL](https://hub.docker.com/r/oma16/githubusersearch-app)

created directory k8s and added [deployment.yaml](k8s/deployment.yaml) and [service.yaml](k8s/service.yaml) files

pushed the application code to github

![pushedapp](./src/assets/pushedapp.png)

![pushedapp](./src/assets/repo.png)


## Setting Up GitHub Actions

### Created a GitHub Actions Workflow

Created a .github/workflows directory and a YAML file (deploy.yml) inside this directory with the required configurations

![githubaction](./src/assets/githubaction.png)

![githubaction](./src/assets/deployfile.png)

![githubaction](./src/assets/githubdockerbuild.png)


## Setting Up Terraform for EC2 and Minikube

### Created Terraform Module

VPC modules [terraform/modules/vpc](terraform/modules/vpc)

EC2 modules [terraform/modules/ec2](terraform/modules/ec2)


### Initialized and Applied Terraform Configuration

terraform init

![terraforminit](./src/assets/tfinit.png)

terraform plan -out "tfplan.txt"

![terraformplan](./src/assets/tfPlannow.png)

![terraformplan](./src/assets/tfplannow0.png)


terraform apply "tfplan.txt"

![terraformapply](./src/assets/tfapplynw.png)

![terraformapply](./src/assets/tfapplynow0.png)


## Accessed the Minikube Cluster

### SSH into EC2 Instance

![SSH into EC2](./src/assets/ssh2ec2.png)

### minikube

![minikube](./src/assets/minikube.png)

### Configure kubectl

![kubectl](./src/assets/kubectlconfiged.png)

![kubectl](./src/assets/kubectns.png)

![minikubeStatus](./src/assets/minikubestatus.png)

## Automate Deployment with GitHub Actions

### Update GitHub Actions Workflow

![deployment](./src/assets/deploypix.png)








