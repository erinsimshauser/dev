# Organization
- **App.jsx**: the main app that contains different components. Contains the data for the cards, keeps track of items added and removed from the walk schedule, and functions for adding/removing from the walk schedule.
- **FilterList.jx**: contains functions for filtering and sorting through the dog cards, nav bars for selecting filters and sorting, and then passes the filtered list to display list
- **DisplayList.jsx**: handles the UI/visual aspect of displaying the cards on the website. I used react-bootstrap to create cards for each dog and display them in a grid. Each card also has an add button which is a callback function to App.jsx
- **Aggregator.jsx**: displays the items that have been added to the walk schedule. Displays a remove button so users can remove dogs from their schedule and displays the total amount of money
users would make per hour.

# Data pathways
- **App**:
    - passes the list of dog data and the add function to FilterList
    - passes the list of dogs in the schedule, the total rate, and the remove function to Aggregator
- **FilterList**:
    - passes the filtered list and the add function to DisplayList
- **DisplayList + Aggregator**: display the data passed in

# How user interactions can trigger changes in the state of components
- Filtering: state keeps track of current size, activity, and sort filter
    - Filter buttons: trigger change in size or activity, displayed list will update accordingly
    - Sorting buttons: trigger change in sort state and will list items in ascending or descending order
- Walk Schedule: state keeps track of items in the walk schedule and total rate
    - Add: triggers state change by adding selected dog to the walk schedule, also triggers a change in the total rate by adding the selected dog's rate to the total
    - Remove: triggers state change by removing selected dog from the walk schedule, also triggers a change in the total rate by subtracting the selected dog's rate from the total