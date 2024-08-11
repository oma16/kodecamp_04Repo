
resource "aws_instance" "public_instance" {
  ami           = var.ami_id
  instance_type = var.instance_type
  subnet_id     = var.public_subnet_id
  security_groups = [var.public_sg_id]
  associate_public_ip_address = true
  key_name      = var.key_name
  
  
  

  user_data = <<-EOF
              #!/bin/bash
              curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
              chmod +x minikube
              sudo mv minikube /usr/local/bin/
              minikube start --driver=none
              EOF

  tags = {
    Name = "PublicInstance"
  }
}

resource "aws_instance" "private_instance" {
  ami           = var.ami_id
  instance_type = var.instance_type
  subnet_id     = var.private_subnet_id
  security_groups = [var.private_sg_id]
  key_name      = var.key_name


  tags = {
    Name = "PrivateInstance"
  }
}



output "public_ip" {
  value = aws_instance.public_instance.public_ip
}

output "public_dns" {
  value = aws_instance.public_instance.public_dns
}

