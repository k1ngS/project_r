<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">PROJECT_R</h1></p>
<p align="center">
  <em>Code consistency, quality, and enhanced architecture flow.</em>
</p>
<p align="center">
  <img src="https://img.shields.io/github/license/k1ngS/project_r?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
  <img src="https://img.shields.io/github/last-commit/k1ngS/project_r?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/k1ngS/project_r?style=default&color=0080ff" alt="repo-top-language">
  <img src="https://img.shields.io/github/languages/count/k1ngS/project_r?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
  <!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Project Index](#project-index)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Project Roadmap](#project-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

##  Overview

**Projectr Overview:

**Solving the Chaos of Project Configuration:
Projectr is a revolutionary open-source tool that simplifies project configuration chaos. By providing a structured schema for settings like VCS, linting rules, and database configurations, it enhances code quality and consistency across architectures.

**Key Features and Benefits:
Streamlined project setup and maintenance
Enhanced code quality and consistency
Strict schema enforcement for configurations
Simplified database setup and migrations

**Target Audience and Use Cases:
Ideal for developers and teams working on projects with complex configurations, Projectr ensures a smooth development experience and robust codebase architecture. Whether setting up new projects or maintaining existing ones, Projectr is the go-to solution for efficient and reliable project configuration management.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Defined using **TypeScript** to ensure type safety and maintainability.</li><li>Utilizes **Next.js** for server-side rendering and routing.</li><li>Follows a **modular** structure with clear separation of concerns.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Configured with **biome.json** to enforce consistent code formatting and linting rules.</li><li>Uses **Drizzle Kit** for database schema enforcement and migrations.</li><li>Includes **PostCSS** and **Tailwind CSS** for consistent styling across the codebase.</li></ul> |
| 📄 | **Documentation** | <ul><li>Primary language is **TypeScript** with detailed documentation in various formats (e.g., JSON, YAML, CSS).</li><li>Package management with **npm** is well-documented in the **package.json** file.</li><li>Extensive usage of **TypeScript** annotations for clear code understanding.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates **Neon** and **Drizzle-ORM** for database connections and migrations.</li><li>Utilizes **@kinde-oss/kinde-auth-nextjs** for authentication handling.</li><li>Includes **@neondatabase/serverless** for serverless database operations.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Separates concerns with distinct files like **middleware.ts** for authentication and **db/index.ts** for database setup.</li><li>Components like **layout.tsx** and **page.tsx** encapsulate specific functionalities for reusability.</li><li>Organizes API routes in separate files like **api/characters/route.ts** and **api/events/route.ts** for clarity.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Testing commands documented in the **package.json** file for easy execution.</li><li>Utilizes **npm** for running tests to ensure code reliability.</li><li>Includes testing of API routes and database migrations for robustness.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimizes performance with **Next.js** for efficient server-side rendering.</li><li>Utilizes **Tailwind CSS** for optimized styling and faster loading times.</li><li>Implements **incremental builds** with **TypeScript** for quicker development iterations.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Implements secure authentication using **Kinde server session** in **src/lib/kinde.ts**.</li><li>Ensures secure database interactions with **Drizzle ORM** migrations.</li><li>Handles authentication errors and exceptions in API routes for enhanced security.</li></ul> |

---

##  Project Structure

```sh
└── project_r/
    ├── README.md
    ├── biome.json
    ├── drizzle.config.ts
    ├── next.config.ts
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── public
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── src
    │   ├── app
    │   ├── db
    │   ├── lib
    │   └── middleware.ts
    ├── tailwind.config.ts
    └── tsconfig.json
```


###  Project Index
<details open>
  <summary><b><code>PROJECT_R/</code></b></summary>
  <details> <!-- __root__ Submodule -->
    <summary><b>__root__</b></summary>
    <blockquote>
      <table>
      <tr>
        <td><b><a href='https://github.com/k1ngS/project_r/blob/master/biome.json'>biome.json</a></b></td>
        <td>- Defines project configuration settings for biome.js, including VCS, file handling, code formatting, imports organization, linting rules, and JavaScript formatting<br>- The biome.json file specifies these settings using a structured schema to maintain consistency and enhance code quality across the codebase architecture.</td>
      </tr>
      <tr>
        <td><b><a href='https://github.com/k1ngS/project_r/blob/master/drizzle.config.ts'>drizzle.config.ts</a></b></td>
        <td>- Defines database configuration for migrations and schema in the project using Drizzle Kit<br>- It sets up the output directory for migrations, specifies the schema file location, and provides PostgreSQL database credentials<br>- The configuration ensures strict schema enforcement and filters out specific schemas during migration.</td>
      </tr>
      <tr>
        <td><b><a href='https://github.com/k1ngS/project_r/blob/master/next.config.ts'>next.config.ts</a></b></td>
        <td>Define project configuration settings using Next.js.</td>
      </tr>
      <tr>
        <td><b><a href='https://github.com/k1ngS/project_r/blob/master/package.json'>package.json</a></b></td>
        <td>- Define project dependencies and scripts for development, building, starting, and linting<br>- Includes database generation and migration commands<br>- Dependencies cover authentication, database, ORM, and tooling<br>- Dev dependencies encompass Biome, Node and React type definitions, environment variables, PostCSS, Tailwind CSS, and TypeScript.</td>
      </tr>
      <tr>
        <td><b><a href='https://github.com/k1ngS/project_r/blob/master/pnpm-lock.yaml'>pnpm-lock.yaml</a></b></td>
        <td>- The `pnpm-lock.yaml` file in the project structure serves as a lockfile to manage dependencies and ensure consistent package versions across the codebase<br>- It specifies the versions of packages required for the project, including `@kinde-oss/kinde-auth-nextjs` and its dependencies<br>- This file plays a crucial role in maintaining a stable and reproducible development environment by pinning down the exact versions of dependencies used in the project.</td>
      </tr>
      <tr>
        <td><b><a href='https://github.com/k1ngS/project_r/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
        <td>Defines PostCSS configuration for TailwindCSS plugin in the project, ensuring consistent styling across the codebase.</td>
      </tr>
      <tr>
        <td><b><a href='https://github.com/k1ngS/project_r/blob/master/tailwind.config.ts'>tailwind.config.ts</a></b></td>
        <td>- Defines Tailwind CSS configuration for project theming and content, specifying file paths for styles and components<br>- Extends theme colors and defines plugins.</td>
      </tr>
      <tr>
        <td><b><a href='https://github.com/k1ngS/project_r/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
        <td>- Defines TypeScript compiler options for the project, targeting ES2017 with strict settings<br>- Enables JSX preservation, module bundling, and path aliases<br>- Excludes node_modules from compilation and utilizes incremental builds<br>- Integrates a Next.js plugin for enhanced functionality.</td>
      </tr>
      </table>
    </blockquote>
  </details>
  <details> <!-- src Submodule -->
    <summary><b>src</b></summary>
    <blockquote>
      <table>
      <tr>
        <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/middleware.ts'>middleware.ts</a></b></td>
        <td>Implements middleware for authentication with specific path matching criteria to secure routes in the project architecture.</td>
      </tr>
      </table>
      <details>
        <summary><b>app</b></summary>
        <blockquote>
          <table>
          <tr>
            <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/app/globals.css'>globals.css</a></b></td>
            <td>- Define global CSS variables for light and dark mode themes to style the project's UI<br>- Tailwind CSS utilities are utilized for base styles<br>- The file sets background and foreground colors, adjusts based on user's color scheme preference, and defines font family<br>- This ensures consistent and accessible visual styling across the application.</td>
          </tr>
          <tr>
            <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/app/layout.tsx'>layout.tsx</a></b></td>
            <td>- Defines a RootLayout component for the project, setting up the base layout structure with specified fonts and global styles<br>- The component receives children as props and renders them within the HTML body, applying the defined fonts and styles<br>- Additionally, it includes metadata for the page title and description.</td>
          </tr>
          <tr>
            <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/app/page.tsx'>page.tsx</a></b></td>
            <td>- Enables users to sign in or sign up by rendering login and registration links from the "kinde-auth-nextjs" package within the Home component<br>- This functionality enhances user experience and facilitates seamless authentication processes within the project's frontend architecture.</td>
          </tr>
          </table>
          <details>
            <summary><b>dashboard</b></summary>
            <blockquote>
              <table>
              <tr>
                <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/app/dashboard/page.tsx'>page.tsx</a></b></td>
                <td>- Enables user authentication and displays user information on the dashboard page using the Kinde Browser Client<br>- Includes user avatar, name, email, and logout functionality.</td>
              </tr>
              </table>
            </blockquote>
          </details>
          <details>
            <summary><b>api</b></summary>
            <blockquote>
              <details>
                <summary><b>characters</b></summary>
                <blockquote>
                  <table>
                  <tr>
                    <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/app/api/characters/route.ts'>route.ts</a></b></td>
                    <td>- Implement a route to fetch characters based on the authenticated user's ID from the database<br>- The code retrieves the user, queries characters associated with their ID, and returns the result as JSON<br>- In case of errors, it responds with a 500 status and an error message.</td>
                  </tr>
                  </table>
                </blockquote>
              </details>
              <details>
                <summary><b>events</b></summary>
                <blockquote>
                  <table>
                  <tr>
                    <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/app/api/events/route.ts'>route.ts</a></b></td>
                    <td>- Defines API routes for handling events, facilitating communication between the frontend and backend<br>- This code file plays a crucial role in structuring the project's API layer, ensuring seamless interaction with event-related data.</td>
                  </tr>
                  </table>
                </blockquote>
              </details>
              <details>
                <summary><b>inventory</b></summary>
                <blockquote>
                  <table>
                  <tr>
                    <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/app/api/inventory/route.ts'>route.ts</a></b></td>
                    <td>Implements an asynchronous function to handle GET requests for the inventory API route in the project architecture.</td>
                  </tr>
                  </table>
                </blockquote>
              </details>
              <details>
                <summary><b>items</b></summary>
                <blockquote>
                  <table>
                  <tr>
                    <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/app/api/items/route.ts'>route.ts</a></b></td>
                    <td>Implements a route function to handle GET requests for items in the API.</td>
                  </tr>
                  </table>
                </blockquote>
              </details>
              <details>
                <summary><b>users</b></summary>
                <blockquote>
                  <table>
                  <tr>
                    <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/app/api/users/route.ts'>route.ts</a></b></td>
                    <td>Defines a route to retrieve authenticated user data from Kinde, handling authentication errors and server exceptions.</td>
                  </tr>
                  </table>
                </blockquote>
              </details>
              <details>
                <summary><b>world_locations</b></summary>
                <blockquote>
                  <table>
                  <tr>
                    <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/app/api/world_locations/route.ts'>route.ts</a></b></td>
                    <td>Implements a route for fetching world locations in the project's API.</td>
                  </tr>
                  </table>
                </blockquote>
              </details>
              <details>
                <summary><b>auth</b></summary>
                <blockquote>
                  <details>
                    <summary><b>[kindeAuth]</b></summary>
                    <blockquote>
                      <table>
                      <tr>
                        <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/app/api/auth/[kindeAuth]/route.ts'>route.ts</a></b></td>
                        <td>Enables authentication handling for the API endpoint using the "kinde-auth-nextjs" library.</td>
                      </tr>
                      </table>
                    </blockquote>
                  </details>
                </blockquote>
              </details>
            </blockquote>
          </details>
        </blockquote>
      </details>
      <details>
        <summary><b>db</b></summary>
        <blockquote>
          <table>
          <tr>
            <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/db/index.ts'>index.ts</a></b></td>
            <td>- Initialize and configure the database connection using Neon and Drizzle-ORM<br>- Import the necessary modules and set up the database client with the specified schema and logging enabled<br>- Ensure the Neon postgres connection string is provided in the environment variables.</td>
          </tr>
          <tr>
            <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/db/migrate.ts'>migrate.ts</a></b></td>
            <td>- Handles database migrations by utilizing the Drizzle ORM migrator to update the database schema<br>- The code triggers the migration process, ensuring that the database structure aligns with the latest changes in the codebase.</td>
          </tr>
          <tr>
            <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/db/schema.ts'>schema.ts</a></b></td>
            <td>- Defines database schema and relationships for characters, inventory, items, events, and world locations<br>- Establishes tables with specific fields and constraints, linking entities through foreign keys<br>- Facilitates data organization and retrieval within the project's database architecture.</td>
          </tr>
          </table>
          <details>
            <summary><b>migrations</b></summary>
            <blockquote>
              <table>
              <tr>
                <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/db/migrations/0000_square_bloodaxe.sql'>0000_square_bloodaxe.sql</a></b></td>
                <td>- Defines database schema for characters, events, flux marks, inventory, items, and world locations<br>- Establishes relationships between tables using foreign keys<br>- Crucial for data organization and integrity in the project's database architecture.</td>
              </tr>
              </table>
              <details>
                <summary><b>meta</b></summary>
                <blockquote>
                  <table>
                  <tr>
                    <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/db/migrations/meta/0000_snapshot.json'>0000_snapshot.json</a></b></td>
                    <td>- Defines database schema for characters, events, flux marks, inventory, items, and world locations with specific columns and relationships<br>- Captures data structure and constraints for character-based interactions within the application.</td>
                  </tr>
                  <tr>
                    <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/db/migrations/meta/_journal.json'>_journal.json</a></b></td>
                    <td>Manages database migration metadata, tracking version history, dialect, and breakpoints.</td>
                  </tr>
                  </table>
                </blockquote>
              </details>
            </blockquote>
          </details>
        </blockquote>
      </details>
      <details>
        <summary><b>lib</b></summary>
        <blockquote>
          <table>
          <tr>
            <td><b><a href='https://github.com/k1ngS/project_r/blob/master/src/lib/kinde.ts'>kinde.ts</a></b></td>
            <td>- Enables retrieval of authenticated user data by leveraging the Kinde server session<br>- Validates user authentication status and returns the user object, ensuring that the user is authenticated before proceeding<br>- This function plays a crucial role in the project's authentication flow and user access control.</td>
          </tr>
          </table>
        </blockquote>
      </details>
    </blockquote>
  </details>
</details>

---
##  Getting Started

###  Prerequisites

Before getting started with project_r, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


###  Installation

Install project_r using one of the following methods:

**Build from source:**

1. Clone the project_r repository:
```sh
❯ git clone https://github.com/k1ngS/project_r
```

2. Navigate to the project directory:
```sh
❯ cd project_r
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




###  Usage
Run project_r using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


###  Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/k1ngS/project_r/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/k1ngS/project_r/issues)**: Submit bugs found or log feature requests for the `project_r` project.
- **💡 [Submit Pull Requests](https://github.com/k1ngS/project_r/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/k1ngS/project_r
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/k1ngS/project_r/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=k1ngS/project_r">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
