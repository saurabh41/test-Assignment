# Angular Test Assignment – Design Overview

## 🧠 Design Decisions

### 1. **Component Structure**
- **SearchPanelComponent**: Handles user input using `FormControl` for each field. This modular approach allows individual control over each field and makes the form easy to manage.
- **DataTableComponent**: Responsible for displaying filtered data in a clean and responsive table layout. It is reusable and takes input from the parent.
- Components are split by responsibility to follow the **Single Responsibility Principle** and improve maintainability.

### 2. **Data Flow**
- Used `@ViewChild()` and method calls to allow **parent-to-child communication** (e.g., calling a method on `DataTableComponent`).
- Data is passed from **SearchPanelComponent** to **DataTableComponent** for filtering without tightly coupling them.

### 3. **Services**
- `DataService` fetches mock data via HTTP. It uses Angular's `HttpClient` with `providedIn: 'root'` for availability in whole app
- 

### 5. **Template Reference Variables**
- Used `#templateRef` and `ngTemplateOutlet` to conditionally show messages like "No results found" while keeping the UI clean.

---

## 📦 How to Install Dependencies and Run Project

Before running the project, make sure you have Node.js and Angular CLI installed.

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project directory
cd <project-directory>

# Install dependencies
npm install

#How to Run?
ng serve

#Open Browser
http://localhost:4200
