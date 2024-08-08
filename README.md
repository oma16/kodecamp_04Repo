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

created directory k8s and added [deployment.yaml](k8s/deployment.yaml) and [service.yaml](k8s/service.yaml) files