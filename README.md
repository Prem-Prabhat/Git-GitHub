# Welcome to Git and GitHub at ChaiCode Cohort!

Welcome to ChaiCode! This onboarding guide is designed to help new developers understand how to use Git and GitHub effectively within our organization. By following this documentation, you’ll learn the basics of version control, how to collaborate efficiently, and the best practices we follow.

---

## **Table of Contents**
1. [Basics of Git and GitHub](#basics-of-git-and-github)
2. [Installation and Setup](#installation-and-setup)
3. [Cloning the Repository](#cloning-the-repository)
4. [Basic Git Commands](#basic-git-commands)
5. [Commit Message Rules](#commit-message-rules)
6. [Branching Workflow](#branching-workflow)
7. [Pull Requests](#pull-requests)
8. [Best Practices](#best-practices)

---

## **1. Basics of Git and GitHub**

### **What is Git?**
Git is a distributed version control system that helps developers manage and track changes in their code. It enables collaborative development by allowing multiple contributors to work on the same project simultaneously.

### **What is GitHub?**
GitHub is an online platform for hosting Git repositories. It provides tools for collaboration, such as pull requests, code reviews, and issue tracking, making it easier for teams to work together.

---

## **2. Installation and Setup**

### **Step 1: Install Git**
- **Windows:**
  1. Download Git from [Git for Windows](https://git-scm.com/download/win).
  2. Follow the installation wizard and select "Git Bash" during installation.
  
- **macOS:**
  ```bash
  brew install git
  ```

- **Linux:**
  ```bash
  sudo apt update
  sudo apt install git
  ```

### **Step 2: Configure Git**
Set your name and email address:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
Verify the configuration:
```bash
git config --list
```

### **Step 3: Create a GitHub Account**
- Visit [GitHub](https://github.com/) and sign up for a free account.

---

## **3. Cloning the Repository**

To start contributing to a project, you need to clone the repository to your local machine.

1. Clone the repository:
   ```bash
   git clone https://github.com/ChaiCode/example-repo.git
   ```
2. Navigate into the cloned repository folder:
   ```bash
   cd example-repo
   ```

---

## **4. Basic Git Commands**

### **Commonly Used Commands**
1. **Check Current Status:**
   ```bash
   git status
   ```
2. **Stage Files for Commit:**
   ```bash
   git add <file-name>
   git add .  # Stage all changes
   ```
3. **Commit Changes:**
   ```bash
   git commit -m "Your message here"
   ```
4. **Push Changes:**
   ```bash
   git push origin <branch-name>
   ```
5. **Pull Latest Changes:**
   ```bash
   git pull
   ```
6. **View Commit History:**
   ```bash
   git log
   ```

---

## **5. Commit Message Rules**

### **Rules for Writing Commit Messages:**
1. **Use Present Tense:** Describe what the commit does (e.g., "Add feature" not "Added feature").
2. **Capitalize the First Letter.**
3. **Keep it Short:** Limit to 50 characters.
4. **Categorize Commits:** Use prefixes like:
   - `feat:` for new features.
   - `fix:` for bug fixes.
   - `docs:` for documentation updates.
   - `chore:` for maintenance tasks.

### **Examples:**
- `feat: Add user login functionality`
- `fix: Resolve header alignment issue`
- `docs: Update README with new setup instructions`

---

## **6. Branching Workflow**

### **Branching Strategy:**
- **Main Branch (`main`)**: Production-ready code.
- **Development Branch (`develop`)**: For active development.
- **Feature Branches (`feature/<feature-name>`)**: For individual features or fixes.

### **Commands for Branching:**
1. **Create a New Branch:**
   ```bash
   git branch feature/<feature-name>
   ```
2. **Switch to a Branch:**
   ```bash
   git checkout feature/<feature-name>
   ```
3. **Merge Branch into Main:**
   ```bash
   git checkout main
   git merge feature/<feature-name>
   ```

---

## **7. Pull Requests**

### **Creating a Pull Request:**
1. Push your branch to GitHub:
   ```bash
   git push origin feature/<feature-name>
   ```
2. Open GitHub and navigate to the repository.
3. Click on "Compare & pull request."
4. Add a description of your changes.
5. Assign reviewers and submit the PR.

---

## **8. Best Practices**

1. **Commit Often:** Regular commits ensure progress is tracked and conflicts are minimized.
2. **Write Descriptive Messages:** Help others understand what changes were made.
3. **Pull Regularly:** Always sync with the latest updates before starting new work.
4. **Test Your Code:** Ensure functionality before pushing changes.

---

For further assistance, feel free to reach out to your team lead or refer to the GitHub documentation at [GitHub Docs](https://docs.github.com/).