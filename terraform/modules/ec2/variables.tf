variable "public_subnet_id" {}
variable "private_subnet_id" {}
variable "public_sg_id" {}
variable "private_sg_id" {}
variable "ami_id" {
  default = "ami-0c38b837cd80f13bb"
}

variable "instance_type" {
  default = "t3.small"
}
variable "key_name" {}
