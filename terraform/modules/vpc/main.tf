# Create VPC
resource "aws_vpc" "kc_vpc" {
    cidr_block = var.vpc_cidr
    enable_dns_support = true
    enable_dns_hostnames = true
    tags = {
      Name="KCVPC"
}

}

# Create public subnet
resource "aws_subnet" "public_subnet" {
    cidr_block = var.public_subnet_cidr
    vpc_id = aws_vpc.kc_vpc.id
     map_public_ip_on_launch = true
    availability_zone = "eu-west-1a"
    

  tags = {
    Name = "PublicSubnet"
  }
}

# Create Private subnet
resource "aws_subnet" "private_subnet" {
    cidr_block = var.private_subnet_cidr
    vpc_id = aws_vpc.kc_vpc.id
    map_public_ip_on_launch = true
    availability_zone = "eu-west-1a"

  tags = {
    Name = "PrivateSubnet"
  }
}

# Create Internet Gateway
resource "aws_internet_gateway" "kc_igw" {
    vpc_id = aws_vpc.kc_vpc.id
    tags = {
    Name = "KCVPC-IGW"
  }
  
}

# Create an elastic ip
resource "aws_eip" "NAT_elastic_ip" {
  domain = "vpc"
  
  
}

# Create NAT Gateway
resource "aws_nat_gateway" "kc_nat" {
  subnet_id = aws_subnet.public_subnet.id
  allocation_id = aws_eip.NAT_elastic_ip.id
  tags = {
    Name = "KCVPC-NAT-GW"
  }
}

# Create Public Route Table

resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.kc_vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.kc_igw.id
  }
  tags = {
    Name = "PublicRouteTable"
  }
}
# Create Private Route Table

resource "aws_route_table" "private_rt" {
  vpc_id = aws_vpc.kc_vpc.id
  route {
    cidr_block = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.kc_nat.id
  }
  tags = {
    Name = "PrivateRouteTable"
  }
}

# Create Public Route Table Association
resource "aws_route_table_association" "public_assoc" {
  subnet_id = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public_rt.id
}

# Create Private Route Table Association
resource "aws_route_table_association" "private_assoc" {
  subnet_id = aws_subnet.private_subnet.id
  route_table_id = aws_route_table.private_rt.id
}


# Create Public Security Group
resource "aws_security_group" "public_sg" {
  name        = "public-sg"
  description = "Allow HTTP, HTTPS, and SSH"
  vpc_id      = aws_vpc.kc_vpc.id
  
  tags = {
    Name = "public_sg"
  }

# Inbound rule

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Outbound rule

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Create Public Security Group
resource "aws_security_group" "private_sg" {
  name        = "private-sg"
  description = "Allow PostgreSQL from the public subnet"
  vpc_id      = aws_vpc.kc_vpc.id
  tags = {
    Name = "private_sg"
  }

# Inbound rule
  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["10.0.1.0/24"]
  }

# Outbound rule
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


# Create Public NACL
resource "aws_network_acl" "public_acl" {
  vpc_id = aws_vpc.kc_vpc.id
 
  tags = {
    Name = "Public_NACL"
  }

# Inbound rule
 ingress {
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
    protocol   = "-1"
  }

  

# Outbound rule
  egress {
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
    protocol   = "-1"
  }

  subnet_ids = [aws_subnet.public_subnet.id]
}

# Create Private NACL

resource "aws_network_acl" "private_acl" {
  vpc_id = aws_vpc.kc_vpc.id
  tags = {
    Name = "Private_NACL"
  }

# Inbound rule
  ingress {
    rule_no    = 100
    action     = "allow"
    cidr_block = var.public_subnet_cidr
    from_port  = 0
    to_port    = 0
    protocol   = "-1"
  }

# Outbound rule
  egress {
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
    protocol   = "-1"
  }

  subnet_ids = [aws_subnet.private_subnet.id]
}
