# Deploying a Website on AWS EC2 with Apache 🚀

## **Overview** 📌
This guide walks you through the process of deploying a website on an AWS EC2 instance using Apache as the web server. You'll learn how to set up an EC2 instance, install Apache, clone your website from GitHub, and make it accessible via a public IP.

---
## **Prerequisites** 🛠️
Before starting, ensure you have:
- An **AWS account** with access to EC2.
- An **SSH client** (e.g., Git Bash for Windows, Terminal for Mac/Linux).
- A **GitHub repository** containing your website files.
- A downloaded **key pair (.pem file)** for SSH access.

---
## **1️⃣ Launch an EC2 Instance** ⚡
1. **Go to** [AWS EC2 Console](https://aws.amazon.com/ec2/).
2. Click **Launch Instance** and choose **Amazon Linux 2** or **Ubuntu**.
3. Select an **Instance Type** (e.g., `t2.micro` for Free Tier).
4. **Configure instance**, then create a **Key Pair** (Download the `.pem` file).
5. Click **Launch Instance**.

---
## **2️⃣ Access the EC2 Instance via SSH** 🔑
```bash
# Navigate to the key pair folder
cd path/to/key-pair

# Change key permissions for security
chmod 400 WebServer.pem

# Connect to your EC2 instance (Replace <EC2_Public_IP> with actual IP)
ssh -i "WebServer.pem" ubuntu@<EC2_Public_IP>
```
---
## **3️⃣ Update & Install Apache Web Server** 🌐
```bash
# Update package lists
sudo apt update && sudo apt upgrade -y

# Install Apache
sudo apt install apache2 -y
```

---
## **4️⃣ Set Up the Website Directory** 📂
```bash
# Create a new directory for website files
mkdir ~/website
cd ~/website
```

---
## **5️⃣ Clone the GitHub Repository** 🔄
```bash
# Clone your website repo from GitHub
git clone https://github.com/KCNikhil/EC2-website.git
cd EC2-website
```

---
## **6️⃣ Start and Enable Apache** ⚙️
```bash
# Start the Apache web server
sudo systemctl start apache2

# Enable Apache to start on boot
sudo systemctl enable apache2
```

---
## **7️⃣ Deploy Website Files to Apache Directory** 📤
```bash
# Move all files to Apache’s web directory
sudo mv * /var/www/html/
```

---
## **8️⃣ Verify Apache Status (Optional)** ✅
```bash
# Check if Apache is running
sudo systemctl status apache2
```

---
## **9️⃣ Access the Website in a Browser** 🌍
Open your web browser and enter:
```
http://<EC2_Public_IP>/index.html
```
Replace `<EC2_Public_IP>` with your actual EC2 instance public IP.

---
## **🔹 Additional Apache Management Commands**
```bash
# Stop Apache Web Server
sudo systemctl stop apache2

# Restart Apache Web Server
sudo systemctl restart apache2

# Disable Apache from starting automatically
sudo systemctl disable apache2
```

---
## **🎯 Summary of Commands**
```bash
chmod 400 WebServer.pem
ssh -i "WebServer.pem" ubuntu@<EC2_Public_IP>
sudo apt update && sudo apt upgrade -y
sudo apt install apache2 -y
mkdir ~/website && cd ~/website
git clone https://github.com/KCNikhil/EC2-website.git && cd EC2-website
sudo systemctl start apache2
sudo systemctl enable apache2
sudo mv * /var/www/html/
sudo systemctl status apache2
```

---
## **📌 Conclusion** 🎉
Your website is now hosted on AWS EC2 with Apache! 🚀
If you have any issues, check the Apache status, review the error logs, or verify your security group settings in AWS.

🌟 **Happy Hosting!** 🌟

