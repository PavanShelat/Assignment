def read_file_into_variable(file_name):
    try:
        with open(file_name, 'r') as file:
            lines = file.readlines()  # Reads all lines into a list
        return lines
    except FileNotFoundError:
        print(f"The file '{file_name}' does not exist.")
        return None
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

# Example usage
file_name = "example.txt"  # Replace with your file name
lines = read_file_into_variable(file_name)

if lines is not None:
    print("File content stored in variable:")
    print(lines)
