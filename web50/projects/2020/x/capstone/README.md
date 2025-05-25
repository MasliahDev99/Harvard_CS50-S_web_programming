# Mundo Campero

## Distinctiveness and Complexity

### Why Mundo Campero is Distinctive

Mundo Campero distinguishes itself through its unique focus on sheep herd management, a niche not commonly explored in typical web development projects. This application integrates real-world agricultural practices into a digital platform, offering a practical tool for farmers and agricultural businesses. By addressing a non-traditional theme with real-world applicability, Mundo Campero provides valuable resources for users in the agricultural sector, setting it apart from more conventional projects.

### Complexity of the Project

The complexity of Mundo Campero is evident in its comprehensive feature set and the technical challenges it addresses. A key decision was to utilize Django signals to automatically populate the list of sheep breeds and purity qualifiers upon migrations, streamlining the setup process. Additionally, the project employs custom APIs built with Django REST Framework to facilitate real-time updates for sheep and sales records, as well as data analyses on sheep quantities and sales types (slaughterhouse, donations, auctions). While previous projects have utilized the Fetch API, Mundo Campero advances this by implementing custom APIs, enhancing the application's responsiveness and user experience.

Although the application is not yet fully complete, future developments are planned to expand its capabilities. All data updates occur in real-time, ensuring a seamless and fluid user experience. This commitment to real-time data processing and the integration of advanced features underscores the project's complexity and innovation.

## Project Overview

### Description

Mundo Campero is a comprehensive web application designed to simplify sheep herd management. Developed as part of CS50’s Web Programming with Python and JavaScript, this project tackles challenges beyond the examples provided in the course. It aims to integrate various agricultural activities into a single application, offering features such as detailed sheep records, sales management, and analytics.

### Features

- **Sheep Management:** Record and update data such as breed, weight, gender, status, and genealogy.
- **Sales Management:** Record individual, batch, or slaughterhouse sales and calculate transaction statistics.
- **Analytics and Statistics:** Display herd statistics and generate graphs for data visualization.
- **Local API Consumption:** Create APIs for dynamic data fetching.
- **Access and Authentication:** Implement user registration and role-based access control.
- **Usability:** Design a responsive, user-friendly interface.

## Project Structure

### Directory Overview

- **`MundoCampero/`**: Contains the main Django application files.
- **`ganaderia/`**: Includes models, views, templates, and static files related to sheep management.
- **`templates/ganaderia/`**: HTML templates for the application.
- **`static/ganaderia/`**: CSS and JavaScript files for styling and functionality.
- **`forms/`**: Likely contains Django forms for handling user input.
- **`signals.py`**: Contains Django signals used for triggering actions automatically during certain events, such as populating data upon migrations.
- **`serializers.py`**: Defines serializers for converting complex data types, like querysets and model instances, into native Python datatypes that can then be easily rendered into JSON or other content types.
- **`utils_descargas.py`**: Utility functions related to downloading or exporting data.
- **`utils.py`**: General utility functions used throughout the application.
- **`requirements.txt`**: Lists all Python packages required to run the application.
- **`test/`**: Contains unit tests for the application.

### Requirements

- Python 3.9+
- Django 4.0+
- Dependencies listed in `requirements.txt`.

### Installation Steps:
1. Clone the repository:  
   ```bash
   git clone https://github.com/your_username/tu-ovino.git
   cd tu-ovino
2. Create a virtual enviroment:

    ```bash
    python3 -m venv  env
    source env/bin/activate  # On Windows: .\env\Scripts\activate

3. Install dependencies:
    ```bash
    pip install -r requirements.txt
  
4. Apply migrations:
   ```bash
   python3 manage.py makemigrations
   python3 manage.py migrations

5. Start server:
    ```bash
    python3 manage.py runserver

6. Clean the database(optional):
   * Flush the database:
   ```bash
   python3 manage.py flush
   ```
   * This command will remove all data from the database.You will be prompted to confirm action.
   * Remove the database file:
   ```bash
      rm -rf db.sqlite3
   ```
   * This command delete the SQLite databse file
   * Clear migration files:
   ```bash
      find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
      find . -path "*/migrations/*.pyc" -delete
   ```
   These commands remove all migration files except for the `__init__.py` file.

### Video Tutorial
[![Watch the tutorial](https://img.youtube.com/vi/u8muzUppjRw/0.jpg)](https://youtu.be/u8muzUppjRw?t=0)



## How to Use Mundo Campero

### Overview

Mundo Campero is designed to centralize all agricultural activities into a single application. Currently, the focus is on sheep management and sales management, with data analysis features for each. The home page introduces users to the philosophy of Mundo Campero, which aims to integrate livestock management, agriculture, marketplace, and job board functionalities.

### User Registration

To use the application, users need to register by providing the name of their establishment, the RUT (national ID) of the company, and the ARU (Rural Association of Uruguay) identifier. While registration with ARU is not mandatory at the moment, it will be required in the future for full functionality.

### Navigation

- **Home:** Users can explore the features of Mundo Campero and view the development roadmap.
- **Hub:** This is the main menu of the app, offering quick access to various sections such as the dashboard, reports, family tree, and documentation. Future updates will include sheep documentation management and report generation.
- **Dashboard:** The control panel where users can manage sheep and sales records, and view data analyses. Users can register sheep, record sales, and analyze sales and sheep data. Future updates will allow for group sheep classification for better management.
- **Sheep and Sales:** Direct access to sheep and sales records.

### Features

- **Recent Activities:** Users can view recent activities and updates.
- **Price Calculator:** A tool for estimating meat prices at slaughterhouses. Future updates will provide real-time price updates.
- **Data Analysis:** Analyze sales and sheep data to gain insights into herd management.

### Future Enhancements

- **Real-Time Price Updates:** Integration with external APIs to provide live meat prices.
- **Sheep Documentation:** Manage and generate reports for sheep documentation.
- **Enhanced Analytics:** Advanced data analysis tools for better decision-making.

By following this guide, users can effectively navigate and utilize the current features of Mundo Campero, while also understanding the future enhancements planned for the application.
