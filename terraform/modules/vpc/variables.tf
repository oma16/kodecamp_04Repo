variable "vpc_cidr" {
  type = string
  description = "cidr block for VPC"
 
}
variable "vpc_id" {
  type = string
}

variable "public_subnet_cidr" {
  type = string
  description = "cidr block for Public subnet"
}

variable "private_subnet_cidr" {
  type = string
  description = "cidr block for private subnet"
}

