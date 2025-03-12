Hosting website using AWS EC2

1. Launch an EC2 Instance
Go to the AWS Management Console and navigate to EC2.
Click Launch Instance and choose an Amazon Linux 2 or Ubuntu image.
Choose an Instance Type (e.g., t2.micro for free tier).
Configure the instance, then create a Key Pair (download it to your computer).
Launch the instance.
2. Access the EC2 Instance via SSH
Open your terminal (Windows: Git Bash, Mac/Linux: Terminal).
Navigate to the folder containing the key pair (e.g., WebServer.pem).
Change the permissions of the key:
bash
CopyEdit
chmod 400 WebServer.pem
Explanation: This ensures the private key is secure and can be used for SSH access.
SSH into the EC2 instance:
bash
CopyEdit
ssh -i "WebServer.pem" ubuntu@<EC2_Public_IP>
Replace <EC2_Public_IP> with your EC2 instance's public IP address.
3. Update and Install Apache2
Once you are logged in to your EC2 instance, follow these steps:
Update the system:
bash
CopyEdit
sudo apt update && sudo apt upgrade -y
Explanation: This command updates the package lists for upgrades of all installed packages.
Install Apache Web Server:
bash
CopyEdit
sudo apt install apache2 -y
Explanation: Installs the Apache2 web server on your EC2 instance.
4. Create a Directory for the Website
Create a website directory in the home folder:
bash
CopyEdit
mkdir ~/website
Explanation: Creates a folder named website in the home directory to store your website files.
Navigate to the website directory:
bash
CopyEdit
cd ~/website


5. Clone the GitHub Repository
Clone the repository containing the website files from GitHub:
bash
CopyEdit
git clone https://github.com/KCNikhil/EC2-website.git
Explanation: This command downloads the website's source code from GitHub to the website folder on the EC2 instance.
Navigate into the cloned repository:
bash
CopyEdit
cd EC2-website


6. Start Apache Web Server
Start the Apache2 web server:
bash
CopyEdit
sudo systemctl start apache2
Explanation: Starts the Apache web server, which will serve your website.
Enable Apache to start automatically on boot:
bash
CopyEdit
sudo systemctl enable apache2
Explanation: Ensures that the Apache server will automatically start when the EC2 instance is rebooted.
7. Move the Website Files to Apache's Web Directory
Move the website files to Apache’s default web directory (/var/www/html):
bash
CopyEdit
sudo mv * /var/www/html/
Explanation: Moves all files from the EC2-website directory to /var/www/html/, where Apache serves content.
8. Verify Apache Status (Optional)
Check Apache's status:
bash
CopyEdit
sudo systemctl status apache2
Explanation: This checks the current status of Apache, ensuring it's running correctly.
9. Check the Website in the Browser
Open a browser and type the public IP of your EC2 instance:
arduino
CopyEdit
http://<EC2_Public_IP>/index.html
Replace <EC2_Public_IP> with your EC2 instance's public IP address.
10. Additional Commands for Managing Apache
Stop Apache Web Server:
bash
CopyEdit
sudo systemctl stop apache2


Restart Apache Web Server:
bash
CopyEdit
sudo systemctl restart apache2


Disable Apache from Starting Automatically:
bash
CopyEdit
sudo systemctl disable apache2



Summary of Commands to Share with Students
bash
CopyEdit
# Step 1: Change key permissions
chmod 400 WebServer.pem

# Step 2: SSH into EC2 instance
ssh -i "WebServer.pem" ubuntu@<EC2_Public_IP>

# Step 3: Update EC2 instance
sudo apt update && sudo apt upgrade -y

# Step 4: Install Apache2 web server
sudo apt install apache2 -y

# Step 5: Create a directory for the website
mkdir ~/website
cd ~/website

# Step 6: Clone the website repository from GitHub
git clone https://github.com/KCNikhil/EC2-website.git
cd EC2-website

# Step 7: Start Apache and enable on boot
sudo systemctl start apache2
sudo systemctl enable apache2

# Step 8: Move website files to Apache's web directory
sudo mv * /var/www/html/

# Step 9: Check Apache status (optional)
sudo systemctl status apache2

# Step 10: Access website via browser
# http://<EC2_Public_IP>/index.html


