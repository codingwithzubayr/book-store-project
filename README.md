# Book Store Web Application

## Overview of the Application
The Book Store Web Application is a simple web-based platform designed to manage a collection of books. It allows users to view a list of books, add new books, and delete existing ones. The application is built using a Flask backend hosted on an Amazon EC2 instance, connected to an Amazon RDS PostgreSQL database for storing book data. The frontend is a static website hosted on Amazon S3, featuring HTML, CSS, and JavaScript to provide an interactive user interface. The project demonstrates integration of cloud services (EC2, RDS, S3) with a web application, showcasing CRUD (Create, Read, Update, Delete) operations.

## How to Run the Application (Step-by-Step Instructions)
Since the application is deployed on cloud services, you don’t need to run it locally. However, if you have access to the EC2 instance or want to set it up for development, follow these steps:

### Prerequisites
- An AWS account with access to EC2, RDS, and S3.
- SSH client (e.g., OpenSSH for Windows).
- Python 3 and `pip` installed on the EC2 instance.
- A PostgreSQL client (e.g., `psql`) installed on the EC2 instance.

### Deployment Steps
1. **Access the EC2 Instance**
   - Use SSH to connect to the EC2 instance:
     ```bash
     ssh -i "C:\abduvohidov_key.pem" ubuntu@3.36.49.128


2. Activate the Virtual Environment
   Navigate to the project directory and activate the virtual environment:
   bash

   Copy
   source ~/webapp_doston_venv/bin/activate

4. Start the Flask Application
   Run the application in the background:
   bash

   Copy
   nohup python3 ~/webapp_doston/app.py &
   Verify it’s running:
   bash

   Copy
   ps aux | grep python3
5. Access the Application
   The backend is accessible at http://3.36.49.128:500.
   The frontend is hosted on S3 and accessible at the S3 website URL (see below).
Database Setup
The RDS database is pre-configured with a table tbl_doston_books containing book data (id, title, author, publication_year, price).
To connect and verify:
bash

Copy
psql -h rds-doston-seoul.clyucs4e44b4.ap-northeast-2.rds.amazonaws.com -U postgres -d db_doston
Password: postgres
Check data: SELECT * FROM tbl_doston_books;

Links to Deployed Resources
S3 Static Hosting: http://webapp-doston-static.s3-website-ap-northeast-2.amazonaws.com
EC2 Application: http://3.36.49.128:5000 (Backend API endpoints: /books, /add, /delete/<id>)
RDS Database: Hosted on AWS RDS at rds-doston-seoul.clyucs4e44b4.ap-northeast-2.rds.amazonaws.com (not publicly accessible; managed via EC2).
RDS 
EC2


Project Files
HTML, CSS, JavaScript Files
index.html: Contains the structure of the webpage, including a form to add books and a list to display them.
styles.css: Provides styling for the webpage, including layout and button designs.
script.js: Implements JavaScript functionality to fetch books, add new books, and delete existing ones via API calls.
Python or Backend Code
app.py: The Flask application script hosted on EC2, connecting to RDS and handling API endpoints:
/books (GET): Retrieves all books.
/add (POST): Adds a new book.
/delete/<int:id> (DELETE): Removes a book by ID.
No separate database import script is used; data is managed directly via the Flask app.

Web Application Status
Static Files Hosted on S3: The frontend (HTML, CSS, JavaScript) is successfully hosted on the S3 bucket webapp-doston-static and accessible via the S3 website URL.
Backend Connected to RDS and Displaying Data: The Flask backend on EC2 is connected to the RDS PostgreSQL database and displays book data through the /books endpoint. Adding and deleting books via the /add and /delete endpoints are fully functional.
EC2 Instance Configuration: The EC2 instance is properly configured with the Flask app running on port 5000, accessible from the public IP 3.36.49.128. Security groups allow inbound traffic on port 5000 and 5432 (for RDS).
Notes
The application uses a development server (app.run) for simplicity. For production, consider using a WSGI server like Gunicorn.
Ensure the EC2 security group allows inbound traffic on port 5000 from your S3 website’s origin or 0.0.0.0/0 for testing.
The RDS instance is publicly accessible; in a production environment, restrict access to the EC2 instance’s security group.


---

### What to Do Next
1. **Create the `README.md` File**
   - Open Notepad on your Windows machine.
   - Copy the entire content above and paste it into Notepad.
   - Save the file as `README.md`:
     - File > Save As
     - File name: `README.md`
     - Save as type: `All Files (*.*)`
     - Save in: `C:\book-store`
     - Encoding: `UTF-8`
     - Click Save.

2. **Upload `README.md` to GitHub**
   - Go to your GitHub repository: [https://github.com/codingwithubay/book-store](https://github.com/codingwithubay/book-store).
   - Click **Add file** > **Upload files**.
   - Drag and drop `README.md` from `C:\book-store` into the upload area.
   - In the commit message, type `Add README file`.
   - Click **Commit changes**.

3. **Verify and Submit**
   - Visit your GitHub repository to ensure `README.md` is visible and correctly formatted.
   - Gather your submission details:
     - GitHub URL: `https://github.com/codingwithubay/book-store`
     - S3 Website URL: `http://webapp-doston-static.s3-website-ap-northeast-2.amazonaws.com`
   - Submit these URLs (and any required screenshots) to your instructor or platform.

---

### Summary
- The `README.md` provides a detailed overview, step-by-step instructions, links to deployed resources, and lists project files, meeting all requirements.
- Your web application is already up and running with static files on S3, backend on EC2 connected to RDS, and is accessible.
- By uploading the `README.md` and submitting the URLs, your project will be fully submitted.

Let me know if you need help uploading the file or with the submission process! You’ve done an excellent job—congratulations!
