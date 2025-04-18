# Angular Test Assignment – Design Overview

## 🧠 Design Decisions

### 1. **Component Structure**
- **SearchPanelComponent**: Handles user input using `FormControl` for each field. This modular approach allows individual control over each field and makes the form easy to manage.
- **DataTableComponent**: Responsible for displaying filtered data in a clean and responsive table layout. It is reusable and takes input from the parent.
- Components are split by responsibility to follow the **Single Responsibility Principle** and improve maintainability.

### 2. **Data Flow**
- Used `@ViewChild()` and method calls to allow **parent-to-child communication** (e.g., calling a method on `DataTableComponent`).
- Data is passed from **SearchPanelComponent** to **DataTableComponent** for filtering without tightly coupling them.
- Simple and readable `filterPeople` logic was implemented to match partial inputs from the user against multiple fields.

### 3. **Services**
- `DataService` fetches mock data via HTTP. It uses Angular's `HttpClient` with `providedIn: 'root'` for global availability and singleton behavior.

### 4. **Styling & Layout**
- Used **Flexbox** for layout alignment to ensure the form and table are **centered and spaced properly**.
- Ensured the table displays even with no data, preserving headers for better UX.

### 5. **Template Reference Variables**
- Used `#templateRef` and `ngTemplateOutlet` to conditionally show messages like "No results found" while keeping the UI clean.

---

## 📦 How to Install Dependencies

Before running the project, make sure you have Node.js and Angular CLI installed.

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project directory
cd <project-directory>

# Install dependencies
npm install
