def count_lines_in_file(file_name):
    try:
        with open(file_name, 'r') as file:
            line_count = sum(1 for line in file)  # Count lines using a generator
        return line_count
    except FileNotFoundError:
        print(f"The file '{file_name}' does not exist.")
        return 0
    except Exception as e:
        print(f"An error occurred: {e}")
        return 0

# Example usage
file_name = "example.txt"  # Replace with your file name
line_count = count_lines_in_file(file_name)

if line_count > 0:
    print(f"The file '{file_name}' has {line_count} lines.")
else:
    print("File is empty or does not exist.")
