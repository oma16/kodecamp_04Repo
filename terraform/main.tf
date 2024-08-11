terraform {
    required_providers {
      aws = {
        source  = "hashicorp/aws"
        version = "~> 5.57.0"
      }
    }
}

provider "aws" {
  region = "eu-west-1"
  profile = "kc-user"
}

module "vpc" {
  source = "./modules/vpc"
  vpc_cidr = "10.0.0.0/16"
  public_subnet_cidr = "10.0.1.0/24"
  private_subnet_cidr = "10.0.2.0/24"
  vpc_id = module.vpc.vpc_id
}



module "ec2_instances" {
  source            = "./modules/ec2"
  public_subnet_id  = module.vpc.public_subnet_id
  private_subnet_id = module.vpc.private_subnet_id
  public_sg_id      = module.vpc.public_sg_id
  private_sg_id     = module.vpc.private_sg_id
  key_name          = var.key_name
}