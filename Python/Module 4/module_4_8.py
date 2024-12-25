def write_list_to_file(file_name, data_list):
    try:
        with open(file_name, 'w') as file:
            for item in data_list:
                file.write(f"{item}\n")  # Write each item on a new line
        print(f"List written to '{file_name}' successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
data_list = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]  # Replace with your list
file_name = "output.txt"  # Replace with your desired file name
write_list_to_file(file_name, data_list)
